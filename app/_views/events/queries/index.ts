import { buildQueryFromDefault, E_COLLECTIONS } from "@/lib/utils";
import { gql } from "graphql-request";
import { baseLocalizedEvents, extendedLocalizedEvents } from "./utils";

export const GET_EVENTS_SLUGS = gql`
  query {
    ${E_COLLECTIONS.EVENTS} {
      items {
        slug
      }
    }
  }
`;

export const GET_EVENT_BY_SLUG = gql`
  query GetEventBySlug($slug: String!) {
    ${E_COLLECTIONS.EVENTS}(where: { slug: $slug }, limit: 1) {
      items {
        ${buildQueryFromDefault(extendedLocalizedEvents)}
      }
    }
    
  }
`;

export const GET_RELATED_EVENTS = gql`
  query GetRelatedEvents($slug: String!){
    ${E_COLLECTIONS.EVENTS}(where: {slug_not: $slug}, limit: 5) {
      items {
        ${buildQueryFromDefault(baseLocalizedEvents)}
      }
    }
  }
`;

export const GET_EVENTS_LIST = gql`
  query {
    ${E_COLLECTIONS.EVENTS} {
      items {
        ${buildQueryFromDefault(baseLocalizedEvents)}
      }
    }
  }
`;
