import { reviewedCorpusSources } from "./data/index.js";
/**
 * Compatibility/query facade for corpus source metadata.
 *
 * The source of truth is `data/xml/sources.xml`. This module deliberately does
 * not define source records in TypeScript; it only queries the records parsed
 * from that XML manifest.
 */
export const corpusSources = reviewedCorpusSources;
export const corpusSource = (id) => corpusSources.find((source) => source.id === id) ?? null;
export const approvedSemanticSource = (id) => {
    const source = corpusSource(id);
    return source?.role === "semantic" && source.reviewStatus === "approved" ? source : null;
};
//# sourceMappingURL=sources.js.map