import type { InterpretationCall } from "../orchestrate/types.js";
export interface ReconstructionResult {
    value: object;
    fallbackFields: string[];
    warnings: string[];
    usedXmlFallback: boolean;
}
interface ReconstructionOptions {
    unit: InterpretationCall;
    candidates: readonly object[];
    forceFields?: ReadonlySet<string>;
}
export declare const fieldsFromAuditErrors: (unit: InterpretationCall, errors: readonly string[]) => Set<string>;
export declare const reconstructUnit: ({ unit, candidates, forceFields, }: ReconstructionOptions) => ReconstructionResult;
export {};
//# sourceMappingURL=reconstruct.d.ts.map