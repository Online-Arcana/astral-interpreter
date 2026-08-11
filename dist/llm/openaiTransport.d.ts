export interface OpenAITransportOptions {
    fetch?: typeof fetch;
    background?: boolean;
    pollIntervalMs?: number;
    pollTimeoutMs?: number;
    createTimeoutMs?: number;
    responseAttempts?: number;
    retryAttempts?: number;
    retryDelayMs?: number;
}
export declare class OpenAITransportError extends Error {
    readonly responseId: string | null;
    readonly responseStatus: string | null;
    readonly timedOut: boolean;
    constructor(message: string, responseId?: string | null, responseStatus?: string | null, cause?: unknown, timedOut?: boolean);
}
export declare const createOpenAITransport: (options?: OpenAITransportOptions) => typeof fetch;
//# sourceMappingURL=openaiTransport.d.ts.map