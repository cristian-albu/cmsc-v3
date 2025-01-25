import client from "@/lib/client";
import { E_COLLECTIONS } from "@/lib/utils";
import React from "react";
import AboutView from "./views";
import { GET_PARTNERS_LIST, GET_TEAM_MEMBER_LIST, T_BaseLocalizedTeamMember, T_BasePartner } from "./data/queries";

export type T_TeamRequest = {
  [E_COLLECTIONS.TEAM_MEMBERS]: { items: T_BaseLocalizedTeamMember[] };
};

export type T_PartnersRequest = {
  [E_COLLECTIONS.PARTNERS]: { items: T_BasePartner[] };
};

export type T_AboutView = {
  teamData: T_TeamRequest;
  partnersData: T_PartnersRequest;
};

export default async function Page() {
  const [team, partners] = await Promise.all([
    client.request<T_TeamRequest>(GET_TEAM_MEMBER_LIST),
    client.request<T_PartnersRequest>(GET_PARTNERS_LIST),
  ]);

  return <AboutView teamData={team} partnersData={partners} />;
}
