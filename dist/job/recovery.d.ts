import type { ChartProgress } from "../types/progress.js";
export declare const temporaryJobSchema: "astral-temporary-job/1.0.0";
export declare const temporaryJobIdPattern: RegExp;
export interface TemporaryJobRecord<T> {
    schema: typeof temporaryJobSchema;
    id: string;
    conversationId: string | null;
    progress: ChartProgress;
    state: T;
    createdAt: string;
    updatedAt: string;
    expiresAt: string;
}
export declare class TemporaryJobStore<T> {
    #private;
    constructor(directory: string, ttlSeconds: number);
    create(progress: ChartProgress, state: T, nowMs?: number): Promise<TemporaryJobRecord<T>>;
    save(id: string, conversationId: string | null, progress: ChartProgress, state: T, nowMs?: number): Promise<TemporaryJobRecord<T> | null>;
    get(id: string, nowMs?: number): Promise<TemporaryJobRecord<T> | null>;
    delete(id: string): Promise<boolean>;
    sweep(nowMs?: number): Promise<number>;
}
//# sourceMappingURL=recovery.d.ts.map