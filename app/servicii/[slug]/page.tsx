import ServicesTemplatePage from "@/app/_views/services/pages/ServicesTemplatePage";
import {
  GET_RELATED_SERVICES,
  GET_SERVICE_BY_SLUG,
  GET_SERVICES_SLUGS,
} from "@/app/_views/services/queries";
import { servicesData } from "@/app/_views/services/static";
import {
  T_ServicePageData,
  T_ServiceRequest,
  T_ServicesRequest,
} from "@/app/_views/services/types";
import client from "@/lib/client";
import { E_LANG } from "@/lib/localization";
import { T_Params } from "@/lib/types";
import { E_COLLECTIONS } from "@/lib/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await client.request<{
    [E_COLLECTIONS.SERVICES]: { items: { slug: string }[] };
  }>(GET_SERVICES_SLUGS);

  return slugs[E_COLLECTIONS.SERVICES].items.map((service) => ({
    slug: service.slug,
  }));
}

export const metadata = {
  title: "Servicii",
  description: servicesData[E_LANG.RO].description,
};

async function getServicesData(currSlug: string) {
  const data: T_ServicePageData = {
    service: null,
    related: null,
  };

  try {
    const [service, related] = await Promise.allSettled([
      client.request<T_ServiceRequest>(GET_SERVICE_BY_SLUG, { slug: currSlug }),
      client.request<T_ServicesRequest>(GET_RELATED_SERVICES, {
        slug: currSlug,
      }),
    ]);

    if (service.status === "fulfilled") {
      data.service = service.value;
    }

    if (related.status === "fulfilled") {
      data.related = related.value;
    }

    return data;
  } catch (error) {
    console.error("Something went wrong with the service data fetching", error);
    return data;
  }
}

export default async function Page({ params }: T_Params) {
  const currSlug = (await params).slug;

  if (!currSlug) {
    notFound();
  }

  const data = await getServicesData(currSlug);

  return <ServicesTemplatePage service={data.service} related={data.related} />;
}
