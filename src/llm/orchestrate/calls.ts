import { generatedNamePattern } from "../../chart/name.js";
import { semanticPropositionTexts } from "../../interpretation/map/compile.js";
import { decomposeInterpretationUnit } from "../../interpretation/map/decompose.js";
import type { InterpretationSemanticProvider } from "../../interpretation/map/provider.js";
import { serialiseInterpretationPrompt } from "../../interpretation/prompt/serialise.js";
import type { JsonRef } from "../../types/base.js";
import type { AstralCalculation } from "../../types/file.js";
import type { FieldProfile } from "../audit/field.js";
import { fieldProfiles } from "../audit/profiles.js";
import { auditStructured } from "../audit/structured.js";
import { object, strictShape, text } from "../schema/build.js";
import { shapeForUnit } from "../schema/chart.js";
import { acceptedNarratives, correctionInstruction, human, lexicon, route, task } from "./call.js";
import { sources } from "./evidence.js";
import { noSourceFallback, semanticMapFor } from "./fallback.js";
import { sectionPrompt } from "./prompt.js";
import type { InterpretationCall, UnitResult } from "./types.js";

const substantiveCalls = (
  calculation: AstralCalculation,
  semanticProvider: InterpretationSemanticProvider | null,
): { calls: InterpretationCall[]; synthetic: Record<string, UnitResult<object>> } => {
  const calls: InterpretationCall[] = [];
  const synthetic: Record<string, UnitResult<object>> = {};

  for (const unit of calculation.interpretationPlan.units) {
    const unitSources = sources(calculation, unit.allowedSourceRefs);
    if (unitSources.length === 0) {
      synthetic[unit.id] = noSourceFallback(unit);
      continue;
    }

    const allowed = new Set(unitSources.map(({ ref }) => ref));
    const decomposition = decomposeInterpretationUnit(calculation, unit);
    const interpretationMap = semanticMapFor(calculation, unit, semanticProvider);
    const semanticPropositions = interpretationMap === null ? [] : semanticPropositionTexts(interpretationMap);
    const specialistKey = unit.section === "life.romance"
      ? "romance"
      : unit.section === "life.sexuality"
        ? "sexuality"
        : unit.section === "life.careerAndVocation"
          ? "career"
          : unit.section === "life.moneyAndMaterialSecurity"
            ? "money"
            : null;
    const specialist = specialistKey === null ? null : fieldProfiles[specialistKey] ?? null;
    const profile: FieldProfile = {
      id: unit.id,
      lexicon: [...new Set([...lexicon(unit), ...(specialist?.lexicon ?? [])])],
      minLength: 2,
      maxLength: 4_000,
      ...(specialist?.fieldLexicons === undefined ? {} : { fieldLexicons: specialist.fieldLexicons }),
      ...(semanticPropositions.length === 0 ? {} : { semanticPropositions }),
    };

    calls.push({
      id: unit.id,
      label: human(unit.id),
      ...route(unit),
      ...(interpretationMap === null ? {} : { semanticMap: interpretationMap }),
      shape: shapeForUnit(unit, [...allowed]),
      allowedSourceRefs: allowed,
      input: ({ correction }) => serialiseInterpretationPrompt({
        task: task(unit),
        decomposition,
        interpretationMap,
        chartEvidence: unitSources,
        permittedSourceRefs: [...allowed],
        ...(correction.length === 0 ? {} : {
          correction: {
            instruction: correctionInstruction(unit),
            auditFailures: correction,
          },
        }),
      }),
      audit: (value, context) => auditStructured(
        value,
        context.calculation,
        allowed,
        { ...profile, priorFields: acceptedNarratives(context.earlier) },
      ),
    });
  }

  return { calls, synthetic };
};

const nameRefs = [
  "#/astral-calculation/provenance/calculationFingerprint",
  "#/astral-calculation/system/derived/dominantPlanets",
  "#/astral-calculation/system/derived/dominantSigns",
] as const satisfies readonly JsonRef[];

const generatedNameCall = (calculation: AstralCalculation): InterpretationCall => {
  const available = sources(calculation, nameRefs);
  const allowed = new Set(available.map(({ ref }) => ref));
  return {
    id: "generated-name",
    label: "Generated chart name",
    kind: "small",
    effort: "none",
    tokens: 128,
    shape: strictShape<{ value: string }>(
      "generated_chart_name",
      object({ value: text() }),
      (value) => {
        if (typeof value !== "object" || value === null || Array.isArray(value)) {
          throw new TypeError("Generated name output must be an object");
        }
        const keys = Object.keys(value);
        const name = (value as { value?: unknown }).value;
        if (keys.length !== 1 || keys[0] !== "value" || typeof name !== "string") {
          throw new TypeError("Generated name output must contain only value");
        }
        return { value: name };
      },
    ) as unknown as InterpretationCall["shape"],
    allowedSourceRefs: allowed,
    input: ({ correction }) => ({
      instructions: sectionPrompt([
        "Create a memorable chart name of exactly three hyphenated words.",
        "Return only the strict JSON object.",
        "Use ordinary Unicode letters or numbers within each word and no spaces.",
        "Do not include a person name, explanation, punctuation other than the two hyphens or astrological calculations.",
      ].join("\n")),
      deterministicData: available,
      ...(correction.length === 0 ? {} : { auditFailures: correction }),
    }),
    audit: (value) => {
      const candidate = value as { value?: unknown };
      const valid = typeof candidate.value === "string" && generatedNamePattern.test(candidate.value);
      return {
        valid,
        value,
        errors: valid ? [] : ["Generated chart name must contain exactly three hyphenated words"],
      };
    },
  };
};

export const interpretationCalls = (
  calculation: AstralCalculation,
  semanticProvider: InterpretationSemanticProvider | null = null,
): { calls: InterpretationCall[]; synthetic: Record<string, UnitResult<object>> } => {
  const prepared = substantiveCalls(calculation, semanticProvider);
  return {
    calls: calculation.subject.providedName === null
      ? [...prepared.calls, generatedNameCall(calculation)]
      : prepared.calls,
    synthetic: prepared.synthetic,
  };
};
