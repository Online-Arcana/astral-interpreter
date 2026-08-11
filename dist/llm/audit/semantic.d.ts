export type SemanticRole = "strength" | "tension" | "theme";
export interface SemanticProfile {
    id: string;
    field?: string;
    fieldLexicons?: Readonly<Record<string, readonly string[]>>;
}
export interface SemanticIssue {
    code: "wrong_role" | "wrong_field";
    message: string;
}
export declare const semanticRole: (id: string) => SemanticRole | null;
export declare const semanticIssues: (value: string, profile: SemanticProfile) => SemanticIssue[];
//# sourceMappingURL=semantic.d.ts.map