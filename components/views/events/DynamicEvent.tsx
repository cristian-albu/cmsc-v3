"use client";
import { T_BaseLocalizedEvents, T_ExtendedLocalizedEvents } from "@/lib/queries/events/utils";
import { E_COLLECTIONS } from "@/lib/queries/utils";
import React, { FC } from "react";

const DynamicEventView: FC<T_EventsView> = ({ currEvent, relatedEvents }) => {
  console.log(currEvent, relatedEvents);

  return <div>DynamicEvent</div>;
};

export default DynamicEventView;

export type T_EventsSlugData = {
  [E_COLLECTIONS.EVENTS]: { items: { slug: string }[] };
};

export type T_EventData = {
  [E_COLLECTIONS.EVENTS]: { items: T_ExtendedLocalizedEvents[] };
};

export type T_EventsData = {
  [E_COLLECTIONS.EVENTS]: { items: T_BaseLocalizedEvents[] };
};

export type T_EventsView = {
  currEvent: T_ExtendedLocalizedEvents;
  relatedEvents: T_BaseLocalizedEvents[];
};
