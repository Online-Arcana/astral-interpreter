import type { Config } from "../../config.js";
import { AdaptiveLimiter } from "./rateLimit.js";
import { snapshotInput, type InterpretationSnapshot } from "./snapshot.js";
import { failKind, partial } from "./failure.js";
import { repairUnit, reviewAudit, safeAudit } from "./repair.js";
import { conversation, paidAttempts, type Counters } from "./session.js";
import type {
  ActiveInterpretationUnit,
  InterpretationCall,
  InterpretationFailureKind,
  RunHooks,
  SchemaClient,
  SchemaClientFactory,
  UnitContext,
  UnitResult,
} from "./types.js";

export interface ExecutionOptions {
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

const entryModel = (config: Config, kind: InterpretationCall["kind"]): string =>
  kind === "big" ? config.openai.bigModel : config.openai.smallModel;

const escalationModel = (config: Config, kind: InterpretationCall["kind"]): string =>
  kind === "big" ? config.openai.bigEscalationModel : config.openai.smallEscalationModel;

const model = (config: Config, unit: InterpretationCall, attempt: number): string =>
  attempt <= 1 ? entryModel(config, unit.kind) : escalationModel(config, unit.kind);

const effort = (config: Config, unit: InterpretationCall, attempt: number): string =>
  attempt > 1 && unit.kind === "small" ? "low" : unit.effort ?? config.openai.reasoning;

const tokens = (config: Config, unit: InterpretationCall): number =>
  Math.min(unit.tokens ?? config.openai.maxOutputTokens, config.openai.maxOutputTokens);

const input = (
  unit: InterpretationCall,
  context: UnitContext,
  snapshot: InterpretationSnapshot | null,
  remoteFileId: string | null,
): unknown => {
  const value = unit.input(context);
  return snapshot === null ? value : snapshotInput(remoteFileId, snapshot, value);
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

export const executeUnit = async (options: ExecutionOptions): Promise<UnitResult<object>> => {
  let correction = [...(options.resume?.correction ?? []), ...options.correction];
  const candidates: object[] = [];
  const resumed = options.resume?.attempt ?? 1;
  const firstAttempt = Number.isSafeInteger(resumed) && resumed >= 1
    ? Math.min(resumed, paidAttempts)
    : 1;
  let lastModel = model(options.config, options.unit, firstAttempt);

  if ((options.resume?.attempt ?? 1) > paidAttempts) {
    const context: UnitContext = { calculation: options.calculation, earlier: options.earlier, correction };
    return repairUnit(options, candidates, context, paidAttempts, lastModel, correction);
  }

  for (let attempt = firstAttempt; attempt <= paidAttempts; attempt += 1) {
    const selectedModel = model(options.config, options.unit, attempt);
    lastModel = selectedModel;
    const context: UnitContext = {
      calculation: options.calculation,
      earlier: options.earlier,
      correction,
    };
    options.hooks.onStart?.(options.unit, attempt, selectedModel);
    await options.onState(state(options.unit, attempt, correction));
    options.counters.calls += 1;

    let output: object;
    try {
      output = await options.limiter.run(() => options.client.run(
        options.unit.shape,
        input(options.unit, context, options.snapshot, options.remoteFileId),
        {
          body: {
            model: selectedModel,
            store: false,
            reasoning: { effort: effort(options.config, options.unit, attempt) },
            max_output_tokens: tokens(options.config, options.unit),
          },
          retries: 0,
        },
      ));
      conversation(options.client, options.counters);
    } catch (cause: unknown) {
      conversation(options.client, options.counters);
      const value = partial(cause);
      if (value !== null) candidates.push(value);
      const kind = failKind(cause);
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
      return repairUnit(options, candidates, context, attempt, selectedModel, correction);
    }

    const audited = await reviewAudit(options, safeAudit(options, output, context));
    candidates.push(audited.value);
    if (audited.valid) {
      const result: UnitResult<object> = { id: options.unit.id, value: audited.value, attempts: attempt, model: selectedModel };
      options.hooks.onComplete?.(result);
      await options.onState(null);
      return result;
    }

    await options.hooks.onReject?.(options.unit, attempt, selectedModel, output, audited);
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
    return repairUnit(options, candidates, context, attempt, selectedModel, correction);
  }

  const context: UnitContext = { calculation: options.calculation, earlier: options.earlier, correction };
  return repairUnit(options, candidates, context, paidAttempts, lastModel, correction);
};

export { repairUnit as reconstructionResult } from "./repair.js";
export { activeCopy, conversation, count, localConversationId, paidAttempts } from "./session.js";
export type { Counters } from "./session.js";
