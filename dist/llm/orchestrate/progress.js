import { ProgressTracker } from "../../progress/tracker.js";
const weightFor = (unit) => {
    const tokens = unit.tokens ?? (unit.kind === "big" ? 3_200 : 1_800);
    return Math.max(1, Math.ceil(tokens / 800));
};
export const interpretationWork = (units) => units.map((unit) => ({
    id: unit.id,
    label: unit.label,
    kind: unit.kind,
    weight: weightFor(unit),
    phase: "interpretation",
}));
export const progressHooks = (tracker, now, emit, accepted = []) => {
    tracker.restoreAccepted(accepted);
    return {
        onStart: (unit, attempt, model) => {
            tracker.start(unit.id, "interpreting", now(), attempt, model);
            emit(tracker.snapshot(now()));
        },
        onRetry: (unit) => {
            tracker.markRetry(unit.id);
            emit(tracker.snapshot(now()));
        },
        onComplete: (result) => {
            tracker.complete(result.id, now());
            emit(tracker.snapshot(now()));
        },
        onWave: (wave) => {
            tracker.setWave(wave);
            emit(tracker.snapshot(now()));
        },
    };
};
//# sourceMappingURL=progress.js.map