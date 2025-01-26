import { E_LANG } from "@/lib/localization";
import { MEDIA_FILES, RICH_TEXT } from "@/lib/utils";

enum E_LOCALIZED_GALLERY_FIELDS {
  GALLERY_NAME = "galleryName",
  DESCRIPTION = "description",
}

export const baseGallery = {
  [E_LOCALIZED_GALLERY_FIELDS.GALLERY_NAME]: "",
  [E_LOCALIZED_GALLERY_FIELDS.DESCRIPTION]: "",
  slug: "",
  videoLinks: "" as unknown as string[],
  mediaFilesCollection: MEDIA_FILES as unknown as { items: Array<{ url: string; title: string }> },
};

const localizedGallery = {
  [`${E_LOCALIZED_GALLERY_FIELDS.GALLERY_NAME}${E_LANG.EN}`]: "",
  [`${E_LOCALIZED_GALLERY_FIELDS.DESCRIPTION}${E_LANG.EN}`]: "",
};

export const baseLocalizedGallery = {
  ...baseGallery,
  ...localizedGallery,
};

export type T_ETB_Gallery = typeof baseGallery;
export type T_ETB_LocalizedGallery = typeof baseLocalizedGallery;

enum E_LOCALIZED_NEWS_FIELDS {
  TITLE = "title",
  CONTENT = "content",
}

export const baseNews = {
  [E_LOCALIZED_NEWS_FIELDS.TITLE]: "",
  [E_LOCALIZED_NEWS_FIELDS.CONTENT]: "",
  link: "",
  date: "",
};

const localizedNewsFields = {
  [`${E_LOCALIZED_NEWS_FIELDS.TITLE}${E_LANG.EN}`]: "",
  [`${E_LOCALIZED_NEWS_FIELDS.CONTENT}${E_LANG.EN}`]: "",
};

export const baseLocalizedNews = {
  ...baseNews,
  ...localizedNewsFields,
};

export type T_ETB_News = typeof baseNews;
export type T_ETB_LocalizedNews = typeof baseLocalizedNews;

enum E_LOCALIZED_ARTICLE_FIELDS {
  TITLE = "title",
  DESCRIPTION = "description",
  CONTENT = "content",
}
export const baseArticles = {
  [E_LOCALIZED_ARTICLE_FIELDS.TITLE]: "",
  [E_LOCALIZED_ARTICLE_FIELDS.DESCRIPTION]: "",
  slug: "",
  thumbnail: { url: "", description: "" },
};

export const extendedArticles = {
  ...baseArticles,
  [E_LOCALIZED_ARTICLE_FIELDS.CONTENT]: RICH_TEXT,
};

const localizedArticlesFields = {
  [`${E_LOCALIZED_ARTICLE_FIELDS.TITLE}${E_LANG.EN}`]: "",
  [`${E_LOCALIZED_ARTICLE_FIELDS.DESCRIPTION}${E_LANG.EN}`]: "",
};

export const baseLocalizedArticles = {
  ...baseArticles,
  ...localizedArticlesFields,
};

export const extendedLocalizedArticles = {
  ...extendedArticles,
  ...localizedArticlesFields,
  [`${E_LOCALIZED_ARTICLE_FIELDS.CONTENT}${E_LANG.EN}`]: RICH_TEXT,
};

export type T_ETB_Article = typeof baseArticles;
export type T_ETB_LocalizedArticle = typeof baseLocalizedArticles;
export type T_ETB_ExtendedArticle = typeof extendedArticles;
export type T_ETB_ExtendedLocalizedArticle = typeof extendedLocalizedArticles;
