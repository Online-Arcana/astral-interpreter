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


import { activeCopy, conversation, count, executeUnit, localConversationId, paidAttempts, reconstructionResult, type Counters } from "./execute.js";
import { emptyRecovery, emergencyRun, laneCheckpoint, recoveredPlans, restore, restoreStaged, without } from "./recovery.js";

const runCore = async (
  calculation: unknown,
  calls: readonly InterpretationCall[],
  config: Config,
  createClient: SchemaClientFactory,
  hooks: RunHooks,
  recovery: InterpretationRecovery | null,
): Promise<InterpretationRun> => {
  if (calls.length === 0) throw new Error("Interpretation requires at least one unit");
  if (new Set(calls.map(({ id }) => id)).size !== calls.length) throw new Error("Interpretation unit IDs must be unique");

  const recovered = recovery ?? emptyRecovery();
  const completed = restore(calculation, calls, recovered, Math.max(config.chart.maxRetries, paidAttempts));
  const counters: Counters = {
    calls: count(recovered.calls, "Recovery call count"),
    retries: count(recovered.retries, "Recovery retry count"),
    conversations: new Set(recovered.conversationId === null ? [] : [recovered.conversationId]),
  };
  const limiter = new AdaptiveLimiter(config.chart.laneCount ?? 4);
  const order = calls.map(({ id }) => id);
  let foundationComplete = recovered.foundationComplete ?? false;
  let snapshotState: SnapshotCheckpoint | null = recovered.snapshot ?? null;
  let currentWave: WaveCheckpoint | null = recovered.wave ?? null;
  let waveNumber = currentWave?.id ?? 0;
  let primaryConversationId = recovered.conversationId;
  let checkpointTail = Promise.resolve();

  const checkpoint = async (active: ActiveInterpretationUnit | null): Promise<void> => {
    if (hooks.onCheckpoint === undefined) return;
    const value: InterpretationCheckpoint = {
      conversationId: primaryConversationId,
      units: { ...completed },
      calls: counters.calls,
      retries: counters.retries,
      active: activeCopy(active),
      orchestration: "waves",
      foundationComplete,
      snapshot: snapshotState,
      wave: currentWave,
    };
    checkpointTail = checkpointTail.then(async () => { await hooks.onCheckpoint?.(value); });
    await checkpointTail;
  };

  if (!foundationComplete) {
    const maximum = config.chart.foundationUnits ?? 10;
    const remaining = Math.max(0, maximum - Object.keys(completed).length);
    const foundation = remaining === 0 ? [] : foundationPlan(calls, completed, remaining);
    const client = createClient(primaryConversationId ?? undefined);
    let contextTokens = 0;
    for (const unit of foundation) {
      const estimate = unit.tokens ?? 1_800;
      if (contextTokens > 0 && contextTokens + estimate > (config.chart.laneContextTokens ?? 60_000)) break;
      const resume = recovered.active?.id === unit.id ? activeCopy(recovered.active) : null;
      const result = await executeUnit({
        calculation,
        unit,
        client,
        createClient,
        config,
        limiter,
        hooks,
        earlier: completed,
        snapshot: null,
        remoteFileId: null,
        counters,
        resume,
        correction: [],
        onState: checkpoint,
      });
      completed[unit.id] = result;
      unit.onAccept?.(result.value);
      contextTokens += estimate;
      primaryConversationId = conversation(client, counters) ?? primaryConversationId;
      await checkpoint(null);
    }
    foundationComplete = true;
    await checkpoint(null);
  }

  let snapshot = await buildSnapshot(calculation, completed, order, snapshotState?.revision ?? 0);
  snapshotState = {
    revision: snapshot.revision,
    sha256: snapshot.sha256,
    remoteFileId: snapshotState?.sha256 === snapshot.sha256 ? snapshotState.remoteFileId : null,
    acceptedOrder: [...snapshot.acceptedOrder],
  };
  await checkpoint(null);

  while (Object.keys(completed).length < calls.length) {
    const resumingWave = currentWave !== null
      && !currentWave.assembled
      && currentWave.baseSnapshotRevision === snapshot.revision;
    if (!resumingWave) waveNumber += 1;
    const plans = resumingWave
      ? recoveredPlans(calls, currentWave as WaveCheckpoint)
      : wavePlan(calls, completed, config.chart.laneCount ?? 4, config.chart.laneUnits ?? 10);
    if (plans.length === 0) throw new Error("Interpretation planner could not produce a dependency-safe wave");

    const uploader = createClient();
    let remoteFileId = snapshotState.remoteFileId;
    if (remoteFileId === null && uploader.uploadFile !== undefined) {
      const upload = uploader.uploadFile.bind(uploader);
      const uploaded = await limiter.run(() => upload(
        `astral-snapshot-${snapshot.revision}.json`,
        snapshotText(snapshot),
      ));
      remoteFileId = uploaded.id;
      snapshotState = { ...snapshotState, remoteFileId };
    }

    const staged = resumingWave
      ? restoreStaged(calculation, calls, completed, currentWave, Math.max(config.chart.maxRetries, paidAttempts))
      : {};
    const lanes = resumingWave
      ? (currentWave as WaveCheckpoint).lanes.map((lane): LaneCheckpoint => ({
          ...lane,
          assignments: [...lane.assignments],
          completed: [...lane.completed],
          active: activeCopy(lane.active),
          status: lane.status === "complete" && lane.assignments.some((id) => staged[id] === undefined)
            ? "pending"
            : lane.status,
        }))
      : plans.map(laneCheckpoint);
    currentWave = {
      id: waveNumber,
      baseSnapshotRevision: snapshot.revision,
      lanes,
      staged: { ...staged },
      conflicts: resumingWave ? [...(currentWave as WaveCheckpoint).conflicts] : [],
      assembled: false,
    };
    await hooks.onWave?.(currentWave);
    await checkpoint(null);

    const laneRuns = plans.map(async (plan, index): Promise<void> => {
      const lane = lanes[index];
      if (lane === undefined) throw new Error(`Missing checkpoint for ${plan.id}`);
      const client = createClient(lane.conversationId ?? undefined);
      lane.status = "running";
      lane.failureKind = null;
      let contextTokens = 0;
      const local: Record<string, UnitResult<object>> = {};

      for (const unit of plan.units) {
        const existing = staged[unit.id];
        if (existing !== undefined) {
          local[unit.id] = existing;
          if (!lane.completed.includes(unit.id)) lane.completed.push(unit.id);
          continue;
        }
        const estimate = unit.tokens ?? 1_800;
        if (contextTokens > 0 && contextTokens + estimate > (config.chart.laneContextTokens ?? 60_000)) break;
        const resume = lane.active?.id === unit.id ? activeCopy(lane.active) : null;
        const result = await executeUnit({
          calculation,
          unit,
          client,
          createClient,
          config,
          limiter,
          hooks,
          earlier: { ...completed, ...local },
          snapshot,
          remoteFileId,
          counters,
          resume,
          correction: [],
          onState: async (active) => {
            lane.active = activeCopy(active);
            currentWave = { ...(currentWave as WaveCheckpoint), lanes: [...lanes], staged: { ...staged } };
            await checkpoint(active);
          },
        });
        staged[unit.id] = result;
        local[unit.id] = result;
        if (!lane.completed.includes(unit.id)) lane.completed.push(unit.id);
        lane.conversationId = conversation(client, counters);
        lane.active = null;
        contextTokens += estimate;
        currentWave = { ...(currentWave as WaveCheckpoint), lanes: [...lanes], staged: { ...staged } };
        await checkpoint(null);
      }

      lane.status = "complete";
      lane.active = null;
      const laneUnits = Object.fromEntries(lane.completed
        .filter((id) => staged[id] !== undefined)
        .map((id) => [id, staged[id] as UnitResult<object>]));
      const issues = coherenceIssues(laneUnits, "lane");
      if (issues.length > 0) {
        lane.status = "blocked";
        currentWave = {
          ...(currentWave as WaveCheckpoint),
          lanes: [...lanes],
          conflicts: [...new Set([...(currentWave?.conflicts ?? []), ...issues.map(({ message }) => message)])],
          staged: { ...staged },
        };
      }
      await checkpoint(null);
    });

    const outcomes = await Promise.allSettled(laneRuns);
    const failed = outcomes.find((outcome): outcome is PromiseRejectedResult => outcome.status === "rejected");
    if (failed !== undefined) throw failed.reason;

    const waveIssues = coherenceIssues(staged, "wave");
    if (waveIssues.length > 0) {
      const affected = conflictingUnits(waveIssues);
      currentWave = {
        ...(currentWave as WaveCheckpoint),
        conflicts: [...new Set([...(currentWave?.conflicts ?? []), ...waveIssues.map(({ message }) => message)])],
        staged: { ...staged },
      };
      await checkpoint(null);

      for (const id of affected) {
        const unit = calls.find((candidate) => candidate.id === id);
        const prior = staged[id];
        if (unit === undefined || prior === undefined) continue;
        const correction = waveIssues.filter(({ units }) => units.includes(id)).map(({ message }) => message);
        const client = createClient();
        const result = await reconstructionResult({
          calculation,
          unit,
          client,
          createClient,
          config,
          limiter,
          hooks,
          earlier: { ...completed, ...without(staged, id) },
          snapshot,
          remoteFileId,
          counters,
          resume: null,
          correction,
          onState: checkpoint,
        }, [prior.value], {
          calculation,
          earlier: { ...completed, ...without(staged, id) },
          correction,
        }, prior.attempts, prior.model, correction);
        staged[id] = {
          ...result,
          provenance: { ...(result.provenance ?? {}), repairKind: "coherence_reconstruction" },
        };
        currentWave = { ...(currentWave as WaveCheckpoint), staged: { ...staged } };
        await checkpoint(null);
      }

      const remaining = coherenceIssues(staged, "wave");
      if (remaining.length > 0) {
        currentWave = {
          ...(currentWave as WaveCheckpoint),
          conflicts: remaining.map(({ message }) => message),
          staged: { ...staged },
        };
        await checkpoint(null);
        if (config.chart.throwOnInterpretationFailure) {
          throw new Error(`Wave coherence failed: ${remaining.map(({ message }) => message).join("; ")}`);
        }
      }
    }

    for (const id of order) {
      const result = staged[id];
      if (result === undefined) continue;
      completed[id] = result;
      calls.find((call) => call.id === id)?.onAccept?.(result.value);
    }
    currentWave = { ...(currentWave as WaveCheckpoint), staged: { ...staged }, assembled: true };
    snapshot = await buildSnapshot(calculation, completed, order, snapshot.revision + 1);
    snapshotState = {
      revision: snapshot.revision,
      sha256: snapshot.sha256,
      remoteFileId: null,
      acceptedOrder: [...snapshot.acceptedOrder],
    };
    await hooks.onWave?.(currentWave);
    await checkpoint(null);
    currentWave = null;
    await checkpoint(null);
  }

  const conversationIds = [...counters.conversations];
  const conversationId = primaryConversationId ?? conversationIds[0] ?? recovered.conversationId ?? localConversationId();
  if (conversationIds.length === 0) conversationIds.push(conversationId);
  return {
    conversationId,
    units: completed,
    calls: counters.calls,
    retries: counters.retries,
    orchestration: "waves",
    conversationIds,
    snapshotRevision: snapshot.revision,
    waves: waveNumber,
  };
};

export const runInterpretation = async (
  calculation: unknown,
  calls: readonly InterpretationCall[],
  config: Config,
  createClient: SchemaClientFactory,
  hooks: RunHooks = {},
  recovery: InterpretationRecovery | null = null,
): Promise<InterpretationRun> => {
  try {
    return await runCore(calculation, calls, config, createClient, hooks, recovery);
  } catch (cause: unknown) {
    if (config.chart.throwOnInterpretationFailure) throw cause;
    return emergencyRun(calculation, calls, hooks, cause);
  }
};
