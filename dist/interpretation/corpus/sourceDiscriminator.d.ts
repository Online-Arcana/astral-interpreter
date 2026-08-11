import type { StrictShape } from "../../llm/orchestrate/types.js";
import type { SourceNeutralityAudit } from "./types.js";
export declare const sourceWorldviewDiscriminatorShape: StrictShape<SourceNeutralityAudit>;
export interface SourcePassageGate {
    deterministic: SourceNeutralityAudit;
    sendToDiscriminator: boolean;
    accepted: boolean;
    reasons: string[];
}
/**
 * First source-ingestion gate. A deterministic rejection is dropped immediately;
 * it is never sent to a distiller with instructions to remove the worldview.
 * A clean passage still requires an independent LLM classifier before extraction.
 */
export declare const deterministicSourcePassageGate: (passage: string) => SourcePassageGate;
export declare const sourceWorldviewDiscriminatorInput: (sourceId: string, passageId: string, passage: string) => object;
export declare const sourceDiscriminatorDecision: (audit: SourceNeutralityAudit) => {
    accepted: boolean;
    reasons: string[];
};
//# sourceMappingURL=sourceDiscriminator.d.ts.map