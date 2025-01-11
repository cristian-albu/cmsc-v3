import { gql } from "graphql-request";
import { buildQueryFromDefault, E_COLLECTIONS } from "../utils";
import { basePartners } from "./utils";

export const GET_PARTNERS_LIST = gql`
  query {
    ${E_COLLECTIONS.PARTNERS} {
      items {
        ${buildQueryFromDefault(basePartners)}
      }
    }
  }
`;
