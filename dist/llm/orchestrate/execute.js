import { AdaptiveLimiter } from "./rateLimit.js";
import { snapshotInput } from "./snapshot.js";
import { failKind, partial } from "./failure.js";
import { repairUnit, reviewAudit, safeAudit as repairSafeAudit } from "./repair.js";
import { conversation, paidAttempts } from "./session.js";
const entryModel = (config, kind) => kind === "big" ? config.openai.bigModel : config.openai.smallModel;
const escalationModel = (config, kind) => kind === "big" ? config.openai.bigEscalationModel : config.openai.smallEscalationModel;
const model = (config, unit, attempt) => attempt <= 1 ? entryModel(config, unit.kind) : escalationModel(config, unit.kind);
const effort = (config, unit, attempt) => attempt > 1 && unit.kind === "small" ? "low" : unit.effort ?? config.openai.reasoning;
const tokens = (config, unit) => Math.min(unit.tokens ?? config.openai.maxOutputTokens, config.openai.maxOutputTokens);
const input = (unit, context, snapshot, remoteFileId) => {
    const value = unit.input(context);
    return snapshot === null ? value : snapshotInput(remoteFileId, snapshot, value);
};
const state = (unit, attempt, correction, kind) => ({
    id: unit.id,
    attempt,
    correction: [...correction],
    ...(kind === undefined ? {} : { failureKind: kind }),
});
export const executeUnit = async (options) => {
    let correction = [...(options.resume?.correction ?? []), ...options.correction];
    const candidates = [];
    const resumed = options.resume?.attempt ?? 1;
    const firstAttempt = Number.isSafeInteger(resumed) && resumed >= 1
        ? Math.min(resumed, paidAttempts)
        : 1;
    let lastModel = model(options.config, options.unit, firstAttempt);
    if ((options.resume?.attempt ?? 1) > paidAttempts) {
        const context = { calculation: options.calculation, earlier: options.earlier, correction };
        return repairUnit(options, candidates, context, paidAttempts, lastModel, correction);
    }
    for (let attempt = firstAttempt; attempt <= paidAttempts; attempt += 1) {
        const selectedModel = model(options.config, options.unit, attempt);
        lastModel = selectedModel;
        const context = {
            calculation: options.calculation,
            earlier: options.earlier,
            correction,
        };
        options.hooks.onStart?.(options.unit, attempt, selectedModel);
        await options.onState(state(options.unit, attempt, correction));
        options.counters.calls += 1;
        let output;
        try {
            output = await options.limiter.run(() => options.client.run(options.unit.shape, input(options.unit, context, options.snapshot, options.remoteFileId), {
                body: {
                    model: selectedModel,
                    store: false,
                    reasoning: { effort: effort(options.config, options.unit, attempt) },
                    max_output_tokens: tokens(options.config, options.unit),
                },
                retries: 0,
            }));
            conversation(options.client, options.counters);
        }
        catch (cause) {
            conversation(options.client, options.counters);
            const value = partial(cause);
            if (value !== null)
                candidates.push(value);
            const kind = failKind(cause);
            correction = [
                `Previous output failed before acceptance: ${cause instanceof Error ? cause.message : String(cause)}`,
            ];
            if (attempt < paidAttempts) {
                options.counters.retries += 1;
                options.hooks.onRetry?.(options.unit, attempt, correction);
                await options.onState(state(options.unit, attempt + 1, correction, kind));
                continue;
            }
            await options.onState(state(options.unit, attempt, correction, kind));
            return repairUnit(options, candidates, context, attempt, selectedModel, correction);
        }
        const audited = await reviewAudit(options, repairSafeAudit(options, output, context));
        candidates.push(audited.value);
        if (audited.valid) {
            const result = { id: options.unit.id, value: audited.value, attempts: attempt, model: selectedModel };
            options.hooks.onComplete?.(result);
            await options.onState(null);
            return result;
        }
        await options.hooks.onReject?.(options.unit, attempt, selectedModel, output, audited);
        correction = [...audited.errors];
        if (attempt < paidAttempts) {
            options.counters.retries += 1;
            options.hooks.onRetry?.(options.unit, attempt, correction);
            await options.onState(state(options.unit, attempt + 1, correction, audited.repair === "completion" ? "truncation" : "audit"));
            continue;
        }
        await options.onState(state(options.unit, attempt, correction, audited.repair === "completion" ? "truncation" : "audit"));
        return repairUnit(options, candidates, context, attempt, selectedModel, correction);
    }
    const context = { calculation: options.calculation, earlier: options.earlier, correction };
    return repairUnit(options, candidates, context, paidAttempts, lastModel, correction);
};
export const safeAudit = (unit, value, context) => repairSafeAudit({ unit }, value, context);
export { repairUnit as reconstructionResult } from "./repair.js";
export { activeCopy, conversation, count, localConversationId, paidAttempts } from "./session.js";
//# sourceMappingURL=execute.js.map