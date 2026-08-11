import type { CompiledInterpretationCorpus } from "../corpus/compile.js";
import type { AstralCalculation, InterpretationUnit } from "../../types/file.js";
import { type DecomposedInterpretationUnit } from "./decompose.js";
/**
 * Apply chart-unit composition after technical IDs have been normalised.
 * Recipes use only compiled corpus semantics and deterministic chart facts.
 */
export declare const applyInterpretationRecipe: (corpus: CompiledInterpretationCorpus, calculation: AstralCalculation, _unit: InterpretationUnit, base: DecomposedInterpretationUnit) => DecomposedInterpretationUnit;
//# sourceMappingURL=recipes.d.ts.map