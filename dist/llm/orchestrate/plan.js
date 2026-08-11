import { generatedNamePattern } from "../../chart/name.js";
import { interpretationCalls } from "./calls.js";
import { root } from "./evidence.js";
import { sourceAwareFallback } from "./fallback.js";
import { runInterpretation } from "./run.js";
export const promptCatalogue = "astral-prompts/1.4.0";
export const structuredOutputCatalogue = "astral-structured-output/1.1.0";
export const nlpAuditProfile = "astral-nlp-audit/1.2.0";
export const modelRoutingProfile = "astral-model-routing/1.2.0";
export { interpretationCalls } from "./calls.js";
const recoveryAwareCalls = (calls, recovery) => calls.map((call) => {
    const migrated = recovery?.units[call.id];
    if (migrated?.provenance?.migratedFromVersion === undefined)
        return call;
    return {
        ...call,
        audit: (value, context) => value === migrated.value
            ? { valid: true, value, errors: [] }
            : call.audit(value, context),
    };
});
const localRun = (units, cause) => {
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
export const deterministicInterpretationPlan = (calculation, hooks = {}, cause = "Deterministic interpretation requested", semanticProvider = null) => {
    const warning = `Deterministic plan fallback: ${cause instanceof Error ? cause.message : String(cause)}`;
    const units = {};
    for (const unit of calculation.interpretationPlan.units) {
        const result = sourceAwareFallback(calculation, unit, warning, semanticProvider);
        units[unit.id] = result;
        try {
            hooks.onComplete?.(result);
        }
        catch { /* Diagnostics must not block customer delivery. */ }
    }
    return {
        run: localRun(units, warning),
        generatedName: calculation.subject.providedName === null ? "Cosmic-pattern-portrait" : null,
    };
};
const runPlan = async (calculation, config, createClient, hooks, recovery, semanticProvider) => {
    const prepared = interpretationCalls(calculation, semanticProvider);
    const calls = recoveryAwareCalls(prepared.calls, recovery);
    const raw = calls.length === 0
        ? localRun(prepared.synthetic, "All interpretation units used deterministic fallback")
        : await runInterpretation(root(calculation), calls, config, createClient, hooks, recovery);
    const generated = raw.units["generated-name"]?.value;
    const generatedName = calculation.subject.providedName === null
        ? typeof generated?.value === "string" && generatedNamePattern.test(generated.value)
            ? generated.value
            : "Cosmic-pattern-portrait"
        : null;
    const units = {};
    for (const unit of calculation.interpretationPlan.units) {
        const value = raw.units[unit.id]
            ?? prepared.synthetic[unit.id]
            ?? sourceAwareFallback(calculation, unit, "Interpretation assembly supplied the final field fallback", semanticProvider);
        units[unit.id] = value;
    }
    return { run: { ...raw, units }, generatedName };
};
export const runInterpretationPlan = async (calculation, config, createClient, hooks = {}, recovery = null, semanticProvider = null) => {
    try {
        return await runPlan(calculation, config, createClient, hooks, recovery, semanticProvider);
    }
    catch (cause) {
        if (config.chart.throwOnInterpretationFailure)
            throw cause;
        return deterministicInterpretationPlan(calculation, hooks, cause, semanticProvider);
    }
};
//# sourceMappingURL=plan.js.map