import { buildQueryFromDefault, E_COLLECTIONS } from "@/lib/utils";
import { gql } from "graphql-request";
import { baseLocalizedArticles, baseLocalizedGallery, baseLocalizedNews, extendedLocalizedArticles } from "./utils";

export const GET_GALLERY_SLUGS = gql`
    query {
        ${E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_GALLERY} {
            items {
                slug
            }
        }
    }
`;

export const GET_GALLERY_BY_SLUG = gql`
    query GetGalleryBySlug($slug: String!){
        ${E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_GALLERY}(where: {slug: $slug}, limit: 1) {
            items {
                ${buildQueryFromDefault(baseLocalizedGallery)}
                
            }
        }
    }
`;

export const GET_GALLERY_LIST = gql`
    query {
        ${E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_GALLERY} {
            items {
                ${buildQueryFromDefault(baseLocalizedGallery)}
            }
        }
    }
`;

export const GET_NEWS_SLUGS = gql`
    query {
        ${E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_NEWS} {
            items {
                slug
            }
        }
    }
`;

export const GET_NEWS_BY_SLUG = gql`
    query {

    }
`;

export const GET_NEWS_LIST = gql`
    query {
        ${E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_NEWS} {
            items {
                ${buildQueryFromDefault(baseLocalizedNews)}
            }
        }
    }
`;

export const GET_ARTICLES_SLUGS = gql`
    query {
        ${E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_ARTICLES} {
            items {
                slug
            }
        }
    }
`;

export const GET_ARTICLE_BY_SLUG = gql`
    query GetArticleBySlug($slug: String!){
        ${E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_ARTICLES}(where: {slug: $slug}, limit: 1) {
            items {
                ${buildQueryFromDefault(extendedLocalizedArticles)}
            }
        }
    }
`;

export const GET_ARTICLES_LIST = gql`
    query {
        ${E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_ARTICLES} {
            items {
                ${buildQueryFromDefault(baseLocalizedArticles)}
            }
        }
    }
`;
