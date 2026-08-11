const ints = (value, fallback, key) => {
    if (value === undefined || value === "")
        return fallback;
    const parsed = Number(value);
    if (!Number.isSafeInteger(parsed) || parsed < 1)
        throw new Error(`${key} must be a positive integer`);
    return parsed;
};
const bounded = (value, fallback, key, maximum) => {
    const selected = ints(value, fallback, key);
    if (selected > maximum)
        throw new Error(`${key} must not exceed ${maximum}`);
    return selected;
};
const bool = (value, fallback, key) => {
    if (value === undefined || value === "")
        return fallback;
    if (value === "true")
        return true;
    if (value === "false")
        return false;
    throw new Error(`${key} must be true or false`);
};
const reasoning = (value) => {
    const selected = value ?? "low";
    if (selected === "none" || selected === "low" || selected === "medium" || selected === "high")
        return selected;
    throw new Error("OPENAI_REASONING has an unsupported value");
};
export const readConfig = (env) => ({
    openai: {
        apiKey: env["OPENAI_API_KEY"] ?? "",
        adminKey: env["OPENAI_ADMIN_KEY"] || null,
        bigModel: env["OPENAI_BIG_MODEL"] ?? "gpt-5.6-luna",
        bigEscalationModel: env["OPENAI_BIG_ESCALATION_MODEL"] ?? "gpt-5.6-luna",
        smallModel: env["OPENAI_SMALL_MODEL"] ?? "gpt-5-nano",
        smallEscalationModel: env["OPENAI_SMALL_ESCALATION_MODEL"] ?? "gpt-5.6-luna",
        reasoning: reasoning(env["OPENAI_REASONING"]),
        maxOutputTokens: ints(env["OPENAI_MAX_OUTPUT_TOKENS"], 12000, "OPENAI_MAX_OUTPUT_TOKENS"),
    },
    chart: {
        maxRetries: bounded(env["ASTRAL_MAX_RETRIES"], 2, "ASTRAL_MAX_RETRIES", 3),
        throwOnInterpretationFailure: bool(env["ASTRAL_DEBUG_THROW_ON_INTERPRETATION_FAILURE"], false, "ASTRAL_DEBUG_THROW_ON_INTERPRETATION_FAILURE"),
        foundationUnits: bounded(env["ASTRAL_FOUNDATION_UNITS"], 10, "ASTRAL_FOUNDATION_UNITS", 10),
        laneCount: bounded(env["ASTRAL_LANE_COUNT"], 4, "ASTRAL_LANE_COUNT", 4),
        laneUnits: bounded(env["ASTRAL_LANE_UNITS"], 10, "ASTRAL_LANE_UNITS", 10),
        laneContextTokens: ints(env["ASTRAL_LANE_CONTEXT_TOKENS"], 60000, "ASTRAL_LANE_CONTEXT_TOKENS"),
    },
    billing: { directory: env["ASTRAL_BILL_DIR"]?.trim() || ".astral/bills" },
    jobs: { ttlSeconds: ints(env["ASTRAL_JOB_TTL_SECONDS"], 3600, "ASTRAL_JOB_TTL_SECONDS") },
});
//# sourceMappingURL=config.js.map