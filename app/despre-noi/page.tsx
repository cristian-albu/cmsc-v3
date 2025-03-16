import client from "@/lib/client";
import { AboutPage, GET_PARTNERS_LIST, GET_TEAM_MEMBER_LIST, T_PartnersRequest, T_TeamRequest } from "@/app/_views/about-us";
import React from "react";

export default async function Page() {
  const [team, partners] = await Promise.all([
    client.request<T_TeamRequest>(GET_TEAM_MEMBER_LIST),
    client.request<T_PartnersRequest>(GET_PARTNERS_LIST),
  ]);

  return <AboutPage teamData={team} partnersData={partners} />;
}
