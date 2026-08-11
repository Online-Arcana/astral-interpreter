export interface RateLimitState {
    maximum: number;
    effective: number;
    active: number;
    throttles: number;
    retryAfterMs: number | null;
}
export declare class AdaptiveLimiter {
    #private;
    constructor(maximum?: number);
    get state(): RateLimitState;
    run<T>(operation: () => Promise<T>, retries?: number): Promise<T>;
}
//# sourceMappingURL=rateLimit.d.ts.map