import type { JsonRef } from "../types/base.js";
import type { CareerInterpretation, CompatibilityDomainInterpretation, CrossSystemInterpretation, FinalSynthesis, MoneyInterpretation, RomanticInterpretation, Section, SexualInterpretation, SignCompatibilityInterpretation, SystemInterpretation } from "../types/chart.js";
import type { CompatibilityDomain, Sign } from "../types/astro.js";
export declare const parseStrictSection: (input: unknown) => Section;
export declare const parseRomanticInterpretation: (input: unknown) => RomanticInterpretation;
export declare const parseSexualInterpretation: (input: unknown) => SexualInterpretation;
export declare const parseCareerInterpretation: (input: unknown) => CareerInterpretation;
export declare const parseMoneyInterpretation: (input: unknown) => MoneyInterpretation;
export declare const parseSystemSynthesis: (input: unknown) => SystemInterpretation["synthesis"];
export interface CompatibilityOverviewUnit {
    overview: string;
    sourceRefs: JsonRef[];
}
export declare const parseCompatibilityOverview: (input: unknown) => CompatibilityOverviewUnit;
export declare const parseSignCompatibility: (input: unknown, expectedSign: Sign) => SignCompatibilityInterpretation;
export declare const parseCrossSystem: (input: unknown) => CrossSystemInterpretation;
export declare const parseFinalSynthesis: (input: unknown) => FinalSynthesis;
export declare const compatibilityDomain: (domain: CompatibilityDomain, overview: CompatibilityOverviewUnit, signs: CompatibilityDomainInterpretation["signs"]) => CompatibilityDomainInterpretation;
//# sourceMappingURL=parse.d.ts.map