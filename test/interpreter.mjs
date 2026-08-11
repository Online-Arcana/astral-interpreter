import assert from "node:assert/strict";
import { randomChart } from "astral-core";
import {
  compileReviewedCorpus,
  prepare,
  reviewedCorpusOrigin,
} from "../dist/index.js";

const rng = (() => {
  let state = 0x1a2b3c4d;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 0x1_0000_0000;
  };
})();

const calculation = await randomChart({ zodiac: "tropical", ayanamsha: "lahiri" }, rng);
const input = prepare(calculation, {
  name: "Interpreter Test",
  language: "en-GB",
  gender: "non-binary",
});

assert.equal(input.schema, "astral-calculation/1.1.0");
assert.equal(input.provenance.calculationFingerprint, calculation.provenance.calculationFingerprint);
assert.equal(input.subject.providedName, "Interpreter Test");
assert.equal(input.subject.language, "en-GB");
assert.equal(input.subject.preferredGender, "non-binary");
assert.equal(input.settings.interpretationMode, input.system.zodiac);
assert.ok(input.interpretationPlan.units.length > 0);
assert.equal(input.interpretationPlan.zodiac, input.system.zodiac);

assert.equal(reviewedCorpusOrigin, "xml");
const corpus = compileReviewedCorpus(true);
assert.equal(corpus.worldview, "agnostic");
assert.ok(Object.keys(corpus.atoms).length > 0);
assert.ok(Object.keys(corpus.claims).length > 0);

console.log("astral-interpreter regression tests passed");
