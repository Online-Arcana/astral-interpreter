import type { Zodiac } from "../types/astro.js";
export type WorkKind = "local" | "big" | "small";
export type WorkPhase = "deterministic" | "interpretation" | "final";
export interface WorkUnit {
    id: string;
    label: string;
    kind: WorkKind;
    weight: number;
    phase?: WorkPhase;
}
export declare const baseWork: (zodiac?: Zodiac) => WorkUnit[];
//# sourceMappingURL=work.d.ts.map