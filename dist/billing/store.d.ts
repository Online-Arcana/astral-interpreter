import type { BillingSummary, ChartBill } from "./types.js";
export declare class BillStore {
    #private;
    constructor(dir: string);
    live(bill: ChartBill): void;
    removeLive(id: string): void;
    liveBills(): ChartBill[];
    save(bill: ChartBill): Promise<void>;
    get(id: string): Promise<ChartBill | null>;
    list(): Promise<ChartBill[]>;
    summary(): Promise<BillingSummary>;
}
//# sourceMappingURL=store.d.ts.map