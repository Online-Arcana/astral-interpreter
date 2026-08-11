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


import { localConversationId, safeAudit } from "./execute.js";

export const validateResult = (
  calculation: unknown,
  call: InterpretationCall,
  result: UnitResult<object>,
  earlier: Readonly<Record<string, UnitResult<object>>>,
  maximumAttempts: number,
): UnitResult<object> => {
  if (result.id !== call.id) throw new Error(`Recovered interpretation unit ID mismatch for ${call.id}`);
  if (!Number.isSafeInteger(result.attempts) || result.attempts < 1 || result.attempts > maximumAttempts) {
    throw new Error(`Recovered interpretation attempts are invalid for ${call.id}`);
  }
  if (typeof result.model !== "string" || result.model.length === 0) {
    throw new Error(`Recovered interpretation model is invalid for ${call.id}`);
  }
  const audited = safeAudit(call, result.value, { calculation, earlier, correction: [] });
  const unresolvedWorldview = (audited.worldviewReview?.length ?? 0) > 0;
  if ((!audited.valid || unresolvedWorldview) && result.provenance?.repairedBy !== "deterministic") {
    throw new Error(`Recovered interpretation unit ${call.id} failed audit: ${[...audited.errors, ...(audited.worldviewReview ?? [])].join("; ")}`);
  }
  if (unresolvedWorldview) {
    throw new Error(`Recovered deterministic interpretation unit ${call.id} requires worldview review and must be rebuilt`);
  }
  return { ...result, value: audited.value };
};

export const restore = (
  calculation: unknown,
  calls: readonly InterpretationCall[],
  recovery: InterpretationRecovery,
  maximumAttempts: number,
): Record<string, UnitResult<object>> => {
  const known = new Map(calls.map((call) => [call.id, call]));
  for (const id of Object.keys(recovery.units)) {
    if (!known.has(id)) throw new Error(`Recovery contains unknown interpretation unit ${id}`);
  }

  const completed: Record<string, UnitResult<object>> = {};
  for (const call of calls) {
    const result = recovery.units[call.id];
    if (result === undefined) continue;
    const restored = validateResult(calculation, call, result, completed, maximumAttempts);
    completed[call.id] = restored;
    call.onAccept?.(restored.value);
  }

  const active = recovery.active;
  if (active !== null) {
    const call = known.get(active.id);
    if (call === undefined || completed[active.id] !== undefined) {
      throw new Error("Recovery active unit must be unfinished and present in the interpretation plan");
    }
    if (!Number.isSafeInteger(active.attempt) || active.attempt < 1) {
      throw new Error(`Recovery attempt is invalid for ${active.id}`);
    }
    if (!active.correction.every((value) => typeof value === "string")) {
      throw new Error(`Recovery correction is invalid for ${active.id}`);
    }
  }
  return completed;
};

export const restoreStaged = (
  calculation: unknown,
  calls: readonly InterpretationCall[],
  completed: Readonly<Record<string, UnitResult<object>>>,
  wave: WaveCheckpoint | null,
  maximumAttempts: number,
): Record<string, UnitResult<object>> => {
  if (wave === null || wave.assembled) return {};
  const staged: Record<string, UnitResult<object>> = {};
  const byId = new Map(calls.map((call) => [call.id, call]));
  for (const call of calls) {
    const result = wave.staged[call.id];
    if (result === undefined || completed[call.id] !== undefined) continue;
    staged[call.id] = validateResult(calculation, call, result, { ...completed, ...staged }, maximumAttempts);
  }
  for (const id of Object.keys(wave.staged)) {
    if (!byId.has(id)) throw new Error(`Recovery wave contains unknown interpretation unit ${id}`);
  }
  return staged;
};

export const emptyRecovery = (): InterpretationRecovery => ({
  conversationId: null,
  units: {},
  calls: 0,
  retries: 0,
  active: null,
  orchestration: "waves",
  foundationComplete: false,
  snapshot: null,
  wave: null,
});

export const laneCheckpoint = (plan: LanePlan): LaneCheckpoint => ({
  id: plan.id,
  conversationId: null,
  assignments: plan.units.map(({ id }) => id),
  completed: [],
  active: null,
  status: "pending",
  failureKind: null,
});

export const recoveredPlans = (
  calls: readonly InterpretationCall[],
  wave: WaveCheckpoint,
): LanePlan[] => {
  const known = new Map(calls.map((call) => [call.id, call]));
  return wave.lanes.map((lane) => {
    const units = lane.assignments.map((id) => {
      const call = known.get(id);
      if (call === undefined) throw new Error(`Recovery lane ${lane.id} contains unknown unit ${id}`);
      return call;
    });
    return {
      id: lane.id,
      units,
      estimatedTokens: units.reduce((total, call) => total + (call.tokens ?? 1_800), 0),
    };
  });
};

export const without = (
  values: Readonly<Record<string, UnitResult<object>>>,
  id: string,
): Record<string, UnitResult<object>> => Object.fromEntries(
  Object.entries(values).filter(([key]) => key !== id),
);

export const deterministicUnit = (
  calculation: unknown,
  call: InterpretationCall,
  earlier: Readonly<Record<string, UnitResult<object>>>,
  cause: unknown,
): UnitResult<object> => {
  const rebuilt = reconstructUnit({ unit: call, candidates: [] });
  const audited = safeAudit(call, rebuilt.value, { calculation, earlier, correction: [String(cause)] });
  return {
    id: call.id,
    value: audited.value,
    attempts: 1,
    model: "deterministic",
    provenance: {
      repairedBy: "deterministic",
      repairKind: "xml_fallback",
      fallbackFields: rebuilt.fallbackFields,
      auditWarnings: [...new Set([...rebuilt.warnings, ...audited.errors, ...(audited.worldviewReview ?? []), String(cause)])],
    },
  };
};

export const emergencyRun = (
  calculation: unknown,
  calls: readonly InterpretationCall[],
  hooks: RunHooks,
  cause: unknown,
): InterpretationRun => {
  const units: Record<string, UnitResult<object>> = {};
  for (const call of calls) {
    const result = deterministicUnit(calculation, call, units, cause);
    units[call.id] = result;
    call.onAccept?.(result.value);
    hooks.onComplete?.(result);
  }
  const id = localConversationId();
  return {
    conversationId: id,
    units,
    calls: 0,
    retries: 0,
    orchestration: "waves",
    conversationIds: [id],
    snapshotRevision: 0,
    waves: 0,
  };
};

