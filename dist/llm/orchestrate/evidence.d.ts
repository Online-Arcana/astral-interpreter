import type { JsonRef } from "../../types/base.js";
import type { AstralCalculation, InterpretationUnit } from "../../types/file.js";
interface SourceValue {
    ref: JsonRef;
    value: unknown;
}
export declare const root: (calculation: AstralCalculation) => {
    "astral-calculation": AstralCalculation;
};
export declare const sources: (calculation: AstralCalculation, refs: readonly JsonRef[]) => SourceValue[];
export declare const sourceRefsFor: (calculation: AstralCalculation, unit: InterpretationUnit) => JsonRef[];
export {};
//# sourceMappingURL=evidence.d.ts.map