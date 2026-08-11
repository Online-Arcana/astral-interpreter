import { type PriorNarrative } from "./duplicate.js";
export type AuditCode = "empty" | "placeholder" | "format" | "process_narration" | "disclaimer" | "irrelevant" | "duplicate" | "cross_field_leakage" | "reference_leakage" | "impersonal_voice" | "interpreter_first_person" | "semantic_register_leakage" | "technical_opening" | "technical_density" | "worldview_assumption";
export interface AuditIssue {
    code: AuditCode;
    message: string;
    repairable: boolean;
}
export interface FieldProfile {
    id: string;
    lexicon: readonly string[];
    minLength?: number;
    maxLength?: number;
    priorFields?: readonly PriorNarrative[];
    fieldLexicons?: Readonly<Record<string, readonly string[]>>;
    semanticField?: string;
    /** Private corpus propositions used only to detect overly close wording reuse. */
    semanticPropositions?: readonly string[];
}
export interface FieldAudit {
    valid: boolean;
    value: string;
    repaired: boolean;
    issues: AuditIssue[];
    worldviewReview: string[];
}
export declare const auditField: (input: string, profile: FieldProfile) => FieldAudit;
export declare const auditList: (items: readonly string[], profile: FieldProfile) => {
    valid: boolean;
    values: string[];
    issues: AuditIssue[];
    worldviewReview: string[];
};
export type { NarrativeEntry, PriorNarrative } from "./duplicate.js";
//# sourceMappingURL=field.d.ts.map