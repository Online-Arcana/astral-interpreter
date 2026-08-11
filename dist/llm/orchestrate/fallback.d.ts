import type { InterpretationMap } from "../../interpretation/corpus/types.js";
import type { InterpretationSemanticProvider } from "../../interpretation/map/provider.js";
import type { AstralCalculation, InterpretationUnit } from "../../types/file.js";
import type { UnitResult } from "./types.js";
export declare const noSourceFallback: (unit: InterpretationUnit) => UnitResult<object>;
export declare const semanticMapFor: (calculation: AstralCalculation, unit: InterpretationUnit, provider: InterpretationSemanticProvider | null) => InterpretationMap | null;
export declare const sourceAwareFallback: (calculation: AstralCalculation, unit: InterpretationUnit, warning: string, semanticProvider?: InterpretationSemanticProvider | null) => UnitResult<object>;
//# sourceMappingURL=fallback.d.ts.map