export const paidAttempts = 2;
export const count = (value, name) => {
    if (!Number.isSafeInteger(value) || value < 0)
        throw new Error(`${name} must be a non-negative integer`);
    return value;
};
export const activeCopy = (value) => {
    if (value === null)
        return null;
    return {
        id: value.id,
        attempt: value.attempt,
        correction: [...value.correction],
        ...(value.failureKind === undefined ? {} : { failureKind: value.failureKind }),
    };
};
export const conversation = (client, counters) => {
    const id = client.id;
    if (!id)
        return null;
    counters.conversations.add(id);
    return id;
};
export const localConversationId = () => `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
//# sourceMappingURL=session.js.map