import EventsView from "@/components/views/events";
import client from "@/lib/client";
import { GET_EVENTS_LIST } from "@/lib/queries";
import { T_BaseLocalizedEvents } from "@/lib/queries/events/utils";
import { E_COLLECTIONS } from "@/lib/queries/utils";
import React from "react";

type T_EventsData = {
  [E_COLLECTIONS.EVENTS]: { items: T_BaseLocalizedEvents[] };
};

export type T_EventsView = {
  eventsData: T_EventsData;
};

export default async function Page() {
  const events = await client.request<T_EventsData>(GET_EVENTS_LIST);

  return <EventsView eventsData={events} />;
}
