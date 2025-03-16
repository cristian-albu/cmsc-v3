import client from "@/lib/client";
import { T_Params } from "@/lib/types";
import { E_COLLECTIONS } from "@/lib/utils";
import {
  EventsTemplatePage,
  GET_EVENTS_SLUGS,
  GET_EVENT_BY_SLUG,
  GET_RELATED_EVENTS,
  T_EventData,
  T_EventsData,
  T_EventsSlugData,
} from "@/app/_views/events";
import { notFound } from "next/navigation";

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
    <EventsTemplatePage
      currEvent={currEvent[E_COLLECTIONS.EVENTS].items[0]}
      relatedEvents={relatedEvents[E_COLLECTIONS.EVENTS].items}
    />
  );
}
