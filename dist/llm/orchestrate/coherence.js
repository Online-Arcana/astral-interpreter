/**
 * Separate interpretation units describe different placements, houses, aspects,
 * relationships and conditions. Their conclusions may legitimately pull in
 * different directions: a person can be guarded publicly and warm privately,
 * restrained in one domain and intense in another.
 *
 * Hard validation therefore belongs inside each unit and against deterministic
 * source references. Cross-unit narrative comparison must not rewrite accepted
 * interpretations or stop chart generation. Keep this API as a deliberately
 * non-blocking boundary for recovery-schema compatibility.
 */
export const coherenceIssues = (_units, _scope) => [];
export const conflictingUnits = (issues) => new Set(issues.flatMap(({ units }) => units.slice(1)));
//# sourceMappingURL=coherence.js.map