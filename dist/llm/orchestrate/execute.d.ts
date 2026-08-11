import type { Config } from "../../config.js";
import { AdaptiveLimiter } from "./rateLimit.js";
import { type InterpretationSnapshot } from "./snapshot.js";
import { type Counters } from "./session.js";
import type { ActiveInterpretationUnit, InterpretationCall, RunHooks, SchemaClient, SchemaClientFactory, UnitContext, UnitResult } from "./types.js";
export interface ExecutionOptions {
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
export declare const executeUnit: (options: ExecutionOptions) => Promise<UnitResult<object>>;
export declare const safeAudit: (unit: InterpretationCall, value: object, context: UnitContext) => import("./types.js").UnitAudit<object>;
export { repairUnit as reconstructionResult } from "./repair.js";
export { activeCopy, conversation, count, localConversationId, paidAttempts } from "./session.js";
export type { Counters } from "./session.js";
//# sourceMappingURL=execute.d.ts.map