const local = (id, label, phase, weight = 1) => ({
    id,
    label,
    kind: "local",
    weight,
    phase,
});
export const baseWork = (zodiac = "tropical") => [
    local("input", "Validating input", "deterministic"),
    local("place", "Resolving place", "deterministic"),
    local("time", "Resolving civil time", "deterministic", 2),
    local("astronomy", "Calculating astronomy", "deterministic", 4),
    local("system", `Deriving ${zodiac} chart`, "deterministic", 3),
    local("compatibility", `Scoring ${zodiac} compatibility`, "deterministic", 3),
    local("assembly", "Assembling file", "final"),
    local("crc", "Generating integrity block", "final"),
    local("sign", "Signing authority", "final"),
    local("validate", "Validating final file", "final", 2),
];
//# sourceMappingURL=work.js.map