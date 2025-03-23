import { ContactPage } from "@/app/_views/contact";
import React from "react";
import { home_heroData } from "../_views/home/static";
import { E_LANG } from "@/lib/localization";

export const metadata = {
  title: "Contact",
  description: `${home_heroData[E_LANG.RO].heading}. ${home_heroData[E_LANG.RO].description}`,
};

export default function Page() {
  return <ContactPage />;
}
