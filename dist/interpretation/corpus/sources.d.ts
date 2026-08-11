import type { CorpusSource } from "./types.js";
/**
 * Compatibility/query facade for corpus source metadata.
 *
 * The source of truth is `data/xml/sources.xml`. This module deliberately does
 * not define source records in TypeScript; it only queries the records parsed
 * from that XML manifest.
 */
export declare const corpusSources: readonly CorpusSource[];
export declare const corpusSource: (id: string) => CorpusSource | null;
export declare const approvedSemanticSource: (id: string) => CorpusSource | null;
//# sourceMappingURL=sources.d.ts.map