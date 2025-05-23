import {
  T_ETB_BaseAudiobooks,
  T_ETB_ExtendedLocalizedArticle,
  T_ETB_LocalizedArticle,
  T_ETB_LocalizedGallery,
  T_ETB_LocalizedNews,
} from "@/app/_views/emotional-treasure-box/queries/utils";
import { E_COLLECTIONS } from "./utils";
import { E_LANG } from "./localization";

export type T_RequestError = {
  [E_LANG.EN]: string;
  [E_LANG.RO]: string;
  status: number;
};

export type T_Request<T> = {
  data: T | null;
  error: T_RequestError | null;
};

export type T_Params = { params: Promise<{ slug: string }> };

export type T_ETB_GalleryData = {
  [E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_GALLERY]: {
    items: T_ETB_LocalizedGallery[];
  };
};

export type T_ETB_ArticleData = {
  [E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_ARTICLES]: {
    items: T_ETB_LocalizedArticle[];
  };
};

export type T_ETB_NewsData = {
  [E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_NEWS]: {
    items: T_ETB_LocalizedNews[];
  };
};

export type T_EmotionalTreasureData = {
  articles: T_ETB_ArticleData | null;
  gallery: T_ETB_GalleryData | null;
  news: T_ETB_NewsData | null;
};

export type T_GallerySlugData = {
  [E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_GALLERY]: { items: { slug: string }[] };
};

export type T_ArticleSlugData = {
  [E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_ARTICLES]: { items: { slug: string }[] };
};

export type T_GalleryItem = {
  [E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_GALLERY]: { items: T_ETB_LocalizedGallery[] };
};

export type T_ArticleItem = {
  [E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_ARTICLES]: { items: T_ETB_ExtendedLocalizedArticle[] };
};

export type T_AudiobookRequest = {
  [E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_AUDIOBOOKS]: { items: T_ETB_BaseAudiobooks[] };
};
