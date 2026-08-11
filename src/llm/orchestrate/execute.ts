import type { Config } from "../../config.js";
import { worldviewDiscriminatorErrors, worldviewDiscriminatorInput, worldviewDiscriminatorShape } from "../audit/worldviewDiscriminator.js";
import { coherenceIssues, conflictingUnits } from "./coherence.js";
import { foundationPlan, wavePlan, type LanePlan } from "./planner.js";
import { AdaptiveLimiter } from "./rateLimit.js";
import { buildSnapshot, snapshotInput, snapshotText, type InterpretationSnapshot } from "./snapshot.js";
import { fieldsFromAuditErrors, reconstructUnit } from "../reconstruct/reconstruct.js";
import type {
  ActiveInterpretationUnit,
  InterpretationCall,
  InterpretationCheckpoint,
  InterpretationFailureKind,
  InterpretationRecovery,
  InterpretationRun,
  LaneCheckpoint,
  RunHooks,
  SchemaClient,
  SchemaClientFactory,
  SnapshotCheckpoint,
  UnitAudit,
  UnitContext,
  UnitResult,
  WaveCheckpoint,
} from "./types.js";


export interface Counters {
  calls: number;
  retries: number;
  conversations: Set<string>;
}

interface ExecutionOptions {
  calculation: unknown;
  unit: InterpretationCall;
  client: SchemaClient;
  createClient: SchemaClientFactory;
  config: Config;
  limiter: AdaptiveLimiter;
  hooks: RunHooks;
  earlier: Readonly<Record<string, UnitResult<object>>>;
  snapshot: InterpretationSnapshot | null;
  remoteFileId: string | null;
  counters: Counters;
  resume: ActiveInterpretationUnit | null;
  correction: readonly string[];
  onState(active: ActiveInterpretationUnit | null): Promise<void>;
}

export const paidAttempts = 2;

const entryModelFor = (config: Config, kind: InterpretationCall["kind"]): string =>
  kind === "big" ? config.openai.bigModel : config.openai.smallModel;

const escalationModelFor = (config: Config, kind: InterpretationCall["kind"]): string =>
  kind === "big" ? config.openai.bigEscalationModel : config.openai.smallEscalationModel;

const modelFor = (config: Config, unit: InterpretationCall, attempt: number): string =>
  attempt <= 1 ? entryModelFor(config, unit.kind) : escalationModelFor(config, unit.kind);

const effortFor = (config: Config, unit: InterpretationCall, attempt: number): string =>
  attempt > 1 && unit.kind === "small" ? "low" : unit.effort ?? config.openai.reasoning;

const tokensFor = (config: Config, unit: InterpretationCall): number =>
  Math.min(unit.tokens ?? config.openai.maxOutputTokens, config.openai.maxOutputTokens);

export const count = (value: number, name: string): number => {
  if (!Number.isSafeInteger(value) || value < 0) throw new Error(`${name} must be a non-negative integer`);
  return value;
};

export const activeCopy = (value: ActiveInterpretationUnit | null): ActiveInterpretationUnit | null => {
  if (value === null) return null;
  return {
    id: value.id,
    attempt: value.attempt,
    correction: [...value.correction],
    ...(value.failureKind === undefined ? {} : { failureKind: value.failureKind }),
  };
};

export const conversation = (client: SchemaClient, counters: Counters): string | null => {
  const id = client.id;
  if (!id) return null;
  counters.conversations.add(id);
  return id;
};

export const localConversationId = (): string =>
  `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;

const rawText = (cause: unknown): string => {
  if (typeof cause !== "object" || cause === null) return "";
  const candidate = (cause as Record<string, unknown>)["rawText"];
  return typeof candidate === "string" ? candidate : "";
};

const responseStatus = (cause: unknown): string | null => {
  if (typeof cause !== "object" || cause === null) return null;
  const candidate = (cause as Record<string, unknown>)["responseStatus"];
  return typeof candidate === "string" ? candidate : null;
};

const httpStatus = (cause: unknown): number | null => {
  if (typeof cause !== "object" || cause === null) return null;
  const candidate = (cause as Record<string, unknown>)["status"];
  return typeof candidate === "number" ? candidate : null;
};

const truncation = (cause: unknown): boolean => {
  if (responseStatus(cause) === "incomplete") return true;
  const raw = rawText(cause).trim();
  if (raw.length === 0) return false;
  return !/[}\]]\s*$/u.test(raw) || /[,;:\-–—]\s*$/u.test(raw);
};

const failureKind = (cause: unknown): InterpretationFailureKind => {
  if (httpStatus(cause) === 429) return "rate_limit";
  if (truncation(cause)) return "truncation";
  if (responseStatus(cause) === "failed") return "transport";
  if (cause instanceof Error && /timeout|deadline|timed out/iu.test(cause.message)) return "timeout";
  if (rawText(cause).length > 0) return "schema";
  return "transport";
};

const objectCandidate = (value: unknown): object | null =>
  typeof value === "object" && value !== null && !Array.isArray(value) ? value : null;

const candidateFromCause = (cause: unknown): object | null => {
  const raw = rawText(cause).trim();
  if (raw.length === 0) return null;
  const attempts = [raw];
  const first = raw.indexOf("{");
  const last = raw.lastIndexOf("}");
  if (first >= 0 && last > first) attempts.push(raw.slice(first, last + 1));
  for (const attempt of attempts) {
    try {
      const value = objectCandidate(JSON.parse(attempt));
      if (value !== null) return value;
    } catch {
      // A malformed partial response remains available only as an audit reason.
    }
  }
  return null;
};

const callInput = (
  unit: InterpretationCall,
  context: UnitContext,
  snapshot: InterpretationSnapshot | null,
  remoteFileId: string | null,
): unknown => {
  const input = unit.input(context);
  return snapshot === null ? input : snapshotInput(remoteFileId, snapshot, input);
};

export const safeAudit = (
  unit: InterpretationCall,
  value: object,
  context: UnitContext,
): UnitAudit<object> => {
  try {
    return unit.audit(value, context);
  } catch (cause: unknown) {
    return {
      valid: false,
      value,
      errors: [`Audit threw: ${cause instanceof Error ? cause.message : String(cause)}`],
      repair: "audit",
    };
  }
};

const resolveWorldviewReview = async (
  options: ExecutionOptions,
  audit: UnitAudit<object>,
): Promise<UnitAudit<object>> => {
  const review = audit.worldviewReview ?? [];
  if (!audit.valid || review.length === 0) return audit;

  const client = options.createClient();
  options.counters.calls += 1;
  try {
    const result = await options.limiter.run(() => client.run(
      worldviewDiscriminatorShape,
      worldviewDiscriminatorInput(options.unit.id, audit.value, review),
      {
        body: {
          model: options.config.openai.smallModel,
          store: false,
          reasoning: { effort: "none" },
          max_output_tokens: 512,
        },
        retries: 0,
      },
    ));
    conversation(client, options.counters);
    const errors = worldviewDiscriminatorErrors(result);
    if (errors.length === 0) {
      return { ...audit, worldviewReview: [] };
    }
    return {
      ...audit,
      valid: false,
      errors: [...new Set([...audit.errors, ...review, ...errors])],
      soft: true,
      repair: "audit",
    };
  } catch (cause: unknown) {
    conversation(client, options.counters);
    return {
      ...audit,
      valid: false,
      errors: [...new Set([
        ...audit.errors,
        ...review,
        `Worldview discriminator failed closed: ${cause instanceof Error ? cause.message : String(cause)}`,
      ])],
      soft: true,
      repair: "audit",
    };
  }
};

const state = (
  unit: InterpretationCall,
  attempt: number,
  correction: readonly string[],
  kind?: InterpretationFailureKind,
): ActiveInterpretationUnit => ({
  id: unit.id,
  attempt,
  correction: [...correction],
  ...(kind === undefined ? {} : { failureKind: kind }),
});

export const reconstructionResult = async (
  options: ExecutionOptions,
  candidates: readonly object[],
  context: UnitContext,
  attempt: number,
  model: string,
  errors: readonly string[],
): Promise<UnitResult<object>> => {
  options.hooks.onRepair?.(options.unit, attempt, "deterministic", errors);
  let rebuilt = reconstructUnit({ unit: options.unit, candidates });
  let audited = await resolveWorldviewReview(options, safeAudit(options.unit, rebuilt.value, context));

  if (!audited.valid) {
    const forced = fieldsFromAuditErrors(options.unit, audited.errors);
    if (forced.size > 0) {
      rebuilt = reconstructUnit({ unit: options.unit, candidates: [rebuilt.value, ...candidates], forceFields: forced });
      audited = await resolveWorldviewReview(options, safeAudit(options.unit, rebuilt.value, context));
    }
  }

  if (options.config.chart.throwOnInterpretationFailure) {
    throw new Error(`Interpretation unit ${options.unit.id} required deterministic reconstruction: ${errors.join("; ")}`);
  }

  const warnings = [...new Set([...rebuilt.warnings, ...audited.errors, ...(audited.worldviewReview ?? [])])];
  if (!audited.valid) options.hooks.onSoftAccept?.(options.unit, attempt, warnings);
  const result: UnitResult<object> = {
    id: options.unit.id,
    value: audited.value,
    attempts: Math.max(1, Math.min(attempt, paidAttempts)),
    model: candidates.length === 0 ? "deterministic" : model,
    provenance: {
      repairedBy: "deterministic",
      repairKind: rebuilt.usedXmlFallback ? "xml_fallback" : "deterministic_reconstruction",
      fallbackFields: [...rebuilt.fallbackFields],
      auditWarnings: warnings,
    },
  };
  options.hooks.onComplete?.(result);
  await options.onState(null);
  return result;
};

export const executeUnit = async (options: ExecutionOptions): Promise<UnitResult<object>> => {
  let correction = [...(options.resume?.correction ?? []), ...options.correction];
  const candidates: object[] = [];
  const resumed = options.resume?.attempt ?? 1;
  const firstAttempt = Number.isSafeInteger(resumed) && resumed >= 1
    ? Math.min(resumed, paidAttempts)
    : 1;
  let lastModel = modelFor(options.config, options.unit, firstAttempt);

  if ((options.resume?.attempt ?? 1) > paidAttempts) {
    const context: UnitContext = { calculation: options.calculation, earlier: options.earlier, correction };
    return reconstructionResult(options, candidates, context, paidAttempts, lastModel, correction);
  }

  for (let attempt = firstAttempt; attempt <= paidAttempts; attempt += 1) {
    const model = modelFor(options.config, options.unit, attempt);
    lastModel = model;
    const context: UnitContext = {
      calculation: options.calculation,
      earlier: options.earlier,
      correction,
    };
    options.hooks.onStart?.(options.unit, attempt, model);
    await options.onState(state(options.unit, attempt, correction));
    options.counters.calls += 1;

    let output: object;
    try {
      output = await options.limiter.run(() => options.client.run(
        options.unit.shape,
        callInput(options.unit, context, options.snapshot, options.remoteFileId),
        {
          body: {
            model,
            store: false,
            reasoning: { effort: effortFor(options.config, options.unit, attempt) },
            max_output_tokens: tokensFor(options.config, options.unit),
          },
          retries: 0,
        },
      ));
      conversation(options.client, options.counters);
    } catch (cause: unknown) {
      conversation(options.client, options.counters);
      const partial = candidateFromCause(cause);
      if (partial !== null) candidates.push(partial);
      const kind = failureKind(cause);
      correction = [
        `Previous output failed before acceptance: ${cause instanceof Error ? cause.message : String(cause)}`,
      ];
      if (attempt < paidAttempts) {
        options.counters.retries += 1;
        options.hooks.onRetry?.(options.unit, attempt, correction);
        await options.onState(state(options.unit, attempt + 1, correction, kind));
        continue;
      }
      await options.onState(state(options.unit, attempt, correction, kind));
      return reconstructionResult(options, candidates, context, attempt, model, correction);
    }

    const audited = await resolveWorldviewReview(options, safeAudit(options.unit, output, context));
    candidates.push(audited.value);
    if (audited.valid) {
      const result: UnitResult<object> = { id: options.unit.id, value: audited.value, attempts: attempt, model };
      options.hooks.onComplete?.(result);
      await options.onState(null);
      return result;
    }

    await options.hooks.onReject?.(options.unit, attempt, model, output, audited);
    correction = [...audited.errors];
    if (attempt < paidAttempts) {
      options.counters.retries += 1;
      options.hooks.onRetry?.(options.unit, attempt, correction);
      await options.onState(state(
        options.unit,
        attempt + 1,
        correction,
        audited.repair === "completion" ? "truncation" : "audit",
      ));
      continue;
    }
    await options.onState(state(
      options.unit,
      attempt,
      correction,
      audited.repair === "completion" ? "truncation" : "audit",
    ));
    return reconstructionResult(options, candidates, context, attempt, model, correction);
  }

  const context: UnitContext = { calculation: options.calculation, earlier: options.earlier, correction };
  return reconstructionResult(options, candidates, context, paidAttempts, lastModel, correction);
};

