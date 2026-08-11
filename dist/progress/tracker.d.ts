import type { ChartJobStatus, ChartProgress } from "../types/progress.js";
import type { WorkUnit } from "./work.js";
export interface WaveProgressState {
    id: number;
    staged: Readonly<Record<string, unknown>>;
    lanes: readonly {
        id: string;
        assignments: readonly string[];
        failureKind?: string | null;
    }[];
}
export declare class ProgressTracker {
    #private;
    constructor(jobId: string, units: readonly WorkUnit[], startedAtMs: number, maxAttempts: number);
    restoreAccepted(ids: readonly string[]): void;
    setWave(wave: WaveProgressState | null): void;
    markRetry(id: string): void;
    start(id: string, status: ChartJobStatus, nowMs: number, attempt?: number, modelName?: string | null): void;
    complete(id: string, nowMs: number): void;
    finish(nowMs: number): ChartProgress;
    fail(code: string, message: string, nowMs: number): ChartProgress;
    snapshot(nowMs: number): ChartProgress;
}
//# sourceMappingURL=tracker.d.ts.map