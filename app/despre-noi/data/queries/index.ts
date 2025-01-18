import { gql } from "graphql-request";
import { buildQueryFromDefault, E_COLLECTIONS } from "@/lib/utils";
import { E_LANG } from "@/lib/localization";

enum E_LOCAIZED_TEAM_FIELDS {
  TEAM_POSITION = "position",
  COUNCIL_POSITION = "pozitieConsiliu",
  DESCRIPTION = "description",
}

export const basePartners = { name: "", logo: { url: "", description: "" }, link: "" };

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

export type T_BasePartner = typeof basePartners;
export type T_BaseTeamMember = typeof baseTeamMember;
export type T_BaseLocalizedTeamMember = typeof baseLocalizedTeamMember;

export const GET_PARTNERS_LIST = gql`
  query {
    ${E_COLLECTIONS.PARTNERS} {
      items {
        ${buildQueryFromDefault(basePartners)}
      }
    }
  }
`;

export const GET_TEAM_MEMBERS_SLUGS = gql`
  query {
    ${E_COLLECTIONS.TEAM_MEMBERS} {
      items {
        slug
      }
    }
  }
`;

export const GET_TEAM_MEMBER_BY_SLUG = gql`
  query GetTeamMemberBySlug($slug: String!){
    ${E_COLLECTIONS.TEAM_MEMBERS}(where: {slug: $slug}, limit: 1){
      items {
        ${buildQueryFromDefault(baseLocalizedTeamMember)}
      }
    }
  }
`;

export const GET_TEAM_MEMBER_LIST = gql`
  query {
    ${E_COLLECTIONS.TEAM_MEMBERS} {
      items {
        ${buildQueryFromDefault(baseLocalizedTeamMember)}
      }
    }
  }
`;
