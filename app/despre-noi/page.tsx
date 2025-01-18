import client from "@/lib/client";
import { E_COLLECTIONS } from "@/lib/utils";
import React from "react";
import AboutView from "./views";
import { GET_PARTNERS_LIST, GET_TEAM_MEMBER_LIST, T_BaseLocalizedTeamMember, T_BasePartner } from "./data/queries";

export type T_TeamData = {
  [E_COLLECTIONS.TEAM_MEMBERS]: { items: T_BaseLocalizedTeamMember[] };
};

export type T_PartnersData = {
  [E_COLLECTIONS.TEAM_MEMBERS]: { items: T_BasePartner[] };
};

export type T_AboutView = {
  teamData: T_TeamData;
  partnersData: T_PartnersData;
};

export default async function Page() {
  const [team, partners] = await Promise.all([
    client.request<T_TeamData>(GET_TEAM_MEMBER_LIST),
    client.request<T_PartnersData>(GET_PARTNERS_LIST),
  ]);

  return <AboutView teamData={team} partnersData={partners} />;
}
