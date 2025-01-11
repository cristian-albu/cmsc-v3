import { gql } from "graphql-request";
import { buildQueryFromDefault, E_COLLECTIONS } from "../utils";
import { baseLocalizedResources, extendedLocalizedResources } from "./utils";

export const GET_RESOURCES_SLUGS = gql`
  query {
    ${E_COLLECTIONS.RESOURCES} {
      items {
        slug
      }
    }
  }
`;

export const GET_RESOURCES_BY_SLUG = gql`
  query GetResourcesBySlug($slug: String!){
    ${E_COLLECTIONS.RESOURCES}(where: {slug: $slug}, limit: 1){
      items {
        ${buildQueryFromDefault(extendedLocalizedResources)}
      }
    }
  }
`;

export const GET_RESOURCES_LIST = gql`
  query {
    ${E_COLLECTIONS.RESOURCES} {
      items {
        ${buildQueryFromDefault(baseLocalizedResources)}
      }
    }
  }
`;
