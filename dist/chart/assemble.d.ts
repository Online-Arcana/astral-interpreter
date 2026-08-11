import type { InterpretationRun } from "../llm/orchestrate/types.js";
import type { AstralChart } from "../types/chart.js";
import type { AstralCalculation } from "../types/file.js";
export interface ChartAssemblyOptions {
    generatedAt: string;
    bigModel: string;
    smallModel: string;
    structuredOutputSchema: string;
    promptCatalogue: string;
    astrologyCatalogue: string;
    nlpAuditProfile: string;
    generatedName?: string;
    unitSchemas?: Readonly<Record<string, string>>;
}
export declare const assembleChart: (calculation: AstralCalculation, run: InterpretationRun, options: ChartAssemblyOptions) => AstralChart;
//# sourceMappingURL=assemble.d.ts.map