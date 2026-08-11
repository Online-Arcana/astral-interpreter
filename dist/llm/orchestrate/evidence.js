import { resolveRef, refsValid } from "../../ref/resolve.js";
export const root = (calculation) => ({
    "astral-calculation": calculation,
});
const useful = (calculation, ref) => refsValid(root(calculation), [ref], new Set([ref]));
export const sources = (calculation, refs) => refs.filter((ref) => useful(calculation, ref)).map((ref) => ({ ref, value: resolveRef(root(calculation), ref) }));
export const sourceRefsFor = (calculation, unit) => sources(calculation, unit.allowedSourceRefs).map(({ ref }) => ref);
//# sourceMappingURL=evidence.js.map