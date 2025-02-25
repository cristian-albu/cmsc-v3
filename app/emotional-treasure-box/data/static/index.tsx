import { E_LANG } from "@/lib/localization";
import { E_PATHS } from "@/lib/paths";
import { LuBookMarked } from "react-icons/lu";
import { MdOutlineVideoLibrary, MdPodcasts } from "react-icons/md";

export const emotionalTrasureBoxProjectData = {
  [E_LANG.RO]: {
    title: "Despre proiect",
    promotor: "Promotor de proiect: Fundația Centrul de Mediere și Securitate Comunitară",
    partners: "Parteneri de proiect: Foreningen Hedda (Norvegia)",
    value: "Valoarea totală a proiectului: 607.324 lei (122.040.83 euro)",
    valueOfUnrebursableFinance:
      "Valoarea finanțării nerambursabile (100% Granturi SEE și Norvegiene): 607.324 lei (122.040.83 euro)",
    duration: "Durată: 4 luni (1 noiembrie 2024 -28 februarie 2025)",
    location: "Locație de implementare: Iași (România) și Oslo (Norvegia)",
    facebook: { text: "Facebook", link: "https://www.facebook.com/WhatHappenedToTheHeart" },
  },
  [E_LANG.EN]: {
    title: "About the project",
    promotor: "Project Promoter: Mediation and Community Security Center Foundation",
    partners: "Project Partner: Foreningen Hedda (Norway)",
    value: "Total project value: 607,324 RON (122,040.83 EUR)",
    valueOfUnrebursableFinance:
      "Non-reimbursable funding value (100% EEA and Norwegian Grants): 607,324 RON (122,040.83 EUR)",
    duration: "Duration: 4 months (November 1, 2024 - February 28, 2025)",
    location: "Implementation location: Iași (Romania) and Oslo (Norway)",
    facebook: { text: "Facebook", link: "https://www.facebook.com/WhatHappenedToTheHeart" },
  },
};

export const emotionalTreasureBoxData = {
  [E_LANG.RO]: {
    heading: "Emotional Treasure Box -What Happened to the Heart",
    description: `Imbinând literatura, arta vizuală, teatrul, muzica și dansul, 
    Centrul de Mediere și Securitate Comunitara și Foreningen Hedda folosesc 
    efectul vindecator al artei implicand direct în creație femeile și copiii 
    supraviețuitori ai violentei in familie`,
    t1: `Primul rezultat`,
    p1: `Un produs cultural complex (Emoțional Treasure Box 
    -What Happened to the Heart) realizat de Centrul de Mediere și Securitate Comunitara 
    (24 de ani expertiza cu victimele violentei domestice) și Foreningen Hedda Norvegia 
    -proiecte culturale internaționale. Produsul ia doua forme – un eveniment cultural 
    complex de Dragobete la Ateneul Iesean/Teatrul National Iasi precum și resursa online 
    -include carte de povestiri femei format citibil romana și engleza, format audio (podcast) 
    tip teatru radiofonic și 4 scenarii de teatru format video (inregistrare spectacol audio și mim), 
    jurnale emotionale (colaje) color și din pisla cu copiii din proiect, 5 scene de dans 
    (inregistrare video și audio spectacol) cu trupa de dans (premiata mondial loc 1) -12 
    fetite coreografie originala- muzica solistei norvegiene Aurora Asknes.`,
    t2: `Al doilea rezultat`,
    p2: `Continuarea cooperarii bilaterale prin implicarea expertilor 
    norvegieni alături de echipa romana mixta de 5 actori, scenaristi, regizori, scriitori, 
    coreografi și 2 membri ai echipei în Norvegia (Oslo) și Romania (Iasi) la workshopuri de 
    scriere creativa și povestire, lucru cu specialisti și artisti National Theatre Oslo, 
    The International Museum of Childrens Art și The Dance Artists House din Oslo.`,
    t3: `Obiectivul general al inițiativei bilaterale`,
    p3: `Cooperare bilaterala Romania - Norvegia in 5 domenii culturale prin co-crearea 
    Emoțional Treasure Box -What Happened to the Heart construita prin schimburi de 
    experiența și lucru în comun intre CMSC și Hedda.`,
    p4: `Inițiativă bilaterală finanțată prin Granturile SEE și Norvegiene - Fondul Național Bilateral în cadrul Programului RO-CULTURA`,
    articles: { heading: "Articole" },
    gallery: { heading: "Galerie foto-video" },
    news: { heading: "Noutăți" },
    headerLinks: [
      {
        text: "Povești de citit",
        resource: `${E_PATHS.EMOTIONAL_TREASURE_BOX}/povesti-de-citit`,
        description: "Emotional Treasure Box format electronic pdf",
        icon: <LuBookMarked />,
      },
      {
        text: "Povești de ascultat",
        resource: `${E_PATHS.EMOTIONAL_TREASURE_BOX}/povesti-de-ascultat`,
        description: "The description to be added",
        icon: <MdPodcasts />,
      },
      {
        text: "Povești de văzut",
        resource: `${E_PATHS.EMOTIONAL_TREASURE_BOX}/povesti-de-vazut`,
        description: "The description to be added",
        icon: <MdOutlineVideoLibrary />,
      },
    ],
  },
  [E_LANG.EN]: {
    heading: "Emotional Treasure Box -What Happened to the Heart",
    description: `Combining literature, visual arts, theater, music, and dance,  
    the Center for Mediation and Community Security and Foreningen Hedda use  
    the healing power of art by directly involving women and children  
    survivors of domestic violence in the creative process.`,
    t1: `First Outcome`,
    p1: `A complex cultural product (Emotional Treasure Box -What Happened to the Heart)  
    created by the Center for Mediation and Community Security (24 years of expertise  
    working with domestic violence victims) and Foreningen Hedda Norway - international  
    cultural projects. The product takes two forms – a large cultural event for Dragobete  
    at the Iași Athenaeum/National Theatre of Iași, as well as an online resource, including:  
    a collection of women's stories in Romanian and English, an audio version (podcast)  
    in the style of a radio play, four theater scripts in video format (recordings of audio and mime performances),  
    emotional journals (collages) created by children in the project,  
    five dance scenes (video and audio recordings of performances) with a world-champion dance troupe  
    featuring 12 young girls performing an original choreography, set to music  
    by Norwegian artist Aurora Asknes.`,
    t2: `Second Outcome`,
    p2: `Continuation of bilateral cooperation by engaging Norwegian experts alongside  
    a mixed Romanian team of five actors, scriptwriters, directors, writers, and choreographers,  
    as well as two team members in Norway (Oslo) and Romania (Iași) for creative writing  
    and storytelling workshops, collaborating with specialists and artists  
    from the National Theatre Oslo, The International Museum of Children's Art,  
    and The Dance Artists House in Oslo.`,
    t3: `General Objective of the Bilateral Initiative`,
    p3: `Bilateral cooperation between Romania and Norway in five cultural fields  
    through the co-creation of the Emotional Treasure Box -What Happened to the Heart,  
    built through experience exchange and joint efforts between CMSC and Hedda.`,
    p4: `This bilateral initiative is financed with the support of EEA and Norway Grants 2014 – 2021 through the National Fund for Bilateral Relations within the RO-CULTURE Programme`,
    articles: { heading: "Articles" },
    gallery: { heading: "Photo-Video Gallery" },
    news: { heading: "News" },
    headerLinks: [
      {
        text: "Stories to read",
        resource: `${E_PATHS.EMOTIONAL_TREASURE_BOX}/povesti-de-citit`,
        description: "Emotional Treasure Box electronic format pdf",
        icon: <LuBookMarked />,
      },
      {
        text: "Stories to listen",
        resource: `${E_PATHS.EMOTIONAL_TREASURE_BOX}/povesti-de-ascultat`,
        description: "The description to be added",
        icon: <MdPodcasts />,
      },
      {
        text: "Storied to see",
        resource: `${E_PATHS.EMOTIONAL_TREASURE_BOX}/povesti-de-vazut`,
        description: "The description to be added",
        icon: <MdOutlineVideoLibrary />,
      },
    ],
  },
};

export const emotionalTreasureBoxFooterData = {
  [E_LANG.RO]: {
    disclaimer: `Inițiativă bilaterală finanțată prin Granturile SEE și Norvegiene - Fondul Național Bilateral în cadrul Programului RO-CULTURA`,
    info1: {
      text: `Granturile SEE și Norvegiene reprezintă contribuția Islandei, Liechtensteinului și 
      Norvegiei la o Europă verde, competitivă și incluzivă. Există două obiective generale: 
      reducerea disparităților economice și sociale în Europa și consolidarea relațiilor bilaterale 
      dintre țările donatoare și 15 țări UE din Europa Centrală și de Sud și Țările Baltice. Cele 
      trei țări donatoare cooperează strâns cu UE prin intermediul Acordului privind Spațiul Economic 
      European (SEE). Între 1994 și 2014, donatorii au furnizat 3,3 miliarde EUR prin scheme 
      consecutive de granturi. Pentru perioada 2014-2021, granturile SEE și Norvegiene se ridică 
      la 2,8 miliarde EUR. Mai multe detalii sunt disponibile pe:`,
      link1: { text: "www.eeagrants.org", href: "https://www.eeagrants.org" },
      linksConnection: "și",
      link2: { text: "www.eeagrants.ro", href: "https://www.eeagrants.ro" },
    },

    info2: {
      text: `Programul RO-CULTURA este implementat de Ministerul Culturii prin Unitatea de 
      Management a Proiectului și are ca obiectiv general consolidarea dezvoltării economice și 
      sociale prin cooperare culturală, antreprenoriat cultural și managementul patrimoniului cultural. 
      Bugetul Programului este de aproximativ 34 milioane de euro. Mai multe detalii sunt disponibile pe:`,
      link1: { text: "www.ro-cultura.ro", href: "https://www.ro-cultura.ro" },
    },
  },

  [E_LANG.EN]: {
    disclaimer: `This bilateral initiative is financed with the support of EEA and Norway Grants 2014 – 2021 through the National Fund for Bilateral Relations within the RO-CULTURE Programme`,
    info1: {
      text: `The EEA and Norway Grants represent the contribution of Iceland, Liechtenstein and Norway 
      towards a green, competitive and inclusive Europe. There are two overall objectives: reduction of 
      economic and social disparities in Europe, and to strengthen bilateral relations between the donor 
      countries and 15 EU countries in Central and Southern Europe and the Baltics. The three donor 
      countries cooperate closely with the EU through the Agreement on the European Economic Area (EEA). 
      The donors have provided €3.3 billion through consecutive grant schemes between 1994 and 2014. 
      For the period 2014-2021, the EEA and Norway Grants amount to €2.8 billion More details are available at:`,
      link1: { text: "www.eeagrants.org", href: "https://www.eeagrants.org" },
      linksConnection: "and",
      link2: { text: "www.eeagrants.ro", href: "https://www.eeagrants.ro" },
    },

    info2: {
      text: `RO-CULTURE is implemented in Romania by the Ministry of Culture through 
      the Project Management Unit. The Programme aims to strengthen social and economic 
      development through cultural cooperation, cultural entrepreneurship and cultural 
      heritage management. The total budget amounts to approximately 34 million EUR. For more details:`,
      link1: { text: "www.ro-cultura.ro", href: "https://www.ro-cultura.ro" },
    },
  },
};

export const backToEtb = {
  [E_LANG.RO]: "Înapoi la Emotional Treasure Box",
  [E_LANG.EN]: "Back to Emotional Treasure Box",
};
