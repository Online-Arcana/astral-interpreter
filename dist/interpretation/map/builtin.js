import { compileReviewedCorpus } from "../corpus/data/index.js";
import { semanticProviderFromCorpus } from "./provider.js";
/**
 * The checked-in corpus is compiled once when the interpretation runtime is
 * loaded. `requireComplete=true` makes an incomplete or invalid corpus a startup
 * error rather than silently returning to model-owned astrology semantics.
 */
export const productionInterpretationCorpus = compileReviewedCorpus(true);
export const productionSemanticProvider = semanticProviderFromCorpus(productionInterpretationCorpus);
//# sourceMappingURL=builtin.js.map