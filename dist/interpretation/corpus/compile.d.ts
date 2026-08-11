import type { CorpusAtom, CorpusClaim, CorpusSource, InterpretationMap } from "./types.js";
export declare const corpusPolicyVersion: "astral-corpus-policy/1.1.0";
export declare const interpretationCorpusVersion: "astral-interpretation-corpus/0.2.0";
export interface CorpusBuildInput {
    sources: readonly CorpusSource[];
    atoms: readonly CorpusAtom[];
    claims: readonly CorpusClaim[];
    /** Production builds set this to true. Test and review tooling may compile partial corpora. */
    requireComplete?: boolean;
}
export interface CompiledInterpretationCorpus {
    schema: "astral-interpretation-corpus/1.0.0";
    policyVersion: typeof corpusPolicyVersion;
    corpusVersion: typeof interpretationCorpusVersion;
    worldview: "agnostic";
    sources: readonly CorpusSource[];
    atoms: Readonly<Record<string, CorpusAtom>>;
    claims: Readonly<Record<string, CorpusClaim>>;
}
export declare const validateSourceForSemanticIngestion: (source: CorpusSource, passage: string) => void;
export declare const validateCorpusClaim: (claim: CorpusClaim) => void;
export declare const compileInterpretationCorpus: (input: CorpusBuildInput) => CompiledInterpretationCorpus;
export declare const validateInterpretationMap: (map: InterpretationMap) => void;
//# sourceMappingURL=compile.d.ts.map