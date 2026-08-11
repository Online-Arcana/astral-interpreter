import { parseCareerInterpretation, parseCompatibilityOverview, parseCrossSystem, parseFinalSynthesis, parseMoneyInterpretation, parseRomanticInterpretation, parseSexualInterpretation, parseSignCompatibility, parseStrictSection, parseSystemSynthesis, } from "../../chart/parse.js";
import { signs } from "astral-core";
import { list, literal, nullableText, object, strictShape, text, textEnum, } from "./build.js";
const refs = (allowed) => allowed.length === 0
    ? list(text(), 0, 0)
    : list(textEnum(allowed), 1);
const sectionProperties = (allowed) => ({
    status: {
        type: "string",
        enum: ["written", "unavailable", "not_applicable"],
    },
    title: text(),
    summary: nullableText(),
    detail: nullableText(),
    themes: list(text()),
    strengths: list(text()),
    tensions: list(text()),
    sourceRefs: refs(allowed),
});
const sectionShape = (name, allowed) => strictShape(name, object(sectionProperties(allowed)), parseStrictSection);
const romance = (allowed) => object({
    ...sectionProperties(allowed),
    affectionStyle: nullableText(),
    courtshipStyle: nullableText(),
    attachmentNeeds: nullableText(),
    preferredPartnerQualities: list(text()),
    relationshipStrengths: list(text()),
    relationshipDifficulties: list(text()),
    commitmentPattern: nullableText(),
});
const sexuality = (allowed) => object({
    ...sectionProperties(allowed),
    desireStyle: nullableText(),
    libidoPattern: nullableText(),
    initiationStyle: nullableText(),
    preferredPace: nullableText(),
    physicalAffection: nullableText(),
    likelyTurnOns: list(text()),
    likelyTurnOffs: list(text()),
    experimentationStyle: nullableText(),
    emotionalSexConnection: nullableText(),
    controlAndSurrender: nullableText(),
    powerDynamics: nullableText(),
    exclusivityPattern: nullableText(),
    sexualCommunication: nullableText(),
    likelyFrustrations: list(text()),
});
const career = (allowed) => object({
    ...sectionProperties(allowed),
    vocationalThemes: list(text()),
    suitableFields: list(text()),
    preferredWorkEnvironment: nullableText(),
    leadershipStyle: nullableText(),
    authorityRelationship: nullableText(),
    ambitionPattern: nullableText(),
    publicReputation: nullableText(),
    careerStrengths: list(text()),
    careerRisks: list(text()),
});
const money = (allowed) => object({
    ...sectionProperties(allowed),
    earningStyle: nullableText(),
    spendingStyle: nullableText(),
    securityNeeds: nullableText(),
    riskTolerance: nullableText(),
    materialStrengths: list(text()),
    financialBlindSpots: list(text()),
});
const synthesis = (allowed) => object({
    centralThemes: list(text()),
    contradictions: list(text()),
    gifts: list(text()),
    growthEdges: list(text()),
    narrative: text(),
    sourceRefs: refs(allowed),
});
const compatibilityOverview = (allowed) => object({
    overview: text(),
    sourceRefs: refs(allowed),
});
const signCompatibility = (sign, allowed) => object({
    sign: literal(sign),
    summary: text(),
    dynamic: text(),
    strengths: list(text()),
    tensions: list(text()),
    attraction: nullableText(),
    sustainability: nullableText(),
    bestExpression: text(),
    sourceRefs: refs(allowed),
});
const crossSystem = (allowed) => object({
    sharedThemes: list(text()),
    tropicalEmphasis: list(text()),
    siderealEmphasis: list(text()),
    apparentContradictions: list(text()),
    reconciliations: list(text()),
    synthesis: text(),
    sourceRefs: refs(allowed),
});
const finalSynthesis = (allowed) => object({
    essence: text(),
    definingThemes: list(text()),
    strongestAssets: list(text()),
    recurringTensions: list(text()),
    relationshipPattern: text(),
    sexualPattern: text(),
    friendshipPattern: text(),
    vocationalPattern: text(),
    moneyPattern: text(),
    developmentalArc: text(),
    closingPortrait: text(),
    sourceRefs: refs(allowed),
});
const safeName = (id) => id
    .replaceAll(/[^A-Za-z0-9_-]/gu, "_")
    .slice(0, 64);
const expectedSign = (id) => {
    const value = id.split(".").at(-1);
    if (!value || !signs.includes(value)) {
        throw new Error(`Compatibility unit ${id} has no valid sign`);
    }
    return value;
};
export const shapeForUnit = (unit, allowedSourceRefs = unit.allowedSourceRefs) => {
    const name = safeName(unit.id);
    switch (unit.section) {
        case "life.romance":
            return strictShape(name, romance(allowedSourceRefs), parseRomanticInterpretation);
        case "life.sexuality":
            return strictShape(name, sexuality(allowedSourceRefs), parseSexualInterpretation);
        case "life.careerAndVocation":
            return strictShape(name, career(allowedSourceRefs), parseCareerInterpretation);
        case "life.moneyAndMaterialSecurity":
            return strictShape(name, money(allowedSourceRefs), parseMoneyInterpretation);
        case "synthesis":
            return strictShape(name, synthesis(allowedSourceRefs), parseSystemSynthesis);
        case "compatibility.overview":
            return strictShape(name, compatibilityOverview(allowedSourceRefs), parseCompatibilityOverview);
        case "compatibility.sign": {
            const sign = expectedSign(unit.id);
            return strictShape(name, signCompatibility(sign, allowedSourceRefs), (value) => parseSignCompatibility(value, sign));
        }
        case "crossSystem":
            return strictShape(name, crossSystem(allowedSourceRefs), parseCrossSystem);
        case "finalSynthesis":
            return strictShape(name, finalSynthesis(allowedSourceRefs), parseFinalSynthesis);
        default:
            return sectionShape(name, allowedSourceRefs);
    }
};
//# sourceMappingURL=chart.js.map