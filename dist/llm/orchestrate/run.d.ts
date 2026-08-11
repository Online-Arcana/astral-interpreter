import type { Config } from "../../config.js";
import type { InterpretationCall, InterpretationRecovery, InterpretationRun, RunHooks, SchemaClientFactory } from "./types.js";
export declare const runInterpretation: (calculation: unknown, calls: readonly InterpretationCall[], config: Config, createClient: SchemaClientFactory, hooks?: RunHooks, recovery?: InterpretationRecovery | null) => Promise<InterpretationRun>;
//# sourceMappingURL=run.d.ts.map