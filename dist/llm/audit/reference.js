export const internalReferencePattern = /#\/[\p{L}\p{N}_~./-]+/gu;
export const leakedReferences = (value, path) => {
    const matches = [...value.matchAll(internalReferencePattern)].map(([match]) => match);
    return matches.length === 0 ? null : { path, references: [...new Set(matches)] };
};
export const withoutInternalReferences = (value) => value
    .replaceAll(internalReferencePattern, " ")
    .replaceAll(/\s+([,.;:!?])/gu, "$1")
    .replaceAll(/\s+/gu, " ")
    .trim();
//# sourceMappingURL=reference.js.map