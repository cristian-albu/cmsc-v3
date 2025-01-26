import { E_COLLECTIONS } from "@/lib/utils";
import {
  T_ETB_ExtendedLocalizedArticle,
  T_ETB_LocalizedArticle,
  T_ETB_LocalizedGallery,
  T_ETB_LocalizedNews,
} from "./data/queries/utils";

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
