import { GET_RESOURCES_BY_SLUG, GET_RESOURCES_SLUGS } from "@/app/_views/resources";
import { resourcesData } from "@/app/_views/resources/constants";
import ResourcesTemplatePage from "@/app/_views/resources/pages/ResoucesTemplatePage";
import { T_FullResourceRequest } from "@/app/_views/resources/types";
import client from "@/lib/client";
import { E_LANG } from "@/lib/localization";
import requestData from "@/lib/requestData";
import { T_Params } from "@/lib/types";
import { E_COLLECTIONS } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const slugs = await client.request<{ [E_COLLECTIONS.RESOURCES]: { items: { slug: string }[] } }>(GET_RESOURCES_SLUGS);

  return slugs[E_COLLECTIONS.RESOURCES].items.map(({ slug }) => ({ slug }));
}

export const metadata = {
  title: "Resurse",
  description: resourcesData[E_LANG.RO].description,
};

export default async function Page({ params }: T_Params) {
  const currSlug = (await params).slug;

  if (!currSlug) {
    notFound();
  }

  const data = await requestData(() => client.request<T_FullResourceRequest>(GET_RESOURCES_BY_SLUG, { slug: currSlug }));

  return <ResourcesTemplatePage data={data} />;
}
