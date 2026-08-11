import { resolveRef, refsValid } from "../../ref/resolve.js";
import type { JsonRef } from "../../types/base.js";
import type { AstralCalculation, InterpretationUnit } from "../../types/file.js";

interface SourceValue {
  ref: JsonRef;
  value: unknown;
}

export const root = (calculation: AstralCalculation): { "astral-calculation": AstralCalculation } => ({
  "astral-calculation": calculation,
});

const useful = (calculation: AstralCalculation, ref: JsonRef): boolean =>
  refsValid(root(calculation), [ref], new Set([ref]));

export const sources = (calculation: AstralCalculation, refs: readonly JsonRef[]): SourceValue[] =>
  refs.filter((ref) => useful(calculation, ref)).map((ref) => ({ ref, value: resolveRef(root(calculation), ref) }));

export const sourceRefsFor = (calculation: AstralCalculation, unit: InterpretationUnit): JsonRef[] =>
  sources(calculation, unit.allowedSourceRefs).map(({ ref }) => ref);
