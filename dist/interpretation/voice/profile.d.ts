export interface InterpretationVoiceProfile {
    id: string;
    semanticRegister: readonly string[];
    interpretiveVoice: readonly string[];
    separationContract: readonly string[];
    avoid: readonly string[];
}
/**
 * Astrology has two deliberately separate language layers.
 *
 * SEMANTIC REGISTER is private compiler input. It carries atomic meaning and
 * provenance but has no authority over wording, cadence or user-facing style.
 *
 * INTERPRETIVE VOICE is the application's prose voice. It may express only the
 * supplied semantics and chart evidence, but it must render them afresh rather
 * than imitating source or corpus language.
 */
export declare const interpretationVoiceProfile: InterpretationVoiceProfile;
export declare const semanticRegisterContract: () => string;
export declare const interpretiveVoiceContract: () => string;
//# sourceMappingURL=profile.d.ts.map