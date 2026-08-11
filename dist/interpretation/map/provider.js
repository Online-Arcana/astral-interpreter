import { compileInterpretationMap } from "./compile.js";
import { decomposeInterpretationUnit } from "./decompose.js";
import { applyInterpretationRecipe } from "./recipes.js";
export const semanticProviderFromCorpus = (corpus) => {
    if (corpus.worldview !== "agnostic") {
        throw new Error("Interpretation semantic provider requires an agnostic compiled corpus");
    }
    return {
        mapFor: (calculation, unit) => {
            const decomposed = decomposeInterpretationUnit(calculation, unit);
            return compileInterpretationMap(corpus, applyInterpretationRecipe(corpus, calculation, unit, decomposed));
        },
    };
};
//# sourceMappingURL=provider.js.map