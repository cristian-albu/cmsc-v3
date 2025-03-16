import { E_COLLECTIONS } from "@/lib/utils";
import {
  T_ETB_ExtendedLocalizedArticle,
  T_ETB_LocalizedArticle,
  T_ETB_LocalizedAudiobooks,
  T_ETB_LocalizedGallery,
  T_ETB_LocalizedNews,
} from "./queries/utils";

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
  [E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_AUDIOBOOKS]: { items: T_ETB_LocalizedAudiobooks[] };
};

export type T_EtbArticlesSection = {
  articles: T_ETB_LocalizedArticle[] | null | undefined;
};

export type T_EtbGallerySection = {
  gallery: T_ETB_LocalizedGallery[] | null | undefined;
};

export type T_EtbNewsView = {
  news: T_ETB_LocalizedNews[] | null | undefined;
};

export type T_ArticleTemplateView = {
  data: T_ETB_ExtendedLocalizedArticle;
};

export type T_GalleryTemplateView = {
  data: T_ETB_LocalizedGallery;
};
