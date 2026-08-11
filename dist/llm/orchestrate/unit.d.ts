import type { JsonRef } from "../../types/base.js";
import type { FieldProfile } from "../audit/field.js";
import type { InterpretationCall } from "./types.js";
export interface SectionUnitInput {
    id: string;
    label: string;
    kind?: "big" | "small";
    task: string;
    data: unknown;
    refs: readonly JsonRef[];
    profile: FieldProfile;
}
export declare const sectionUnit: (input: SectionUnitInput) => InterpretationCall;
//# sourceMappingURL=unit.d.ts.map