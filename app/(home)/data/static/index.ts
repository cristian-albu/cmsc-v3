import { E_LANG } from "@/lib/localization";
import { E_PATHS } from "@/lib/paths";

export const home_heroData = {
  meta: {
    images: [
      "/cmsc_hero/hero_img_1.webp",
      "/cmsc_hero/hero_img_2.webp",
      "/cmsc_hero/hero_img_3.webp",
      "/cmsc_hero/hero_img_4.webp",
    ],
    buttonLink: E_PATHS.CONTACT,
  },
  [E_LANG.RO]: {
    heading: "Construim comunități mai sigure împreună",
    description:
      "Centrul de Mediere si Securitate Comunitara (CMSC) este o fundatie independenta infiintata in anul 2000 in Iasi, Romania, construind impreuna cu comunitatile locale modele de dezvoltare si cooperare menite sa ofere un spatiu mai sigur, deschis si sustenabil.",
    button: "Contactaţi-ne",
  },
  [E_LANG.EN]: {
    heading: "Building safer communities together",
    description:
      "The Mediation and Community Safety Center (CMSC) is an independent foundation established in 2000 in Iași, Romania, working with local communities to build models of development and cooperation designed to create a safer, more open, and sustainable environment.",
    button: "Contact us",
  },
};

export const home_eventsData = {
  meta: { buttonLink: E_PATHS.EVENTS },
  [E_LANG.RO]: {
    heading: "Evenimente",
    button: "Vezi toate evenimentele",
  },
  [E_LANG.EN]: {
    heading: "Events",
    button: "See all events",
  },
};

export const home_partnersData = {
  [E_LANG.RO]: { heading: "Parteneri" },
  [E_LANG.EN]: { heading: "Partners" },
};

export const home_projectsData = {
  meta: { buttonLink: E_PATHS.PROJECTS },
  [E_LANG.RO]: {
    heading: "Proiecte şi programe",
    description:
      "Proiectele si serviciile Centrului de Mediere si Securitate Comunitara sunt construite pe dezvoltarea si promovarea de politici publice si modele de dezvoltare comunitara, de cooperare si dezvoltare de bune practici, precum si campanii sau initiative legislative care sa contribuie la o viata mai sigura pentru comunitatile noastre, in familie si in societate.",
    listTitle: "Cele patru directii de actiune sunt:",
    list: [
      "Dezvoltarea comunitara rurala",
      "Proiecte, servicii si initiative legislative in domeniul prevenirii si combaterii violentei asupra femeii si violentei domestice",
      "Cooperare locala, europeana si internationala pentru comunitati sigure",
      "Asistenta tehnica, cercetare, inovare si initiative legislative in domeniul social",
    ],
    button: "Vezi toate proiectele",
  },
  [E_LANG.EN]: {
    heading: "Projects and Programs",
    description:
      "The projects and services of the Mediation and Community Safety Center are built on the development and promotion of public policies and community development models, cooperation and best practices, as well as campaigns or legislative initiatives that contribute to a safer life for our communities, families, and society.",
    listTitle: "The four main areas of action are:",
    list: [
      "Rural community development",
      "Projects, services, and legislative initiatives to prevent and combat violence against women and domestic violence",
      "Local, European, and international cooperation for safe communities",
      "Technical assistance, research, innovation, and legislative initiatives in the social domain",
    ],
    button: "See all projects",
  },
};

export const home_resourcesData = {
  meta: { buttonLink: E_PATHS.RESOURCES },
  [E_LANG.RO]: {
    heading: "Resurse",
    description:
      "Spațiu dedicat celor dintre voi care doresc să navigheze în siguranță prin valuri de informații, clipuri video, cărți și proiecte realizate împreună cu tine, pentru tine",
    button: "Vezi toate",
  },
  [E_LANG.EN]: {
    heading: "Resources",
    description:
      "A dedicated space for those of you who wish to safely navigate through waves of information, videos, books, and projects created with you, for you.",
    button: "See all",
  },
};

export const home_teamData = {
  [E_LANG.RO]: { heading: "Echipa noastră" },
  [E_LANG.EN]: { heading: "Our Team" },
};

export const home_councilData = {
  meta: { buttonLink: E_PATHS.ABOUT },
  [E_LANG.RO]: { heading: "Consiliul director", button: "Vezi mai multe despre noi" },
  [E_LANG.EN]: { heading: "Board of Directors", button: "Learn more about us" },
};

export const home_ctaData = {
  meta: { buttonLink: E_PATHS.CONTACT },
  [E_LANG.RO]: {
    heading: "Apel la acţiune",
    description:
      "Pentru persoanele care au nevoie de asistenta de urgenta in cazuri de violenta domestica sau violenta pe baza de gen, va rugam sa ne scrieti la email info@cmsc.ro sau pe facebook",
    button: "Contactaţi-ne",
  },
  [E_LANG.EN]: {
    heading: "Call to Action",
    description:
      "For individuals who need urgent assistance in cases of domestic violence or gender-based violence, please write to us at info@cmsc.ro or contact us on Facebook.",
    button: "Contact us",
  },
};
