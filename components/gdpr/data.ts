import { E_GdprNames, T_GdprState } from "@/lib/contexts/GdprContext";
import { E_LANG } from "@/lib/localization";
import { E_PATHS } from "@/lib/paths";

export const acceptDefault: T_GdprState = {
  [E_GdprNames.essential]: true,
  [E_GdprNames.preferences]: true,
  [E_GdprNames.analytics]: true,
  [E_GdprNames.advertisement]: true,
};

export const refuseDefault: T_GdprState = {
  [E_GdprNames.essential]: true,
  [E_GdprNames.preferences]: false,
  [E_GdprNames.analytics]: false,
  [E_GdprNames.advertisement]: false,
};

export const bannerData = {
  [E_LANG.EN]: {
    acceptAllBtn: "Accept all",
    openSettingsBtn: "Open settings",
    title: "We use cookies",
    description: `We use cookies to improve your browsing experience and 
    to personalize the content we present. The preferences menu allows you 
    to control the types of cookies you accept.`,
    seeMore: {
      text: "See more on",
      btnText: "privacy policy",
      btnLink: E_PATHS.PRIVACY,
    },
  },
  [E_LANG.RO]: {
    acceptAllBtn: "Accept toate",
    openSettingsBtn: "Deschide setări",
    title: "Folosim cookies",
    description: `Folosim cookie-uri pentru a vă îmbunătăți experiența de navigare 
    și pentru a personaliza conținutul pe care îl prezentăm. Meniul de preferinţe 
    vă permite să controlați tipurile de cookie-uri pe care le acceptați.`,
    seeMore: {
      text: "Vezi mai multe pe",
      btnText: "politica de condifențialitate",
      btnLink: E_PATHS.PRIVACY,
    },
  },
};

export const settingsData = {
  [E_LANG.EN]: {
    title: "Cookie settings",
    description: bannerData[E_LANG.EN].description,
    seeMore: { ...bannerData[E_LANG.EN].seeMore },
    essential: {
      name: E_GdprNames.essential,
      title: "Essential",
      explanation: ``,
    },
    preferences: {
      name: E_GdprNames.preferences,
      title: "Preference",
      explanation: ``,
    },
    analytics: {
      name: E_GdprNames.analytics,
      title: "Analytics",
      explanation: ``,
    },
    advertisement: {
      name: E_GdprNames.advertisement,
      title: "Advertisement",
      explanation: ``,
    },
    refuseAllBtn: "Refuse all",
    acceptAllBtn: "Accept all",
    saveBtn: "Save settings",
    closeBtn: "Close settings",
  },
  [E_LANG.RO]: {
    title: "Setări cookies",
    description: bannerData[E_LANG.RO].description,
    seeMore: { ...bannerData[E_LANG.RO].seeMore },
    essential: {
      name: E_GdprNames.essential,
      title: "Esențiale",
      explanation: `Pentru funcţionarea site-ului. Ne trebuie măcar 1 cookie pentru a stoca alegerea dvs.`,
    },
    preferences: {
      name: E_GdprNames.preferences,
      title: "Preferință",
      explanation: `Pentru a putea vizualiza anumite tipuri de conţinut (exemplu: postări de pe Facebook sau video-uri de pe YouTube ce utilizează cookie-uri)`,
    },
    analytics: {
      name: E_GdprNames.analytics,
      title: "Analitice",
      explanation: `Pentru a măsura traficul şi performanţa website-ului (exemplu: Google Analytics)`,
    },
    advertisement: {
      name: E_GdprNames.advertisement,
      title: "Publicitate",
      explanation: `Pentru a putea personaliza anunţurile publicitare. În acest moment nu folosim anunţuri dar este posibil să păstrăm aceste informații pentru viitor.`,
    },
    refuseAllBtn: "Refuz toate",
    acceptAllBtn: "Accept toate",
    saveBtn: "Salvează setările",
    closeBtn: "Închide setările",
  },
};
