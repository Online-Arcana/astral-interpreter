export interface OpenAICostResult {
    startTime: number;
    endTime: number;
    amountUsd: number;
    projectId: string | null;
    lineItem: string | null;
}
export declare const fetchOpenAICosts: (adminKey: string, startTime: number, endTime?: number | null, fetcher?: typeof fetch) => Promise<OpenAICostResult[]>;
//# sourceMappingURL=openaiCosts.d.ts.map