export const normaliseText = (value) => value
    .normalize("NFKC")
    .toLocaleLowerCase("en-GB")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
export const sentences = (value) => value
    .replace(/\r\n?/gu, "\n")
    .split(/(?<=[.!?])\s+|\n+/u)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
const grams = (value, size = 3) => {
    const text = ` ${normaliseText(value)} `;
    const result = new Map();
    if (text.length < size)
        return result;
    for (let index = 0; index <= text.length - size; index += 1) {
        const gram = text.slice(index, index + size);
        result.set(gram, (result.get(gram) ?? 0) + 1);
    }
    return result;
};
export const cosine = (a, b) => {
    const left = grams(a);
    const right = grams(b);
    let dot = 0;
    let leftNorm = 0;
    let rightNorm = 0;
    for (const value of left.values())
        leftNorm += value * value;
    for (const value of right.values())
        rightNorm += value * value;
    for (const [gram, value] of left)
        dot += value * (right.get(gram) ?? 0);
    return leftNorm === 0 || rightNorm === 0 ? 0 : dot / Math.sqrt(leftNorm * rightNorm);
};
//# sourceMappingURL=text.js.map