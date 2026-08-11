import { type CompiledInterpretationCorpus } from "../corpus/compile.js";
import type { InterpretationMap } from "../corpus/types.js";
import type { DecomposedInterpretationUnit } from "./decompose.js";
export declare const compileInterpretationMap: (corpus: CompiledInterpretationCorpus, unit: DecomposedInterpretationUnit) => InterpretationMap;
export declare const semanticPropositionTexts: (map: InterpretationMap) => string[];
//# sourceMappingURL=compile.d.ts.map