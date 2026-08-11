import { type LanePlan } from "./planner.js";
import type { InterpretationCall, InterpretationRecovery, InterpretationRun, LaneCheckpoint, RunHooks, UnitResult, WaveCheckpoint } from "./types.js";
export declare const validateResult: (calculation: unknown, call: InterpretationCall, result: UnitResult<object>, earlier: Readonly<Record<string, UnitResult<object>>>, maximumAttempts: number) => UnitResult<object>;
export declare const restore: (calculation: unknown, calls: readonly InterpretationCall[], recovery: InterpretationRecovery, maximumAttempts: number) => Record<string, UnitResult<object>>;
export declare const restoreStaged: (calculation: unknown, calls: readonly InterpretationCall[], completed: Readonly<Record<string, UnitResult<object>>>, wave: WaveCheckpoint | null, maximumAttempts: number) => Record<string, UnitResult<object>>;
export declare const emptyRecovery: () => InterpretationRecovery;
export declare const laneCheckpoint: (plan: LanePlan) => LaneCheckpoint;
export declare const recoveredPlans: (calls: readonly InterpretationCall[], wave: WaveCheckpoint) => LanePlan[];
export declare const without: (values: Readonly<Record<string, UnitResult<object>>>, id: string) => Record<string, UnitResult<object>>;
export declare const deterministicUnit: (calculation: unknown, call: InterpretationCall, earlier: Readonly<Record<string, UnitResult<object>>>, cause: unknown) => UnitResult<object>;
export declare const emergencyRun: (calculation: unknown, calls: readonly InterpretationCall[], hooks: RunHooks, cause: unknown) => InterpretationRun;
//# sourceMappingURL=recovery.d.ts.map