import { buildQueryFromDefault, E_COLLECTIONS } from "@/lib/utils";
import { gql } from "graphql-request";
import { baseLocalizedService, extendedLocalizedService } from "./utils";

export const GET_SERVICES_SLUGS = gql`
    query {
        ${E_COLLECTIONS.SERVICES} {
            items {
                slug
            }
        }
    }    
`;

export const GET_SERVICE_BY_SLUG = gql`
    query GetServiceBySlug($slug: String!) {
        ${E_COLLECTIONS.SERVICES}(where: { slug: $slug }, limit: 1) {
            items {
                ${buildQueryFromDefault(extendedLocalizedService)}
            }
        }
    }    
`;

export const GET_SERVICES_LIST = gql`
    query {
        ${E_COLLECTIONS.SERVICES} {
            items {
                ${buildQueryFromDefault(baseLocalizedService)}
            }
        }
    }    
`;

export const GET_RELATED_SERVICES = gql`
    query GetRelatedServices($slug: String!) {
        ${E_COLLECTIONS.SERVICES}(where: {slug_not: $slug}, limit: 5) {
            items {
                ${buildQueryFromDefault(baseLocalizedService)}
            }
        }
    }    
`;
