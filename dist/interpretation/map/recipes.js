import { aspectIngredient, houseIngredient, pointIngredient, pointPlacementIngredients, signIngredient, } from "./decompose.js";
const stop = new Set([
    "a", "an", "and", "as", "at", "be", "by", "can", "for", "from", "in", "into", "is", "it", "of", "on",
    "or", "that", "the", "their", "this", "through", "to", "when", "with", "within", "without",
]);
const stem = (raw) => {
    let word = raw.toLocaleLowerCase("en-GB");
    if (word.endsWith("ies") && word.length > 5)
        return `${word.slice(0, -3)}y`;
    if (word.endsWith("ity") && word.length > 5)
        word = word.slice(0, -3);
    if (word.endsWith("ing") && word.length > 6)
        word = word.slice(0, -3);
    if (word.endsWith("ed") && word.length > 5)
        word = word.slice(0, -2);
    if (word.endsWith("s") && !word.endsWith("ss") && word.length > 4)
        word = word.slice(0, -1);
    return word;
};
const words = (values) => new Set(values
    .flatMap((value) => value.toLocaleLowerCase("en-GB").split(/[^\p{L}\p{N}]+/gu))
    .map(stem)
    .filter((word) => word.length > 2 && !stop.has(word)));
const semanticWords = (corpus, atom) => words([
    atom.plainEnglish,
    ...atom.claimIds.flatMap((claimId) => {
        const claim = corpus.claims[claimId];
        return claim === undefined ? [] : [...claim.tags, claim.proposition];
    }),
]);
const overlap = (left, right) => {
    let score = 0;
    for (const value of left)
        if (right.has(value))
            score += 1;
    return score;
};
const atom = (corpus, id) => corpus.atoms[id] ?? null;
const uniqueIngredients = (values) => {
    const seen = new Set();
    const output = [];
    for (const value of values) {
        if (seen.has(value.atomId))
            continue;
        seen.add(value.atomId);
        output.push(value);
    }
    return output;
};
const pointIds = [
    "sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto",
    "north_node_true", "south_node_true", "ascendant", "descendant", "midheaven", "imum_coeli",
    "vertex", "antivertex", "east_point", "part_of_fortune", "part_of_spirit", "lilith_true",
];
const pointAvailable = (calculation, id) => calculation.system.points[id]?.position?.value !== null
    && calculation.system.points[id]?.position?.value !== undefined;
const houseAvailable = (calculation, number) => {
    const houses = calculation.system.houses?.placidus?.houses;
    if (houses === undefined)
        return false;
    const house = houses[String(number)];
    return house?.cusp?.value !== null && house?.cusp?.value !== undefined;
};
const lifeDomainRecipe = (corpus, calculation, base) => {
    const domainIngredient = base.ingredients[0];
    if (domainIngredient === undefined)
        return base;
    const domainAtom = atom(corpus, domainIngredient.atomId);
    if (domainAtom === null)
        return base;
    const domainWords = semanticWords(corpus, domainAtom);
    const points = pointIds
        .filter((id) => pointAvailable(calculation, id))
        .map((id) => {
        const semantic = pointIngredient(id);
        const pointAtom = atom(corpus, semantic.atomId);
        return { id, score: pointAtom === null ? 0 : overlap(domainWords, semanticWords(corpus, pointAtom)) };
    })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
        .slice(0, 8);
    const houses = Array.from({ length: 12 }, (_, index) => index + 1)
        .filter((number) => houseAvailable(calculation, number))
        .map((number) => {
        const houseAtom = atom(corpus, `house.${number}`);
        return { number, score: houseAtom === null ? 0 : overlap(domainWords, semanticWords(corpus, houseAtom)) };
    })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score || a.number - b.number)
        .slice(0, 5);
    const selected = new Set(points.map(({ id }) => id));
    const ingredients = [domainIngredient];
    for (const { id, score } of points) {
        for (const ingredient of pointPlacementIngredients(calculation, id)) {
            ingredients.push({ ...ingredient, metadata: { ...ingredient.metadata, domainRelevance: score } });
        }
    }
    for (const { number, score } of houses) {
        ingredients.push(houseIngredient(number, { domainRelevance: score }));
    }
    const relevantAspects = (calculation.system.aspects ?? [])
        .filter(({ a, b }) => selected.has(a) || selected.has(b))
        .sort((a, b) => b.strength - a.strength || a.id.localeCompare(b.id))
        .slice(0, 10);
    for (const aspect of relevantAspects) {
        ingredients.push({
            ...aspectIngredient(aspect.kind),
            metadata: {
                a: aspect.a,
                b: aspect.b,
                strength: aspect.strength,
                phase: aspect.phase,
            },
        });
        if (selected.has(aspect.a))
            ingredients.push(pointIngredient(aspect.a));
        if (selected.has(aspect.b))
            ingredients.push(pointIngredient(aspect.b));
    }
    return { ...base, ingredients: uniqueIngredients(ingredients) };
};
const overviewRecipe = (calculation, base) => {
    const ingredients = [...base.ingredients];
    for (const entry of calculation.system.derived?.dominantPlanets?.slice(0, 4) ?? []) {
        if (pointAvailable(calculation, entry.planet)) {
            ingredients.push(...pointPlacementIngredients(calculation, entry.planet));
        }
    }
    for (const entry of calculation.system.derived?.dominantSigns?.slice(0, 4) ?? []) {
        ingredients.push(signIngredient(entry.sign));
    }
    for (const pattern of [...(calculation.system.patterns ?? [])]
        .sort((a, b) => b.strength - a.strength || a.id.localeCompare(b.id))
        .slice(0, 3)) {
        ingredients.push({
            kind: "pattern",
            atomId: `pattern.${pattern.kind.replaceAll("_", "-")}`,
            technicalId: pattern.kind,
            metadata: { strength: pattern.strength },
        });
    }
    return { ...base, ingredients: uniqueIngredients(ingredients) };
};
const weightedCondition = (atomId, technicalId, weight, family) => ({
    kind: "derived",
    atomId,
    technicalId,
    metadata: { weight, balanceFamily: family },
});
const chartBalanceRecipe = (calculation, base) => {
    const balances = calculation.system.derived?.balances;
    if (balances === undefined)
        return base;
    const ingredients = [...base.ingredients];
    ingredients.push(weightedCondition("condition.element-fire", "fire", balances.elements.fire, "element"), weightedCondition("condition.element-earth", "earth", balances.elements.earth, "element"), weightedCondition("condition.element-air", "air", balances.elements.air, "element"), weightedCondition("condition.element-water", "water", balances.elements.water, "element"), weightedCondition("condition.modality-cardinal", "cardinal", balances.modalities.cardinal, "modality"), weightedCondition("condition.modality-fixed", "fixed", balances.modalities.fixed, "modality"), weightedCondition("condition.modality-mutable", "mutable", balances.modalities.mutable, "modality"), weightedCondition("condition.polarity-active", "active", balances.polarities.active, "polarity"), weightedCondition("condition.polarity-receptive", "receptive", balances.polarities.receptive, "polarity"), weightedCondition("condition.hemisphere-eastern", "eastern", balances.hemispheres.eastern, "hemisphere"), weightedCondition("condition.hemisphere-western", "western", balances.hemispheres.western, "hemisphere"), weightedCondition("condition.hemisphere-northern", "northern", balances.hemispheres.northern, "hemisphere"), weightedCondition("condition.hemisphere-southern", "southern", balances.hemispheres.southern, "hemisphere"), weightedCondition("condition.house-mode-angular", "angular", balances.houseModes.angular, "house-mode"), weightedCondition("condition.house-mode-succedent", "succedent", balances.houseModes.succedent, "house-mode"), weightedCondition("condition.house-mode-cadent", "cadent", balances.houseModes.cadent, "house-mode"));
    return { ...base, ingredients: uniqueIngredients(ingredients) };
};
/**
 * Apply chart-unit composition after technical IDs have been normalised.
 * Recipes use only compiled corpus semantics and deterministic chart facts.
 */
export const applyInterpretationRecipe = (corpus, calculation, _unit, base) => {
    if (base.family === "life-domain")
        return lifeDomainRecipe(corpus, calculation, base);
    if (base.family === "overview")
        return overviewRecipe(calculation, base);
    if (base.family === "chart-balance")
        return chartBalanceRecipe(calculation, base);
    return base;
};
//# sourceMappingURL=recipes.js.map