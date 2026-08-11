import type { UnitResult } from "./types.js";
export declare const interpretationSnapshotSchema: "astral-interpretation-snapshot/1.0.0";
export interface InterpretationSnapshot {
    schema: typeof interpretationSnapshotSchema;
    revision: number;
    calculationFingerprint: string | null;
    acceptedOrder: string[];
    units: Readonly<Record<string, UnitResult<object>>>;
    sha256: string;
}
export declare const buildSnapshot: (calculation: unknown, accepted: Readonly<Record<string, UnitResult<object>>>, order: readonly string[], revision: number) => Promise<InterpretationSnapshot>;
export declare const snapshotText: (snapshot: InterpretationSnapshot) => string;
/**
 * Conservative JSON token estimate used before a model request is sent. JSON
 * commonly tokenises more densely than ordinary prose, so three UTF-16 code
 * units per token intentionally leaves headroom rather than chasing an exact
 * tokenizer for every configured model.
 */
export declare const snapshotTokenEstimate: (snapshot: InterpretationSnapshot) => number;
export declare const snapshotInput: (fileId: string | null, snapshot: InterpretationSnapshot, input: unknown) => unknown;
//# sourceMappingURL=snapshot.d.ts.map