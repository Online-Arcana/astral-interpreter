import type { Config } from "../../config.js";
import { generatedNamePattern } from "../../chart/name.js";
import type { InterpretationSemanticProvider } from "../../interpretation/map/provider.js";
import type { AstralCalculation } from "../../types/file.js";
import { interpretationCalls } from "./calls.js";
import { root } from "./evidence.js";
import { sourceAwareFallback } from "./fallback.js";
import { runInterpretation } from "./run.js";
import type {
  InterpretationCall,
  InterpretationRecovery,
  InterpretationRun,
  RunHooks,
  SchemaClientFactory,
  UnitResult,
} from "./types.js";

export const promptCatalogue = "astral-prompts/1.4.0" as const;
export const structuredOutputCatalogue = "astral-structured-output/1.1.0" as const;
export const nlpAuditProfile = "astral-nlp-audit/1.2.0" as const;
export const modelRoutingProfile = "astral-model-routing/1.2.0" as const;

export interface PlanInterpretationResult {
  run: InterpretationRun;
  generatedName: string | null;
}

export { interpretationCalls } from "./calls.js";

const recoveryAwareCalls = (
  calls: readonly InterpretationCall[],
  recovery: InterpretationRecovery | null,
): InterpretationCall[] => calls.map((call) => {
  const migrated = recovery?.units[call.id];
  if (migrated?.provenance?.migratedFromVersion === undefined) return call;
  return {
    ...call,
    audit: (value, context) => value === migrated.value
      ? { valid: true, value, errors: [] }
      : call.audit(value, context),
  };
});

const localRun = (
  units: Readonly<Record<string, UnitResult<object>>>,
  cause: string,
): InterpretationRun => {
  const id = `local-plan-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  const annotated = Object.fromEntries(Object.entries(units).map(([key, result]) => [key, {
    ...result,
    provenance: {
      ...(result.provenance ?? {}),
      auditWarnings: [...(result.provenance?.auditWarnings ?? []), cause],
    },
  }]));
  return {
    conversationId: id,
    units: annotated,
    calls: 0,
    retries: 0,
    orchestration: "waves",
    conversationIds: [id],
    snapshotRevision: 0,
    waves: 0,
  };
};

export const deterministicInterpretationPlan = (
  calculation: AstralCalculation,
  hooks: RunHooks = {},
  cause: unknown = "Deterministic interpretation requested",
  semanticProvider: InterpretationSemanticProvider | null = null,
): PlanInterpretationResult => {
  const warning = `Deterministic plan fallback: ${cause instanceof Error ? cause.message : String(cause)}`;
  const units: Record<string, UnitResult<object>> = {};
  for (const unit of calculation.interpretationPlan.units) {
    const result = sourceAwareFallback(calculation, unit, warning, semanticProvider);
    units[unit.id] = result;
    try { hooks.onComplete?.(result); } catch { /* Diagnostics must not block customer delivery. */ }
  }
  return {
    run: localRun(units, warning),
    generatedName: calculation.subject.providedName === null ? "Cosmic-pattern-portrait" : null,
  };
};

const runPlan = async (
  calculation: AstralCalculation,
  config: Config,
  createClient: SchemaClientFactory,
  hooks: RunHooks,
  recovery: InterpretationRecovery | null,
  semanticProvider: InterpretationSemanticProvider | null,
): Promise<PlanInterpretationResult> => {
  const prepared = interpretationCalls(calculation, semanticProvider);
  const calls = recoveryAwareCalls(prepared.calls, recovery);
  const raw = calls.length === 0
    ? localRun(prepared.synthetic, "All interpretation units used deterministic fallback")
    : await runInterpretation(root(calculation), calls, config, createClient, hooks, recovery);
  const generated = raw.units["generated-name"]?.value as { value?: unknown } | undefined;
  const generatedName = calculation.subject.providedName === null
    ? typeof generated?.value === "string" && generatedNamePattern.test(generated.value)
      ? generated.value
      : "Cosmic-pattern-portrait"
    : null;

  const units: Record<string, UnitResult<object>> = {};
  for (const unit of calculation.interpretationPlan.units) {
    const value = raw.units[unit.id]
      ?? prepared.synthetic[unit.id]
      ?? sourceAwareFallback(
        calculation,
        unit,
        "Interpretation assembly supplied the final field fallback",
        semanticProvider,
      );
    units[unit.id] = value;
  }

  return { run: { ...raw, units }, generatedName };
};

export const runInterpretationPlan = async (
  calculation: AstralCalculation,
  config: Config,
  createClient: SchemaClientFactory,
  hooks: RunHooks = {},
  recovery: InterpretationRecovery | null = null,
  semanticProvider: InterpretationSemanticProvider | null = null,
): Promise<PlanInterpretationResult> => {
  try {
    return await runPlan(calculation, config, createClient, hooks, recovery, semanticProvider);
  } catch (cause: unknown) {
    if (config.chart.throwOnInterpretationFailure) throw cause;
    return deterministicInterpretationPlan(calculation, hooks, cause, semanticProvider);
  }
};
