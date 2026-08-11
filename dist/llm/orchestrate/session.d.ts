import type { ActiveInterpretationUnit, SchemaClient } from "./types.js";
export interface Counters {
    calls: number;
    retries: number;
    conversations: Set<string>;
}
export declare const paidAttempts = 2;
export declare const count: (value: number, name: string) => number;
export declare const activeCopy: (value: ActiveInterpretationUnit | null) => ActiveInterpretationUnit | null;
export declare const conversation: (client: SchemaClient, counters: Counters) => string | null;
export declare const localConversationId: () => string;
//# sourceMappingURL=session.d.ts.map