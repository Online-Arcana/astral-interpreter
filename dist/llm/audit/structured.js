import { refsValid } from "../../ref/resolve.js";
import { auditCompletion } from "./completion.js";
import { auditField, auditList, } from "./field.js";
const structuralStrings = new Set(["status", "sign", "domain"]);
const record = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
const report = (state, errors) => {
    state.errors.push(...errors);
};
const reviewWorldview = (state, reasons) => {
    state.worldviewReview.push(...reasons);
};
const keyFor = (path) => {
    const match = path.match(/(?:^|\.)([^.[\]]+)(?:\[\d+\])?$/u);
    return match?.[1] ?? null;
};
const profileAt = (profile, path) => {
    const key = keyFor(path);
    if (key === null)
        return profile;
    const specific = profile.fieldLexicons?.[key];
    if (specific === undefined)
        return profile;
    return {
        ...profile,
        semanticField: key,
        lexicon: [...new Set([...profile.lexicon, ...specific])],
    };
};
const references = (value, state, path) => {
    if (!Array.isArray(value) || !value.every((item) => typeof item === "string" && item.startsWith("#/"))) {
        report(state, [`${path} must contain local JSON references`]);
        return [];
    }
    const refs = value;
    if (!refsValid(state.calculation, refs, state.allowed)) {
        report(state, [`${path} contains unresolved, unavailable or unpermitted source references`]);
    }
    return [...refs];
};
const auditText = (value, state, path) => {
    const profile = profileAt(state.profile, path);
    const result = auditField(value, {
        ...profile,
        id: path,
        priorFields: [...(profile.priorFields ?? []), ...state.earlier],
    });
    if (!result.valid)
        report(state, result.issues.map(({ message }) => message));
    reviewWorldview(state, result.worldviewReview);
    if (result.value.length >= 20)
        state.earlier.push({ path, value: result.value });
    return result.value;
};
const visit = (value, state, path, key) => {
    if (key === "sourceRefs")
        return references(value, state, path);
    if (typeof value === "string") {
        return key !== null && structuralStrings.has(key) ? value : auditText(value, state, path);
    }
    if (value === null || typeof value === "number" || typeof value === "boolean")
        return value;
    if (Array.isArray(value)) {
        if (value.every((item) => typeof item === "string")) {
            const profile = profileAt(state.profile, path);
            const result = auditList(value, {
                ...profile,
                id: path,
                priorFields: [...(profile.priorFields ?? []), ...state.earlier],
            });
            if (!result.valid)
                report(state, result.issues.map(({ message }) => message));
            reviewWorldview(state, result.worldviewReview);
            result.values.forEach((item, index) => {
                if (item.length >= 20)
                    state.earlier.push({ path: `${path}[${index}]`, value: item });
            });
            return result.values;
        }
        return value.map((item, index) => visit(item, state, `${path}[${index}]`, null));
    }
    if (!record(value)) {
        report(state, [`${path} has an unsupported value`]);
        return value;
    }
    const output = {};
    for (const [childKey, child] of Object.entries(value)) {
        output[childKey] = visit(child, state, `${path}.${childKey}`, childKey);
    }
    return output;
};
export const auditStructured = (value, calculation, allowed, profile) => {
    const state = {
        calculation,
        allowed,
        profile,
        earlier: [],
        errors: [],
        worldviewReview: [],
    };
    const audited = visit(value, state, profile.id, null);
    const completion = auditCompletion(audited, profile.id);
    const errors = [...new Set([
            ...state.errors,
            ...completion.map(({ message }) => message),
        ])];
    const worldviewReview = [...new Set(state.worldviewReview)];
    const needsRepair = errors.length > 0;
    const repair = state.errors.length === 0 && completion.length > 0
        ? "completion"
        : "audit";
    return {
        valid: !needsRepair,
        value: audited,
        errors,
        soft: needsRepair,
        ...(needsRepair ? { repair } : {}),
        ...(worldviewReview.length === 0 ? {} : { worldviewReview }),
    };
};
//# sourceMappingURL=structured.js.map