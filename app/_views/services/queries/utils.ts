import { E_LANG } from "@/lib/localization";
import { RICH_TEXT } from "@/lib/utils";

enum E_LOCALIZED_SERVICES_FIELDS {
  NAME = "name",
  CONTENT = "content",
}

export const baseService = {
  [E_LOCALIZED_SERVICES_FIELDS.NAME]: "",
  slug: "",
  thumbnail: { url: "", description: "" },
};

export const extendedService = {
  ...baseService,
  [E_LOCALIZED_SERVICES_FIELDS.CONTENT]: RICH_TEXT,
};

const localizedFields = {
  [`${E_LOCALIZED_SERVICES_FIELDS.NAME}${E_LANG.EN}`]: "",
};

export const baseLocalizedService = {
  ...baseService,
  ...localizedFields,
};

export const extendedLocalizedService = {
  ...extendedService,
  ...localizedFields,
  [`${E_LOCALIZED_SERVICES_FIELDS.CONTENT}${E_LANG.EN}`]: RICH_TEXT,
};

export type T_BaseService = typeof baseService;
export type T_ExtendedService = typeof extendedService;
export type T_BaseLocalizedService = typeof baseLocalizedService;
export type T_ExtendedLocalidedService = typeof extendedLocalizedService;
