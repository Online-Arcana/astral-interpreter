export class JobStore {
    #ttlMs;
    #jobs = new Map();
    constructor(ttlSeconds) {
        if (!Number.isFinite(ttlSeconds) || ttlSeconds < 1)
            throw new Error("Job TTL must be positive");
        this.#ttlMs = ttlSeconds * 1000;
    }
    put(id, progress, result, nowMs) {
        const record = { id, progress, result, expiresAt: nowMs + this.#ttlMs };
        this.#jobs.set(id, record);
        return record;
    }
    get(id, nowMs) {
        this.sweep(nowMs);
        return this.#jobs.get(id) ?? null;
    }
    sweep(nowMs) {
        let removed = 0;
        for (const [id, record] of this.#jobs) {
            if (record.expiresAt <= nowMs) {
                this.#jobs.delete(id);
                removed += 1;
            }
        }
        return removed;
    }
}
//# sourceMappingURL=store.js.map