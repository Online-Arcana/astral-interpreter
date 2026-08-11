import type { Config } from "../../config.js";
import type { InterpretationSemanticProvider } from "../../interpretation/map/provider.js";
import type { AstralCalculation } from "../../types/file.js";
import type { InterpretationRecovery, InterpretationRun, RunHooks, SchemaClientFactory } from "./types.js";
export declare const promptCatalogue: "astral-prompts/1.4.0";
export declare const structuredOutputCatalogue: "astral-structured-output/1.1.0";
export declare const nlpAuditProfile: "astral-nlp-audit/1.2.0";
export declare const modelRoutingProfile: "astral-model-routing/1.2.0";
export interface PlanInterpretationResult {
    run: InterpretationRun;
    generatedName: string | null;
}
export { interpretationCalls } from "./calls.js";
export declare const deterministicInterpretationPlan: (calculation: AstralCalculation, hooks?: RunHooks, cause?: unknown, semanticProvider?: InterpretationSemanticProvider | null) => PlanInterpretationResult;
export declare const runInterpretationPlan: (calculation: AstralCalculation, config: Config, createClient: SchemaClientFactory, hooks?: RunHooks, recovery?: InterpretationRecovery | null, semanticProvider?: InterpretationSemanticProvider | null) => Promise<PlanInterpretationResult>;
//# sourceMappingURL=plan.d.ts.map