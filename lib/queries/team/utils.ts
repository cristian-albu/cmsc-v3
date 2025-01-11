import { E_LANG } from "@/lib/localization";

enum E_LOCAIZED_TEAM_FIELDS {
  TEAM_POSITION = "position",
  COUNCIL_POSITION = "pozitieConsiliu",
  DESCRIPTION = "description",
}

export const baseTeamMember = {
  name: "",
  slug: "",
  email: "",
  thumbnail: { url: "", description: "" },
  [E_LOCAIZED_TEAM_FIELDS.DESCRIPTION]: "",
  [E_LOCAIZED_TEAM_FIELDS.TEAM_POSITION]: "",
  [E_LOCAIZED_TEAM_FIELDS.COUNCIL_POSITION]: "",
  consiliuDirector: true,
  echipa: true,
  order: 0,
};

const localizedFields = {
  [`${E_LOCAIZED_TEAM_FIELDS.DESCRIPTION}${E_LANG.EN}`]: "",
  [`${E_LOCAIZED_TEAM_FIELDS.TEAM_POSITION}${E_LANG.EN}`]: "",
  [`${E_LOCAIZED_TEAM_FIELDS.COUNCIL_POSITION}${E_LANG.EN}`]: "",
};

export const baseLocalizedTeamMember = {
  ...baseTeamMember,
  ...localizedFields,
};

export type T_BaseTeamMember = typeof baseTeamMember;
export type T_BaseLocalizedTeamMember = typeof baseLocalizedTeamMember;
