import type { Calculation } from "astral-core/web";
import type { PreferredGender } from "./types/base.js";
import type { AstralCalculation } from "./types/file.js";
export interface Subject {
    name?: string;
    language?: string;
    gender?: PreferredGender;
}
export declare const prepare: (calculation: Calculation, subject?: Subject) => AstralCalculation;
//# sourceMappingURL=input.d.ts.map