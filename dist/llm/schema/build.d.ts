import type { StrictShape } from "../orchestrate/types.js";
export type Schema = Record<string, unknown>;
export declare const text: () => Schema;
export declare const textEnum: <T extends string>(values: readonly T[]) => Schema;
export declare const nullableText: () => Schema;
export declare const list: (items: Schema, minItems?: number, maxItems?: number) => Schema;
export declare const object: (properties: Record<string, Schema>) => Schema;
export declare const literal: <T extends string>(value: T) => Schema;
export declare const strictShape: <T extends object>(name: string, schema: Schema, parse?: (value: unknown) => T) => StrictShape<T>;
//# sourceMappingURL=build.d.ts.map