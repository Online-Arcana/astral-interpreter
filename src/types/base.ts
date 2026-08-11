export type { Json, JsonRef } from "astral-core/web";
export type PreferredGender = "male" | "female" | "non-binary";
export const preferredGenderOf = (value: { preferredGender?: PreferredGender }): PreferredGender => value.preferredGender ?? "male";
