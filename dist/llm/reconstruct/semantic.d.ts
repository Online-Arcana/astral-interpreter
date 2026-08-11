import type { InterpretationMap } from "../../interpretation/corpus/types.js";
/**
 * Deterministic prose belongs to the interpretive voice, not to source text.
 * The map contributes approved concepts; fixed application templates own the
 * sentence structure. Proposition text is intentionally never copied here.
 *
 * Once an InterpretationMap has passed validation, deterministic reconstruction
 * must remain inside that semantic authority. A corpus-backed unit must never
 * fall through to the legacy XML topic interpolation simply because one prose
 * template was rejected by the worldview scanner.
 */
export declare const semanticFallbackText: (map: InterpretationMap, key: string) => string;
//# sourceMappingURL=semantic.d.ts.map