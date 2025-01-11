import { E_LANG } from "@/lib/localization";
import { Document } from "@contentful/rich-text-types";

enum E_LOCAIZED_EVENTS_FIELDS {
  NAME = "name",
  DESCRIPTION = "description",
  LOCATION_TEXT = "locationText",
  CONTENT = "content",
}

export const baseEvents = {
  [E_LOCAIZED_EVENTS_FIELDS.NAME]: "",
  slug: "",
  thumbnail: { url: "", description: "" },
  [E_LOCAIZED_EVENTS_FIELDS.DESCRIPTION]: "",
  [E_LOCAIZED_EVENTS_FIELDS.LOCATION_TEXT]: "",
  date: "",
  locationLink: "",
  featured: true,
};

export const extendedEvents = {
  ...baseEvents,
  [E_LOCAIZED_EVENTS_FIELDS.CONTENT]: { json: {} as Document },
};

const localizedFields = {
  [`${E_LOCAIZED_EVENTS_FIELDS.NAME}${E_LANG.EN}`]: "",
  [`${E_LOCAIZED_EVENTS_FIELDS.DESCRIPTION}${E_LANG.EN}`]: "",
  [`${E_LOCAIZED_EVENTS_FIELDS.LOCATION_TEXT}${E_LANG.EN}`]: "",
};

export const baseLocalizedEvents = {
  ...baseEvents,
  ...localizedFields,
};

export const extendedLocalizedEvents = {
  ...extendedEvents,
  ...localizedFields,
  [`${E_LOCAIZED_EVENTS_FIELDS.CONTENT}${E_LANG.EN}`]: { json: {} as Document },
};

export type T_BaseEvents = typeof baseEvents;
export type T_ExtendedEvents = typeof extendedEvents;
export type T_BaseLocalizedEvents = typeof baseLocalizedEvents;
export type T_ExtendedLocalizedEvents = typeof extendedLocalizedEvents;
