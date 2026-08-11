import { buildPlan } from "./plan/build.js";
export const prepare = (calculation, subject = {}) => ({
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
//# sourceMappingURL=input.js.map