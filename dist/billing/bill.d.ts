import type { BillCoverage, BillStatus, BillingSummary, ChartBill, PricedUsage, ResponseUsage } from "./types.js";
export declare class BillCollector {
    #private;
    constructor(calculationFingerprint: string, previous?: ChartBill | null, now?: () => string, coverage?: BillCoverage);
    add(event: ResponseUsage): PricedUsage;
    finish(status: Exclude<BillStatus, "running">, at?: string): ChartBill;
    snapshot(): ChartBill;
}
export declare const billingSummary: (values: readonly ChartBill[], latest?: number) => BillingSummary;
//# sourceMappingURL=bill.d.ts.map