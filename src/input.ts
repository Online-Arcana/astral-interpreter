import type { Calculation } from "astral-core/web";
import { buildPlan } from "./plan/build.js";
import type { PreferredGender } from "./types/base.js";
import type { AstralCalculation } from "./types/file.js";

export interface Subject { name?: string; language?: string; gender?: PreferredGender; }
export const prepare = (calculation: Calculation, subject: Subject = {}): AstralCalculation => ({
  ...calculation,
  schema: "astral-calculation/1.1.0",
  subject: {
    providedName: subject.name?.trim() || null,
    language: subject.language?.trim() || "en",
    adult: true,
    preferredGender: subject.gender ?? "male",
  },
  settings: { ...calculation.settings, interpretationMode: calculation.system.zodiac },
  interpretationPlan: buildPlan(calculation.system),
});
