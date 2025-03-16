import client from "@/lib/client";
import { T_TeamRequest, GET_TEAM_MEMBER_LIST, T_PartnersRequest, GET_PARTNERS_LIST } from "@/app/_views/about-us";
import { T_EventsRequest, GET_EVENTS_LIST } from "@/app/_views/events";
import { T_ProjectsRequest, GET_PROJECTS_LIST } from "@/app/_views/projects";
import { T_ResourcesRequest, GET_RESOURCES_LIST } from "@/app/_views/resources";
import { T_HomeData } from "../types";

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
