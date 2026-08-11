export const text = () => ({ type: "string" });
export const textEnum = (values) => {
    if (values.length === 0) {
        throw new Error("Text enum requires at least one permitted value");
    }
    return { type: "string", enum: [...values] };
};
export const nullableText = () => ({
    anyOf: [text(), { type: "null" }],
});
export const list = (items, minItems = 0, maxItems) => ({
    type: "array",
    items,
    minItems,
    ...(maxItems === undefined ? {} : { maxItems }),
});
export const object = (properties) => ({
    type: "object",
    additionalProperties: false,
    properties,
    required: Object.keys(properties),
});
export const literal = (value) => ({
    type: "string",
    const: value,
});
export const strictShape = (name, schema, parse) => ({
    name,
    schema,
    ...(parse === undefined ? {} : { parse }),
});
//# sourceMappingURL=build.js.map