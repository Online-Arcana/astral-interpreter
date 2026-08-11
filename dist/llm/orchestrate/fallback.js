import { validateInterpretationMap } from "../../interpretation/corpus/compile.js";
import { reconstructUnit } from "../reconstruct/reconstruct.js";
import { shapeForUnit } from "../schema/chart.js";
import { human, route } from "./call.js";
import { sourceRefsFor } from "./evidence.js";
const fallbackCall = (unit, refs, semanticMap = null) => ({
    id: unit.id,
    label: human(unit.id),
    ...route(unit),
    ...(semanticMap === null ? {} : { semanticMap }),
    shape: shapeForUnit(unit, refs),
    allowedSourceRefs: new Set(refs),
    input: () => ({}),
    audit: (value) => ({ valid: true, value, errors: [] }),
});
const genericFallback = (unit, refs, warning, semanticMap = null) => {
    const call = fallbackCall(unit, refs, semanticMap);
    const rebuilt = reconstructUnit({ unit: call, candidates: [] });
    return {
        id: unit.id,
        value: rebuilt.value,
        attempts: 1,
        model: "deterministic",
        provenance: {
            repairedBy: "deterministic",
            repairKind: rebuilt.usedXmlFallback ? "xml_fallback" : "deterministic_reconstruction",
            fallbackFields: rebuilt.fallbackFields,
            auditWarnings: [...rebuilt.warnings, warning],
        },
    };
};
export const noSourceFallback = (unit) => genericFallback(unit, [], "No unambiguous deterministic source was available for this unit; generic interpretation supplied");
export const semanticMapFor = (calculation, unit, provider) => {
    if (provider === null)
        return null;
    const map = provider.mapFor(calculation, unit);
    if (map.unitId !== unit.id) {
        throw new Error(`Semantic provider returned map ${map.unitId} for interpretation unit ${unit.id}`);
    }
    validateInterpretationMap(map);
    const permitted = new Set(unit.allowedSourceRefs);
    const outside = map.chartEvidence.filter((ref) => !permitted.has(ref));
    if (outside.length > 0) {
        throw new Error(`Interpretation map ${unit.id} contains evidence outside its deterministic source boundary: ${outside.join(", ")}`);
    }
    return map;
};
export const sourceAwareFallback = (calculation, unit, warning, semanticProvider = null) => {
    const refs = sourceRefsFor(calculation, unit);
    if (refs.length === 0)
        return noSourceFallback(unit);
    try {
        const semanticMap = semanticMapFor(calculation, unit, semanticProvider);
        return genericFallback(unit, refs, warning, semanticMap);
    }
    catch (cause) {
        const reason = cause instanceof Error ? cause.message : String(cause);
        return genericFallback(unit, refs, `${warning}; semantic authority unavailable, generic interpretation supplied: ${reason}`);
    }
};
//# sourceMappingURL=fallback.js.map