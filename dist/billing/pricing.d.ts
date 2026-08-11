import type { PriceCatalogue, PriceRate, TokenUsage } from "./types.js";
export declare const openAiPriceCatalogue: PriceCatalogue;
export declare const rateFor: (model: string, catalogue?: PriceCatalogue) => PriceRate | null;
export declare const priceUsage: (model: string, usage: TokenUsage, catalogue?: PriceCatalogue) => number | null;
//# sourceMappingURL=pricing.d.ts.map