import client from "@/lib/client";
import { EventsPage, GET_EVENTS_LIST, T_EventsRequest } from "@/app/_views/events";
import requestData from "@/lib/requestData";

export const metadata = {
  title: "Evenimente",
  description:
    "Evenimente dedicate egalității de gen și combaterii violenței de gen, reunind organizații, experți și comunități pentru advocacy, formare și sprijin. Activitățile includ sesiuni de instruire, dezbateri de politici publice, mentorat feminist și inițiative pentru dezvoltare rurală, contribuind la consolidarea drepturilor femeilor și promovarea unei societăți mai echitabile.",
};

export default async function Page() {
  const eventsData = await requestData(() => client.request<T_EventsRequest>(GET_EVENTS_LIST));

  return <EventsPage eventsData={eventsData} />;
}
