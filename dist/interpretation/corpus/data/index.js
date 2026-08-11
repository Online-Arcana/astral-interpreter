import { compileInterpretationCorpus } from "../compile.js";
import { parseReviewedCorpusXml } from "../xml.js";
import { corpusSourceManifestName, corpusSourceManifestXml, corpusXmlDocuments, } from "./xml.generated.js";
const parsed = parseReviewedCorpusXml(corpusSourceManifestXml, corpusSourceManifestName, corpusXmlDocuments);
/** The authored production corpus is XML; these arrays are parsed runtime records. */
export const reviewedCorpusOrigin = "xml";
export const reviewedCorpusSources = parsed.sources;
export const reviewedCorpusAtoms = parsed.atoms;
export const reviewedCorpusClaims = parsed.claims;
export const reviewedCorpusCategories = parsed.categories;
export const compileReviewedCorpus = (requireComplete = false) => compileInterpretationCorpus({
    sources: reviewedCorpusSources,
    atoms: reviewedCorpusAtoms,
    claims: reviewedCorpusClaims,
    requireComplete,
});
//# sourceMappingURL=index.js.map