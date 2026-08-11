export interface NarrativeEntry {
    path: string;
    value: string;
}
export type PriorNarrative = NarrativeEntry | string;
export type DuplicateKind = "exact" | "near";
export interface DuplicateMatch {
    path: string;
    score: number;
    threshold: number;
    kind: DuplicateKind;
}
export declare const normaliseNarrative: (value: string) => string;
export declare const duplicateMatch: (value: string, path: string, prior: readonly PriorNarrative[]) => DuplicateMatch | null;
//# sourceMappingURL=duplicate.d.ts.map