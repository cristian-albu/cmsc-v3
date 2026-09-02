import { ContactPage } from "@/app/_views/contact";
import React from "react";
import { home_heroData } from "../_views/home/static";
import { E_LANG } from "@/lib/localization";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata = {
  title: "Contact",
  description: `${home_heroData[E_LANG.RO].heading}. ${home_heroData[E_LANG.RO].description}`,
};

export default function Page() {
  return <ContactPage />;
}
