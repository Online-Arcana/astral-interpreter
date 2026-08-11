import type { InterpretationFailureKind } from "./types.js";

const raw = (cause: unknown): string => {
  if (typeof cause !== "object" || cause === null) return "";
  const value = (cause as Record<string, unknown>)["rawText"];
  return typeof value === "string" ? value : "";
};

const response = (cause: unknown): string | null => {
  if (typeof cause !== "object" || cause === null) return null;
  const value = (cause as Record<string, unknown>)["responseStatus"];
  return typeof value === "string" ? value : null;
};

const status = (cause: unknown): number | null => {
  if (typeof cause !== "object" || cause === null) return null;
  const value = (cause as Record<string, unknown>)["status"];
  return typeof value === "number" ? value : null;
};

const truncated = (cause: unknown): boolean => {
  if (response(cause) === "incomplete") return true;
  const text = raw(cause).trim();
  if (text.length === 0) return false;
  return !/[}\]]\s*$/u.test(text) || /[,;:\-–—]\s*$/u.test(text);
};

export const failKind = (cause: unknown): InterpretationFailureKind => {
  if (status(cause) === 429) return "rate_limit";
  if (truncated(cause)) return "truncation";
  if (response(cause) === "failed") return "transport";
  if (cause instanceof Error && /timeout|deadline|timed out/iu.test(cause.message)) return "timeout";
  if (raw(cause).length > 0) return "schema";
  return "transport";
};

const object = (value: unknown): object | null =>
  typeof value === "object" && value !== null && !Array.isArray(value) ? value : null;

export const partial = (cause: unknown): object | null => {
  const text = raw(cause).trim();
  if (text.length === 0) return null;
  const attempts = [text];
  const first = text.indexOf("{");
  const last = text.lastIndexOf("}");
  if (first >= 0 && last > first) attempts.push(text.slice(first, last + 1));
  for (const attempt of attempts) {
    try {
      const value = object(JSON.parse(attempt));
      if (value !== null) return value;
    } catch {
      // Malformed partial output is retained only in the reported failure text.
    }
  }
  return null;
};
