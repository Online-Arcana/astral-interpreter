import type { JsonRef } from "../../types/base.js";
import { type FieldProfile } from "./field.js";
import type { UnitAudit } from "../orchestrate/types.js";
export declare const auditStructured: <T extends object>(value: T, calculation: unknown, allowed: ReadonlySet<JsonRef>, profile: FieldProfile) => UnitAudit<T>;
//# sourceMappingURL=structured.d.ts.map