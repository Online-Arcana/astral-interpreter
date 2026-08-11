import type { ResponseUsage } from "../billing/types.js";
import { type OpenAITransportOptions } from "./openaiTransport.js";
import type { SchemaClientFactory } from "./orchestrate/types.js";
export interface OpenAISchemaRuntimeOptions {
    apiKey: string;
    instructions: string;
    metadata?: Record<string, string>;
    base?: string;
    fetch?: typeof fetch;
    transport?: Omit<OpenAITransportOptions, "fetch">;
    /** Conservative total input, history and reserved-output budget per conversation. */
    contextTokenBudget?: number;
    /** Fixed allowance for developer instructions and response framing. */
    contextSafetyTokens?: number;
    /** Receives authoritative token usage from every completed Responses API call. */
    onUsage?: (event: ResponseUsage) => void;
}
/** True only for model input/history capacity failures, not output truncation. */
export declare const contextWindowFailure: (cause: unknown) => boolean;
/** Conservative estimate; JSON is intentionally budgeted at three code units per token. */
export declare const estimateContextTokens: (input: unknown) => number;
/**
 * Remove only the shared chart snapshot while retaining the complete unit input.
 * This is the final fallback when the snapshot alone cannot fit a model window.
 */
export declare const compactSnapshotInput: (value: unknown) => unknown;
export declare const createOpenAISchemaClientFactory: (options: OpenAISchemaRuntimeOptions) => SchemaClientFactory;
//# sourceMappingURL=openaiSchema.d.ts.map