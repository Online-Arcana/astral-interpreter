import type { CorpusAtom, CorpusClaim, CorpusSource } from "./types.js";
export declare const corpusXmlFormat: "astral-corpus-xml/1.0.0";
export interface CorpusXmlDocument {
    name: string;
    xml: string;
}
export interface ParsedCorpusXml {
    sources: CorpusSource[];
    atoms: CorpusAtom[];
    claims: CorpusClaim[];
    categories: string[];
}
export declare const parseCorpusSourceManifestXml: (xml: string, documentName?: string) => CorpusSource[];
export declare const parseCorpusXmlDocument: (xml: string, documentName: string) => {
    category: string;
    atoms: CorpusAtom[];
    claims: CorpusClaim[];
};
export declare const parseReviewedCorpusXml: (sourceManifestXml: string, sourceManifestName: string, documents: readonly CorpusXmlDocument[]) => ParsedCorpusXml;
//# sourceMappingURL=xml.d.ts.map