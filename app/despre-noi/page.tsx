import AboutView from "@/components/views/about";
import client from "@/lib/client";
import { GET_PARTNERS_LIST, GET_TEAM_MEMBER_LIST } from "@/lib/queries";
import { T_BasePartner } from "@/lib/queries/partners/utils";
import { T_BaseLocalizedTeamMember } from "@/lib/queries/team/utils";
import { E_COLLECTIONS } from "@/lib/queries/utils";
import React from "react";

type T_TeamData = {
  [E_COLLECTIONS.TEAM_MEMBERS]: { items: T_BaseLocalizedTeamMember[] };
};
type T_PartnersData = {
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
