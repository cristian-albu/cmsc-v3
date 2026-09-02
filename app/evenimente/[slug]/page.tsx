import client from "@/lib/client";
import { T_Params } from "@/lib/types";
import { E_COLLECTIONS } from "@/lib/utils";
import {
  EventsTemplatePage,
  GET_EVENTS_SLUGS,
  GET_EVENT_BY_SLUG,
  GET_RELATED_EVENTS,
  T_EventRequest,
  T_EventsRequest,
  T_EventsSlugData,
} from "@/app/_views/events";
import { notFound } from "next/navigation";
import requestData from "@/lib/requestData";

export async function generateStaticParams() {
  const events = await client.request<T_EventsSlugData>(GET_EVENTS_SLUGS);

  return events[E_COLLECTIONS.EVENTS].items.map(({ slug }) => ({ slug }));
}

export const metadata = {
  title: "Evenimente",
  description:
    "Evenimente dedicate egalității de gen și combaterii violenței de gen, reunind organizații, experți și comunități pentru advocacy, formare și sprijin. Activitățile includ sesiuni de instruire, dezbateri de politici publice, mentorat feminist și inițiative pentru dezvoltare rurală, contribuind la consolidarea drepturilor femeilor și promovarea unei societăți mai echitabile.",
};

export default async function Page({ params }: T_Params) {
  const currSlug = (await params).slug;
  const data = await requestData(() =>
    Promise.all([
      client.request<T_EventRequest>(GET_EVENT_BY_SLUG, { slug: currSlug }),
      client.request<T_EventsRequest>(GET_RELATED_EVENTS, { slug: currSlug }),
    ])
  );

  if (!currSlug) {
    notFound();
  }

  return <EventsTemplatePage eventsData={data} />;
}
