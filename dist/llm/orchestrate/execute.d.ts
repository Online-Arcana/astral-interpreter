import type { Config } from "../../config.js";
import { AdaptiveLimiter } from "./rateLimit.js";
import { type InterpretationSnapshot } from "./snapshot.js";
import type { ActiveInterpretationUnit, InterpretationCall, RunHooks, SchemaClient, SchemaClientFactory, UnitAudit, UnitContext, UnitResult } from "./types.js";
export interface Counters {
    calls: number;
    retries: number;
    conversations: Set<string>;
}
interface ExecutionOptions {
    calculation: unknown;
    unit: InterpretationCall;
    client: SchemaClient;
    createClient: SchemaClientFactory;
    config: Config;
    limiter: AdaptiveLimiter;
    hooks: RunHooks;
    earlier: Readonly<Record<string, UnitResult<object>>>;
    snapshot: InterpretationSnapshot | null;
    remoteFileId: string | null;
    counters: Counters;
    resume: ActiveInterpretationUnit | null;
    correction: readonly string[];
    onState(active: ActiveInterpretationUnit | null): Promise<void>;
}
export declare const paidAttempts = 2;
export declare const count: (value: number, name: string) => number;
export declare const activeCopy: (value: ActiveInterpretationUnit | null) => ActiveInterpretationUnit | null;
export declare const conversation: (client: SchemaClient, counters: Counters) => string | null;
export declare const localConversationId: () => string;
export declare const safeAudit: (unit: InterpretationCall, value: object, context: UnitContext) => UnitAudit<object>;
export declare const reconstructionResult: (options: ExecutionOptions, candidates: readonly object[], context: UnitContext, attempt: number, model: string, errors: readonly string[]) => Promise<UnitResult<object>>;
export declare const executeUnit: (options: ExecutionOptions) => Promise<UnitResult<object>>;
export {};
//# sourceMappingURL=execute.d.ts.map