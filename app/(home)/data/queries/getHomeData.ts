import { GET_PARTNERS_LIST, GET_TEAM_MEMBER_LIST } from "@/app/despre-noi/data/queries";
import { T_PartnersRequest, T_TeamRequest } from "@/app/despre-noi/page";
import { GET_EVENTS_LIST } from "@/app/evenimente/[slug]/queries";
import { T_EventsRequest } from "@/app/evenimente/page";
import { GET_PROJECTS_LIST } from "@/app/proiecte-si-programe/data/queries";
import { T_ProjectsRequest } from "@/app/proiecte-si-programe/page";
import { GET_RESOURCES_LIST } from "@/app/resurse/data/queries";
import { T_ResourcesRequest } from "@/app/resurse/page";
import client from "@/lib/client";

export type T_HomeData = {
  projects: T_ProjectsRequest | null;
  events: T_EventsRequest | null;
  resources: T_ResourcesRequest | null;
  team: T_TeamRequest | null;
  partners: T_PartnersRequest | null;
};

export default async function getHomeData(graphqlClient = client): Promise<T_HomeData> {
  let data: T_HomeData = {
    projects: null,
    events: null,
    resources: null,
    team: null,
    partners: null,
  };

  try {
    const [projects, events, resources, team, partners] = await Promise.allSettled([
      graphqlClient.request<T_ProjectsRequest>(GET_PROJECTS_LIST),
      graphqlClient.request<T_EventsRequest>(GET_EVENTS_LIST),
      graphqlClient.request<T_ResourcesRequest>(GET_RESOURCES_LIST),
      graphqlClient.request<T_TeamRequest>(GET_TEAM_MEMBER_LIST),
      graphqlClient.request<T_PartnersRequest>(GET_PARTNERS_LIST),
    ]);

    data = {
      projects: projects.status === "fulfilled" ? projects.value : null,
      events: events.status === "fulfilled" ? events.value : null,
      resources: resources.status === "fulfilled" ? resources.value : null,
      team: team.status === "fulfilled" ? team.value : null,
      partners: partners.status === "fulfilled" ? partners.value : null,
    };

    return data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    return data;
  }
}
