import { E_COLLECTIONS } from "@/lib/utils";
import { T_BaseLocalizedEvents, T_ExtendedLocalizedEvents } from "./queries/utils";

export type T_EventsSlugData = {
  [E_COLLECTIONS.EVENTS]: { items: { slug: string }[] };
};

export type T_EventRequest = {
  [E_COLLECTIONS.EVENTS]: { items: T_ExtendedLocalizedEvents[] };
};

export type T_EventsRequest = {
  [E_COLLECTIONS.EVENTS]: { items: T_BaseLocalizedEvents[] };
};

export type T_EventsTemplateView = {
  currEvent: T_ExtendedLocalizedEvents;
  relatedEvents: T_BaseLocalizedEvents[];
};

export type T_EventsView = {
  eventsData: T_EventsRequest;
};

export type T_EventsSection = {
  events: T_EventsRequest | null;
  numberOfEvents?: number;
};
