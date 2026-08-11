import { withoutInternalReferences } from "./reference.js";
import { cosine, normaliseText } from "./text.js";
const entry = (value, index) => typeof value === "string" ? { path: `prior[${index}]`, value } : value;
const words = (value) => new Set(normaliseText(withoutInternalReferences(value))
    .split(" ")
    .filter((word) => word.length > 2));
const jaccard = (left, right) => {
    if (left.size === 0 || right.size === 0)
        return 0;
    let intersection = 0;
    for (const word of left)
        if (right.has(word))
            intersection += 1;
    return intersection / (left.size + right.size - intersection);
};
export const normaliseNarrative = (value) => normaliseText(withoutInternalReferences(value));
export const duplicateMatch = (value, path, prior) => {
    const normal = normaliseNarrative(value);
    if (normal.length < 60)
        return null;
    const currentWords = words(value);
    let best = null;
    for (const [index, raw] of prior.entries()) {
        const candidate = entry(raw, index);
        if (candidate.path === path)
            continue;
        const candidateNormal = normaliseNarrative(candidate.value);
        if (candidateNormal.length < 60)
            continue;
        if (normal === candidateNormal) {
            return { path: candidate.path, score: 1, threshold: 1, kind: "exact" };
        }
        const score = cosine(normal, candidateNormal);
        const overlap = jaccard(currentWords, words(candidate.value));
        const threshold = normal.length >= 180 && candidateNormal.length >= 180 ? 0.92 : 0.94;
        if (score < threshold || overlap < 0.68)
            continue;
        const match = { path: candidate.path, score, threshold, kind: "near" };
        if (best === null || match.score > best.score)
            best = match;
    }
    return best;
};
//# sourceMappingURL=duplicate.js.map