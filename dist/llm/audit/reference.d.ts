export declare const internalReferencePattern: RegExp;
export interface ReferenceLeak {
    path: string;
    references: string[];
}
export declare const leakedReferences: (value: string, path: string) => ReferenceLeak | null;
export declare const withoutInternalReferences: (value: string) => string;
//# sourceMappingURL=reference.d.ts.map