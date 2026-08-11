import type { AstralCalculation, InterpretationUnit } from "../../types/file.js";
import type { CompiledInterpretationCorpus } from "../corpus/compile.js";
import type { InterpretationMap } from "../corpus/types.js";
export interface InterpretationSemanticProvider {
    /** Return the complete neutral semantic map for one planned interpretation unit. */
    mapFor(calculation: AstralCalculation, unit: InterpretationUnit): InterpretationMap;
}
export declare const semanticProviderFromCorpus: (corpus: CompiledInterpretationCorpus) => InterpretationSemanticProvider;
//# sourceMappingURL=provider.d.ts.map