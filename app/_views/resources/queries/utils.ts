import { E_LANG } from "@/lib/localization";
import { RICH_TEXT } from "@/lib/utils";

enum E_LOCAIZED_RESOURCES_FIELDS {
  NAME = "name",
  LINK_NAME = "linkName",
  CONTENT = "content",
}

export const baseResources = {
  [E_LOCAIZED_RESOURCES_FIELDS.NAME]: "",
  slug: "",
  year: 2000,
  image: { url: "", description: "" },
  featured: true,
  [E_LOCAIZED_RESOURCES_FIELDS.LINK_NAME]: "",
  link: "",
  file: { url: "", description: "" } as { url: string; description: string } | undefined,
};

export const extendedResources = {
  ...baseResources,
  [E_LOCAIZED_RESOURCES_FIELDS.CONTENT]: RICH_TEXT,
};

const localizedFields = {
  [`${E_LOCAIZED_RESOURCES_FIELDS.NAME}${E_LANG.EN}`]: "",
  [`${E_LOCAIZED_RESOURCES_FIELDS.LINK_NAME}${E_LANG.EN}`]: "",
};

export const baseLocalizedResources = {
  ...baseResources,
  ...localizedFields,
};

export const extendedLocalizedResources = {
  ...extendedResources,
  ...localizedFields,
  [`${E_LOCAIZED_RESOURCES_FIELDS.CONTENT}${E_LANG.EN}`]: RICH_TEXT,
};

export type T_BaseResources = typeof baseResources;
export type T_ExtendedResources = typeof extendedResources;
export type T_BaseLocalizedResources = typeof baseLocalizedResources;
export type T_ExtendedLocalizedResources = typeof extendedLocalizedResources;
