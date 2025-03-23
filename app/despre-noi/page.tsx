import client from "@/lib/client";
import { AboutPage, GET_PARTNERS_LIST, GET_TEAM_MEMBER_LIST, T_PartnersRequest, T_TeamRequest } from "@/app/_views/about-us";
import React from "react";
import requestData from "@/lib/requestData";
import { teamDescription } from "../_views/about-us/constants";
import { E_LANG } from "@/lib/localization";

export const metadata = {
  title: "Despre noi",
  description: teamDescription[E_LANG.RO].desc1.trim().replace(/\s+/g, " "),
};

export default async function Page() {
  const aboutData = await requestData(() =>
    Promise.all([client.request<T_TeamRequest>(GET_TEAM_MEMBER_LIST), client.request<T_PartnersRequest>(GET_PARTNERS_LIST)])
  );

  return <AboutPage aboutData={aboutData} />;
}
