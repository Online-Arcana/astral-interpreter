import type { ChartProgress } from "../types/progress.js";
export interface JobRecord<T> {
    id: string;
    progress: ChartProgress;
    result: T | null;
    expiresAt: number;
}
export declare class JobStore<T> {
    #private;
    constructor(ttlSeconds: number);
    put(id: string, progress: ChartProgress, result: T | null, nowMs: number): JobRecord<T>;
    get(id: string, nowMs: number): JobRecord<T> | null;
    sweep(nowMs: number): number;
}
//# sourceMappingURL=store.d.ts.map