import client from "@/lib/client";
import { GET_SERVICES_LIST } from "../_views/services/queries";
import ServicesPage from "../_views/services/pages/ServicesPage";
import { T_ServicesRequest } from "../_views/services/types";

export const metadata = {
  title: "Servicii",
  description:
    "Asistență integrată și suport pentru victimele violenței domestice",
};

export default async function Page() {
  const services = await client.request<T_ServicesRequest>(GET_SERVICES_LIST);

  return <ServicesPage data={services} />;
}
