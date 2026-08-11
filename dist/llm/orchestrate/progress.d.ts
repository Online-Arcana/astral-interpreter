import { ProgressTracker } from "../../progress/tracker.js";
import type { WorkUnit } from "../../progress/work.js";
import type { ChartProgress } from "../../types/progress.js";
import type { InterpretationCall, RunHooks } from "./types.js";
export declare const interpretationWork: (units: readonly InterpretationCall[]) => WorkUnit[];
export declare const progressHooks: (tracker: ProgressTracker, now: () => number, emit: (progress: ChartProgress) => void, accepted?: readonly string[]) => RunHooks;
//# sourceMappingURL=progress.d.ts.map