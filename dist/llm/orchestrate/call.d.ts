import type { InterpretationUnit } from "../../types/file.js";
import type { NarrativeEntry } from "../audit/field.js";
import type { InterpretationCall, ReasoningEffort } from "./types.js";
interface Route {
    kind: InterpretationCall["kind"];
    effort?: ReasoningEffort;
    tokens: number;
}
export declare const human: (value: string) => string;
export declare const task: (unit: InterpretationUnit) => string;
export declare const correctionInstruction: (unit: InterpretationUnit) => string;
export declare const lexicon: (unit: InterpretationUnit) => string[];
export declare const route: (unit: InterpretationUnit) => Route;
export declare const acceptedNarratives: (earlier: Readonly<Record<string, unknown>>) => NarrativeEntry[];
export {};
//# sourceMappingURL=call.d.ts.map