type RecordValue = Record<string, unknown>;
/**
 * Recover only complete top-level properties from a truncated JSON object.
 * Incomplete strings, arrays and objects are discarded rather than guessed.
 */
export declare const salvagePartialJsonObject: (raw: string) => RecordValue | null;
export {};
//# sourceMappingURL=partialJson.d.ts.map