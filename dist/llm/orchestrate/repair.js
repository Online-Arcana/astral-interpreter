import { worldviewDiscriminatorErrors, worldviewDiscriminatorInput, worldviewDiscriminatorShape } from "../audit/worldviewDiscriminator.js";
import { fieldsFromAuditErrors, reconstructUnit } from "../reconstruct/reconstruct.js";
import { conversation, paidAttempts } from "./session.js";
export const safeAudit = (options, value, context) => {
    try {
        return options.unit.audit(value, context);
    }
    catch (cause) {
        return {
            valid: false,
            value,
            errors: [`Audit threw: ${cause instanceof Error ? cause.message : String(cause)}`],
            repair: "audit",
        };
    }
};
export const reviewAudit = async (options, audit) => {
    const review = audit.worldviewReview ?? [];
    if (!audit.valid || review.length === 0)
        return audit;
    const client = options.createClient();
    options.counters.calls += 1;
    try {
        const result = await options.limiter.run(() => client.run(worldviewDiscriminatorShape, worldviewDiscriminatorInput(options.unit.id, audit.value, review), {
            body: {
                model: options.config.openai.smallModel,
                store: false,
                reasoning: { effort: "none" },
                max_output_tokens: 512,
            },
            retries: 0,
        }));
        conversation(client, options.counters);
        const errors = worldviewDiscriminatorErrors(result);
        if (errors.length === 0)
            return { ...audit, worldviewReview: [] };
        return {
            ...audit,
            valid: false,
            errors: [...new Set([...audit.errors, ...review, ...errors])],
            soft: true,
            repair: "audit",
        };
    }
    catch (cause) {
        conversation(client, options.counters);
        return {
            ...audit,
            valid: false,
            errors: [...new Set([
                    ...audit.errors,
                    ...review,
                    `Worldview discriminator failed closed: ${cause instanceof Error ? cause.message : String(cause)}`,
                ])],
            soft: true,
            repair: "audit",
        };
    }
};
export const repairUnit = async (options, candidates, context, attempt, model, errors) => {
    options.hooks.onRepair?.(options.unit, attempt, "deterministic", errors);
    let rebuilt = reconstructUnit({ unit: options.unit, candidates });
    let audited = await reviewAudit(options, safeAudit(options, rebuilt.value, context));
    if (!audited.valid) {
        const forced = fieldsFromAuditErrors(options.unit, audited.errors);
        if (forced.size > 0) {
            rebuilt = reconstructUnit({ unit: options.unit, candidates: [rebuilt.value, ...candidates], forceFields: forced });
            audited = await reviewAudit(options, safeAudit(options, rebuilt.value, context));
        }
    }
    if (options.config.chart.throwOnInterpretationFailure) {
        throw new Error(`Interpretation unit ${options.unit.id} required deterministic reconstruction: ${errors.join("; ")}`);
    }
    const warnings = [...new Set([...rebuilt.warnings, ...audited.errors, ...(audited.worldviewReview ?? [])])];
    if (!audited.valid)
        options.hooks.onSoftAccept?.(options.unit, attempt, warnings);
    const result = {
        id: options.unit.id,
        value: audited.value,
        attempts: Math.max(1, Math.min(attempt, paidAttempts)),
        model: candidates.length === 0 ? "deterministic" : model,
        provenance: {
            repairedBy: "deterministic",
            repairKind: rebuilt.usedXmlFallback ? "xml_fallback" : "deterministic_reconstruction",
            fallbackFields: [...rebuilt.fallbackFields],
            auditWarnings: warnings,
        },
    };
    options.hooks.onComplete?.(result);
    await options.onState(null);
    return result;
};
//# sourceMappingURL=repair.js.map