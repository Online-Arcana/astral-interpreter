import type { ExecutionOptions } from "./execute.js";
import type { UnitAudit, UnitContext, UnitResult } from "./types.js";
export declare const safeAudit: (options: Pick<ExecutionOptions, "unit">, value: object, context: UnitContext) => UnitAudit<object>;
export declare const reviewAudit: (options: ExecutionOptions, audit: UnitAudit<object>) => Promise<UnitAudit<object>>;
export declare const repairUnit: (options: ExecutionOptions, candidates: readonly object[], context: UnitContext, attempt: number, model: string, errors: readonly string[]) => Promise<UnitResult<object>>;
//# sourceMappingURL=repair.d.ts.map