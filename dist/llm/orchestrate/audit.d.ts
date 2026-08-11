import type { JsonRef } from "../../types/base.js";
import type { Section } from "../../types/chart.js";
import { type FieldProfile } from "../audit/field.js";
import type { UnitAudit } from "./types.js";
export declare const auditSection: (section: Section, calculation: unknown, allowed: ReadonlySet<JsonRef>, profile: FieldProfile) => UnitAudit<Section>;
//# sourceMappingURL=audit.d.ts.map