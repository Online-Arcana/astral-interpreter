var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/web.ts
var web_exports = {};
__export(web_exports, {
  BillCollector: () => BillCollector,
  OpenAITransportError: () => OpenAITransportError,
  ProgressTracker: () => ProgressTracker,
  agnosticNeutrality: () => agnosticNeutrality,
  assembleChart: () => assembleChart,
  auditField: () => auditField,
  auditList: () => auditList,
  auditProfile: () => auditProfile,
  auditSection: () => auditSection,
  auditStructured: () => auditStructured,
  baseInterpretationRules: () => baseInterpretationRules,
  baseWork: () => baseWork,
  billingSummary: () => billingSummary,
  buildPlan: () => buildPlan,
  buildSnapshot: () => buildSnapshot,
  compactSnapshotInput: () => compactSnapshotInput,
  compatibilityDomain: () => compatibilityDomain,
  compileInterpretationCorpus: () => compileInterpretationCorpus,
  compileReviewedCorpus: () => compileReviewedCorpus,
  completionInterpretationRules: () => completionInterpretationRules,
  contextWindowFailure: () => contextWindowFailure,
  corpusPolicyVersion: () => corpusPolicyVersion,
  cosine: () => cosine,
  createOpenAISchemaClientFactory: () => createOpenAISchemaClientFactory,
  createOpenAITransport: () => createOpenAITransport,
  deterministicInterpretationPlan: () => deterministicInterpretationPlan,
  diagnosticHooks: () => diagnosticHooks,
  directInterpretationRules: () => directInterpretationRules,
  estimateContextTokens: () => estimateContextTokens,
  fetchOpenAICosts: () => fetchOpenAICosts,
  fieldProfiles: () => fieldProfiles,
  forbiddenPatterns: () => forbiddenPatterns,
  humanFirstInterpretationRules: () => humanFirstInterpretationRules,
  interpretationCalls: () => interpretationCalls,
  interpretationCorpusVersion: () => interpretationCorpusVersion,
  interpretationSnapshotSchema: () => interpretationSnapshotSchema,
  interpretationWork: () => interpretationWork,
  list: () => list,
  literal: () => literal,
  modelRoutingProfile: () => modelRoutingProfile,
  nlpAuditProfile: () => nlpAuditProfile,
  normaliseText: () => normaliseText,
  nullableText: () => nullableText2,
  object: () => object,
  openAiPriceCatalogue: () => openAiPriceCatalogue,
  parseCareerInterpretation: () => parseCareerInterpretation,
  parseCompatibilityOverview: () => parseCompatibilityOverview,
  parseCrossSystem: () => parseCrossSystem,
  parseFinalSynthesis: () => parseFinalSynthesis,
  parseMoneyInterpretation: () => parseMoneyInterpretation,
  parseRomanticInterpretation: () => parseRomanticInterpretation,
  parseSection: () => parseSection,
  parseSexualInterpretation: () => parseSexualInterpretation,
  parseSignCompatibility: () => parseSignCompatibility,
  parseStrictSection: () => parseStrictSection,
  parseSystemSynthesis: () => parseSystemSynthesis,
  preferredGenderOf: () => preferredGenderOf,
  prepare: () => prepare,
  priceUsage: () => priceUsage,
  productionInterpretationCorpus: () => productionInterpretationCorpus,
  productionSemanticProvider: () => productionSemanticProvider,
  progressHooks: () => progressHooks,
  promptCatalogue: () => promptCatalogue,
  rateFor: () => rateFor,
  readConfig: () => readConfig,
  refinedInterpretationRules: () => refinedInterpretationRules,
  reviewedCorpusAtoms: () => reviewedCorpusAtoms,
  reviewedCorpusCategories: () => reviewedCorpusCategories,
  reviewedCorpusClaims: () => reviewedCorpusClaims,
  reviewedCorpusOrigin: () => reviewedCorpusOrigin,
  reviewedCorpusSources: () => reviewedCorpusSources,
  runInterpretation: () => runInterpretation2,
  runInterpretationPlan: () => runInterpretationPlan,
  sectionPrompt: () => sectionPrompt,
  sectionSchema: () => sectionSchema,
  sectionShape: () => sectionShape,
  sectionUnit: () => sectionUnit,
  semanticProviderFromCorpus: () => semanticProviderFromCorpus,
  sentences: () => sentences,
  shapeForUnit: () => shapeForUnit,
  snapshotInput: () => snapshotInput,
  snapshotText: () => snapshotText,
  snapshotTokenEstimate: () => snapshotTokenEstimate,
  strictShape: () => strictShape,
  structuredOutputCatalogue: () => structuredOutputCatalogue,
  text: () => text3,
  textEnum: () => textEnum,
  unwantedExamples: () => unwantedExamples,
  validateCorpusClaim: () => validateCorpusClaim,
  validateInterpretationMap: () => validateInterpretationMap,
  validateSourceForSemanticIngestion: () => validateSourceForSemanticIngestion,
  worldviewNeutralityRules: () => worldviewNeutralityRules
});

// src/config.ts
var ints = (value, fallback, key) => {
  if (value === void 0 || value === "") return fallback;
  const parsed3 = Number(value);
  if (!Number.isSafeInteger(parsed3) || parsed3 < 1) throw new Error(`${key} must be a positive integer`);
  return parsed3;
};
var bounded = (value, fallback, key, maximum) => {
  const selected = ints(value, fallback, key);
  if (selected > maximum) throw new Error(`${key} must not exceed ${maximum}`);
  return selected;
};
var bool = (value, fallback, key) => {
  if (value === void 0 || value === "") return fallback;
  if (value === "true") return true;
  if (value === "false") return false;
  throw new Error(`${key} must be true or false`);
};
var reasoning = (value) => {
  const selected = value ?? "low";
  if (selected === "none" || selected === "low" || selected === "medium" || selected === "high") return selected;
  throw new Error("OPENAI_REASONING has an unsupported value");
};
var readConfig = (env) => ({
  openai: {
    apiKey: env["OPENAI_API_KEY"] ?? "",
    adminKey: env["OPENAI_ADMIN_KEY"] || null,
    bigModel: env["OPENAI_BIG_MODEL"] ?? "gpt-5.6-luna",
    bigEscalationModel: env["OPENAI_BIG_ESCALATION_MODEL"] ?? "gpt-5.6-luna",
    smallModel: env["OPENAI_SMALL_MODEL"] ?? "gpt-5-nano",
    smallEscalationModel: env["OPENAI_SMALL_ESCALATION_MODEL"] ?? "gpt-5.6-luna",
    reasoning: reasoning(env["OPENAI_REASONING"]),
    maxOutputTokens: ints(env["OPENAI_MAX_OUTPUT_TOKENS"], 12e3, "OPENAI_MAX_OUTPUT_TOKENS")
  },
  chart: {
    maxRetries: bounded(env["ASTRAL_MAX_RETRIES"], 2, "ASTRAL_MAX_RETRIES", 3),
    throwOnInterpretationFailure: bool(env["ASTRAL_DEBUG_THROW_ON_INTERPRETATION_FAILURE"], false, "ASTRAL_DEBUG_THROW_ON_INTERPRETATION_FAILURE"),
    foundationUnits: bounded(env["ASTRAL_FOUNDATION_UNITS"], 10, "ASTRAL_FOUNDATION_UNITS", 10),
    laneCount: bounded(env["ASTRAL_LANE_COUNT"], 4, "ASTRAL_LANE_COUNT", 4),
    laneUnits: bounded(env["ASTRAL_LANE_UNITS"], 10, "ASTRAL_LANE_UNITS", 10),
    laneContextTokens: ints(env["ASTRAL_LANE_CONTEXT_TOKENS"], 6e4, "ASTRAL_LANE_CONTEXT_TOKENS")
  },
  billing: { directory: env["ASTRAL_BILL_DIR"]?.trim() || ".astral/bills" },
  jobs: { ttlSeconds: ints(env["ASTRAL_JOB_TTL_SECONDS"], 3600, "ASTRAL_JOB_TTL_SECONDS") }
});

// src/plan/build.ts
import { compatibilityDomains } from "astral-core";
import { signs } from "astral-core";
var pointIds = [
  "sun",
  "moon",
  "mercury",
  "venus",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
  "north_node_true",
  "south_node_true",
  "north_node_mean",
  "south_node_mean",
  "ascendant",
  "descendant",
  "midheaven",
  "imum_coeli",
  "vertex",
  "antivertex",
  "east_point",
  "part_of_fortune",
  "part_of_spirit",
  "lilith_mean",
  "lilith_true"
];
var lifeSections = [
  "identityAndPurpose",
  "emotionalNature",
  "mindAndCommunication",
  "romance",
  "sexuality",
  "committedPartnerships",
  "homeAndFamily",
  "childhoodPatterns",
  "creativityAndSelfExpression",
  "childrenAndNurturing",
  "friendship",
  "communityAndGroups",
  "workStyle",
  "careerAndVocation",
  "businessAndLeadership",
  "moneyAndMaterialSecurity",
  "publicLifeAndAmbition",
  "conflictAndAssertion",
  "growthAndOpportunity",
  "restrictionsAndResponsibility",
  "transformationAndCrisis",
  "spiritualityAndMeaning",
  "unconsciousPatterns",
  "wellbeingAndDailyRhythm",
  "developmentalDirection"
];
var ref = (value) => `#/${value}`;
var systemRef = (path = "") => ref(`astral-calculation/system${path.length > 0 ? `/${path}` : ""}`);
var compatibilityRef = (domain2, sign) => ref(
  `astral-calculation/compatibility${domain2 ? `/domains/${domain2}` : ""}${sign ? `/signs/${sign}` : ""}`
);
var unit = (id, zodiac, section2, domain2, allowedSourceRefs) => ({
  id,
  zodiac,
  section: section2,
  domain: domain2,
  allowedSourceRefs: [...allowedSourceRefs]
});
var systemUnits = (calculation) => {
  const zodiac = calculation.zodiac;
  const units = [];
  const prefix = `${zodiac}.`;
  units.push(unit(`${prefix}overview`, zodiac, "overview", null, [systemRef()]));
  for (const point of ["sun", "moon", "ascendant"]) {
    units.push(unit(
      `${prefix}big-three.${point}`,
      zodiac,
      `bigThree.${point}`,
      null,
      [systemRef(`points/${point}`)]
    ));
  }
  for (const point of pointIds) {
    units.push(unit(
      `${prefix}point.${point}`,
      zodiac,
      `points.${point}`,
      null,
      [systemRef(`points/${point}`)]
    ));
  }
  for (let house = 1; house <= 12; house += 1) {
    units.push(unit(
      `${prefix}house.${house}`,
      zodiac,
      `houses.${house}`,
      null,
      [systemRef(`houses/placidus/houses/${house}`)]
    ));
  }
  calculation.aspects.forEach((aspect, index) => {
    units.push(unit(
      `${prefix}aspect.${aspect.id}`,
      zodiac,
      `aspects.${aspect.id}`,
      null,
      [systemRef(`aspects/${index}`)]
    ));
  });
  calculation.patterns.forEach((pattern, index) => {
    units.push(unit(
      `${prefix}pattern.${pattern.id}`,
      zodiac,
      `patterns.${pattern.id}`,
      null,
      [systemRef(`patterns/${index}`)]
    ));
  });
  units.push(
    unit(`${prefix}lunar.phase`, zodiac, "lunar.phase", null, [systemRef("lunarPhase")]),
    unit(`${prefix}lunar.nodes`, zodiac, "lunar.nodes", null, [
      systemRef("points/north_node_true"),
      systemRef("points/south_node_true"),
      systemRef("points/north_node_mean"),
      systemRef("points/south_node_mean")
    ]),
    unit(`${prefix}lunar.lilith`, zodiac, "lunar.lilith", null, [
      systemRef("points/lilith_mean"),
      systemRef("points/lilith_true")
    ]),
    unit(`${prefix}eclipse.at-birth`, zodiac, "eclipses.atBirth", null, [systemRef("eclipses/atBirth")]),
    unit(`${prefix}eclipse.prenatal-solar`, zodiac, "eclipses.prenatalSolar", null, [systemRef("eclipses/prenatalSolar")]),
    unit(`${prefix}eclipse.prenatal-lunar`, zodiac, "eclipses.prenatalLunar", null, [systemRef("eclipses/prenatalLunar")]),
    unit(`${prefix}rulership-dignity`, zodiac, "rulershipAndDignity", null, [
      systemRef("points"),
      systemRef("derived/dispositors"),
      systemRef("derived/mutualReceptions")
    ]),
    unit(`${prefix}chart-balance`, zodiac, "chartBalance", null, [systemRef("derived/balances")]),
    unit(`${prefix}dominant-themes`, zodiac, "dominantThemes", null, [
      systemRef("derived/dominantPlanets"),
      systemRef("derived/dominantSigns"),
      systemRef("derived/jonesPattern")
    ])
  );
  for (const section2 of lifeSections) {
    units.push(unit(
      `${prefix}life.${section2}`,
      zodiac,
      `life.${section2}`,
      null,
      [systemRef("points"), systemRef("houses"), systemRef("aspects")]
    ));
  }
  units.push(unit(`${prefix}synthesis`, zodiac, "synthesis", null, [systemRef()]));
  return units;
};
var compatibilityUnits = (zodiac) => {
  const units = [];
  for (const domain2 of compatibilityDomains) {
    units.push(unit(
      `${zodiac}.compatibility.${domain2}.overview`,
      zodiac,
      "compatibility.overview",
      domain2,
      [compatibilityRef(domain2)]
    ));
    for (const sign of signs) {
      units.push(unit(
        `${zodiac}.compatibility.${domain2}.${sign}`,
        zodiac,
        "compatibility.sign",
        domain2,
        [compatibilityRef(domain2, sign)]
      ));
    }
  }
  return units;
};
var buildPlan = (calculation) => ({
  schema: "astral-interpretation-plan/1.1.0",
  zodiac: calculation.zodiac,
  units: [
    ...systemUnits(calculation),
    ...compatibilityUnits(calculation.zodiac),
    unit("final-synthesis", calculation.zodiac, "finalSynthesis", null, [
      systemRef("derived"),
      compatibilityRef()
    ])
  ]
});

// src/input.ts
var prepare = (calculation, subject2 = {}) => ({
  ...calculation,
  schema: "astral-calculation/1.1.0",
  subject: {
    providedName: subject2.name?.trim() || null,
    language: subject2.language?.trim() || "en",
    adult: true,
    preferredGender: subject2.gender ?? "male"
  },
  settings: { ...calculation.settings, interpretationMode: calculation.system.zodiac },
  interpretationPlan: buildPlan(calculation.system)
});

// src/types/index.ts
var types_exports = {};
__export(types_exports, {
  preferredGenderOf: () => preferredGenderOf
});

// src/types/base.ts
var preferredGenderOf = (value) => value.preferredGender ?? "male";

// src/types/astro.ts
var astro_exports = {};
__reExport(astro_exports, astral_core_star);
import * as astral_core_star from "astral-core";

// src/types/index.ts
__reExport(types_exports, astro_exports);

// src/web.ts
__reExport(web_exports, types_exports);

// src/chart/parse.ts
var sectionKeys = [
  "status",
  "title",
  "summary",
  "detail",
  "themes",
  "strengths",
  "tensions",
  "sourceRefs"
];
var record = (value, name) => {
  if (typeof value !== "object" || value === null || Array.isArray(value)) throw new TypeError(`${name} must be an object`);
  return value;
};
var exactKeys = (value, expected, name) => {
  const actual = Object.keys(value).sort();
  const wanted = [...expected].sort();
  if (actual.length !== wanted.length || actual.some((key, index) => key !== wanted[index])) {
    throw new TypeError(`${name} has unexpected or missing fields`);
  }
};
var text = (value, name) => {
  if (typeof value !== "string") throw new TypeError(`${name} must be text`);
  return value;
};
var nullableText = (value, name) => {
  if (value === null) return null;
  return text(value, name);
};
var textList = (value, name) => {
  if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) {
    throw new TypeError(`${name} must be a text array`);
  }
  return [...value];
};
var refs = (value, name) => textList(value, name).map((item) => {
  if (!item.startsWith("#/")) throw new TypeError(`${name} contains a non-local JSON reference`);
  return item;
});
var status = (value) => {
  if (value !== "written" && value !== "unavailable" && value !== "not_applicable") {
    throw new TypeError("Section status is invalid");
  }
  return value;
};
var sectionFrom = (value) => ({
  status: status(value["status"]),
  title: text(value["title"], "Section title"),
  summary: nullableText(value["summary"], "Section summary"),
  detail: nullableText(value["detail"], "Section detail"),
  themes: textList(value["themes"], "Section themes"),
  strengths: textList(value["strengths"], "Section strengths"),
  tensions: textList(value["tensions"], "Section tensions"),
  sourceRefs: refs(value["sourceRefs"], "Section sourceRefs")
});
var parseStrictSection = (input2) => {
  const value = record(input2, "Section");
  exactKeys(value, sectionKeys, "Section");
  return sectionFrom(value);
};
var parseRomanticInterpretation = (input2) => {
  const value = record(input2, "Romantic interpretation");
  exactKeys(value, [
    ...sectionKeys,
    "affectionStyle",
    "courtshipStyle",
    "attachmentNeeds",
    "preferredPartnerQualities",
    "relationshipStrengths",
    "relationshipDifficulties",
    "commitmentPattern"
  ], "Romantic interpretation");
  return {
    ...sectionFrom(value),
    affectionStyle: nullableText(value["affectionStyle"], "affectionStyle"),
    courtshipStyle: nullableText(value["courtshipStyle"], "courtshipStyle"),
    attachmentNeeds: nullableText(value["attachmentNeeds"], "attachmentNeeds"),
    preferredPartnerQualities: textList(value["preferredPartnerQualities"], "preferredPartnerQualities"),
    relationshipStrengths: textList(value["relationshipStrengths"], "relationshipStrengths"),
    relationshipDifficulties: textList(value["relationshipDifficulties"], "relationshipDifficulties"),
    commitmentPattern: nullableText(value["commitmentPattern"], "commitmentPattern")
  };
};
var parseSexualInterpretation = (input2) => {
  const value = record(input2, "Sexual interpretation");
  exactKeys(value, [
    ...sectionKeys,
    "desireStyle",
    "libidoPattern",
    "initiationStyle",
    "preferredPace",
    "physicalAffection",
    "likelyTurnOns",
    "likelyTurnOffs",
    "experimentationStyle",
    "emotionalSexConnection",
    "controlAndSurrender",
    "powerDynamics",
    "exclusivityPattern",
    "sexualCommunication",
    "likelyFrustrations"
  ], "Sexual interpretation");
  return {
    ...sectionFrom(value),
    desireStyle: nullableText(value["desireStyle"], "desireStyle"),
    libidoPattern: nullableText(value["libidoPattern"], "libidoPattern"),
    initiationStyle: nullableText(value["initiationStyle"], "initiationStyle"),
    preferredPace: nullableText(value["preferredPace"], "preferredPace"),
    physicalAffection: nullableText(value["physicalAffection"], "physicalAffection"),
    likelyTurnOns: textList(value["likelyTurnOns"], "likelyTurnOns"),
    likelyTurnOffs: textList(value["likelyTurnOffs"], "likelyTurnOffs"),
    experimentationStyle: nullableText(value["experimentationStyle"], "experimentationStyle"),
    emotionalSexConnection: nullableText(value["emotionalSexConnection"], "emotionalSexConnection"),
    controlAndSurrender: nullableText(value["controlAndSurrender"], "controlAndSurrender"),
    powerDynamics: nullableText(value["powerDynamics"], "powerDynamics"),
    exclusivityPattern: nullableText(value["exclusivityPattern"], "exclusivityPattern"),
    sexualCommunication: nullableText(value["sexualCommunication"], "sexualCommunication"),
    likelyFrustrations: textList(value["likelyFrustrations"], "likelyFrustrations")
  };
};
var parseCareerInterpretation = (input2) => {
  const value = record(input2, "Career interpretation");
  exactKeys(value, [
    ...sectionKeys,
    "vocationalThemes",
    "suitableFields",
    "preferredWorkEnvironment",
    "leadershipStyle",
    "authorityRelationship",
    "ambitionPattern",
    "publicReputation",
    "careerStrengths",
    "careerRisks"
  ], "Career interpretation");
  return {
    ...sectionFrom(value),
    vocationalThemes: textList(value["vocationalThemes"], "vocationalThemes"),
    suitableFields: textList(value["suitableFields"], "suitableFields"),
    preferredWorkEnvironment: nullableText(value["preferredWorkEnvironment"], "preferredWorkEnvironment"),
    leadershipStyle: nullableText(value["leadershipStyle"], "leadershipStyle"),
    authorityRelationship: nullableText(value["authorityRelationship"], "authorityRelationship"),
    ambitionPattern: nullableText(value["ambitionPattern"], "ambitionPattern"),
    publicReputation: nullableText(value["publicReputation"], "publicReputation"),
    careerStrengths: textList(value["careerStrengths"], "careerStrengths"),
    careerRisks: textList(value["careerRisks"], "careerRisks")
  };
};
var parseMoneyInterpretation = (input2) => {
  const value = record(input2, "Money interpretation");
  exactKeys(value, [
    ...sectionKeys,
    "earningStyle",
    "spendingStyle",
    "securityNeeds",
    "riskTolerance",
    "materialStrengths",
    "financialBlindSpots"
  ], "Money interpretation");
  return {
    ...sectionFrom(value),
    earningStyle: nullableText(value["earningStyle"], "earningStyle"),
    spendingStyle: nullableText(value["spendingStyle"], "spendingStyle"),
    securityNeeds: nullableText(value["securityNeeds"], "securityNeeds"),
    riskTolerance: nullableText(value["riskTolerance"], "riskTolerance"),
    materialStrengths: textList(value["materialStrengths"], "materialStrengths"),
    financialBlindSpots: textList(value["financialBlindSpots"], "financialBlindSpots")
  };
};
var parseSystemSynthesis = (input2) => {
  const value = record(input2, "System synthesis");
  exactKeys(value, ["centralThemes", "contradictions", "gifts", "growthEdges", "narrative", "sourceRefs"], "System synthesis");
  return {
    centralThemes: textList(value["centralThemes"], "centralThemes"),
    contradictions: textList(value["contradictions"], "contradictions"),
    gifts: textList(value["gifts"], "gifts"),
    growthEdges: textList(value["growthEdges"], "growthEdges"),
    narrative: text(value["narrative"], "narrative"),
    sourceRefs: refs(value["sourceRefs"], "sourceRefs")
  };
};
var parseCompatibilityOverview = (input2) => {
  const value = record(input2, "Compatibility overview");
  exactKeys(value, ["overview", "sourceRefs"], "Compatibility overview");
  return {
    overview: text(value["overview"], "overview"),
    sourceRefs: refs(value["sourceRefs"], "sourceRefs")
  };
};
var parseSignCompatibility = (input2, expectedSign2) => {
  const value = record(input2, "Sign compatibility interpretation");
  exactKeys(value, [
    "sign",
    "summary",
    "dynamic",
    "strengths",
    "tensions",
    "attraction",
    "sustainability",
    "bestExpression",
    "sourceRefs"
  ], "Sign compatibility interpretation");
  if (value["sign"] !== expectedSign2) throw new TypeError(`Sign compatibility expected ${expectedSign2}`);
  return {
    sign: expectedSign2,
    summary: text(value["summary"], "summary"),
    dynamic: text(value["dynamic"], "dynamic"),
    strengths: textList(value["strengths"], "strengths"),
    tensions: textList(value["tensions"], "tensions"),
    attraction: nullableText(value["attraction"], "attraction"),
    sustainability: nullableText(value["sustainability"], "sustainability"),
    bestExpression: text(value["bestExpression"], "bestExpression"),
    sourceRefs: refs(value["sourceRefs"], "sourceRefs")
  };
};
var parseCrossSystem = (input2) => {
  const value = record(input2, "Cross-system interpretation");
  exactKeys(value, [
    "sharedThemes",
    "tropicalEmphasis",
    "siderealEmphasis",
    "apparentContradictions",
    "reconciliations",
    "synthesis",
    "sourceRefs"
  ], "Cross-system interpretation");
  return {
    sharedThemes: textList(value["sharedThemes"], "sharedThemes"),
    tropicalEmphasis: textList(value["tropicalEmphasis"], "tropicalEmphasis"),
    siderealEmphasis: textList(value["siderealEmphasis"], "siderealEmphasis"),
    apparentContradictions: textList(value["apparentContradictions"], "apparentContradictions"),
    reconciliations: textList(value["reconciliations"], "reconciliations"),
    synthesis: text(value["synthesis"], "synthesis"),
    sourceRefs: refs(value["sourceRefs"], "sourceRefs")
  };
};
var parseFinalSynthesis = (input2) => {
  const value = record(input2, "Final synthesis");
  exactKeys(value, [
    "essence",
    "definingThemes",
    "strongestAssets",
    "recurringTensions",
    "relationshipPattern",
    "sexualPattern",
    "friendshipPattern",
    "vocationalPattern",
    "moneyPattern",
    "developmentalArc",
    "closingPortrait",
    "sourceRefs"
  ], "Final synthesis");
  return {
    essence: text(value["essence"], "essence"),
    definingThemes: textList(value["definingThemes"], "definingThemes"),
    strongestAssets: textList(value["strongestAssets"], "strongestAssets"),
    recurringTensions: textList(value["recurringTensions"], "recurringTensions"),
    relationshipPattern: text(value["relationshipPattern"], "relationshipPattern"),
    sexualPattern: text(value["sexualPattern"], "sexualPattern"),
    friendshipPattern: text(value["friendshipPattern"], "friendshipPattern"),
    vocationalPattern: text(value["vocationalPattern"], "vocationalPattern"),
    moneyPattern: text(value["moneyPattern"], "moneyPattern"),
    developmentalArc: text(value["developmentalArc"], "developmentalArc"),
    closingPortrait: text(value["closingPortrait"], "closingPortrait"),
    sourceRefs: refs(value["sourceRefs"], "sourceRefs")
  };
};
var compatibilityDomain = (domain2, overview, signs5) => ({
  domain: domain2,
  overview: overview.overview,
  sourceRefs: overview.sourceRefs,
  signs: signs5
});

// src/chart/assemble.ts
import { compatibilityDomains as compatibilityDomains2 } from "astral-core";

// src/chart/name.ts
var generatedNamePattern = /^[\p{L}\p{N}]+-[\p{L}\p{N}]+-[\p{L}\p{N}]+$/u;

// src/interpretation/corpus/worldview.ts
var technicalProperNames = [
  "part of spirit",
  "lot of spirit",
  "part of fortune",
  "lot of fortune"
];
var shieldTechnicalProperNames = (value) => technicalProperNames.reduce(
  (current, name) => current.replaceAll(new RegExp(`\\b${name.replaceAll(" ", "\\s+")}\\b`, "giu"), " technical-point "),
  value
);
var rules = [
  {
    category: "religious_doctrine",
    severity: "reject",
    reason: "asserts or assumes religious doctrine",
    patterns: [
      /\b(?:heaven|hell|religious salvation|salvation from sin|original sin)\b/giu,
      /\b(?:angel|guardian angel|demon)s?\b/giu
    ]
  },
  {
    category: "religious_agency",
    severity: "reject",
    reason: "assigns events or obligations to religious agency",
    patterns: [
      /\b(?:god|gods|a deity|the deity|a higher power)\s+(?:(?:has|have|had|is|are|was|were|will|would|can|could|may|might|should)\s+)?(?:wants?|wanted|wanting|asks?|asked|asking|gives?|gave|given|giving|sends?|sent|sending|places?|placed|placing|chooses?|chose|chosen|choosing|decides?|decided|deciding|intends?|intended|intending|guides?|guided|guiding|punishes?|punished|punishing|rewards?|rewarded|rewarding)\b/giu,
      /\b(?:god[- ]given|god's plan|divine punishment|divine reward)\b/giu
    ]
  },
  {
    category: "divine_agency",
    severity: "reject",
    reason: "assigns purpose or causation to divine intention",
    patterns: [
      /\bdivin(?:e|ely)\s+(?:intended|ordained|guided|chosen|sent|placed|planned|purposed|meant)\b/giu,
      /\bdivine\s+(?:will|purpose|plan|intervention|calling|mission|lesson)\b/giu
    ]
  },
  {
    category: "karma_or_reincarnation",
    severity: "reject",
    reason: "assumes karma, reincarnation or past-life causation",
    patterns: [
      /\bkarma\b|\bkarmic\b/giu,
      /\bpast[- ]l(?:ife|ives)\b/giu,
      /\breincarnat(?:e|ed|es|ion|ions)\b/giu,
      /\bincarnat(?:e|ed|es|ion|ions)\b/giu
    ]
  },
  {
    category: "soul_assumption",
    severity: "reject",
    reason: "assumes a soul or soul-level obligation as fact",
    patterns: [
      /\b(?:your|their|the)\s+soul\b/giu,
      /\bsoul\s+(?:contract|purpose|mission|lesson|path|journey|choice|chose|chooses|agreement|agenda)s?\b/giu,
      /\bsoulmate\b|\bsoul mate\b/giu,
      /\bhigher self\b/giu
    ]
  },
  {
    category: "fate_or_predestination",
    severity: "reject",
    reason: "states or implies predestination as a fact",
    patterns: [
      /\b(?:fated|destined|predestined)\b/giu,
      /\b(?:fate|destiny|predestination)\b/giu,
      /\bmeant\s+to\s+(?:be|happen|meet|occur|become|experience)\b/giu,
      /\bwas\s+always\s+going\s+to\b/giu
    ]
  },
  {
    category: "supernatural_agency",
    severity: "reject",
    reason: "assumes supernatural intervention or causation",
    patterns: [
      /\bsupernatural\s+(?:agency|cause|causation|intervention|force|guidance)\b/giu,
      /\b(?:spirit guides?|guardian spirits?)\s+(?:(?:has|have|had|is|are|was|were|will|would|can|could|may|might|should)\s+)?(?:wants?|wanted|wanting|guides?|guided|guiding|sends?|sent|sending|places?|placed|placing|tells?|told|telling|asks?|asked|asking)\b/giu
    ]
  },
  {
    category: "cosmic_intentionality",
    severity: "reject",
    reason: "assigns intention or a plan to the universe, cosmos or life",
    patterns: [
      /\b(?:the\s+)?(?:universe|cosmos|life)\s+(?:(?:has|have|had|is|are|was|were|will|would|can|could|may|might|should)\s+)?(?:wants?|wanted|wanting|asks?|asked|asking|tells?|told|telling|sends?|sent|sending|places?|placed|placing|guides?|guided|guiding|chooses?|chose|chosen|choosing|intends?|intended|intending|plans?|planned|planning|decides?|decided|deciding|teaches?|taught|teaching)\b/giu,
      /\b(?:cosmic|universal)\s+(?:plan|purpose|intention|lesson|mission|design)\b/giu
    ]
  },
  {
    category: "spiritual_worldview",
    severity: "reject",
    reason: "imposes a spiritual worldview on the subject",
    patterns: [
      /\bspiritual\s+(?:destiny|obligation|mission|purpose|lesson|path|calling|development|evolution)\b/giu,
      /\bspiritually\s+(?:meant|called|guided|obliged|required)\s+to\b/giu,
      /\bsacred\s+(?:calling|mission|purpose|duty|path)\b/giu
    ]
  },
  {
    category: "cosmic_intentionality",
    severity: "review",
    reason: "may imply an external purpose or directing agency without naming it",
    patterns: [
      /\b(?:person|relationship|encounter|experience|challenge|event|opportunity)\s+(?:entered|came|arrived|appeared)\s+(?:into\s+)?(?:your|their)\s+life\s+for\s+a\s+reason\b/giu,
      /\b(?:placed|put|sent)\s+(?:in|on)\s+(?:your|their)\s+path\b/giu,
      /\b(?:life|circumstances|events)\s+(?:brings?|sends?|places?)\s+.+\s+when\s+(?:you|they)\s+are\s+ready\b/giu,
      /\b(?:part|piece)\s+of\s+(?:a|the)\s+larger\s+(?:plan|design)\b/giu
    ]
  }
];
var matchedFindings = (raw2) => {
  const value = shieldTechnicalProperNames(raw2);
  const findings = [];
  for (const rule of rules) {
    for (const pattern of rule.patterns) {
      pattern.lastIndex = 0;
      for (const match of value.matchAll(pattern)) {
        const phrase2 = match[0]?.trim();
        if (!phrase2) continue;
        findings.push({
          category: rule.category,
          severity: rule.severity,
          phrase: phrase2,
          reason: rule.reason
        });
      }
    }
  }
  return findings;
};
var dedupe = (findings) => {
  const seen = /* @__PURE__ */ new Set();
  const output = [];
  for (const finding of findings) {
    const key = `${finding.category}:${finding.severity}:${finding.phrase.toLocaleLowerCase("en-GB")}:${finding.path ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(finding);
  }
  return output;
};
var auditWorldviewText = (value) => {
  const findings = dedupe(matchedFindings(value));
  return {
    safe: !findings.some(({ severity }) => severity === "reject"),
    requiresReview: findings.some(({ severity }) => severity === "review"),
    findings
  };
};
var record2 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var finalChartNonInterpretivePath = (path) => path === "astral-chart.subject" || path.startsWith("astral-chart.subject.") || path === "astral-chart.provenance" || path.startsWith("astral-chart.provenance.");
var auditWorldviewObject = (value, path = "$") => {
  const findings = [];
  const visit3 = (current, currentPath, key) => {
    if (key === "sourceRefs" || key === "forbiddenClaims" || key === "composition" || finalChartNonInterpretivePath(currentPath)) return;
    if (typeof current === "string") {
      findings.push(...matchedFindings(current).map((finding) => ({ ...finding, path: currentPath })));
      return;
    }
    if (Array.isArray(current)) {
      current.forEach((item, index) => visit3(item, `${currentPath}[${index}]`, null));
      return;
    }
    if (!record2(current)) return;
    Object.entries(current).forEach(([childKey, child]) => visit3(child, `${currentPath}.${childKey}`, childKey));
  };
  visit3(value, path, null);
  const unique2 = dedupe(findings);
  return {
    safe: !unique2.some(({ severity }) => severity === "reject"),
    requiresReview: unique2.some(({ severity }) => severity === "review"),
    findings: unique2
  };
};
var categoryPresent = (findings, category) => findings.some((finding) => finding.category === category);
var auditSourceNeutrality = (passage) => {
  const audit = auditWorldviewText(passage);
  return {
    religiousDoctrine: categoryPresent(audit.findings, "religious_doctrine"),
    religiousAgency: categoryPresent(audit.findings, "religious_agency"),
    divineAgency: categoryPresent(audit.findings, "divine_agency"),
    karmaOrReincarnation: categoryPresent(audit.findings, "karma_or_reincarnation"),
    soulAssumption: categoryPresent(audit.findings, "soul_assumption"),
    fateOrPredestination: categoryPresent(audit.findings, "fate_or_predestination"),
    supernaturalAgency: categoryPresent(audit.findings, "supernatural_agency"),
    cosmicIntentionality: categoryPresent(audit.findings, "cosmic_intentionality"),
    assumesSpiritualWorldview: categoryPresent(audit.findings, "spiritual_worldview"),
    safeForAgnosticCorpus: audit.safe && !audit.requiresReview,
    requiresReview: audit.requiresReview,
    confidence: audit.findings.length === 0 ? 1 : audit.requiresReview && audit.safe ? 0.55 : 0.99,
    findings: audit.findings
  };
};
var worldviewFailureMessages = (audit) => audit.findings.map((finding) => {
  const location = finding.path === void 0 ? "interpretation" : finding.path;
  const prefix = finding.severity === "review" ? "requires worldview review" : "violates worldview neutrality";
  return `${location} ${prefix}: ${finding.reason} (${finding.phrase})`;
});
var assertAgnosticText = (value, context) => {
  const audit = auditWorldviewText(value);
  if (audit.safe && !audit.requiresReview) return;
  throw new Error(`${context} failed worldview-neutrality policy: ${worldviewFailureMessages(audit).join("; ")}`);
};

// src/ref/resolve.ts
var part = (value) => value.replaceAll("~1", "/").replaceAll("~0", "~");
var resolveRef = (root2, ref2) => {
  if (!ref2.startsWith("#/")) throw new Error(`Invalid local JSON reference: ${ref2}`);
  let current = root2;
  for (const token of ref2.slice(2).split("/").map(part)) {
    if (Array.isArray(current)) {
      if (!/^\d+$/u.test(token)) throw new Error(`Array reference is not an index: ${ref2}`);
      current = current[Number(token)];
    } else if (current !== null && typeof current === "object") {
      current = current[token];
    } else {
      current = void 0;
    }
    if (current === void 0) throw new Error(`Unresolved JSON reference: ${ref2}`);
  }
  return current;
};
var refsValid = (root2, refs3, allowed) => refs3.every((ref2) => {
  if (!allowed.has(ref2)) return false;
  try {
    const value = resolveRef(root2, ref2);
    if (value && typeof value === "object" && "status" in value) {
      const status4 = value.status;
      return status4 !== "unavailable" && status4 !== "unsupported";
    }
    return true;
  } catch {
    return false;
  }
});

// src/chart/assemble.ts
import { signs as signs2 } from "astral-core";
var pointIds2 = [
  "sun",
  "moon",
  "mercury",
  "venus",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
  "north_node_true",
  "south_node_true",
  "north_node_mean",
  "south_node_mean",
  "ascendant",
  "descendant",
  "midheaven",
  "imum_coeli",
  "vertex",
  "antivertex",
  "east_point",
  "part_of_fortune",
  "part_of_spirit",
  "lilith_mean",
  "lilith_true"
];
var lifeSections2 = [
  "identityAndPurpose",
  "emotionalNature",
  "mindAndCommunication",
  "romance",
  "sexuality",
  "committedPartnerships",
  "homeAndFamily",
  "childhoodPatterns",
  "creativityAndSelfExpression",
  "childrenAndNurturing",
  "friendship",
  "communityAndGroups",
  "workStyle",
  "careerAndVocation",
  "businessAndLeadership",
  "moneyAndMaterialSecurity",
  "publicLifeAndAmbition",
  "conflictAndAssertion",
  "growthAndOpportunity",
  "restrictionsAndResponsibility",
  "transformationAndCrisis",
  "spiritualityAndMeaning",
  "unconsciousPatterns",
  "wellbeingAndDailyRhythm",
  "developmentalDirection"
];
var localRef = (value) => `#/${value}`;
var resultMapValid = (calculation, run) => {
  const expected = calculation.interpretationPlan.units.map(({ id }) => id);
  const actual = Object.keys(run.units);
  if (new Set(expected).size !== expected.length) throw new Error("Interpretation plan contains duplicate unit IDs");
  if (new Set(actual).size !== actual.length) throw new Error("Interpretation run contains duplicate unit IDs");
  const expectedSet = new Set(expected);
  const missing = expected.filter((id) => !(id in run.units));
  const unexpected = actual.filter((id) => !expectedSet.has(id));
  if (missing.length > 0) throw new Error(`Interpretation run is missing units: ${missing.join(", ")}`);
  if (unexpected.length > 0) throw new Error(`Interpretation run contains unexpected units: ${unexpected.join(", ")}`);
};
var sourceRefs = (value, id) => {
  if (!("sourceRefs" in value) || !Array.isArray(value.sourceRefs)) {
    throw new TypeError(`Interpretation unit ${id} has no sourceRefs array`);
  }
  if (!value.sourceRefs.every((ref2) => typeof ref2 === "string" && ref2.startsWith("#/"))) {
    throw new TypeError(`Interpretation unit ${id} contains invalid sourceRefs`);
  }
  return value.sourceRefs;
};
var reader = (calculation, run) => {
  resultMapValid(calculation, run);
  const plan = new Map(calculation.interpretationPlan.units.map((unit2) => [unit2.id, unit2]));
  const root2 = { "astral-calculation": calculation };
  const result = (id) => {
    const value = run.units[id];
    if (!value) throw new Error(`Interpretation unit ${id} is missing`);
    if (value.id !== id) throw new Error(`Interpretation result key ${id} contains mismatched ID ${value.id}`);
    if (!Number.isSafeInteger(value.attempts) || value.attempts < 1) throw new Error(`Interpretation unit ${id} has invalid attempts`);
    if (value.model.trim().length === 0) throw new Error(`Interpretation unit ${id} has no model`);
    return value;
  };
  return {
    result,
    value: (id, parse2) => {
      const unit2 = plan.get(id);
      if (!unit2) throw new Error(`Interpretation unit ${id} is not in the plan`);
      const parsed3 = parse2(result(id).value);
      if (!refsValid(root2, sourceRefs(parsed3, id), new Set(unit2.allowedSourceRefs))) {
        throw new Error(`Interpretation unit ${id} contains unresolved, unavailable or unpermitted source references`);
      }
      return parsed3;
    }
  };
};
var section = (values, id) => values.value(id, parseStrictSection);
var life = (values, zodiac) => {
  const output = {};
  const ordinary = output;
  for (const key of lifeSections2) {
    const id = `${zodiac}.life.${key}`;
    switch (key) {
      case "romance":
        output.romance = values.value(id, parseRomanticInterpretation);
        break;
      case "sexuality":
        output.sexuality = values.value(id, parseSexualInterpretation);
        break;
      case "careerAndVocation":
        output.careerAndVocation = values.value(id, parseCareerInterpretation);
        break;
      case "moneyAndMaterialSecurity":
        output.moneyAndMaterialSecurity = values.value(id, parseMoneyInterpretation);
        break;
      default:
        ordinary[key] = section(values, id);
    }
  }
  return output;
};
var points = (values, zodiac) => {
  const output = {};
  for (const id of pointIds2) output[id] = section(values, `${zodiac}.point.${id}`);
  return output;
};
var houses = (values, zodiac) => {
  const output = {};
  for (let house = 1; house <= 12; house += 1) {
    output[String(house)] = section(values, `${zodiac}.house.${house}`);
  }
  return output;
};
var system = (calculation, values) => {
  const zodiac = calculation.system.zodiac;
  const deterministic = calculation.system;
  return {
    zodiac,
    overview: section(values, `${zodiac}.overview`),
    bigThree: {
      sun: section(values, `${zodiac}.big-three.sun`),
      moon: section(values, `${zodiac}.big-three.moon`),
      ascendant: section(values, `${zodiac}.big-three.ascendant`)
    },
    points: points(values, zodiac),
    houses: houses(values, zodiac),
    aspects: deterministic.aspects.map(({ id }) => ({ id, section: section(values, `${zodiac}.aspect.${id}`) })),
    patterns: deterministic.patterns.map(({ id }) => ({ id, section: section(values, `${zodiac}.pattern.${id}`) })),
    lunar: {
      phase: section(values, `${zodiac}.lunar.phase`),
      nodes: section(values, `${zodiac}.lunar.nodes`),
      lilith: section(values, `${zodiac}.lunar.lilith`)
    },
    eclipses: {
      atBirth: section(values, `${zodiac}.eclipse.at-birth`),
      prenatalSolar: section(values, `${zodiac}.eclipse.prenatal-solar`),
      prenatalLunar: section(values, `${zodiac}.eclipse.prenatal-lunar`)
    },
    rulershipAndDignity: section(values, `${zodiac}.rulership-dignity`),
    chartBalance: section(values, `${zodiac}.chart-balance`),
    dominantThemes: section(values, `${zodiac}.dominant-themes`),
    life: life(values, zodiac),
    synthesis: values.value(`${zodiac}.synthesis`, parseSystemSynthesis)
  };
};
var domain = (values, zodiac, domainId) => {
  const signValues = {};
  for (const sign of signs2) {
    signValues[sign] = values.value(
      `${zodiac}.compatibility.${domainId}.${sign}`,
      (value) => parseSignCompatibility(value, sign)
    );
  }
  return compatibilityDomain(
    domainId,
    values.value(`${zodiac}.compatibility.${domainId}.overview`, parseCompatibilityOverview),
    signValues
  );
};
var compatibility = (values, zodiac) => {
  const domains = {};
  for (const domainId of compatibilityDomains2) domains[domainId] = domain(values, zodiac, domainId);
  return { zodiac, method: "natal_to_sign_archetype", domains };
};
var subject = (calculation, generatedName) => {
  const provided = calculation.subject.providedName?.trim();
  if (provided) {
    return {
      name: {
        value: provided,
        source: "provided",
        sourceRefs: [localRef("astral-calculation/subject/providedName")]
      }
    };
  }
  if (!generatedName || !generatedNamePattern.test(generatedName)) {
    throw new Error("A generated chart name must contain exactly three hyphenated words when no subject name is provided");
  }
  return {
    name: {
      value: generatedName,
      source: "generated",
      sourceRefs: [localRef("astral-calculation/provenance/calculationFingerprint")]
    }
  };
};
var assertFinalWorldviewNeutrality = (chart) => {
  const audit = auditWorldviewObject(chart, "astral-chart");
  if (audit.safe && !audit.requiresReview) return;
  throw new Error(`Final chart failed worldview-neutrality audit: ${worldviewFailureMessages(audit).join("; ")}`);
};
var assembleChart = (calculation, run, options) => {
  const values = reader(calculation, run);
  if (!calculation.interpretationPlan.units.some(({ id }) => id === "final-synthesis")) {
    throw new Error("Interpretation plan is missing final-synthesis");
  }
  const phases = calculation.interpretationPlan.units.map((unit2) => {
    const result = values.result(unit2.id);
    return {
      id: unit2.id,
      schema: options.unitSchemas?.[unit2.id] ?? "astral-interpretation-unit/1.1.0",
      model: result.model,
      attempts: result.attempts
    };
  });
  const zodiac = calculation.system.zodiac;
  const chart = {
    schema: "astral-chart/1.1.0",
    subject: subject(calculation, options.generatedName),
    zodiac,
    system: system(calculation, values),
    compatibility: compatibility(values, zodiac),
    finalSynthesis: values.value("final-synthesis", parseFinalSynthesis),
    provenance: {
      generatedAt: options.generatedAt,
      bigModel: options.bigModel,
      smallModel: options.smallModel,
      structuredOutputSchema: options.structuredOutputSchema,
      promptCatalogue: options.promptCatalogue,
      astrologyCatalogue: options.astrologyCatalogue,
      nlpAuditProfile: options.nlpAuditProfile,
      interpretationCalls: run.calls,
      retries: run.retries,
      sharedConversation: false,
      orchestration: "bounded_waves",
      conversationCount: run.conversationIds?.length ?? 1,
      waves: run.waves ?? 0,
      snapshotRevision: run.snapshotRevision ?? 0,
      phases
    }
  };
  assertFinalWorldviewNeutrality(chart);
  return chart;
};

// src/interpretation/corpus/requirements.ts
import { compatibilityDomains as compatibilityDomains3 } from "astral-core";
var bodies = [
  "sun",
  "moon",
  "mercury",
  "venus",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto"
];
var points2 = [
  "north-node",
  "south-node",
  "black-moon-lilith",
  "part-of-fortune",
  "part-of-spirit"
];
var angles = [
  "ascendant",
  "descendant",
  "midheaven",
  "imum-coeli",
  "vertex",
  "antivertex",
  "east-point"
];
var signs3 = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces"
];
var aspects = [
  "conjunction",
  "opposition",
  "trine",
  "square",
  "sextile",
  "quincunx",
  "semisextile",
  "semisquare",
  "sesquiquadrate",
  "quintile",
  "biquintile"
];
var conditions = [
  "element-fire",
  "element-earth",
  "element-air",
  "element-water",
  "modality-cardinal",
  "modality-fixed",
  "modality-mutable",
  "polarity-active",
  "polarity-receptive",
  "hemisphere-eastern",
  "hemisphere-western",
  "hemisphere-northern",
  "hemisphere-southern",
  "house-mode-angular",
  "house-mode-succedent",
  "house-mode-cadent"
];
var patterns = [
  "stellium",
  "t-square",
  "grand-trine",
  "grand-cross",
  "yod",
  "kite",
  "mystic-rectangle",
  "grand-sextile",
  "thor-hammer"
];
var derived = [
  "lunar-phase",
  "eclipses-at-birth",
  "eclipses-prenatal-solar",
  "eclipses-prenatal-lunar",
  "rulership-dignity",
  "chart-balance",
  "dominant-themes"
];
var lifeDomains = [
  "identityAndPurpose",
  "emotionalNature",
  "mindAndCommunication",
  "romance",
  "sexuality",
  "committedPartnerships",
  "homeAndFamily",
  "childhoodPatterns",
  "creativityAndSelfExpression",
  "childrenAndNurturing",
  "friendship",
  "communityAndGroups",
  "workStyle",
  "careerAndVocation",
  "businessAndLeadership",
  "moneyAndMaterialSecurity",
  "publicLifeAndAmbition",
  "conflictAndAssertion",
  "growthAndOpportunity",
  "restrictionsAndResponsibility",
  "transformationAndCrisis",
  "spiritualityAndMeaning",
  "unconsciousPatterns",
  "wellbeingAndDailyRhythm",
  "developmentalDirection"
];
var requiredCorpusAtomIds = [
  ...bodies.map((id) => `body.${id}`),
  ...points2.map((id) => `point.${id}`),
  ...angles.map((id) => `angle.${id}`),
  ...signs3.map((id) => `sign.${id}`),
  ...Array.from({ length: 12 }, (_, index) => `house.${index + 1}`),
  ...aspects.map((id) => `aspect.${id}`),
  ...conditions.map((id) => `condition.${id}`),
  ...patterns.map((id) => `pattern.${id}`),
  ...derived.map((id) => `derived.${id}`),
  ...lifeDomains.map((id) => `life-domain.${id}`),
  ...compatibilityDomains3.map((id) => `compatibility-domain.${id.replaceAll("_", "-")}`),
  "synthesis.overview",
  "synthesis.system-synthesis",
  "synthesis.final-synthesis"
];
var requiredCorpusAtomSet = new Set(requiredCorpusAtomIds);

// src/interpretation/corpus/compile.ts
var corpusPolicyVersion = "astral-corpus-policy/1.1.0";
var interpretationCorpusVersion = "astral-interpretation-corpus/0.2.0";
var unique = (values, kind) => {
  const output = /* @__PURE__ */ new Map();
  for (const value of values) {
    if (output.has(value.id)) throw new Error(`Duplicate ${kind} ID ${value.id}`);
    output.set(value.id, value);
  }
  return output;
};
var parseSourceRef = (ref2) => {
  const hash = ref2.indexOf("#");
  if (hash < 0) return { sourceId: ref2, sectionId: null };
  return {
    sourceId: ref2.slice(0, hash),
    sectionId: ref2.slice(hash + 1) || null
  };
};
var validateSourceForSemanticIngestion = (source, passage) => {
  if (source.role !== "semantic") {
    throw new Error(`Source ${source.id} is not approved for semantic corpus ingestion`);
  }
  if (source.reviewStatus !== "approved") {
    throw new Error(`Source ${source.id} has not been explicitly approved for semantic corpus ingestion`);
  }
  const audit = auditSourceNeutrality(passage);
  if (!audit.safeForAgnosticCorpus) {
    throw new Error(`Source passage ${source.id} failed worldview-neutrality policy`);
  }
};
var validateCorpusClaim = (claim) => {
  if (claim.neutrality.religious || claim.neutrality.spiritual || claim.neutrality.karmic || claim.neutrality.fatalistic || claim.neutrality.supernatural) {
    throw new Error(`Corpus claim ${claim.id} carries a non-agnostic neutrality marker`);
  }
  assertAgnosticText(claim.proposition, `Corpus claim ${claim.id}`);
  if (claim.sourceRefs.length === 0) {
    throw new Error(`Corpus claim ${claim.id} requires at least one approved source reference`);
  }
};
var validateAtom = (atom2, sources2) => {
  if (atom2.reviewStatus !== "approved") {
    throw new Error(`Corpus atom ${atom2.id} is not approved for production compilation`);
  }
  if (atom2.plainEnglish.trim().length === 0) throw new Error(`Corpus atom ${atom2.id} has no plain-English semantic label`);
  assertAgnosticText(atom2.plainEnglish, `Corpus atom ${atom2.id}`);
  if (atom2.sourceIds.length === 0) throw new Error(`Corpus atom ${atom2.id} has no semantic source provenance`);
  for (const sourceId of atom2.sourceIds) {
    const source = sources2.get(sourceId);
    if (source === void 0) throw new Error(`Corpus atom ${atom2.id} references unknown source ${sourceId}`);
    if (source.role !== "semantic" || source.reviewStatus !== "approved") {
      throw new Error(`Corpus atom ${atom2.id} references source ${sourceId} that is not an approved semantic source`);
    }
  }
};
var validateClaimProvenance = (claim, sources2) => {
  for (const ref2 of claim.sourceRefs) {
    const { sourceId, sectionId } = parseSourceRef(ref2);
    const source = sources2.get(sourceId);
    if (source === void 0) throw new Error(`Corpus claim ${claim.id} references unknown source ${sourceId}`);
    if (source.role !== "semantic" || source.reviewStatus !== "approved") {
      throw new Error(`Corpus claim ${claim.id} references source ${sourceId} that is not an approved semantic source`);
    }
    if (sectionId === null) {
      throw new Error(`Corpus claim ${claim.id} must reference an approved section of source ${sourceId}`);
    }
    if (!source.allowedSections.includes(sectionId)) {
      throw new Error(`Corpus claim ${claim.id} references unapproved section ${sourceId}#${sectionId}`);
    }
  }
};
var compileInterpretationCorpus = (input2) => {
  const sources2 = unique(input2.sources, "source");
  const atoms = unique(input2.atoms, "atom");
  const claims = unique(input2.claims, "claim");
  for (const atom2 of atoms.values()) validateAtom(atom2, sources2);
  for (const claim of claims.values()) {
    validateCorpusClaim(claim);
    validateClaimProvenance(claim, sources2);
    const atom2 = atoms.get(claim.atomId);
    if (atom2 === void 0) throw new Error(`Corpus claim ${claim.id} references unknown atom ${claim.atomId}`);
    if (!atom2.claimIds.includes(claim.id)) {
      throw new Error(`Corpus claim ${claim.id} is not declared by atom ${claim.atomId}`);
    }
  }
  for (const atom2 of atoms.values()) {
    if (atom2.claimIds.length === 0) throw new Error(`Corpus atom ${atom2.id} has no semantic claims`);
    for (const claimId of atom2.claimIds) {
      const claim = claims.get(claimId);
      if (claim === void 0) throw new Error(`Corpus atom ${atom2.id} references missing claim ${claimId}`);
      if (claim.atomId !== atom2.id) throw new Error(`Corpus atom ${atom2.id} owns claim ${claimId} assigned to ${claim.atomId}`);
    }
  }
  if (input2.requireComplete === true) {
    const missing = requiredCorpusAtomIds.filter((id) => !atoms.has(id));
    if (missing.length > 0) {
      throw new Error(`Production corpus is incomplete; missing required atoms: ${missing.join(", ")}`);
    }
  }
  return {
    schema: "astral-interpretation-corpus/1.0.0",
    policyVersion: corpusPolicyVersion,
    corpusVersion: interpretationCorpusVersion,
    worldview: "agnostic",
    sources: [...sources2.values()],
    atoms: Object.fromEntries([...atoms.entries()]),
    claims: Object.fromEntries([...claims.entries()])
  };
};
var validateInterpretationMap = (map) => {
  if (map.neutrality.worldview !== "agnostic") {
    throw new Error(`Interpretation map ${map.unitId} must declare an agnostic worldview`);
  }
  if (map.provenance.corpusVersion.trim().length === 0) {
    throw new Error(`Interpretation map ${map.unitId} requires a corpus version`);
  }
  const audit = auditWorldviewObject(map, `interpretationMap.${map.unitId}`);
  if (!audit.safe || audit.requiresReview) {
    throw new Error(`Interpretation map ${map.unitId} failed worldview-neutrality policy`);
  }
};

// src/interpretation/corpus/types.ts
var agnosticNeutrality = {
  worldview: "agnostic"
};

// src/interpretation/corpus/xml.ts
var corpusXmlFormat = "astral-corpus-xml/1.0.0";
var sourceRoles = ["calculation", "semantic", "architecture"];
var reviewStatuses = ["approved", "pending", "rejected"];
var atomKinds = ["entity", "domain", "style", "relation", "condition", "derived-construct"];
var claimCategories = ["core", "constructive", "difficult", "developmental", "interaction"];
var claimConfidences = ["core", "well-supported", "school-specific", "experimental"];
var xmlName = /^[A-Za-z_][A-Za-z0-9_.:-]*$/u;
var decodeEntity = (token, documentName) => {
  switch (token) {
    case "amp":
      return "&";
    case "lt":
      return "<";
    case "gt":
      return ">";
    case "quot":
      return '"';
    case "apos":
      return "'";
    default: {
      const value = token.startsWith("#x") || token.startsWith("#X") ? Number.parseInt(token.slice(2), 16) : token.startsWith("#") ? Number.parseInt(token.slice(1), 10) : Number.NaN;
      if (!Number.isSafeInteger(value) || value < 0 || value > 1114111 || value >= 55296 && value <= 57343) {
        throw new Error(`${documentName}: unsupported XML entity &${token};`);
      }
      return String.fromCodePoint(value);
    }
  }
};
var decodeXmlText = (value, documentName) => {
  let output = "";
  let offset = 0;
  while (offset < value.length) {
    const amp = value.indexOf("&", offset);
    if (amp < 0) return output + value.slice(offset);
    output += value.slice(offset, amp);
    const end = value.indexOf(";", amp + 1);
    if (end < 0) throw new Error(`${documentName}: unescaped ampersand in XML text`);
    output += decodeEntity(value.slice(amp + 1, end), documentName);
    offset = end + 1;
  }
  return output;
};
var parseAttributes = (raw2, documentName, elementName) => {
  const attributes = {};
  let remaining = raw2.trim();
  const pattern = /^([A-Za-z_][A-Za-z0-9_.:-]*)\s*=\s*(?:"([^"]*)"|'([^']*)')\s*/u;
  while (remaining.length > 0) {
    const match = pattern.exec(remaining);
    if (match === null || match[1] === void 0) {
      throw new Error(`${documentName}: malformed attributes on <${elementName}>`);
    }
    const name = match[1];
    if (!xmlName.test(name)) throw new Error(`${documentName}: invalid XML attribute name ${name}`);
    if (attributes[name] !== void 0) throw new Error(`${documentName}: duplicate XML attribute ${name} on <${elementName}>`);
    attributes[name] = decodeXmlText(match[2] ?? match[3] ?? "", documentName);
    remaining = remaining.slice(match[0].length);
  }
  return attributes;
};
var appendText = (node, raw2, documentName) => {
  const decoded = decodeXmlText(raw2, documentName).replaceAll(/\s+/gu, " ").trim();
  if (decoded.length === 0) return;
  node.text = node.text.length === 0 ? decoded : `${node.text} ${decoded}`;
};
var parseXmlDocument = (source, documentName) => {
  if (/<!DOCTYPE\b|<!ENTITY\b/iu.test(source)) {
    throw new Error(`${documentName}: DTD and entity declarations are forbidden in corpus XML`);
  }
  const document = { name: "#document", attributes: {}, children: [], text: "" };
  const stack = [document];
  const token = /<\?xml\s[^?]*\?>|<!--[\s\S]*?-->|<\/([A-Za-z_][A-Za-z0-9_.:-]*)\s*>|<([A-Za-z_][A-Za-z0-9_.:-]*)([^<>]*?)\/\s*>|<([A-Za-z_][A-Za-z0-9_.:-]*)([^<>]*?)>|([^<]+)/gu;
  let offset = 0;
  for (const match of source.matchAll(token)) {
    if (match.index !== offset) throw new Error(`${documentName}: malformed XML near offset ${offset}`);
    offset = match.index + match[0].length;
    if (match[0].startsWith("<?xml") || match[0].startsWith("<!--")) continue;
    const closing = match[1];
    if (closing !== void 0) {
      if (stack.length === 1) throw new Error(`${documentName}: unexpected closing tag </${closing}>`);
      const current = stack.pop();
      if (current?.name !== closing) {
        throw new Error(`${documentName}: mismatched closing tag </${closing}> for <${current?.name ?? "unknown"}>`);
      }
      continue;
    }
    const selfClosing = match[2];
    if (selfClosing !== void 0) {
      const parent2 = stack.at(-1);
      if (parent2 === void 0) throw new Error(`${documentName}: XML parser lost its parent node`);
      parent2.children.push({
        name: selfClosing,
        attributes: parseAttributes(match[3] ?? "", documentName, selfClosing),
        children: [],
        text: ""
      });
      continue;
    }
    const opening = match[4];
    if (opening !== void 0) {
      const parent2 = stack.at(-1);
      if (parent2 === void 0) throw new Error(`${documentName}: XML parser lost its parent node`);
      const node = {
        name: opening,
        attributes: parseAttributes(match[5] ?? "", documentName, opening),
        children: [],
        text: ""
      };
      parent2.children.push(node);
      stack.push(node);
      continue;
    }
    const parent = stack.at(-1);
    if (parent === void 0) throw new Error(`${documentName}: XML parser lost its text parent`);
    appendText(parent, match[6] ?? "", documentName);
  }
  if (offset !== source.length) throw new Error(`${documentName}: malformed XML near offset ${offset}`);
  if (stack.length !== 1) throw new Error(`${documentName}: unclosed XML element <${stack.at(-1)?.name ?? "unknown"}>`);
  if (document.text.length > 0) throw new Error(`${documentName}: text is not allowed outside the root element`);
  if (document.children.length !== 1 || document.children[0] === void 0) {
    throw new Error(`${documentName}: expected exactly one XML root element`);
  }
  return document.children[0];
};
var assertAttributes = (node, allowed, documentName) => {
  const permitted = new Set(allowed);
  for (const name of Object.keys(node.attributes)) {
    if (!permitted.has(name)) throw new Error(`${documentName}: unexpected attribute ${name} on <${node.name}>`);
  }
};
var assertChildren = (node, allowed, documentName) => {
  const permitted = new Set(allowed);
  for (const child of node.children) {
    if (!permitted.has(child.name)) throw new Error(`${documentName}: unexpected <${child.name}> inside <${node.name}>`);
  }
};
var childrenNamed = (node, name) => node.children.filter((child) => child.name === name);
var oneChild = (node, name, documentName) => {
  const found = childrenNamed(node, name);
  if (found.length !== 1 || found[0] === void 0) {
    throw new Error(`${documentName}: <${node.name}> requires exactly one <${name}> child`);
  }
  return found[0];
};
var leafText = (node, documentName) => {
  if (node.children.length > 0) throw new Error(`${documentName}: <${node.name}> must contain text only`);
  if (Object.keys(node.attributes).length > 0) throw new Error(`${documentName}: <${node.name}> does not allow attributes`);
  return node.text;
};
var childText = (node, name, documentName) => leafText(oneChild(node, name, documentName), documentName);
var nullableChildText = (node, name, documentName) => {
  const child = oneChild(node, name, documentName);
  assertAttributes(child, ["null"], documentName);
  if (child.children.length > 0) throw new Error(`${documentName}: <${name}> must contain text only`);
  const nullMarker = child.attributes["null"];
  if (nullMarker === void 0) return child.text;
  if (nullMarker !== "true") throw new Error(`${documentName}: <${name}> null attribute must be true when present`);
  if (child.text.length > 0) throw new Error(`${documentName}: null <${name}> cannot also contain text`);
  return null;
};
var listText = (node, containerName, itemName, documentName) => {
  const container = oneChild(node, containerName, documentName);
  assertAttributes(container, [], documentName);
  assertChildren(container, [itemName], documentName);
  if (container.text.length > 0) throw new Error(`${documentName}: <${containerName}> may contain only <${itemName}> children`);
  return childrenNamed(container, itemName).map((item) => leafText(item, documentName));
};
var requiredAttribute = (node, name, documentName) => {
  const value = node.attributes[name];
  if (value === void 0 || value.length === 0) throw new Error(`${documentName}: <${node.name}> requires attribute ${name}`);
  return value;
};
var enumAttribute = (node, name, allowed, documentName) => {
  const value = requiredAttribute(node, name, documentName);
  if (!allowed.includes(value)) {
    throw new Error(`${documentName}: invalid ${name}=${value} on <${node.name}>`);
  }
  return value;
};
var verifyFormat = (node, documentName) => {
  const format = requiredAttribute(node, "format", documentName);
  if (format !== corpusXmlFormat) throw new Error(`${documentName}: unsupported corpus XML format ${format}`);
};
var parseCorpusSourceManifestXml = (xml, documentName = "sources.xml") => {
  const root2 = parseXmlDocument(xml, documentName);
  if (root2.name !== "sources") throw new Error(`${documentName}: expected <sources> root`);
  assertAttributes(root2, ["format"], documentName);
  assertChildren(root2, ["source"], documentName);
  verifyFormat(root2, documentName);
  if (root2.text.length > 0) throw new Error(`${documentName}: <sources> cannot contain direct text`);
  return childrenNamed(root2, "source").map((source) => {
    assertAttributes(source, ["id", "role", "review-status"], documentName);
    assertChildren(source, ["title", "author", "publisher", "edition-or-date", "allowed-sections", "notes"], documentName);
    if (source.text.length > 0) throw new Error(`${documentName}: <source> cannot contain direct text`);
    return {
      id: requiredAttribute(source, "id", documentName),
      title: childText(source, "title", documentName),
      author: nullableChildText(source, "author", documentName),
      publisher: nullableChildText(source, "publisher", documentName),
      editionOrDate: nullableChildText(source, "edition-or-date", documentName),
      role: enumAttribute(source, "role", sourceRoles, documentName),
      reviewStatus: enumAttribute(source, "review-status", reviewStatuses, documentName),
      allowedSections: listText(source, "allowed-sections", "section", documentName),
      notes: listText(source, "notes", "note", documentName)
    };
  });
};
var parseAtom = (atom2, documentName) => {
  assertAttributes(atom2, ["id", "kind", "review-status"], documentName);
  assertChildren(atom2, [
    "display-name",
    "plain-english",
    "aliases",
    "internal-ids",
    "claim-ids",
    "do-not-infer",
    "related-atom-ids",
    "source-ids"
  ], documentName);
  if (atom2.text.length > 0) throw new Error(`${documentName}: <atom> cannot contain direct text`);
  return {
    id: requiredAttribute(atom2, "id", documentName),
    kind: enumAttribute(atom2, "kind", atomKinds, documentName),
    displayName: childText(atom2, "display-name", documentName),
    plainEnglish: childText(atom2, "plain-english", documentName),
    aliases: listText(atom2, "aliases", "alias", documentName),
    internalIds: listText(atom2, "internal-ids", "internal-id", documentName),
    claimIds: listText(atom2, "claim-ids", "claim-id", documentName),
    doNotInfer: listText(atom2, "do-not-infer", "concept", documentName),
    relatedAtomIds: listText(atom2, "related-atom-ids", "atom-id", documentName),
    sourceIds: listText(atom2, "source-ids", "source-id", documentName),
    reviewStatus: enumAttribute(atom2, "review-status", reviewStatuses, documentName)
  };
};
var parseNeutrality = (claim, documentName) => {
  const neutrality = oneChild(claim, "neutrality", documentName);
  const fields = ["religious", "spiritual", "karmic", "fatalistic", "supernatural"];
  assertAttributes(neutrality, fields, documentName);
  assertChildren(neutrality, [], documentName);
  if (neutrality.text.length > 0) throw new Error(`${documentName}: <neutrality> must be empty`);
  for (const field of fields) {
    if (requiredAttribute(neutrality, field, documentName) !== "false") {
      throw new Error(`${documentName}: production corpus neutrality marker ${field} must be false`);
    }
  }
  return {
    religious: false,
    spiritual: false,
    karmic: false,
    fatalistic: false,
    supernatural: false
  };
};
var parseClaim = (claim, documentName) => {
  assertAttributes(claim, ["id", "atom-id", "category", "confidence"], documentName);
  assertChildren(claim, ["proposition", "tags", "source-refs", "neutrality"], documentName);
  if (claim.text.length > 0) throw new Error(`${documentName}: <claim> cannot contain direct text`);
  return {
    id: requiredAttribute(claim, "id", documentName),
    atomId: requiredAttribute(claim, "atom-id", documentName),
    category: enumAttribute(claim, "category", claimCategories, documentName),
    proposition: childText(claim, "proposition", documentName),
    tags: listText(claim, "tags", "tag", documentName),
    sourceRefs: listText(claim, "source-refs", "source-ref", documentName),
    neutrality: parseNeutrality(claim, documentName),
    confidence: enumAttribute(claim, "confidence", claimConfidences, documentName)
  };
};
var parseCorpusXmlDocument = (xml, documentName) => {
  const root2 = parseXmlDocument(xml, documentName);
  if (root2.name !== "corpus") throw new Error(`${documentName}: expected <corpus> root`);
  assertAttributes(root2, ["format", "category"], documentName);
  assertChildren(root2, ["atoms", "claims"], documentName);
  verifyFormat(root2, documentName);
  if (root2.text.length > 0) throw new Error(`${documentName}: <corpus> cannot contain direct text`);
  const atoms = oneChild(root2, "atoms", documentName);
  assertAttributes(atoms, [], documentName);
  assertChildren(atoms, ["atom"], documentName);
  if (atoms.text.length > 0) throw new Error(`${documentName}: <atoms> cannot contain direct text`);
  const claims = oneChild(root2, "claims", documentName);
  assertAttributes(claims, [], documentName);
  assertChildren(claims, ["claim"], documentName);
  if (claims.text.length > 0) throw new Error(`${documentName}: <claims> cannot contain direct text`);
  return {
    category: requiredAttribute(root2, "category", documentName),
    atoms: childrenNamed(atoms, "atom").map((atom2) => parseAtom(atom2, documentName)),
    claims: childrenNamed(claims, "claim").map((claim) => parseClaim(claim, documentName))
  };
};
var parseReviewedCorpusXml = (sourceManifestXml, sourceManifestName, documents) => {
  const sources2 = parseCorpusSourceManifestXml(sourceManifestXml, sourceManifestName);
  const atoms = [];
  const claims = [];
  const categories = [];
  const seenNames = /* @__PURE__ */ new Set();
  const seenCategories = /* @__PURE__ */ new Set();
  for (const document of documents) {
    if (seenNames.has(document.name)) throw new Error(`Duplicate corpus XML document name ${document.name}`);
    seenNames.add(document.name);
    const parsed3 = parseCorpusXmlDocument(document.xml, document.name);
    if (seenCategories.has(parsed3.category)) throw new Error(`Duplicate corpus XML category ${parsed3.category}`);
    seenCategories.add(parsed3.category);
    categories.push(parsed3.category);
    atoms.push(...parsed3.atoms);
    claims.push(...parsed3.claims);
  }
  return { sources: sources2, atoms, claims, categories };
};

// src/interpretation/corpus/data/xml.generated.ts
var corpusSourceManifestName = "sources.xml";
var corpusSourceManifestXml = '<?xml version="1.0" encoding="UTF-8"?>\n<sources format="astral-corpus-xml/1.0.0">\n  <source id="technical.swisseph.programming-interface" role="calculation" review-status="approved">\n    <title>Swiss Ephemeris Programming Interface</title>\n    <author>Astrodienst</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>planetary-lunar-calculations</section>\n      <section>lunar-nodes</section>\n      <section>houses</section>\n      <section>vertex-antivertex-geometry</section>\n      <section>coordinate-systems</section>\n    </allowed-sections>\n    <notes>\n      <note>Calculation reference only. Approval does not extend to interpretation prose on other Astrodienst documents or AstroWiki pages.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-sun-intro" role="semantic" review-status="approved">\n    <title>The transits of the planets: The Sun - Introduction</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>central-function</section>\n      <section>qualities-integration</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_sun_intro_e.htm</note>\n      <note>Cosmic-mind and soul language elsewhere on the page is excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-moon-effects" role="semantic" review-status="approved">\n    <title>The transits of the planets - Effects of the transiting Moon</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>inward-opening</section>\n      <section>personal-private</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_moon_effects_z.htm?lang=e</note>\n      <note>Spiritual, incarnational and paranormal material elsewhere on the page is excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-mercury-intro" role="semantic" review-status="approved">\n    <title>The Transits of the Planets - Mercury - Introduction</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>communication-information</section>\n      <section>clear-communication</section>\n      <section>confused-communication</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_mercury_intro_e.htm</note>\n      <note>Philosophical logos language outside the reviewed passages is excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-venus-intro" role="semantic" review-status="approved">\n    <title>The transits of the planets - Venus - Introduction</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>qualities-connection</section>\n      <section>qualities-aesthetics</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_venus_intro_p.htm?lang=e</note>\n      <note>Mythological material is not used as interpretation provenance.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-mars-intro" role="semantic" review-status="approved">\n    <title>The transits of the planets - Mars - Introduction</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>natal-protection-separateness</section>\n      <section>natal-anger-vitality</section>\n      <section>qualities-energy-separation</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_mars_intro_e.htm</note>\n      <note>Gender-essentialist, mythological and philosophical passages are excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-jupiter-effects" role="semantic" review-status="approved">\n    <title>The transits of the planets - Effects of transiting Jupiter</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>inward-visibility</section>\n      <section>inward-growth</section>\n      <section>inward-risk</section>\n      <section>outward-learning</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_jupiter_effects_e.htm</note>\n      <note>Religious and transcendent passages later in the article are excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-saturn-intro" role="semantic" review-status="approved">\n    <title>The transits of the planets - Saturn - Introduction</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>reality-system</section>\n      <section>rules-limits-discipline</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_saturn_intro_e.htm</note>\n      <note>The article&apos;s discussion of fate and enlightenment is outside the approved passages.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-uranus-intro" role="semantic" review-status="approved">\n    <title>The transits of the planets - Uranus - Introduction</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>opening-change-boundaries</section>\n      <section>innovation-technology</section>\n      <section>adaptation-new-ideas</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_uranus_intro_e.htm</note>\n      <note>Spiritual-awakening wording elsewhere on the page is excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-neptune-intro" role="semantic" review-status="approved">\n    <title>The transits of the planets - Neptune - Introduction</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>opening-loss-of-clarity</section>\n      <section>qualities-blurred-distinctions</section>\n      <section>outward-confusion</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_neptune_intro_e.htm</note>\n      <note>Spiritual, psychic, divinatory and religious material is excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-pluto-effects" role="semantic" review-status="approved">\n    <title>The Transits of the Planets - Effects of Transiting Pluto</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>inward-change-pressure</section>\n      <section>inward-power-warning</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_pluto_effects_e.htm</note>\n      <note>Fate, transcendence, spiritual-teacher and religious material elsewhere on the page is excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-moon-nodes" role="semantic" review-status="approved">\n    <title>The transits of the planets - Transits of the Moon</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>node-network-cycle</section>\n      <section>north-node-initiation</section>\n      <section>south-node-consequences</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_moon_transits_e.htm</note>\n      <note>Only the Lunar Nodes section describing network interaction and the North/South phases is approved. Other Moon transit sections may contain religious, paranormal or gender-essentialist wording and are excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.lot-fortune-spirit" role="semantic" review-status="approved">\n    <title>The Lot or Part of Fortune</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>fortune-physical-social-world</section>\n      <section>fortune-material-support</section>\n      <section>spirit-will-intention</section>\n      <section>spirit-chosen-career-direction</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_fortune_e.htm</note>\n      <note>Only the named neutral passages are approved. Karmic, soul, spiritual-basis-of-illness, death, sex-role and other worldview-dependent material elsewhere in the article is excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.transits-jupiter-angles" role="semantic" review-status="approved">\n    <title>The transits of the planets - Transits of Jupiter</title>\n    <author>Robert Hand</author>\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>ascendant-presentation</section>\n      <section>descendant-world-facing</section>\n      <section>midheaven-life-direction</section>\n      <section>ic-home-history</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_hand2_jupiter_transits_e.htm</note>\n      <note>Only the descriptive angle passages are approved. Religious, transcendent, fate, universal-purpose and predictive claims elsewhere on the page are excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.brief-intro-aspects" role="semantic" review-status="approved">\n    <title>A Brief Introduction to Astrology: Aspects</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>conjunction</section>\n      <section>opposition</section>\n      <section>square</section>\n      <section>trine</section>\n      <section>sextile</section>\n      <section>semisquare</section>\n      <section>sesquiquadrate</section>\n      <section>semisextile</section>\n      <section>quincunx</section>\n      <section>quintile</section>\n      <section>biquintile</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_aspect_e.htm</note>\n      <note>Approved only for the relationship behaviour assigned to the named aspects. Orb tables and unrelated material are not semantic claims.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.brief-intro-houses" role="semantic" review-status="approved">\n    <title>A Brief Introduction to Astrology: Houses</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>house-1-self-presentation</section>\n      <section>house-2-values-resources</section>\n      <section>house-3-communication-local-relations</section>\n      <section>house-4-home-origins</section>\n      <section>house-5-creativity-pleasure-children</section>\n      <section>house-6-work-routine-care</section>\n      <section>house-7-partnerships</section>\n      <section>house-8-shared-resources-loss</section>\n      <section>house-9-worldview-learning-travel</section>\n      <section>house-10-career-public-development</section>\n      <section>house-11-friends-groups-society</section>\n      <section>house-12-retreat-withdrawal-institutions</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_house2_e.htm</note>\n      <note>Only the practical life-domain descriptions are approved.</note>\n      <note>House 8 metaphysical/death framing, House 9 religious or spiritual assumptions, and House 12 religious-institution framing are excluded.</note>\n      <note>Gendered parent assignments are not carried into corpus claims.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.brief-intro-signs" role="semantic" review-status="approved">\n    <title>A Brief Introduction to Astrology: The Signs</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>sign-aries-summary</section>\n      <section>sign-taurus-summary</section>\n      <section>sign-gemini-summary</section>\n      <section>sign-cancer-summary</section>\n      <section>sign-leo-summary</section>\n      <section>sign-virgo-summary</section>\n      <section>sign-libra-summary</section>\n      <section>sign-scorpio-summary</section>\n      <section>sign-sagittarius-summary</section>\n      <section>sign-capricorn-summary</section>\n      <section>sign-aquarius-summary</section>\n      <section>sign-pisces-summary</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_signs_e.htm</note>\n      <note>Approved only for the short sign summaries and their element/mode descriptions.</note>\n      <note>Longer personality essays, gendered generalisations, religious/spiritual language and deterministic claims are excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.brief-intro-elements" role="semantic" review-status="approved">\n    <title>A Brief Introduction to Astrology: The four Elements and the Signs</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>fire-style</section>\n      <section>earth-style</section>\n      <section>air-style</section>\n      <section>water-style</section>\n      <section>cardinal-mode</section>\n      <section>fixed-mode</section>\n      <section>mutable-mode</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_elements_e.htm</note>\n      <note>Approved for element and modality expression styles only. Claims that these classifications establish objective personality facts are not imported.</note>\n    </notes>\n  </source>\n  <source id="semantic.tompkins.contemporary-handbook" role="semantic" review-status="pending">\n    <title>The Contemporary Astrologer&apos;s Handbook</title>\n    <author>Sue Tompkins</author>\n    <publisher null="true" />\n    <edition-or-date null="true" />\n    <allowed-sections>\n    </allowed-sections>\n    <notes>\n      <note>Candidate for planets, signs, houses, elements, modes, aspects, nodes and synthesis.</note>\n      <note>Exact edition and passages still require review.</note>\n    </notes>\n  </source>\n  <source id="semantic.tompkins.aspects" role="semantic" review-status="pending">\n    <title>Aspects in Astrology</title>\n    <author>Sue Tompkins</author>\n    <publisher null="true" />\n    <edition-or-date null="true" />\n    <allowed-sections>\n    </allowed-sections>\n    <notes>\n      <note>Candidate for planetary principles and aspect composition.</note>\n      <note>Combination essays are not used as canned readings.</note>\n    </notes>\n  </source>\n  <source id="semantic.hand.horoscope-symbols" role="semantic" review-status="pending">\n    <title>Horoscope Symbols</title>\n    <author>Robert Hand</author>\n    <publisher null="true" />\n    <edition-or-date null="true" />\n    <allowed-sections>\n    </allowed-sections>\n    <notes>\n      <note>Candidate for fundamental symbolic principles, points, aspects, signs, angles and houses.</note>\n      <note>Exact passages still require review.</note>\n    </notes>\n  </source>\n  <source id="semantic.martin.mapping-psyche-2" role="semantic" review-status="pending">\n    <title>Mapping the Psyche, Volume 2</title>\n    <author>Clare Martin</author>\n    <publisher>Centre for Psychological Astrology</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n    </allowed-sections>\n    <notes>\n      <note>Candidate for aspects, houses, angles and lunar nodes.</note>\n      <note>Any worldview-dependent passage is rejected rather than rewritten into the corpus.</note>\n    </notes>\n  </source>\n  <source id="architecture.hall-shaw.valens-combination" role="architecture" review-status="approved">\n    <title>The logic of planetary combination in Vettius Valens</title>\n    <author>Hall and Shaw</author>\n    <publisher>arXiv</publisher>\n    <edition-or-date>2022</edition-or-date>\n    <allowed-sections>\n      <section>combinatorial-structure</section>\n    </allowed-sections>\n    <notes>\n      <note>Architecture reference only; it cannot provide interpretation claims.</note>\n    </notes>\n  </source>\n  <source id="semantic.project.interpretation-domain-taxonomy" role="semantic" review-status="approved">\n    <title>Interpretation domain taxonomy</title>\n    <author>Online Arcana</author>\n    <publisher>Online Arcana</publisher>\n    <edition-or-date>2026-08-10</edition-or-date>\n    <allowed-sections>\n      <section>life-identity-and-purpose</section>\n      <section>life-emotional-nature</section>\n      <section>life-mind-and-communication</section>\n      <section>life-romance</section>\n      <section>life-sexuality</section>\n      <section>life-committed-partnerships</section>\n      <section>life-home-and-family</section>\n      <section>life-childhood-patterns</section>\n      <section>life-creativity-and-self-expression</section>\n      <section>life-children-and-nurturing</section>\n      <section>life-friendship</section>\n      <section>life-community-and-groups</section>\n      <section>life-work-style</section>\n      <section>life-career-and-vocation</section>\n      <section>life-business-and-leadership</section>\n      <section>life-money-and-material-security</section>\n      <section>life-public-life-and-ambition</section>\n      <section>life-conflict-and-assertion</section>\n      <section>life-growth-and-opportunity</section>\n      <section>life-restrictions-and-responsibility</section>\n      <section>life-transformation-and-crisis</section>\n      <section>life-spirituality-and-meaning</section>\n      <section>life-unconscious-patterns</section>\n      <section>life-wellbeing-and-daily-rhythm</section>\n      <section>life-developmental-direction</section>\n      <section>compatibility-overall</section>\n      <section>compatibility-romantic</section>\n      <section>compatibility-sexual</section>\n      <section>compatibility-emotional</section>\n      <section>compatibility-communication</section>\n      <section>compatibility-intellectual</section>\n      <section>compatibility-friendship</section>\n      <section>compatibility-business</section>\n      <section>compatibility-domestic</section>\n      <section>compatibility-long-term</section>\n      <section>compatibility-conflict-resolution</section>\n      <section>compatibility-spiritual</section>\n      <section>synthesis-overview</section>\n      <section>synthesis-system-synthesis</section>\n      <section>synthesis-final-synthesis</section>\n    </allowed-sections>\n    <notes>\n      <note>Project-owned output taxonomy. It defines what a section is responsible for; it does not supply astrological meanings for chart factors.</note>\n      <note>Astrological claims used inside these domains must still come from independently approved corpus atoms and chart evidence.</note>\n    </notes>\n  </source>\n  <source id="semantic.project.chart-balance-categories" role="semantic" review-status="approved">\n    <title>Chart balance category definitions</title>\n    <author>Online Arcana</author>\n    <publisher>Online Arcana</publisher>\n    <edition-or-date>2026-08-10</edition-or-date>\n    <allowed-sections>\n      <section>polarity-active</section>\n      <section>polarity-receptive</section>\n      <section>hemisphere-eastern</section>\n      <section>hemisphere-western</section>\n      <section>hemisphere-northern</section>\n      <section>hemisphere-southern</section>\n      <section>house-mode-angular</section>\n      <section>house-mode-succedent</section>\n      <section>house-mode-cadent</section>\n    </allowed-sections>\n    <notes>\n      <note>Project-owned definitions of categories used by src/derived/calculate.ts.</note>\n      <note>Polarity, hemisphere and house-mode scores are descriptive weighted groupings. They do not independently authorise personality traits, diagnoses or predictions.</note>\n    </notes>\n  </source>\n  <source id="semantic.mirti.black-moon-lilith" role="semantic" review-status="approved">\n    <title>Lilith - Black Moon: A Golden Ally in the Astrological Interpretation</title>\n    <author>Grazia Mirti</author>\n    <publisher>Constellation News / Astrodienst</publisher>\n    <edition-or-date>2020-03-24</edition-or-date>\n    <allowed-sections>\n      <section>unfulfilled-wishes-lacks</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/ivccn_article200506_e.htm</note>\n      <note>Approval is limited to the sentence treating Black Moon Lilith as an indicator of unfulfilled wishes, lacks and areas needing closer attention.</note>\n      <note>Mythology, religion, spirituality, gender archetypes, medical associations, sexual-orientation claims and other material elsewhere in the article are excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.local-space-vertex-axis" role="semantic" review-status="approved">\n    <title>Local Space Astrology</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>vertex-antivertex-event-oriented</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrology/in_localspace_e.htm</note>\n      <note>Approved only for the comparison that Vertex/Anti-Vertex contacts are treated as more objective or event-oriented than Ascendant/Descendant contacts, and that both ends of the axis should be considered.</note>\n      <note>No claim of fate, destiny, inevitable manifestation or supernatural causation is approved.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.equatorial-ascendant-minor" role="semantic" review-status="approved">\n    <title>The Overconfidence of Jupiter</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>equatorial-ascendant-minor-ascendant</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrologia/in_mdbjupiter_e.htm</note>\n      <note>Approval is limited to the statement that the equatorial Ascendant acts as a minor Ascendant.</note>\n      <note>Predictive, eclipse and fate-related material elsewhere in the article is excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.pattern.stellium" role="semantic" review-status="approved">\n    <title>Stellium - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>interpretation-core</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Stellium</note>\n      <note>Approved only for the opening interpretation on emphasis and reciprocal planetary effects.</note>\n      <note>Approval is limited to the project-distilled neutral proposition; other text on the page is not approved automatically.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.pattern.t-square" role="semantic" review-status="approved">\n    <title>T-square - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>interpretation-core</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/T-Square</note>\n      <note>Approved only for the structural/focal interpretation. Compulsion or inevitability wording is not imported.</note>\n      <note>Approval is limited to the project-distilled neutral proposition; other text on the page is not approved automatically.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.pattern.grand-trine" role="semantic" review-status="approved">\n    <title>Grand Trine - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>interpretation-core</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Grand_Trine</note>\n      <note>Approved only for the neutral interpretation of support, comfort and possible underuse. Esoteric, divine-number, grace and cosmic-gift wording is excluded.</note>\n      <note>Approval is limited to the project-distilled neutral proposition; other text on the page is not approved automatically.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.pattern.grand-cross" role="semantic" review-status="approved">\n    <title>Grand Cross - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>interpretation-core</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Grand_Cross</note>\n      <note>Approved for the description of stability, inflexibility, effort and commitment. Inevitability wording is excluded.</note>\n      <note>Approval is limited to the project-distilled neutral proposition; other text on the page is not approved automatically.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.pattern.yod" role="semantic" review-status="approved">\n    <title>Yod - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>interpretation-core</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Yod</note>\n      <note>Approved only for the neutral quincunx/sextile/focal-point description. The Finger of God name and divine-task quotation are excluded.</note>\n      <note>Approval is limited to the project-distilled neutral proposition; other text on the page is not approved automatically.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.pattern.kite" role="semantic" review-status="approved">\n    <title>Kite - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>interpretation-core</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Kite</note>\n      <note>Approved for the neutral interaction of trines, sextiles, opposition and focal planet.</note>\n      <note>Approval is limited to the project-distilled neutral proposition; other text on the page is not approved automatically.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.pattern.mystic-rectangle" role="semantic" review-status="approved">\n    <title>Mystic Rectangle - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>interpretation-core</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Rectangle</note>\n      <note>Approved only for the trine/sextile relief of opposition tension. The historical &apos;practical mysticism&apos; label is not imported as a claim.</note>\n      <note>Approval is limited to the project-distilled neutral proposition; other text on the page is not approved automatically.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.pattern.grand-sextile" role="semantic" review-status="approved">\n    <title>Grand Sextile - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>interpretation-core</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Grand_Sextile</note>\n      <note>Approved for the neutral interpretation of strengthened sextile support and coordinated activity.</note>\n      <note>Approval is limited to the project-distilled neutral proposition; other text on the page is not approved automatically.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.pattern.thor-hammer" role="semantic" review-status="approved">\n    <title>Thor&apos;s Hammer - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>interpretation-core</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Thor%27s_Hammer</note>\n      <note>Approved only for the geometric pattern and the neutral idea of concentrated tension with a focal outlet. Mythology and behavioural determinism are excluded.</note>\n      <note>Approval is limited to the project-distilled neutral proposition; other text on the page is not approved automatically.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.derived.dignities" role="semantic" review-status="approved">\n    <title>Dignities - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>expression-alignment</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Dignities</note>\n      <note>Approved only for the statement that dignity describes expression which closely resembles a planet&apos;s inherent astrological character.</note>\n      <note>Historical, horary and value-laden material elsewhere on the page is not imported.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.derived.essential-dignities" role="semantic" review-status="approved">\n    <title>Essential Dignities - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>relative-strength</section>\n      <section>five-dignities</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Essential_Dignities</note>\n      <note>Approved for the relative-strength definition and the traditional dignity categories only.</note>\n      <note>Malefic, benevolent and predictive judgement language is excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.derived.dominance" role="semantic" review-status="approved">\n    <title>Dominance - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>relative-prominence</section>\n      <section>multiple-methods</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Dominance</note>\n      <note>Approved for relative prominence and the fact that astrologers use multiple methods to calculate dominance.</note>\n      <note>The application&apos;s own score remains authoritative for charts produced by this project.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.derived.lunar-phase" role="semantic" review-status="approved">\n    <title>Lunar Phase - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>sun-moon-relationship</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Lunar_Phase</note>\n      <note>Approved only for the definition of lunar phase as the changing astronomical relationship between Moon and Sun.</note>\n      <note>Nakshatra, religious and unrelated lunar-mansion material is excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.derived.waxing-waning" role="semantic" review-status="approved">\n    <title>Waxing and Waning - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>illumination-direction</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Waxing_and_Waning</note>\n      <note>Approved only for the descriptive distinction that waxing illumination increases from New to Full Moon and waning illumination decreases from Full to New Moon.</note>\n      <note>Electional, farming and auspiciousness claims are excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.project.derived-chart-calculations" role="semantic" review-status="approved">\n    <title>Derived chart calculation contract</title>\n    <author>Online Arcana</author>\n    <publisher>Online Arcana</publisher>\n    <edition-or-date>2026-08-10</edition-or-date>\n    <allowed-sections>\n      <section>dignity-record</section>\n      <section>chart-balance</section>\n      <section>dominant-score</section>\n    </allowed-sections>\n    <notes>\n      <note>Project-owned semantics for deterministic fields calculated by src/derived/calculate.ts and the dignity subsystem.</note>\n      <note>These sections describe what the project&apos;s scores and aggregates represent; they do not add external astrological doctrine.</note>\n    </notes>\n  </source>\n  <source id="semantic.astrodienst.eclipse-context" role="semantic" review-status="approved">\n    <title>Eclipse - Astrodienst Astrowiki</title>\n    <author null="true" />\n    <publisher>Astrodienst</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>modern-trigger-context</section>\n      <section>solar-new-moon-node</section>\n      <section>lunar-full-moon-node</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.astro.com/astrowiki/en/Eclipses</note>\n      <note>Approved for the modern-astrology statement that eclipses are used as contextual activators of contacted chart factors and for the Sun-Moon-node geometry distinguishing solar and lunar eclipses.</note>\n      <note>Traditional omens, malefic judgement, event prediction, breakthrough/conclusion claims and claims about eclipse power are excluded.</note>\n    </notes>\n  </source>\n  <source id="semantic.zodisphere.prenatal-eclipse-definition" role="semantic" review-status="approved">\n    <title>Prenatal Eclipse - Astrology Definition</title>\n    <author null="true" />\n    <publisher>Zodisphere</publisher>\n    <edition-or-date null="true" />\n    <allowed-sections>\n      <section>sensitive-degree-definition</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://zodisphere.com/glossary/prenatal-eclipse</note>\n      <note>Approved only for the modern-practice definition of a prenatal eclipse as a sensitised chart degree associated with an eclipse before birth.</note>\n      <note>No predictive activation claim is imported into the production corpus.</note>\n    </notes>\n  </source>\n  <source id="semantic.augurine.prenatal-eclipse-context" role="semantic" review-status="approved">\n    <title>Prenatal Eclipse Calculator: The Eclipse Before Birth</title>\n    <author null="true" />\n    <publisher>Augurine</publisher>\n    <edition-or-date>2026-06-19</edition-or-date>\n    <allowed-sections>\n      <section>read-in-context-not-verdict</section>\n    </allowed-sections>\n    <notes>\n      <note>Reviewed public source: https://www.augurine.com/tools/prenatal-eclipse-calculator</note>\n      <note>Approval is limited to the guidance that a prenatal eclipse is read in context with sign, house, node and the rest of the chart and is not a verdict or prediction.</note>\n      <note>Universal-destiny, forward/backward-pull, spiritual, karmic and other source material discussed elsewhere on the page is excluded.</note>\n    </notes>\n  </source>\n</sources>\n';
var corpusXmlDocuments = [
  { name: "angles.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="angles">\n  <atoms>\n    <atom id="angle.ascendant" kind="entity" review-status="approved">\n      <display-name>Ascendant</display-name>\n      <plain-english>self-presentation and direct outward interaction</plain-english>\n      <aliases>\n        <alias>Ascendant</alias>\n        <alias>Rising Sign</alias>\n        <alias>ASC</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>ascendant</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>angle.ascendant.core.presentation</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>physical appearance as certainty</concept>\n        <concept>the whole identity</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>angle.descendant</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-jupiter-angles</source-id>\n      </source-ids>\n    </atom>\n    <atom id="angle.descendant" kind="entity" review-status="approved">\n      <display-name>Descendant</display-name>\n      <plain-english>the other-facing side of interaction and relational response</plain-english>\n      <aliases>\n        <alias>Descendant</alias>\n        <alias>DSC</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>descendant</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>angle.descendant.core.other-facing</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a destined partner</concept>\n        <concept>soulmate</concept>\n        <concept>the exact traits of a future spouse</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>angle.ascendant</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-jupiter-angles</source-id>\n      </source-ids>\n    </atom>\n    <atom id="angle.midheaven" kind="entity" review-status="approved">\n      <display-name>Midheaven</display-name>\n      <plain-english>public direction, career and social role</plain-english>\n      <aliases>\n        <alias>Midheaven</alias>\n        <alias>Medium Coeli</alias>\n        <alias>MC</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>midheaven</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>angle.midheaven.core.direction</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>divine calling</concept>\n        <concept>destined career</concept>\n        <concept>one fixed life purpose</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>angle.imum-coeli</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-jupiter-angles</source-id>\n      </source-ids>\n    </atom>\n    <atom id="angle.imum-coeli" kind="entity" review-status="approved">\n      <display-name>Imum Coeli</display-name>\n      <plain-english>home, origins, private foundation and personal history</plain-english>\n      <aliases>\n        <alias>Imum Coeli</alias>\n        <alias>IC</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>imum_coeli</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>angle.imum-coeli.core.home-history</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>ancestral karma</concept>\n        <concept>past lives</concept>\n        <concept>a predetermined family fate</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>angle.midheaven</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-jupiter-angles</source-id>\n      </source-ids>\n    </atom>\n    <atom id="angle.vertex" kind="entity" review-status="approved">\n      <display-name>Vertex</display-name>\n      <plain-english>a supplementary relationship angle for comparatively external or event-oriented context</plain-english>\n      <aliases>\n        <alias>Vertex</alias>\n        <alias>Vx</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>vertex</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>angle.vertex.core.event-oriented</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>fated events</concept>\n        <concept>destined encounters</concept>\n        <concept>inevitable relationships</concept>\n        <concept>alternate realities</concept>\n        <concept>supernatural causation</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>angle.antivertex</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.local-space-vertex-axis</source-id>\n      </source-ids>\n    </atom>\n    <atom id="angle.antivertex" kind="entity" review-status="approved">\n      <display-name>Antivertex</display-name>\n      <plain-english>the opposite end of the Vertex axis and a supplementary event-oriented context angle</plain-english>\n      <aliases>\n        <alias>Antivertex</alias>\n        <alias>Anti-Vertex</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>antivertex</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>angle.antivertex.core.event-axis</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>fate</concept>\n        <concept>destiny</concept>\n        <concept>inevitable events</concept>\n        <concept>supernatural intervention</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>angle.vertex</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.local-space-vertex-axis</source-id>\n      </source-ids>\n    </atom>\n    <atom id="angle.east-point" kind="entity" review-status="approved">\n      <display-name>East Point</display-name>\n      <plain-english>a minor Ascendant providing supplementary context for outward self-presentation</plain-english>\n      <aliases>\n        <alias>East Point</alias>\n        <alias>Equatorial Ascendant</alias>\n        <alias>EqAsc</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>east_point</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>angle.east-point.core.minor-ascendant</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a soul-level identity</concept>\n        <concept>karma</concept>\n        <concept>past incarnations</concept>\n        <concept>a universal true self</concept>\n        <concept>public destiny</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>angle.ascendant</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.equatorial-ascendant-minor</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="angle.ascendant.core.presentation" atom-id="angle.ascendant" category="core" confidence="core">\n      <proposition>The Ascendant is associated with the part of personality that is presented outward and used in direct interaction with other people.</proposition>\n      <tags>\n        <tag>self-presentation</tag>\n        <tag>outward expression</tag>\n        <tag>interaction</tag>\n        <tag>visible personality</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-jupiter-angles#ascendant-presentation</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="angle.descendant.core.other-facing" atom-id="angle.descendant" category="core" confidence="well-supported">\n      <proposition>The Descendant is associated with the other-facing side of interaction: how other people and the surrounding world seem to present themselves in relation to the chart owner.</proposition>\n      <tags>\n        <tag>other people</tag>\n        <tag>relational response</tag>\n        <tag>interaction</tag>\n        <tag>world-facing</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-jupiter-angles#descendant-world-facing</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="angle.midheaven.core.direction" atom-id="angle.midheaven" category="core" confidence="core">\n      <proposition>The Midheaven is associated with public direction, career or profession, social role and the direction in which a person&apos;s visible activity develops.</proposition>\n      <tags>\n        <tag>life direction</tag>\n        <tag>career</tag>\n        <tag>social role</tag>\n        <tag>public activity</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-jupiter-angles#midheaven-life-direction</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="angle.imum-coeli.core.home-history" atom-id="angle.imum-coeli" category="core" confidence="well-supported">\n      <proposition>The Imum Coeli is associated with the home-and-origin side of the MC-IC axis, including early and current home life and the background from which later public direction develops.</proposition>\n      <tags>\n        <tag>home</tag>\n        <tag>origins</tag>\n        <tag>private foundation</tag>\n        <tag>personal history</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-jupiter-angles#ic-home-history</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="angle.vertex.core.event-oriented" atom-id="angle.vertex" category="core" confidence="school-specific">\n      <proposition>The Vertex is used as a supplementary relationship angle whose contacts are treated as comparatively external or event-oriented rather than primarily as descriptions of attitude or personality.</proposition>\n      <tags>\n        <tag>external circumstances</tag>\n        <tag>event-oriented</tag>\n        <tag>supplementary relationship angle</tag>\n        <tag>interaction</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.local-space-vertex-axis#vertex-antivertex-event-oriented</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="angle.antivertex.core.event-axis" atom-id="angle.antivertex" category="core" confidence="school-specific">\n      <proposition>The Antivertex is the opposite end of the Vertex axis and is interpreted together with the Vertex as a supplementary angle for comparatively external or event-oriented context.</proposition>\n      <tags>\n        <tag>Vertex axis</tag>\n        <tag>external circumstances</tag>\n        <tag>event-oriented</tag>\n        <tag>supplementary angle</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.local-space-vertex-axis#vertex-antivertex-event-oriented</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="angle.east-point.core.minor-ascendant" atom-id="angle.east-point" category="core" confidence="school-specific">\n      <proposition>The East Point, or Equatorial Ascendant, is used by some astrologers as a secondary or minor Ascendant and can therefore add supplementary context to outward self-presentation.</proposition>\n      <tags>\n        <tag>minor Ascendant</tag>\n        <tag>self-presentation</tag>\n        <tag>supplementary angle</tag>\n        <tag>outward expression</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.equatorial-ascendant-minor#equatorial-ascendant-minor-ascendant</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' },
  { name: "aspects.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="aspects">\n  <atoms>\n    <atom id="aspect.conjunction" kind="relation" review-status="approved">\n      <display-name>Conjunction</display-name>\n      <plain-english>direct linking and mutual conditioning</plain-english>\n      <aliases>\n        <alias>Conjunction</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>conjunction</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.conjunction.interaction.link</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>two principles becoming literally identical</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="aspect.opposition" kind="relation" review-status="approved">\n      <display-name>Opposition</display-name>\n      <plain-english>polarity, tension and adjustment</plain-english>\n      <aliases>\n        <alias>Opposition</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>opposition</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.opposition.interaction.tension</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>inevitable conflict</concept>\n        <concept>a destined confrontation</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="aspect.square" kind="relation" review-status="approved">\n      <display-name>Square</display-name>\n      <plain-english>friction between competing demands</plain-english>\n      <aliases>\n        <alias>Square</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>square</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.square.interaction.competing-demands</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>punishment</concept>\n        <concept>a cosmic test</concept>\n        <concept>inevitable failure</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="aspect.trine" kind="relation" review-status="approved">\n      <display-name>Trine</display-name>\n      <plain-english>comparatively easy cooperation and complementarity</plain-english>\n      <aliases>\n        <alias>Trine</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>trine</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.trine.interaction.facilitation</claim-id>\n        <claim-id>aspect.trine.constructive.available-capacity</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>guaranteed talent</concept>\n        <concept>guaranteed success</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="aspect.sextile" kind="relation" review-status="approved">\n      <display-name>Sextile</display-name>\n      <plain-english>supportive cooperation that can be developed</plain-english>\n      <aliases>\n        <alias>Sextile</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>sextile</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.sextile.interaction.supportive</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>guaranteed opportunity</concept>\n        <concept>guaranteed success</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="aspect.quincunx" kind="relation" review-status="approved">\n      <display-name>Quincunx</display-name>\n      <plain-english>minor context-dependent contact and adjustment</plain-english>\n      <aliases>\n        <alias>Quincunx</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>quincunx</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.quincunx.interaction.neutral-adjustment</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="aspect.semisextile" kind="relation" review-status="approved">\n      <display-name>Semisextile</display-name>\n      <plain-english>minor context-dependent contact</plain-english>\n      <aliases>\n        <alias>Semisextile</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>semisextile</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.semisextile.interaction.neutral-contact</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="aspect.semisquare" kind="relation" review-status="approved">\n      <display-name>Semisquare</display-name>\n      <plain-english>minor friction and pressure</plain-english>\n      <aliases>\n        <alias>Semisquare</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>semisquare</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.semisquare.interaction.friction</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="aspect.sesquiquadrate" kind="relation" review-status="approved">\n      <display-name>Sesquiquadrate</display-name>\n      <plain-english>minor friction requiring adjustment</plain-english>\n      <aliases>\n        <alias>Sesquiquadrate</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>sesquiquadrate</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.sesquiquadrate.interaction.friction</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="aspect.quintile" kind="relation" review-status="approved">\n      <display-name>Quintile</display-name>\n      <plain-english>minor comparatively harmonious contact</plain-english>\n      <aliases>\n        <alias>Quintile</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>quintile</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.quintile.interaction.harmonious</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="aspect.biquintile" kind="relation" review-status="approved">\n      <display-name>Biquintile</display-name>\n      <plain-english>minor comparatively harmonious contact</plain-english>\n      <aliases>\n        <alias>Biquintile</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>biquintile</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>aspect.biquintile.interaction.harmonious</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-aspects</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="aspect.conjunction.interaction.link" atom-id="aspect.conjunction" category="interaction" confidence="core">\n      <proposition>A conjunction links two principles directly so that their expression becomes closely connected and each tends to condition the other.</proposition>\n      <tags>\n        <tag>direct connection</tag>\n        <tag>fusion</tag>\n        <tag>mutual conditioning</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#conjunction</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.opposition.interaction.tension" atom-id="aspect.opposition" category="interaction" confidence="core">\n      <proposition>An opposition places two principles across from one another, creating tension that can also motivate response, comparison and adjustment.</proposition>\n      <tags>\n        <tag>polarity</tag>\n        <tag>tension</tag>\n        <tag>motivation</tag>\n        <tag>adjustment</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#opposition</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.square.interaction.competing-demands" atom-id="aspect.square" category="interaction" confidence="core">\n      <proposition>A square describes friction between principles that can feel blocked or difficult to reconcile because they press in different directions.</proposition>\n      <tags>\n        <tag>friction</tag>\n        <tag>competing demands</tag>\n        <tag>blockage</tag>\n        <tag>active adjustment</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#square</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.trine.interaction.facilitation" atom-id="aspect.trine" category="interaction" confidence="core">\n      <proposition>A trine describes principles that tend to cooperate in a complementary and comparatively easy way.</proposition>\n      <tags>\n        <tag>ease</tag>\n        <tag>complementarity</tag>\n        <tag>cooperation</tag>\n        <tag>facilitation</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#trine</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.trine.constructive.available-capacity" atom-id="aspect.trine" category="constructive" confidence="well-supported">\n      <proposition>The ease of a trine can make a capacity readily available, although availability does not guarantee that a person will actively use it.</proposition>\n      <tags>\n        <tag>available capacity</tag>\n        <tag>natural ease</tag>\n        <tag>underuse</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#trine</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.sextile.interaction.supportive" atom-id="aspect.sextile" category="interaction" confidence="core">\n      <proposition>A sextile describes a generally supportive relationship between principles whose cooperation can be developed or used constructively.</proposition>\n      <tags>\n        <tag>support</tag>\n        <tag>cooperation</tag>\n        <tag>constructive opening</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#sextile</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.semisquare.interaction.friction" atom-id="aspect.semisquare" category="interaction" confidence="well-supported">\n      <proposition>A semisquare is a minor friction aspect and can be treated as a smaller-scale source of pressure or adjustment between two principles.</proposition>\n      <tags>\n        <tag>minor friction</tag>\n        <tag>pressure</tag>\n        <tag>adjustment</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#semisquare</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.sesquiquadrate.interaction.friction" atom-id="aspect.sesquiquadrate" category="interaction" confidence="well-supported">\n      <proposition>A sesquiquadrate is a minor friction aspect and can describe pressure that requires some active adjustment between the principles involved.</proposition>\n      <tags>\n        <tag>minor friction</tag>\n        <tag>pressure</tag>\n        <tag>active adjustment</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#sesquiquadrate</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.semisextile.interaction.neutral-contact" atom-id="aspect.semisextile" category="interaction" confidence="well-supported">\n      <proposition>A semisextile is a minor, relatively neutral contact whose meaning depends strongly on the two principles being connected.</proposition>\n      <tags>\n        <tag>minor contact</tag>\n        <tag>neutral relation</tag>\n        <tag>context dependent</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#semisextile</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.quincunx.interaction.neutral-adjustment" atom-id="aspect.quincunx" category="interaction" confidence="well-supported">\n      <proposition>A quincunx is a minor, relatively neutral contact that is best interpreted through the particular principles involved rather than assigned a fixed positive or negative result.</proposition>\n      <tags>\n        <tag>minor contact</tag>\n        <tag>adjustment</tag>\n        <tag>context dependent</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#quincunx</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.quintile.interaction.harmonious" atom-id="aspect.quintile" category="interaction" confidence="well-supported">\n      <proposition>A quintile is a minor aspect traditionally treated as comparatively harmonious between the principles involved.</proposition>\n      <tags>\n        <tag>minor harmony</tag>\n        <tag>cooperation</tag>\n        <tag>quintile</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#quintile</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="aspect.biquintile.interaction.harmonious" atom-id="aspect.biquintile" category="interaction" confidence="well-supported">\n      <proposition>A biquintile is a minor aspect traditionally treated as comparatively harmonious between the principles involved.</proposition>\n      <tags>\n        <tag>minor harmony</tag>\n        <tag>cooperation</tag>\n        <tag>biquintile</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-aspects#biquintile</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' },
  { name: "bodies.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="bodies">\n  <atoms>\n    <atom id="body.sun" kind="entity" review-status="approved">\n      <display-name>Sun</display-name>\n      <plain-english>central identity, conscious direction and organising focus</plain-english>\n      <aliases>\n        <alias>Sun</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>sun</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>body.sun.core.central-direction</claim-id>\n        <claim-id>body.sun.constructive.integration</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>divine purpose</concept>\n        <concept>cosmic purpose</concept>\n        <concept>a fixed life mission</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-sun-intro</source-id>\n      </source-ids>\n    </atom>\n    <atom id="body.moon" kind="entity" review-status="approved">\n      <display-name>Moon</display-name>\n      <plain-english>feelings, moods, privacy and personally immediate experience</plain-english>\n      <aliases>\n        <alias>Moon</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>moon</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>body.moon.core.emotional-tone</claim-id>\n        <claim-id>body.moon.core.private-experience</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a soul</concept>\n        <concept>past-life memory</concept>\n        <concept>spiritual receptivity as fact</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-moon-effects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="body.mercury" kind="entity" review-status="approved">\n      <display-name>Mercury</display-name>\n      <plain-english>thinking, communication and information exchange</plain-english>\n      <aliases>\n        <alias>Mercury</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>mercury</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>body.mercury.core.communication</claim-id>\n        <claim-id>body.mercury.constructive.clarity</claim-id>\n        <claim-id>body.mercury.difficult.confusion</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>divine messages</concept>\n        <concept>supernatural communication</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-mercury-intro</source-id>\n      </source-ids>\n    </atom>\n    <atom id="body.venus" kind="entity" review-status="approved">\n      <display-name>Venus</display-name>\n      <plain-english>connection, affection, harmony and aesthetic preference</plain-english>\n      <aliases>\n        <alias>Venus</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>venus</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>body.venus.core.connection</claim-id>\n        <claim-id>body.venus.constructive.aesthetics</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a destined partner</concept>\n        <concept>soulmate status</concept>\n        <concept>divinely ordained love</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-venus-intro</source-id>\n      </source-ids>\n    </atom>\n    <atom id="body.mars" kind="entity" review-status="approved">\n      <display-name>Mars</display-name>\n      <plain-english>assertion, action, physical drive and boundary defence</plain-english>\n      <aliases>\n        <alias>Mars</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>mars</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>body.mars.core.assertion</claim-id>\n        <claim-id>body.mars.constructive.action</claim-id>\n        <claim-id>body.mars.difficult.anger</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>gender identity</concept>\n        <concept>biological sex</concept>\n        <concept>violence as inevitable</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-mars-intro</source-id>\n      </source-ids>\n    </atom>\n    <atom id="body.jupiter" kind="entity" review-status="approved">\n      <display-name>Jupiter</display-name>\n      <plain-english>growth, expansion, learning and broader experience</plain-english>\n      <aliases>\n        <alias>Jupiter</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>jupiter</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>body.jupiter.core.expansion</claim-id>\n        <claim-id>body.jupiter.constructive.learning</claim-id>\n        <claim-id>body.jupiter.difficult.overreach</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>divine favour</concept>\n        <concept>providential luck</concept>\n        <concept>religious belief</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-jupiter-effects</source-id>\n      </source-ids>\n    </atom>\n    <atom id="body.saturn" kind="entity" review-status="approved">\n      <display-name>Saturn</display-name>\n      <plain-english>limits, structure, discipline and practical constraints</plain-english>\n      <aliases>\n        <alias>Saturn</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>saturn</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>body.saturn.core.structure</claim-id>\n        <claim-id>body.saturn.constructive.discipline</claim-id>\n        <claim-id>body.saturn.difficult.rigidity</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>fate</concept>\n        <concept>karmic punishment</concept>\n        <concept>a cosmic lesson</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-saturn-intro</source-id>\n      </source-ids>\n    </atom>\n    <atom id="body.uranus" kind="entity" review-status="approved">\n      <display-name>Uranus</display-name>\n      <plain-english>change, disruption, innovation and independence from stale constraints</plain-english>\n      <aliases>\n        <alias>Uranus</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>uranus</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>body.uranus.core.change</claim-id>\n        <claim-id>body.uranus.constructive.adaptation</claim-id>\n        <claim-id>body.uranus.difficult.instability</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>spiritual awakening</concept>\n        <concept>cosmic intervention</concept>\n        <concept>change being destined</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-uranus-intro</source-id>\n      </source-ids>\n    </atom>\n    <atom id="body.neptune" kind="entity" review-status="approved">\n      <display-name>Neptune</display-name>\n      <plain-english>permeability, ambiguity and softened distinctions</plain-english>\n      <aliases>\n        <alias>Neptune</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>neptune</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>body.neptune.core.permeability</claim-id>\n        <claim-id>body.neptune.difficult.confusion</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>psychic ability</concept>\n        <concept>divine influence</concept>\n        <concept>spiritual sensitivity as fact</concept>\n        <concept>prophecy</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-neptune-intro</source-id>\n      </source-ids>\n    </atom>\n    <atom id="body.pluto" kind="entity" review-status="approved">\n      <display-name>Pluto</display-name>\n      <plain-english>intense pressure, transformation and restructuring</plain-english>\n      <aliases>\n        <alias>Pluto</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>pluto</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>body.pluto.core.transformation</claim-id>\n        <claim-id>body.pluto.constructive.channel-power</claim-id>\n        <claim-id>body.pluto.difficult.compulsion</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>fated events</concept>\n        <concept>karma</concept>\n        <concept>spiritual regeneration</concept>\n        <concept>inevitable destruction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-pluto-effects</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="body.sun.core.central-direction" atom-id="body.sun" category="core" confidence="well-supported">\n      <proposition>The Sun is associated with a central organising focus, conscious direction and the parts of experience that take a leading role.</proposition>\n      <tags>\n        <tag>central focus</tag>\n        <tag>conscious direction</tag>\n        <tag>leadership</tag>\n        <tag>self-direction</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-sun-intro#central-function</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.sun.constructive.integration" atom-id="body.sun" category="constructive" confidence="well-supported">\n      <proposition>Its constructive expression can bring different parts together without requiring them to lose their individual character.</proposition>\n      <tags>\n        <tag>integration</tag>\n        <tag>coherence</tag>\n        <tag>distinct identity</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-sun-intro#qualities-integration</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.moon.core.emotional-tone" atom-id="body.moon" category="core" confidence="core">\n      <proposition>The Moon is associated with feelings, moods, emotional tone and the more personal side of experience.</proposition>\n      <tags>\n        <tag>feelings</tag>\n        <tag>moods</tag>\n        <tag>emotional tone</tag>\n        <tag>personal experience</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-moon-effects#inward-opening</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.moon.core.private-experience" atom-id="body.moon" category="core" confidence="well-supported">\n      <proposition>It is also associated with what is experienced as private, close to home or personally immediate.</proposition>\n      <tags>\n        <tag>privacy</tag>\n        <tag>personal life</tag>\n        <tag>immediacy</tag>\n        <tag>inner experience</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-moon-effects#personal-private</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.mercury.core.communication" atom-id="body.mercury" category="core" confidence="core">\n      <proposition>Mercury is associated with communication and with receiving, organising and transmitting information.</proposition>\n      <tags>\n        <tag>communication</tag>\n        <tag>information</tag>\n        <tag>thinking</tag>\n        <tag>exchange</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-mercury-intro#communication-information</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.mercury.constructive.clarity" atom-id="body.mercury" category="constructive" confidence="well-supported">\n      <proposition>Its constructive expression supports clearer thought, comparison, explanation and revision of information.</proposition>\n      <tags>\n        <tag>clarity</tag>\n        <tag>analysis</tag>\n        <tag>comparison</tag>\n        <tag>revision</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-mercury-intro#clear-communication</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.mercury.difficult.confusion" atom-id="body.mercury" category="difficult" confidence="well-supported">\n      <proposition>When its communicative function is strained, information can become confused, rushed or misunderstood.</proposition>\n      <tags>\n        <tag>confusion</tag>\n        <tag>misunderstanding</tag>\n        <tag>rushed decisions</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-mercury-intro#confused-communication</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.venus.core.connection" atom-id="body.venus" category="core" confidence="core">\n      <proposition>Venus is associated with connection, relationship, affection and the impulse to bring separate things into a more harmonious whole.</proposition>\n      <tags>\n        <tag>connection</tag>\n        <tag>relationship</tag>\n        <tag>affection</tag>\n        <tag>harmony</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-venus-intro#qualities-connection</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.venus.constructive.aesthetics" atom-id="body.venus" category="constructive" confidence="well-supported">\n      <proposition>It is also associated with artistic creativity, aesthetic judgement and appreciation of beauty or pleasing form.</proposition>\n      <tags>\n        <tag>aesthetics</tag>\n        <tag>artistic creativity</tag>\n        <tag>beauty</tag>\n        <tag>appreciation</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-venus-intro#qualities-aesthetics</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.mars.core.assertion" atom-id="body.mars" category="core" confidence="core">\n      <proposition>Mars is associated with assertion, separateness, physical drive and the capacity to protect or defend a position.</proposition>\n      <tags>\n        <tag>assertion</tag>\n        <tag>drive</tag>\n        <tag>boundaries</tag>\n        <tag>protection</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-mars-intro#natal-protection-separateness</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.mars.constructive.action" atom-id="body.mars" category="constructive" confidence="well-supported">\n      <proposition>Its constructive expression supports deliberate action, physical effort and the ability to stand up for what needs attention or defence.</proposition>\n      <tags>\n        <tag>action</tag>\n        <tag>effort</tag>\n        <tag>defence</tag>\n        <tag>initiative</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-mars-intro#natal-protection-separateness</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.mars.difficult.anger" atom-id="body.mars" category="difficult" confidence="well-supported">\n      <proposition>When blocked or poorly directed, the same drive can appear as anger, irritation, excessive force or conflict.</proposition>\n      <tags>\n        <tag>anger</tag>\n        <tag>irritation</tag>\n        <tag>force</tag>\n        <tag>conflict</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-mars-intro#natal-anger-vitality</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.jupiter.core.expansion" atom-id="body.jupiter" category="core" confidence="core">\n      <proposition>Jupiter is associated with growth, expansion and making the qualities of another chart factor more visible or developed.</proposition>\n      <tags>\n        <tag>growth</tag>\n        <tag>expansion</tag>\n        <tag>visibility</tag>\n        <tag>development</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-jupiter-effects#inward-growth</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.jupiter.constructive.learning" atom-id="body.jupiter" category="constructive" confidence="well-supported">\n      <proposition>Its constructive expression supports learning, broader experience, confidence and preparation for further progress.</proposition>\n      <tags>\n        <tag>learning</tag>\n        <tag>broader experience</tag>\n        <tag>confidence</tag>\n        <tag>progress</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-jupiter-effects#outward-learning</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.jupiter.difficult.overreach" atom-id="body.jupiter" category="difficult" confidence="well-supported">\n      <proposition>Expansion can become overreach when confidence turns into poorly prepared risk-taking or assumptions that limits will not apply.</proposition>\n      <tags>\n        <tag>overreach</tag>\n        <tag>risk-taking</tag>\n        <tag>overconfidence</tag>\n        <tag>poor preparation</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-jupiter-effects#inward-risk</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.saturn.core.structure" atom-id="body.saturn" category="core" confidence="core">\n      <proposition>Saturn is associated with limits, rules, structure, discipline and the assumptions used to decide what is realistic or workable.</proposition>\n      <tags>\n        <tag>limits</tag>\n        <tag>rules</tag>\n        <tag>structure</tag>\n        <tag>discipline</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-saturn-intro#rules-limits-discipline</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.saturn.constructive.discipline" atom-id="body.saturn" category="constructive" confidence="well-supported">\n      <proposition>Its constructive expression supports self-discipline, durable structure and adjustment to practical constraints.</proposition>\n      <tags>\n        <tag>self-discipline</tag>\n        <tag>durability</tag>\n        <tag>practical limits</tag>\n        <tag>adjustment</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-saturn-intro#rules-limits-discipline</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.saturn.difficult.rigidity" atom-id="body.saturn" category="difficult" confidence="well-supported">\n      <proposition>The same function can become restrictive when assumptions harden into inhibitions or rules that are no longer examined.</proposition>\n      <tags>\n        <tag>restriction</tag>\n        <tag>inhibition</tag>\n        <tag>rigidity</tag>\n        <tag>unexamined assumptions</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-saturn-intro#reality-system</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.uranus.core.change" atom-id="body.uranus" category="core" confidence="core">\n      <proposition>Uranus is associated with disruption, rapid change, innovation and pressure against boundaries that have become arbitrary or unnecessary.</proposition>\n      <tags>\n        <tag>change</tag>\n        <tag>disruption</tag>\n        <tag>innovation</tag>\n        <tag>independence</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-uranus-intro#opening-change-boundaries</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.uranus.constructive.adaptation" atom-id="body.uranus" category="constructive" confidence="well-supported">\n      <proposition>Its constructive expression supports experimentation, adaptation, new ideas and willingness to update established patterns.</proposition>\n      <tags>\n        <tag>experimentation</tag>\n        <tag>adaptation</tag>\n        <tag>new ideas</tag>\n        <tag>flexibility</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-uranus-intro#adaptation-new-ideas</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.uranus.difficult.instability" atom-id="body.uranus" category="difficult" confidence="well-supported">\n      <proposition>When change is resisted or pursued without enough stability, it can be experienced as tension, unpredictability or disruptive breaks.</proposition>\n      <tags>\n        <tag>tension</tag>\n        <tag>unpredictability</tag>\n        <tag>instability</tag>\n        <tag>disruption</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-uranus-intro#opening-change-boundaries</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.neptune.core.permeability" atom-id="body.neptune" category="core" confidence="well-supported">\n      <proposition>Neptune is associated with permeability, blurred distinctions and connections that are difficult to define in clear-cut terms.</proposition>\n      <tags>\n        <tag>permeability</tag>\n        <tag>blurred distinctions</tag>\n        <tag>diffuse boundaries</tag>\n        <tag>ambiguity</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-neptune-intro#qualities-blurred-distinctions</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.neptune.difficult.confusion" atom-id="body.neptune" category="difficult" confidence="well-supported">\n      <proposition>Its difficult expression can involve confusion, uncertainty, reduced clarity or difficulty deciding what is well defined.</proposition>\n      <tags>\n        <tag>confusion</tag>\n        <tag>uncertainty</tag>\n        <tag>reduced clarity</tag>\n        <tag>indefinition</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-neptune-intro#opening-loss-of-clarity</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.pluto.core.transformation" atom-id="body.pluto" category="core" confidence="core">\n      <proposition>Pluto is associated with sustained pressure, profound change and transformation of an existing condition or structure.</proposition>\n      <tags>\n        <tag>transformation</tag>\n        <tag>pressure</tag>\n        <tag>profound change</tag>\n        <tag>restructuring</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-pluto-effects#inward-change-pressure</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.pluto.constructive.channel-power" atom-id="body.pluto" category="constructive" confidence="well-supported">\n      <proposition>Its constructive expression involves directing intense pressure deliberately rather than pursuing control or power for its own sake.</proposition>\n      <tags>\n        <tag>deliberate change</tag>\n        <tag>directed pressure</tag>\n        <tag>responsible power</tag>\n        <tag>renewal</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-pluto-effects#inward-power-warning</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="body.pluto.difficult.compulsion" atom-id="body.pluto" category="difficult" confidence="well-supported">\n      <proposition>When pressure has no workable outlet, it can become compulsive, controlling or destructive rather than transformative.</proposition>\n      <tags>\n        <tag>compulsion</tag>\n        <tag>control</tag>\n        <tag>destructive pressure</tag>\n        <tag>blocked change</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-pluto-effects#inward-change-pressure</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' },
  { name: "conditions.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="conditions">\n  <atoms>\n    <atom id="condition.element-fire" kind="condition" review-status="approved">\n      <display-name>Fire</display-name>\n      <plain-english>energetic, initiating and outwardly expressive style</plain-english>\n      <aliases>\n        <alias>Fire</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>element-fire</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.element-fire.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-elements</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.element-earth" kind="condition" review-status="approved">\n      <display-name>Earth</display-name>\n      <plain-english>practical, concrete and materially grounded style</plain-english>\n      <aliases>\n        <alias>Earth</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>element-earth</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.element-earth.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-elements</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.element-air" kind="condition" review-status="approved">\n      <display-name>Air</display-name>\n      <plain-english>thought, communication and exchange-oriented style</plain-english>\n      <aliases>\n        <alias>Air</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>element-air</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.element-air.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-elements</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.element-water" kind="condition" review-status="approved">\n      <display-name>Water</display-name>\n      <plain-english>feeling, sensitivity and emotionally responsive style</plain-english>\n      <aliases>\n        <alias>Water</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>element-water</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.element-water.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-elements</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.modality-cardinal" kind="condition" review-status="approved">\n      <display-name>Cardinal</display-name>\n      <plain-english>initiation and starting activity</plain-english>\n      <aliases>\n        <alias>Cardinal</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>modality-cardinal</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.modality-cardinal.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-elements</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.modality-fixed" kind="condition" review-status="approved">\n      <display-name>Fixed</display-name>\n      <plain-english>sustaining and stabilising activity</plain-english>\n      <aliases>\n        <alias>Fixed</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>modality-fixed</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.modality-fixed.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-elements</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.modality-mutable" kind="condition" review-status="approved">\n      <display-name>Mutable</display-name>\n      <plain-english>adaptation and adjustment to change</plain-english>\n      <aliases>\n        <alias>Mutable</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>modality-mutable</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.modality-mutable.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-elements</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.polarity-active" kind="condition" review-status="approved">\n      <display-name>Active polarity</display-name>\n      <plain-english>weighted active-sign grouping</plain-english>\n      <aliases>\n        <alias>Active polarity</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>polarity-active</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.polarity-active.core.grouping</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.chart-balance-categories</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.polarity-receptive" kind="condition" review-status="approved">\n      <display-name>Receptive polarity</display-name>\n      <plain-english>weighted receptive-sign grouping</plain-english>\n      <aliases>\n        <alias>Receptive polarity</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>polarity-receptive</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.polarity-receptive.core.grouping</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.chart-balance-categories</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.hemisphere-eastern" kind="condition" review-status="approved">\n      <display-name>Eastern hemisphere</display-name>\n      <plain-english>weighted houses 10 through 3 grouping</plain-english>\n      <aliases>\n        <alias>Eastern hemisphere</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>hemisphere-eastern</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.hemisphere-eastern.core.grouping</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.chart-balance-categories</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.hemisphere-western" kind="condition" review-status="approved">\n      <display-name>Western hemisphere</display-name>\n      <plain-english>weighted houses 4 through 9 grouping</plain-english>\n      <aliases>\n        <alias>Western hemisphere</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>hemisphere-western</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.hemisphere-western.core.grouping</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.chart-balance-categories</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.hemisphere-northern" kind="condition" review-status="approved">\n      <display-name>Northern hemisphere</display-name>\n      <plain-english>weighted houses 1 through 6 grouping</plain-english>\n      <aliases>\n        <alias>Northern hemisphere</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>hemisphere-northern</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.hemisphere-northern.core.grouping</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.chart-balance-categories</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.hemisphere-southern" kind="condition" review-status="approved">\n      <display-name>Southern hemisphere</display-name>\n      <plain-english>weighted houses 7 through 12 grouping</plain-english>\n      <aliases>\n        <alias>Southern hemisphere</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>hemisphere-southern</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.hemisphere-southern.core.grouping</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.chart-balance-categories</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.house-mode-angular" kind="condition" review-status="approved">\n      <display-name>Angular houses</display-name>\n      <plain-english>weighted angular-house grouping</plain-english>\n      <aliases>\n        <alias>Angular houses</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>house-mode-angular</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.house-mode-angular.core.grouping</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.chart-balance-categories</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.house-mode-succedent" kind="condition" review-status="approved">\n      <display-name>Succedent houses</display-name>\n      <plain-english>weighted succedent-house grouping</plain-english>\n      <aliases>\n        <alias>Succedent houses</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>house-mode-succedent</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.house-mode-succedent.core.grouping</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.chart-balance-categories</source-id>\n      </source-ids>\n    </atom>\n    <atom id="condition.house-mode-cadent" kind="condition" review-status="approved">\n      <display-name>Cadent houses</display-name>\n      <plain-english>weighted cadent-house grouping</plain-english>\n      <aliases>\n        <alias>Cadent houses</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>house-mode-cadent</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>condition.house-mode-cadent.core.grouping</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality</concept>\n        <concept>a good or bad score</concept>\n        <concept>causal effects</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.chart-balance-categories</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="condition.element-fire.core.style" atom-id="condition.element-fire" category="core" confidence="well-supported">\n      <proposition>Fire is used as an expression-style category associated with energetic, initiating and outwardly expressive qualities.</proposition>\n      <tags>\n        <tag>energy</tag>\n        <tag>initiative</tag>\n        <tag>expression</tag>\n        <tag>fire</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-elements#fire-style</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.element-earth.core.style" atom-id="condition.element-earth" category="core" confidence="well-supported">\n      <proposition>Earth is used as an expression-style category associated with practical, concrete and materially grounded qualities.</proposition>\n      <tags>\n        <tag>practicality</tag>\n        <tag>concreteness</tag>\n        <tag>material focus</tag>\n        <tag>earth</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-elements#earth-style</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.element-air.core.style" atom-id="condition.element-air" category="core" confidence="well-supported">\n      <proposition>Air is used as an expression-style category associated with thought, communication and exchange of ideas or information.</proposition>\n      <tags>\n        <tag>thought</tag>\n        <tag>communication</tag>\n        <tag>ideas</tag>\n        <tag>exchange</tag>\n        <tag>air</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-elements#air-style</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.element-water.core.style" atom-id="condition.element-water" category="core" confidence="well-supported">\n      <proposition>Water is used as an expression-style category associated with feeling, sensitivity and responsiveness to emotional context.</proposition>\n      <tags>\n        <tag>feeling</tag>\n        <tag>sensitivity</tag>\n        <tag>emotional context</tag>\n        <tag>water</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-elements#water-style</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.modality-cardinal.core.style" atom-id="condition.modality-cardinal" category="core" confidence="well-supported">\n      <proposition>Cardinal is used as a modality category associated with initiating, starting or setting activity in motion.</proposition>\n      <tags>\n        <tag>initiation</tag>\n        <tag>starting</tag>\n        <tag>movement</tag>\n        <tag>cardinal</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-elements#cardinal-mode</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.modality-fixed.core.style" atom-id="condition.modality-fixed" category="core" confidence="well-supported">\n      <proposition>Fixed is used as a modality category associated with sustaining, maintaining or stabilising an existing direction.</proposition>\n      <tags>\n        <tag>sustaining</tag>\n        <tag>maintaining</tag>\n        <tag>stability</tag>\n        <tag>fixed</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-elements#fixed-mode</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.modality-mutable.core.style" atom-id="condition.modality-mutable" category="core" confidence="well-supported">\n      <proposition>Mutable is used as a modality category associated with adaptation, transition and adjustment to changing conditions.</proposition>\n      <tags>\n        <tag>adaptation</tag>\n        <tag>transition</tag>\n        <tag>adjustment</tag>\n        <tag>mutable</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-elements#mutable-mode</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.polarity-active.core.grouping" atom-id="condition.polarity-active" category="core" confidence="core">\n      <proposition>Active polarity is the weighted share of chart points falling in signs classified as active in the project&apos;s chart-balance calculation.</proposition>\n      <tags>\n        <tag>active polarity</tag>\n        <tag>weighted grouping</tag>\n        <tag>chart balance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.chart-balance-categories#polarity-active</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.polarity-receptive.core.grouping" atom-id="condition.polarity-receptive" category="core" confidence="core">\n      <proposition>Receptive polarity is the weighted share of chart points falling in signs classified as receptive in the project&apos;s chart-balance calculation.</proposition>\n      <tags>\n        <tag>receptive polarity</tag>\n        <tag>weighted grouping</tag>\n        <tag>chart balance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.chart-balance-categories#polarity-receptive</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.hemisphere-eastern.core.grouping" atom-id="condition.hemisphere-eastern" category="core" confidence="core">\n      <proposition>Eastern hemisphere is the weighted share of planets placed in houses 10, 11, 12, 1, 2 or 3 in the project&apos;s chart-balance calculation.</proposition>\n      <tags>\n        <tag>eastern hemisphere</tag>\n        <tag>weighted grouping</tag>\n        <tag>chart balance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.chart-balance-categories#hemisphere-eastern</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.hemisphere-western.core.grouping" atom-id="condition.hemisphere-western" category="core" confidence="core">\n      <proposition>Western hemisphere is the weighted share of planets placed in houses 4, 5, 6, 7, 8 or 9 in the project&apos;s chart-balance calculation.</proposition>\n      <tags>\n        <tag>western hemisphere</tag>\n        <tag>weighted grouping</tag>\n        <tag>chart balance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.chart-balance-categories#hemisphere-western</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.hemisphere-northern.core.grouping" atom-id="condition.hemisphere-northern" category="core" confidence="core">\n      <proposition>Northern hemisphere is the weighted share of planets placed in houses 1 through 6 in the project&apos;s chart-balance calculation.</proposition>\n      <tags>\n        <tag>northern hemisphere</tag>\n        <tag>weighted grouping</tag>\n        <tag>chart balance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.chart-balance-categories#hemisphere-northern</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.hemisphere-southern.core.grouping" atom-id="condition.hemisphere-southern" category="core" confidence="core">\n      <proposition>Southern hemisphere is the weighted share of planets placed in houses 7 through 12 in the project&apos;s chart-balance calculation.</proposition>\n      <tags>\n        <tag>southern hemisphere</tag>\n        <tag>weighted grouping</tag>\n        <tag>chart balance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.chart-balance-categories#hemisphere-southern</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.house-mode-angular.core.grouping" atom-id="condition.house-mode-angular" category="core" confidence="core">\n      <proposition>Angular houses is the weighted share of planets placed in angular houses in the project&apos;s chart-balance calculation.</proposition>\n      <tags>\n        <tag>angular houses</tag>\n        <tag>weighted grouping</tag>\n        <tag>chart balance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.chart-balance-categories#house-mode-angular</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.house-mode-succedent.core.grouping" atom-id="condition.house-mode-succedent" category="core" confidence="core">\n      <proposition>Succedent houses is the weighted share of planets placed in succedent houses in the project&apos;s chart-balance calculation.</proposition>\n      <tags>\n        <tag>succedent houses</tag>\n        <tag>weighted grouping</tag>\n        <tag>chart balance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.chart-balance-categories#house-mode-succedent</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="condition.house-mode-cadent.core.grouping" atom-id="condition.house-mode-cadent" category="core" confidence="core">\n      <proposition>Cadent houses is the weighted share of planets placed in cadent houses in the project&apos;s chart-balance calculation.</proposition>\n      <tags>\n        <tag>cadent houses</tag>\n        <tag>weighted grouping</tag>\n        <tag>chart balance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.chart-balance-categories#house-mode-cadent</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' },
  { name: "derived.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="derived">\n  <atoms>\n    <atom id="derived.rulership-dignity" kind="derived-construct" review-status="approved">\n      <display-name>Rulership and dignity</display-name>\n      <plain-english>relative expression, rulership, dignity and constraint</plain-english>\n      <aliases>\n        <alias>Rulership and dignity</alias>\n        <alias>Essential dignity</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>rulershipAndDignity</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>derived.rulership-dignity.core.relative-expression</claim-id>\n        <claim-id>derived.rulership-dignity.detail.categories</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a morally good or bad planet</concept>\n        <concept>guaranteed success</concept>\n        <concept>guaranteed failure</concept>\n        <concept>fate</concept>\n        <concept>personal worth</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.derived.dignities</source-id>\n        <source-id>semantic.astrodienst.derived.essential-dignities</source-id>\n        <source-id>semantic.project.derived-chart-calculations</source-id>\n      </source-ids>\n    </atom>\n    <atom id="derived.chart-balance" kind="derived-construct" review-status="approved">\n      <display-name>Chart balance</display-name>\n      <plain-english>weighted distribution and relative emphasis across chart categories</plain-english>\n      <aliases>\n        <alias>Chart balance</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>chartBalance</internal-id>\n        <internal-id>balances</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>derived.chart-balance.core.weighted-distribution</claim-id>\n        <claim-id>derived.chart-balance.interaction.relative-emphasis</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>personality diagnosis</concept>\n        <concept>a good or bad chart</concept>\n        <concept>value judgement</concept>\n        <concept>prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.derived-chart-calculations</source-id>\n      </source-ids>\n    </atom>\n    <atom id="derived.dominant-themes" kind="derived-construct" review-status="approved">\n      <display-name>Dominant themes</display-name>\n      <plain-english>relative structural emphasis under the project&apos;s weighting rules</plain-english>\n      <aliases>\n        <alias>Dominant themes</alias>\n        <alias>Dominant planets</alias>\n        <alias>Dominant signs</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>dominantThemes</internal-id>\n        <internal-id>dominantPlanets</internal-id>\n        <internal-id>dominantSigns</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>derived.dominant-themes.core.prominence</claim-id>\n        <claim-id>derived.dominant-themes.detail.project-score</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>objective importance</concept>\n        <concept>causal power</concept>\n        <concept>destiny</concept>\n        <concept>one factor explaining the whole person</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.derived.dominance</source-id>\n        <source-id>semantic.project.derived-chart-calculations</source-id>\n      </source-ids>\n    </atom>\n    <atom id="derived.lunar-phase" kind="derived-construct" review-status="approved">\n      <display-name>Lunar phase</display-name>\n      <plain-english>Sun-Moon cycle position and waxing or waning illumination</plain-english>\n      <aliases>\n        <alias>Lunar phase</alias>\n        <alias>Moon phase</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>lunar.phase</internal-id>\n        <internal-id>lunarPhase</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>derived.lunar-phase.core.cycle-position</claim-id>\n        <claim-id>derived.lunar-phase.detail.waxing-waning</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a fixed personality type</concept>\n        <concept>destiny</concept>\n        <concept>spiritual development</concept>\n        <concept>auspicious timing</concept>\n        <concept>guaranteed beginnings or endings</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>body.sun</atom-id>\n        <atom-id>body.moon</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.derived.lunar-phase</source-id>\n        <source-id>semantic.astrodienst.derived.waxing-waning</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="derived.rulership-dignity.core.relative-expression" atom-id="derived.rulership-dignity" category="core" confidence="well-supported">\n      <proposition>Rulership and essential dignity describe how closely a planet&apos;s zodiac position aligns with, supports or constrains the symbolic qualities assigned to that planet within the selected dignity rules.</proposition>\n      <tags>\n        <tag>relative expression</tag>\n        <tag>rulership</tag>\n        <tag>dignity</tag>\n        <tag>strength</tag>\n        <tag>constraint</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.derived.dignities#expression-alignment</source-ref>\n        <source-ref>semantic.astrodienst.derived.essential-dignities#relative-strength</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="derived.rulership-dignity.detail.categories" atom-id="derived.rulership-dignity" category="interaction" confidence="core">\n      <proposition>The project records domicile, exaltation, triplicity, bounds and face alongside detriment, fall and peregrine status, and combines the selected rules into an inspectable score rather than treating any single label as a complete interpretation.</proposition>\n      <tags>\n        <tag>domicile</tag>\n        <tag>exaltation</tag>\n        <tag>triplicity</tag>\n        <tag>bounds</tag>\n        <tag>face</tag>\n        <tag>detriment</tag>\n        <tag>fall</tag>\n        <tag>peregrine</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.derived.essential-dignities#five-dignities</source-ref>\n        <source-ref>semantic.project.derived-chart-calculations#dignity-record</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="derived.chart-balance.core.weighted-distribution" atom-id="derived.chart-balance" category="core" confidence="core">\n      <proposition>Chart balance is the project&apos;s weighted distribution of selected chart points across elements, modalities, polarities, hemispheres and angular, succedent or cadent house modes.</proposition>\n      <tags>\n        <tag>weighted distribution</tag>\n        <tag>elements</tag>\n        <tag>modalities</tag>\n        <tag>polarities</tag>\n        <tag>hemispheres</tag>\n        <tag>house modes</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.derived-chart-calculations#chart-balance</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="derived.chart-balance.interaction.relative-emphasis" atom-id="derived.chart-balance" category="interaction" confidence="core">\n      <proposition>Its values support comparisons of relative emphasis within the same chart; they are not moral scores, diagnoses or predictions about outcomes.</proposition>\n      <tags>\n        <tag>relative emphasis</tag>\n        <tag>comparison</tag>\n        <tag>distribution</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.derived-chart-calculations#chart-balance</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="derived.dominant-themes.core.prominence" atom-id="derived.dominant-themes" category="core" confidence="well-supported">\n      <proposition>Dominance is used to identify chart factors that receive relatively greater structural emphasis under an explicit weighting method.</proposition>\n      <tags>\n        <tag>relative prominence</tag>\n        <tag>structural emphasis</tag>\n        <tag>weighted ranking</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.derived.dominance#relative-prominence</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="derived.dominant-themes.detail.project-score" atom-id="derived.dominant-themes" category="interaction" confidence="core">\n      <proposition>This project&apos;s dominance score combines inspectable factors such as dignity, chart-ruler status, house mode, aspect strength and sect rather than claiming that one universal dominance method exists.</proposition>\n      <tags>\n        <tag>dignity</tag>\n        <tag>chart ruler</tag>\n        <tag>house mode</tag>\n        <tag>aspects</tag>\n        <tag>sect</tag>\n        <tag>inspectable score</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.derived.dominance#multiple-methods</source-ref>\n        <source-ref>semantic.project.derived-chart-calculations#dominant-score</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="derived.lunar-phase.core.cycle-position" atom-id="derived.lunar-phase" category="core" confidence="core">\n      <proposition>Lunar phase locates the Moon within its changing angular and illumination relationship to the Sun, providing a cyclic context for the chart rather than a separate celestial body or point.</proposition>\n      <tags>\n        <tag>Sun-Moon relationship</tag>\n        <tag>cycle position</tag>\n        <tag>illumination</tag>\n        <tag>lunar phase</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.derived.lunar-phase#sun-moon-relationship</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="derived.lunar-phase.detail.waxing-waning" atom-id="derived.lunar-phase" category="interaction" confidence="core">\n      <proposition>Waxing identifies the increasing-light half from New Moon toward Full Moon, while waning identifies the decreasing-light half from Full Moon toward the next New Moon.</proposition>\n      <tags>\n        <tag>waxing</tag>\n        <tag>waning</tag>\n        <tag>increasing light</tag>\n        <tag>decreasing light</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.derived.waxing-waning#illumination-direction</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' },
  { name: "domains.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="domains">\n  <atoms>\n    <atom id="life-domain.identityAndPurpose" kind="domain" review-status="approved">\n      <display-name>Identity and direction</display-name>\n      <plain-english>identity, self-direction, priorities, chosen direction</plain-english>\n      <aliases>\n        <alias>Identity and direction</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>identityAndPurpose</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.identityAndPurpose.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>divine purpose</concept>\n        <concept>cosmic purpose</concept>\n        <concept>one predetermined mission</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.emotionalNature" kind="domain" review-status="approved">\n      <display-name>Emotional nature</display-name>\n      <plain-english>emotions, moods, security, emotional expression</plain-english>\n      <aliases>\n        <alias>Emotional nature</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>emotionalNature</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.emotionalNature.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.mindAndCommunication" kind="domain" review-status="approved">\n      <display-name>Mind and communication</display-name>\n      <plain-english>thinking, learning, communication, information</plain-english>\n      <aliases>\n        <alias>Mind and communication</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>mindAndCommunication</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.mindAndCommunication.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.romance" kind="domain" review-status="approved">\n      <display-name>Romance</display-name>\n      <plain-english>romance, affection, courtship, attachment</plain-english>\n      <aliases>\n        <alias>Romance</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>romance</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.romance.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>soulmates</concept>\n        <concept>destined relationships</concept>\n        <concept>a guaranteed partner</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.sexuality" kind="domain" review-status="approved">\n      <display-name>Sexuality</display-name>\n      <plain-english>desire, intimacy, consent, boundaries</plain-english>\n      <aliases>\n        <alias>Sexuality</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>sexuality</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.sexuality.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>sexual orientation from a chart</concept>\n        <concept>consent</concept>\n        <concept>a required sexual preference</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.committedPartnerships" kind="domain" review-status="approved">\n      <display-name>Committed partnerships</display-name>\n      <plain-english>partnership, commitment, mutual expectations, autonomy</plain-english>\n      <aliases>\n        <alias>Committed partnerships</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>committedPartnerships</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.committedPartnerships.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>marriage is required</concept>\n        <concept>a destined spouse</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.homeAndFamily" kind="domain" review-status="approved">\n      <display-name>Home and family</display-name>\n      <plain-english>home, family, belonging, private life</plain-english>\n      <aliases>\n        <alias>Home and family</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>homeAndFamily</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.homeAndFamily.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.childhoodPatterns" kind="domain" review-status="approved">\n      <display-name>Childhood patterns</display-name>\n      <plain-english>childhood, upbringing, early patterns, family background</plain-english>\n      <aliases>\n        <alias>Childhood patterns</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>childhoodPatterns</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.childhoodPatterns.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>recovered memories as fact</concept>\n        <concept>parental blame as certainty</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.creativityAndSelfExpression" kind="domain" review-status="approved">\n      <display-name>Creativity and self-expression</display-name>\n      <plain-english>creativity, play, self-expression, original work</plain-english>\n      <aliases>\n        <alias>Creativity and self-expression</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>creativityAndSelfExpression</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.creativityAndSelfExpression.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.childrenAndNurturing" kind="domain" review-status="approved">\n      <display-name>Children and nurturing</display-name>\n      <plain-english>children, caregiving, nurturing, development</plain-english>\n      <aliases>\n        <alias>Children and nurturing</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>childrenAndNurturing</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.childrenAndNurturing.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>fertility</concept>\n        <concept>pregnancy</concept>\n        <concept>a guaranteed child</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.friendship" kind="domain" review-status="approved">\n      <display-name>Friendship</display-name>\n      <plain-english>friendship, companionship, mutual support, social expectations</plain-english>\n      <aliases>\n        <alias>Friendship</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>friendship</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.friendship.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.communityAndGroups" kind="domain" review-status="approved">\n      <display-name>Community and groups</display-name>\n      <plain-english>community, groups, networks, social participation</plain-english>\n      <aliases>\n        <alias>Community and groups</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>communityAndGroups</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.communityAndGroups.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.workStyle" kind="domain" review-status="approved">\n      <display-name>Work style</display-name>\n      <plain-english>work habits, routine, organisation, working conditions</plain-english>\n      <aliases>\n        <alias>Work style</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>workStyle</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.workStyle.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.careerAndVocation" kind="domain" review-status="approved">\n      <display-name>Career and vocation</display-name>\n      <plain-english>career, vocation, work environment, authority</plain-english>\n      <aliases>\n        <alias>Career and vocation</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>careerAndVocation</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.careerAndVocation.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a destined career</concept>\n        <concept>a sacred calling</concept>\n        <concept>one correct profession</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.businessAndLeadership" kind="domain" review-status="approved">\n      <display-name>Business and leadership</display-name>\n      <plain-english>leadership, business, collaboration, decision-making</plain-english>\n      <aliases>\n        <alias>Business and leadership</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>businessAndLeadership</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.businessAndLeadership.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.moneyAndMaterialSecurity" kind="domain" review-status="approved">\n      <display-name>Money and material security</display-name>\n      <plain-english>money, resources, material security, financial choices</plain-english>\n      <aliases>\n        <alias>Money and material security</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>moneyAndMaterialSecurity</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.moneyAndMaterialSecurity.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>financial advice</concept>\n        <concept>guaranteed wealth</concept>\n        <concept>guaranteed loss</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.publicLifeAndAmbition" kind="domain" review-status="approved">\n      <display-name>Public life and ambition</display-name>\n      <plain-english>public role, ambition, recognition, reputation</plain-english>\n      <aliases>\n        <alias>Public life and ambition</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>publicLifeAndAmbition</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.publicLifeAndAmbition.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.conflictAndAssertion" kind="domain" review-status="approved">\n      <display-name>Conflict and assertion</display-name>\n      <plain-english>assertion, conflict, anger, boundaries</plain-english>\n      <aliases>\n        <alias>Conflict and assertion</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>conflictAndAssertion</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.conflictAndAssertion.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.growthAndOpportunity" kind="domain" review-status="approved">\n      <display-name>Growth and opportunity</display-name>\n      <plain-english>growth, learning, confidence, opportunity</plain-english>\n      <aliases>\n        <alias>Growth and opportunity</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>growthAndOpportunity</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.growthAndOpportunity.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.restrictionsAndResponsibility" kind="domain" review-status="approved">\n      <display-name>Restrictions and responsibility</display-name>\n      <plain-english>limits, obligations, discipline, responsibility</plain-english>\n      <aliases>\n        <alias>Restrictions and responsibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>restrictionsAndResponsibility</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.restrictionsAndResponsibility.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>punishment</concept>\n        <concept>karmic debt</concept>\n        <concept>a cosmic lesson</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.transformationAndCrisis" kind="domain" review-status="approved">\n      <display-name>Transformation and crisis</display-name>\n      <plain-english>change, crisis, control, restructuring</plain-english>\n      <aliases>\n        <alias>Transformation and crisis</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>transformationAndCrisis</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.transformationAndCrisis.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>fated crisis</concept>\n        <concept>spiritual rebirth</concept>\n        <concept>death prediction</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.spiritualityAndMeaning" kind="domain" review-status="approved">\n      <display-name>Meaning and worldview</display-name>\n      <plain-english>meaning-making, worldview, reflection, personal beliefs</plain-english>\n      <aliases>\n        <alias>Meaning and worldview</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>spiritualityAndMeaning</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.spiritualityAndMeaning.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>religious belief</concept>\n        <concept>spiritual belief</concept>\n        <concept>a soul</concept>\n        <concept>divine purpose</concept>\n        <concept>cosmic intention</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.unconsciousPatterns" kind="domain" review-status="approved">\n      <display-name>Less conscious patterns</display-name>\n      <plain-english>recurring reactions, avoidance, private patterns, less conscious behaviour</plain-english>\n      <aliases>\n        <alias>Less conscious patterns</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>unconsciousPatterns</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.unconsciousPatterns.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>clinical diagnosis</concept>\n        <concept>repressed trauma as fact</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.wellbeingAndDailyRhythm" kind="domain" review-status="approved">\n      <display-name>Wellbeing and daily rhythm</display-name>\n      <plain-english>routine, rest, workload, daily rhythm</plain-english>\n      <aliases>\n        <alias>Wellbeing and daily rhythm</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>wellbeingAndDailyRhythm</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.wellbeingAndDailyRhythm.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>medical diagnosis</concept>\n        <concept>medical prognosis</concept>\n        <concept>treatment advice</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="life-domain.developmentalDirection" kind="domain" review-status="approved">\n      <display-name>Developmental direction</display-name>\n      <plain-english>development, skills, habits, deliberate choices</plain-english>\n      <aliases>\n        <alias>Developmental direction</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>developmentalDirection</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>life-domain.developmentalDirection.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>destiny</concept>\n        <concept>what a person is meant to become</concept>\n        <concept>soul purpose</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.overall" kind="domain" review-status="approved">\n      <display-name>Overall compatibility</display-name>\n      <plain-english>overall compatibility, mixed factors, relationship context</plain-english>\n      <aliases>\n        <alias>Overall compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>overall</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.overall.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.romantic" kind="domain" review-status="approved">\n      <display-name>Romantic compatibility</display-name>\n      <plain-english>romance, affection, attraction, relationship expectations</plain-english>\n      <aliases>\n        <alias>Romantic compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>romantic</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.romantic.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>soulmates</concept>\n        <concept>destined love</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.sexual" kind="domain" review-status="approved">\n      <display-name>Sexual compatibility</display-name>\n      <plain-english>sexual attraction, desire, boundaries, communication</plain-english>\n      <aliases>\n        <alias>Sexual compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>sexual</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.sexual.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>consent</concept>\n        <concept>sexual orientation</concept>\n        <concept>required sexual behaviour</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.emotional" kind="domain" review-status="approved">\n      <display-name>Emotional compatibility</display-name>\n      <plain-english>emotional response, reassurance, closeness, autonomy</plain-english>\n      <aliases>\n        <alias>Emotional compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>emotional</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.emotional.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.communication" kind="domain" review-status="approved">\n      <display-name>Communication compatibility</display-name>\n      <plain-english>communication, clarity, conversation, misunderstanding</plain-english>\n      <aliases>\n        <alias>Communication compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>communication</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.communication.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.intellectual" kind="domain" review-status="approved">\n      <display-name>Intellectual compatibility</display-name>\n      <plain-english>ideas, curiosity, learning, reasoning</plain-english>\n      <aliases>\n        <alias>Intellectual compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>intellectual</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.intellectual.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.friendship" kind="domain" review-status="approved">\n      <display-name>Friendship compatibility</display-name>\n      <plain-english>friendship, companionship, mutual support, shared activity</plain-english>\n      <aliases>\n        <alias>Friendship compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>friendship</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.friendship.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.business" kind="domain" review-status="approved">\n      <display-name>Business compatibility</display-name>\n      <plain-english>business, collaboration, decisions, reliability</plain-english>\n      <aliases>\n        <alias>Business compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>business</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.business.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.domestic" kind="domain" review-status="approved">\n      <display-name>Domestic compatibility</display-name>\n      <plain-english>home, routine, shared responsibilities, cohabitation</plain-english>\n      <aliases>\n        <alias>Domestic compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>domestic</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.domestic.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.long-term" kind="domain" review-status="approved">\n      <display-name>Long-term compatibility</display-name>\n      <plain-english>durability, commitment, adaptation, expectations</plain-english>\n      <aliases>\n        <alias>Long-term compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>long-term</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.long-term.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.conflict-resolution" kind="domain" review-status="approved">\n      <display-name>Conflict-resolution compatibility</display-name>\n      <plain-english>conflict, negotiation, repair, assertion</plain-english>\n      <aliases>\n        <alias>Conflict-resolution compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>conflict-resolution</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.conflict-resolution.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="compatibility-domain.spiritual" kind="domain" review-status="approved">\n      <display-name>Meaning and worldview compatibility</display-name>\n      <plain-english>meaning-making, worldview, personal beliefs, reflection</plain-english>\n      <aliases>\n        <alias>Meaning and worldview compatibility</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>spiritual</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>compatibility-domain.spiritual.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>shared religion</concept>\n        <concept>shared spiritual belief</concept>\n        <concept>a karmic bond</concept>\n        <concept>a soul connection</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="synthesis.overview" kind="derived-construct" review-status="approved">\n      <display-name>Chart overview</display-name>\n      <plain-english>overview, main themes, selected chart system</plain-english>\n      <aliases>\n        <alias>Chart overview</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>overview</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>synthesis.overview.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="synthesis.system-synthesis" kind="derived-construct" review-status="approved">\n      <display-name>System synthesis</display-name>\n      <plain-english>synthesis, coherence, contradictions, selected chart system</plain-english>\n      <aliases>\n        <alias>System synthesis</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>system-synthesis</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>synthesis.system-synthesis.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n    <atom id="synthesis.final-synthesis" kind="derived-construct" review-status="approved">\n      <display-name>Final synthesis</display-name>\n      <plain-english>final synthesis, accepted interpretations, summary, no new claims</plain-english>\n      <aliases>\n        <alias>Final synthesis</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>final-synthesis</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>synthesis.final-synthesis.scope</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.project.interpretation-domain-taxonomy</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="life-domain.identityAndPurpose.scope" atom-id="life-domain.identityAndPurpose" category="core" confidence="core">\n      <proposition>This section concerns identity, self-direction, priorities and the way a person chooses to orient their life.</proposition>\n      <tags>\n        <tag>identity</tag>\n        <tag>self-direction</tag>\n        <tag>priorities</tag>\n        <tag>chosen direction</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-identity-and-purpose</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.emotionalNature.scope" atom-id="life-domain.emotionalNature" category="core" confidence="core">\n      <proposition>This section concerns emotional responses, moods, security needs and the way feelings are processed and expressed.</proposition>\n      <tags>\n        <tag>emotions</tag>\n        <tag>moods</tag>\n        <tag>security</tag>\n        <tag>emotional expression</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-emotional-nature</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.mindAndCommunication.scope" atom-id="life-domain.mindAndCommunication" category="core" confidence="core">\n      <proposition>This section concerns thinking, learning, communication, information exchange and the way ideas are organised or expressed.</proposition>\n      <tags>\n        <tag>thinking</tag>\n        <tag>learning</tag>\n        <tag>communication</tag>\n        <tag>information</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-mind-and-communication</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.romance.scope" atom-id="life-domain.romance" category="core" confidence="core">\n      <proposition>This section concerns romantic attraction, affection, courtship, attachment needs and patterns of romantic commitment.</proposition>\n      <tags>\n        <tag>romance</tag>\n        <tag>affection</tag>\n        <tag>courtship</tag>\n        <tag>attachment</tag>\n        <tag>commitment</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-romance</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.sexuality.scope" atom-id="life-domain.sexuality" category="core" confidence="core">\n      <proposition>This section concerns consensual adult desire, intimate preferences, pace, communication, boundaries and sexual expression.</proposition>\n      <tags>\n        <tag>desire</tag>\n        <tag>intimacy</tag>\n        <tag>consent</tag>\n        <tag>boundaries</tag>\n        <tag>sexual communication</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-sexuality</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.committedPartnerships.scope" atom-id="life-domain.committedPartnerships" category="core" confidence="core">\n      <proposition>This section concerns durable one-to-one partnership, mutual expectations, commitment, autonomy and cooperation over time.</proposition>\n      <tags>\n        <tag>partnership</tag>\n        <tag>commitment</tag>\n        <tag>mutual expectations</tag>\n        <tag>autonomy</tag>\n        <tag>cooperation</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-committed-partnerships</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.homeAndFamily.scope" atom-id="life-domain.homeAndFamily" category="core" confidence="core">\n      <proposition>This section concerns home life, family relationships, private foundations and the practical or emotional conditions of belonging.</proposition>\n      <tags>\n        <tag>home</tag>\n        <tag>family</tag>\n        <tag>belonging</tag>\n        <tag>private life</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-home-and-family</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.childhoodPatterns.scope" atom-id="life-domain.childhoodPatterns" category="core" confidence="core">\n      <proposition>This section concerns patterns associated with early home life, upbringing and responses that may have been shaped during childhood.</proposition>\n      <tags>\n        <tag>childhood</tag>\n        <tag>upbringing</tag>\n        <tag>early patterns</tag>\n        <tag>family background</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-childhood-patterns</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.creativityAndSelfExpression.scope" atom-id="life-domain.creativityAndSelfExpression" category="core" confidence="core">\n      <proposition>This section concerns creative activity, play, visible self-expression and the ways a person develops or shares original work.</proposition>\n      <tags>\n        <tag>creativity</tag>\n        <tag>play</tag>\n        <tag>self-expression</tag>\n        <tag>original work</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-creativity-and-self-expression</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.childrenAndNurturing.scope" atom-id="life-domain.childrenAndNurturing" category="core" confidence="core">\n      <proposition>This section concerns relationships with children, caregiving and the ways a person supports growth or development in others.</proposition>\n      <tags>\n        <tag>children</tag>\n        <tag>caregiving</tag>\n        <tag>nurturing</tag>\n        <tag>development</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-children-and-nurturing</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.friendship.scope" atom-id="life-domain.friendship" category="core" confidence="core">\n      <proposition>This section concerns friendship, companionship, mutual support and the expectations a person brings to non-romantic close relationships.</proposition>\n      <tags>\n        <tag>friendship</tag>\n        <tag>companionship</tag>\n        <tag>mutual support</tag>\n        <tag>social expectations</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-friendship</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.communityAndGroups.scope" atom-id="life-domain.communityAndGroups" category="core" confidence="core">\n      <proposition>This section concerns participation in groups, communities, networks and shared social activity.</proposition>\n      <tags>\n        <tag>community</tag>\n        <tag>groups</tag>\n        <tag>networks</tag>\n        <tag>social participation</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-community-and-groups</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.workStyle.scope" atom-id="life-domain.workStyle" category="core" confidence="core">\n      <proposition>This section concerns daily work habits, preferred working conditions, routines, task organisation and practical contribution.</proposition>\n      <tags>\n        <tag>work habits</tag>\n        <tag>routine</tag>\n        <tag>organisation</tag>\n        <tag>working conditions</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-work-style</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.careerAndVocation.scope" atom-id="life-domain.careerAndVocation" category="core" confidence="core">\n      <proposition>This section concerns career direction, vocational interests, work environment, authority and the kinds of contribution a person may choose to develop.</proposition>\n      <tags>\n        <tag>career</tag>\n        <tag>vocation</tag>\n        <tag>work environment</tag>\n        <tag>authority</tag>\n        <tag>contribution</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-career-and-vocation</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.businessAndLeadership.scope" atom-id="life-domain.businessAndLeadership" category="core" confidence="core">\n      <proposition>This section concerns leadership, collaboration, decision-making, responsibility and practical behaviour in business settings.</proposition>\n      <tags>\n        <tag>leadership</tag>\n        <tag>business</tag>\n        <tag>collaboration</tag>\n        <tag>decision-making</tag>\n        <tag>responsibility</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-business-and-leadership</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.moneyAndMaterialSecurity.scope" atom-id="life-domain.moneyAndMaterialSecurity" category="core" confidence="core">\n      <proposition>This section concerns earning, spending, saving, material security, resource management and tolerance for financial uncertainty.</proposition>\n      <tags>\n        <tag>money</tag>\n        <tag>resources</tag>\n        <tag>material security</tag>\n        <tag>financial choices</tag>\n        <tag>risk</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-money-and-material-security</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.publicLifeAndAmbition.scope" atom-id="life-domain.publicLifeAndAmbition" category="core" confidence="core">\n      <proposition>This section concerns public role, ambition, recognition, reputation and visible long-term goals.</proposition>\n      <tags>\n        <tag>public role</tag>\n        <tag>ambition</tag>\n        <tag>recognition</tag>\n        <tag>reputation</tag>\n        <tag>goals</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-public-life-and-ambition</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.conflictAndAssertion.scope" atom-id="life-domain.conflictAndAssertion" category="core" confidence="core">\n      <proposition>This section concerns assertion, disagreement, anger, boundary-setting, competition and responses to interpersonal pressure.</proposition>\n      <tags>\n        <tag>assertion</tag>\n        <tag>conflict</tag>\n        <tag>anger</tag>\n        <tag>boundaries</tag>\n        <tag>competition</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-conflict-and-assertion</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.growthAndOpportunity.scope" atom-id="life-domain.growthAndOpportunity" category="core" confidence="core">\n      <proposition>This section concerns learning, expansion, confidence, experimentation and the way a person approaches opportunities for development.</proposition>\n      <tags>\n        <tag>growth</tag>\n        <tag>learning</tag>\n        <tag>confidence</tag>\n        <tag>opportunity</tag>\n        <tag>development</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-growth-and-opportunity</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.restrictionsAndResponsibility.scope" atom-id="life-domain.restrictionsAndResponsibility" category="core" confidence="core">\n      <proposition>This section concerns limits, obligations, discipline, responsibility and the practical adjustments required by constraints.</proposition>\n      <tags>\n        <tag>limits</tag>\n        <tag>obligations</tag>\n        <tag>discipline</tag>\n        <tag>responsibility</tag>\n        <tag>constraints</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-restrictions-and-responsibility</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.transformationAndCrisis.scope" atom-id="life-domain.transformationAndCrisis" category="core" confidence="core">\n      <proposition>This section concerns intense change, crisis response, control, loss of an old structure and the practical process of rebuilding or adaptation.</proposition>\n      <tags>\n        <tag>change</tag>\n        <tag>crisis</tag>\n        <tag>control</tag>\n        <tag>restructuring</tag>\n        <tag>adaptation</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-transformation-and-crisis</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.spiritualityAndMeaning.scope" atom-id="life-domain.spiritualityAndMeaning" category="core" confidence="core">\n      <proposition>This section concerns meaning-making, worldview, reflection and any self-defined spiritual or religious questions only when those concerns are relevant to the person.</proposition>\n      <tags>\n        <tag>meaning-making</tag>\n        <tag>worldview</tag>\n        <tag>reflection</tag>\n        <tag>personal beliefs</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-spirituality-and-meaning</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.unconsciousPatterns.scope" atom-id="life-domain.unconsciousPatterns" category="core" confidence="core">\n      <proposition>This section concerns recurring reactions, avoidance, private patterns and behaviour that may be easier to notice indirectly than deliberately.</proposition>\n      <tags>\n        <tag>recurring reactions</tag>\n        <tag>avoidance</tag>\n        <tag>private patterns</tag>\n        <tag>less conscious behaviour</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-unconscious-patterns</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.wellbeingAndDailyRhythm.scope" atom-id="life-domain.wellbeingAndDailyRhythm" category="core" confidence="core">\n      <proposition>This section concerns routine, rest, workload, everyday regulation and non-diagnostic patterns that may affect a person&apos;s sense of day-to-day wellbeing.</proposition>\n      <tags>\n        <tag>routine</tag>\n        <tag>rest</tag>\n        <tag>workload</tag>\n        <tag>daily rhythm</tag>\n        <tag>wellbeing</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-wellbeing-and-daily-rhythm</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="life-domain.developmentalDirection.scope" atom-id="life-domain.developmentalDirection" category="core" confidence="core">\n      <proposition>This section concerns skills, habits and choices that may become useful areas for deliberate development over time.</proposition>\n      <tags>\n        <tag>development</tag>\n        <tag>skills</tag>\n        <tag>habits</tag>\n        <tag>deliberate choices</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#life-developmental-direction</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.overall.scope" atom-id="compatibility-domain.overall" category="core" confidence="core">\n      <proposition>This domain summarises compatibility across the other relationship domains rather than treating one factor as decisive.</proposition>\n      <tags>\n        <tag>overall compatibility</tag>\n        <tag>mixed factors</tag>\n        <tag>relationship context</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-overall</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.romantic.scope" atom-id="compatibility-domain.romantic" category="core" confidence="core">\n      <proposition>This domain concerns romantic attraction, affection, courtship and relationship expectations.</proposition>\n      <tags>\n        <tag>romance</tag>\n        <tag>affection</tag>\n        <tag>attraction</tag>\n        <tag>relationship expectations</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-romantic</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.sexual.scope" atom-id="compatibility-domain.sexual" category="core" confidence="core">\n      <proposition>This domain concerns consensual adult attraction, desire, intimate pace, boundaries and sexual communication.</proposition>\n      <tags>\n        <tag>sexual attraction</tag>\n        <tag>desire</tag>\n        <tag>boundaries</tag>\n        <tag>communication</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-sexual</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.emotional.scope" atom-id="compatibility-domain.emotional" category="core" confidence="core">\n      <proposition>This domain concerns emotional responsiveness, reassurance, closeness, autonomy and the handling of changing moods or needs.</proposition>\n      <tags>\n        <tag>emotional response</tag>\n        <tag>reassurance</tag>\n        <tag>closeness</tag>\n        <tag>autonomy</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-emotional</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.communication.scope" atom-id="compatibility-domain.communication" category="core" confidence="core">\n      <proposition>This domain concerns information exchange, conversational style, clarity, misunderstanding and the ability to discuss differences.</proposition>\n      <tags>\n        <tag>communication</tag>\n        <tag>clarity</tag>\n        <tag>conversation</tag>\n        <tag>misunderstanding</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-communication</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.intellectual.scope" atom-id="compatibility-domain.intellectual" category="core" confidence="core">\n      <proposition>This domain concerns shared curiosity, exchange of ideas, learning style and the way two people approach reasoning or new information.</proposition>\n      <tags>\n        <tag>ideas</tag>\n        <tag>curiosity</tag>\n        <tag>learning</tag>\n        <tag>reasoning</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-intellectual</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.friendship.scope" atom-id="compatibility-domain.friendship" category="core" confidence="core">\n      <proposition>This domain concerns companionship, mutual support, shared activity and the expectations involved in friendship.</proposition>\n      <tags>\n        <tag>friendship</tag>\n        <tag>companionship</tag>\n        <tag>mutual support</tag>\n        <tag>shared activity</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-friendship</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.business.scope" atom-id="compatibility-domain.business" category="core" confidence="core">\n      <proposition>This domain concerns practical collaboration, decision-making, reliability, responsibility and working toward shared business goals.</proposition>\n      <tags>\n        <tag>business</tag>\n        <tag>collaboration</tag>\n        <tag>decisions</tag>\n        <tag>reliability</tag>\n        <tag>responsibility</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-business</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.domestic.scope" atom-id="compatibility-domain.domestic" category="core" confidence="core">\n      <proposition>This domain concerns shared home life, routines, practical responsibilities, comfort and everyday cohabitation.</proposition>\n      <tags>\n        <tag>home</tag>\n        <tag>routine</tag>\n        <tag>shared responsibilities</tag>\n        <tag>cohabitation</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-domestic</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.long-term.scope" atom-id="compatibility-domain.long-term" category="core" confidence="core">\n      <proposition>This domain concerns durability, commitment, adaptation, expectations and the ability to sustain a relationship over time.</proposition>\n      <tags>\n        <tag>durability</tag>\n        <tag>commitment</tag>\n        <tag>adaptation</tag>\n        <tag>expectations</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-long-term</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.conflict-resolution.scope" atom-id="compatibility-domain.conflict-resolution" category="core" confidence="core">\n      <proposition>This domain concerns disagreement, assertion, negotiation, repair and the way two people respond when their needs conflict.</proposition>\n      <tags>\n        <tag>conflict</tag>\n        <tag>negotiation</tag>\n        <tag>repair</tag>\n        <tag>assertion</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-conflict-resolution</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="compatibility-domain.spiritual.scope" atom-id="compatibility-domain.spiritual" category="core" confidence="core">\n      <proposition>This domain concerns compatibility in meaning-making, worldview and self-defined beliefs; it does not assume that either person follows a spiritual or religious worldview.</proposition>\n      <tags>\n        <tag>meaning-making</tag>\n        <tag>worldview</tag>\n        <tag>personal beliefs</tag>\n        <tag>reflection</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#compatibility-spiritual</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="synthesis.overview.scope" atom-id="synthesis.overview" category="core" confidence="core">\n      <proposition>This unit summarises the main supported themes of the selected chart system without introducing new chart facts.</proposition>\n      <tags>\n        <tag>overview</tag>\n        <tag>main themes</tag>\n        <tag>selected chart system</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#synthesis-overview</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="synthesis.system-synthesis.scope" atom-id="synthesis.system-synthesis" category="core" confidence="core">\n      <proposition>This unit combines already interpreted units from one selected chart system into a coherent account while preserving contradictions and differences between fields.</proposition>\n      <tags>\n        <tag>synthesis</tag>\n        <tag>coherence</tag>\n        <tag>contradictions</tag>\n        <tag>selected chart system</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#synthesis-system-synthesis</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="synthesis.final-synthesis.scope" atom-id="synthesis.final-synthesis" category="core" confidence="core">\n      <proposition>This unit combines the accepted chart and compatibility interpretations into a final summary without adding unsupported claims.</proposition>\n      <tags>\n        <tag>final synthesis</tag>\n        <tag>accepted interpretations</tag>\n        <tag>summary</tag>\n        <tag>no new claims</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.project.interpretation-domain-taxonomy#synthesis-final-synthesis</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' },
  { name: "eclipses.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="eclipses">\n  <atoms>\n    <atom id="derived.eclipses-at-birth" kind="derived-construct" review-status="approved">\n      <display-name>Eclipse at birth</display-name>\n      <plain-english>eclipse context within the natal Sun-Moon-node configuration</plain-english>\n      <aliases>\n        <alias>Eclipse at birth</alias>\n        <alias>Natal eclipse</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>eclipsesAtBirth</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>derived.eclipses-at-birth.core.context</claim-id>\n        <claim-id>derived.eclipses-at-birth.detail.types</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>fate</concept>\n        <concept>destiny</concept>\n        <concept>predestination</concept>\n        <concept>karmic path</concept>\n        <concept>karmic debt</concept>\n        <concept>past lives</concept>\n        <concept>reincarnation</concept>\n        <concept>a soul agreement</concept>\n        <concept>soul purpose</concept>\n        <concept>dharma</concept>\n        <concept>spiritual journey</concept>\n        <concept>cosmic plan</concept>\n        <concept>divine intervention</concept>\n        <concept>events that must happen</concept>\n        <concept>a guaranteed crisis</concept>\n        <concept>a guaranteed beginning or ending</concept>\n        <concept>medical outcomes</concept>\n        <concept>an omen</concept>\n        <concept>a malefic influence</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>body.sun</atom-id>\n        <atom-id>body.moon</atom-id>\n        <atom-id>point.north-node</atom-id>\n        <atom-id>point.south-node</atom-id>\n        <atom-id>derived.lunar-phase</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.eclipse-context</source-id>\n      </source-ids>\n    </atom>\n    <atom id="derived.eclipses-prenatal-solar" kind="derived-construct" review-status="approved">\n      <display-name>Prenatal solar eclipse</display-name>\n      <plain-english>a pre-birth solar-eclipse degree used as contextual chart evidence</plain-english>\n      <aliases>\n        <alias>Prenatal solar eclipse</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>prenatalSolar</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>derived.eclipses-prenatal-solar.core.context</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>fate</concept>\n        <concept>destiny</concept>\n        <concept>predestination</concept>\n        <concept>karmic path</concept>\n        <concept>karmic debt</concept>\n        <concept>past lives</concept>\n        <concept>reincarnation</concept>\n        <concept>a soul agreement</concept>\n        <concept>soul purpose</concept>\n        <concept>dharma</concept>\n        <concept>spiritual journey</concept>\n        <concept>cosmic plan</concept>\n        <concept>divine intervention</concept>\n        <concept>events that must happen</concept>\n        <concept>a guaranteed crisis</concept>\n        <concept>a guaranteed beginning or ending</concept>\n        <concept>medical outcomes</concept>\n        <concept>universal destiny</concept>\n        <concept>a quality the soul came to develop</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>derived.eclipses-at-birth</atom-id>\n        <atom-id>body.sun</atom-id>\n        <atom-id>body.moon</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.zodisphere.prenatal-eclipse-definition</source-id>\n        <source-id>semantic.augurine.prenatal-eclipse-context</source-id>\n      </source-ids>\n    </atom>\n    <atom id="derived.eclipses-prenatal-lunar" kind="derived-construct" review-status="approved">\n      <display-name>Prenatal lunar eclipse</display-name>\n      <plain-english>a pre-birth lunar-eclipse degree used as contextual chart evidence</plain-english>\n      <aliases>\n        <alias>Prenatal lunar eclipse</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>prenatalLunar</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>derived.eclipses-prenatal-lunar.core.context</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>fate</concept>\n        <concept>destiny</concept>\n        <concept>predestination</concept>\n        <concept>karmic path</concept>\n        <concept>karmic debt</concept>\n        <concept>past lives</concept>\n        <concept>reincarnation</concept>\n        <concept>a soul agreement</concept>\n        <concept>soul purpose</concept>\n        <concept>dharma</concept>\n        <concept>spiritual journey</concept>\n        <concept>cosmic plan</concept>\n        <concept>divine intervention</concept>\n        <concept>events that must happen</concept>\n        <concept>a guaranteed crisis</concept>\n        <concept>a guaranteed beginning or ending</concept>\n        <concept>medical outcomes</concept>\n        <concept>a lesson the soul needs to learn</concept>\n        <concept>dual destiny</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>derived.eclipses-at-birth</atom-id>\n        <atom-id>body.sun</atom-id>\n        <atom-id>body.moon</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.zodisphere.prenatal-eclipse-definition</source-id>\n        <source-id>semantic.augurine.prenatal-eclipse-context</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="derived.eclipses-at-birth.core.context" atom-id="derived.eclipses-at-birth" category="core" confidence="school-specific">\n      <proposition>An eclipse coinciding with birth can be treated as additional context around the natal Sun-Moon-node configuration and any chart factors closely connected with the eclipse degree.</proposition>\n      <tags>\n        <tag>eclipse at birth</tag>\n        <tag>natal context</tag>\n        <tag>Sun-Moon-node configuration</tag>\n        <tag>contacted chart factors</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.eclipse-context#modern-trigger-context</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="derived.eclipses-at-birth.detail.types" atom-id="derived.eclipses-at-birth" category="interaction" confidence="core">\n      <proposition>A solar eclipse is a New-Moon conjunction near the lunar nodal axis, while a lunar eclipse is a Full-Moon opposition near that axis; the type is calculation evidence rather than a prediction of what must happen to the person.</proposition>\n      <tags>\n        <tag>solar eclipse</tag>\n        <tag>lunar eclipse</tag>\n        <tag>New Moon</tag>\n        <tag>Full Moon</tag>\n        <tag>nodal axis</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.eclipse-context#solar-new-moon-node</source-ref>\n        <source-ref>semantic.astrodienst.eclipse-context#lunar-full-moon-node</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="derived.eclipses-prenatal-solar.core.context" atom-id="derived.eclipses-prenatal-solar" category="core" confidence="school-specific">\n      <proposition>The prenatal solar eclipse is retained as a sensitised solar-eclipse degree from before birth and is read only in context with its sign, house, node, aspects and the rest of the natal chart.</proposition>\n      <tags>\n        <tag>prenatal solar eclipse</tag>\n        <tag>sensitive degree</tag>\n        <tag>chart context</tag>\n        <tag>sign</tag>\n        <tag>house</tag>\n        <tag>node</tag>\n        <tag>aspects</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.zodisphere.prenatal-eclipse-definition#sensitive-degree-definition</source-ref>\n        <source-ref>semantic.augurine.prenatal-eclipse-context#read-in-context-not-verdict</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="derived.eclipses-prenatal-lunar.core.context" atom-id="derived.eclipses-prenatal-lunar" category="core" confidence="school-specific">\n      <proposition>The prenatal lunar eclipse is retained as a sensitised lunar-eclipse degree from before birth and is read only in context with its sign, house, node, aspects and the rest of the natal chart.</proposition>\n      <tags>\n        <tag>prenatal lunar eclipse</tag>\n        <tag>sensitive degree</tag>\n        <tag>chart context</tag>\n        <tag>sign</tag>\n        <tag>house</tag>\n        <tag>node</tag>\n        <tag>aspects</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.zodisphere.prenatal-eclipse-definition#sensitive-degree-definition</source-ref>\n        <source-ref>semantic.augurine.prenatal-eclipse-context#read-in-context-not-verdict</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' },
  { name: "houses.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="houses">\n  <atoms>\n    <atom id="house.1" kind="domain" review-status="approved">\n      <display-name>House 1</display-name>\n      <plain-english>self-presentation, immediate approach and beginnings</plain-english>\n      <aliases>\n        <alias>House 1</alias>\n        <alias>1th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>1</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.1.core.presentation</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>the whole personality</concept>\n        <concept>a fixed temperament</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.2" kind="domain" review-status="approved">\n      <display-name>House 2</display-name>\n      <plain-english>values, possessions and material resources</plain-english>\n      <aliases>\n        <alias>House 2</alias>\n        <alias>2th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>2</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.2.core.resources</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>guaranteed wealth</concept>\n        <concept>moral worth</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.3" kind="domain" review-status="approved">\n      <display-name>House 3</display-name>\n      <plain-english>communication, everyday exchange and local relationships</plain-english>\n      <aliases>\n        <alias>House 3</alias>\n        <alias>3th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>3</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.3.core.communication</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.4" kind="domain" review-status="approved">\n      <display-name>House 4</display-name>\n      <plain-english>home, origins, family background and private foundation</plain-english>\n      <aliases>\n        <alias>House 4</alias>\n        <alias>4th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>4</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.4.core.home-origins</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>ancestral karma</concept>\n        <concept>a predetermined family fate</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.5" kind="domain" review-status="approved">\n      <display-name>House 5</display-name>\n      <plain-english>creativity, play, pleasure, erotic expression and children</plain-english>\n      <aliases>\n        <alias>House 5</alias>\n        <alias>5th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>5</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.5.core.creativity-pleasure</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>fertility prediction</concept>\n        <concept>a guaranteed child</concept>\n        <concept>destined romance</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.6" kind="domain" review-status="approved">\n      <display-name>House 6</display-name>\n      <plain-english>daily work, routine, care and maintenance</plain-english>\n      <aliases>\n        <alias>House 6</alias>\n        <alias>6th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>6</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.6.core-routine-work</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>medical diagnosis</concept>\n        <concept>inevitable illness</concept>\n        <concept>moral meaning of illness</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.7" kind="domain" review-status="approved">\n      <display-name>House 7</display-name>\n      <plain-english>one-to-one partnership and relational engagement</plain-english>\n      <aliases>\n        <alias>House 7</alias>\n        <alias>7th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>7</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.7.core-partnership</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a destined spouse</concept>\n        <concept>soulmate</concept>\n        <concept>the exact identity of a future partner</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.8" kind="domain" review-status="approved">\n      <display-name>House 8</display-name>\n      <plain-english>shared resources, material obligations and material loss</plain-english>\n      <aliases>\n        <alias>House 8</alias>\n        <alias>8th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>8</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.8.core-shared-resources</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>death prediction</concept>\n        <concept>metaphysical transformation</concept>\n        <concept>karmic debt</concept>\n        <concept>occult destiny</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.9" kind="domain" review-status="approved">\n      <display-name>House 9</display-name>\n      <plain-english>worldview, life philosophy, broader learning and travel</plain-english>\n      <aliases>\n        <alias>House 9</alias>\n        <alias>9th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>9</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.9.core-worldview-learning</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>religious belief</concept>\n        <concept>spiritual destiny</concept>\n        <concept>divine truth</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.10" kind="domain" review-status="approved">\n      <display-name>House 10</display-name>\n      <plain-english>career, public role and long-term visible development</plain-english>\n      <aliases>\n        <alias>House 10</alias>\n        <alias>10th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>10</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.10.core-career-public</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>divine calling</concept>\n        <concept>one fixed purpose</concept>\n        <concept>destined profession</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.11" kind="domain" review-status="approved">\n      <display-name>House 11</display-name>\n      <plain-english>friends, groups, supportive connections and social participation</plain-english>\n      <aliases>\n        <alias>House 11</alias>\n        <alias>11th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>11</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.11.core-groups-friends</claim-id>\n      </claim-ids>\n      <do-not-infer>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n    <atom id="house.12" kind="domain" review-status="approved">\n      <display-name>House 12</display-name>\n      <plain-english>privacy, retreat, withdrawal and reduced ordinary participation</plain-english>\n      <aliases>\n        <alias>House 12</alias>\n        <alias>12th House</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>12</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>house.12.core-retreat-withdrawal</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>karma</concept>\n        <concept>past lives</concept>\n        <concept>spirituality as a required meaning</concept>\n        <concept>hidden enemies as fact</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-houses</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="house.1.core.presentation" atom-id="house.1" category="core" confidence="core">\n      <proposition>The first house is associated with immediate self-presentation, instinctive approach and the way a person meets the world directly.</proposition>\n      <tags>\n        <tag>self-presentation</tag>\n        <tag>immediate approach</tag>\n        <tag>instinctive response</tag>\n        <tag>beginnings</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-1-self-presentation</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.2.core.resources" atom-id="house.2" category="core" confidence="core">\n      <proposition>The second house is associated with values, possessions, material resources and the practical way a person handles what they have.</proposition>\n      <tags>\n        <tag>values</tag>\n        <tag>possessions</tag>\n        <tag>material resources</tag>\n        <tag>practical security</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-2-values-resources</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.3.core.communication" atom-id="house.3" category="core" confidence="core">\n      <proposition>The third house is associated with everyday communication, siblings and the local relationships and exchanges that shape daily life.</proposition>\n      <tags>\n        <tag>communication</tag>\n        <tag>siblings</tag>\n        <tag>local relations</tag>\n        <tag>everyday exchange</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-3-communication-local-relations</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.4.core.home-origins" atom-id="house.4" category="core" confidence="core">\n      <proposition>The fourth house is associated with home, family background, origins and the circumstances that shape early private life.</proposition>\n      <tags>\n        <tag>home</tag>\n        <tag>family background</tag>\n        <tag>origins</tag>\n        <tag>private foundation</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-4-home-origins</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.5.core.creativity-pleasure" atom-id="house.5" category="core" confidence="core">\n      <proposition>The fifth house is associated with play, pleasure, creativity, erotic expression and the way a person relates to children.</proposition>\n      <tags>\n        <tag>creativity</tag>\n        <tag>play</tag>\n        <tag>pleasure</tag>\n        <tag>erotic expression</tag>\n        <tag>children</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-5-creativity-pleasure-children</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.6.core-routine-work" atom-id="house.6" category="core" confidence="core">\n      <proposition>The sixth house is associated with daily work, routines, the immediate work environment and practical habits of care and maintenance.</proposition>\n      <tags>\n        <tag>daily work</tag>\n        <tag>routine</tag>\n        <tag>work environment</tag>\n        <tag>care</tag>\n        <tag>maintenance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-6-work-routine-care</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.7.core-partnership" atom-id="house.7" category="core" confidence="core">\n      <proposition>The seventh house is associated with one-to-one partnerships and the kinds of relational arrangements a person seeks or repeatedly engages with.</proposition>\n      <tags>\n        <tag>partnership</tag>\n        <tag>one-to-one relationships</tag>\n        <tag>relating</tag>\n        <tag>mutual engagement</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-7-partnerships</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.8.core-shared-resources" atom-id="house.8" category="core" confidence="core">\n      <proposition>The eighth house is associated with shared or communal resources and with practical situations involving material loss, obligation or redistribution.</proposition>\n      <tags>\n        <tag>shared resources</tag>\n        <tag>communal property</tag>\n        <tag>material loss</tag>\n        <tag>obligation</tag>\n        <tag>redistribution</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-8-shared-resources-loss</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.9.core-worldview-learning" atom-id="house.9" category="core" confidence="core">\n      <proposition>The ninth house is associated with life philosophy, worldview, broader learning and experience gained through travel or unfamiliar perspectives.</proposition>\n      <tags>\n        <tag>worldview</tag>\n        <tag>life philosophy</tag>\n        <tag>broader learning</tag>\n        <tag>travel</tag>\n        <tag>perspective</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-9-worldview-learning-travel</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.10.core-career-public" atom-id="house.10" category="core" confidence="core">\n      <proposition>The tenth house is associated with profession, public role and the long-term direction of a person&apos;s visible development.</proposition>\n      <tags>\n        <tag>career</tag>\n        <tag>profession</tag>\n        <tag>public role</tag>\n        <tag>long-term development</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-10-career-public-development</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.11.core-groups-friends" atom-id="house.11" category="core" confidence="core">\n      <proposition>The eleventh house is associated with friends, groups, supportive connections and the way a person participates in the wider society around them.</proposition>\n      <tags>\n        <tag>friends</tag>\n        <tag>groups</tag>\n        <tag>social participation</tag>\n        <tag>supportive connections</tag>\n        <tag>society</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-11-friends-groups-society</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="house.12.core-retreat-withdrawal" atom-id="house.12" category="core" confidence="core">\n      <proposition>The twelfth house is associated with retreat, withdrawal, privacy and settings in which ordinary personal participation is reduced or set aside.</proposition>\n      <tags>\n        <tag>retreat</tag>\n        <tag>withdrawal</tag>\n        <tag>privacy</tag>\n        <tag>solitude</tag>\n        <tag>institutions</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-houses#house-12-retreat-withdrawal-institutions</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' },
  { name: "patterns.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="patterns">\n  <atoms>\n    <atom id="pattern.stellium" kind="derived-construct" review-status="approved">\n      <display-name>Stellium</display-name>\n      <plain-english>concentration, emphasis, focal area, interdependent principles</plain-english>\n      <aliases>\n        <alias>Stellium</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>stellium</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>pattern.stellium.core.structure</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a guaranteed talent</concept>\n        <concept>a guaranteed crisis</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.pattern.stellium</source-id>\n      </source-ids>\n    </atom>\n    <atom id="pattern.t-square" kind="derived-construct" review-status="approved">\n      <display-name>T-square</display-name>\n      <plain-english>tension, focal point, competing pressures, active response</plain-english>\n      <aliases>\n        <alias>T-square</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>t_square</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>pattern.t-square.core.structure</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>an unavoidable event</concept>\n        <concept>punishment</concept>\n        <concept>a cosmic test</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.pattern.t-square</source-id>\n      </source-ids>\n    </atom>\n    <atom id="pattern.grand-trine" kind="derived-construct" review-status="approved">\n      <display-name>Grand Trine</display-name>\n      <plain-english>support, ease, cooperation, available capacity</plain-english>\n      <aliases>\n        <alias>Grand Trine</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>grand_trine</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>pattern.grand-trine.core.structure</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a cosmic gift</concept>\n        <concept>grace</concept>\n        <concept>guaranteed talent</concept>\n        <concept>guaranteed success</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.pattern.grand-trine</source-id>\n      </source-ids>\n    </atom>\n    <atom id="pattern.grand-cross" kind="derived-construct" review-status="approved">\n      <display-name>Grand Cross</display-name>\n      <plain-english>competing pressures, stability, inflexibility, effort</plain-english>\n      <aliases>\n        <alias>Grand Cross</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>grand_cross</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>pattern.grand-cross.core.structure</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>an unavoidable fate</concept>\n        <concept>punishment</concept>\n        <concept>guaranteed hardship</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.pattern.grand-cross</source-id>\n      </source-ids>\n    </atom>\n    <atom id="pattern.yod" kind="derived-construct" review-status="approved">\n      <display-name>Yod</display-name>\n      <plain-english>adjustment, subtle tension, focal point, constructive exchange</plain-english>\n      <aliases>\n        <alias>Yod</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>yod</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>pattern.yod.core.structure</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>Finger of God</concept>\n        <concept>divine task</concept>\n        <concept>destiny</concept>\n        <concept>a life mission assigned from outside</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.pattern.yod</source-id>\n      </source-ids>\n    </atom>\n    <atom id="pattern.kite" kind="derived-construct" review-status="approved">\n      <display-name>Kite</display-name>\n      <plain-english>mobilisation, focal direction, support plus tension, constructive expression</plain-english>\n      <aliases>\n        <alias>Kite</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>kite</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>pattern.kite.core.structure</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>guaranteed success</concept>\n        <concept>destined development</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.pattern.kite</source-id>\n      </source-ids>\n    </atom>\n    <atom id="pattern.mystic-rectangle" kind="derived-construct" review-status="approved">\n      <display-name>Mystic Rectangle</display-name>\n      <plain-english>opposition tension, alternative routes, support, constructive balance</plain-english>\n      <aliases>\n        <alias>Mystic Rectangle</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>mystic_rectangle</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>pattern.mystic-rectangle.core.structure</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>mystical ability</concept>\n        <concept>spiritual gifts</concept>\n        <concept>divine balance</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.pattern.mystic-rectangle</source-id>\n      </source-ids>\n    </atom>\n    <atom id="pattern.grand-sextile" kind="derived-construct" review-status="approved">\n      <display-name>Grand Sextile</display-name>\n      <plain-english>supportive network, coordination, opportunity, activity</plain-english>\n      <aliases>\n        <alias>Grand Sextile</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>grand_sextile</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>pattern.grand-sextile.core.structure</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>guaranteed opportunity</concept>\n        <concept>guaranteed success</concept>\n        <concept>a special destiny</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.pattern.grand-sextile</source-id>\n      </source-ids>\n    </atom>\n    <atom id="pattern.thor-hammer" kind="derived-construct" review-status="approved">\n      <display-name>Thor&apos;s Hammer</display-name>\n      <plain-english>dynamic tension, focal point, pressure, constructive outlet</plain-english>\n      <aliases>\n        <alias>Thor&apos;s Hammer</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>thor_hammer</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>pattern.thor-hammer.core.structure</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>Norse religious meaning</concept>\n        <concept>violence</concept>\n        <concept>rebellion as inevitable</concept>\n        <concept>a guaranteed crisis</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.pattern.thor-hammer</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="pattern.stellium.core.structure" atom-id="pattern.stellium" category="interaction" confidence="school-specific">\n      <proposition>A stellium concentrates several connected planets in one area, giving particular emphasis to the sign, house and planetary principles involved while making their effects strongly interdependent.</proposition>\n      <tags>\n        <tag>concentration</tag>\n        <tag>emphasis</tag>\n        <tag>focal area</tag>\n        <tag>interdependent principles</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.pattern.stellium#interpretation-core</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="pattern.t-square.core.structure" atom-id="pattern.t-square" category="interaction" confidence="school-specific">\n      <proposition>A T-square concentrates the tension of an opposition through a third focal planet that squares both ends, making the focal point a major channel for the competing pressures in the figure.</proposition>\n      <tags>\n        <tag>tension</tag>\n        <tag>focal point</tag>\n        <tag>competing pressures</tag>\n        <tag>active response</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.pattern.t-square#interpretation-core</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="pattern.grand-trine.core.structure" atom-id="pattern.grand-trine" category="interaction" confidence="school-specific">\n      <proposition>A Grand Trine links three principles through mutually supportive trines, creating an area of comparatively easy cooperation that may become so familiar that its capacities are taken for granted or underused.</proposition>\n      <tags>\n        <tag>support</tag>\n        <tag>ease</tag>\n        <tag>cooperation</tag>\n        <tag>available capacity</tag>\n        <tag>underuse</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.pattern.grand-trine#interpretation-core</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="pattern.grand-cross.core.structure" atom-id="pattern.grand-cross" category="interaction" confidence="school-specific">\n      <proposition>A Grand Cross combines multiple squares and oppositions into a stable but demanding configuration, concentrating several competing pressures that require sustained effort and adjustment.</proposition>\n      <tags>\n        <tag>competing pressures</tag>\n        <tag>stability</tag>\n        <tag>inflexibility</tag>\n        <tag>effort</tag>\n        <tag>adjustment</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.pattern.grand-cross#interpretation-core</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="pattern.yod.core.structure" atom-id="pattern.yod" category="interaction" confidence="school-specific">\n      <proposition>A Yod combines two quincunxes with a sextile, placing subtle adjustment pressure on the focal planet while the sextile provides a potentially constructive exchange between the other two principles.</proposition>\n      <tags>\n        <tag>adjustment</tag>\n        <tag>subtle tension</tag>\n        <tag>focal point</tag>\n        <tag>constructive exchange</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.pattern.yod#interpretation-core</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="pattern.kite.core.structure" atom-id="pattern.kite" category="interaction" confidence="school-specific">\n      <proposition>A Kite adds an opposition and two sextiles to a Grand Trine, introducing tension and a focal direction that can help mobilise capacities that might otherwise remain comfortable but inactive.</proposition>\n      <tags>\n        <tag>mobilisation</tag>\n        <tag>focal direction</tag>\n        <tag>support plus tension</tag>\n        <tag>constructive expression</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.pattern.kite#interpretation-core</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="pattern.mystic-rectangle.core.structure" atom-id="pattern.mystic-rectangle" category="interaction" confidence="school-specific">\n      <proposition>A Mystic Rectangle combines two oppositions with trines and sextiles, giving the tensions alternative supportive routes through which they can be expressed or balanced constructively.</proposition>\n      <tags>\n        <tag>opposition tension</tag>\n        <tag>alternative routes</tag>\n        <tag>support</tag>\n        <tag>constructive balance</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.pattern.mystic-rectangle#interpretation-core</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="pattern.grand-sextile.core.structure" atom-id="pattern.grand-sextile" category="interaction" confidence="school-specific">\n      <proposition>A Grand Sextile links six planets through a network of sextiles and trines, increasing the number of supportive connections and creating several routes for coordinated activity.</proposition>\n      <tags>\n        <tag>supportive network</tag>\n        <tag>coordination</tag>\n        <tag>opportunity</tag>\n        <tag>activity</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.pattern.grand-sextile#interpretation-core</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="pattern.thor-hammer.core.structure" atom-id="pattern.thor-hammer" category="interaction" confidence="school-specific">\n      <proposition>Thor&apos;s Hammer combines a square with two sesquiquadrates to a focal planet, creating a concentrated dynamic tension whose expression depends strongly on how the focal principle is handled.</proposition>\n      <tags>\n        <tag>dynamic tension</tag>\n        <tag>focal point</tag>\n        <tag>pressure</tag>\n        <tag>constructive outlet</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.pattern.thor-hammer#interpretation-core</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' },
  { name: "points.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="points">\n  <atoms>\n    <atom id="point.north-node" kind="entity" review-status="approved">\n      <display-name>North Node</display-name>\n      <plain-english>outward participation, initiation and engagement through social networks</plain-english>\n      <aliases>\n        <alias>North Node</alias>\n        <alias>Ascending Node</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>north_node_mean</internal-id>\n        <internal-id>north_node_true</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>point.north-node.core.network-initiation</claim-id>\n        <claim-id>point.north-node.interaction.network-cycle</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>destiny</concept>\n        <concept>future destiny</concept>\n        <concept>soul purpose</concept>\n        <concept>karmic development</concept>\n        <concept>what a person is meant to become</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>point.south-node</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-moon-nodes</source-id>\n      </source-ids>\n    </atom>\n    <atom id="point.south-node" kind="entity" review-status="approved">\n      <display-name>South Node</display-name>\n      <plain-english>receiving, consequence and integration within social networks</plain-english>\n      <aliases>\n        <alias>South Node</alias>\n        <alias>Descending Node</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>south_node_mean</internal-id>\n        <internal-id>south_node_true</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>point.south-node.core.network-consequences</claim-id>\n        <claim-id>point.south-node.interaction.network-cycle</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>past lives</concept>\n        <concept>karmic debt</concept>\n        <concept>past-life talents</concept>\n        <concept>a predetermined past</concept>\n        <concept>what must be left behind</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>point.north-node</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.transits-moon-nodes</source-id>\n      </source-ids>\n    </atom>\n    <atom id="point.black-moon-lilith" kind="entity" review-status="approved">\n      <display-name>Black Moon Lilith</display-name>\n      <plain-english>unfulfilled wishes, perceived lacks and areas needing closer attention</plain-english>\n      <aliases>\n        <alias>Black Moon Lilith</alias>\n        <alias>Black Moon</alias>\n        <alias>Lilith</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>lilith_mean</internal-id>\n        <internal-id>lilith_true</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>point.black-moon-lilith.core.lacks</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a feminine essence</concept>\n        <concept>a goddess archetype</concept>\n        <concept>demonic meaning</concept>\n        <concept>spiritual femininity</concept>\n        <concept>karma</concept>\n        <concept>past lives</concept>\n        <concept>medical conditions</concept>\n        <concept>fertility or menstruation</concept>\n        <concept>sexual orientation</concept>\n        <concept>trauma</concept>\n        <concept>unconscious material as clinical fact</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.mirti.black-moon-lilith</source-id>\n      </source-ids>\n    </atom>\n    <atom id="point.part-of-fortune" kind="entity" review-status="approved">\n      <display-name>Part of Fortune</display-name>\n      <plain-english>material circumstances and practical connection with the surrounding world</plain-english>\n      <aliases>\n        <alias>Part of Fortune</alias>\n        <alias>Lot of Fortune</alias>\n        <alias>Pars Fortunae</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>part_of_fortune</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>point.part-of-fortune.core.world-connection</claim-id>\n        <claim-id>point.part-of-fortune.core.material-support</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>luck guaranteed by fate</concept>\n        <concept>divine favour</concept>\n        <concept>karmic reward</concept>\n        <concept>inevitable wealth or health outcomes</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>point.part-of-spirit</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.lot-fortune-spirit</source-id>\n      </source-ids>\n    </atom>\n    <atom id="point.part-of-spirit" kind="entity" review-status="approved">\n      <display-name>Part of Spirit</display-name>\n      <plain-english>intention, deliberate action and chosen direction</plain-english>\n      <aliases>\n        <alias>Part of Spirit</alias>\n        <alias>Lot of Spirit</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>part_of_spirit</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>point.part-of-spirit.core.intention</claim-id>\n        <claim-id>point.part-of-spirit.core.chosen-direction</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a soul</concept>\n        <concept>soul purpose</concept>\n        <concept>spiritual mission</concept>\n        <concept>divine purpose</concept>\n        <concept>incarnation</concept>\n        <concept>spiritual causes of illness</concept>\n      </do-not-infer>\n      <related-atom-ids>\n        <atom-id>point.part-of-fortune</atom-id>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.hand.lot-fortune-spirit</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="point.north-node.core.network-initiation" atom-id="point.north-node" category="core" confidence="school-specific">\n      <proposition>The North Node is associated with initiating or putting activity outward into the networks and relationships through which a person engages the wider world.</proposition>\n      <tags>\n        <tag>initiation</tag>\n        <tag>externalisation</tag>\n        <tag>social networks</tag>\n        <tag>engagement</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-moon-nodes#north-node-initiation</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="point.north-node.interaction.network-cycle" atom-id="point.north-node" category="interaction" confidence="school-specific">\n      <proposition>Within the nodal cycle, the North Node can be read as an outward-facing phase of participation, initiation and connection.</proposition>\n      <tags>\n        <tag>outward participation</tag>\n        <tag>connection</tag>\n        <tag>network cycle</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-moon-nodes#node-network-cycle</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="point.south-node.core.network-consequences" atom-id="point.south-node" category="core" confidence="school-specific">\n      <proposition>The South Node is associated with encountering and taking in the consequences or results of activity already circulating through a person&apos;s networks and relationships.</proposition>\n      <tags>\n        <tag>consequences</tag>\n        <tag>assimilation</tag>\n        <tag>results</tag>\n        <tag>social networks</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-moon-nodes#south-node-consequences</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="point.south-node.interaction.network-cycle" atom-id="point.south-node" category="interaction" confidence="school-specific">\n      <proposition>Within the nodal cycle, the South Node can be read as a receiving phase concerned with consequences, results and integration.</proposition>\n      <tags>\n        <tag>integration</tag>\n        <tag>receiving</tag>\n        <tag>network cycle</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.transits-moon-nodes#node-network-cycle</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="point.black-moon-lilith.core.lacks" atom-id="point.black-moon-lilith" category="core" confidence="school-specific">\n      <proposition>In this reviewed modern interpretation, Black Moon Lilith is used as an indicator of unfulfilled wishes, perceived lacks and areas of life that may call for closer attention.</proposition>\n      <tags>\n        <tag>unfulfilled wishes</tag>\n        <tag>perceived lacks</tag>\n        <tag>closer attention</tag>\n        <tag>unmet concerns</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.mirti.black-moon-lilith#unfulfilled-wishes-lacks</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="point.part-of-fortune.core.world-connection" atom-id="point.part-of-fortune" category="core" confidence="well-supported">\n      <proposition>The Part of Fortune is associated with the way a person is materially and practically connected with the surrounding physical and social world.</proposition>\n      <tags>\n        <tag>material circumstances</tag>\n        <tag>physical world</tag>\n        <tag>social world</tag>\n        <tag>practical connection</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.lot-fortune-spirit#fortune-physical-social-world</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="point.part-of-fortune.core.material-support" atom-id="point.part-of-fortune" category="core" confidence="school-specific">\n      <proposition>It is also associated with material support, prosperity and the practical conditions that can make it easier or harder to sustain oneself in the world.</proposition>\n      <tags>\n        <tag>material support</tag>\n        <tag>prosperity</tag>\n        <tag>practical conditions</tag>\n        <tag>resources</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.lot-fortune-spirit#fortune-material-support</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="point.part-of-spirit.core.intention" atom-id="point.part-of-spirit" category="core" confidence="well-supported">\n      <proposition>The Part of Spirit is associated with will, intention and what a person deliberately chooses to pursue rather than what simply happens around them.</proposition>\n      <tags>\n        <tag>intention</tag>\n        <tag>will</tag>\n        <tag>deliberate action</tag>\n        <tag>chosen direction</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.lot-fortune-spirit#spirit-will-intention</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="point.part-of-spirit.core.chosen-direction" atom-id="point.part-of-spirit" category="core" confidence="school-specific">\n      <proposition>It can also be used to describe chosen vocational direction when work functions as an active statement of what a person intends to do in the world.</proposition>\n      <tags>\n        <tag>chosen direction</tag>\n        <tag>vocation</tag>\n        <tag>deliberate priorities</tag>\n        <tag>active expression</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.hand.lot-fortune-spirit#spirit-chosen-career-direction</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' },
  { name: "signs.xml", xml: '<?xml version="1.0" encoding="UTF-8"?>\n<corpus format="astral-corpus-xml/1.0.0" category="signs">\n  <atoms>\n    <atom id="sign.aries" kind="style" review-status="approved">\n      <display-name>Aries</display-name>\n      <plain-english>initiative, energy, directness, courage</plain-english>\n      <aliases>\n        <alias>Aries</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>aries</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.aries.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>aggression is inevitable</concept>\n        <concept>natural superiority</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.taurus" kind="style" review-status="approved">\n      <display-name>Taurus</display-name>\n      <plain-english>steadiness, security, stability, deliberation</plain-english>\n      <aliases>\n        <alias>Taurus</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>taurus</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.taurus.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>materialism as a moral flaw</concept>\n        <concept>wealth</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.gemini" kind="style" review-status="approved">\n      <display-name>Gemini</display-name>\n      <plain-english>communication, mobility, learning, wit</plain-english>\n      <aliases>\n        <alias>Gemini</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>gemini</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.gemini.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>dishonesty</concept>\n        <concept>two personalities</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.cancer" kind="style" review-status="approved">\n      <display-name>Cancer</display-name>\n      <plain-english>emotional response, security, closeness, family orientation</plain-english>\n      <aliases>\n        <alias>Cancer</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>cancer</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.cancer.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a required family role</concept>\n        <concept>maternal identity</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.leo" kind="style" review-status="approved">\n      <display-name>Leo</display-name>\n      <plain-english>expression, generosity, organisation, visibility</plain-english>\n      <aliases>\n        <alias>Leo</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>leo</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.leo.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>narcissism</concept>\n        <concept>fame</concept>\n        <concept>natural superiority</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.virgo" kind="style" review-status="approved">\n      <display-name>Virgo</display-name>\n      <plain-english>precision, differentiation, practicality, usefulness</plain-english>\n      <aliases>\n        <alias>Virgo</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>virgo</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.virgo.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>perfectionism as inevitable</concept>\n        <concept>servitude</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.libra" kind="style" review-status="approved">\n      <display-name>Libra</display-name>\n      <plain-english>balance, harmony, tact, proportion</plain-english>\n      <aliases>\n        <alias>Libra</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>libra</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.libra.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>indecision is inevitable</concept>\n        <concept>a required romantic orientation</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.scorpio" kind="style" review-status="approved">\n      <display-name>Scorpio</display-name>\n      <plain-english>intensity, passion, depth, penetrating focus</plain-english>\n      <aliases>\n        <alias>Scorpio</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>scorpio</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.scorpio.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>occult ability</concept>\n        <concept>dangerousness</concept>\n        <concept>vengefulness</concept>\n        <concept>supernatural sensitivity</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.sagittarius" kind="style" review-status="approved">\n      <display-name>Sagittarius</display-name>\n      <plain-english>freedom, movement, exploration, cheerfulness</plain-english>\n      <aliases>\n        <alias>Sagittarius</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>sagittarius</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.sagittarius.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>religious faith</concept>\n        <concept>good luck</concept>\n        <concept>a destined journey</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.capricorn" kind="style" review-status="approved">\n      <display-name>Capricorn</display-name>\n      <plain-english>endurance, ambition, goals, persistence</plain-english>\n      <aliases>\n        <alias>Capricorn</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>capricorn</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.capricorn.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>status seeking as inevitable</concept>\n        <concept>destined success</concept>\n        <concept>a fixed life purpose</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.aquarius" kind="style" review-status="approved">\n      <display-name>Aquarius</display-name>\n      <plain-english>communication, progressive ideas, groups, collective concerns</plain-english>\n      <aliases>\n        <alias>Aquarius</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>aquarius</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.aquarius.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>a universal spirit</concept>\n        <concept>spiritual mission</concept>\n        <concept>political ideology</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n    <atom id="sign.pisces" kind="style" review-status="approved">\n      <display-name>Pisces</display-name>\n      <plain-english>sensitivity, compassion, adaptability, helpfulness</plain-english>\n      <aliases>\n        <alias>Pisces</alias>\n      </aliases>\n      <internal-ids>\n        <internal-id>pisces</internal-id>\n      </internal-ids>\n      <claim-ids>\n        <claim-id>sign.pisces.core.style</claim-id>\n      </claim-ids>\n      <do-not-infer>\n        <concept>religious faith</concept>\n        <concept>psychic ability</concept>\n        <concept>spiritual sensitivity as fact</concept>\n        <concept>a fixed personality</concept>\n        <concept>literal causal effects from sign placement</concept>\n      </do-not-infer>\n      <related-atom-ids>\n      </related-atom-ids>\n      <source-ids>\n        <source-id>semantic.astrodienst.brief-intro-signs</source-id>\n      </source-ids>\n    </atom>\n  </atoms>\n  <claims>\n    <claim id="sign.aries.core.style" atom-id="sign.aries" category="core" confidence="well-supported">\n      <proposition>Aries describes an energetic, initiating and direct style that tends to act quickly and can become impulsive when speed outruns reflection.</proposition>\n      <tags>\n        <tag>initiative</tag>\n        <tag>energy</tag>\n        <tag>directness</tag>\n        <tag>courage</tag>\n        <tag>impulsiveness</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-aries-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.taurus.core.style" atom-id="sign.taurus" category="core" confidence="well-supported">\n      <proposition>Taurus describes a steadfast, deliberate and security-oriented style that values stability, continuity and tangible comfort.</proposition>\n      <tags>\n        <tag>steadiness</tag>\n        <tag>security</tag>\n        <tag>stability</tag>\n        <tag>deliberation</tag>\n        <tag>comfort</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-taurus-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.gemini.core.style" atom-id="sign.gemini" category="core" confidence="well-supported">\n      <proposition>Gemini describes a communicative, mobile and learning-oriented style that tends to move readily among ideas, information and changing interests.</proposition>\n      <tags>\n        <tag>communication</tag>\n        <tag>mobility</tag>\n        <tag>learning</tag>\n        <tag>wit</tag>\n        <tag>variety</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-gemini-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.cancer.core.style" atom-id="sign.cancer" category="core" confidence="well-supported">\n      <proposition>Cancer describes an emotionally responsive, closeness-seeking and security-oriented style that gives weight to familiarity and personal connection.</proposition>\n      <tags>\n        <tag>emotional response</tag>\n        <tag>security</tag>\n        <tag>closeness</tag>\n        <tag>family orientation</tag>\n        <tag>persistence</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-cancer-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.leo.core.style" atom-id="sign.leo" category="core" confidence="well-supported">\n      <proposition>Leo describes an expressive, generous and organising style that is comfortable with visibility, leadership and taking a central role.</proposition>\n      <tags>\n        <tag>expression</tag>\n        <tag>generosity</tag>\n        <tag>organisation</tag>\n        <tag>visibility</tag>\n        <tag>leadership</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-leo-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.virgo.core.style" atom-id="sign.virgo" category="core" confidence="well-supported">\n      <proposition>Virgo describes a precise, differentiating and practical style that pays close attention to what is useful, necessary or in need of refinement.</proposition>\n      <tags>\n        <tag>precision</tag>\n        <tag>differentiation</tag>\n        <tag>practicality</tag>\n        <tag>usefulness</tag>\n        <tag>critical evaluation</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-virgo-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.libra.core.style" atom-id="sign.libra" category="core" confidence="well-supported">\n      <proposition>Libra describes a tactful, proportion-seeking and relational style that gives weight to balance, harmony and consideration of more than one side.</proposition>\n      <tags>\n        <tag>balance</tag>\n        <tag>harmony</tag>\n        <tag>tact</tag>\n        <tag>proportion</tag>\n        <tag>comparison</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-libra-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.scorpio.core.style" atom-id="sign.scorpio" category="core" confidence="well-supported">\n      <proposition>Scorpio describes an intense, passionate and penetrating style that tends to engage deeply rather than superficially with demanding material.</proposition>\n      <tags>\n        <tag>intensity</tag>\n        <tag>passion</tag>\n        <tag>depth</tag>\n        <tag>penetrating focus</tag>\n        <tag>extremity</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-scorpio-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.sagittarius.core.style" atom-id="sign.sagittarius" category="core" confidence="well-supported">\n      <proposition>Sagittarius describes a freedom-seeking, mobile and exploratory style that tends to welcome movement, variety and a broader field of experience.</proposition>\n      <tags>\n        <tag>freedom</tag>\n        <tag>movement</tag>\n        <tag>exploration</tag>\n        <tag>cheerfulness</tag>\n        <tag>variety</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-sagittarius-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.capricorn.core.style" atom-id="sign.capricorn" category="core" confidence="well-supported">\n      <proposition>Capricorn describes an enduring, ambitious and goal-directed style that tends to apply effort steadily toward defined aims.</proposition>\n      <tags>\n        <tag>endurance</tag>\n        <tag>ambition</tag>\n        <tag>goals</tag>\n        <tag>persistence</tag>\n        <tag>purposeful effort</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-capricorn-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.aquarius.core.style" atom-id="sign.aquarius" category="core" confidence="well-supported">\n      <proposition>Aquarius describes a communicative, progressive and group-oriented style that gives weight to ideas, collective concerns and change beyond established convention.</proposition>\n      <tags>\n        <tag>communication</tag>\n        <tag>progressive ideas</tag>\n        <tag>groups</tag>\n        <tag>collective concerns</tag>\n        <tag>innovation</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-aquarius-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n    <claim id="sign.pisces.core.style" atom-id="sign.pisces" category="core" confidence="well-supported">\n      <proposition>Pisces describes a sensitive, compassionate and adaptable style that tends to respond readily to emotional context and the needs of other people.</proposition>\n      <tags>\n        <tag>sensitivity</tag>\n        <tag>compassion</tag>\n        <tag>adaptability</tag>\n        <tag>helpfulness</tag>\n        <tag>sociability</tag>\n      </tags>\n      <source-refs>\n        <source-ref>semantic.astrodienst.brief-intro-signs#sign-pisces-summary</source-ref>\n      </source-refs>\n      <neutrality religious="false" spiritual="false" karmic="false" fatalistic="false" supernatural="false" />\n    </claim>\n  </claims>\n</corpus>\n' }
];

// src/interpretation/corpus/data/index.ts
var parsed = parseReviewedCorpusXml(
  corpusSourceManifestXml,
  corpusSourceManifestName,
  corpusXmlDocuments
);
var reviewedCorpusOrigin = "xml";
var reviewedCorpusSources = parsed.sources;
var reviewedCorpusAtoms = parsed.atoms;
var reviewedCorpusClaims = parsed.claims;
var reviewedCorpusCategories = parsed.categories;
var compileReviewedCorpus = (requireComplete = false) => compileInterpretationCorpus({
  sources: reviewedCorpusSources,
  atoms: reviewedCorpusAtoms,
  claims: reviewedCorpusClaims,
  requireComplete
});

// src/interpretation/map/compile.ts
var globalForbiddenClaims = [
  "religious doctrine or divine intention",
  "souls, soul contracts or soul purpose as metaphysical facts",
  "karma, karmic debt, reincarnation or past-life causation",
  "fate, destiny, predestination or events being meant to happen",
  "supernatural intervention or external spiritual agency",
  "the universe, cosmos or life intentionally sending lessons, people or events",
  "literal causal claims that an astrological placement makes an event or trait happen"
];
var atomFor = (corpus, atomId) => {
  const atom2 = corpus.atoms[atomId];
  if (atom2 === void 0) throw new Error(`Interpretation map requires missing corpus atom ${atomId}`);
  return atom2;
};
var claimFor = (corpus, claimId) => {
  const claim = corpus.claims[claimId];
  if (claim === void 0) throw new Error(`Interpretation map requires missing corpus claim ${claimId}`);
  return claim;
};
var proposition = (claim) => ({
  id: `proposition.${claim.id}`,
  text: claim.proposition,
  tags: [...claim.tags],
  sourceClaimIds: [claim.id]
});
var uniquePropositions = (values) => {
  const seen = /* @__PURE__ */ new Set();
  const output = [];
  for (const value of values) {
    if (seen.has(value.id)) continue;
    seen.add(value.id);
    output.push(value);
  }
  return output;
};
var semanticBuckets = (corpus, atoms) => {
  const core = [];
  const detail2 = [];
  const themes = [];
  const strengths = [];
  const tensions = [];
  for (const atom2 of atoms) {
    for (const claimId of atom2.claimIds) {
      const claim = claimFor(corpus, claimId);
      const value = proposition(claim);
      switch (claim.category) {
        case "core":
          core.push(value);
          break;
        case "constructive":
          strengths.push(value);
          break;
        case "difficult":
          tensions.push(value);
          break;
        case "developmental":
          detail2.push(value);
          break;
        case "interaction":
          themes.push(value);
          break;
      }
    }
  }
  return {
    core: uniquePropositions(core),
    detail: uniquePropositions(detail2),
    themes: uniquePropositions(themes),
    strengths: uniquePropositions(strengths),
    tensions: uniquePropositions(tensions)
  };
};
var uniqueAtoms = (values) => {
  const seen = /* @__PURE__ */ new Set();
  const output = [];
  for (const value of values) {
    if (seen.has(value.id)) continue;
    seen.add(value.id);
    output.push(value);
  }
  return output;
};
var titleFor = (atoms) => atoms.map(({ displayName }) => displayName).join(" \xB7 ");
var domainFor = (atoms) => atoms.map(({ plainEnglish }) => plainEnglish).join("; ");
var compileInterpretationMap = (corpus, unit2) => {
  if (corpus.worldview !== "agnostic") throw new Error("Interpretation map compiler requires an agnostic corpus");
  const atoms = uniqueAtoms(unit2.ingredients.map(({ atomId }) => atomFor(corpus, atomId)));
  if (atoms.length === 0) throw new Error(`Interpretation unit ${unit2.unitId} has no semantic atoms`);
  const sourceClaimIds = [...new Set(atoms.flatMap(({ claimIds }) => claimIds))];
  const forbiddenClaims = [.../* @__PURE__ */ new Set([
    ...globalForbiddenClaims,
    ...atoms.flatMap(({ doNotInfer }) => doNotInfer)
  ])];
  const map = {
    unitId: unit2.unitId,
    subject: {
      title: titleFor(atoms),
      plainEnglishDomain: domainFor(atoms),
      technicalLabel: unit2.unitId
    },
    composition: {
      ingredients: unit2.ingredients.map(({ kind, atomId, technicalId, metadata }) => ({
        kind,
        atomId,
        technicalId,
        metadata: { ...metadata }
      }))
    },
    chartEvidence: [...unit2.evidenceRefs],
    semantics: semanticBuckets(corpus, atoms),
    provenance: {
      corpusAtomIds: atoms.map(({ id }) => id),
      sourceClaimIds,
      corpusVersion: corpus.corpusVersion ?? interpretationCorpusVersion
    },
    neutrality: agnosticNeutrality,
    forbiddenClaims
  };
  validateInterpretationMap(map);
  return map;
};
var semanticPropositionTexts = (map) => [
  ...map.semantics.core,
  ...map.semantics.detail,
  ...map.semantics.themes,
  ...map.semantics.strengths,
  ...map.semantics.tensions
].map(({ text: text4 }) => text4);

// src/interpretation/map/decompose.ts
var pointSemantic = (id) => {
  switch (id) {
    case "north_node_mean":
      return { atomId: "point.north-node", kind: "point", metadata: { calculationVariant: "mean", nodeDirection: "north" } };
    case "north_node_true":
      return { atomId: "point.north-node", kind: "point", metadata: { calculationVariant: "true", nodeDirection: "north" } };
    case "south_node_mean":
      return { atomId: "point.south-node", kind: "point", metadata: { calculationVariant: "mean", nodeDirection: "south" } };
    case "south_node_true":
      return { atomId: "point.south-node", kind: "point", metadata: { calculationVariant: "true", nodeDirection: "south" } };
    case "lilith_mean":
      return { atomId: "point.black-moon-lilith", kind: "point", metadata: { calculationVariant: "mean" } };
    case "lilith_true":
      return { atomId: "point.black-moon-lilith", kind: "point", metadata: { calculationVariant: "true" } };
    case "part_of_fortune":
      return { atomId: "point.part-of-fortune", kind: "point", metadata: {} };
    case "part_of_spirit":
      return { atomId: "point.part-of-spirit", kind: "point", metadata: { technicalProperName: true } };
    case "ascendant":
      return { atomId: "angle.ascendant", kind: "angle", metadata: {} };
    case "descendant":
      return { atomId: "angle.descendant", kind: "angle", metadata: {} };
    case "midheaven":
      return { atomId: "angle.midheaven", kind: "angle", metadata: {} };
    case "imum_coeli":
      return { atomId: "angle.imum-coeli", kind: "angle", metadata: {} };
    case "vertex":
      return { atomId: "angle.vertex", kind: "angle", metadata: {} };
    case "antivertex":
      return { atomId: "angle.antivertex", kind: "angle", metadata: {} };
    case "east_point":
      return { atomId: "angle.east-point", kind: "angle", metadata: {} };
    default:
      return { atomId: `body.${id}`, kind: "body", metadata: {} };
  }
};
var pointIngredient = (id) => {
  const semantic = pointSemantic(id);
  return {
    kind: semantic.kind,
    atomId: semantic.atomId,
    technicalId: id,
    metadata: semantic.metadata
  };
};
var signIngredient = (sign) => ({
  kind: "sign",
  atomId: `sign.${sign}`,
  technicalId: sign,
  metadata: {}
});
var houseIngredient = (house, metadata = {}) => ({
  kind: "house",
  atomId: `house.${house}`,
  technicalId: String(house),
  metadata: { house, ...metadata }
});
var aspectIngredient = (kind) => ({
  kind: "aspect",
  atomId: `aspect.${kind.replaceAll("_", "-")}`,
  technicalId: kind,
  metadata: {}
});
var record3 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var pointId = (value) => typeof value === "string" && [
  "sun",
  "moon",
  "mercury",
  "venus",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
  "north_node_true",
  "south_node_true",
  "north_node_mean",
  "south_node_mean",
  "ascendant",
  "descendant",
  "midheaven",
  "imum_coeli",
  "vertex",
  "antivertex",
  "east_point",
  "part_of_fortune",
  "part_of_spirit",
  "lilith_mean",
  "lilith_true"
].includes(value);
var signId = (value) => typeof value === "string" && [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces"
].includes(value);
var aspectFrom = (value) => {
  if (!record3(value)) return null;
  return pointId(value["a"]) && pointId(value["b"]) && typeof value["kind"] === "string" ? value : null;
};
var uniqueIngredients = (ingredients) => {
  const seen = /* @__PURE__ */ new Set();
  const output = [];
  for (const ingredient of ingredients) {
    if (seen.has(ingredient.atomId)) continue;
    seen.add(ingredient.atomId);
    output.push(ingredient);
  }
  return output;
};
var pointPlacementIngredients = (calculation, id) => {
  const point = calculation.system.points[id];
  const ingredients = [pointIngredient(id)];
  const sign = point?.position?.value?.sign;
  if (sign !== void 0) ingredients.push(signIngredient(sign));
  const house = point?.houses?.placidus?.value?.house;
  if (house !== void 0) ingredients.push(houseIngredient(house, { placementFor: id }));
  return uniqueIngredients(ingredients);
};
var family = (unit2) => {
  if (unit2.id === "final-synthesis") return "final-synthesis";
  if (unit2.section === "overview") return "overview";
  if (unit2.section.startsWith("bigThree.")) return "big-three";
  if (unit2.section.startsWith("points.")) return "point";
  if (unit2.section.startsWith("houses.")) return "house";
  if (unit2.section.startsWith("aspects.")) return "aspect";
  if (unit2.section.startsWith("patterns.")) return "pattern";
  if (unit2.section === "lunar.phase") return "lunar-phase";
  if (unit2.section === "lunar.nodes") return "lunar-nodes";
  if (unit2.section === "lunar.lilith") return "lilith";
  if (unit2.section.startsWith("eclipses.")) return "eclipse";
  if (unit2.section === "rulershipAndDignity") return "rulership-dignity";
  if (unit2.section === "chartBalance") return "chart-balance";
  if (unit2.section === "dominantThemes") return "dominant-themes";
  if (unit2.section.startsWith("life.")) return "life-domain";
  if (unit2.section === "compatibility.overview") return "compatibility-overview";
  if (unit2.section === "compatibility.sign") return "compatibility-sign";
  if (unit2.section === "synthesis") return "system-synthesis";
  throw new Error(`Unsupported interpretation unit family for ${unit2.id}`);
};
var pointFromSection = (unit2) => {
  const raw2 = unit2.section.startsWith("points.") ? unit2.section.slice("points.".length) : unit2.section.startsWith("bigThree.") ? unit2.section.slice("bigThree.".length) : null;
  return pointId(raw2) ? raw2 : null;
};
var signFromCompatibilityId = (unit2) => {
  if (unit2.section !== "compatibility.sign") return null;
  const raw2 = unit2.id.split(".").at(-1);
  return signId(raw2) ? raw2 : null;
};
var houseIngredients = (calculation, houseNumber) => {
  const placidus = calculation.system.houses?.placidus;
  const house = placidus?.houses?.[String(houseNumber)];
  const ingredients = [houseIngredient(houseNumber)];
  const cuspSign = house?.cusp?.value?.sign;
  if (cuspSign !== void 0) ingredients.push(signIngredient(cuspSign));
  const traditionalRuler = house?.rulerTraditional?.value;
  if (traditionalRuler !== null && traditionalRuler !== void 0) ingredients.push(pointIngredient(traditionalRuler));
  const modernRuler = house?.rulerModern?.value;
  if (modernRuler !== null && modernRuler !== void 0) ingredients.push(pointIngredient(modernRuler));
  for (const occupant of house?.occupants ?? []) ingredients.push(pointIngredient(occupant));
  for (const intercepted of house?.interceptedSigns ?? []) ingredients.push(signIngredient(intercepted));
  return uniqueIngredients(ingredients);
};
var patternIngredients = (resolvedEvidence) => {
  const evidence = resolvedEvidence.find(record3);
  const kind = evidence?.["kind"];
  if (typeof kind !== "string") throw new Error("Unable to resolve pattern kind");
  const ingredients = [{
    kind: "pattern",
    atomId: `pattern.${kind.replaceAll("_", "-")}`,
    technicalId: kind,
    metadata: {}
  }];
  const focal = evidence?.["focalPoint"];
  if (pointId(focal)) {
    const focalIngredient = pointIngredient(focal);
    ingredients.push({
      ...focalIngredient,
      metadata: { ...focalIngredient.metadata, patternRole: "focal" }
    });
  }
  const points3 = evidence?.["points"];
  if (Array.isArray(points3)) {
    for (const value of points3) if (pointId(value)) ingredients.push(pointIngredient(value));
  }
  return uniqueIngredients(ingredients);
};
var eclipseIngredients = (unit2, resolvedEvidence) => {
  const derived2 = {
    kind: "derived",
    atomId: `derived.${unit2.section.replaceAll(".", "-").replaceAll(/[A-Z]/gu, (value2) => `-${value2.toLocaleLowerCase("en-GB")}`)}`,
    technicalId: unit2.section,
    metadata: {}
  };
  const ingredients = [derived2, pointIngredient("sun"), pointIngredient("moon")];
  const evidence = resolvedEvidence.find(record3);
  const value = evidence?.["value"];
  const eclipse = record3(value) ? value : evidence;
  if (record3(eclipse)) {
    const nodeDirection = eclipse["node"];
    if (nodeDirection === "north") ingredients.push(pointIngredient("north_node_true"));
    if (nodeDirection === "south") ingredients.push(pointIngredient("south_node_true"));
    const position = eclipse["position"];
    if (record3(position) && signId(position["sign"])) ingredients.push(signIngredient(position["sign"]));
  }
  return uniqueIngredients(ingredients);
};
var dominantIngredients = (calculation) => {
  const ingredients = [{
    kind: "derived",
    atomId: "derived.dominant-themes",
    technicalId: "dominantThemes",
    metadata: {}
  }];
  for (const entry2 of calculation.system.derived?.dominantPlanets?.slice(0, 4) ?? []) {
    ingredients.push(pointIngredient(entry2.planet));
  }
  for (const entry2 of calculation.system.derived?.dominantSigns?.slice(0, 4) ?? []) {
    ingredients.push(signIngredient(entry2.sign));
  }
  return uniqueIngredients(ingredients);
};
var rulershipIngredients = (calculation) => {
  const ingredients = [{
    kind: "derived",
    atomId: "derived.rulership-dignity",
    technicalId: "rulershipAndDignity",
    metadata: {}
  }];
  for (const id of ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]) {
    ingredients.push(pointIngredient(id));
    const sign = calculation.system.points[id]?.position?.value?.sign;
    if (sign !== void 0) ingredients.push(signIngredient(sign));
  }
  return uniqueIngredients(ingredients);
};
var ingredientsFor = (calculation, unit2, resolvedEvidence) => {
  const unitFamily = family(unit2);
  if (unitFamily === "point" || unitFamily === "big-three") {
    const id = pointFromSection(unit2);
    if (id === null) throw new Error(`Unable to resolve point identity for ${unit2.id}`);
    return pointPlacementIngredients(calculation, id);
  }
  if (unitFamily === "house") {
    const house = Number(unit2.section.slice("houses.".length));
    if (!Number.isSafeInteger(house) || house < 1 || house > 12) throw new Error(`Invalid house unit ${unit2.id}`);
    return houseIngredients(calculation, house);
  }
  if (unitFamily === "aspect") {
    const aspect = resolvedEvidence.map(aspectFrom).find((value) => value !== null);
    if (aspect === void 0) throw new Error(`Unable to resolve aspect evidence for ${unit2.id}`);
    return uniqueIngredients([pointIngredient(aspect.a), aspectIngredient(aspect.kind), pointIngredient(aspect.b)]);
  }
  if (unitFamily === "pattern") return patternIngredients(resolvedEvidence);
  if (unitFamily === "lunar-phase") return [
    { kind: "derived", atomId: "derived.lunar-phase", technicalId: "lunar.phase", metadata: {} },
    pointIngredient("sun"),
    pointIngredient("moon")
  ];
  if (unitFamily === "lunar-nodes") return [
    { ...pointIngredient("north_node_true"), metadata: { calculationVariants: "true,mean", nodeDirection: "north" } },
    { ...pointIngredient("south_node_true"), metadata: { calculationVariants: "true,mean", nodeDirection: "south" } }
  ];
  if (unitFamily === "lilith") return [{
    ...pointIngredient("lilith_true"),
    metadata: { calculationVariants: "true,mean" }
  }];
  if (unitFamily === "eclipse") return eclipseIngredients(unit2, resolvedEvidence);
  if (unitFamily === "rulership-dignity") return rulershipIngredients(calculation);
  if (unitFamily === "chart-balance") return [{ kind: "derived", atomId: "derived.chart-balance", technicalId: unit2.section, metadata: {} }];
  if (unitFamily === "dominant-themes") return dominantIngredients(calculation);
  if (unitFamily === "life-domain") {
    const domain2 = unit2.section.slice("life.".length);
    return [{ kind: "life-domain", atomId: `life-domain.${domain2}`, technicalId: domain2, metadata: {} }];
  }
  if (unitFamily === "compatibility-overview" || unitFamily === "compatibility-sign") {
    const domain2 = unit2.domain;
    if (domain2 === null) throw new Error(`Compatibility unit ${unit2.id} has no domain`);
    const output = [{
      kind: "compatibility-domain",
      atomId: `compatibility-domain.${domain2.replaceAll("_", "-")}`,
      technicalId: domain2,
      metadata: {}
    }];
    const sign = signFromCompatibilityId(unit2);
    if (sign !== null) output.push(signIngredient(sign));
    return output;
  }
  if (unitFamily === "overview" || unitFamily === "system-synthesis" || unitFamily === "final-synthesis") {
    return [{ kind: "synthesis", atomId: `synthesis.${unitFamily}`, technicalId: unit2.section, metadata: {} }];
  }
  return [];
};
var decomposeInterpretationUnit = (calculation, unit2) => {
  const root2 = { "astral-calculation": calculation };
  const evidence = unit2.allowedSourceRefs.map((ref2) => resolveRef(root2, ref2));
  return {
    unitId: unit2.id,
    family: family(unit2),
    zodiac: calculation.system.zodiac,
    chartMetadata: {
      zodiac: calculation.system.zodiac,
      ayanamsha: calculation.system.ayanamsha
    },
    ingredients: ingredientsFor(calculation, unit2, evidence),
    evidenceRefs: [...unit2.allowedSourceRefs],
    evidence
  };
};

// src/interpretation/map/recipes.ts
var stop = /* @__PURE__ */ new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "be",
  "by",
  "can",
  "for",
  "from",
  "in",
  "into",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "their",
  "this",
  "through",
  "to",
  "when",
  "with",
  "within",
  "without"
]);
var stem = (raw2) => {
  let word = raw2.toLocaleLowerCase("en-GB");
  if (word.endsWith("ies") && word.length > 5) return `${word.slice(0, -3)}y`;
  if (word.endsWith("ity") && word.length > 5) word = word.slice(0, -3);
  if (word.endsWith("ing") && word.length > 6) word = word.slice(0, -3);
  if (word.endsWith("ed") && word.length > 5) word = word.slice(0, -2);
  if (word.endsWith("s") && !word.endsWith("ss") && word.length > 4) word = word.slice(0, -1);
  return word;
};
var words = (values) => new Set(
  values.flatMap((value) => value.toLocaleLowerCase("en-GB").split(/[^\p{L}\p{N}]+/gu)).map(stem).filter((word) => word.length > 2 && !stop.has(word))
);
var semanticWords = (corpus, atom2) => words([
  atom2.plainEnglish,
  ...atom2.claimIds.flatMap((claimId) => {
    const claim = corpus.claims[claimId];
    return claim === void 0 ? [] : [...claim.tags, claim.proposition];
  })
]);
var overlap = (left, right) => {
  let score = 0;
  for (const value of left) if (right.has(value)) score += 1;
  return score;
};
var atom = (corpus, id) => corpus.atoms[id] ?? null;
var uniqueIngredients2 = (values) => {
  const seen = /* @__PURE__ */ new Set();
  const output = [];
  for (const value of values) {
    if (seen.has(value.atomId)) continue;
    seen.add(value.atomId);
    output.push(value);
  }
  return output;
};
var pointIds3 = [
  "sun",
  "moon",
  "mercury",
  "venus",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
  "north_node_true",
  "south_node_true",
  "ascendant",
  "descendant",
  "midheaven",
  "imum_coeli",
  "vertex",
  "antivertex",
  "east_point",
  "part_of_fortune",
  "part_of_spirit",
  "lilith_true"
];
var pointAvailable = (calculation, id) => calculation.system.points[id]?.position?.value !== null && calculation.system.points[id]?.position?.value !== void 0;
var houseAvailable = (calculation, number) => {
  const houses2 = calculation.system.houses?.placidus?.houses;
  if (houses2 === void 0) return false;
  const house = houses2[String(number)];
  return house?.cusp?.value !== null && house?.cusp?.value !== void 0;
};
var lifeDomainRecipe = (corpus, calculation, base2) => {
  const domainIngredient = base2.ingredients[0];
  if (domainIngredient === void 0) return base2;
  const domainAtom = atom(corpus, domainIngredient.atomId);
  if (domainAtom === null) return base2;
  const domainWords = semanticWords(corpus, domainAtom);
  const points3 = pointIds3.filter((id) => pointAvailable(calculation, id)).map((id) => {
    const semantic = pointIngredient(id);
    const pointAtom = atom(corpus, semantic.atomId);
    return { id, score: pointAtom === null ? 0 : overlap(domainWords, semanticWords(corpus, pointAtom)) };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id)).slice(0, 8);
  const houses2 = Array.from({ length: 12 }, (_, index) => index + 1).filter((number) => houseAvailable(calculation, number)).map((number) => {
    const houseAtom = atom(corpus, `house.${number}`);
    return { number, score: houseAtom === null ? 0 : overlap(domainWords, semanticWords(corpus, houseAtom)) };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score || a.number - b.number).slice(0, 5);
  const selected = new Set(points3.map(({ id }) => id));
  const ingredients = [domainIngredient];
  for (const { id, score } of points3) {
    for (const ingredient of pointPlacementIngredients(calculation, id)) {
      ingredients.push({ ...ingredient, metadata: { ...ingredient.metadata, domainRelevance: score } });
    }
  }
  for (const { number, score } of houses2) {
    ingredients.push(houseIngredient(number, { domainRelevance: score }));
  }
  const relevantAspects = (calculation.system.aspects ?? []).filter(({ a, b }) => selected.has(a) || selected.has(b)).sort((a, b) => b.strength - a.strength || a.id.localeCompare(b.id)).slice(0, 10);
  for (const aspect of relevantAspects) {
    ingredients.push({
      ...aspectIngredient(aspect.kind),
      metadata: {
        a: aspect.a,
        b: aspect.b,
        strength: aspect.strength,
        phase: aspect.phase
      }
    });
    if (selected.has(aspect.a)) ingredients.push(pointIngredient(aspect.a));
    if (selected.has(aspect.b)) ingredients.push(pointIngredient(aspect.b));
  }
  return { ...base2, ingredients: uniqueIngredients2(ingredients) };
};
var overviewRecipe = (calculation, base2) => {
  const ingredients = [...base2.ingredients];
  for (const entry2 of calculation.system.derived?.dominantPlanets?.slice(0, 4) ?? []) {
    if (pointAvailable(calculation, entry2.planet)) {
      ingredients.push(...pointPlacementIngredients(calculation, entry2.planet));
    }
  }
  for (const entry2 of calculation.system.derived?.dominantSigns?.slice(0, 4) ?? []) {
    ingredients.push(signIngredient(entry2.sign));
  }
  for (const pattern of [...calculation.system.patterns ?? []].sort((a, b) => b.strength - a.strength || a.id.localeCompare(b.id)).slice(0, 3)) {
    ingredients.push({
      kind: "pattern",
      atomId: `pattern.${pattern.kind.replaceAll("_", "-")}`,
      technicalId: pattern.kind,
      metadata: { strength: pattern.strength }
    });
  }
  return { ...base2, ingredients: uniqueIngredients2(ingredients) };
};
var weightedCondition = (atomId, technicalId, weight2, family2) => ({
  kind: "derived",
  atomId,
  technicalId,
  metadata: { weight: weight2, balanceFamily: family2 }
});
var chartBalanceRecipe = (calculation, base2) => {
  const balances = calculation.system.derived?.balances;
  if (balances === void 0) return base2;
  const ingredients = [...base2.ingredients];
  ingredients.push(
    weightedCondition("condition.element-fire", "fire", balances.elements.fire, "element"),
    weightedCondition("condition.element-earth", "earth", balances.elements.earth, "element"),
    weightedCondition("condition.element-air", "air", balances.elements.air, "element"),
    weightedCondition("condition.element-water", "water", balances.elements.water, "element"),
    weightedCondition("condition.modality-cardinal", "cardinal", balances.modalities.cardinal, "modality"),
    weightedCondition("condition.modality-fixed", "fixed", balances.modalities.fixed, "modality"),
    weightedCondition("condition.modality-mutable", "mutable", balances.modalities.mutable, "modality"),
    weightedCondition("condition.polarity-active", "active", balances.polarities.active, "polarity"),
    weightedCondition("condition.polarity-receptive", "receptive", balances.polarities.receptive, "polarity"),
    weightedCondition("condition.hemisphere-eastern", "eastern", balances.hemispheres.eastern, "hemisphere"),
    weightedCondition("condition.hemisphere-western", "western", balances.hemispheres.western, "hemisphere"),
    weightedCondition("condition.hemisphere-northern", "northern", balances.hemispheres.northern, "hemisphere"),
    weightedCondition("condition.hemisphere-southern", "southern", balances.hemispheres.southern, "hemisphere"),
    weightedCondition("condition.house-mode-angular", "angular", balances.houseModes.angular, "house-mode"),
    weightedCondition("condition.house-mode-succedent", "succedent", balances.houseModes.succedent, "house-mode"),
    weightedCondition("condition.house-mode-cadent", "cadent", balances.houseModes.cadent, "house-mode")
  );
  return { ...base2, ingredients: uniqueIngredients2(ingredients) };
};
var applyInterpretationRecipe = (corpus, calculation, _unit, base2) => {
  if (base2.family === "life-domain") return lifeDomainRecipe(corpus, calculation, base2);
  if (base2.family === "overview") return overviewRecipe(calculation, base2);
  if (base2.family === "chart-balance") return chartBalanceRecipe(calculation, base2);
  return base2;
};

// src/interpretation/map/provider.ts
var semanticProviderFromCorpus = (corpus) => {
  if (corpus.worldview !== "agnostic") {
    throw new Error("Interpretation semantic provider requires an agnostic compiled corpus");
  }
  return {
    mapFor: (calculation, unit2) => {
      const decomposed = decomposeInterpretationUnit(calculation, unit2);
      return compileInterpretationMap(
        corpus,
        applyInterpretationRecipe(corpus, calculation, unit2, decomposed)
      );
    }
  };
};

// src/interpretation/map/builtin.ts
var productionInterpretationCorpus = compileReviewedCorpus(true);
var productionSemanticProvider = semanticProviderFromCorpus(
  productionInterpretationCorpus
);

// vendor/openai-schema/dist/openaiSchema.js
var OpenAIError = class extends Error {
  status;
  body;
  constructor(status4, body) {
    super(`OpenAI request failed with status ${status4}`);
    this.name = "OpenAIError";
    this.status = status4;
    this.body = body;
  }
};
var OutputError = class extends Error {
  rawText;
  attempts;
  constructor(message, rawText, attempts) {
    super(message);
    this.name = "OutputError";
    this.rawText = rawText;
    this.attempts = attempts;
  }
};
function rec(value) {
  return typeof value === "object" && value !== null;
}
function text2(value) {
  if (!rec(value))
    return null;
  if (typeof value.output_text === "string")
    return value.output_text;
  if (!Array.isArray(value.output))
    return null;
  for (const item of value.output) {
    if (!rec(item) || !Array.isArray(item.content))
      continue;
    for (const part2 of item.content) {
      if (rec(part2) && typeof part2.text === "string")
        return part2.text;
    }
  }
  return null;
}
function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function safeName(name) {
  const clean2 = name.replace(/[^a-zA-Z0-9_-]/gu, "_").slice(0, 64);
  return clean2 || "DynamicSchema";
}
function asShape(def, name = "DynamicSchema") {
  if (rec(def) && typeof def.name === "string" && rec(def.schema)) {
    return def;
  }
  return { name: safeName(name), schema: def };
}
function errorText(error) {
  return error instanceof Error ? error.message : String(error);
}
function responseInput(value) {
  if (typeof value === "string" || Array.isArray(value))
    return value;
  try {
    const encoded = JSON.stringify(value);
    if (encoded === void 0)
      throw new TypeError();
    return encoded;
  } catch {
    throw new TypeError("OpenAI input must be a string, an array of input items, or JSON-serialisable");
  }
}
var OpenAISchema = class {
  apiKey;
  fetcher;
  base;
  headers;
  managedConversation;
  current;
  conversationId;
  tools = {};
  tail = Promise.resolve();
  busyCount = 0;
  pendingCount = 0;
  constructor(apiKey, schema2, conversationId, init = {}) {
    this.apiKey = apiKey;
    this.fetcher = init.fetch ?? globalThis.fetch.bind(globalThis);
    this.base = (init.base ?? "https://api.openai.com/v1").replace(/\/+$/u, "");
    this.headers = init.headers ?? {};
    this.managedConversation = init.conversation ?? true;
    this.conversationId = conversationId;
    this.current = asShape(schema2, init.name);
  }
  get key() {
    return this.apiKey;
  }
  get id() {
    return this.conversationId;
  }
  get isBusy() {
    return this.busyCount > 0;
  }
  get queued() {
    return this.pendingCount;
  }
  get registeredTools() {
    return this.tools;
  }
  async updateSchema(schema2, name = "DynamicSchema") {
    return this.push(async () => {
      this.current = asShape(schema2, name);
      return this;
    });
  }
  async registerTool(tool) {
    await this.push(async () => {
      this.tools = { ...this.tools, [tool.name]: tool };
    });
  }
  async send(input2, opts) {
    return this.push(() => this.call(this.current, input2, opts));
  }
  async run(schema2, input2, opts, name = "DynamicSchema") {
    return this.push(async () => {
      const next = asShape(schema2, name);
      this.current = next;
      return this.call(next, input2, opts);
    });
  }
  push(fn) {
    this.pendingCount += 1;
    const run = async () => {
      this.busyCount += 1;
      try {
        return await fn();
      } finally {
        this.busyCount -= 1;
        this.pendingCount -= 1;
      }
    };
    const start = this.tail.catch(() => void 0);
    const out = start.then(run);
    this.tail = out.then(() => void 0, () => void 0);
    return out;
  }
  headersFor() {
    return {
      authorization: `Bearer ${this.apiKey}`,
      "content-type": "application/json",
      ...this.headers
    };
  }
  async initConversation() {
    if (!this.managedConversation || this.conversationId)
      return;
    const response2 = await this.fetcher(`${this.base}/conversations`, {
      method: "POST",
      headers: this.headersFor(),
      body: "{}"
    });
    if (!response2.ok)
      throw new OpenAIError(response2.status, await response2.text());
    const value = await response2.json();
    if (!rec(value) || typeof value.id !== "string" || !value.id) {
      throw new OutputError("OpenAI did not return a conversation id", "", 1);
    }
    this.conversationId = value.id;
  }
  async call(shape2, input2, opts) {
    await this.initConversation();
    const retries = Math.max(0, Math.floor(opts.retries ?? 0));
    const attempts = retries + 1;
    const delay = Math.max(0, Math.floor(opts.retryDelayMs ?? 450));
    let currentInput = input2;
    let raw2 = "";
    let last = "Structured output was unavailable";
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      const existingText = rec(opts.body.text) ? opts.body.text : {};
      const body = {
        ...opts.body,
        input: responseInput(currentInput),
        text: {
          ...existingText,
          format: {
            type: "json_schema",
            name: safeName(shape2.name),
            ...shape2.description === void 0 ? {} : { description: shape2.description },
            strict: shape2.strict ?? true,
            schema: shape2.schema
          }
        }
      };
      if (this.managedConversation && this.conversationId) {
        body.conversation = { id: this.conversationId };
      }
      const response2 = await this.fetcher(`${this.base}/responses`, {
        method: "POST",
        headers: this.headersFor(),
        body: JSON.stringify(body),
        ...opts.signal === void 0 ? {} : { signal: opts.signal }
      });
      if (!response2.ok)
        throw new OpenAIError(response2.status, await response2.text());
      const value = await response2.json();
      raw2 = text2(value) ?? "";
      try {
        if (!raw2)
          throw new Error("OpenAI returned no output text");
        const parsed3 = JSON.parse(raw2);
        return shape2.parse ? shape2.parse(parsed3) : parsed3;
      } catch (error) {
        last = errorText(error);
        if (attempt >= attempts)
          break;
        if (opts.onRetry) {
          const next = await opts.onRetry({
            attempt,
            maxAttempts: attempts,
            rawText: raw2,
            error: last,
            input: currentInput
          });
          if (next !== void 0)
            currentInput = next;
        }
        await pause(delay + (attempt - 1) * 250);
      }
    }
    throw new OutputError(`Could not parse the expected output after ${attempts} attempt${attempts === 1 ? "" : "s"}: ${last}`, raw2, attempts);
  }
};

// src/llm/openaiTransport.ts
var OpenAITransportError = class extends Error {
  responseId;
  responseStatus;
  timedOut;
  constructor(message, responseId = null, responseStatus = null, cause, timedOut = false) {
    super(message, cause === void 0 ? void 0 : { cause });
    this.name = "OpenAITransportError";
    this.responseId = responseId;
    this.responseStatus = responseStatus;
    this.timedOut = timedOut;
  }
};
var waiting = /* @__PURE__ */ new Set([
  "queued",
  "in_progress"
]);
var terminal = /* @__PURE__ */ new Set([
  "completed",
  "failed",
  "cancelled",
  "incomplete"
]);
var transient = /* @__PURE__ */ new Set([
  408,
  425,
  429,
  500,
  502,
  503,
  504
]);
var rec2 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var positive = (value, fallback, name) => {
  const selected = value ?? fallback;
  if (!Number.isSafeInteger(selected) || selected < 1) {
    throw new Error(
      `${name} must be a positive integer`
    );
  }
  return selected;
};
var statusOf = (value) => {
  const status4 = value["status"];
  if (status4 === "queued" || status4 === "in_progress" || status4 === "completed" || status4 === "failed" || status4 === "cancelled" || status4 === "incomplete") {
    return status4;
  }
  return null;
};
var responseIdOf = (value) => typeof value["id"] === "string" && value["id"].length > 0 ? value["id"] : null;
var errorMessage = (value, fallback) => {
  const error = value["error"];
  if (rec2(error) && typeof error["message"] === "string" && error["message"].length > 0) {
    return error["message"];
  }
  const incomplete = value["incomplete_details"];
  if (rec2(incomplete) && typeof incomplete["reason"] === "string" && incomplete["reason"].length > 0) {
    return incomplete["reason"];
  }
  return fallback;
};
var requestUrl = (input2) => input2 instanceof Request ? input2.url : String(input2);
var requestMethod = (input2, init) => String(
  init?.method ?? (input2 instanceof Request ? input2.method : "GET")
).toUpperCase();
var responseEndpoint = (input2) => {
  const url = new URL(requestUrl(input2));
  return /\/responses\/?$/u.test(url.pathname);
};
var reply = (source, body) => {
  const headers = new Headers(source.headers);
  headers.delete("content-length");
  return new Response(body, {
    status: source.status,
    statusText: source.statusText,
    headers
  });
};
var json = (source, value) => reply(source, JSON.stringify(value));
var abortError = (signal) => signal.reason ?? new Error("OpenAI request was aborted");
var pause2 = (ms, signal) => new Promise((resolve, reject) => {
  if (signal?.aborted) {
    reject(abortError(signal));
    return;
  }
  const onAbort = () => {
    clearTimeout(timer);
    signal?.removeEventListener(
      "abort",
      onAbort
    );
    reject(
      signal === void 0 ? new Error(
        "OpenAI request was aborted"
      ) : abortError(signal)
    );
  };
  const timer = setTimeout(() => {
    signal?.removeEventListener(
      "abort",
      onAbort
    );
    resolve();
  }, ms);
  signal?.addEventListener(
    "abort",
    onAbort,
    { once: true }
  );
});
var retryAfterMs = (response2) => {
  const value = response2.headers.get(
    "retry-after"
  );
  if (value === null) return null;
  const seconds = Number(value);
  if (Number.isFinite(seconds) && seconds >= 0) {
    return Math.ceil(seconds * 1e3);
  }
  const date = Date.parse(value);
  return Number.isFinite(date) ? Math.max(0, date - Date.now()) : null;
};
var trimBody = async (response2) => (await response2.text()).replaceAll(/\s+/gu, " ").trim().slice(0, 500);
var responseFailure = (id, status4, value) => new OpenAITransportError(
  `OpenAI response ${id} ${status4}: ${errorMessage(value, "no further detail")}`,
  id,
  status4
);
var httpFailure = async (response2, id) => {
  const detail2 = await trimBody(response2);
  return new OpenAITransportError(
    `OpenAI polling failed with HTTP ${response2.status}${detail2.length === 0 ? "" : `: ${detail2}`}`,
    id,
    null
  );
};
var createOpenAITransport = (options = {}) => {
  const fetcher = options.fetch ?? globalThis.fetch.bind(globalThis);
  const background = options.background ?? true;
  const pollIntervalMs = positive(
    options.pollIntervalMs,
    2e3,
    "OpenAI poll interval"
  );
  const pollTimeoutMs = positive(
    options.pollTimeoutMs,
    2 * 60 * 1e3,
    "OpenAI poll timeout"
  );
  const createTimeoutMs = positive(
    options.createTimeoutMs,
    60 * 1e3,
    "OpenAI creation timeout"
  );
  const responseAttempts = positive(
    options.responseAttempts,
    3,
    "OpenAI response attempts"
  );
  const retryAttempts = positive(
    options.retryAttempts,
    5,
    "OpenAI transport retry attempts"
  );
  const retryDelayMs = positive(
    options.retryDelayMs,
    1e3,
    "OpenAI transport retry delay"
  );
  const request = async (input2, init, timeoutMs, message, responseId, responseStatus) => {
    const parent = init.signal ?? void 0;
    const controller = new AbortController();
    let timedOut = false;
    const onAbort = () => {
      controller.abort(
        parent === void 0 ? void 0 : abortError(parent)
      );
    };
    if (parent?.aborted) {
      onAbort();
    } else {
      parent?.addEventListener(
        "abort",
        onAbort,
        { once: true }
      );
    }
    const timer = setTimeout(() => {
      timedOut = true;
      controller.abort(
        new Error(message)
      );
    }, Math.max(1, timeoutMs));
    try {
      return await fetcher(input2, {
        ...init,
        signal: controller.signal
      });
    } catch (cause) {
      if (parent?.aborted) {
        throw abortError(parent);
      }
      if (timedOut) {
        throw new OpenAITransportError(
          message,
          responseId,
          responseStatus,
          cause,
          true
        );
      }
      throw cause;
    } finally {
      clearTimeout(timer);
      parent?.removeEventListener(
        "abort",
        onAbort
      );
    }
  };
  const get = async (url, headers, signal, id, deadline) => {
    let attempt = 0;
    let last = null;
    for (; ; ) {
      const remaining = deadline - Date.now();
      if (remaining <= 0) {
        throw new OpenAITransportError(
          `OpenAI response ${id} polling timed out`,
          id,
          "in_progress",
          last,
          true
        );
      }
      attempt += 1;
      const delay = Math.min(
        3e4,
        retryDelayMs * 2 ** Math.min(attempt - 1, retryAttempts - 1)
      );
      try {
        const response2 = await request(
          url,
          {
            method: "GET",
            headers,
            ...signal === void 0 ? {} : { signal }
          },
          remaining,
          `OpenAI response ${id} poll request timed out`,
          id,
          "in_progress"
        );
        if (!transient.has(response2.status)) {
          return response2;
        }
        const wait = retryAfterMs(response2) ?? delay;
        await response2.body?.cancel();
        await pause2(
          Math.min(wait, Math.max(1, deadline - Date.now())),
          signal
        );
      } catch (cause) {
        if (signal?.aborted) throw abortError(signal);
        last = cause;
        const wait = Math.min(delay, deadline - Date.now());
        if (wait <= 0) continue;
        await pause2(wait, signal);
      }
    }
  };
  const poll = async (responseUrl, id, headers, signal) => {
    const deadline = Date.now() + pollTimeoutMs;
    for (; ; ) {
      const remaining = deadline - Date.now();
      if (remaining <= 0) {
        throw new OpenAITransportError(
          `OpenAI response ${id} timed out after ${pollTimeoutMs} ms`,
          id,
          "in_progress",
          void 0,
          true
        );
      }
      await pause2(
        Math.min(pollIntervalMs, remaining),
        signal
      );
      const response2 = await get(
        `${responseUrl}/${encodeURIComponent(id)}`,
        headers,
        signal,
        id,
        deadline
      );
      if (!response2.ok) {
        throw await httpFailure(response2, id);
      }
      const raw2 = await response2.text();
      let value;
      try {
        value = JSON.parse(raw2);
      } catch (cause) {
        throw new OpenAITransportError(
          `OpenAI response ${id} returned invalid JSON while polling`,
          id,
          null,
          cause
        );
      }
      if (!rec2(value)) {
        throw new OpenAITransportError(
          `OpenAI response ${id} returned a non-object payload while polling`,
          id
        );
      }
      const status4 = statusOf(value);
      if (status4 === "completed") {
        return json(response2, value);
      }
      if (status4 !== null && waiting.has(status4)) {
        continue;
      }
      if (status4 !== null && terminal.has(status4)) {
        throw responseFailure(
          id,
          status4,
          value
        );
      }
      throw new OpenAITransportError(
        `OpenAI response ${id} returned an unsupported status`,
        id,
        status4
      );
    }
  };
  const cancel = async (responseUrl, id, headers) => {
    try {
      const response2 = await request(
        `${responseUrl}/${encodeURIComponent(id)}/cancel`,
        {
          method: "POST",
          headers
        },
        1e4,
        `OpenAI response ${id} cancellation timed out`,
        id,
        "in_progress"
      );
      await response2.body?.cancel();
    } catch {
    }
  };
  const send = async (input2, init, body, signal, responseAttempt) => {
    const headers = new Headers(
      init.headers ?? (input2 instanceof Request ? input2.headers : void 0)
    );
    if (!headers.has("x-client-request-id")) {
      headers.set(
        "x-client-request-id",
        globalThis.crypto.randomUUID()
      );
    }
    if (!headers.has("idempotency-key")) {
      headers.set(
        "idempotency-key",
        globalThis.crypto.randomUUID()
      );
    }
    const createDeadline = Date.now() + createTimeoutMs;
    let createAttempt = 0;
    let response2 = null;
    let createCause = null;
    for (; ; ) {
      const remaining = createDeadline - Date.now();
      if (remaining <= 0) {
        const timeout = new OpenAITransportError(
          `OpenAI response creation timed out after ${createTimeoutMs} ms`,
          null,
          null,
          createCause,
          true
        );
        if (responseAttempt >= responseAttempts) {
          throw timeout;
        }
        await pause2(retryDelayMs, signal);
        return send(
          input2,
          {
            ...init,
            headers: new Headers(init.headers)
          },
          body,
          signal,
          responseAttempt + 1
        );
      }
      createAttempt += 1;
      const delay = Math.min(
        3e4,
        retryDelayMs * 2 ** Math.min(createAttempt - 1, retryAttempts - 1)
      );
      try {
        const created = await request(
          input2,
          {
            ...init,
            headers,
            body: JSON.stringify({
              ...body,
              background: true
            }),
            ...signal === void 0 ? {} : { signal }
          },
          remaining,
          "OpenAI response creation request timed out",
          null,
          null
        );
        if (!transient.has(created.status)) {
          response2 = created;
          break;
        }
        const wait = retryAfterMs(created) ?? delay;
        await created.body?.cancel();
        await pause2(
          Math.min(wait, Math.max(1, createDeadline - Date.now())),
          signal
        );
      } catch (cause) {
        if (signal?.aborted) throw abortError(signal);
        createCause = cause;
        const wait = Math.min(delay, createDeadline - Date.now());
        if (wait <= 0) continue;
        await pause2(wait, signal);
      }
    }
    if (response2 === null) {
      throw new OpenAITransportError(
        "OpenAI response creation ended without a response",
        null,
        null,
        createCause
      );
    }
    if (!response2.ok) return response2;
    const raw2 = await response2.text();
    let value;
    try {
      value = JSON.parse(raw2);
    } catch {
      return reply(response2, raw2);
    }
    if (!rec2(value)) {
      return json(response2, value);
    }
    const status4 = statusOf(value);
    if (status4 === null || status4 === "completed") {
      return json(response2, value);
    }
    const id = responseIdOf(value);
    if (id === null) {
      throw new OpenAITransportError(
        "OpenAI background response did not include an id",
        null,
        status4
      );
    }
    if (!waiting.has(status4)) {
      throw responseFailure(id, status4, value);
    }
    const responseUrl = requestUrl(input2).replace(/\/+$/u, "");
    try {
      return await poll(
        responseUrl,
        id,
        headers,
        signal
      );
    } catch (cause) {
      if (!(cause instanceof OpenAITransportError) || !cause.timedOut || responseAttempt >= responseAttempts || signal?.aborted) {
        throw cause;
      }
      await cancel(responseUrl, id, headers);
      await pause2(retryDelayMs, signal);
      return send(
        input2,
        {
          ...init,
          headers: new Headers(init.headers)
        },
        body,
        signal,
        responseAttempt + 1
      );
    }
  };
  return async (input2, init) => {
    if (!background || requestMethod(input2, init) !== "POST" || !responseEndpoint(input2) || typeof init?.body !== "string") {
      return request(
        input2,
        init ?? {},
        pollTimeoutMs,
        "OpenAI request timed out",
        null,
        null
      );
    }
    let body;
    try {
      body = JSON.parse(init.body);
    } catch {
      return request(
        input2,
        init ?? {},
        pollTimeoutMs,
        "OpenAI request timed out",
        null,
        null
      );
    }
    if (!rec2(body)) {
      return request(
        input2,
        init ?? {},
        pollTimeoutMs,
        "OpenAI request timed out",
        null,
        null
      );
    }
    const signal = init.signal ?? (input2 instanceof Request ? input2.signal : void 0);
    return send(
      input2,
      init,
      body,
      signal,
      1
    );
  };
};

// src/llm/reconstruct/partialJson.ts
var record4 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var parsedObject = (value) => {
  try {
    const parsed3 = JSON.parse(value);
    return record4(parsed3) ? parsed3 : null;
  } catch {
    return null;
  }
};
var appendable = (segments, segment) => parsedObject(`{${[...segments, segment].join(",")}}`) !== null;
var salvagePartialJsonObject = (raw2) => {
  const first = raw2.indexOf("{");
  if (first < 0) return null;
  const source = raw2.slice(first);
  const complete = parsedObject(source);
  if (complete !== null) return complete;
  let depth = 0;
  let inString = false;
  let escaped = false;
  let segmentStart = -1;
  const segments = [];
  for (let index = 0; index < source.length; index += 1) {
    const character = source[index] ?? "";
    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (character === "\\") {
        escaped = true;
        continue;
      }
      if (character === '"') inString = false;
      continue;
    }
    if (character === '"') {
      inString = true;
      continue;
    }
    if (character === "{" || character === "[") {
      depth += 1;
      if (depth === 1 && character === "{") segmentStart = index + 1;
      continue;
    }
    if (character === "}" || character === "]") {
      if (character === "}" && depth === 1 && segmentStart >= 0) {
        const segment = source.slice(segmentStart, index).trim();
        if (segment.length > 0 && appendable(segments, segment)) segments.push(segment);
        return parsedObject(`{${segments.join(",")}}`);
      }
      depth = Math.max(0, depth - 1);
      continue;
    }
    if (character === "," && depth === 1 && segmentStart >= 0) {
      const segment = source.slice(segmentStart, index).trim();
      if (segment.length > 0 && appendable(segments, segment)) segments.push(segment);
      segmentStart = index + 1;
    }
  }
  if (!inString && depth === 1 && segmentStart >= 0) {
    const segment = source.slice(segmentStart).trim();
    if (segment.length > 0 && appendable(segments, segment)) segments.push(segment);
  }
  return segments.length === 0 ? null : parsedObject(`{${segments.join(",")}}`);
};

// src/llm/openaiSchema.ts
var bootstrap = {
  name: "astral_bootstrap",
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {},
    required: []
  }
};
var shape = (value) => ({
  name: value.name,
  schema: value.schema,
  ...value.parse === void 0 ? {} : { parse: value.parse }
});
var record5 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var positive2 = (value, fallback, name) => {
  const selected = value ?? fallback;
  if (!Number.isSafeInteger(selected) || selected < 1) throw new Error(`${name} must be a positive integer`);
  return selected;
};
var nonNegative = (value) => typeof value === "number" && Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
var outputText = (value) => {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(outputText).filter(Boolean).join("\n");
  if (!record5(value)) return "";
  if (typeof value["text"] === "string") return value["text"];
  const output = value["output"];
  if (output !== void 0) return outputText(output);
  const content = value["content"];
  if (content !== void 0) return outputText(content);
  return "";
};
var responseError = (cause) => {
  if (!record5(cause)) return null;
  const id = cause["responseId"];
  const status4 = cause["responseStatus"];
  return typeof id === "string" && id.length > 0 ? { id, incomplete: status4 === "incomplete" } : null;
};
var normaliseRawText = (cause) => {
  if (!record5(cause) || typeof cause["rawText"] !== "string") return;
  const raw2 = cause["rawText"];
  const salvaged = salvagePartialJsonObject(raw2);
  if (salvaged === null) return;
  cause["partialRawText"] = raw2;
  cause["rawText"] = JSON.stringify(salvaged);
};
var errorText2 = (cause, depth = 0) => {
  if (depth > 5 || cause === null || cause === void 0) return "";
  if (typeof cause === "string") return cause;
  if (cause instanceof Error) return `${cause.name}: ${cause.message}
${errorText2(cause.cause, depth + 1)}`;
  if (!record5(cause)) return String(cause);
  const parts = Object.entries(cause).flatMap(([key, value]) => {
    if (!["message", "error", "cause", "detail", "details", "body"].includes(key)) return [];
    return [errorText2(value, depth + 1)];
  });
  return parts.join("\n");
};
var contextWindowFailure = (cause) => /(?:input|request|prompt|conversation|context).{0,80}(?:exceeds?|too large|too long|maximum).{0,40}context|context window|maximum context length|too many (?:input )?tokens/iu.test(errorText2(cause));
var jsonLength = (value) => {
  try {
    return JSON.stringify(value)?.length ?? 0;
  } catch {
    return Number.MAX_SAFE_INTEGER;
  }
};
var embeddedSnapshotTokens = (value, depth = 0) => {
  if (depth > 8 || value === null || value === void 0) return 0;
  if (Array.isArray(value)) {
    return value.reduce((total, item) => total + embeddedSnapshotTokens(item, depth + 1), 0);
  }
  if (typeof value === "string") {
    if (!value.includes("snapshotTokenEstimate")) return 0;
    try {
      return embeddedSnapshotTokens(JSON.parse(value), depth + 1);
    } catch {
      return 0;
    }
  }
  if (!record5(value)) return 0;
  const direct = value["snapshotTokenEstimate"];
  const own = typeof direct === "number" && Number.isFinite(direct) && direct > 0 ? Math.ceil(direct) : 0;
  return own + Object.entries(value).filter(([key]) => key !== "snapshotTokenEstimate").reduce((total, [, child]) => total + embeddedSnapshotTokens(child, depth + 1), 0);
};
var estimateContextTokens = (input2) => {
  const length = jsonLength(input2);
  if (!Number.isSafeInteger(length)) return Number.MAX_SAFE_INTEGER;
  return Math.max(1, Math.ceil(length / 3)) + embeddedSnapshotTokens(input2);
};
var snapshotIdentity = (value) => {
  if (!record5(value)) return { omitted: true };
  return {
    omitted: true,
    ...typeof value["revision"] === "number" ? { revision: value["revision"] } : {},
    ...typeof value["sha256"] === "string" ? { sha256: value["sha256"] } : {}
  };
};
var parsedInputText = (value) => {
  if (!record5(value) || value["type"] !== "input_text" || typeof value["text"] !== "string") return null;
  try {
    const parsed3 = JSON.parse(value["text"]);
    return record5(parsed3) ? parsed3 : null;
  } catch {
    return null;
  }
};
var compactSnapshotInput = (value) => {
  if (record5(value) && record5(value["snapshot"]) && "input" in value) {
    return {
      snapshotContext: snapshotIdentity(value["snapshot"]),
      input: value["input"]
    };
  }
  if (!Array.isArray(value)) return value;
  for (const message of value) {
    if (!record5(message) || !Array.isArray(message["content"])) continue;
    for (const item of message["content"]) {
      const parsed3 = parsedInputText(item);
      if (parsed3 === null || !("input" in parsed3)) continue;
      return {
        snapshotContext: {
          omitted: true,
          ...typeof parsed3["snapshotRevision"] === "number" ? { revision: parsed3["snapshotRevision"] } : {},
          ...typeof parsed3["snapshotSha256"] === "string" ? { sha256: parsed3["snapshotSha256"] } : {}
        },
        input: parsed3["input"]
      };
    }
  }
  return value;
};
var outputAllowance = (options) => {
  const value = options.body["max_output_tokens"];
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? Math.ceil(value) : 4096;
};
var responseUsage = (value) => {
  if (!record5(value) || !record5(value["usage"])) return null;
  const usage = value["usage"];
  const inputDetails = record5(usage["input_tokens_details"]) ? usage["input_tokens_details"] : {};
  const outputDetails = record5(usage["output_tokens_details"]) ? usage["output_tokens_details"] : {};
  const inputTokens = nonNegative(usage["input_tokens"]);
  const outputTokens = nonNegative(usage["output_tokens"]);
  const totalTokens = nonNegative(usage["total_tokens"]) || inputTokens + outputTokens;
  return {
    responseId: typeof value["id"] === "string" ? value["id"] : null,
    model: typeof value["model"] === "string" ? value["model"] : null,
    usage: {
      inputTokens,
      cachedInputTokens: nonNegative(inputDetails["cached_tokens"]),
      outputTokens,
      reasoningTokens: nonNegative(outputDetails["reasoning_tokens"]),
      totalTokens
    }
  };
};
var containsKey = (value, key, depth = 0) => {
  if (depth > 8 || value === null || value === void 0) return false;
  if (Array.isArray(value)) return value.some((child) => containsKey(child, key, depth + 1));
  if (!record5(value)) return false;
  if (key in value) return true;
  return Object.values(value).some((child) => containsKey(child, key, depth + 1));
};
var purposeOf = (input2) => {
  if (containsKey(input2, "truncationReason")) return "truncation_repair";
  if (containsKey(input2, "repairKind")) {
    return containsKey(input2, "auditErrors") ? "audit_repair" : "completion_repair";
  }
  return "primary";
};
var clientSequence = 0;
var OpenAISchemaClient = class {
  #client;
  #instructions;
  #metadata;
  #apiKey;
  #base;
  #fetcher;
  #runtimeBase;
  #budget;
  #safety;
  #onUsage;
  #clientId = `client-${clientSequence += 1}`;
  #captured = [];
  #usedTokens = 0;
  constructor(options, conversationId) {
    this.#instructions = options.instructions;
    this.#metadata = { ...options.metadata ?? {} };
    this.#apiKey = options.apiKey;
    this.#runtimeBase = options.base;
    this.#base = (options.base ?? "https://api.openai.com/v1").replace(/\/+$/u, "");
    this.#onUsage = options.onUsage;
    const transport = createOpenAITransport({
      ...options.transport ?? {},
      ...options.fetch === void 0 ? {} : { fetch: options.fetch }
    });
    this.#fetcher = async (input2, init) => {
      const response2 = await transport(input2, init);
      if (response2.ok) {
        try {
          const usage = responseUsage(await response2.clone().json());
          if (usage !== null) this.#captured.push(usage);
        } catch {
        }
      }
      return response2;
    };
    this.#budget = positive2(options.contextTokenBudget, 6e4, "OpenAI context token budget");
    this.#safety = positive2(options.contextSafetyTokens, 1024, "OpenAI context safety allowance");
    this.#client = this.#create(conversationId);
  }
  #create(conversationId) {
    return new OpenAISchema(
      this.#apiKey,
      bootstrap,
      conversationId,
      {
        ...this.#runtimeBase === void 0 ? {} : { base: this.#runtimeBase },
        fetch: this.#fetcher,
        conversation: true,
        name: "astral_bootstrap"
      }
    );
  }
  #rotate() {
    this.#client = this.#create();
    this.#usedTokens = 0;
  }
  #prepare(input2, options) {
    const allowance = outputAllowance(options) + this.#safety;
    let selected = input2;
    let compacted = false;
    let tokens2 = estimateContextTokens(selected) + allowance;
    if (tokens2 > this.#budget) {
      const reduced = compactSnapshotInput(input2);
      if (reduced !== input2) {
        selected = reduced;
        compacted = true;
        tokens2 = estimateContextTokens(selected) + allowance;
      }
    }
    if (this.#usedTokens > 0 && this.#usedTokens + tokens2 > this.#budget) this.#rotate();
    return { input: selected, tokens: tokens2, compacted };
  }
  #flush(shapeName, configuredModel, purpose, from) {
    const values = this.#captured.splice(from);
    for (const value of values) {
      this.#onUsage?.({
        responseId: value.responseId,
        model: value.model ?? configuredModel,
        shape: shapeName,
        clientId: this.#clientId,
        conversationId: this.#client.id ?? null,
        purpose,
        at: (/* @__PURE__ */ new Date()).toISOString(),
        usage: value.usage
      });
    }
  }
  get id() {
    return this.#client.id;
  }
  async uploadFile(name, content) {
    const body = new FormData();
    body.set("purpose", "user_data");
    body.set("file", new Blob([content], { type: "application/json" }), name);
    const response2 = await this.#fetcher(`${this.#base}/files`, {
      method: "POST",
      headers: { authorization: `Bearer ${this.#apiKey}` },
      body
    });
    if (!response2.ok) throw new Error(`OpenAI snapshot upload failed with HTTP ${response2.status}: ${(await response2.text()).slice(0, 500)}`);
    const value = await response2.json();
    if (!record5(value) || typeof value["id"] !== "string" || value["id"].length === 0) {
      throw new Error("OpenAI snapshot upload did not return a file id");
    }
    return { id: value["id"], name, purpose: "user_data" };
  }
  async deleteFile(id) {
    if (id.length === 0) throw new Error("OpenAI file id is required");
    const response2 = await this.#fetcher(`${this.#base}/files/${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: { authorization: `Bearer ${this.#apiKey}` }
    });
    if (!response2.ok && response2.status !== 404) {
      throw new Error(`OpenAI snapshot deletion failed with HTTP ${response2.status}: ${(await response2.text()).slice(0, 500)}`);
    }
    await response2.body?.cancel();
  }
  async retrieveResponse(id) {
    const response2 = await this.#fetcher(`${this.#base}/responses/${encodeURIComponent(id)}`, {
      method: "GET",
      headers: { authorization: `Bearer ${this.#apiKey}` }
    });
    if (!response2.ok) throw new Error(`OpenAI response retrieval failed with HTTP ${response2.status}`);
    return response2.json();
  }
  async #run(value, input2, options) {
    return this.#client.run(
      shape(value),
      input2,
      {
        ...options,
        body: {
          ...options.body,
          instructions: this.#instructions,
          metadata: this.#metadata
        }
      }
    );
  }
  async run(value, originalInput, options) {
    let input2 = originalInput;
    let compacted = false;
    let contextFailures = 0;
    const configuredModel = options.body.model;
    const purpose = purposeOf(originalInput);
    for (; ; ) {
      const prepared = this.#prepare(input2, options);
      input2 = prepared.input;
      compacted ||= prepared.compacted;
      const capturedFrom = this.#captured.length;
      try {
        const result = await this.#run(value, input2, options);
        this.#usedTokens += prepared.tokens;
        this.#flush(value.name, configuredModel, purpose, capturedFrom);
        return result;
      } catch (cause) {
        this.#flush(value.name, configuredModel, purpose, capturedFrom);
        const response2 = responseError(cause);
        if (response2?.incomplete === true) {
          try {
            const partial2 = outputText(await this.retrieveResponse(response2.id));
            if (partial2.length > 0 && record5(cause)) cause["rawText"] = partial2;
          } catch {
          }
        }
        normaliseRawText(cause);
        if (!contextWindowFailure(cause)) throw cause;
        contextFailures += 1;
        if (contextFailures === 1) {
          this.#rotate();
          continue;
        }
        if (!compacted) {
          const reduced = compactSnapshotInput(originalInput);
          if (reduced !== originalInput) {
            input2 = reduced;
            compacted = true;
            this.#rotate();
            continue;
          }
        }
        throw cause;
      }
    }
  }
};
var createOpenAISchemaClientFactory = (options) => {
  if (options.apiKey.trim().length === 0) throw new Error("OpenAI API key is required");
  if (options.instructions.trim().length === 0) throw new Error("OpenAI developer instructions are required");
  return (conversationId) => new OpenAISchemaClient(options, conversationId);
};

// src/llm/audit/catalogue.ts
var auditProfile = "nlp-audit/1.0.3";
var forbiddenPatterns = [
  /\bas an ai\b/iu,
  /\bi (?:will|shall) (?:analyse|analyze|investigate|examine|review|consider|first)\b/iu,
  /\bfirst,? i (?:will|shall)\b/iu,
  /\bthe next step\b/iu,
  /\bbased on (?:the|this) (?:prompt|provided json|supplied json|instructions?)\b/iu,
  /\baccording to my instructions\b/iu,
  /\bthe schema (?:requires|says|specifies)\b/iu,
  /\bthis (?:response|task|request)\b/iu,
  /\bthe user (?:asked|requested)\b/iu,
  /\bi cannot (?:provide|comply|help)\b/iu,
  /\blanguage model\b/iu,
  /\btoken limit\b/iu,
  /\bstructured output\b/iu,
  /\btool call\b/iu,
  /\bconversation id\b/iu,
  /\bfor entertainment purposes only\b/iu,
  /\bnot (?:a substitute for|professional) (?:medical|legal|financial|scientific) advice\b/iu
];
var unwantedExamples = [
  "I will analyse the supplied chart and explain the requested field.",
  "Based on the provided JSON, the next step is to review the relevant placements.",
  "As an AI language model, I cannot provide professional advice.",
  "The schema requires this response to contain structured output.",
  "According to my instructions, I should interpret the chart without disclaimers."
];

// src/llm/audit/text.ts
var normaliseText = (value) => value.normalize("NFKC").toLocaleLowerCase("en-GB").replace(/[\p{P}\p{S}]+/gu, " ").replace(/\s+/gu, " ").trim();
var sentences = (value) => value.replace(/\r\n?/gu, "\n").split(/(?<=[.!?])\s+|\n+/u).map((sentence) => sentence.trim()).filter(Boolean);
var grams = (value, size = 3) => {
  const text4 = ` ${normaliseText(value)} `;
  const result = /* @__PURE__ */ new Map();
  if (text4.length < size) return result;
  for (let index = 0; index <= text4.length - size; index += 1) {
    const gram = text4.slice(index, index + size);
    result.set(gram, (result.get(gram) ?? 0) + 1);
  }
  return result;
};
var cosine = (a, b) => {
  const left = grams(a);
  const right = grams(b);
  let dot = 0;
  let leftNorm = 0;
  let rightNorm = 0;
  for (const value of left.values()) leftNorm += value * value;
  for (const value of right.values()) rightNorm += value * value;
  for (const [gram, value] of left) dot += value * (right.get(gram) ?? 0);
  return leftNorm === 0 || rightNorm === 0 ? 0 : dot / Math.sqrt(leftNorm * rightNorm);
};

// src/llm/audit/completion.ts
var terminal2 = /[.!?…”’)]$/u;
var dangling = /\b(?:and|or|but|because|although|while|whereas|if|unless)\s*$/iu;
var continuation = /\b(?:continued|continue|to be continued|more follows|the rest|remaining fields?)\s*$/iu;
var openEnding = /[,;:/\-–—]\s*$/u;
var balanced = (value, open, close) => {
  let depth = 0;
  for (const character of value) {
    if (character === open) depth += 1;
    else if (character === close) depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
};
var completeText = (value, path) => {
  const text4 = value.trim();
  if (text4.length === 0) return [{
    path,
    code: "missing_required_content",
    message: `${path} contains no text`
  }];
  if (/(?:^|\.)title$/iu.test(path) || text4.length < 24) return [];
  const issues = [];
  if (!balanced(text4, "(", ")") || !balanced(text4, "[", "]") || !balanced(text4, "{", "}")) {
    issues.push({ path, code: "unbalanced_delimiter", message: `${path} contains an unbalanced delimiter` });
  }
  const quotes = (text4.match(/[“”"]/gu) ?? []).length;
  if (quotes % 2 !== 0) {
    issues.push({ path, code: "unbalanced_delimiter", message: `${path} contains an unbalanced quotation mark` });
  }
  if (dangling.test(text4) || openEnding.test(text4)) {
    issues.push({ path, code: "dangling_clause", message: `${path} ends with an unfinished clause` });
  }
  if (continuation.test(text4)) {
    issues.push({ path, code: "unfinished_sentence", message: `${path} contains continuation language instead of complete content` });
  }
  if (text4.length >= 48 && !terminal2.test(text4)) {
    issues.push({ path, code: "missing_terminal_punctuation", message: `${path} does not end naturally` });
  }
  return issues;
};
var repairTerminalPunctuation = (value, path) => {
  const text4 = value.trim();
  if (text4.length < 48 || terminal2.test(text4) || /(?:^|\.)title$/iu.test(path)) {
    return { value: text4, repaired: text4 !== value };
  }
  const issues = completeText(text4, path);
  const cosmetic = issues.length === 1 && issues[0]?.code === "missing_terminal_punctuation";
  return cosmetic ? { value: `${text4}.`, repaired: true } : { value: text4, repaired: text4 !== value };
};
var structural = /* @__PURE__ */ new Set(["status", "sign", "domain"]);
var visit = (value, path, key, issues) => {
  if (key === "sourceRefs") return;
  if (typeof value === "string") {
    if (key === null || !structural.has(key)) issues.push(...completeText(value, path));
    return;
  }
  if (value === null || typeof value === "number" || typeof value === "boolean") return;
  if (Array.isArray(value)) {
    value.forEach((item, index) => visit(item, `${path}[${index}]`, null, issues));
    return;
  }
  if (typeof value !== "object") return;
  for (const [childKey, child] of Object.entries(value)) {
    visit(child, path.length === 0 ? childKey : `${path}.${childKey}`, childKey, issues);
  }
};
var auditCompletion = (value, root2 = "output") => {
  const issues = [];
  visit(value, root2, null, issues);
  return issues;
};

// src/llm/audit/reference.ts
var internalReferencePattern = /#\/[\p{L}\p{N}_~./-]+/gu;
var leakedReferences = (value, path) => {
  const matches = [...value.matchAll(internalReferencePattern)].map(([match]) => match);
  return matches.length === 0 ? null : { path, references: [...new Set(matches)] };
};
var withoutInternalReferences = (value) => value.replaceAll(internalReferencePattern, " ").replaceAll(/\s+([,.;:!?])/gu, "$1").replaceAll(/\s+/gu, " ").trim();

// src/llm/audit/duplicate.ts
var entry = (value, index) => typeof value === "string" ? { path: `prior[${index}]`, value } : value;
var words2 = (value) => new Set(
  normaliseText(withoutInternalReferences(value)).split(" ").filter((word) => word.length > 2)
);
var jaccard = (left, right) => {
  if (left.size === 0 || right.size === 0) return 0;
  let intersection = 0;
  for (const word of left) if (right.has(word)) intersection += 1;
  return intersection / (left.size + right.size - intersection);
};
var normaliseNarrative = (value) => normaliseText(withoutInternalReferences(value));
var duplicateMatch = (value, path, prior) => {
  const normal = normaliseNarrative(value);
  if (normal.length < 60) return null;
  const currentWords = words2(value);
  let best = null;
  for (const [index, raw2] of prior.entries()) {
    const candidate = entry(raw2, index);
    if (candidate.path === path) continue;
    const candidateNormal = normaliseNarrative(candidate.value);
    if (candidateNormal.length < 60) continue;
    if (normal === candidateNormal) {
      return { path: candidate.path, score: 1, threshold: 1, kind: "exact" };
    }
    const score = cosine(normal, candidateNormal);
    const overlap2 = jaccard(currentWords, words2(candidate.value));
    const threshold = normal.length >= 180 && candidateNormal.length >= 180 ? 0.92 : 0.94;
    if (score < threshold || overlap2 < 0.68) continue;
    const match = { path: candidate.path, score, threshold, kind: "near" };
    if (best === null || match.score > best.score) best = match;
  }
  return best;
};

// src/llm/audit/semantic.ts
var strengthTerms = [
  "ability",
  "advantage",
  "asset",
  "capacity",
  "clarity",
  "confidence",
  "courage",
  "discipline",
  "ease",
  "effective",
  "gift",
  "initiative",
  "insight",
  "reliable",
  "resilience",
  "resource",
  "stable",
  "steadiness",
  "strength",
  "support",
  "talent",
  "fortaleza",
  "capacidad",
  "confianza",
  "valor",
  "disciplina",
  "facilidad",
  "talento",
  "resiliencia",
  "claridad",
  "equilibrio",
  "iniciativa"
];
var tensionTerms = [
  "blind spot",
  "block",
  "challenge",
  "conflict",
  "difficulty",
  "excess",
  "friction",
  "frustration",
  "imbalance",
  "impatience",
  "instability",
  "pressure",
  "rigid",
  "risk",
  "struggle",
  "tension",
  "volatile",
  "vulnerable",
  "bloqueo",
  "conflicto",
  "dificultad",
  "exceso",
  "friccion",
  "frustracion",
  "desequilibrio",
  "impaciencia",
  "inestabilidad",
  "presion",
  "rigidez",
  "riesgo",
  "tension",
  "vulnerabilidad"
];
var themeTerms = [
  "approach",
  "development",
  "direction",
  "drive",
  "dynamic",
  "emphasis",
  "expression",
  "focus",
  "identity",
  "interplay",
  "needs",
  "orientation",
  "pattern",
  "priorities",
  "purpose",
  "rhythm",
  "style",
  "tendency",
  "theme",
  "desarrollo",
  "direccion",
  "dinamica",
  "enfasis",
  "expresion",
  "identidad",
  "necesidades",
  "orientacion",
  "patron",
  "prioridades",
  "proposito",
  "ritmo",
  "tendencia",
  "tema"
];
var strengthFrames = [
  /\b(?:supports?|enables?|allows?|provides?|helps?|favours?|favors?|strengthens?|improves?|grounds?|stabilises?|stabilizes?|builds?|encourages?)\b/u,
  /\b(?:apoya|permite|proporciona|ayuda|favorece|fortalece|mejora|estabiliza|fomenta)\b/u
];
var tensionFrames = [
  /\b(?:can|could|may|might)\s+(?:become|create|cause|lead to|turn into|produce|intensify|undermine|distort|overwhelm|complicate)\b/u,
  /\b(?:too|overly|excessive(?:ly)?|without|unless|but|however|yet|risk of|tendency to|hard to|difficulty with|struggle to)\b/u,
  /\b(?:undermines?|disrupts?|blocks?|strains?|limits?|destabilises?|destabilizes?|overextends?|overreacts?|avoids?|withdraws?)\b/u,
  /\b(?:puede|podria|podría)\s+(?:volverse|crear|causar|llevar a|producir|intensificar|socavar|distorsionar|abrumar|complicar)\b/u,
  /\b(?:demasiado|excesivo|excesiva|sin|a menos que|pero|sin embargo|riesgo de|tendencia a|dificultad para)\b/u
];
var countTerms = (value, terms) => {
  const padded = ` ${normaliseText(value)} `;
  return terms.reduce((count2, term) => {
    const candidate = normaliseText(term);
    return candidate.length > 0 && padded.includes(` ${candidate} `) ? count2 + 1 : count2;
  }, 0);
};
var countFrames = (value, patterns2) => patterns2.reduce((count2, pattern) => count2 + (pattern.test(value) ? 1 : 0), 0);
var semanticRole = (id) => {
  const path = normaliseText(id);
  if (/\b(?:strengths?|assets?|gifts?|advantages?|turn ons?|best expression|suitable fields?)\b/u.test(path)) return "strength";
  if (/\b(?:tensions?|difficulties|risks?|blind spots?|frustrations?|turn offs?|contradictions?|growth edges?)\b/u.test(path)) return "tension";
  if (/\b(?:themes?|emphasis|patterns?|styles?|needs|dynamic|summary|detail|overview|essence|narrative|synthesis|portrait|arc)\b/u.test(path)) return "theme";
  return null;
};
var roleTerms = (role) => {
  switch (role) {
    case "strength":
      return strengthTerms;
    case "tension":
      return tensionTerms;
    case "theme":
      return themeTerms;
  }
};
var roleFrames = (role) => {
  switch (role) {
    case "strength":
      return strengthFrames;
    case "tension":
      return tensionFrames;
    case "theme":
      return [];
  }
};
var scoreRole = (value, role) => countTerms(value, roleTerms(role)) + countFrames(value, roleFrames(role));
var semanticIssues = (value, profile) => {
  const normal = normaliseText(value);
  if (normal.split(" ").filter(Boolean).length < 8) return [];
  const issues = [];
  const role = semanticRole(profile.id);
  if (role === "strength" || role === "tension") {
    const opposite = role === "strength" ? "tension" : "strength";
    const expectedScore = scoreRole(normal, role);
    const oppositeScore = scoreRole(normal, opposite);
    if (expectedScore === 0 && oppositeScore >= 3) {
      issues.push({
        code: "wrong_role",
        message: `${profile.id} strongly describes ${opposite} material instead of ${role} material`
      });
    }
  }
  if (profile.field !== void 0 && profile.fieldLexicons !== void 0) {
    const ownScore = countTerms(normal, profile.fieldLexicons[profile.field] ?? []);
    let strongest = null;
    for (const [field, terms] of Object.entries(profile.fieldLexicons)) {
      if (field === profile.field) continue;
      const score = countTerms(normal, terms);
      if (strongest === null || score > strongest.score) strongest = { field, score };
    }
    if (ownScore === 0 && strongest !== null && strongest.score >= 3) {
      issues.push({
        code: "wrong_field",
        message: `${profile.id} fits ${strongest.field} more strongly than ${profile.field}`
      });
    }
  }
  return issues;
};

// src/llm/audit/field.ts
var placeholders = /^(?:n\/a|none|unknown|tbd|todo|placeholder|\.\.\.)$/iu;
var badFormat = /```|^\s{0,3}#{1,6}\s|^\s*[-*+]\s+/mu;
var label = /^\s*[\p{L}\p{N} _-]{2,40}:\s*/u;
var secondPerson = /\b(?:you|your|yours|yourself|tú|tu|tus|te|ti|usted|ustedes|su|sus|contigo)\b/iu;
var interpreterFirstPerson = /\b(?:I|me|my|mine|myself|we|us|our|ours|ourselves|yo|mí|mío|mía|míos|mías|me|nosotros|nosotras|nuestro|nuestra|nuestros|nuestras)\b/iu;
var impersonal = /\b(?:the native|this placement (?:indicates|suggests|shows|reveals)|this aspect (?:indicates|suggests|shows|reveals)|the chart (?:indicates|suggests|shows|reveals)|one may find|the individual)\b/iu;
var semanticRegisterTerms = /\b(?:interpretation map|semantic register|semantic input|corpus atom|corpus atoms|corpus claim|corpus claims|source claim|source claims|claim id|claim ids|atom id|atom ids|calculationvariant|permittedsourcerefs|sourcerefs|compiler proposition|compiler propositions)\b/iu;
var technicalTerms = [
  "sun",
  "moon",
  "mercury",
  "venus",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
  "ascendant",
  "descendant",
  "midheaven",
  "house",
  "houses",
  "aspect",
  "aspects",
  "conjunction",
  "opposition",
  "trine",
  "square",
  "sextile",
  "sol",
  "luna",
  "mercurio",
  "marte",
  "j\xFApiter",
  "saturno",
  "urano",
  "neptuno",
  "plut\xF3n",
  "ascendente",
  "casa",
  "casas",
  "aspecto",
  "aspectos"
];
var escapedTechnicalTerms = technicalTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&"));
var technicalOpening = new RegExp(
  `^(?:the|el|la|los|las)?\\s*(?:(?:${escapedTechnicalTerms.join("|")})\\b|(?:a|an|un|una)?\\s*(?:planet|sign|house|aspect|placement|chart|planeta|signo|casa|aspecto|posici\xF3n)\\b)`,
  "iu"
);
var forbidden = (sentence) => forbiddenPatterns.some((pattern) => pattern.test(sentence));
var boilerplate = (sentence) => unwantedExamples.some((example) => cosine(sentence, example) >= 0.72);
var countTerms2 = (value, terms) => {
  const padded = ` ${normaliseText(value)} `;
  return terms.reduce((count2, term) => {
    const candidate = normaliseText(term);
    return candidate.length > 0 && padded.includes(` ${candidate} `) ? count2 + 1 : count2;
  }, 0);
};
var isTitle = (id) => /(?:^|\.)title$/iu.test(id);
var clean = (value) => {
  let repaired = false;
  let text4 = value.replaceAll("```json", "").replaceAll("```", "").trim();
  if (text4 !== value.trim()) repaired = true;
  const kept = [];
  let removed = false;
  for (const sentence of sentences(text4)) {
    if (forbidden(sentence) || boilerplate(sentence)) {
      removed = true;
      repaired = true;
      continue;
    }
    const stripped = sentence.replace(label, "").trim();
    if (stripped !== sentence) repaired = true;
    if (kept.length > 0 && normaliseText(kept.at(-1) ?? "") === normaliseText(stripped)) {
      repaired = true;
      continue;
    }
    if (stripped.length > 0) kept.push(stripped);
  }
  text4 = kept.join(" ").trim();
  return { value: text4, repaired, removed };
};
var closeSemanticCopy = (value, propositions) => {
  const outputSentences = sentences(value).filter((sentence) => normaliseText(sentence).split(" ").length >= 6);
  for (const proposition2 of propositions) {
    const normalProposition = normaliseText(proposition2);
    if (normalProposition.split(" ").length < 6) continue;
    for (const sentence of outputSentences) {
      const normalSentence = normaliseText(sentence);
      const shorter = normalSentence.length <= normalProposition.length ? normalSentence : normalProposition;
      const longer = normalSentence.length > normalProposition.length ? normalSentence : normalProposition;
      if (shorter.length >= 42 && longer.includes(shorter)) return proposition2;
      if (cosine(sentence, proposition2) >= 0.93) return proposition2;
    }
  }
  return null;
};
var styleIssues = (value, id, profile) => {
  if (isTitle(id)) return [];
  const issues = [];
  const leak = leakedReferences(value, id);
  if (leak !== null) {
    issues.push({
      code: "reference_leakage",
      message: `${id} contains internal JSON references outside sourceRefs: ${leak.references.join(", ")}`,
      repairable: false
    });
  }
  if (semanticRegisterTerms.test(value)) {
    issues.push({
      code: "semantic_register_leakage",
      message: `${id} exposes private corpus/compiler language instead of user-facing interpretation`,
      repairable: false
    });
  }
  const copied = closeSemanticCopy(value, profile.semanticPropositions ?? []);
  if (copied !== null) {
    issues.push({
      code: "semantic_register_leakage",
      message: `${id} reproduces corpus proposition wording too closely instead of rendering the meaning in the interpretive voice`,
      repairable: false
    });
  }
  if (interpreterFirstPerson.test(value)) {
    issues.push({
      code: "interpreter_first_person",
      message: `${id} speaks as an astrologer or narrator; Astrology has no first-person character voice`,
      repairable: false
    });
  }
  if (value.length < 36) return issues;
  if (impersonal.test(value)) {
    issues.push({
      code: "impersonal_voice",
      message: `${id} describes the chart impersonally instead of speaking to the person`,
      repairable: false
    });
  }
  if (sentences(value).some((sentence) => technicalOpening.test(sentence))) {
    issues.push({
      code: "technical_opening",
      message: `${id} leads with chart mechanics instead of human meaning`,
      repairable: false
    });
  }
  if (value.length >= 60 && !secondPerson.test(value)) {
    issues.push({
      code: "impersonal_voice",
      message: `${id} must use direct second-person language`,
      repairable: false
    });
  }
  const normal = normaliseText(value);
  const wordCount = normal.split(" ").filter(Boolean).length;
  const technicalCount = countTerms2(normal, technicalTerms);
  if (wordCount >= 20 && technicalCount >= 5 && technicalCount / wordCount > 0.16) {
    issues.push({
      code: "technical_density",
      message: `${id} is excessively technical for user-facing interpretation`,
      repairable: false
    });
  }
  return issues;
};
var worldviewIssues = (value, id) => {
  const audit = auditWorldviewText(value);
  const hard = audit.findings.filter(({ severity }) => severity === "reject");
  const review = audit.findings.filter(({ severity }) => severity === "review");
  return {
    issues: hard.map((finding) => ({
      code: "worldview_assumption",
      message: `${id} violates worldview neutrality: ${finding.reason} (${finding.phrase})`,
      repairable: false
    })),
    review: worldviewFailureMessages({ safe: true, requiresReview: review.length > 0, findings: review }).map((message) => `${id}: ${message}`)
  };
};
var auditField = (input2, profile) => {
  const issues = [];
  const cleaned = clean(input2);
  const completed = repairTerminalPunctuation(cleaned.value, profile.id);
  const value = completed.value;
  if (value.length === 0) issues.push({ code: "empty", message: `${profile.id} is empty after audit`, repairable: false });
  if (placeholders.test(value)) issues.push({ code: "placeholder", message: `${profile.id} contains a placeholder`, repairable: false });
  if (badFormat.test(value)) issues.push({ code: "format", message: `${profile.id} contains forbidden formatting`, repairable: true });
  if (cleaned.removed) issues.push({ code: "process_narration", message: `${profile.id} contained process narration or boilerplate`, repairable: true });
  if (profile.minLength !== void 0 && value.length < profile.minLength) {
    issues.push({ code: "empty", message: `${profile.id} is too short`, repairable: false });
  }
  if (profile.maxLength !== void 0 && value.length > profile.maxLength) {
    issues.push({ code: "format", message: `${profile.id} is too long`, repairable: false });
  }
  issues.push(...styleIssues(value, profile.id, profile));
  const worldview = worldviewIssues(value, profile.id);
  issues.push(...worldview.issues);
  issues.push(...semanticIssues(value, {
    id: profile.id,
    ...profile.semanticField === void 0 ? {} : { field: profile.semanticField },
    ...profile.fieldLexicons === void 0 ? {} : { fieldLexicons: profile.fieldLexicons }
  }).map((issue) => ({
    code: "irrelevant",
    message: issue.message,
    repairable: false
  })));
  const duplicate = duplicateMatch(value, profile.id, profile.priorFields ?? []);
  if (duplicate !== null) {
    issues.push({
      code: "cross_field_leakage",
      message: `${profile.id} is a ${duplicate.kind} duplicate of ${duplicate.path} (score ${duplicate.score.toFixed(4)}, threshold ${duplicate.threshold.toFixed(4)})`,
      repairable: false
    });
  }
  const unsafe = issues.some((issue) => !issue.repairable);
  return {
    valid: !unsafe && !badFormat.test(value),
    value,
    repaired: cleaned.repaired || completed.repaired,
    issues,
    worldviewReview: worldview.review
  };
};
var auditList = (items, profile) => {
  const values = [];
  const issues = [];
  const worldviewReview = [];
  const seen = /* @__PURE__ */ new Set();
  items.forEach((item, index) => {
    const id = `${profile.id}[${index}]`;
    const result = auditField(item, { ...profile, id });
    issues.push(...result.issues);
    worldviewReview.push(...result.worldviewReview);
    const key = normaliseText(result.value);
    if (seen.has(key)) {
      issues.push({ code: "duplicate", message: `${profile.id} contains duplicate entries`, repairable: true });
    } else if (result.value.length > 0) {
      seen.add(key);
      values.push(result.value);
    }
  });
  return {
    valid: issues.every((issue) => issue.repairable) && values.length > 0,
    values,
    issues,
    worldviewReview: [...new Set(worldviewReview)]
  };
};

// src/llm/audit/profiles.ts
var romanceFields = {
  affectionStyle: ["affection", "warmth", "tenderness", "touch", "care", "closeness", "gesture", "afecto", "cari\xF1o", "ternura", "contacto", "cuidado", "cercan\xEDa"],
  courtshipStyle: ["courtship", "pursuit", "flirting", "attraction", "initiative", "dating", "approach", "cortejo", "conquista", "coqueteo", "atracci\xF3n", "iniciativa", "citas", "acercamiento"],
  attachmentNeeds: ["attachment", "security", "reassurance", "trust", "consistency", "closeness", "autonomy", "space", "safety", "apego", "seguridad", "confianza", "constancia", "cercan\xEDa", "autonom\xEDa", "espacio"],
  preferredPartnerQualities: ["partner", "quality", "compatibility", "trust", "communication", "stability", "independence", "pareja", "cualidad", "compatibilidad", "confianza", "comunicaci\xF3n", "estabilidad", "independencia"],
  relationshipStrengths: ["support", "affection", "trust", "commitment", "reciprocity", "loyalty", "apoyo", "afecto", "confianza", "compromiso", "reciprocidad", "lealtad"],
  relationshipDifficulties: ["conflict", "distance", "jealousy", "avoidance", "pressure", "mistrust", "conflicto", "distancia", "celos", "evasi\xF3n", "presi\xF3n", "desconfianza"],
  commitmentPattern: ["commitment", "loyalty", "stability", "duration", "exclusivity", "independence", "compromiso", "lealtad", "estabilidad", "duraci\xF3n", "exclusividad", "independencia"]
};
var sexualityFields = {
  desireStyle: ["desire", "attraction", "erotic", "longing", "chemistry", "deseo", "atracci\xF3n", "er\xF3tico", "anhelo", "qu\xEDmica"],
  libidoPattern: ["libido", "drive", "frequency", "energy", "fluctuation", "impulse", "libido", "impulso", "frecuencia", "energ\xEDa", "fluctuaci\xF3n"],
  initiationStyle: ["initiate", "pursue", "approach", "signal", "invite", "first move", "iniciar", "perseguir", "acercarse", "se\xF1al", "invitar", "primer paso"],
  preferredPace: ["pace", "tempo", "slow", "gradual", "quick", "build-up", "ritmo", "tempo", "lento", "gradual", "r\xE1pido", "pre\xE1mbulo"],
  physicalAffection: ["touch", "physical", "affection", "sensual", "contact", "tenderness", "tacto", "f\xEDsico", "afecto", "sensual", "contacto", "ternura"],
  likelyTurnOns: ["turn-on", "arousal", "excite", "attract", "stimulate", "enciende", "excitaci\xF3n", "atrae", "estimula"],
  likelyTurnOffs: ["turn-off", "aversion", "repel", "discomfort", "inhibit", "desagrada", "aversi\xF3n", "rechazo", "incomodidad", "inhibe"],
  experimentationStyle: ["experiment", "novelty", "curiosity", "variety", "boundary", "adventure", "experimentar", "novedad", "curiosidad", "variedad", "l\xEDmite", "aventura"],
  emotionalSexConnection: ["emotion", "bond", "trust", "intimacy", "vulnerability", "connection", "emoci\xF3n", "v\xEDnculo", "confianza", "intimidad", "vulnerabilidad", "conexi\xF3n"],
  controlAndSurrender: ["control", "surrender", "yield", "lead", "receive", "release", "control", "entrega", "ceder", "liderar", "recibir", "soltar"],
  powerDynamics: ["power", "equality", "dominance", "submission", "agency", "balance", "poder", "igualdad", "dominancia", "sumisi\xF3n", "agencia", "equilibrio"],
  exclusivityPattern: ["exclusive", "monogamy", "commitment", "freedom", "loyalty", "boundaries", "exclusividad", "monogamia", "compromiso", "libertad", "lealtad", "l\xEDmites"],
  sexualCommunication: ["communicate", "voice", "ask", "consent", "boundary", "feedback", "comunicar", "expresar", "pedir", "consentimiento", "l\xEDmite", "respuesta"],
  likelyFrustrations: ["frustration", "mismatch", "inhibition", "pressure", "distance", "dissatisfaction", "frustraci\xF3n", "desajuste", "inhibici\xF3n", "presi\xF3n", "distancia", "insatisfacci\xF3n"]
};
var careerFields = {
  vocationalThemes: ["vocation", "calling", "purpose", "contribution", "mission", "vocaci\xF3n", "llamado", "prop\xF3sito", "contribuci\xF3n", "misi\xF3n"],
  suitableFields: ["field", "industry", "profession", "occupation", "sector", "campo", "industria", "profesi\xF3n", "ocupaci\xF3n", "sector"],
  preferredWorkEnvironment: ["environment", "workplace", "team", "autonomy", "structure", "pace", "entorno", "lugar de trabajo", "equipo", "autonom\xEDa", "estructura", "ritmo"],
  leadershipStyle: ["leadership", "lead", "delegate", "influence", "decision", "liderazgo", "liderar", "delegar", "influir", "decisi\xF3n"],
  authorityRelationship: ["authority", "manager", "hierarchy", "rule", "supervision", "autoridad", "gerente", "jerarqu\xEDa", "regla", "supervisi\xF3n"],
  ambitionPattern: ["ambition", "achievement", "goal", "status", "advancement", "ambici\xF3n", "logro", "meta", "estatus", "avance"],
  publicReputation: ["reputation", "public", "recognition", "visibility", "credibility", "reputaci\xF3n", "p\xFAblico", "reconocimiento", "visibilidad", "credibilidad"],
  careerStrengths: ["strength", "skill", "talent", "competence", "advantage", "fortaleza", "habilidad", "talento", "competencia", "ventaja"],
  careerRisks: ["risk", "burnout", "conflict", "stagnation", "overwork", "riesgo", "agotamiento", "conflicto", "estancamiento", "sobrecarga"]
};
var moneyFields = {
  earningStyle: ["earn", "income", "revenue", "work", "resource", "ganar", "ingreso", "renta", "trabajo", "recurso"],
  spendingStyle: ["spend", "purchase", "budget", "expense", "indulgence", "gastar", "compra", "presupuesto", "gasto", "capricho"],
  securityNeeds: ["security", "reserve", "stability", "savings", "certainty", "seguridad", "reserva", "estabilidad", "ahorro", "certeza"],
  riskTolerance: ["risk", "investment", "speculation", "caution", "volatility", "riesgo", "inversi\xF3n", "especulaci\xF3n", "cautela", "volatilidad"],
  materialStrengths: ["strength", "resource", "discipline", "planning", "stewardship", "fortaleza", "recurso", "disciplina", "planificaci\xF3n", "gesti\xF3n"],
  financialBlindSpots: ["blind spot", "overspend", "scarcity", "avoidance", "debt", "punto ciego", "gasto excesivo", "escasez", "evasi\xF3n", "deuda"]
};
var fieldProfiles = {
  sexuality: {
    id: "sexuality",
    lexicon: ["desire", "attraction", "libido", "intimacy", "pace", "touch", "communication", "deseo", "atracci\xF3n", "intimidad", "ritmo", "contacto", "comunicaci\xF3n"],
    fieldLexicons: sexualityFields,
    minLength: 20
  },
  career: {
    id: "career",
    lexicon: ["vocation", "work", "authority", "ambition", "achievement", "career", "vocaci\xF3n", "trabajo", "autoridad", "ambici\xF3n", "logro", "carrera"],
    fieldLexicons: careerFields,
    minLength: 20
  },
  romance: {
    id: "romance",
    lexicon: ["affection", "attachment", "courtship", "partnership", "relationship", "love", "commitment", "afecto", "apego", "cortejo", "pareja", "relaci\xF3n", "amor", "compromiso"],
    fieldLexicons: romanceFields,
    minLength: 20
  },
  money: {
    id: "money",
    lexicon: ["money", "income", "earning", "spending", "security", "risk", "resources", "dinero", "ingreso", "ganancia", "gasto", "seguridad", "riesgo", "recursos"],
    fieldLexicons: moneyFields,
    minLength: 20
  }
};

// src/llm/audit/structured.ts
var structuralStrings = /* @__PURE__ */ new Set(["status", "sign", "domain"]);
var record6 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var report = (state2, errors) => {
  state2.errors.push(...errors);
};
var reviewWorldview = (state2, reasons) => {
  state2.worldviewReview.push(...reasons);
};
var keyFor = (path) => {
  const match = path.match(/(?:^|\.)([^.[\]]+)(?:\[\d+\])?$/u);
  return match?.[1] ?? null;
};
var profileAt = (profile, path) => {
  const key = keyFor(path);
  if (key === null) return profile;
  const specific = profile.fieldLexicons?.[key];
  if (specific === void 0) return profile;
  return {
    ...profile,
    semanticField: key,
    lexicon: [.../* @__PURE__ */ new Set([...profile.lexicon, ...specific])]
  };
};
var references = (value, state2, path) => {
  if (!Array.isArray(value) || !value.every((item) => typeof item === "string" && item.startsWith("#/"))) {
    report(state2, [`${path} must contain local JSON references`]);
    return [];
  }
  const refs3 = value;
  if (!refsValid(state2.calculation, refs3, state2.allowed)) {
    report(state2, [`${path} contains unresolved, unavailable or unpermitted source references`]);
  }
  return [...refs3];
};
var auditText = (value, state2, path) => {
  const profile = profileAt(state2.profile, path);
  const result = auditField(value, {
    ...profile,
    id: path,
    priorFields: [...profile.priorFields ?? [], ...state2.earlier]
  });
  if (!result.valid) report(state2, result.issues.map(({ message }) => message));
  reviewWorldview(state2, result.worldviewReview);
  if (result.value.length >= 20) state2.earlier.push({ path, value: result.value });
  return result.value;
};
var visit2 = (value, state2, path, key) => {
  if (key === "sourceRefs") return references(value, state2, path);
  if (typeof value === "string") {
    return key !== null && structuralStrings.has(key) ? value : auditText(value, state2, path);
  }
  if (value === null || typeof value === "number" || typeof value === "boolean") return value;
  if (Array.isArray(value)) {
    if (value.every((item) => typeof item === "string")) {
      const profile = profileAt(state2.profile, path);
      const result = auditList(value, {
        ...profile,
        id: path,
        priorFields: [...profile.priorFields ?? [], ...state2.earlier]
      });
      if (!result.valid) report(state2, result.issues.map(({ message }) => message));
      reviewWorldview(state2, result.worldviewReview);
      result.values.forEach((item, index) => {
        if (item.length >= 20) state2.earlier.push({ path: `${path}[${index}]`, value: item });
      });
      return result.values;
    }
    return value.map((item, index) => visit2(item, state2, `${path}[${index}]`, null));
  }
  if (!record6(value)) {
    report(state2, [`${path} has an unsupported value`]);
    return value;
  }
  const output = {};
  for (const [childKey, child] of Object.entries(value)) {
    output[childKey] = visit2(child, state2, `${path}.${childKey}`, childKey);
  }
  return output;
};
var auditStructured = (value, calculation, allowed, profile) => {
  const state2 = {
    calculation,
    allowed,
    profile,
    earlier: [],
    errors: [],
    worldviewReview: []
  };
  const audited = visit2(value, state2, profile.id, null);
  const completion = auditCompletion(audited, profile.id);
  const errors = [.../* @__PURE__ */ new Set([
    ...state2.errors,
    ...completion.map(({ message }) => message)
  ])];
  const worldviewReview = [...new Set(state2.worldviewReview)];
  const needsRepair = errors.length > 0;
  const repair = state2.errors.length === 0 && completion.length > 0 ? "completion" : "audit";
  return {
    valid: !needsRepair,
    value: audited,
    errors,
    soft: needsRepair,
    ...needsRepair ? { repair } : {},
    ...worldviewReview.length === 0 ? {} : { worldviewReview }
  };
};

// src/llm/schema/build.ts
var text3 = () => ({ type: "string" });
var textEnum = (values) => {
  if (values.length === 0) {
    throw new Error("Text enum requires at least one permitted value");
  }
  return { type: "string", enum: [...values] };
};
var nullableText2 = () => ({
  anyOf: [text3(), { type: "null" }]
});
var list = (items, minItems2 = 0, maxItems2) => ({
  type: "array",
  items,
  minItems: minItems2,
  ...maxItems2 === void 0 ? {} : { maxItems: maxItems2 }
});
var object = (properties) => ({
  type: "object",
  additionalProperties: false,
  properties,
  required: Object.keys(properties)
});
var literal = (value) => ({
  type: "string",
  const: value
});
var strictShape = (name, schema2, parse2) => ({
  name,
  schema: schema2,
  ...parse2 === void 0 ? {} : { parse: parse2 }
});

// src/llm/schema/section.ts
var sectionSchema = object({
  status: { type: "string", enum: ["written", "unavailable", "not_applicable"] },
  title: text3(),
  summary: nullableText2(),
  detail: nullableText2(),
  themes: list(text3()),
  strengths: list(text3()),
  tensions: list(text3()),
  sourceRefs: list(text3())
});
var record7 = (value) => typeof value === "object" && value !== null;
var strings = (value) => Array.isArray(value) && value.every((item) => typeof item === "string");
var parseSection = (value) => {
  if (!record7(value)) throw new TypeError("Section must be an object");
  const status4 = value["status"];
  if (status4 !== "written" && status4 !== "unavailable" && status4 !== "not_applicable") throw new TypeError("Invalid section status");
  if (typeof value["title"] !== "string") throw new TypeError("Section title is required");
  for (const key of ["summary", "detail"]) {
    if (value[key] !== null && typeof value[key] !== "string") throw new TypeError(`${key} must be text or null`);
  }
  for (const key of ["themes", "strengths", "tensions", "sourceRefs"]) {
    if (!strings(value[key])) throw new TypeError(`${key} must be a string array`);
  }
  return value;
};
var sectionShape = (name) => strictShape(name, sectionSchema, parseSection);

// src/llm/schema/chart.ts
import { signs as signs4 } from "astral-core";
var refs2 = (allowed) => allowed.length === 0 ? list(text3(), 0, 0) : list(textEnum(allowed), 1);
var sectionProperties = (allowed) => ({
  status: {
    type: "string",
    enum: ["written", "unavailable", "not_applicable"]
  },
  title: text3(),
  summary: nullableText2(),
  detail: nullableText2(),
  themes: list(text3()),
  strengths: list(text3()),
  tensions: list(text3()),
  sourceRefs: refs2(allowed)
});
var sectionShape2 = (name, allowed) => strictShape(
  name,
  object(sectionProperties(allowed)),
  parseStrictSection
);
var romance = (allowed) => object({
  ...sectionProperties(allowed),
  affectionStyle: nullableText2(),
  courtshipStyle: nullableText2(),
  attachmentNeeds: nullableText2(),
  preferredPartnerQualities: list(text3()),
  relationshipStrengths: list(text3()),
  relationshipDifficulties: list(text3()),
  commitmentPattern: nullableText2()
});
var sexuality = (allowed) => object({
  ...sectionProperties(allowed),
  desireStyle: nullableText2(),
  libidoPattern: nullableText2(),
  initiationStyle: nullableText2(),
  preferredPace: nullableText2(),
  physicalAffection: nullableText2(),
  likelyTurnOns: list(text3()),
  likelyTurnOffs: list(text3()),
  experimentationStyle: nullableText2(),
  emotionalSexConnection: nullableText2(),
  controlAndSurrender: nullableText2(),
  powerDynamics: nullableText2(),
  exclusivityPattern: nullableText2(),
  sexualCommunication: nullableText2(),
  likelyFrustrations: list(text3())
});
var career = (allowed) => object({
  ...sectionProperties(allowed),
  vocationalThemes: list(text3()),
  suitableFields: list(text3()),
  preferredWorkEnvironment: nullableText2(),
  leadershipStyle: nullableText2(),
  authorityRelationship: nullableText2(),
  ambitionPattern: nullableText2(),
  publicReputation: nullableText2(),
  careerStrengths: list(text3()),
  careerRisks: list(text3())
});
var money = (allowed) => object({
  ...sectionProperties(allowed),
  earningStyle: nullableText2(),
  spendingStyle: nullableText2(),
  securityNeeds: nullableText2(),
  riskTolerance: nullableText2(),
  materialStrengths: list(text3()),
  financialBlindSpots: list(text3())
});
var synthesis = (allowed) => object({
  centralThemes: list(text3()),
  contradictions: list(text3()),
  gifts: list(text3()),
  growthEdges: list(text3()),
  narrative: text3(),
  sourceRefs: refs2(allowed)
});
var compatibilityOverview = (allowed) => object({
  overview: text3(),
  sourceRefs: refs2(allowed)
});
var signCompatibility = (sign, allowed) => object({
  sign: literal(sign),
  summary: text3(),
  dynamic: text3(),
  strengths: list(text3()),
  tensions: list(text3()),
  attraction: nullableText2(),
  sustainability: nullableText2(),
  bestExpression: text3(),
  sourceRefs: refs2(allowed)
});
var crossSystem = (allowed) => object({
  sharedThemes: list(text3()),
  tropicalEmphasis: list(text3()),
  siderealEmphasis: list(text3()),
  apparentContradictions: list(text3()),
  reconciliations: list(text3()),
  synthesis: text3(),
  sourceRefs: refs2(allowed)
});
var finalSynthesis = (allowed) => object({
  essence: text3(),
  definingThemes: list(text3()),
  strongestAssets: list(text3()),
  recurringTensions: list(text3()),
  relationshipPattern: text3(),
  sexualPattern: text3(),
  friendshipPattern: text3(),
  vocationalPattern: text3(),
  moneyPattern: text3(),
  developmentalArc: text3(),
  closingPortrait: text3(),
  sourceRefs: refs2(allowed)
});
var safeName2 = (id) => id.replaceAll(/[^A-Za-z0-9_-]/gu, "_").slice(0, 64);
var expectedSign = (id) => {
  const value = id.split(".").at(-1);
  if (!value || !signs4.includes(value)) {
    throw new Error(
      `Compatibility unit ${id} has no valid sign`
    );
  }
  return value;
};
var shapeForUnit = (unit2, allowedSourceRefs = unit2.allowedSourceRefs) => {
  const name = safeName2(unit2.id);
  switch (unit2.section) {
    case "life.romance":
      return strictShape(
        name,
        romance(allowedSourceRefs),
        parseRomanticInterpretation
      );
    case "life.sexuality":
      return strictShape(
        name,
        sexuality(allowedSourceRefs),
        parseSexualInterpretation
      );
    case "life.careerAndVocation":
      return strictShape(
        name,
        career(allowedSourceRefs),
        parseCareerInterpretation
      );
    case "life.moneyAndMaterialSecurity":
      return strictShape(
        name,
        money(allowedSourceRefs),
        parseMoneyInterpretation
      );
    case "synthesis":
      return strictShape(
        name,
        synthesis(allowedSourceRefs),
        parseSystemSynthesis
      );
    case "compatibility.overview":
      return strictShape(
        name,
        compatibilityOverview(allowedSourceRefs),
        parseCompatibilityOverview
      );
    case "compatibility.sign": {
      const sign = expectedSign(unit2.id);
      return strictShape(
        name,
        signCompatibility(sign, allowedSourceRefs),
        (value) => parseSignCompatibility(value, sign)
      );
    }
    case "crossSystem":
      return strictShape(
        name,
        crossSystem(allowedSourceRefs),
        parseCrossSystem
      );
    case "finalSynthesis":
      return strictShape(
        name,
        finalSynthesis(allowedSourceRefs),
        parseFinalSynthesis
      );
    default:
      return sectionShape2(name, allowedSourceRefs);
  }
};

// src/interpretation/voice/profile.ts
var interpretationVoiceProfile = {
  id: "astral-interpretive-voice/1.0.0",
  semanticRegister: [
    "The semantic register is private, non-user-facing meaning supplied by the corpus compiler.",
    "Its propositions describe permitted concepts, not sentences to copy, quote or stylistically imitate.",
    "Corpus atom IDs, claim IDs, provenance, calculation variants and operator names are implementation data rather than prose.",
    "Traditional technical names may identify an astrological factor, but their wording never licenses metaphysical implications beyond the supplied neutral propositions."
  ],
  interpretiveVoice: [
    "Address the chart owner directly in clear second-person language.",
    "Lead with human meaning and use astrological terminology only when it adds useful orientation.",
    "Write with calm precision, emotional literacy and ordinary contemporary language rather than theatrical, mystical or devotional language.",
    "Describe tendencies, patterns, tensions, choices and possible expressions rather than fixed traits, commands or predictions.",
    "Keep strengths and difficulties proportionate. Avoid flattery, moral judgement and manufactured drama.",
    "Remain non-characterful: do not speak as a named astrologer, narrator, oracle or spiritual authority, and do not use first-person opinions as a substitute for evidence.",
    "When the output language is English, prefer natural British English without making the prose mannered."
  ],
  separationContract: [
    "There are two language layers and they must never merge.",
    "SEMANTIC REGISTER supplies what may be said. INTERPRETIVE VOICE controls how it is said.",
    "Never quote, paraphrase closely, imitate or preserve distinctive wording from semantic propositions or source passages merely because it appears in the input.",
    "Never expose corpus structure, atom names, claim IDs, provenance IDs, source document structure, compiler terminology or internal calculation identifiers in user-facing prose.",
    "Never let wording from a source override the interpretation voice, worldview-neutrality policy or epistemic style.",
    "Do not add a concept because it suits the prose voice. If the semantic input does not support it, omit it."
  ],
  avoid: [
    "mystical filler",
    "religious or spiritual authority",
    "fate, destiny or cosmic intention",
    "source-author imitation",
    "textbook or catalogue voice",
    "first-person astrologer commentary",
    "machine identifiers",
    "explanations of the corpus or compiler",
    "certainty language that turns symbolic interpretation into causal fact"
  ]
};
var lines = (title, values) => [
  title,
  ...values.map((value) => `- ${value}`)
];
var semanticRegisterContract = () => [
  ...lines("SEMANTIC REGISTER:", interpretationVoiceProfile.semanticRegister),
  ...lines("SEPARATION CONTRACT:", interpretationVoiceProfile.separationContract)
].join("\n");
var interpretiveVoiceContract = () => [
  ...lines("INTERPRETIVE VOICE:", interpretationVoiceProfile.interpretiveVoice),
  ...lines("AVOID:", interpretationVoiceProfile.avoid)
].join("\n");

// src/llm/orchestrate/prompt.ts
var worldviewNeutralityRules = [
  "Keep every interpretation religiously and metaphysically agnostic.",
  "Do not assume, assert or imply belief in God or gods, divine will, providence, prayer, angels, demons, heaven, hell, salvation or religious doctrine.",
  "Do not assume, assert or imply souls, soul contracts, soul purpose, karma, karmic debt, past lives, reincarnation or spiritual obligations.",
  "Do not describe people, relationships or events as fated, destined, predestined, meant to be or cosmically required.",
  "Do not give the universe, cosmos, life or any unnamed external force intentions such as wanting, teaching, sending, placing, guiding or choosing events for the person.",
  "Do not invoke supernatural intervention, divine purpose, cosmic plans, sacred callings, spiritual missions or metaphysical causes.",
  "Technical astrological proper names such as Part of Spirit may remain as names only; never infer a religious or spiritual claim from the name.",
  "Use psychologically and experientially neutral language that a religious, non-religious or uncertain reader could all read without accepting a metaphysical premise.",
  "Treat astrology as an interpretive symbolic framework: prefer wording such as can describe, may suggest, is associated with or astrologically points towards, and do not claim that a placement literally causes a trait or event."
];
var baseInterpretationRules = [
  "Return only the strict schema.",
  "Fill every required field.",
  "Write the final astrological interpretation directly.",
  "Do not narrate reasoning or announce work.",
  "Do not mention instructions, prompts, schemas, tools, APIs or being an AI.",
  "Do not add disclaimers, safety boilerplate or unrelated advice.",
  "Use only the supplied deterministic astrology and permitted references.",
  "Keep tropical and sidereal factors distinct.",
  "Do not change supplied scores, ranks, levels, relations or availability.",
  "Astrology has no named astrologer, narrator, oracle or character voice. Do not use first-person opinion or pretend to be a speaker inside the interpretation.",
  "Treat any corpus or semantic material as private meaning input, not as wording or a style sample.",
  ...worldviewNeutralityRules
];
var refinedInterpretationRules = [
  "Interpret exactly one requested unit and keep every schema property semantically distinct.",
  "Complete every required property before returning the response.",
  "Do not infer unavailable values, invent calculations or weaken any earlier rule."
];
var humanFirstInterpretationRules = [
  "Write to the person, not about the chart.",
  "Lead substantive narrative with direct second-person language such as you and your.",
  "Do not lead a narrative sentence with a planet, sign, house, aspect, placement, calculation or astrological label.",
  "Treat astrological factors as supporting evidence, not as the grammatical subject of the interpretation.",
  "Translate astrology into ordinary personal language and avoid technical catalogue-style prose.",
  "Mention technical factors briefly only when they genuinely clarify why the interpretation applies.",
  "Keep every field concise, complete and focused on its own semantic purpose.",
  "Do not repeat the same chart evidence or conclusion across neighbouring fields.",
  "Never place sourceRefs or internal JSON paths inside narrative prose; references belong exclusively in sourceRefs."
];
var completionInterpretationRules = [
  "Complete the entire schema before adding optional detail.",
  "Use one or two complete sentences for ordinary narrative properties unless the schema clearly needs more.",
  "Keep summary fields to one or two complete sentences and detail fields to several focused sentences.",
  "Keep list entries short, independent and complete.",
  "Do not spend most of the response elaborating early properties or omit later properties.",
  "Finish every sentence, clause and list entry naturally.",
  "Before returning, verify that every required property is present and no text ends midway through a thought."
];
var directInterpretationRules = [
  ...baseInterpretationRules,
  ...refinedInterpretationRules,
  ...humanFirstInterpretationRules,
  ...completionInterpretationRules
];
var sectionPrompt = (task2, refinements = []) => [
  task2.trim(),
  "",
  ...directInterpretationRules,
  "",
  semanticRegisterContract(),
  "",
  interpretiveVoiceContract(),
  ...refinements
].join("\n");

// src/llm/orchestrate/audit.ts
var auditSection = (section2, calculation, allowed, profile) => {
  const errors = [];
  const summary = section2.summary === null ? null : auditField(section2.summary, { ...profile, id: `${profile.id}.summary` });
  const detail2 = section2.detail === null ? null : auditField(section2.detail, { ...profile, id: `${profile.id}.detail` });
  const themes = auditList(section2.themes, { ...profile, id: `${profile.id}.themes`, minLength: 3 });
  const strengths = auditList(section2.strengths, { ...profile, id: `${profile.id}.strengths`, minLength: 3 });
  const tensions = auditList(section2.tensions, { ...profile, id: `${profile.id}.tensions`, minLength: 3 });
  if (summary && !summary.valid) errors.push(...summary.issues.map((issue) => issue.message));
  if (detail2 && !detail2.valid) errors.push(...detail2.issues.map((issue) => issue.message));
  for (const result of [themes, strengths, tensions]) {
    if (!result.valid) errors.push(...result.issues.map((issue) => issue.message));
  }
  if (!refsValid(calculation, section2.sourceRefs, allowed)) errors.push(`${profile.id} contains invalid source references`);
  const unique2 = [...new Set(errors)];
  const needsRepair = unique2.length > 0;
  return {
    valid: !needsRepair,
    value: {
      ...section2,
      summary: summary?.value ?? null,
      detail: detail2?.value ?? null,
      themes: themes.values,
      strengths: strengths.values,
      tensions: tensions.values
    },
    errors: unique2,
    soft: needsRepair,
    ...needsRepair ? { repair: "audit" } : {}
  };
};

// src/llm/orchestrate/unit.ts
var sectionUnit = (input2) => {
  const allowed = new Set(input2.refs);
  return {
    id: input2.id,
    label: input2.label,
    kind: input2.kind ?? "big",
    shape: sectionShape(input2.id),
    allowedSourceRefs: allowed,
    input: ({ earlier, correction }) => ({
      instructions: sectionPrompt(input2.task),
      deterministicData: input2.data,
      permittedSourceRefs: input2.refs,
      earlierConclusions: earlier,
      ...correction.length === 0 ? {} : {
        correction: {
          instruction: "Correct only the rejected fields, preserve valid content and return the same strict schema.",
          auditFailures: correction
        }
      }
    }),
    audit: (value, { calculation }) => auditSection(value, calculation, allowed, input2.profile)
  };
};

// src/llm/reconstruct/catalogue.ts
var fallbackCatalogue = {
  section: {
    title: "{topic}",
    summary: "You may experience {topicLower} through a mixture of steady strengths and changing pressures.",
    detail: "You can understand {topicLower} by noticing what stays consistent, what changes with circumstance and where deliberate choices help you respond more effectively.",
    themes: "You may notice recurring patterns in {topicLower} that become clearer through experience.",
    strengths: "You can draw on self-awareness and adaptability in this area.",
    tensions: "You may need to balance competing needs without forcing a single response."
  },
  romance: {
    title: "Romance",
    summary: "You may approach romance by balancing emotional openness with a realistic sense of pace and trust.",
    detail: "You can build more satisfying relationships when attraction, communication and emotional safety are allowed to develop together.",
    themes: "You may repeatedly explore how closeness and independence can support one another.",
    strengths: "You can bring sincerity and growing self-awareness into romantic bonds.",
    tensions: "You may need to avoid treating temporary uncertainty as a final judgement on a relationship.",
    affectionStyle: "You may express affection most naturally through consistent attention, warmth and responsiveness.",
    courtshipStyle: "You may prefer courtship that develops through clear interest, mutual effort and enough time to recognise genuine compatibility.",
    attachmentNeeds: "You may feel safest when closeness is dependable without becoming restrictive.",
    preferredPartnerQualities: "You may value a partner who communicates honestly, respects boundaries and responds with emotional maturity.",
    relationshipStrengths: "You can strengthen relationships through loyalty, reflection and willingness to adjust.",
    relationshipDifficulties: "You may struggle when expectations remain unspoken or when reassurance and autonomy feel difficult to balance.",
    commitmentPattern: "You may commit most fully when trust has been demonstrated through consistent actions rather than promises alone."
  },
  sexuality: {
    title: "Sexuality",
    summary: "You may experience sexuality as a personal balance of desire, trust, communication and changing emotional context.",
    detail: "You can develop a more satisfying intimate life by recognising your own pace, communicating boundaries clearly and allowing mutual responsiveness to guide the connection.",
    themes: "You may repeatedly explore how desire and emotional safety influence one another.",
    strengths: "You can bring curiosity, self-awareness and honest communication into intimacy.",
    tensions: "You may need to balance immediate desire with the pace required for trust and mutual comfort.",
    desireStyle: "Your desire may become clearest when interest feels mutual, direct and emotionally safe.",
    libidoPattern: "Your level of desire may vary with stress, trust, novelty and the quality of emotional connection.",
    initiationStyle: "You may initiate most comfortably when signals are clear and mutual enthusiasm is easy to recognise.",
    preferredPace: "You may prefer a pace that feels responsive rather than rushed or mechanically fixed.",
    physicalAffection: "You may value physical affection that communicates attention, reassurance and genuine presence.",
    likelyTurnOns: "You may respond positively to mutual confidence, clear consent and attentive communication.",
    likelyTurnOffs: "You may withdraw when pressure, ambiguity or disregard for boundaries disrupts trust.",
    experimentationStyle: "You may explore new experiences most comfortably when curiosity is shared and boundaries remain explicit.",
    emotionalSexConnection: "You may find intimacy more meaningful when emotional understanding supports physical attraction.",
    controlAndSurrender: "You may prefer control and surrender to remain negotiated, reversible and grounded in trust.",
    powerDynamics: "You may engage with power dynamics best when both people communicate expectations and preserve mutual respect.",
    exclusivityPattern: "Your preferences around exclusivity may depend on trust, clarity and whether agreements feel genuinely mutual.",
    sexualCommunication: "You can strengthen intimacy by naming preferences, limits and changes in comfort directly.",
    likelyFrustrations: "You may feel frustrated when desire, pace or expectations are assumed instead of discussed."
  },
  career: {
    title: "Career and vocation",
    summary: "You may build a satisfying career by combining practical competence with work that feels personally meaningful.",
    detail: "You can make stronger vocational choices when you consider both your natural working style and the environment in which your abilities are most consistently supported.",
    themes: "You may repeatedly evaluate how ambition, purpose and sustainable effort fit together.",
    strengths: "You can contribute through adaptability, persistence and increasing clarity about your priorities.",
    tensions: "You may need to balance achievement with realistic limits and long-term wellbeing.",
    vocationalThemes: "You may be drawn towards work that rewards learning, responsibility and visible contribution.",
    suitableFields: "You may do well in fields that value judgement, communication, analysis or dependable problem-solving.",
    preferredWorkEnvironment: "You may work best where expectations are clear, autonomy is respected and useful feedback is available.",
    leadershipStyle: "You may lead most effectively through clarity, consistency and willingness to listen before deciding.",
    authorityRelationship: "You may respond best to authority that is competent, transparent and accountable.",
    ambitionPattern: "Your ambition may strengthen when progress feels purposeful and achievable rather than purely competitive.",
    publicReputation: "You may become known for the qualities you demonstrate consistently, especially reliability and thoughtful effort.",
    careerStrengths: "You can build professional trust through preparation, adaptability and follow-through.",
    careerRisks: "You may need to avoid overcommitting or remaining in work that no longer supports growth."
  },
  money: {
    title: "Money and material security",
    summary: "You may approach money by balancing immediate needs, long-term security and the freedom to adapt.",
    detail: "You can strengthen material stability by making priorities explicit, reviewing habits regularly and separating emotional reactions from practical decisions.",
    themes: "You may repeatedly consider how security, value and personal freedom influence financial choices.",
    strengths: "You can improve financial stability through awareness, planning and willingness to adjust.",
    tensions: "You may need to balance caution with the confidence to use resources constructively.",
    earningStyle: "You may earn most reliably through consistent skills, useful contribution and relationships built on trust.",
    spendingStyle: "Your spending may reflect both practical priorities and the emotional meaning attached to comfort or freedom.",
    securityNeeds: "You may feel more secure when essential commitments are covered and future choices remain possible.",
    riskTolerance: "Your tolerance for risk may change according to preparation, available reserves and confidence in the underlying plan.",
    materialStrengths: "You can build security through planning, adaptability and realistic assessment of resources.",
    financialBlindSpots: "You may overlook how stress, urgency or optimism can temporarily distort financial judgement."
  },
  synthesis: {
    centralThemes: "You may recognise a recurring need to balance self-expression, responsibility and adaptation.",
    contradictions: "You may sometimes want certainty while also needing room to change direction.",
    gifts: "You can draw on self-awareness, resilience and the ability to learn from experience.",
    growthEdges: "You may grow by responding deliberately instead of treating every tension as something that must be resolved immediately.",
    narrative: "Your chart can be read as a developing pattern rather than a fixed verdict. You may become more effective as you recognise recurring strengths, accept genuine tensions and choose how to express them in context."
  },
  "compatibility-overview": {
    overview: "You may experience this compatibility area differently with each person, with communication, maturity and shared expectations shaping how the underlying pattern develops."
  },
  "compatibility-sign": {
    summary: "You may find a workable connection with {sign} when both people communicate clearly and allow differences to develop at a realistic pace.",
    dynamic: "You may experience a connection that combines natural understanding with differences requiring patience, negotiation and context.",
    strengths: "You may support one another through complementary perspectives and willingness to adapt.",
    tensions: "You may experience friction when assumptions replace direct communication.",
    attraction: "You may find attraction grows through curiosity, mutual respect and clear responsiveness.",
    sustainability: "You may find the connection becomes more sustainable when expectations are explicit and both people adjust in good faith.",
    bestExpression: "You may find this connection works best when both people preserve individuality while building dependable ways to cooperate."
  },
  "final-synthesis": {
    essence: "You may be understood as a person whose strengths become clearest through self-awareness, adaptation and deliberate choice.",
    definingThemes: "You may repeatedly balance independence, connection, responsibility and personal growth.",
    strongestAssets: "You can draw on resilience, reflection and the ability to learn from changing circumstances.",
    recurringTensions: "You may encounter tension when different needs compete for attention at the same time.",
    relationshipPattern: "You may build stronger relationships through honest communication, dependable boundaries and realistic expectations.",
    sexualPattern: "You may experience intimacy most constructively when desire, trust and communication remain connected.",
    friendshipPattern: "You may value friendships that allow both loyalty and enough freedom for each person to remain authentic.",
    vocationalPattern: "You may work best when practical contribution and personal meaning reinforce one another.",
    moneyPattern: "You may strengthen material security through clear priorities, regular review and adaptable planning.",
    developmentalArc: "Your development may involve turning recurring tensions into more conscious choices rather than fixed limitations.",
    closingPortrait: "Your chart suggests a developing person rather than a finished definition. You may become most fully yourself by recognising what is consistent, adapting where circumstances change and choosing how your strengths are expressed."
  },
  "generated-name": {
    value: "Cosmic-pattern-portrait"
  }
};

// src/llm/reconstruct/semantic.ts
var machineLike = /(?:#\/|\b(?:claim|atom|source|calculation|variant|corpus|schema|json)\b|^[a-z]+(?:[._][a-z0-9_-]+)+$)/iu;
var cleanConcept = (raw2) => {
  const value = raw2.replaceAll("_", " ").replaceAll(/\s+/gu, " ").trim();
  if (value.length < 2 || value.length > 80 || machineLike.test(value)) return null;
  const worldview = auditWorldviewText(value);
  return worldview.safe && !worldview.requiresReview ? value : null;
};
var bucket = (map, names) => names.flatMap((name) => map.semantics[name]);
var concepts = (map, names) => {
  const tags = bucket(map, names).flatMap(({ tags: tags2 }) => tags2).map(cleanConcept).filter((value) => value !== null);
  const unique2 = [...new Set(tags.map((value) => value.toLocaleLowerCase("en-GB")))];
  if (unique2.length > 0) return unique2.slice(0, 4);
  const domain2 = cleanConcept(map.subject.plainEnglishDomain);
  return domain2 === null ? [] : [domain2];
};
var phrase = (values) => {
  if (values.length === 0) return "the patterns described here";
  if (values.length === 1) return values[0];
  if (values.length === 2) return `${values[0]} and ${values[1]}`;
  return `${values.slice(0, -1).join(", ")}, and ${values.at(-1)}`;
};
var thematic = /* @__PURE__ */ new Set([
  "themes",
  "centralThemes",
  "definingThemes",
  "vocationalThemes"
]);
var constructive = /* @__PURE__ */ new Set([
  "strengths",
  "gifts",
  "strongestAssets",
  "relationshipStrengths",
  "careerStrengths",
  "materialStrengths",
  "bestExpression"
]);
var difficult = /* @__PURE__ */ new Set([
  "tensions",
  "contradictions",
  "growthEdges",
  "recurringTensions",
  "relationshipDifficulties",
  "careerRisks",
  "financialBlindSpots",
  "likelyFrustrations"
]);
var detail = /* @__PURE__ */ new Set([
  "detail",
  "narrative",
  "dynamic",
  "sustainability"
]);
var specialised = (key, meaning) => {
  switch (key) {
    case "affectionStyle":
      return `You may express affection through ${meaning}, with context shaping which form feels most natural.`;
    case "courtshipStyle":
      return `You may approach early romantic connection through ${meaning}, while allowing mutual interest to develop at a workable pace.`;
    case "attachmentNeeds":
      return `You may feel more secure in close relationships when ${meaning} can be expressed without crowding out other needs.`;
    case "preferredPartnerQualities":
      return `You may value partners who can engage constructively with ${meaning}.`;
    case "commitmentPattern":
      return `You may approach commitment by finding a sustainable balance around ${meaning}.`;
    case "desireStyle":
      return `Your desire may be shaped by ${meaning}, with its expression changing according to context and trust.`;
    case "libidoPattern":
      return `Your level of desire may shift with ${meaning} rather than following one fixed pattern.`;
    case "initiationStyle":
      return `You may feel most comfortable initiating intimacy when there is enough room for ${meaning} to be expressed clearly and mutually.`;
    case "preferredPace":
      return `You may prefer an intimate pace that gives ${meaning} enough room to develop without pressure.`;
    case "physicalAffection":
      return `You may experience physical affection most naturally through ${meaning}.`;
    case "likelyTurnOns":
      return `You may respond positively when ${meaning} is present in a mutually wanted interaction.`;
    case "likelyTurnOffs":
      return `You may lose interest when the difficult side of ${meaning} begins to undermine comfort, trust or responsiveness.`;
    case "experimentationStyle":
      return `You may explore novelty most comfortably when ${meaning} can be approached deliberately and with clear boundaries.`;
    case "emotionalSexConnection":
      return `You may experience emotional and sexual connection as strongest when ${meaning} can coexist with trust and direct communication.`;
    case "controlAndSurrender":
      return `You may approach control and surrender by keeping ${meaning} compatible with explicit choice, trust and reversibility.`;
    case "powerDynamics":
      return `You may engage with power dynamics most constructively when ${meaning} remains compatible with mutual respect and clear agreement.`;
    case "exclusivityPattern":
      return `Your preferences around exclusivity may be influenced by ${meaning}, especially when expectations are made explicit.`;
    case "sexualCommunication":
      return `You may communicate about intimacy most effectively when you can name how ${meaning} affects your preferences and boundaries.`;
    case "vocationalThemes":
      return `You may repeatedly encounter vocational themes involving ${meaning}.`;
    case "suitableFields":
      return `You may be drawn towards work that gives constructive expression to ${meaning}.`;
    case "preferredWorkEnvironment":
      return `You may work best in environments that give ${meaning} a practical and sustainable outlet.`;
    case "leadershipStyle":
      return `You may lead most effectively when ${meaning} is expressed deliberately rather than automatically.`;
    case "authorityRelationship":
      return `Your response to authority may be shaped by how well it accommodates ${meaning}.`;
    case "ambitionPattern":
      return `Your ambition may become clearer when ${meaning} is connected to goals you can pursue deliberately.`;
    case "publicReputation":
      return `You may become known for the way you consistently express ${meaning} in visible situations.`;
    case "earningStyle":
      return `Your earning style may be strongest when ${meaning} can be translated into useful and repeatable contribution.`;
    case "spendingStyle":
      return `Your spending choices may reflect how you balance ${meaning} with practical priorities.`;
    case "securityNeeds":
      return `You may feel materially safer when your approach to ${meaning} leaves enough room for stability and future choice.`;
    case "riskTolerance":
      return `Your tolerance for material risk may change according to how confidently you can manage ${meaning}.`;
    case "attraction":
      return `You may find attraction develops through ${meaning}, with mutual responsiveness determining how strongly it grows.`;
    case "relationshipPattern":
      return `You may experience close relationships through themes of ${meaning}, with communication and context shaping their expression.`;
    case "sexualPattern":
      return `You may experience intimacy through themes of ${meaning}, with consent, trust and communication shaping their expression.`;
    case "friendshipPattern":
      return `You may experience friendship through themes of ${meaning}, especially where expectations and independence can be discussed openly.`;
    case "vocationalPattern":
      return `You may experience work through themes of ${meaning}, with environment and responsibility shaping how they are expressed.`;
    case "moneyPattern":
      return `You may approach material choices through themes of ${meaning}, with planning and context helping you decide how to respond.`;
    case "developmentalArc":
      return `You may develop through a more conscious and flexible relationship with ${meaning}.`;
    case "closingPortrait":
      return `You may become more effective as you recognise how ${meaning} appears in different contexts and choose your response deliberately.`;
    default:
      return null;
  }
};
var safeMapOwnedFallback = (map, key) => {
  if (key === "title") return map.subject.title;
  const domain2 = cleanConcept(map.subject.plainEnglishDomain) ?? cleanConcept(map.subject.title) ?? "this chart pattern";
  return `You may notice ${domain2} becoming relevant here, with context shaping how you choose to respond.`;
};
var semanticFallbackText = (map, key) => {
  if (key === "title") return map.subject.title;
  const buckets = constructive.has(key) ? ["strengths", "core", "themes"] : difficult.has(key) ? ["tensions", "detail", "themes"] : thematic.has(key) ? ["themes", "core", "detail"] : ["core", "detail", "themes", "strengths", "tensions"];
  const meaning = phrase(concepts(map, buckets));
  let value;
  const specific = specialised(key, meaning);
  if (specific !== null) {
    value = specific;
  } else if (constructive.has(key)) {
    value = `You may use ${meaning} as constructive resources when you act deliberately and stay responsive to context.`;
  } else if (difficult.has(key)) {
    value = `You may need to balance ${meaning}, especially when one tendency starts to crowd out other needs.`;
  } else if (thematic.has(key)) {
    value = `You may repeatedly notice themes involving ${meaning}.`;
  } else if (detail.has(key)) {
    value = `You may experience ${meaning} differently across situations; deliberate choices can help you decide which expression fits the context best.`;
  } else if (key === "essence" || key === "summary" || key === "overview") {
    value = `You may notice ${meaning} as a recurring part of this area of your life.`;
  } else {
    value = `You may notice ${meaning} becoming relevant here, with circumstances shaping how you choose to express it.`;
  }
  const worldview = auditWorldviewText(value);
  if (worldview.safe && !worldview.requiresReview) return value;
  const fallback = safeMapOwnedFallback(map, key);
  const fallbackAudit = auditWorldviewText(fallback);
  if (fallbackAudit.safe && !fallbackAudit.requiresReview) return fallback;
  return `You may notice ${map.subject.plainEnglishDomain} in this part of your experience.`;
};

// src/llm/reconstruct/reconstruct.ts
var record8 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var human = (value) => value.replaceAll(/([a-z])([A-Z])/gu, "$1 $2").replaceAll(/[._-]+/gu, " ").replaceAll(/\s+/gu, " ").trim();
var topicFor = (unit2) => {
  const label2 = human(unit2.label);
  if (label2.length > 0) return label2;
  return human(unit2.id) || "this part of your chart";
};
var schemaProperties = (schema2) => {
  const value = schema2["properties"];
  if (!record8(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter((entry2) => record8(entry2[1]))
  );
};
var familyFor = (unit2) => {
  if (unit2.id === "generated-name") return "generated-name";
  const fields = new Set(Object.keys(schemaProperties(unit2.shape.schema)));
  if (fields.has("closingPortrait")) return "final-synthesis";
  if (fields.has("bestExpression")) return "compatibility-sign";
  if (fields.size === 2 && fields.has("overview") && fields.has("sourceRefs")) return "compatibility-overview";
  if (fields.has("centralThemes") && fields.has("narrative")) return "synthesis";
  if (fields.has("desireStyle")) return "sexuality";
  if (fields.has("affectionStyle")) return "romance";
  if (fields.has("vocationalThemes")) return "career";
  if (fields.has("earningStyle")) return "money";
  return "section";
};
var constString = (schema2) => typeof schema2["const"] === "string" ? schema2["const"] : null;
var enumString = (schema2) => {
  const values = schema2["enum"];
  if (!Array.isArray(values)) return null;
  return values.find((value) => typeof value === "string") ?? null;
};
var nullable = (schema2) => {
  const variants = schema2["anyOf"];
  return Array.isArray(variants) && variants.some((variant) => record8(variant) && variant["type"] === "null");
};
var valueType = (schema2) => typeof schema2["type"] === "string" ? schema2["type"] : null;
var stripProcessNarration = (value) => value.replaceAll(/(?:^|(?<=[.!?]\s))(?:I (?:will|shall|can|am going to)|Here (?:is|are)|This (?:analysis|interpretation|response)|The supplied (?:JSON|data)|Based on the supplied (?:JSON|data))[^.!?]*(?:[.!?]|$)\s*/giu, "").replaceAll(/#\/[A-Za-z0-9_./~\-]+/gu, "").replaceAll(/\s+/gu, " ").trim();
var incompleteEnding = /(?:\b(?:and|or|but|because|although|while|which|that|when|where|with|to|of|for|from|through|by|as)|[,;:\-–—])\s*$/iu;
var lastCompleteSentence = (value) => {
  const matches = [...value.matchAll(/[^.!?]+[.!?](?=\s|$)/gu)];
  return matches.at(-1)?.[0]?.trim() ?? "";
};
var directAddress = (value) => {
  if (/\b(?:you|your|yourself)\b/iu.test(value)) return value;
  if (/^(?:the|this|that|a|an|difficulty|strength|tension|attraction|compatibility|desire|career|money|romance|intimacy)\b/iu.test(value)) {
    const first = value.charAt(0).toLocaleLowerCase();
    return `You may find that ${first}${value.slice(1)}`;
  }
  return `You may experience ${value.charAt(0).toLocaleLowerCase()}${value.slice(1)}`;
};
var cleanText = (raw2, key) => {
  if (typeof raw2 !== "string") return null;
  let value = stripProcessNarration(raw2);
  if (value.length === 0) return null;
  const worldview = auditWorldviewText(value);
  if (!worldview.safe || worldview.requiresReview) return null;
  if (incompleteEnding.test(value)) value = lastCompleteSentence(value);
  if (value.length === 0) return null;
  if (key !== "title" && key !== "value" && key !== "sign" && !value.startsWith("#/")) {
    value = directAddress(value);
  }
  if (key !== "title" && key !== "value" && key !== "sign" && !/[.!?]$/u.test(value)) value += ".";
  return value;
};
var fallbackText = (family2, key, unit2, schema2) => {
  const familyFields = fallbackCatalogue[family2];
  const commonFields = fallbackCatalogue.section;
  const raw2 = familyFields[key] ?? commonFields[key] ?? (key === "title" ? "{topic}" : "You may approach {topicLower} with growing awareness and flexibility.");
  const topic = topicFor(unit2);
  const sign = constString(schema2) ?? human(unit2.id.split(".").at(-1) ?? "this sign");
  return raw2.replaceAll("{topicLower}", topic.toLocaleLowerCase()).replaceAll("{topic}", topic).replaceAll("{sign}", sign.charAt(0).toLocaleUpperCase() + sign.slice(1));
};
var allowedRefs = (unit2) => [...unit2.allowedSourceRefs];
var validRef = (value, unit2) => typeof value === "string" && unit2.allowedSourceRefs.has(value);
var minItems = (schema2) => typeof schema2["minItems"] === "number" && Number.isSafeInteger(schema2["minItems"]) ? Math.max(0, schema2["minItems"]) : 0;
var maxItems = (schema2) => typeof schema2["maxItems"] === "number" && Number.isSafeInteger(schema2["maxItems"]) ? Math.max(0, schema2["maxItems"]) : null;
var scalarFallback = (state2, key, schema2) => {
  state2.fallbackFields.add(key);
  if (state2.unit.semanticMap !== void 0) {
    const semantic = semanticFallbackText(state2.unit.semanticMap, key);
    if (semantic !== null) return semantic;
    state2.warnings.push(`Semantic reconstruction had no safe rendering for ${key}; XML fallback used`);
  }
  state2.usedXmlFallback = true;
  return fallbackText(state2.family, key, state2.unit, schema2);
};
var buildString = (state2, key, schema2, values) => {
  const constant = constString(schema2);
  if (constant !== null) return constant;
  const permitted = schema2["enum"];
  if (Array.isArray(permitted)) {
    const candidate = values.find((value) => typeof value === "string" && permitted.includes(value));
    if (typeof candidate === "string") return candidate;
    const selected = enumString(schema2);
    if (selected !== null) {
      state2.fallbackFields.add(key);
      return selected;
    }
  }
  if (!state2.forceFields.has(key)) {
    for (const value of values) {
      const cleaned = cleanText(value, key);
      if (cleaned !== null) return cleaned;
    }
  }
  return scalarFallback(state2, key, schema2);
};
var buildArray = (state2, key, schema2, values) => {
  const itemSchema = record8(schema2["items"]) ? schema2["items"] : { type: "string" };
  if (key === "sourceRefs") {
    const refs3 = values.flatMap((value) => Array.isArray(value) ? value : []).filter((value) => validRef(value, state2.unit));
    const unique2 = [...new Set(refs3)];
    if (unique2.length > 0 && !state2.forceFields.has(key)) return unique2;
    const fallback = allowedRefs(state2.unit).slice(0, Math.max(1, minItems(schema2)));
    if (fallback.length > 0) {
      state2.fallbackFields.add(key);
      return fallback;
    }
    return [];
  }
  const output = [];
  if (!state2.forceFields.has(key)) {
    for (const raw2 of values) {
      if (!Array.isArray(raw2)) continue;
      for (const item of raw2) {
        if (valueType(itemSchema) === "string" || nullable(itemSchema)) {
          const cleaned = cleanText(item, key);
          if (cleaned !== null && !output.includes(cleaned)) output.push(cleaned);
        } else if (record8(item)) {
          output.push(item);
        }
      }
      if (output.length > 0) break;
    }
  }
  const minimum = Math.max(1, minItems(schema2));
  while (output.length < minimum) {
    output.push(scalarFallback(state2, key, itemSchema));
  }
  const maximum = maxItems(schema2);
  return maximum === null ? output : output.slice(0, maximum);
};
var buildValue = (state2, key, schema2, values) => {
  const type = valueType(schema2);
  if (type === "object") {
    const properties = schemaProperties(schema2);
    const objects = values.filter(record8);
    return Object.fromEntries(Object.entries(properties).map(([child, childSchema]) => [
      child,
      buildValue(state2, child, childSchema, objects.flatMap((value) => child in value ? [value[child]] : []))
    ]));
  }
  if (type === "array") return buildArray(state2, key, schema2, values);
  if (type === "string") return buildString(state2, key, schema2, values);
  if (nullable(schema2)) {
    const cleaned = state2.forceFields.has(key) ? null : values.map((value) => cleanText(value, key)).find((value) => value !== null);
    return cleaned ?? scalarFallback(state2, key, schema2);
  }
  state2.warnings.push(`Unsupported reconstruction schema at ${key}`);
  return scalarFallback(state2, key, schema2);
};
var absoluteValue = (unit2, family2, key, schema2) => {
  const constant = constString(schema2);
  if (constant !== null) return constant;
  const selected = enumString(schema2);
  if (selected !== null) return selected;
  const variants = schema2["anyOf"];
  if (Array.isArray(variants)) {
    const concrete = variants.find((variant) => record8(variant) && variant["type"] !== "null");
    if (record8(concrete)) return absoluteValue(unit2, family2, key, concrete);
    return null;
  }
  const type = valueType(schema2);
  if (type === "object") {
    return Object.fromEntries(Object.entries(schemaProperties(schema2)).map(([child, childSchema]) => [
      child,
      absoluteValue(unit2, family2, child, childSchema)
    ]));
  }
  if (type === "array") {
    if (key === "sourceRefs") return allowedRefs(unit2).slice(0, Math.max(1, minItems(schema2)));
    const item = record8(schema2["items"]) ? schema2["items"] : { type: "string" };
    return [absoluteValue(unit2, family2, key, item)];
  }
  if (type === "number" || type === "integer") return 0;
  if (type === "boolean") return false;
  return fallbackText(family2, key, unit2, schema2);
};
var parsed2 = (unit2, value) => {
  if (unit2.shape.parse === void 0) return value;
  try {
    return unit2.shape.parse(value);
  } catch {
    return value;
  }
};
var fieldsFromAuditErrors = (unit2, errors) => {
  const keys = Object.keys(schemaProperties(unit2.shape.schema));
  const selected = /* @__PURE__ */ new Set();
  for (const error of errors) {
    for (const key of keys) {
      if (error.includes(`.${key}`) || error.includes(`[${key}]`) || new RegExp(`\\b${key}\\b`, "u").test(error)) {
        selected.add(key);
      }
    }
  }
  return selected;
};
var reconstructUnit = ({
  unit: unit2,
  candidates,
  forceFields = /* @__PURE__ */ new Set()
}) => {
  try {
    const state2 = {
      family: familyFor(unit2),
      unit: unit2,
      candidates,
      forceFields,
      fallbackFields: /* @__PURE__ */ new Set(),
      warnings: [],
      usedXmlFallback: false
    };
    const value = buildValue(state2, unit2.id, unit2.shape.schema, candidates);
    const objectValue = record8(value) ? value : {};
    return {
      value: parsed2(unit2, objectValue),
      fallbackFields: [...state2.fallbackFields],
      warnings: state2.warnings,
      usedXmlFallback: state2.usedXmlFallback
    };
  } catch (cause) {
    const family2 = unit2.id === "generated-name" ? "generated-name" : "section";
    const value = absoluteValue(unit2, family2, unit2.id, unit2.shape.schema);
    const objectValue = record8(value) ? value : {};
    return {
      value: parsed2(unit2, objectValue),
      fallbackFields: Object.keys(schemaProperties(unit2.shape.schema)),
      warnings: [`Deterministic reconstruction recovered from an internal error: ${cause instanceof Error ? cause.message : String(cause)}`],
      usedXmlFallback: true
    };
  }
};

// src/llm/audit/worldviewDiscriminator.ts
var boolean = { type: "boolean" };
var confidence = { type: "number", minimum: 0, maximum: 1 };
var schema = {
  type: "object",
  additionalProperties: false,
  properties: {
    assumesReligion: boolean,
    assumesDeity: boolean,
    assumesDivineAgency: boolean,
    assumesSoulMetaphysics: boolean,
    assumesKarma: boolean,
    assumesReincarnation: boolean,
    assumesFate: boolean,
    assumesPredestination: boolean,
    assumesCosmicIntentionality: boolean,
    assumesSupernaturalCausation: boolean,
    couldBeReadAgnostically: boolean,
    confidence
  },
  required: [
    "assumesReligion",
    "assumesDeity",
    "assumesDivineAgency",
    "assumesSoulMetaphysics",
    "assumesKarma",
    "assumesReincarnation",
    "assumesFate",
    "assumesPredestination",
    "assumesCosmicIntentionality",
    "assumesSupernaturalCausation",
    "couldBeReadAgnostically",
    "confidence"
  ]
};
var record9 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var booleanAt = (value, key) => {
  const selected = value[key];
  if (typeof selected !== "boolean") throw new TypeError(`Worldview discriminator ${key} must be boolean`);
  return selected;
};
var parse = (value) => {
  if (!record9(value)) throw new TypeError("Worldview discriminator output must be an object");
  const rawConfidence = value["confidence"];
  if (typeof rawConfidence !== "number" || !Number.isFinite(rawConfidence) || rawConfidence < 0 || rawConfidence > 1) {
    throw new TypeError("Worldview discriminator confidence must be a number from 0 to 1");
  }
  return {
    assumesReligion: booleanAt(value, "assumesReligion"),
    assumesDeity: booleanAt(value, "assumesDeity"),
    assumesDivineAgency: booleanAt(value, "assumesDivineAgency"),
    assumesSoulMetaphysics: booleanAt(value, "assumesSoulMetaphysics"),
    assumesKarma: booleanAt(value, "assumesKarma"),
    assumesReincarnation: booleanAt(value, "assumesReincarnation"),
    assumesFate: booleanAt(value, "assumesFate"),
    assumesPredestination: booleanAt(value, "assumesPredestination"),
    assumesCosmicIntentionality: booleanAt(value, "assumesCosmicIntentionality"),
    assumesSupernaturalCausation: booleanAt(value, "assumesSupernaturalCausation"),
    couldBeReadAgnostically: booleanAt(value, "couldBeReadAgnostically"),
    confidence: rawConfidence
  };
};
var worldviewDiscriminatorShape = strictShape(
  "interpretation_worldview_audit",
  schema,
  parse
);
var worldviewDiscriminatorInput = (unitId, candidate, reasons) => ({
  instructions: [
    "Classify only whether the supplied astrology interpretation imposes a religious, spiritual, karmic, fatalistic or supernatural worldview.",
    "Do not judge whether astrology itself is true or false and do not rewrite the interpretation.",
    "A technical proper name such as Part of Spirit is allowed when it is only the conventional name of an astrological point.",
    "Reject claims of God or divine intention, souls, karma, reincarnation, fate, predestination, supernatural intervention or a universe/cosmos that intentionally sends lessons, people or events.",
    "Also reject unnamed intentional metaphysics such as claiming an encounter was placed in someone's path or necessarily happened for a pre-existing cosmic reason.",
    "Ordinary psychological language about development, relationships, values, choices, change, meaning and personally consequential events is agnostic when it does not assert a metaphysical cause.",
    "Return only the strict classification schema."
  ].join("\n"),
  unitId,
  deterministicReviewReasons: [...reasons],
  candidate
});
var assumptionKeys = [
  "assumesReligion",
  "assumesDeity",
  "assumesDivineAgency",
  "assumesSoulMetaphysics",
  "assumesKarma",
  "assumesReincarnation",
  "assumesFate",
  "assumesPredestination",
  "assumesCosmicIntentionality",
  "assumesSupernaturalCausation"
];
var worldviewDiscriminatorErrors = (audit) => {
  const assumed = assumptionKeys.filter((key) => audit[key] === true);
  if (assumed.length === 0 && audit.couldBeReadAgnostically) return [];
  const details = assumed.length === 0 ? "could not be read agnostically" : `assumed ${assumed.join(", ")}`;
  return [`Worldview discriminator rejected the interpretation because it ${details} (confidence ${audit.confidence.toFixed(2)})`];
};

// src/llm/orchestrate/coherence.ts
var coherenceIssues = (_units, _scope) => [];
var conflictingUnits = (issues) => new Set(
  issues.flatMap(({ units }) => units.slice(1))
);

// src/llm/orchestrate/planner.ts
var pending = (calls, accepted) => calls.filter(({ id }) => accepted[id] === void 0);
var foundationPlan = (calls, accepted, maximum = 10) => {
  if (!Number.isSafeInteger(maximum) || maximum < 1) throw new Error("Foundation maximum must be a positive integer");
  return pending(calls, accepted).slice(0, maximum);
};
var dependenciesMet = (call, accepted, lane) => {
  const local2 = new Set(lane.map(({ id }) => id));
  return (call.dependsOn ?? []).every((id) => accepted.has(id) || local2.has(id));
};
var weight = (call) => call.tokens ?? (call.kind === "big" ? 3200 : 1800);
var wavePlan = (calls, acceptedUnits, maximumLanes = 4, maximumPerLane = 10) => {
  if (!Number.isSafeInteger(maximumLanes) || maximumLanes < 1 || maximumLanes > 4) {
    throw new Error("Wave lane count must be from 1 through 4");
  }
  if (!Number.isSafeInteger(maximumPerLane) || maximumPerLane < 1 || maximumPerLane > 10) {
    throw new Error("Lane batch size must be from 1 through 10");
  }
  const accepted = new Set(Object.keys(acceptedUnits));
  const remaining = pending(calls, acceptedUnits);
  const lanes = Array.from({ length: Math.min(maximumLanes, remaining.length) }, (_, index) => ({
    id: `lane-${index + 1}`,
    units: [],
    estimatedTokens: 0
  }));
  let changed = true;
  while (changed) {
    changed = false;
    for (const call of remaining) {
      if (lanes.some((lane2) => lane2.units.some(({ id }) => id === call.id))) continue;
      const candidates = lanes.filter((lane2) => lane2.units.length < maximumPerLane && dependenciesMet(call, accepted, lane2.units)).sort((left, right) => left.estimatedTokens - right.estimatedTokens || left.units.length - right.units.length);
      const lane = candidates[0];
      if (lane === void 0) continue;
      lane.units.push(call);
      lane.estimatedTokens += weight(call);
      changed = true;
      if (lanes.reduce((count2, item) => count2 + item.units.length, 0) >= maximumLanes * maximumPerLane) break;
    }
  }
  return lanes.filter(({ units }) => units.length > 0);
};

// src/llm/orchestrate/rateLimit.ts
var status2 = (cause) => {
  if (typeof cause !== "object" || cause === null) return null;
  const value = cause;
  return typeof value["status"] === "number" ? value["status"] : null;
};
var retryAfter = (cause) => {
  if (typeof cause !== "object" || cause === null) return null;
  const value = cause;
  const candidate = value["retryAfterMs"];
  return typeof candidate === "number" && Number.isFinite(candidate) && candidate >= 0 ? candidate : null;
};
var pause3 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var AdaptiveLimiter = class {
  #maximum;
  #effective;
  #active = 0;
  #throttles = 0;
  #retryAfterMs = null;
  #waiting = [];
  constructor(maximum = 4) {
    if (!Number.isSafeInteger(maximum) || maximum < 1 || maximum > 4) {
      throw new Error("Maximum OpenAI concurrency must be from 1 through 4");
    }
    this.#maximum = maximum;
    this.#effective = maximum;
  }
  get state() {
    return {
      maximum: this.#maximum,
      effective: this.#effective,
      active: this.#active,
      throttles: this.#throttles,
      retryAfterMs: this.#retryAfterMs
    };
  }
  async #acquire() {
    if (this.#active < this.#effective) {
      this.#active += 1;
      return;
    }
    await new Promise((resolve) => this.#waiting.push(resolve));
    this.#active += 1;
  }
  #release() {
    this.#active -= 1;
    const next = this.#waiting.shift();
    if (next !== void 0 && this.#active < this.#effective) next();
  }
  #throttle(cause, attempt) {
    this.#throttles += 1;
    this.#effective = Math.max(1, this.#effective - 1);
    const server = retryAfter(cause);
    const exponential = Math.min(3e4, 750 * 2 ** Math.min(attempt, 5));
    const jitter = Math.floor(Math.random() * Math.max(100, exponential / 4));
    this.#retryAfterMs = server ?? exponential + jitter;
    return this.#retryAfterMs;
  }
  #recover() {
    if (this.#effective < this.#maximum && this.#throttles % 4 === 0) this.#effective += 1;
    this.#retryAfterMs = null;
  }
  async run(operation, retries = 4) {
    for (let attempt = 0; attempt <= retries; attempt += 1) {
      await this.#acquire();
      try {
        const result = await operation();
        this.#recover();
        return result;
      } catch (cause) {
        if (status2(cause) !== 429 || attempt >= retries) throw cause;
        const wait = this.#throttle(cause, attempt);
        await pause3(wait);
      } finally {
        this.#release();
      }
    }
    throw new Error("Rate-limited operation exhausted retries");
  }
};

// src/llm/orchestrate/snapshot.ts
var interpretationSnapshotSchema = "astral-interpretation-snapshot/1.0.0";
var record10 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var fingerprint = (calculation) => {
  if (!record10(calculation)) return null;
  const root2 = record10(calculation["astral-calculation"]) ? calculation["astral-calculation"] : calculation;
  const provenance = root2["provenance"];
  if (!record10(provenance)) return null;
  const value = provenance["calculationFingerprint"];
  return typeof value === "string" ? value : null;
};
var canonical = (value) => {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  return `{${Object.entries(value).sort(([left], [right]) => left.localeCompare(right, "en")).map(([key, child]) => `${JSON.stringify(key)}:${canonical(child)}`).join(",")}}`;
};
var digest = async (value) => {
  const bytes = new TextEncoder().encode(value);
  const result = new Uint8Array(await crypto.subtle.digest("SHA-256", bytes));
  return `sha256:${[...result].map((byte) => byte.toString(16).padStart(2, "0")).join("")}`;
};
var buildSnapshot = async (calculation, accepted, order, revision) => {
  if (!Number.isSafeInteger(revision) || revision < 0) throw new Error("Snapshot revision must be a non-negative integer");
  const acceptedOrder = order.filter((id) => accepted[id] !== void 0);
  const units = Object.fromEntries(acceptedOrder.map((id) => [id, accepted[id]]));
  const content = {
    schema: interpretationSnapshotSchema,
    revision,
    calculationFingerprint: fingerprint(calculation),
    acceptedOrder,
    units
  };
  return { ...content, sha256: await digest(canonical(content)) };
};
var snapshotText = (snapshot) => JSON.stringify(snapshot);
var snapshotTokenEstimate = (snapshot) => Math.max(1, Math.ceil(snapshotText(snapshot).length / 3));
var snapshotInput = (fileId, snapshot, input2) => {
  if (fileId === null) return { snapshot, input: input2 };
  const text4 = JSON.stringify({
    snapshotRevision: snapshot.revision,
    snapshotSha256: snapshot.sha256,
    snapshotTokenEstimate: snapshotTokenEstimate(snapshot),
    input: input2
  });
  return [{
    role: "user",
    content: [
      { type: "input_file", file_id: fileId },
      { type: "input_text", text: text4 }
    ]
  }];
};

// src/llm/orchestrate/failure.ts
var raw = (cause) => {
  if (typeof cause !== "object" || cause === null) return "";
  const value = cause["rawText"];
  return typeof value === "string" ? value : "";
};
var response = (cause) => {
  if (typeof cause !== "object" || cause === null) return null;
  const value = cause["responseStatus"];
  return typeof value === "string" ? value : null;
};
var status3 = (cause) => {
  if (typeof cause !== "object" || cause === null) return null;
  const value = cause["status"];
  return typeof value === "number" ? value : null;
};
var truncated = (cause) => {
  if (response(cause) === "incomplete") return true;
  const text4 = raw(cause).trim();
  if (text4.length === 0) return false;
  return !/[}\]]\s*$/u.test(text4) || /[,;:\-–—]\s*$/u.test(text4);
};
var failKind = (cause) => {
  if (status3(cause) === 429) return "rate_limit";
  if (truncated(cause)) return "truncation";
  if (response(cause) === "failed") return "transport";
  if (cause instanceof Error && /timeout|deadline|timed out/iu.test(cause.message)) return "timeout";
  if (raw(cause).length > 0) return "schema";
  return "transport";
};
var object2 = (value) => typeof value === "object" && value !== null && !Array.isArray(value) ? value : null;
var partial = (cause) => {
  const text4 = raw(cause).trim();
  if (text4.length === 0) return null;
  const attempts = [text4];
  const first = text4.indexOf("{");
  const last = text4.lastIndexOf("}");
  if (first >= 0 && last > first) attempts.push(text4.slice(first, last + 1));
  for (const attempt of attempts) {
    try {
      const value = object2(JSON.parse(attempt));
      if (value !== null) return value;
    } catch {
    }
  }
  return null;
};

// src/llm/orchestrate/session.ts
var paidAttempts = 2;
var count = (value, name) => {
  if (!Number.isSafeInteger(value) || value < 0) throw new Error(`${name} must be a non-negative integer`);
  return value;
};
var activeCopy = (value) => {
  if (value === null) return null;
  return {
    id: value.id,
    attempt: value.attempt,
    correction: [...value.correction],
    ...value.failureKind === void 0 ? {} : { failureKind: value.failureKind }
  };
};
var conversation = (client, counters) => {
  const id = client.id;
  if (!id) return null;
  counters.conversations.add(id);
  return id;
};
var localConversationId = () => `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;

// src/llm/orchestrate/repair.ts
var safeAudit = (options, value, context) => {
  try {
    return options.unit.audit(value, context);
  } catch (cause) {
    return {
      valid: false,
      value,
      errors: [`Audit threw: ${cause instanceof Error ? cause.message : String(cause)}`],
      repair: "audit"
    };
  }
};
var reviewAudit = async (options, audit) => {
  const review = audit.worldviewReview ?? [];
  if (!audit.valid || review.length === 0) return audit;
  const client = options.createClient();
  options.counters.calls += 1;
  try {
    const result = await options.limiter.run(() => client.run(
      worldviewDiscriminatorShape,
      worldviewDiscriminatorInput(options.unit.id, audit.value, review),
      {
        body: {
          model: options.config.openai.smallModel,
          store: false,
          reasoning: { effort: "none" },
          max_output_tokens: 512
        },
        retries: 0
      }
    ));
    conversation(client, options.counters);
    const errors = worldviewDiscriminatorErrors(result);
    if (errors.length === 0) return { ...audit, worldviewReview: [] };
    return {
      ...audit,
      valid: false,
      errors: [.../* @__PURE__ */ new Set([...audit.errors, ...review, ...errors])],
      soft: true,
      repair: "audit"
    };
  } catch (cause) {
    conversation(client, options.counters);
    return {
      ...audit,
      valid: false,
      errors: [.../* @__PURE__ */ new Set([
        ...audit.errors,
        ...review,
        `Worldview discriminator failed closed: ${cause instanceof Error ? cause.message : String(cause)}`
      ])],
      soft: true,
      repair: "audit"
    };
  }
};
var repairUnit = async (options, candidates, context, attempt, model2, errors) => {
  options.hooks.onRepair?.(options.unit, attempt, "deterministic", errors);
  let rebuilt = reconstructUnit({ unit: options.unit, candidates });
  let audited = await reviewAudit(options, safeAudit(options, rebuilt.value, context));
  if (!audited.valid) {
    const forced = fieldsFromAuditErrors(options.unit, audited.errors);
    if (forced.size > 0) {
      rebuilt = reconstructUnit({ unit: options.unit, candidates: [rebuilt.value, ...candidates], forceFields: forced });
      audited = await reviewAudit(options, safeAudit(options, rebuilt.value, context));
    }
  }
  if (options.config.chart.throwOnInterpretationFailure) {
    throw new Error(`Interpretation unit ${options.unit.id} required deterministic reconstruction: ${errors.join("; ")}`);
  }
  const warnings = [.../* @__PURE__ */ new Set([...rebuilt.warnings, ...audited.errors, ...audited.worldviewReview ?? []])];
  if (!audited.valid) options.hooks.onSoftAccept?.(options.unit, attempt, warnings);
  const result = {
    id: options.unit.id,
    value: audited.value,
    attempts: Math.max(1, Math.min(attempt, paidAttempts)),
    model: candidates.length === 0 ? "deterministic" : model2,
    provenance: {
      repairedBy: "deterministic",
      repairKind: rebuilt.usedXmlFallback ? "xml_fallback" : "deterministic_reconstruction",
      fallbackFields: [...rebuilt.fallbackFields],
      auditWarnings: warnings
    }
  };
  options.hooks.onComplete?.(result);
  await options.onState(null);
  return result;
};

// src/llm/orchestrate/execute.ts
var entryModel = (config, kind) => kind === "big" ? config.openai.bigModel : config.openai.smallModel;
var escalationModel = (config, kind) => kind === "big" ? config.openai.bigEscalationModel : config.openai.smallEscalationModel;
var model = (config, unit2, attempt) => attempt <= 1 ? entryModel(config, unit2.kind) : escalationModel(config, unit2.kind);
var effort = (config, unit2, attempt) => attempt > 1 && unit2.kind === "small" ? "low" : unit2.effort ?? config.openai.reasoning;
var tokens = (config, unit2) => Math.min(unit2.tokens ?? config.openai.maxOutputTokens, config.openai.maxOutputTokens);
var input = (unit2, context, snapshot, remoteFileId) => {
  const value = unit2.input(context);
  return snapshot === null ? value : snapshotInput(remoteFileId, snapshot, value);
};
var state = (unit2, attempt, correction, kind) => ({
  id: unit2.id,
  attempt,
  correction: [...correction],
  ...kind === void 0 ? {} : { failureKind: kind }
});
var executeUnit = async (options) => {
  let correction = [...options.resume?.correction ?? [], ...options.correction];
  const candidates = [];
  const resumed = options.resume?.attempt ?? 1;
  const firstAttempt = Number.isSafeInteger(resumed) && resumed >= 1 ? Math.min(resumed, paidAttempts) : 1;
  let lastModel = model(options.config, options.unit, firstAttempt);
  if ((options.resume?.attempt ?? 1) > paidAttempts) {
    const context2 = { calculation: options.calculation, earlier: options.earlier, correction };
    return repairUnit(options, candidates, context2, paidAttempts, lastModel, correction);
  }
  for (let attempt = firstAttempt; attempt <= paidAttempts; attempt += 1) {
    const selectedModel = model(options.config, options.unit, attempt);
    lastModel = selectedModel;
    const context2 = {
      calculation: options.calculation,
      earlier: options.earlier,
      correction
    };
    options.hooks.onStart?.(options.unit, attempt, selectedModel);
    await options.onState(state(options.unit, attempt, correction));
    options.counters.calls += 1;
    let output;
    try {
      output = await options.limiter.run(() => options.client.run(
        options.unit.shape,
        input(options.unit, context2, options.snapshot, options.remoteFileId),
        {
          body: {
            model: selectedModel,
            store: false,
            reasoning: { effort: effort(options.config, options.unit, attempt) },
            max_output_tokens: tokens(options.config, options.unit)
          },
          retries: 0
        }
      ));
      conversation(options.client, options.counters);
    } catch (cause) {
      conversation(options.client, options.counters);
      const value = partial(cause);
      if (value !== null) candidates.push(value);
      const kind = failKind(cause);
      correction = [
        `Previous output failed before acceptance: ${cause instanceof Error ? cause.message : String(cause)}`
      ];
      if (attempt < paidAttempts) {
        options.counters.retries += 1;
        options.hooks.onRetry?.(options.unit, attempt, correction);
        await options.onState(state(options.unit, attempt + 1, correction, kind));
        continue;
      }
      await options.onState(state(options.unit, attempt, correction, kind));
      return repairUnit(options, candidates, context2, attempt, selectedModel, correction);
    }
    const audited = await reviewAudit(options, safeAudit(options, output, context2));
    candidates.push(audited.value);
    if (audited.valid) {
      const result = { id: options.unit.id, value: audited.value, attempts: attempt, model: selectedModel };
      options.hooks.onComplete?.(result);
      await options.onState(null);
      return result;
    }
    await options.hooks.onReject?.(options.unit, attempt, selectedModel, output, audited);
    correction = [...audited.errors];
    if (attempt < paidAttempts) {
      options.counters.retries += 1;
      options.hooks.onRetry?.(options.unit, attempt, correction);
      await options.onState(state(
        options.unit,
        attempt + 1,
        correction,
        audited.repair === "completion" ? "truncation" : "audit"
      ));
      continue;
    }
    await options.onState(state(
      options.unit,
      attempt,
      correction,
      audited.repair === "completion" ? "truncation" : "audit"
    ));
    return repairUnit(options, candidates, context2, attempt, selectedModel, correction);
  }
  const context = { calculation: options.calculation, earlier: options.earlier, correction };
  return repairUnit(options, candidates, context, paidAttempts, lastModel, correction);
};
var safeAudit2 = (unit2, value, context) => safeAudit({ unit: unit2 }, value, context);

// src/llm/orchestrate/recovery.ts
var validateResult = (calculation, call, result, earlier, maximumAttempts) => {
  if (result.id !== call.id) throw new Error(`Recovered interpretation unit ID mismatch for ${call.id}`);
  if (!Number.isSafeInteger(result.attempts) || result.attempts < 1 || result.attempts > maximumAttempts) {
    throw new Error(`Recovered interpretation attempts are invalid for ${call.id}`);
  }
  if (typeof result.model !== "string" || result.model.length === 0) {
    throw new Error(`Recovered interpretation model is invalid for ${call.id}`);
  }
  const audited = safeAudit2(call, result.value, { calculation, earlier, correction: [] });
  const unresolvedWorldview = (audited.worldviewReview?.length ?? 0) > 0;
  if ((!audited.valid || unresolvedWorldview) && result.provenance?.repairedBy !== "deterministic") {
    throw new Error(`Recovered interpretation unit ${call.id} failed audit: ${[...audited.errors, ...audited.worldviewReview ?? []].join("; ")}`);
  }
  if (unresolvedWorldview) {
    throw new Error(`Recovered deterministic interpretation unit ${call.id} requires worldview review and must be rebuilt`);
  }
  return { ...result, value: audited.value };
};
var restore = (calculation, calls, recovery, maximumAttempts) => {
  const known = new Map(calls.map((call) => [call.id, call]));
  for (const id of Object.keys(recovery.units)) {
    if (!known.has(id)) throw new Error(`Recovery contains unknown interpretation unit ${id}`);
  }
  const completed = {};
  for (const call of calls) {
    const result = recovery.units[call.id];
    if (result === void 0) continue;
    const restored = validateResult(calculation, call, result, completed, maximumAttempts);
    completed[call.id] = restored;
    call.onAccept?.(restored.value);
  }
  const active = recovery.active;
  if (active !== null) {
    const call = known.get(active.id);
    if (call === void 0 || completed[active.id] !== void 0) {
      throw new Error("Recovery active unit must be unfinished and present in the interpretation plan");
    }
    if (!Number.isSafeInteger(active.attempt) || active.attempt < 1) {
      throw new Error(`Recovery attempt is invalid for ${active.id}`);
    }
    if (!active.correction.every((value) => typeof value === "string")) {
      throw new Error(`Recovery correction is invalid for ${active.id}`);
    }
  }
  return completed;
};
var restoreStaged = (calculation, calls, completed, wave, maximumAttempts) => {
  if (wave === null || wave.assembled) return {};
  const staged = {};
  const byId = new Map(calls.map((call) => [call.id, call]));
  for (const call of calls) {
    const result = wave.staged[call.id];
    if (result === void 0 || completed[call.id] !== void 0) continue;
    staged[call.id] = validateResult(calculation, call, result, { ...completed, ...staged }, maximumAttempts);
  }
  for (const id of Object.keys(wave.staged)) {
    if (!byId.has(id)) throw new Error(`Recovery wave contains unknown interpretation unit ${id}`);
  }
  return staged;
};
var emptyRecovery = () => ({
  conversationId: null,
  units: {},
  calls: 0,
  retries: 0,
  active: null,
  orchestration: "waves",
  foundationComplete: false,
  snapshot: null,
  wave: null
});
var laneCheckpoint = (plan) => ({
  id: plan.id,
  conversationId: null,
  assignments: plan.units.map(({ id }) => id),
  completed: [],
  active: null,
  status: "pending",
  failureKind: null
});
var recoveredPlans = (calls, wave) => {
  const known = new Map(calls.map((call) => [call.id, call]));
  return wave.lanes.map((lane) => {
    const units = lane.assignments.map((id) => {
      const call = known.get(id);
      if (call === void 0) throw new Error(`Recovery lane ${lane.id} contains unknown unit ${id}`);
      return call;
    });
    return {
      id: lane.id,
      units,
      estimatedTokens: units.reduce((total, call) => total + (call.tokens ?? 1800), 0)
    };
  });
};
var without = (values, id) => Object.fromEntries(
  Object.entries(values).filter(([key]) => key !== id)
);
var deterministicUnit = (calculation, call, earlier, cause) => {
  const rebuilt = reconstructUnit({ unit: call, candidates: [] });
  const audited = safeAudit2(call, rebuilt.value, { calculation, earlier, correction: [String(cause)] });
  return {
    id: call.id,
    value: audited.value,
    attempts: 1,
    model: "deterministic",
    provenance: {
      repairedBy: "deterministic",
      repairKind: "xml_fallback",
      fallbackFields: rebuilt.fallbackFields,
      auditWarnings: [.../* @__PURE__ */ new Set([...rebuilt.warnings, ...audited.errors, ...audited.worldviewReview ?? [], String(cause)])]
    }
  };
};
var emergencyRun = (calculation, calls, hooks, cause) => {
  const units = {};
  for (const call of calls) {
    const result = deterministicUnit(calculation, call, units, cause);
    units[call.id] = result;
    call.onAccept?.(result.value);
    hooks.onComplete?.(result);
  }
  const id = localConversationId();
  return {
    conversationId: id,
    units,
    calls: 0,
    retries: 0,
    orchestration: "waves",
    conversationIds: [id],
    snapshotRevision: 0,
    waves: 0
  };
};

// src/llm/orchestrate/run-v2.ts
var runCore = async (calculation, calls, config, createClient, hooks, recovery) => {
  if (calls.length === 0) throw new Error("Interpretation requires at least one unit");
  if (new Set(calls.map(({ id }) => id)).size !== calls.length) throw new Error("Interpretation unit IDs must be unique");
  const recovered = recovery ?? emptyRecovery();
  const completed = restore(calculation, calls, recovered, Math.max(config.chart.maxRetries, paidAttempts));
  const counters = {
    calls: count(recovered.calls, "Recovery call count"),
    retries: count(recovered.retries, "Recovery retry count"),
    conversations: new Set(recovered.conversationId === null ? [] : [recovered.conversationId])
  };
  const limiter = new AdaptiveLimiter(config.chart.laneCount ?? 4);
  const order = calls.map(({ id }) => id);
  let foundationComplete = recovered.foundationComplete ?? false;
  let snapshotState = recovered.snapshot ?? null;
  let currentWave = recovered.wave ?? null;
  let waveNumber = currentWave?.id ?? 0;
  let primaryConversationId = recovered.conversationId;
  let checkpointTail = Promise.resolve();
  const checkpoint = async (active) => {
    if (hooks.onCheckpoint === void 0) return;
    const value = {
      conversationId: primaryConversationId,
      units: { ...completed },
      calls: counters.calls,
      retries: counters.retries,
      active: activeCopy(active),
      orchestration: "waves",
      foundationComplete,
      snapshot: snapshotState,
      wave: currentWave
    };
    checkpointTail = checkpointTail.then(async () => {
      await hooks.onCheckpoint?.(value);
    });
    await checkpointTail;
  };
  if (!foundationComplete) {
    const maximum = config.chart.foundationUnits ?? 10;
    const remaining = Math.max(0, maximum - Object.keys(completed).length);
    const foundation = remaining === 0 ? [] : foundationPlan(calls, completed, remaining);
    const client = createClient(primaryConversationId ?? void 0);
    let contextTokens = 0;
    for (const unit2 of foundation) {
      const estimate = unit2.tokens ?? 1800;
      if (contextTokens > 0 && contextTokens + estimate > (config.chart.laneContextTokens ?? 6e4)) break;
      const resume = recovered.active?.id === unit2.id ? activeCopy(recovered.active) : null;
      const result = await executeUnit({
        calculation,
        unit: unit2,
        client,
        createClient,
        config,
        limiter,
        hooks,
        earlier: completed,
        snapshot: null,
        remoteFileId: null,
        counters,
        resume,
        correction: [],
        onState: checkpoint
      });
      completed[unit2.id] = result;
      unit2.onAccept?.(result.value);
      contextTokens += estimate;
      primaryConversationId = conversation(client, counters) ?? primaryConversationId;
      await checkpoint(null);
    }
    foundationComplete = true;
    await checkpoint(null);
  }
  let snapshot = await buildSnapshot(calculation, completed, order, snapshotState?.revision ?? 0);
  snapshotState = {
    revision: snapshot.revision,
    sha256: snapshot.sha256,
    remoteFileId: snapshotState?.sha256 === snapshot.sha256 ? snapshotState.remoteFileId : null,
    acceptedOrder: [...snapshot.acceptedOrder]
  };
  await checkpoint(null);
  while (Object.keys(completed).length < calls.length) {
    const resumingWave = currentWave !== null && !currentWave.assembled && currentWave.baseSnapshotRevision === snapshot.revision;
    if (!resumingWave) waveNumber += 1;
    const plans = resumingWave ? recoveredPlans(calls, currentWave) : wavePlan(calls, completed, config.chart.laneCount ?? 4, config.chart.laneUnits ?? 10);
    if (plans.length === 0) throw new Error("Interpretation planner could not produce a dependency-safe wave");
    const uploader = createClient();
    let remoteFileId = snapshotState.remoteFileId;
    if (remoteFileId === null && uploader.uploadFile !== void 0) {
      const upload = uploader.uploadFile.bind(uploader);
      const uploaded = await limiter.run(() => upload(
        `astral-snapshot-${snapshot.revision}.json`,
        snapshotText(snapshot)
      ));
      remoteFileId = uploaded.id;
      snapshotState = { ...snapshotState, remoteFileId };
    }
    const staged = resumingWave ? restoreStaged(calculation, calls, completed, currentWave, Math.max(config.chart.maxRetries, paidAttempts)) : {};
    const lanes = resumingWave ? currentWave.lanes.map((lane) => ({
      ...lane,
      assignments: [...lane.assignments],
      completed: [...lane.completed],
      active: activeCopy(lane.active),
      status: lane.status === "complete" && lane.assignments.some((id) => staged[id] === void 0) ? "pending" : lane.status
    })) : plans.map(laneCheckpoint);
    currentWave = {
      id: waveNumber,
      baseSnapshotRevision: snapshot.revision,
      lanes,
      staged: { ...staged },
      conflicts: resumingWave ? [...currentWave.conflicts] : [],
      assembled: false
    };
    await hooks.onWave?.(currentWave);
    await checkpoint(null);
    const laneRuns = plans.map(async (plan, index) => {
      const lane = lanes[index];
      if (lane === void 0) throw new Error(`Missing checkpoint for ${plan.id}`);
      const client = createClient(lane.conversationId ?? void 0);
      lane.status = "running";
      lane.failureKind = null;
      let contextTokens = 0;
      const local2 = {};
      for (const unit2 of plan.units) {
        const existing = staged[unit2.id];
        if (existing !== void 0) {
          local2[unit2.id] = existing;
          if (!lane.completed.includes(unit2.id)) lane.completed.push(unit2.id);
          continue;
        }
        const estimate = unit2.tokens ?? 1800;
        if (contextTokens > 0 && contextTokens + estimate > (config.chart.laneContextTokens ?? 6e4)) break;
        const resume = lane.active?.id === unit2.id ? activeCopy(lane.active) : null;
        const result = await executeUnit({
          calculation,
          unit: unit2,
          client,
          createClient,
          config,
          limiter,
          hooks,
          earlier: { ...completed, ...local2 },
          snapshot,
          remoteFileId,
          counters,
          resume,
          correction: [],
          onState: async (active) => {
            lane.active = activeCopy(active);
            currentWave = { ...currentWave, lanes: [...lanes], staged: { ...staged } };
            await checkpoint(active);
          }
        });
        staged[unit2.id] = result;
        local2[unit2.id] = result;
        if (!lane.completed.includes(unit2.id)) lane.completed.push(unit2.id);
        lane.conversationId = conversation(client, counters);
        lane.active = null;
        contextTokens += estimate;
        currentWave = { ...currentWave, lanes: [...lanes], staged: { ...staged } };
        await checkpoint(null);
      }
      lane.status = "complete";
      lane.active = null;
      const laneUnits = Object.fromEntries(lane.completed.filter((id) => staged[id] !== void 0).map((id) => [id, staged[id]]));
      const issues = coherenceIssues(laneUnits, "lane");
      if (issues.length > 0) {
        lane.status = "blocked";
        currentWave = {
          ...currentWave,
          lanes: [...lanes],
          conflicts: [.../* @__PURE__ */ new Set([...currentWave?.conflicts ?? [], ...issues.map(({ message }) => message)])],
          staged: { ...staged }
        };
      }
      await checkpoint(null);
    });
    const outcomes = await Promise.allSettled(laneRuns);
    const failed = outcomes.find((outcome) => outcome.status === "rejected");
    if (failed !== void 0) throw failed.reason;
    const waveIssues = coherenceIssues(staged, "wave");
    if (waveIssues.length > 0) {
      const affected = conflictingUnits(waveIssues);
      currentWave = {
        ...currentWave,
        conflicts: [.../* @__PURE__ */ new Set([...currentWave?.conflicts ?? [], ...waveIssues.map(({ message }) => message)])],
        staged: { ...staged }
      };
      await checkpoint(null);
      for (const id of affected) {
        const unit2 = calls.find((candidate) => candidate.id === id);
        const prior = staged[id];
        if (unit2 === void 0 || prior === void 0) continue;
        const correction = waveIssues.filter(({ units }) => units.includes(id)).map(({ message }) => message);
        const client = createClient();
        const result = await repairUnit({
          calculation,
          unit: unit2,
          client,
          createClient,
          config,
          limiter,
          hooks,
          earlier: { ...completed, ...without(staged, id) },
          snapshot,
          remoteFileId,
          counters,
          resume: null,
          correction,
          onState: checkpoint
        }, [prior.value], {
          calculation,
          earlier: { ...completed, ...without(staged, id) },
          correction
        }, prior.attempts, prior.model, correction);
        staged[id] = {
          ...result,
          provenance: { ...result.provenance ?? {}, repairKind: "coherence_reconstruction" }
        };
        currentWave = { ...currentWave, staged: { ...staged } };
        await checkpoint(null);
      }
      const remaining = coherenceIssues(staged, "wave");
      if (remaining.length > 0) {
        currentWave = {
          ...currentWave,
          conflicts: remaining.map(({ message }) => message),
          staged: { ...staged }
        };
        await checkpoint(null);
        if (config.chart.throwOnInterpretationFailure) {
          throw new Error(`Wave coherence failed: ${remaining.map(({ message }) => message).join("; ")}`);
        }
      }
    }
    for (const id of order) {
      const result = staged[id];
      if (result === void 0) continue;
      completed[id] = result;
      calls.find((call) => call.id === id)?.onAccept?.(result.value);
    }
    currentWave = { ...currentWave, staged: { ...staged }, assembled: true };
    snapshot = await buildSnapshot(calculation, completed, order, snapshot.revision + 1);
    snapshotState = {
      revision: snapshot.revision,
      sha256: snapshot.sha256,
      remoteFileId: null,
      acceptedOrder: [...snapshot.acceptedOrder]
    };
    await hooks.onWave?.(currentWave);
    await checkpoint(null);
    currentWave = null;
    await checkpoint(null);
  }
  const conversationIds = [...counters.conversations];
  const conversationId = primaryConversationId ?? conversationIds[0] ?? recovered.conversationId ?? localConversationId();
  if (conversationIds.length === 0) conversationIds.push(conversationId);
  return {
    conversationId,
    units: completed,
    calls: counters.calls,
    retries: counters.retries,
    orchestration: "waves",
    conversationIds,
    snapshotRevision: snapshot.revision,
    waves: waveNumber
  };
};
var runInterpretation = async (calculation, calls, config, createClient, hooks = {}, recovery = null) => {
  try {
    return await runCore(calculation, calls, config, createClient, hooks, recovery);
  } catch (cause) {
    if (config.chart.throwOnInterpretationFailure) throw cause;
    return emergencyRun(calculation, calls, hooks, cause);
  }
};

// src/llm/orchestrate/run.ts
var localConversationId2 = () => `local-final-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
var safeAttempts = (value) => typeof value === "number" && Number.isSafeInteger(value) && value > 0 ? value : 1;
var safeCount = (value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0 ? value : 0;
var normaliseResult = (call, result) => {
  if (result.provenance?.repairedBy !== "deterministic" || call.semanticMap === void 0) return result;
  const rebuilt = reconstructUnit({ unit: call, candidates: [result.value] });
  return {
    ...result,
    id: call.id,
    value: rebuilt.value,
    attempts: safeAttempts(result.attempts),
    model: result.model.trim().length > 0 ? result.model : "deterministic",
    provenance: {
      ...result.provenance,
      repairedBy: "deterministic",
      repairKind: rebuilt.usedXmlFallback ? "xml_fallback" : "deterministic_reconstruction",
      fallbackFields: rebuilt.fallbackFields,
      auditWarnings: [
        ...result.provenance.auditWarnings ?? [],
        ...rebuilt.warnings
      ]
    }
  };
};
var normaliseRun = (calls, run) => {
  const byId = new Map(calls.map((call) => [call.id, call]));
  return {
    ...run,
    units: Object.fromEntries(Object.entries(run.units).map(([id, result]) => {
      const call = byId.get(id);
      return [id, call === void 0 ? result : normaliseResult(call, result)];
    }))
  };
};
var normaliseRecovery = (calls, recovery) => {
  if (recovery === null) return null;
  const byId = new Map(calls.map((call) => [call.id, call]));
  const normaliseMap = (values) => Object.fromEntries(
    Object.entries(values).map(([id, result]) => {
      const call = byId.get(id);
      return [id, call === void 0 ? result : normaliseResult(call, result)];
    })
  );
  return {
    ...recovery,
    units: normaliseMap(recovery.units),
    ...recovery.wave === null || recovery.wave === void 0 ? {} : {
      wave: {
        ...recovery.wave,
        staged: normaliseMap(recovery.wave.staged)
      }
    }
  };
};
var finalFallback = (calls, hooks, recovery, cause) => {
  const units = {};
  for (const call of calls) {
    const recovered = recovery?.units[call.id];
    const rebuilt = reconstructUnit({
      unit: call,
      candidates: recovered === void 0 ? [] : [recovered.value]
    });
    const warning = `Final production fallback: ${cause instanceof Error ? cause.message : String(cause)}`;
    const result = {
      id: call.id,
      value: rebuilt.value,
      attempts: safeAttempts(recovered?.attempts),
      model: recovered?.model?.trim() ? recovered.model : "deterministic",
      provenance: {
        ...recovered?.provenance ?? {},
        repairedBy: "deterministic",
        repairKind: rebuilt.usedXmlFallback ? "xml_fallback" : "deterministic_reconstruction",
        fallbackFields: rebuilt.fallbackFields,
        auditWarnings: [
          ...recovered?.provenance?.auditWarnings ?? [],
          ...rebuilt.warnings,
          warning
        ]
      }
    };
    units[call.id] = result;
    try {
      call.onAccept?.(result.value);
    } catch {
    }
    try {
      hooks.onComplete?.(result);
    } catch {
    }
  }
  const recoveredConversation = recovery?.conversationId;
  const conversationId = recoveredConversation?.trim() ? recoveredConversation : localConversationId2();
  return {
    conversationId,
    units,
    calls: safeCount(recovery?.calls),
    retries: safeCount(recovery?.retries),
    orchestration: "waves",
    conversationIds: [conversationId],
    snapshotRevision: safeCount(recovery?.snapshot?.revision),
    waves: safeCount(recovery?.wave?.id)
  };
};
var runInterpretation2 = async (calculation, calls, config, createClient, hooks = {}, recovery = null) => {
  const normalisedRecovery = normaliseRecovery(calls, recovery);
  try {
    const run = await runInterpretation(
      calculation,
      calls,
      config,
      createClient,
      hooks,
      normalisedRecovery
    );
    return normaliseRun(calls, run);
  } catch (cause) {
    if (config.chart.throwOnInterpretationFailure) throw cause;
    return finalFallback(calls, hooks, normalisedRecovery, cause);
  }
};

// src/progress/tracker.ts
var iso = (ms) => new Date(ms).toISOString();
var phasesFor = (units) => {
  const phases = /* @__PURE__ */ new Map();
  let interpretationSeen = false;
  for (const unit2 of units) {
    const phase = unit2.phase ?? (unit2.kind === "big" || unit2.kind === "small" ? "interpretation" : interpretationSeen ? "final" : "deterministic");
    phases.set(unit2.id, phase);
    if (phase === "interpretation") interpretationSeen = true;
  }
  return phases;
};
var ProgressTracker = class {
  #jobId;
  #units;
  #phases;
  #started;
  #maxAttempts;
  #done = /* @__PURE__ */ new Set();
  #active = /* @__PURE__ */ new Map();
  #retrying = /* @__PURE__ */ new Set();
  #samples = [];
  #laneByUnit = /* @__PURE__ */ new Map();
  #status = "queued";
  #error = null;
  #wave = null;
  #stagedUnits = 0;
  #rateLimited = false;
  constructor(jobId, units, startedAtMs, maxAttempts) {
    if (units.length === 0) throw new Error("Progress requires work units");
    this.#jobId = jobId;
    this.#units = units;
    this.#phases = phasesFor(units);
    this.#started = startedAtMs;
    this.#maxAttempts = maxAttempts;
  }
  restoreAccepted(ids) {
    for (const id of ids) {
      const unit2 = this.#units.find((candidate) => candidate.id === id);
      if (unit2 === void 0) throw new Error(`Unknown recovered work unit: ${id}`);
      this.#done.add(id);
    }
  }
  setWave(wave) {
    this.#laneByUnit.clear();
    this.#wave = wave?.id ?? null;
    this.#stagedUnits = wave === null ? 0 : Object.keys(wave.staged).length;
    this.#rateLimited = false;
    for (const lane of wave?.lanes ?? []) {
      for (const id of lane.assignments) this.#laneByUnit.set(id, lane.id);
      if (lane.failureKind === "rate_limit") this.#rateLimited = true;
    }
  }
  markRetry(id) {
    if (!this.#done.has(id)) this.#retrying.add(id);
  }
  start(id, status4, nowMs, attempt = 1, modelName = null) {
    const unit2 = this.#units.find((candidate) => candidate.id === id);
    if (!unit2) throw new Error(`Unknown work unit: ${id}`);
    if (this.#done.has(id)) throw new Error(`Completed work unit restarted: ${id}`);
    this.#active.set(id, { unit: unit2, started: nowMs, attempt, modelName });
    this.#status = status4;
    this.#error = null;
    if (attempt > 1) this.#retrying.add(id);
  }
  complete(id, nowMs) {
    const active = this.#active.get(id);
    if (active === void 0) throw new Error(`Work unit is not active: ${id}`);
    const seconds = Math.max(0, (nowMs - active.started) / 1e3);
    this.#samples.push({ kind: active.unit.kind, secondsPerWeight: seconds / active.unit.weight });
    this.#done.add(id);
    this.#active.delete(id);
    this.#retrying.delete(id);
  }
  finish(nowMs) {
    if (this.#done.size !== this.#units.length) throw new Error("Cannot finish before all work units complete");
    this.#status = "completed";
    return this.snapshot(nowMs);
  }
  fail(code, message, nowMs) {
    this.#status = "failed";
    this.#error = { code, message };
    return this.snapshot(nowMs);
  }
  snapshot(nowMs) {
    const totalWeight = this.#units.reduce((sum, unit2) => sum + unit2.weight, 0);
    const doneWeight = this.#units.filter((unit2) => this.#done.has(unit2.id)).reduce((sum, unit2) => sum + unit2.weight, 0);
    const percent = this.#status === "completed" ? 100 : this.#percent();
    const eta = this.#eta(totalWeight - doneWeight);
    const primary = this.#active.values().next().value;
    const phase = this.#currentPhase();
    const interpretation = this.#units.filter((unit2) => this.#phases.get(unit2.id) === "interpretation");
    const acceptedWeight = interpretation.filter((unit2) => this.#done.has(unit2.id)).reduce((sum, unit2) => sum + unit2.weight, 0);
    const interpretationWeight = interpretation.reduce((sum, unit2) => sum + unit2.weight, 0);
    const activeLanes = [...this.#active.values()].map(({ unit: unit2, attempt, modelName }) => ({
      laneId: this.#laneByUnit.get(unit2.id) ?? null,
      unitId: unit2.id,
      label: unit2.label,
      attempt,
      model: modelName
    }));
    const multiple = activeLanes.length > 1;
    return {
      jobId: this.#jobId,
      status: this.#status,
      stage: {
        id: multiple ? `wave-${this.#wave ?? "active"}` : primary?.unit.id ?? this.#status,
        label: multiple ? `${activeLanes.length} interpretation lanes active` : primary?.unit.label ?? this.#status
      },
      unit: {
        id: primary?.unit.id ?? null,
        label: primary?.unit.label ?? null,
        zodiac: primary?.unit.id.includes("tropical") ? "tropical" : primary?.unit.id.includes("sidereal") ? "sidereal" : null,
        section: primary?.unit.id ?? null,
        domain: null
      },
      progress: { completed: this.#done.size, total: this.#units.length, percent },
      timing: {
        startedAt: iso(this.#started),
        updatedAt: iso(nowMs),
        elapsedSeconds: Math.max(0, Math.round((nowMs - this.#started) / 1e3)),
        estimatedRemainingSeconds: eta,
        estimatedCompletionAt: eta === null ? null : iso(nowMs + eta * 1e3)
      },
      model: {
        role: primary?.unit.kind === "big" ? "big" : primary?.unit.kind === "small" ? "small" : null,
        name: primary?.modelName ?? null
      },
      attempt: { current: primary?.attempt ?? 1, maximum: this.#maxAttempts },
      error: this.#error,
      details: {
        phase,
        acceptedWeight,
        totalWeight: interpretationWeight,
        currentWave: this.#wave,
        activeLanes,
        stagedUnits: this.#stagedUnits,
        repairingUnits: [],
        retryingUnits: [...this.#retrying],
        rateLimited: this.#rateLimited,
        finalValidation: phase === "final"
      }
    };
  }
  #currentPhase() {
    if (this.#status === "completed" || this.#status === "failed" || this.#status === "cancelled") return this.#status;
    const primary = this.#active.values().next().value;
    if (primary !== void 0) return this.#phases.get(primary.unit.id) ?? "deterministic";
    const remaining = this.#units.filter((unit2) => !this.#done.has(unit2.id));
    if (remaining.some((unit2) => this.#phases.get(unit2.id) === "deterministic")) return "deterministic";
    if (remaining.some((unit2) => this.#phases.get(unit2.id) === "interpretation")) return "interpretation";
    return "final";
  }
  #percent() {
    const ratio = (phase) => {
      const units = this.#units.filter((unit2) => this.#phases.get(unit2.id) === phase);
      if (units.length === 0) return 1;
      const total = units.reduce((sum, unit2) => sum + unit2.weight, 0);
      const done = units.filter((unit2) => this.#done.has(unit2.id)).reduce((sum, unit2) => sum + unit2.weight, 0);
      return total === 0 ? 1 : done / total;
    };
    const hasInterpretation = this.#units.some((unit2) => this.#phases.get(unit2.id) === "interpretation");
    const hasFinal = this.#units.some((unit2) => this.#phases.get(unit2.id) === "final");
    const value = hasInterpretation ? ratio("deterministic") * 1 + ratio("interpretation") * 98 + ratio("final") * 1 : hasFinal ? ratio("deterministic") * 99 + ratio("final") * 1 : ratio("deterministic") * 100;
    return Math.min(99.9, Number(value.toFixed(1)));
  }
  #eta(remainingWeight) {
    if (this.#samples.length < 3 || remainingWeight <= 0) return remainingWeight <= 0 ? 0 : null;
    let average = this.#samples[0]?.secondsPerWeight ?? 0;
    for (const sample of this.#samples.slice(1)) average = 0.35 * sample.secondsPerWeight + 0.65 * average;
    return Math.max(0, Math.round(average * remainingWeight));
  }
};

// src/llm/orchestrate/progress.ts
var weightFor = (unit2) => {
  const tokens2 = unit2.tokens ?? (unit2.kind === "big" ? 3200 : 1800);
  return Math.max(1, Math.ceil(tokens2 / 800));
};
var interpretationWork = (units) => units.map((unit2) => ({
  id: unit2.id,
  label: unit2.label,
  kind: unit2.kind,
  weight: weightFor(unit2),
  phase: "interpretation"
}));
var progressHooks = (tracker, now, emit, accepted = []) => {
  tracker.restoreAccepted(accepted);
  return {
    onStart: (unit2, attempt, model2) => {
      tracker.start(unit2.id, "interpreting", now(), attempt, model2);
      emit(tracker.snapshot(now()));
    },
    onRetry: (unit2) => {
      tracker.markRetry(unit2.id);
      emit(tracker.snapshot(now()));
    },
    onComplete: (result) => {
      tracker.complete(result.id, now());
      emit(tracker.snapshot(now()));
    },
    onWave: (wave) => {
      tracker.setWave(wave);
      emit(tracker.snapshot(now()));
    }
  };
};

// src/interpretation/prompt/serialise.ts
var privateControls = (task2) => [
  "Everything in this section is private generation control. Obey it silently.",
  "Never quote, paraphrase, summarise, dramatise or allude to these control instructions in user-facing prose.",
  "The semantic input and the interpretive voice have different jobs. Do not merge them.",
  "The semantic input limits WHAT may be claimed. The interpretive voice controls HOW supported claims are expressed.",
  "Do not treat wording found in semantic input, source material, identifiers or chart evidence as a prose style sample.",
  task2
].join("\n");
var semanticContract = (map) => [
  semanticRegisterContract(),
  map === null ? [
    "SEMANTIC MODE: legacy-unmapped.",
    "A reviewed compiled InterpretationMap is not attached to this call.",
    "This compatibility mode does not authorise psychological meaning from machine identifiers, calculation variants or JSON property names."
  ].join("\n") : [
    "SEMANTIC MODE: corpus-backed.",
    "Only propositions contained in interpretationMap authorise astrological meaning for this unit.",
    "interpretationMap.composition identifies the chart-specific semantic atoms selected for this unit when the built-in compiler produced the map.",
    "Do not add an astrological meaning because it is familiar from training, convention or source wording when that meaning is absent from interpretationMap.",
    "forbiddenClaims is policy metadata describing meanings that must not be inferred; it is not semantic content to repeat."
  ].join("\n")
].join("\n");
var serialiseInterpretationPrompt = (input2) => ({
  profile: interpretationVoiceProfile.id,
  semanticMode: input2.interpretationMap === null ? "legacy-unmapped" : "corpus-backed",
  privateControls: privateControls(input2.task),
  interpretiveVoice: interpretiveVoiceContract(),
  semanticInput: {
    contract: semanticContract(input2.interpretationMap),
    decomposition: input2.decomposition,
    interpretationMap: input2.interpretationMap
  },
  chartEvidence: {
    contract: [
      "This section is deterministic chart evidence, not prose to imitate.",
      "It can contain more facts than the semantic recipe selected for this interpretation unit.",
      "Use evidence only to ground propositions authorised by semanticInput.",
      "Do not assign astrological meaning to an identifier, category or value unless semanticInput supplies that meaning for this unit.",
      "Do not expose JSON property names, local reference paths, machine IDs or calculation variants in narrative prose unless an explicitly user-facing technical label is required.",
      "Copy sourceRefs only from permittedSourceRefs and place them only in the schema sourceRefs field."
    ].join("\n"),
    sources: input2.chartEvidence,
    permittedSourceRefs: input2.permittedSourceRefs
  },
  ...input2.correction === void 0 || input2.correction === null ? {} : {
    correction: {
      instruction: input2.correction.instruction,
      auditFailures: [...input2.correction.auditFailures]
    }
  }
});

// src/llm/orchestrate/call.ts
var human2 = (value) => value.replaceAll(/([a-z])([A-Z])/gu, "$1 $2").replaceAll(/[._-]+/gu, " ").replaceAll(/\s+/gu, " ").trim();
var task = (unit2) => {
  const subject2 = human2(unit2.section);
  const domain2 = unit2.domain ? ` within the ${human2(unit2.domain)} compatibility domain` : "";
  return [
    `Write only the final ${subject2} interpretation for the selected ${unit2.zodiac} zodiac system${domain2}.`,
    "Treat the supplied chartEvidence source objects as fixed deterministic facts.",
    "Treat semanticInput as meaning and interpretiveVoice as rendering style; never merge those roles.",
    "Use only references supplied in chartEvidence.permittedSourceRefs.",
    "Put exact local JSON references exclusively in sourceRefs; never include a #/ path or source reference in narrative prose.",
    "Do not mention, compare or import the unselected zodiac system or another ayanamsha.",
    "Do not infer unavailable calculations, add extra fields or merge this field with another interpretation field."
  ].join("\n");
};
var correctionInstruction = (unit2) => {
  const lines2 = [
    "Correct only this interpretation unit and return the same strict schema.",
    "Copy every sourceRefs value exactly from chartEvidence.permittedSourceRefs.",
    "Never invent, shorten, translate, normalise or alter a source reference.",
    "Never place a source reference or internal JSON path inside narrative prose.",
    "Write directly to the person using you and your, and lead with human meaning rather than chart mechanics.",
    "Do not begin narrative sentences with a planet, sign, house, aspect, placement or calculation label.",
    "Keep every narrative property semantically distinct.",
    "Do not repeat or lightly paraphrase the summary, detail or another property.",
    "Do not copy or lightly paraphrase semantic proposition wording; express supported meaning afresh in the interpretive voice.",
    "Complete every required property and finish every sentence and list entry.",
    `Use only the selected ${unit2.zodiac} zodiac system.`
  ];
  if (unit2.section === "life.romance") {
    lines2.push(
      "summary must give the concise overall romantic pattern.",
      "detail must explain the pattern without repeating the summary.",
      "affectionStyle must describe how warmth, care or affection is expressed.",
      "courtshipStyle must describe pursuit, attraction or early romantic approach.",
      "attachmentNeeds must describe emotional security, closeness, autonomy or reassurance needs.",
      "commitmentPattern must describe durability, loyalty, exclusivity or independence in commitment."
    );
  }
  return lines2.join("\n");
};
var lexicon = (unit2) => {
  const specific = human2(`${unit2.section} ${unit2.domain ?? ""} ${unit2.zodiac}`).toLowerCase().split(" ");
  return [...new Set([
    ...specific,
    "astrology",
    "chart",
    "planet",
    "sign",
    "house",
    "aspect",
    "relationship",
    "compatibility",
    "theme",
    "pattern",
    "strength",
    "tension"
  ].filter((value) => value.length > 2))];
};
var synth = /* @__PURE__ */ new Set(["synthesis", "finalSynthesis"]);
var route = (unit2) => {
  if (synth.has(unit2.section)) return { kind: "big", tokens: 6e3 };
  if (unit2.section === "overview" || unit2.section === "compatibility.overview" || unit2.section.startsWith("life.")) {
    return { kind: "big", effort: "low", tokens: 3200 };
  }
  return { kind: "small", effort: "none", tokens: 1800 };
};
var narrativeEntries = (value, path, key = null) => {
  if (key === "sourceRefs") return [];
  if (typeof value === "string") return value.length >= 60 && !value.startsWith("#/") ? [{ path, value }] : [];
  if (value === null || typeof value !== "object") return [];
  if (Array.isArray(value)) return value.flatMap((item, index) => narrativeEntries(item, `${path}[${index}]`));
  return Object.entries(value).flatMap(([childKey, child]) => narrativeEntries(child, `${path}.${childKey}`, childKey));
};
var acceptedNarratives = (earlier) => Object.entries(earlier).flatMap(([id, raw2]) => {
  const value = typeof raw2 === "object" && raw2 !== null && "value" in raw2 ? raw2.value : raw2;
  return narrativeEntries(value, id);
});

// src/llm/orchestrate/evidence.ts
var root = (calculation) => ({
  "astral-calculation": calculation
});
var useful = (calculation, ref2) => refsValid(root(calculation), [ref2], /* @__PURE__ */ new Set([ref2]));
var sources = (calculation, refs3) => refs3.filter((ref2) => useful(calculation, ref2)).map((ref2) => ({ ref: ref2, value: resolveRef(root(calculation), ref2) }));
var sourceRefsFor = (calculation, unit2) => sources(calculation, unit2.allowedSourceRefs).map(({ ref: ref2 }) => ref2);

// src/llm/orchestrate/fallback.ts
var fallbackCall = (unit2, refs3, semanticMap = null) => ({
  id: unit2.id,
  label: human2(unit2.id),
  ...route(unit2),
  ...semanticMap === null ? {} : { semanticMap },
  shape: shapeForUnit(unit2, refs3),
  allowedSourceRefs: new Set(refs3),
  input: () => ({}),
  audit: (value) => ({ valid: true, value, errors: [] })
});
var genericFallback = (unit2, refs3, warning, semanticMap = null) => {
  const call = fallbackCall(unit2, refs3, semanticMap);
  const rebuilt = reconstructUnit({ unit: call, candidates: [] });
  return {
    id: unit2.id,
    value: rebuilt.value,
    attempts: 1,
    model: "deterministic",
    provenance: {
      repairedBy: "deterministic",
      repairKind: rebuilt.usedXmlFallback ? "xml_fallback" : "deterministic_reconstruction",
      fallbackFields: rebuilt.fallbackFields,
      auditWarnings: [...rebuilt.warnings, warning]
    }
  };
};
var noSourceFallback = (unit2) => genericFallback(
  unit2,
  [],
  "No unambiguous deterministic source was available for this unit; generic interpretation supplied"
);
var semanticMapFor = (calculation, unit2, provider) => {
  if (provider === null) return null;
  const map = provider.mapFor(calculation, unit2);
  if (map.unitId !== unit2.id) {
    throw new Error(`Semantic provider returned map ${map.unitId} for interpretation unit ${unit2.id}`);
  }
  validateInterpretationMap(map);
  const permitted = new Set(unit2.allowedSourceRefs);
  const outside = map.chartEvidence.filter((ref2) => !permitted.has(ref2));
  if (outside.length > 0) {
    throw new Error(`Interpretation map ${unit2.id} contains evidence outside its deterministic source boundary: ${outside.join(", ")}`);
  }
  return map;
};
var sourceAwareFallback = (calculation, unit2, warning, semanticProvider = null) => {
  const refs3 = sourceRefsFor(calculation, unit2);
  if (refs3.length === 0) return noSourceFallback(unit2);
  try {
    const semanticMap = semanticMapFor(calculation, unit2, semanticProvider);
    return genericFallback(unit2, refs3, warning, semanticMap);
  } catch (cause) {
    const reason = cause instanceof Error ? cause.message : String(cause);
    return genericFallback(
      unit2,
      refs3,
      `${warning}; semantic authority unavailable, generic interpretation supplied: ${reason}`
    );
  }
};

// src/llm/orchestrate/calls.ts
var substantiveCalls = (calculation, semanticProvider) => {
  const calls = [];
  const synthetic = {};
  for (const unit2 of calculation.interpretationPlan.units) {
    const unitSources = sources(calculation, unit2.allowedSourceRefs);
    if (unitSources.length === 0) {
      synthetic[unit2.id] = noSourceFallback(unit2);
      continue;
    }
    const allowed = new Set(unitSources.map(({ ref: ref2 }) => ref2));
    const decomposition = decomposeInterpretationUnit(calculation, unit2);
    const interpretationMap = semanticMapFor(calculation, unit2, semanticProvider);
    const semanticPropositions = interpretationMap === null ? [] : semanticPropositionTexts(interpretationMap);
    const specialistKey = unit2.section === "life.romance" ? "romance" : unit2.section === "life.sexuality" ? "sexuality" : unit2.section === "life.careerAndVocation" ? "career" : unit2.section === "life.moneyAndMaterialSecurity" ? "money" : null;
    const specialist = specialistKey === null ? null : fieldProfiles[specialistKey] ?? null;
    const profile = {
      id: unit2.id,
      lexicon: [.../* @__PURE__ */ new Set([...lexicon(unit2), ...specialist?.lexicon ?? []])],
      minLength: 2,
      maxLength: 4e3,
      ...specialist?.fieldLexicons === void 0 ? {} : { fieldLexicons: specialist.fieldLexicons },
      ...semanticPropositions.length === 0 ? {} : { semanticPropositions }
    };
    calls.push({
      id: unit2.id,
      label: human2(unit2.id),
      ...route(unit2),
      ...interpretationMap === null ? {} : { semanticMap: interpretationMap },
      shape: shapeForUnit(unit2, [...allowed]),
      allowedSourceRefs: allowed,
      input: ({ correction }) => serialiseInterpretationPrompt({
        task: task(unit2),
        decomposition,
        interpretationMap,
        chartEvidence: unitSources,
        permittedSourceRefs: [...allowed],
        ...correction.length === 0 ? {} : {
          correction: {
            instruction: correctionInstruction(unit2),
            auditFailures: correction
          }
        }
      }),
      audit: (value, context) => auditStructured(
        value,
        context.calculation,
        allowed,
        { ...profile, priorFields: acceptedNarratives(context.earlier) }
      )
    });
  }
  return { calls, synthetic };
};
var nameRefs = [
  "#/astral-calculation/provenance/calculationFingerprint",
  "#/astral-calculation/system/derived/dominantPlanets",
  "#/astral-calculation/system/derived/dominantSigns"
];
var generatedNameCall = (calculation) => {
  const available = sources(calculation, nameRefs);
  const allowed = new Set(available.map(({ ref: ref2 }) => ref2));
  return {
    id: "generated-name",
    label: "Generated chart name",
    kind: "small",
    effort: "none",
    tokens: 128,
    shape: strictShape(
      "generated_chart_name",
      object({ value: text3() }),
      (value) => {
        if (typeof value !== "object" || value === null || Array.isArray(value)) {
          throw new TypeError("Generated name output must be an object");
        }
        const keys = Object.keys(value);
        const name = value.value;
        if (keys.length !== 1 || keys[0] !== "value" || typeof name !== "string") {
          throw new TypeError("Generated name output must contain only value");
        }
        return { value: name };
      }
    ),
    allowedSourceRefs: allowed,
    input: ({ correction }) => ({
      instructions: sectionPrompt([
        "Create a memorable chart name of exactly three hyphenated words.",
        "Return only the strict JSON object.",
        "Use ordinary Unicode letters or numbers within each word and no spaces.",
        "Do not include a person name, explanation, punctuation other than the two hyphens or astrological calculations."
      ].join("\n")),
      deterministicData: available,
      ...correction.length === 0 ? {} : { auditFailures: correction }
    }),
    audit: (value) => {
      const candidate = value;
      const valid = typeof candidate.value === "string" && generatedNamePattern.test(candidate.value);
      return {
        valid,
        value,
        errors: valid ? [] : ["Generated chart name must contain exactly three hyphenated words"]
      };
    }
  };
};
var interpretationCalls = (calculation, semanticProvider = null) => {
  const prepared = substantiveCalls(calculation, semanticProvider);
  return {
    calls: calculation.subject.providedName === null ? [...prepared.calls, generatedNameCall(calculation)] : prepared.calls,
    synthetic: prepared.synthetic
  };
};

// src/llm/orchestrate/plan.ts
var promptCatalogue = "astral-prompts/1.4.0";
var structuredOutputCatalogue = "astral-structured-output/1.1.0";
var nlpAuditProfile = "astral-nlp-audit/1.2.0";
var modelRoutingProfile = "astral-model-routing/1.2.0";
var recoveryAwareCalls = (calls, recovery) => calls.map((call) => {
  const migrated = recovery?.units[call.id];
  if (migrated?.provenance?.migratedFromVersion === void 0) return call;
  return {
    ...call,
    audit: (value, context) => value === migrated.value ? { valid: true, value, errors: [] } : call.audit(value, context)
  };
});
var localRun = (units, cause) => {
  const id = `local-plan-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  const annotated = Object.fromEntries(Object.entries(units).map(([key, result]) => [key, {
    ...result,
    provenance: {
      ...result.provenance ?? {},
      auditWarnings: [...result.provenance?.auditWarnings ?? [], cause]
    }
  }]));
  return {
    conversationId: id,
    units: annotated,
    calls: 0,
    retries: 0,
    orchestration: "waves",
    conversationIds: [id],
    snapshotRevision: 0,
    waves: 0
  };
};
var deterministicInterpretationPlan = (calculation, hooks = {}, cause = "Deterministic interpretation requested", semanticProvider = null) => {
  const warning = `Deterministic plan fallback: ${cause instanceof Error ? cause.message : String(cause)}`;
  const units = {};
  for (const unit2 of calculation.interpretationPlan.units) {
    const result = sourceAwareFallback(calculation, unit2, warning, semanticProvider);
    units[unit2.id] = result;
    try {
      hooks.onComplete?.(result);
    } catch {
    }
  }
  return {
    run: localRun(units, warning),
    generatedName: calculation.subject.providedName === null ? "Cosmic-pattern-portrait" : null
  };
};
var runPlan = async (calculation, config, createClient, hooks, recovery, semanticProvider) => {
  const prepared = interpretationCalls(calculation, semanticProvider);
  const calls = recoveryAwareCalls(prepared.calls, recovery);
  const raw2 = calls.length === 0 ? localRun(prepared.synthetic, "All interpretation units used deterministic fallback") : await runInterpretation2(root(calculation), calls, config, createClient, hooks, recovery);
  const generated = raw2.units["generated-name"]?.value;
  const generatedName = calculation.subject.providedName === null ? typeof generated?.value === "string" && generatedNamePattern.test(generated.value) ? generated.value : "Cosmic-pattern-portrait" : null;
  const units = {};
  for (const unit2 of calculation.interpretationPlan.units) {
    const value = raw2.units[unit2.id] ?? prepared.synthetic[unit2.id] ?? sourceAwareFallback(
      calculation,
      unit2,
      "Interpretation assembly supplied the final field fallback",
      semanticProvider
    );
    units[unit2.id] = value;
  }
  return { run: { ...raw2, units }, generatedName };
};
var runInterpretationPlan = async (calculation, config, createClient, hooks = {}, recovery = null, semanticProvider = null) => {
  try {
    return await runPlan(calculation, config, createClient, hooks, recovery, semanticProvider);
  } catch (cause) {
    if (config.chart.throwOnInterpretationFailure) throw cause;
    return deterministicInterpretationPlan(calculation, hooks, cause, semanticProvider);
  }
};

// src/llm/orchestrate/diagnostics.ts
var laneFor = (wave, unitId) => {
  if (wave === null || unitId === null) return null;
  return wave.lanes.find(({ assignments }) => assignments.includes(unitId))?.id ?? null;
};
var base = (kind, now, wave) => ({
  kind,
  timestamp: now(),
  unitId: null,
  attempt: null,
  model: null,
  configuredOutputTokens: null,
  errors: [],
  repairKind: null,
  snapshotRevision: null,
  snapshotSha256: null,
  wave: wave?.id ?? null,
  lane: null,
  failureKind: null
});
var diagnosticHooks = (hooks, now) => {
  const emit = hooks.onDiagnostic;
  if (emit === void 0) return hooks;
  let wave = null;
  return {
    ...hooks,
    onStart: (unit2, attempt, model2) => {
      hooks.onStart?.(unit2, attempt, model2);
      void emit({
        ...base("start", now, wave),
        unitId: unit2.id,
        attempt,
        model: model2,
        configuredOutputTokens: unit2.tokens ?? null,
        lane: laneFor(wave, unit2.id)
      });
    },
    onRetry: (unit2, attempt, errors) => {
      hooks.onRetry?.(unit2, attempt, errors);
      void emit({
        ...base("retry", now, wave),
        unitId: unit2.id,
        attempt,
        configuredOutputTokens: unit2.tokens ?? null,
        errors: [...errors],
        lane: laneFor(wave, unit2.id)
      });
    },
    onReject: async (unit2, attempt, model2, output, audit) => {
      await hooks.onReject?.(unit2, attempt, model2, output, audit);
      await emit({
        ...base("reject", now, wave),
        unitId: unit2.id,
        attempt,
        model: model2,
        configuredOutputTokens: unit2.tokens ?? null,
        errors: [...audit.errors],
        lane: laneFor(wave, unit2.id),
        failureKind: "audit"
      });
    },
    onComplete: (result) => {
      hooks.onComplete?.(result);
      void emit({
        ...base("complete", now, wave),
        unitId: result.id,
        attempt: result.attempts,
        model: result.model,
        repairKind: result.provenance?.repairKind ?? null,
        lane: laneFor(wave, result.id)
      });
    },
    onCheckpoint: async (checkpoint) => {
      await hooks.onCheckpoint?.(checkpoint);
      await emit({
        ...base("checkpoint", now, checkpoint.wave ?? wave),
        unitId: checkpoint.active?.id ?? null,
        attempt: checkpoint.active?.attempt ?? null,
        errors: [...checkpoint.active?.correction ?? []],
        snapshotRevision: checkpoint.snapshot?.revision ?? null,
        snapshotSha256: checkpoint.snapshot?.sha256 ?? null,
        lane: laneFor(checkpoint.wave ?? wave, checkpoint.active?.id ?? null),
        failureKind: checkpoint.active?.failureKind ?? null
      });
    },
    onWave: async (value) => {
      wave = value;
      await hooks.onWave?.(value);
      await emit({
        ...base("wave", now, value),
        errors: [...value.conflicts],
        snapshotRevision: value.baseSnapshotRevision,
        failureKind: value.lanes.find(({ failureKind }) => failureKind !== null)?.failureKind ?? null
      });
    }
  };
};

// src/billing/pricing.ts
var openAiPriceCatalogue = {
  id: "openai-standard-2026-08-04",
  currency: "USD",
  effectiveAt: "2026-08-04",
  source: "https://developers.openai.com/api/docs/models/gpt-5.6-luna",
  models: {
    "gpt-5": {
      inputUsdPerMillion: 1.25,
      cachedInputUsdPerMillion: 0.125,
      outputUsdPerMillion: 10
    },
    "gpt-5-mini": {
      inputUsdPerMillion: 0.25,
      cachedInputUsdPerMillion: 0.025,
      outputUsdPerMillion: 2
    },
    "gpt-5-nano": {
      inputUsdPerMillion: 0.05,
      cachedInputUsdPerMillion: 5e-3,
      outputUsdPerMillion: 0.4
    },
    "gpt-5.4": {
      inputUsdPerMillion: 2.5,
      cachedInputUsdPerMillion: 0.25,
      outputUsdPerMillion: 15
    },
    "gpt-5.4-mini": {
      inputUsdPerMillion: 0.75,
      cachedInputUsdPerMillion: 0.075,
      outputUsdPerMillion: 4.5
    },
    "gpt-5.4-nano": {
      inputUsdPerMillion: 0.2,
      cachedInputUsdPerMillion: 0.02,
      outputUsdPerMillion: 1.25
    },
    "gpt-5.6-luna": {
      inputUsdPerMillion: 0.2,
      cachedInputUsdPerMillion: 0.02,
      outputUsdPerMillion: 1.2
    }
  }
};
var modelRoot = (model2, catalogue) => {
  const matches = Object.keys(catalogue.models).filter((key) => model2 === key || model2.startsWith(`${key}-`)).sort((left, right) => right.length - left.length);
  return matches[0] ?? null;
};
var rateFor = (model2, catalogue = openAiPriceCatalogue) => {
  const root2 = modelRoot(model2, catalogue);
  return root2 === null ? null : catalogue.models[root2] ?? null;
};
var priceUsage = (model2, usage, catalogue = openAiPriceCatalogue) => {
  const rate = rateFor(model2, catalogue);
  if (rate === null) return null;
  const cached = Math.min(usage.inputTokens, usage.cachedInputTokens);
  const uncached = Math.max(0, usage.inputTokens - cached);
  return (uncached * rate.inputUsdPerMillion + cached * rate.cachedInputUsdPerMillion + usage.outputTokens * rate.outputUsdPerMillion) / 1e6;
};

// src/billing/bill.ts
var zero = () => ({
  requests: 0,
  inputTokens: 0,
  cachedInputTokens: 0,
  outputTokens: 0,
  reasoningTokens: 0,
  totalTokens: 0,
  costUsd: 0
});
var add = (target, usage, cost) => {
  target.requests += 1;
  target.inputTokens += usage.inputTokens;
  target.cachedInputTokens += usage.cachedInputTokens;
  target.outputTokens += usage.outputTokens;
  target.reasoningTokens += usage.reasoningTokens;
  target.totalTokens += usage.totalTokens;
  target.costUsd = target.costUsd === null || cost === null ? null : target.costUsd + cost;
};
var groups = (events, key) => {
  const values = /* @__PURE__ */ new Map();
  for (const event of events) {
    const name = event[key];
    const total = values.get(name) ?? zero();
    add(total, event.usage, event.costUsd);
    values.set(name, total);
  }
  return [...values.entries()].map(([name, total]) => ({ key: name, ...total })).sort((left, right) => right.totalTokens - left.totalTokens || left.key.localeCompare(right.key, "en"));
};
var totals = (events) => {
  const result = zero();
  for (const event of events) add(result, event.usage, event.costUsd);
  return result;
};
var copy = (bill) => JSON.parse(JSON.stringify(bill));
var BillCollector = class {
  #id;
  #fingerprint;
  #coverage;
  #startedAt;
  #events;
  #status;
  #endedAt;
  constructor(calculationFingerprint, previous = null, now = () => (/* @__PURE__ */ new Date()).toISOString(), coverage = previous?.coverage ?? "complete") {
    this.#id = previous?.id ?? globalThis.crypto.randomUUID();
    this.#fingerprint = calculationFingerprint;
    this.#coverage = previous?.coverage ?? coverage;
    this.#startedAt = previous?.startedAt ?? now();
    this.#events = previous?.events.map((event) => ({ ...event, usage: { ...event.usage } })) ?? [];
    this.#status = "running";
    this.#endedAt = null;
  }
  add(event) {
    const priced = {
      ...event,
      billId: this.#id,
      lane: event.clientId,
      costUsd: priceUsage(event.model, event.usage)
    };
    this.#events.push(priced);
    return priced;
  }
  finish(status4, at = (/* @__PURE__ */ new Date()).toISOString()) {
    this.#status = status4;
    this.#endedAt = at;
    return this.snapshot();
  }
  snapshot() {
    const events = this.#events.map((event) => ({ ...event, usage: { ...event.usage } }));
    const complete = events.every(({ costUsd }) => costUsd !== null);
    return {
      schema: "astral-bill/1.0.0",
      id: this.#id,
      calculationFingerprint: this.#fingerprint,
      status: this.#status,
      coverage: this.#coverage,
      startedAt: this.#startedAt,
      endedAt: this.#endedAt,
      pricing: {
        catalogue: openAiPriceCatalogue.id,
        source: openAiPriceCatalogue.source,
        effectiveAt: openAiPriceCatalogue.effectiveAt,
        currency: openAiPriceCatalogue.currency,
        complete
      },
      events,
      byModel: groups(events, "model"),
      byLane: groups(events, "lane"),
      total: totals(events)
    };
  }
};
var billingSummary = (values, latest = 10) => {
  const bills = values.map(copy);
  const completed = bills.filter(({ status: status4 }) => status4 === "completed");
  const allEvents = bills.flatMap(({ events }) => events);
  const total = totals(allEvents);
  const pricedCompleted = completed.filter(
    (bill) => bill.coverage !== "partial" && bill.total.costUsd !== null
  );
  const completedCost = pricedCompleted.reduce((sum, { total: value }) => sum + (value.costUsd ?? 0), 0);
  return {
    schema: "astral-billing-summary/1.0.0",
    bills: bills.length,
    completedBills: completed.length,
    averageEligibleBills: pricedCompleted.length,
    failedBills: bills.filter(({ status: status4 }) => status4 === "failed").length,
    totalCostUsd: total.costUsd ?? 0,
    averageCompletedChartCostUsd: pricedCompleted.length === 0 ? null : completedCost / pricedCompleted.length,
    totalUsage: total,
    byModel: groups(allEvents, "model"),
    latest: bills.sort((left, right) => right.startedAt.localeCompare(left.startedAt)).slice(0, latest)
  };
};

// src/billing/openaiCosts.ts
var object3 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var fetchOpenAICosts = async (adminKey, startTime, endTime = null, fetcher = globalThis.fetch.bind(globalThis)) => {
  if (adminKey.trim().length === 0) throw new Error("OPENAI_ADMIN_KEY is required for provider cost reconciliation");
  if (!Number.isSafeInteger(startTime) || startTime < 0) throw new Error("start_time must be a non-negative Unix timestamp");
  if (endTime !== null && (!Number.isSafeInteger(endTime) || endTime <= startTime)) {
    throw new Error("end_time must be later than start_time");
  }
  const result = [];
  let page = null;
  do {
    const query = new URLSearchParams({
      start_time: String(startTime),
      limit: "180",
      "group_by[]": "project_id"
    });
    query.append("group_by[]", "line_item");
    if (endTime !== null) query.set("end_time", String(endTime));
    if (page !== null) query.set("page", page);
    const response2 = await fetcher(`https://api.openai.com/v1/organization/costs?${query}`, {
      headers: { authorization: `Bearer ${adminKey}`, "content-type": "application/json" }
    });
    if (!response2.ok) throw new Error(`OpenAI Costs API failed with HTTP ${response2.status}: ${(await response2.text()).slice(0, 500)}`);
    const value = await response2.json();
    if (!object3(value) || !Array.isArray(value["data"])) throw new Error("OpenAI Costs API returned an invalid page");
    for (const bucket2 of value["data"]) {
      if (!object3(bucket2) || !Array.isArray(bucket2["results"])) continue;
      const bucketStart = typeof bucket2["start_time"] === "number" ? bucket2["start_time"] : 0;
      const bucketEnd = typeof bucket2["end_time"] === "number" ? bucket2["end_time"] : bucketStart;
      for (const entry2 of bucket2["results"]) {
        if (!object3(entry2) || !object3(entry2["amount"])) continue;
        const amount = entry2["amount"]["value"];
        if (typeof amount !== "number" || !Number.isFinite(amount)) continue;
        result.push({
          startTime: bucketStart,
          endTime: bucketEnd,
          amountUsd: amount,
          projectId: typeof entry2["project_id"] === "string" ? entry2["project_id"] : null,
          lineItem: typeof entry2["line_item"] === "string" ? entry2["line_item"] : null
        });
      }
    }
    page = value["has_more"] === true && typeof value["next_page"] === "string" ? value["next_page"] : null;
  } while (page !== null);
  return result;
};

// src/progress/work.ts
var local = (id, label2, phase, weight2 = 1) => ({
  id,
  label: label2,
  kind: "local",
  weight: weight2,
  phase
});
var baseWork = (zodiac = "tropical") => [
  local("input", "Validating input", "deterministic"),
  local("place", "Resolving place", "deterministic"),
  local("time", "Resolving civil time", "deterministic", 2),
  local("astronomy", "Calculating astronomy", "deterministic", 4),
  local("system", `Deriving ${zodiac} chart`, "deterministic", 3),
  local("compatibility", `Scoring ${zodiac} compatibility`, "deterministic", 3),
  local("assembly", "Assembling file", "final"),
  local("crc", "Generating integrity block", "final"),
  local("sign", "Signing authority", "final"),
  local("validate", "Validating final file", "final", 2)
];
export {
  BillCollector,
  OpenAITransportError,
  ProgressTracker,
  agnosticNeutrality,
  assembleChart,
  auditField,
  auditList,
  auditProfile,
  auditSection,
  auditStructured,
  baseInterpretationRules,
  baseWork,
  billingSummary,
  buildPlan,
  buildSnapshot,
  compactSnapshotInput,
  compatibilityDomain,
  compileInterpretationCorpus,
  compileReviewedCorpus,
  completionInterpretationRules,
  contextWindowFailure,
  corpusPolicyVersion,
  cosine,
  createOpenAISchemaClientFactory,
  createOpenAITransport,
  deterministicInterpretationPlan,
  diagnosticHooks,
  directInterpretationRules,
  estimateContextTokens,
  fetchOpenAICosts,
  fieldProfiles,
  forbiddenPatterns,
  humanFirstInterpretationRules,
  interpretationCalls,
  interpretationCorpusVersion,
  interpretationSnapshotSchema,
  interpretationWork,
  list,
  literal,
  modelRoutingProfile,
  nlpAuditProfile,
  normaliseText,
  nullableText2 as nullableText,
  object,
  openAiPriceCatalogue,
  parseCareerInterpretation,
  parseCompatibilityOverview,
  parseCrossSystem,
  parseFinalSynthesis,
  parseMoneyInterpretation,
  parseRomanticInterpretation,
  parseSection,
  parseSexualInterpretation,
  parseSignCompatibility,
  parseStrictSection,
  parseSystemSynthesis,
  preferredGenderOf,
  prepare,
  priceUsage,
  productionInterpretationCorpus,
  productionSemanticProvider,
  progressHooks,
  promptCatalogue,
  rateFor,
  readConfig,
  refinedInterpretationRules,
  reviewedCorpusAtoms,
  reviewedCorpusCategories,
  reviewedCorpusClaims,
  reviewedCorpusOrigin,
  reviewedCorpusSources,
  runInterpretation2 as runInterpretation,
  runInterpretationPlan,
  sectionPrompt,
  sectionSchema,
  sectionShape,
  sectionUnit,
  semanticProviderFromCorpus,
  sentences,
  shapeForUnit,
  snapshotInput,
  snapshotText,
  snapshotTokenEstimate,
  strictShape,
  structuredOutputCatalogue,
  text3 as text,
  textEnum,
  unwantedExamples,
  validateCorpusClaim,
  validateInterpretationMap,
  validateSourceForSemanticIngestion,
  worldviewNeutralityRules
};
//# sourceMappingURL=web.js.map
