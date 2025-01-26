import client from "@/lib/client";
import { T_Params } from "@/lib/types";
import { E_COLLECTIONS } from "@/lib/utils";
import { notFound } from "next/navigation";
import { GET_ARTICLE_BY_SLUG, GET_ARTICLES_SLUGS, GET_GALLERY_BY_SLUG, GET_GALLERY_SLUGS } from "../data/queries";
import { T_ArticleItem, T_ArticleSlugData, T_GalleryItem, T_GallerySlugData } from "../types";
import ArticleTemplateView from "./views/ArticleTemplateView";
import GalleryTemplateView from "./views/GalleryTemplateView";

export async function generateStaticParams() {
  const [gallery, articles] = await Promise.all([
    client.request<T_GallerySlugData>(GET_GALLERY_SLUGS),
    client.request<T_ArticleSlugData>(GET_ARTICLES_SLUGS),
  ]);

  return [
    ...gallery[E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_GALLERY].items,
    ...articles[E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_ARTICLES].items,
  ].map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: T_Params) {
  const currSlug = (await params).slug;

  const [gallery, article] = await Promise.allSettled([
    client.request<T_GalleryItem | undefined>(GET_GALLERY_BY_SLUG, { slug: currSlug }),
    client.request<T_ArticleItem | undefined>(GET_ARTICLE_BY_SLUG, { slug: currSlug }),
  ]);

  if (
    gallery.status === "fulfilled" &&
    gallery.value &&
    gallery.value[E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_GALLERY].items.length > 0
  ) {
    return <GalleryTemplateView data={gallery.value[E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_GALLERY].items[0]} />;
  }

  if (
    article.status === "fulfilled" &&
    article.value &&
    article.value[E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_ARTICLES].items.length > 0
  ) {
    return <ArticleTemplateView data={article.value[E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_ARTICLES].items[0]} />;
  }

  notFound();
}
