import client from "@/lib/client";
import { EventsPage, GET_EVENTS_LIST, T_EventsRequest } from "@/app/_views/events";

export default async function Page() {
  const events = await client.request<T_EventsRequest>(GET_EVENTS_LIST);

  return <EventsPage eventsData={events} />;
}
