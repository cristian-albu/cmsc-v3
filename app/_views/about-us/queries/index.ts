import { gql } from "graphql-request";
import { buildQueryFromDefault, E_COLLECTIONS } from "@/lib/utils";
import { basePartners, baseLocalizedTeamMember } from "./utils";

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
