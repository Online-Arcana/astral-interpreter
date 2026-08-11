import type { InterpretationSemanticProvider } from "../../interpretation/map/provider.js";
import type { AstralCalculation } from "../../types/file.js";
import type { InterpretationCall, UnitResult } from "./types.js";
export declare const interpretationCalls: (calculation: AstralCalculation, semanticProvider?: InterpretationSemanticProvider | null) => {
    calls: InterpretationCall[];
    synthetic: Record<string, UnitResult<object>>;
};
//# sourceMappingURL=calls.d.ts.map