export const human = (value) => value
    .replaceAll(/([a-z])([A-Z])/gu, "$1 $2")
    .replaceAll(/[._-]+/gu, " ")
    .replaceAll(/\s+/gu, " ")
    .trim();
export const task = (unit) => {
    const subject = human(unit.section);
    const domain = unit.domain ? ` within the ${human(unit.domain)} compatibility domain` : "";
    return [
        `Write only the final ${subject} interpretation for the selected ${unit.zodiac} zodiac system${domain}.`,
        "Treat the supplied chartEvidence source objects as fixed deterministic facts.",
        "Treat semanticInput as meaning and interpretiveVoice as rendering style; never merge those roles.",
        "Use only references supplied in chartEvidence.permittedSourceRefs.",
        "Put exact local JSON references exclusively in sourceRefs; never include a #/ path or source reference in narrative prose.",
        "Do not mention, compare or import the unselected zodiac system or another ayanamsha.",
        "Do not infer unavailable calculations, add extra fields or merge this field with another interpretation field.",
    ].join("\n");
};
export const correctionInstruction = (unit) => {
    const lines = [
        "Correct only this interpretation unit and return the same strict schema.",
        "Copy every sourceRefs value exactly from chartEvidence.permittedSourceRefs.",
        "Never invent, shorten, translate, normalise or alter a source reference.",
        "Never place a source reference or internal JSON path inside narrative prose.",
        "Write directly to the person using you and your, and lead with human meaning rather than chart mechanics.",
        "Do not begin narrative sentences with a planet, sign, house, aspect, placement or calculation label.",
        "Keep every narrative property semantically distinct.",
        "Do not repeat or lightly paraphrase the summary, detail or another property.",
        "Do not copy or lightly paraphrase semantic proposition wording; express supported meaning afresh in the interpretive voice.",
        "Complete every required property and finish every sentence and list entry.",
        `Use only the selected ${unit.zodiac} zodiac system.`,
    ];
    if (unit.section === "life.romance") {
        lines.push("summary must give the concise overall romantic pattern.", "detail must explain the pattern without repeating the summary.", "affectionStyle must describe how warmth, care or affection is expressed.", "courtshipStyle must describe pursuit, attraction or early romantic approach.", "attachmentNeeds must describe emotional security, closeness, autonomy or reassurance needs.", "commitmentPattern must describe durability, loyalty, exclusivity or independence in commitment.");
    }
    return lines.join("\n");
};
export const lexicon = (unit) => {
    const specific = human(`${unit.section} ${unit.domain ?? ""} ${unit.zodiac}`).toLowerCase().split(" ");
    return [...new Set([
            ...specific,
            "astrology", "chart", "planet", "sign", "house", "aspect", "relationship", "compatibility",
            "theme", "pattern", "strength", "tension",
        ].filter((value) => value.length > 2))];
};
const synth = new Set(["synthesis", "finalSynthesis"]);
export const route = (unit) => {
    if (synth.has(unit.section))
        return { kind: "big", tokens: 6_000 };
    if (unit.section === "overview" || unit.section === "compatibility.overview" || unit.section.startsWith("life.")) {
        return { kind: "big", effort: "low", tokens: 3_200 };
    }
    return { kind: "small", effort: "none", tokens: 1_800 };
};
const narrativeEntries = (value, path, key = null) => {
    if (key === "sourceRefs")
        return [];
    if (typeof value === "string")
        return value.length >= 60 && !value.startsWith("#/") ? [{ path, value }] : [];
    if (value === null || typeof value !== "object")
        return [];
    if (Array.isArray(value))
        return value.flatMap((item, index) => narrativeEntries(item, `${path}[${index}]`));
    return Object.entries(value)
        .flatMap(([childKey, child]) => narrativeEntries(child, `${path}.${childKey}`, childKey));
};
export const acceptedNarratives = (earlier) => Object.entries(earlier).flatMap(([id, raw]) => {
    const value = typeof raw === "object" && raw !== null && "value" in raw
        ? raw.value
        : raw;
    return narrativeEntries(value, id);
});
//# sourceMappingURL=call.js.map