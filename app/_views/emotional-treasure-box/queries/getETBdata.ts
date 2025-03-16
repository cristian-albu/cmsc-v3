import client from "@/lib/client";
import { GET_ARTICLES_LIST, GET_GALLERY_LIST, GET_NEWS_LIST } from ".";
import {
  T_EmotionalTreasureData,
  T_ETB_ArticleData as T_ETB_ArticleRequest,
  T_ETB_GalleryData as T_ETB_GalleryRequest,
  T_ETB_NewsData as T_ETB_NewsRequest,
} from "../types";

export default async function getETBData(graphqlClient = client): Promise<T_EmotionalTreasureData> {
  let data: T_EmotionalTreasureData = {
    articles: null,
    news: null,
    gallery: null,
  };

  try {
    const [gallery, articles, news] = await Promise.allSettled([
      graphqlClient.request<T_ETB_GalleryRequest>(GET_GALLERY_LIST),
      graphqlClient.request<T_ETB_ArticleRequest>(GET_ARTICLES_LIST),
      graphqlClient.request<T_ETB_NewsRequest>(GET_NEWS_LIST),
    ]);

    data = {
      articles: articles.status === "fulfilled" ? articles.value : null,
      news: news.status === "fulfilled" ? news.value : null,
      gallery: gallery.status === "fulfilled" ? gallery.value : null,
    };

    return data;
  } catch (error) {
    console.error("Error fetching Emotional Treasure Box data", error);
    return data;
  }
}
