"use client";

import Markdown from "@/components/rich-text";
import { E_COLLECTIONS } from "@/lib/utils";
import React, { FC } from "react";
import { T_BaseLocalizedEvents, T_ExtendedLocalizedEvents } from "../[slug]/queries/utils";

const DynamicEventView: FC<T_EventsView> = ({ currEvent, relatedEvents }) => {
  console.log(currEvent, relatedEvents);

  return (
    <div>
      <Markdown content={currEvent.content} />
    </div>
  );
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
