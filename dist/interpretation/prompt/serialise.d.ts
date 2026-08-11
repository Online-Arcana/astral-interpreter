import type { JsonRef } from "../../types/base.js";
import type { InterpretationMap } from "../corpus/types.js";
import type { DecomposedInterpretationUnit } from "../map/decompose.js";
import { interpretationVoiceProfile } from "../voice/profile.js";
export interface InterpretationPromptSource {
    ref: JsonRef;
    value: unknown;
}
export interface InterpretationPromptInput {
    task: string;
    decomposition: DecomposedInterpretationUnit;
    interpretationMap: InterpretationMap | null;
    chartEvidence: readonly InterpretationPromptSource[];
    permittedSourceRefs: readonly JsonRef[];
    correction?: {
        instruction: string;
        auditFailures: readonly string[];
    } | null;
}
export type InterpretationSemanticMode = "corpus-backed" | "legacy-unmapped";
export interface SerializedInterpretationPrompt {
    profile: typeof interpretationVoiceProfile.id;
    semanticMode: InterpretationSemanticMode;
    privateControls: string;
    interpretiveVoice: string;
    semanticInput: {
        contract: string;
        decomposition: DecomposedInterpretationUnit;
        interpretationMap: InterpretationMap | null;
    };
    chartEvidence: {
        contract: string;
        sources: readonly InterpretationPromptSource[];
        permittedSourceRefs: readonly JsonRef[];
    };
    correction?: {
        instruction: string;
        auditFailures: readonly string[];
    };
}
export declare const serialiseInterpretationPrompt: (input: InterpretationPromptInput) => SerializedInterpretationPrompt;
//# sourceMappingURL=serialise.d.ts.map