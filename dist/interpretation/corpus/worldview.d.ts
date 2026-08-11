export declare const auditWorldviewText: (value: string) => import("./types.js").WorldviewTextAudit;
export declare const auditWorldviewObject: (value: unknown, path?: string) => import("./types.js").WorldviewTextAudit;
export declare const auditSourceNeutrality: (passage: string) => import("./types.js").SourceNeutralityAudit;
export declare const worldviewFailureMessages: (audit: import("./types.js").WorldviewTextAudit) => string[];
export declare const assertAgnosticText: (value: string, context: string) => void;
//# sourceMappingURL=worldview.d.ts.map