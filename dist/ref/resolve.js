const part = (value) => value.replaceAll("~1", "/").replaceAll("~0", "~");
export const resolveRef = (root, ref) => {
    if (!ref.startsWith("#/"))
        throw new Error(`Invalid local JSON reference: ${ref}`);
    let current = root;
    for (const token of ref.slice(2).split("/").map(part)) {
        if (Array.isArray(current)) {
            if (!/^\d+$/u.test(token))
                throw new Error(`Array reference is not an index: ${ref}`);
            current = current[Number(token)];
        }
        else if (current !== null && typeof current === "object") {
            current = current[token];
        }
        else {
            current = undefined;
        }
        if (current === undefined)
            throw new Error(`Unresolved JSON reference: ${ref}`);
    }
    return current;
};
export const refsValid = (root, refs, allowed) => refs.every((ref) => {
    if (!allowed.has(ref))
        return false;
    try {
        const value = resolveRef(root, ref);
        if (value && typeof value === "object" && "status" in value) {
            const status = value.status;
            return status !== "unavailable" && status !== "unsupported";
        }
        return true;
    }
    catch {
        return false;
    }
});
//# sourceMappingURL=resolve.js.map