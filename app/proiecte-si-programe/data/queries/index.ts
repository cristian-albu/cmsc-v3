import { gql } from "graphql-request";
import { buildQueryFromDefault, E_COLLECTIONS } from "../../../../lib/utils";
import { extendedLocalizedProject, baseLocalizedProject } from "./utils";

export const GET_PROJECTS_SLUGS = gql`
  query {
    ${E_COLLECTIONS.PROJECTS} {
      items {
        slug
      }
    }
  }
`;

export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: String!) {
    ${E_COLLECTIONS.PROJECTS}(where: { slug: $slug }, limit: 1) {
      items {
        ${buildQueryFromDefault(extendedLocalizedProject)}
      }
    }
  }
`;

export const GET_PROJECTS_LIST = gql`
  query {
    ${E_COLLECTIONS.PROJECTS} {
      items {
        ${buildQueryFromDefault(baseLocalizedProject)}
      }
    }
  }
`;
