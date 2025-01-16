import { E_LANG } from "@/lib/localization";
import { Document } from "@contentful/rich-text-types";
import { RICH_TEXT } from "../utils";

enum E_LOCALIZED_EVENTS_FIELDS {
  NAME = "name",
  DESCRIPTION = "description",
  LOCATION_TEXT = "locationText",
  CONTENT = "content",
}

export const baseEvents = {
  [E_LOCALIZED_EVENTS_FIELDS.NAME]: "",
  slug: "",
  thumbnail: { url: "", description: "" },
  [E_LOCALIZED_EVENTS_FIELDS.DESCRIPTION]: "",
  [E_LOCALIZED_EVENTS_FIELDS.LOCATION_TEXT]: "",
  date: "",
  locationLink: "",
  featured: true,
} as const;

export const extendedEvents = {
  ...baseEvents,
  [E_LOCALIZED_EVENTS_FIELDS.CONTENT]: RICH_TEXT,
} as const;

const localizedFields = {
  [`${E_LOCALIZED_EVENTS_FIELDS.NAME}${E_LANG.EN}`]: "",
  [`${E_LOCALIZED_EVENTS_FIELDS.DESCRIPTION}${E_LANG.EN}`]: "",
  [`${E_LOCALIZED_EVENTS_FIELDS.LOCATION_TEXT}${E_LANG.EN}`]: "",
} as const;

export const baseLocalizedEvents = {
  ...baseEvents,
  ...localizedFields,
} as const;

export const extendedLocalizedEvents = {
  ...extendedEvents,
  ...localizedFields,
  [`${E_LOCALIZED_EVENTS_FIELDS.CONTENT}${E_LANG.EN}`]: RICH_TEXT,
} as const;

export type T_BaseEvents = typeof baseEvents;
export type T_ExtendedEvents = typeof extendedEvents;
export type T_BaseLocalizedEvents = typeof baseLocalizedEvents;
export type T_ExtendedLocalizedEvents = typeof extendedLocalizedEvents;
