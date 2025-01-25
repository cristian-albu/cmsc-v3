import EventsView from "@/app/evenimente/views";
import client from "@/lib/client";
import { E_COLLECTIONS } from "@/lib/utils";
import React from "react";
import { T_BaseLocalizedEvents } from "./[slug]/queries/utils";
import { GET_EVENTS_LIST } from "./[slug]/queries";

export type T_EventsRequest = {
  [E_COLLECTIONS.EVENTS]: { items: T_BaseLocalizedEvents[] };
};

export type T_EventsView = {
  eventsData: T_EventsRequest;
};

export default async function Page() {
  const events = await client.request<T_EventsRequest>(GET_EVENTS_LIST);

  return <EventsView eventsData={events} />;
}
