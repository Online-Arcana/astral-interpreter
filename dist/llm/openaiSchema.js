import { OpenAISchema } from "openai-schema";
import { createOpenAITransport, } from "./openaiTransport.js";
import { salvagePartialJsonObject } from "./reconstruct/partialJson.js";
const bootstrap = {
    name: "astral_bootstrap",
    schema: {
        type: "object",
        additionalProperties: false,
        properties: {},
        required: [],
    },
};
const shape = (value) => ({
    name: value.name,
    schema: value.schema,
    ...(value.parse === undefined ? {} : { parse: value.parse }),
});
const record = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
const positive = (value, fallback, name) => {
    const selected = value ?? fallback;
    if (!Number.isSafeInteger(selected) || selected < 1)
        throw new Error(`${name} must be a positive integer`);
    return selected;
};
const nonNegative = (value) => typeof value === "number" && Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
const outputText = (value) => {
    if (typeof value === "string")
        return value;
    if (Array.isArray(value))
        return value.map(outputText).filter(Boolean).join("\n");
    if (!record(value))
        return "";
    if (typeof value["text"] === "string")
        return value["text"];
    const output = value["output"];
    if (output !== undefined)
        return outputText(output);
    const content = value["content"];
    if (content !== undefined)
        return outputText(content);
    return "";
};
const responseError = (cause) => {
    if (!record(cause))
        return null;
    const id = cause["responseId"];
    const status = cause["responseStatus"];
    return typeof id === "string" && id.length > 0
        ? { id, incomplete: status === "incomplete" }
        : null;
};
const normaliseRawText = (cause) => {
    if (!record(cause) || typeof cause["rawText"] !== "string")
        return;
    const raw = cause["rawText"];
    const salvaged = salvagePartialJsonObject(raw);
    if (salvaged === null)
        return;
    cause["partialRawText"] = raw;
    cause["rawText"] = JSON.stringify(salvaged);
};
const errorText = (cause, depth = 0) => {
    if (depth > 5 || cause === null || cause === undefined)
        return "";
    if (typeof cause === "string")
        return cause;
    if (cause instanceof Error)
        return `${cause.name}: ${cause.message}\n${errorText(cause.cause, depth + 1)}`;
    if (!record(cause))
        return String(cause);
    const parts = Object.entries(cause).flatMap(([key, value]) => {
        if (!["message", "error", "cause", "detail", "details", "body"].includes(key))
            return [];
        return [errorText(value, depth + 1)];
    });
    return parts.join("\n");
};
/** True only for model input/history capacity failures, not output truncation. */
export const contextWindowFailure = (cause) => /(?:input|request|prompt|conversation|context).{0,80}(?:exceeds?|too large|too long|maximum).{0,40}context|context window|maximum context length|too many (?:input )?tokens/iu
    .test(errorText(cause));
const jsonLength = (value) => {
    try {
        return JSON.stringify(value)?.length ?? 0;
    }
    catch {
        return Number.MAX_SAFE_INTEGER;
    }
};
const embeddedSnapshotTokens = (value, depth = 0) => {
    if (depth > 8 || value === null || value === undefined)
        return 0;
    if (Array.isArray(value)) {
        return value.reduce((total, item) => total + embeddedSnapshotTokens(item, depth + 1), 0);
    }
    if (typeof value === "string") {
        if (!value.includes("snapshotTokenEstimate"))
            return 0;
        try {
            return embeddedSnapshotTokens(JSON.parse(value), depth + 1);
        }
        catch {
            return 0;
        }
    }
    if (!record(value))
        return 0;
    const direct = value["snapshotTokenEstimate"];
    const own = typeof direct === "number" && Number.isFinite(direct) && direct > 0
        ? Math.ceil(direct)
        : 0;
    return own + Object.entries(value)
        .filter(([key]) => key !== "snapshotTokenEstimate")
        .reduce((total, [, child]) => total + embeddedSnapshotTokens(child, depth + 1), 0);
};
/** Conservative estimate; JSON is intentionally budgeted at three code units per token. */
export const estimateContextTokens = (input) => {
    const length = jsonLength(input);
    if (!Number.isSafeInteger(length))
        return Number.MAX_SAFE_INTEGER;
    return Math.max(1, Math.ceil(length / 3)) + embeddedSnapshotTokens(input);
};
const snapshotIdentity = (value) => {
    if (!record(value))
        return { omitted: true };
    return {
        omitted: true,
        ...(typeof value["revision"] === "number" ? { revision: value["revision"] } : {}),
        ...(typeof value["sha256"] === "string" ? { sha256: value["sha256"] } : {}),
    };
};
const parsedInputText = (value) => {
    if (!record(value) || value["type"] !== "input_text" || typeof value["text"] !== "string")
        return null;
    try {
        const parsed = JSON.parse(value["text"]);
        return record(parsed) ? parsed : null;
    }
    catch {
        return null;
    }
};
/**
 * Remove only the shared chart snapshot while retaining the complete unit input.
 * This is the final fallback when the snapshot alone cannot fit a model window.
 */
export const compactSnapshotInput = (value) => {
    if (record(value) && record(value["snapshot"]) && "input" in value) {
        return {
            snapshotContext: snapshotIdentity(value["snapshot"]),
            input: value["input"],
        };
    }
    if (!Array.isArray(value))
        return value;
    for (const message of value) {
        if (!record(message) || !Array.isArray(message["content"]))
            continue;
        for (const item of message["content"]) {
            const parsed = parsedInputText(item);
            if (parsed === null || !("input" in parsed))
                continue;
            return {
                snapshotContext: {
                    omitted: true,
                    ...(typeof parsed["snapshotRevision"] === "number" ? { revision: parsed["snapshotRevision"] } : {}),
                    ...(typeof parsed["snapshotSha256"] === "string" ? { sha256: parsed["snapshotSha256"] } : {}),
                },
                input: parsed["input"],
            };
        }
    }
    return value;
};
const outputAllowance = (options) => {
    const value = options.body["max_output_tokens"];
    return typeof value === "number" && Number.isFinite(value) && value > 0 ? Math.ceil(value) : 4_096;
};
const responseUsage = (value) => {
    if (!record(value) || !record(value["usage"]))
        return null;
    const usage = value["usage"];
    const inputDetails = record(usage["input_tokens_details"]) ? usage["input_tokens_details"] : {};
    const outputDetails = record(usage["output_tokens_details"]) ? usage["output_tokens_details"] : {};
    const inputTokens = nonNegative(usage["input_tokens"]);
    const outputTokens = nonNegative(usage["output_tokens"]);
    const totalTokens = nonNegative(usage["total_tokens"]) || inputTokens + outputTokens;
    return {
        responseId: typeof value["id"] === "string" ? value["id"] : null,
        model: typeof value["model"] === "string" ? value["model"] : null,
        usage: {
            inputTokens,
            cachedInputTokens: nonNegative(inputDetails["cached_tokens"]),
            outputTokens,
            reasoningTokens: nonNegative(outputDetails["reasoning_tokens"]),
            totalTokens,
        },
    };
};
const containsKey = (value, key, depth = 0) => {
    if (depth > 8 || value === null || value === undefined)
        return false;
    if (Array.isArray(value))
        return value.some((child) => containsKey(child, key, depth + 1));
    if (!record(value))
        return false;
    if (key in value)
        return true;
    return Object.values(value).some((child) => containsKey(child, key, depth + 1));
};
const purposeOf = (input) => {
    if (containsKey(input, "truncationReason"))
        return "truncation_repair";
    if (containsKey(input, "repairKind")) {
        return containsKey(input, "auditErrors") ? "audit_repair" : "completion_repair";
    }
    return "primary";
};
let clientSequence = 0;
class OpenAISchemaClient {
    #client;
    #instructions;
    #metadata;
    #apiKey;
    #base;
    #fetcher;
    #runtimeBase;
    #budget;
    #safety;
    #onUsage;
    #clientId = `client-${clientSequence += 1}`;
    #captured = [];
    #usedTokens = 0;
    constructor(options, conversationId) {
        this.#instructions = options.instructions;
        this.#metadata = { ...(options.metadata ?? {}) };
        this.#apiKey = options.apiKey;
        this.#runtimeBase = options.base;
        this.#base = (options.base ?? "https://api.openai.com/v1").replace(/\/+$/u, "");
        this.#onUsage = options.onUsage;
        const transport = createOpenAITransport({
            ...(options.transport ?? {}),
            ...(options.fetch === undefined ? {} : { fetch: options.fetch }),
        });
        this.#fetcher = async (input, init) => {
            const response = await transport(input, init);
            if (response.ok) {
                try {
                    const usage = responseUsage(await response.clone().json());
                    if (usage !== null)
                        this.#captured.push(usage);
                }
                catch {
                    // The SDK remains authoritative when a non-Responses payload is returned.
                }
            }
            return response;
        };
        this.#budget = positive(options.contextTokenBudget, 60_000, "OpenAI context token budget");
        this.#safety = positive(options.contextSafetyTokens, 1_024, "OpenAI context safety allowance");
        this.#client = this.#create(conversationId);
    }
    #create(conversationId) {
        return new OpenAISchema(this.#apiKey, bootstrap, conversationId, {
            ...(this.#runtimeBase === undefined ? {} : { base: this.#runtimeBase }),
            fetch: this.#fetcher,
            conversation: true,
            name: "astral_bootstrap",
        });
    }
    #rotate() {
        this.#client = this.#create();
        this.#usedTokens = 0;
    }
    #prepare(input, options) {
        const allowance = outputAllowance(options) + this.#safety;
        let selected = input;
        let compacted = false;
        let tokens = estimateContextTokens(selected) + allowance;
        if (tokens > this.#budget) {
            const reduced = compactSnapshotInput(input);
            if (reduced !== input) {
                selected = reduced;
                compacted = true;
                tokens = estimateContextTokens(selected) + allowance;
            }
        }
        if (this.#usedTokens > 0 && this.#usedTokens + tokens > this.#budget)
            this.#rotate();
        return { input: selected, tokens, compacted };
    }
    #flush(shapeName, configuredModel, purpose, from) {
        const values = this.#captured.splice(from);
        for (const value of values) {
            this.#onUsage?.({
                responseId: value.responseId,
                model: value.model ?? configuredModel,
                shape: shapeName,
                clientId: this.#clientId,
                conversationId: this.#client.id ?? null,
                purpose,
                at: new Date().toISOString(),
                usage: value.usage,
            });
        }
    }
    get id() {
        return this.#client.id;
    }
    async uploadFile(name, content) {
        const body = new FormData();
        body.set("purpose", "user_data");
        body.set("file", new Blob([content], { type: "application/json" }), name);
        const response = await this.#fetcher(`${this.#base}/files`, {
            method: "POST",
            headers: { authorization: `Bearer ${this.#apiKey}` },
            body,
        });
        if (!response.ok)
            throw new Error(`OpenAI snapshot upload failed with HTTP ${response.status}: ${(await response.text()).slice(0, 500)}`);
        const value = await response.json();
        if (!record(value) || typeof value["id"] !== "string" || value["id"].length === 0) {
            throw new Error("OpenAI snapshot upload did not return a file id");
        }
        return { id: value["id"], name, purpose: "user_data" };
    }
    async deleteFile(id) {
        if (id.length === 0)
            throw new Error("OpenAI file id is required");
        const response = await this.#fetcher(`${this.#base}/files/${encodeURIComponent(id)}`, {
            method: "DELETE",
            headers: { authorization: `Bearer ${this.#apiKey}` },
        });
        if (!response.ok && response.status !== 404) {
            throw new Error(`OpenAI snapshot deletion failed with HTTP ${response.status}: ${(await response.text()).slice(0, 500)}`);
        }
        await response.body?.cancel();
    }
    async retrieveResponse(id) {
        const response = await this.#fetcher(`${this.#base}/responses/${encodeURIComponent(id)}`, {
            method: "GET",
            headers: { authorization: `Bearer ${this.#apiKey}` },
        });
        if (!response.ok)
            throw new Error(`OpenAI response retrieval failed with HTTP ${response.status}`);
        return response.json();
    }
    async #run(value, input, options) {
        return this.#client.run(shape(value), input, {
            ...options,
            body: {
                ...options.body,
                instructions: this.#instructions,
                metadata: this.#metadata,
            },
        });
    }
    async run(value, originalInput, options) {
        let input = originalInput;
        let compacted = false;
        let contextFailures = 0;
        const configuredModel = options.body.model;
        const purpose = purposeOf(originalInput);
        for (;;) {
            const prepared = this.#prepare(input, options);
            input = prepared.input;
            compacted ||= prepared.compacted;
            const capturedFrom = this.#captured.length;
            try {
                const result = await this.#run(value, input, options);
                this.#usedTokens += prepared.tokens;
                this.#flush(value.name, configuredModel, purpose, capturedFrom);
                return result;
            }
            catch (cause) {
                this.#flush(value.name, configuredModel, purpose, capturedFrom);
                const response = responseError(cause);
                if (response?.incomplete === true) {
                    try {
                        const partial = outputText(await this.retrieveResponse(response.id));
                        if (partial.length > 0 && record(cause))
                            cause["rawText"] = partial;
                    }
                    catch {
                        // The original transport failure remains authoritative when retrieval is unavailable.
                    }
                }
                normaliseRawText(cause);
                if (!contextWindowFailure(cause))
                    throw cause;
                contextFailures += 1;
                if (contextFailures === 1) {
                    this.#rotate();
                    continue;
                }
                if (!compacted) {
                    const reduced = compactSnapshotInput(originalInput);
                    if (reduced !== originalInput) {
                        input = reduced;
                        compacted = true;
                        this.#rotate();
                        continue;
                    }
                }
                throw cause;
            }
        }
    }
}
export const createOpenAISchemaClientFactory = (options) => {
    if (options.apiKey.trim().length === 0)
        throw new Error("OpenAI API key is required");
    if (options.instructions.trim().length === 0)
        throw new Error("OpenAI developer instructions are required");
    return (conversationId) => new OpenAISchemaClient(options, conversationId);
};
//# sourceMappingURL=openaiSchema.js.map