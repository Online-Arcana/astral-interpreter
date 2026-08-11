import type { JsonRef } from "../../types/base.js";
import type { Aspect, PointId, Sign } from "../../types/astro.js";
import type { AstralCalculation, InterpretationUnit } from "../../types/file.js";
export type SemanticEntityKind = "body" | "point" | "angle" | "house" | "sign" | "aspect" | "pattern" | "derived" | "life-domain" | "compatibility-domain" | "synthesis";
export interface SemanticIngredient {
    kind: SemanticEntityKind;
    atomId: string;
    technicalId: string;
    metadata: Readonly<Record<string, string | number | boolean | null>>;
}
export type InterpretationUnitFamily = "overview" | "big-three" | "point" | "house" | "aspect" | "pattern" | "lunar-phase" | "lunar-nodes" | "lilith" | "eclipse" | "rulership-dignity" | "chart-balance" | "dominant-themes" | "life-domain" | "compatibility-overview" | "compatibility-sign" | "system-synthesis" | "final-synthesis";
export interface DecomposedInterpretationUnit {
    unitId: string;
    family: InterpretationUnitFamily;
    zodiac: AstralCalculation["system"]["zodiac"];
    /** System basis is retained for provenance but is not a semantic ingredient. */
    chartMetadata: {
        zodiac: AstralCalculation["system"]["zodiac"];
        ayanamsha: AstralCalculation["system"]["ayanamsha"];
    };
    ingredients: SemanticIngredient[];
    evidenceRefs: JsonRef[];
    evidence: unknown[];
}
export declare const pointIngredient: (id: PointId) => SemanticIngredient;
export declare const signIngredient: (sign: Sign) => SemanticIngredient;
export declare const houseIngredient: (house: number, metadata?: SemanticIngredient["metadata"]) => SemanticIngredient;
export declare const aspectIngredient: (kind: Aspect["kind"]) => SemanticIngredient;
export declare const pointPlacementIngredients: (calculation: AstralCalculation, id: PointId) => SemanticIngredient[];
export declare const decomposeInterpretationUnit: (calculation: AstralCalculation, unit: InterpretationUnit) => DecomposedInterpretationUnit;
//# sourceMappingURL=decompose.d.ts.map