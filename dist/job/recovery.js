import { randomBytes } from "node:crypto";
import { mkdir, readFile, readdir, rename, rm, writeFile, } from "node:fs/promises";
import { resolve } from "node:path";
export const temporaryJobSchema = "astral-temporary-job/1.0.0";
export const temporaryJobIdPattern = /^[0-9a-f]{8}$/u;
const rec = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
const code = (cause) => {
    if (!rec(cause))
        return null;
    const value = cause["code"];
    return typeof value === "string" ? value : null;
};
const iso = (ms) => new Date(ms).toISOString();
const idFor = () => randomBytes(4).toString("hex");
const encode = (record) => {
    const value = JSON.stringify(record);
    if (value === undefined)
        throw new Error("Temporary job state must be JSON-serialisable");
    return value;
};
const withId = (progress, id) => ({
    ...progress,
    jobId: id,
});
const parse = (source, expectedId) => {
    const value = JSON.parse(source);
    if (!rec(value))
        throw new Error("Temporary job record must be an object");
    if (value["schema"] !== temporaryJobSchema)
        throw new Error("Temporary job record schema is unsupported");
    if (value["id"] !== expectedId)
        throw new Error("Temporary job record ID does not match its file");
    const conversationId = value["conversationId"];
    if (conversationId !== null && (typeof conversationId !== "string" || conversationId.length === 0)) {
        throw new Error("Temporary job conversation ID is invalid");
    }
    const progress = value["progress"];
    if (!rec(progress) || progress["jobId"] !== expectedId || typeof progress["status"] !== "string") {
        throw new Error("Temporary job progress is invalid");
    }
    const createdAt = value["createdAt"];
    const updatedAt = value["updatedAt"];
    const expiresAt = value["expiresAt"];
    if (typeof createdAt !== "string"
        || typeof updatedAt !== "string"
        || typeof expiresAt !== "string"
        || !Number.isFinite(Date.parse(createdAt))
        || !Number.isFinite(Date.parse(updatedAt))
        || !Number.isFinite(Date.parse(expiresAt))) {
        throw new Error("Temporary job timestamps are invalid");
    }
    return {
        schema: temporaryJobSchema,
        id: expectedId,
        conversationId,
        progress: progress,
        state: value["state"],
        createdAt,
        updatedAt,
        expiresAt,
    };
};
export class TemporaryJobStore {
    #dir;
    #ttlMs;
    constructor(directory, ttlSeconds) {
        if (directory.trim().length === 0)
            throw new Error("Temporary job directory is required");
        if (!Number.isFinite(ttlSeconds) || ttlSeconds < 1)
            throw new Error("Temporary job TTL must be positive");
        this.#dir = resolve(directory);
        this.#ttlMs = ttlSeconds * 1000;
    }
    async create(progress, state, nowMs = Date.now()) {
        if (progress.status === "completed")
            throw new Error("A completed job cannot create a recovery ID");
        await mkdir(this.#dir, { recursive: true });
        for (let attempt = 0; attempt < 32; attempt += 1) {
            const id = idFor();
            const record = this.#record(id, null, progress, state, nowMs, nowMs);
            try {
                await writeFile(this.#path(id), encode(record), {
                    encoding: "utf8",
                    flag: "wx",
                    mode: 0o600,
                });
                return record;
            }
            catch (cause) {
                if (code(cause) === "EEXIST")
                    continue;
                throw cause;
            }
        }
        throw new Error("Could not allocate a unique temporary job ID");
    }
    async save(id, conversationId, progress, state, nowMs = Date.now()) {
        this.#assertId(id);
        if (conversationId !== null && conversationId.length === 0) {
            throw new Error("Temporary job conversation ID cannot be empty");
        }
        const current = await this.get(id, nowMs);
        if (current === null)
            throw new Error(`Temporary job ${id} does not exist or has expired`);
        if (current.conversationId !== null && conversationId !== current.conversationId) {
            throw new Error("Temporary job conversation ID cannot change once established");
        }
        if (progress.status === "completed") {
            await this.delete(id);
            return null;
        }
        const record = this.#record(id, conversationId, progress, state, Date.parse(current.createdAt), nowMs);
        await this.#replace(record);
        return record;
    }
    async get(id, nowMs = Date.now()) {
        this.#assertId(id);
        const source = await this.#read(id);
        if (source === null)
            return null;
        const record = parse(source, id);
        if (Date.parse(record.expiresAt) <= nowMs) {
            await this.delete(id);
            return null;
        }
        return record;
    }
    async delete(id) {
        this.#assertId(id);
        try {
            await rm(this.#path(id));
            return true;
        }
        catch (cause) {
            if (code(cause) === "ENOENT")
                return false;
            throw cause;
        }
    }
    async sweep(nowMs = Date.now()) {
        await mkdir(this.#dir, { recursive: true });
        const names = await readdir(this.#dir);
        let removed = 0;
        for (const name of names) {
            const match = /^([0-9a-f]{8})\.json$/u.exec(name);
            if (!match)
                continue;
            const id = match[1];
            try {
                const source = await this.#read(id);
                if (source === null)
                    continue;
                const record = parse(source, id);
                if (Date.parse(record.expiresAt) > nowMs)
                    continue;
            }
            catch {
                // Corrupt temporary state cannot be resumed and must not block cleanup.
            }
            if (await this.delete(id))
                removed += 1;
        }
        return removed;
    }
    #record(id, conversationId, progress, state, createdAtMs, updatedAtMs) {
        return {
            schema: temporaryJobSchema,
            id,
            conversationId,
            progress: withId(progress, id),
            state,
            createdAt: iso(createdAtMs),
            updatedAt: iso(updatedAtMs),
            expiresAt: iso(updatedAtMs + this.#ttlMs),
        };
    }
    #assertId(id) {
        if (!temporaryJobIdPattern.test(id))
            throw new Error("Temporary job ID must contain exactly eight hexadecimal characters");
    }
    #path(id) {
        return resolve(this.#dir, `${id}.json`);
    }
    async #read(id) {
        try {
            return await readFile(this.#path(id), "utf8");
        }
        catch (cause) {
            if (code(cause) === "ENOENT")
                return null;
            throw cause;
        }
    }
    async #replace(record) {
        await mkdir(this.#dir, { recursive: true });
        const temporary = resolve(this.#dir, `.${record.id}.${process.pid}.${randomBytes(4).toString("hex")}.tmp`);
        try {
            await writeFile(temporary, encode(record), {
                encoding: "utf8",
                flag: "wx",
                mode: 0o600,
            });
            await rename(temporary, this.#path(record.id));
        }
        finally {
            await rm(temporary, { force: true });
        }
    }
}
//# sourceMappingURL=recovery.js.map