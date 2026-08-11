import type { CalcProvenance, CalcSettings, CalcWarning, Calculation, JsonRef, Zodiac } from "astral-core/web";
import type { PreferredGender } from "./base.js";

export interface InterpretationUnit { id: string; zodiac: Zodiac; section: string; domain: string | null; allowedSourceRefs: JsonRef[]; }
export interface InterpretationPlan { schema: "astral-interpretation-plan/1.1.0"; zodiac: Zodiac; units: InterpretationUnit[]; }
export type CalculationProvenance = CalcProvenance;
export type CalculationWarning = CalcWarning;
export type CalculationSettings = CalcSettings & { interpretationMode: Zodiac };
export interface AstralCalculation extends Omit<Calculation, "schema" | "settings"> {
  schema: "astral-calculation/1.1.0";
  subject: { providedName: string | null; language: string; adult: true; preferredGender: PreferredGender };
  settings: CalculationSettings;
  interpretationPlan: InterpretationPlan;
}
