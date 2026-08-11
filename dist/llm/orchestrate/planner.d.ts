import type { InterpretationCall, UnitResult } from "./types.js";
export interface LanePlan {
    id: string;
    units: InterpretationCall[];
    estimatedTokens: number;
}
export declare const foundationPlan: (calls: readonly InterpretationCall[], accepted: Readonly<Record<string, UnitResult<object>>>, maximum?: number) => InterpretationCall[];
export declare const wavePlan: (calls: readonly InterpretationCall[], acceptedUnits: Readonly<Record<string, UnitResult<object>>>, maximumLanes?: number, maximumPerLane?: number) => LanePlan[];
//# sourceMappingURL=planner.d.ts.map