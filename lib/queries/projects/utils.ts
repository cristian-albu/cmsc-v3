import { E_LANG } from "@/lib/localization";
import { Document } from "@contentful/rich-text-types";

enum E_LOCALIZED_PROJECT_FIELDS {
  NAME = "name",
  SUMMARY = "summary",
  CONTENT = "content",
}

export const baseProject = {
  [E_LOCALIZED_PROJECT_FIELDS.NAME]: "",
  slug: "",
  thumbnail: { url: "", description: "" },
  [E_LOCALIZED_PROJECT_FIELDS.SUMMARY]: "",
  startDate: "",
  endDate: "",
  featured: true,
};

export const extendedProject = {
  ...baseProject,
  [E_LOCALIZED_PROJECT_FIELDS.CONTENT]: { json: {} as Document },
};

const localizedFields = {
  [`${[E_LOCALIZED_PROJECT_FIELDS.NAME]}${E_LANG.EN}`]: "",
  [`${[E_LOCALIZED_PROJECT_FIELDS.SUMMARY]}${E_LANG.EN}`]: "",
};

export const baseLocalizedProject = {
  ...baseProject,
  ...localizedFields,
};

export const extendedLocalizedProject = {
  ...extendedProject,
  ...localizedFields,
  [`${[E_LOCALIZED_PROJECT_FIELDS.CONTENT]}${E_LANG.EN}`]: { json: {} as Document },
};

export type T_BaseProject = typeof baseProject;
export type T_ExtendedProject = typeof extendedProject;
export type T_BaseLocalizedProject = typeof baseLocalizedProject;
export type T_ExtendedLocalidedProject = typeof extendedLocalizedProject;
