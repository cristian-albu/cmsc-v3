import React from "react";
import HomeView from "./views";
import client from "@/lib/client";
import { GET_PARTNERS_LIST, GET_TEAM_MEMBER_LIST } from "../despre-noi/data/queries";
import { T_PartnersData, T_TeamData } from "../despre-noi/page";
import { GET_PROJECTS_LIST } from "../proiecte-si-programe/data/queries";
import { GET_EVENTS_LIST } from "../evenimente/[slug]/queries";
import { GET_RESOURCES_LIST } from "../resurse/data/queries";

const Page = async () => {
  console.time("GraphQL Requests");

  const [projects, events, resources, team, partners] = await Promise.all([
    client.request<T_TeamData>(GET_PROJECTS_LIST),
    client.request<T_TeamData>(GET_EVENTS_LIST),
    client.request<T_TeamData>(GET_RESOURCES_LIST),
    client.request<T_TeamData>(GET_TEAM_MEMBER_LIST),
    client.request<T_PartnersData>(GET_PARTNERS_LIST),
  ]);

  console.timeEnd("GraphQL Requests");
  console.log(projects, events, resources, team, partners);

  return <HomeView items={[]} />;
};

export default Page;
