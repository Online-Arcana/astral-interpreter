export type Env = Readonly<Record<string, string | undefined>>;
export interface Config {
    openai: {
        apiKey: string;
        adminKey: string | null;
        bigModel: string;
        bigEscalationModel: string;
        smallModel: string;
        smallEscalationModel: string;
        reasoning: "none" | "low" | "medium" | "high";
        maxOutputTokens: number;
    };
    chart: {
        maxRetries: number;
        throwOnInterpretationFailure: boolean;
        foundationUnits?: number;
        laneCount?: number;
        laneUnits?: number;
        laneContextTokens?: number;
    };
    billing: {
        directory: string;
    };
    jobs: {
        ttlSeconds: number;
    };
}
export declare const readConfig: (env: Env) => Config;
//# sourceMappingURL=config.d.ts.map