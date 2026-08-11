export type CompletionCode = "missing_terminal_punctuation" | "unbalanced_delimiter" | "dangling_clause" | "unfinished_sentence" | "missing_required_content";
export interface CompletionIssue {
    path: string;
    code: CompletionCode;
    message: string;
}
export interface CompletionRepair {
    value: string;
    repaired: boolean;
}
export declare const repairTerminalPunctuation: (value: string, path: string) => CompletionRepair;
export declare const auditCompletion: (value: unknown, root?: string) => CompletionIssue[];
export declare const completionIssuesSoft: (issues: readonly CompletionIssue[]) => boolean;
export declare const incompleteOutput: (value: unknown) => boolean;
//# sourceMappingURL=completion.d.ts.map