import { E_COLLECTIONS } from "@/lib/utils";
import { T_BaseLocalizedTeamMember, T_BasePartner } from "./queries/utils";

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

export type T_CouncilSection = {
  council: T_TeamRequest | null;
};

export type T_PartnersSection = {
  partners: T_PartnersRequest | null;
};

export type T_TeamSection = {
  team: T_TeamRequest | null;
};
