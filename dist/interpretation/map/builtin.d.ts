import type { CompiledInterpretationCorpus } from "../corpus/compile.js";
import { type InterpretationSemanticProvider } from "./provider.js";
/**
 * The checked-in corpus is compiled once when the interpretation runtime is
 * loaded. `requireComplete=true` makes an incomplete or invalid corpus a startup
 * error rather than silently returning to model-owned astrology semantics.
 */
export declare const productionInterpretationCorpus: CompiledInterpretationCorpus;
export declare const productionSemanticProvider: InterpretationSemanticProvider;
//# sourceMappingURL=builtin.d.ts.map