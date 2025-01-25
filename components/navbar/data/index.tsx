import { E_LANG } from "@/lib/localization";
import { E_PATHS } from "@/lib/paths";
import { ReactNode } from "react";

export type T_NavItem = {
  [E_LANG.RO]: string;
  [E_LANG.EN]: string;
  link: string;
  icon?: ReactNode;
  internal?: false;
};

export const navbarData: Readonly<T_NavItem[]> = [
  {
    [E_LANG.RO]: "Centrul de Mediere și Securitate Comunitară",
    [E_LANG.EN]: "Community Safety and Mediation Center",
    link: E_PATHS.HOME,
  },
  { [E_LANG.RO]: "Proiecte și programe", [E_LANG.EN]: "Projects and programs", link: E_PATHS.PROJECTS },
  { [E_LANG.RO]: "Resurse", [E_LANG.EN]: "Resources", link: E_PATHS.RESOURCES },
  { [E_LANG.RO]: "Evenimente", [E_LANG.EN]: "Events", link: E_PATHS.EVENTS },
  { [E_LANG.RO]: "Despre noi", [E_LANG.EN]: "About us", link: E_PATHS.ABOUT },
  { [E_LANG.RO]: "Contact", [E_LANG.EN]: "Contact", link: E_PATHS.CONTACT },
  { [E_LANG.RO]: "Donează", [E_LANG.EN]: "Donate", link: E_PATHS.DONATE, internal: false },
];
