import { type CompiledInterpretationCorpus } from "../compile.js";
import type { CorpusAtom, CorpusClaim, CorpusSource } from "../types.js";
/** The authored production corpus is XML; these arrays are parsed runtime records. */
export declare const reviewedCorpusOrigin: "xml";
export declare const reviewedCorpusSources: readonly CorpusSource[];
export declare const reviewedCorpusAtoms: readonly CorpusAtom[];
export declare const reviewedCorpusClaims: readonly CorpusClaim[];
export declare const reviewedCorpusCategories: readonly string[];
export declare const compileReviewedCorpus: (requireComplete?: boolean) => CompiledInterpretationCorpus;
//# sourceMappingURL=index.d.ts.map