import DynamicEventView, { T_EventData, T_EventsData, T_EventsSlugData } from "@/components/views/events/DynamicEvent";
import client from "@/lib/client";
import { GET_EVENT_BY_SLUG, GET_EVENTS_SLUGS } from "@/lib/queries";
import { GET_RELATED_EVENTS } from "@/lib/queries/events";
import { extendedLocalizedEvents } from "@/lib/queries/events/utils";
import { buildQueryFromDefault, E_COLLECTIONS } from "@/lib/queries/utils";
import { T_Params } from "@/lib/types";
import { gql } from "graphql-request";
import { notFound } from "next/navigation";
import React from "react";

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
