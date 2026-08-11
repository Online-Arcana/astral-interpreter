import type { ActiveInterpretationUnit, SchemaClient } from "./types.js";

export interface Counters {
  calls: number;
  retries: number;
  conversations: Set<string>;
}

export const paidAttempts = 2;

export const count = (value: number, name: string): number => {
  if (!Number.isSafeInteger(value) || value < 0) throw new Error(`${name} must be a non-negative integer`);
  return value;
};

export const activeCopy = (value: ActiveInterpretationUnit | null): ActiveInterpretationUnit | null => {
  if (value === null) return null;
  return {
    id: value.id,
    attempt: value.attempt,
    correction: [...value.correction],
    ...(value.failureKind === undefined ? {} : { failureKind: value.failureKind }),
  };
};

export const conversation = (client: SchemaClient, counters: Counters): string | null => {
  const id = client.id;
  if (!id) return null;
  counters.conversations.add(id);
  return id;
};

export const localConversationId = (): string =>
  `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
