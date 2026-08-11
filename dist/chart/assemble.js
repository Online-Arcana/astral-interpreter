import { compatibilityDomains } from "astral-core/web";
import { generatedNamePattern } from "./name.js";
import { auditWorldviewObject, worldviewFailureMessages } from "../interpretation/corpus/worldview.js";
import { refsValid } from "../ref/resolve.js";
import { signs } from "astral-core/web";
import { compatibilityDomain, parseCareerInterpretation, parseCompatibilityOverview, parseFinalSynthesis, parseMoneyInterpretation, parseRomanticInterpretation, parseSexualInterpretation, parseSignCompatibility, parseStrictSection, parseSystemSynthesis, } from "./parse.js";
const pointIds = [
    "sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto",
    "north_node_true", "south_node_true", "north_node_mean", "south_node_mean",
    "ascendant", "descendant", "midheaven", "imum_coeli", "vertex", "antivertex", "east_point",
    "part_of_fortune", "part_of_spirit", "lilith_mean", "lilith_true",
];
const lifeSections = [
    "identityAndPurpose", "emotionalNature", "mindAndCommunication", "romance", "sexuality",
    "committedPartnerships", "homeAndFamily", "childhoodPatterns", "creativityAndSelfExpression",
    "childrenAndNurturing", "friendship", "communityAndGroups", "workStyle", "careerAndVocation",
    "businessAndLeadership", "moneyAndMaterialSecurity", "publicLifeAndAmbition", "conflictAndAssertion",
    "growthAndOpportunity", "restrictionsAndResponsibility", "transformationAndCrisis", "spiritualityAndMeaning",
    "unconsciousPatterns", "wellbeingAndDailyRhythm", "developmentalDirection",
];
const localRef = (value) => `#/${value}`;
const resultMapValid = (calculation, run) => {
    const expected = calculation.interpretationPlan.units.map(({ id }) => id);
    const actual = Object.keys(run.units);
    if (new Set(expected).size !== expected.length)
        throw new Error("Interpretation plan contains duplicate unit IDs");
    if (new Set(actual).size !== actual.length)
        throw new Error("Interpretation run contains duplicate unit IDs");
    const expectedSet = new Set(expected);
    const missing = expected.filter((id) => !(id in run.units));
    const unexpected = actual.filter((id) => !expectedSet.has(id));
    if (missing.length > 0)
        throw new Error(`Interpretation run is missing units: ${missing.join(", ")}`);
    if (unexpected.length > 0)
        throw new Error(`Interpretation run contains unexpected units: ${unexpected.join(", ")}`);
};
const sourceRefs = (value, id) => {
    if (!("sourceRefs" in value) || !Array.isArray(value.sourceRefs)) {
        throw new TypeError(`Interpretation unit ${id} has no sourceRefs array`);
    }
    if (!value.sourceRefs.every((ref) => typeof ref === "string" && ref.startsWith("#/"))) {
        throw new TypeError(`Interpretation unit ${id} contains invalid sourceRefs`);
    }
    return value.sourceRefs;
};
const reader = (calculation, run) => {
    resultMapValid(calculation, run);
    const plan = new Map(calculation.interpretationPlan.units.map((unit) => [unit.id, unit]));
    const root = { "astral-calculation": calculation };
    const result = (id) => {
        const value = run.units[id];
        if (!value)
            throw new Error(`Interpretation unit ${id} is missing`);
        if (value.id !== id)
            throw new Error(`Interpretation result key ${id} contains mismatched ID ${value.id}`);
        if (!Number.isSafeInteger(value.attempts) || value.attempts < 1)
            throw new Error(`Interpretation unit ${id} has invalid attempts`);
        if (value.model.trim().length === 0)
            throw new Error(`Interpretation unit ${id} has no model`);
        return value;
    };
    return {
        result,
        value: (id, parse) => {
            const unit = plan.get(id);
            if (!unit)
                throw new Error(`Interpretation unit ${id} is not in the plan`);
            const parsed = parse(result(id).value);
            if (!refsValid(root, sourceRefs(parsed, id), new Set(unit.allowedSourceRefs))) {
                throw new Error(`Interpretation unit ${id} contains unresolved, unavailable or unpermitted source references`);
            }
            return parsed;
        },
    };
};
const section = (values, id) => values.value(id, parseStrictSection);
const life = (values, zodiac) => {
    const output = {};
    const ordinary = output;
    for (const key of lifeSections) {
        const id = `${zodiac}.life.${key}`;
        switch (key) {
            case "romance":
                output.romance = values.value(id, parseRomanticInterpretation);
                break;
            case "sexuality":
                output.sexuality = values.value(id, parseSexualInterpretation);
                break;
            case "careerAndVocation":
                output.careerAndVocation = values.value(id, parseCareerInterpretation);
                break;
            case "moneyAndMaterialSecurity":
                output.moneyAndMaterialSecurity = values.value(id, parseMoneyInterpretation);
                break;
            default: ordinary[key] = section(values, id);
        }
    }
    return output;
};
const points = (values, zodiac) => {
    const output = {};
    for (const id of pointIds)
        output[id] = section(values, `${zodiac}.point.${id}`);
    return output;
};
const houses = (values, zodiac) => {
    const output = {};
    for (let house = 1; house <= 12; house += 1) {
        output[String(house)] = section(values, `${zodiac}.house.${house}`);
    }
    return output;
};
const system = (calculation, values) => {
    const zodiac = calculation.system.zodiac;
    const deterministic = calculation.system;
    return {
        zodiac,
        overview: section(values, `${zodiac}.overview`),
        bigThree: {
            sun: section(values, `${zodiac}.big-three.sun`),
            moon: section(values, `${zodiac}.big-three.moon`),
            ascendant: section(values, `${zodiac}.big-three.ascendant`),
        },
        points: points(values, zodiac),
        houses: houses(values, zodiac),
        aspects: deterministic.aspects.map(({ id }) => ({ id, section: section(values, `${zodiac}.aspect.${id}`) })),
        patterns: deterministic.patterns.map(({ id }) => ({ id, section: section(values, `${zodiac}.pattern.${id}`) })),
        lunar: {
            phase: section(values, `${zodiac}.lunar.phase`),
            nodes: section(values, `${zodiac}.lunar.nodes`),
            lilith: section(values, `${zodiac}.lunar.lilith`),
        },
        eclipses: {
            atBirth: section(values, `${zodiac}.eclipse.at-birth`),
            prenatalSolar: section(values, `${zodiac}.eclipse.prenatal-solar`),
            prenatalLunar: section(values, `${zodiac}.eclipse.prenatal-lunar`),
        },
        rulershipAndDignity: section(values, `${zodiac}.rulership-dignity`),
        chartBalance: section(values, `${zodiac}.chart-balance`),
        dominantThemes: section(values, `${zodiac}.dominant-themes`),
        life: life(values, zodiac),
        synthesis: values.value(`${zodiac}.synthesis`, parseSystemSynthesis),
    };
};
const domain = (values, zodiac, domainId) => {
    const signValues = {};
    for (const sign of signs) {
        signValues[sign] = values.value(`${zodiac}.compatibility.${domainId}.${sign}`, (value) => parseSignCompatibility(value, sign));
    }
    return compatibilityDomain(domainId, values.value(`${zodiac}.compatibility.${domainId}.overview`, parseCompatibilityOverview), signValues);
};
const compatibility = (values, zodiac) => {
    const domains = {};
    for (const domainId of compatibilityDomains)
        domains[domainId] = domain(values, zodiac, domainId);
    return { zodiac, method: "natal_to_sign_archetype", domains };
};
const subject = (calculation, generatedName) => {
    const provided = calculation.subject.providedName?.trim();
    if (provided) {
        return {
            name: {
                value: provided,
                source: "provided",
                sourceRefs: [localRef("astral-calculation/subject/providedName")],
            },
        };
    }
    if (!generatedName || !generatedNamePattern.test(generatedName)) {
        throw new Error("A generated chart name must contain exactly three hyphenated words when no subject name is provided");
    }
    return {
        name: {
            value: generatedName,
            source: "generated",
            sourceRefs: [localRef("astral-calculation/provenance/calculationFingerprint")],
        },
    };
};
const assertFinalWorldviewNeutrality = (chart) => {
    const audit = auditWorldviewObject(chart, "astral-chart");
    if (audit.safe && !audit.requiresReview)
        return;
    throw new Error(`Final chart failed worldview-neutrality audit: ${worldviewFailureMessages(audit).join("; ")}`);
};
export const assembleChart = (calculation, run, options) => {
    const values = reader(calculation, run);
    if (!calculation.interpretationPlan.units.some(({ id }) => id === "final-synthesis")) {
        throw new Error("Interpretation plan is missing final-synthesis");
    }
    const phases = calculation.interpretationPlan.units.map((unit) => {
        const result = values.result(unit.id);
        return {
            id: unit.id,
            schema: options.unitSchemas?.[unit.id] ?? "astral-interpretation-unit/1.1.0",
            model: result.model,
            attempts: result.attempts,
        };
    });
    const zodiac = calculation.system.zodiac;
    const chart = {
        schema: "astral-chart/1.1.0",
        subject: subject(calculation, options.generatedName),
        zodiac,
        system: system(calculation, values),
        compatibility: compatibility(values, zodiac),
        finalSynthesis: values.value("final-synthesis", parseFinalSynthesis),
        provenance: {
            generatedAt: options.generatedAt,
            bigModel: options.bigModel,
            smallModel: options.smallModel,
            structuredOutputSchema: options.structuredOutputSchema,
            promptCatalogue: options.promptCatalogue,
            astrologyCatalogue: options.astrologyCatalogue,
            nlpAuditProfile: options.nlpAuditProfile,
            interpretationCalls: run.calls,
            retries: run.retries,
            sharedConversation: false,
            orchestration: "bounded_waves",
            conversationCount: run.conversationIds?.length ?? 1,
            waves: run.waves ?? 0,
            snapshotRevision: run.snapshotRevision ?? 0,
            phases,
        },
    };
    assertFinalWorldviewNeutrality(chart);
    return chart;
};
//# sourceMappingURL=assemble.js.map