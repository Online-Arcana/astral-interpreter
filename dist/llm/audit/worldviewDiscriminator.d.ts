import type { StrictShape } from "../orchestrate/types.js";
export interface InterpretationWorldviewAudit {
    assumesReligion: boolean;
    assumesDeity: boolean;
    assumesDivineAgency: boolean;
    assumesSoulMetaphysics: boolean;
    assumesKarma: boolean;
    assumesReincarnation: boolean;
    assumesFate: boolean;
    assumesPredestination: boolean;
    assumesCosmicIntentionality: boolean;
    assumesSupernaturalCausation: boolean;
    couldBeReadAgnostically: boolean;
    confidence: number;
}
export declare const worldviewDiscriminatorShape: StrictShape<InterpretationWorldviewAudit>;
export declare const worldviewDiscriminatorInput: (unitId: string, candidate: object, reasons: readonly string[]) => object;
export declare const worldviewDiscriminatorErrors: (audit: InterpretationWorldviewAudit) => string[];
//# sourceMappingURL=worldviewDiscriminator.d.ts.map