import { sectionShape } from "../schema/section.js";
import { auditSection } from "./audit.js";
import { sectionPrompt } from "./prompt.js";
export const sectionUnit = (input) => {
    const allowed = new Set(input.refs);
    return {
        id: input.id,
        label: input.label,
        kind: input.kind ?? "big",
        shape: sectionShape(input.id),
        allowedSourceRefs: allowed,
        input: ({ earlier, correction }) => ({
            instructions: sectionPrompt(input.task),
            deterministicData: input.data,
            permittedSourceRefs: input.refs,
            earlierConclusions: earlier,
            ...(correction.length === 0 ? {} : {
                correction: {
                    instruction: "Correct only the rejected fields, preserve valid content and return the same strict schema.",
                    auditFailures: correction,
                },
            }),
        }),
        audit: (value, { calculation }) => auditSection(value, calculation, allowed, input.profile),
    };
};
//# sourceMappingURL=unit.js.map