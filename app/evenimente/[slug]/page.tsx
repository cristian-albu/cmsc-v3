import DynamicEventView, { T_EventData, T_EventsData, T_EventsSlugData } from "@/app/evenimente/views/DynamicEvent";
import client from "@/lib/client";

import { E_COLLECTIONS } from "@/lib/utils";
import { T_Params } from "@/lib/types";
import { notFound } from "next/navigation";
import React from "react";
import { GET_EVENT_BY_SLUG, GET_EVENTS_SLUGS, GET_RELATED_EVENTS } from "./queries";

export async function generateStaticParams() {
  const events = await client.request<T_EventsSlugData>(GET_EVENTS_SLUGS);

  return events[E_COLLECTIONS.EVENTS].items.map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: T_Params) {
  const currSlug = (await params).slug;
  const [currEvent, relatedEvents] = await Promise.all([
    client.request<T_EventData>(GET_EVENT_BY_SLUG, { slug: currSlug }),
    client.request<T_EventsData>(GET_RELATED_EVENTS, { slug: currSlug }),
  ]);

  if (!currEvent) {
    notFound();
  }

  return (
    <DynamicEventView
      currEvent={currEvent[E_COLLECTIONS.EVENTS].items[0]}
      relatedEvents={relatedEvents[E_COLLECTIONS.EVENTS].items}
    />
  );
}
