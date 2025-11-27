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
    mainImg: "/cmsc_hero/cmsc_hero.jpeg",
    buttonLink: E_PATHS.CONTACT,
  },
  [E_LANG.RO]: {
    heading:
      "Asistență integrată și suport pentru victimele violenței domestice",
    description:
      "Fundația Centrul de Mediere și Securitate Comunitară (CMSC) – organizație non-guvernamentală independentă, înființată în anul 2000 la Iași, România, care construiește împreună cu comunitățile locale modele de dezvoltare și cooperare menite să ofere un spațiu mai sigur, deschis și sustenabil.",
    button: "Contactaţi-ne",
    slogna: "",
    specializedServices: "Servicii specializate",
  },
  [E_LANG.EN]: {
    heading:
      "Integrated assistance and support for victims of domestic violence.",
    description:
      "The Community Mediation and Security Center Foundation (CMSC) – an independent non-governmental organization established in 2000 in Iași, Romania, which works together with local communities to build development and cooperation models designed to provide a safer, more open, and more sustainable environment.",
    button: "Contact us",
    slogna: "",
    specializedServices: "Specialized services",
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

export const home_teamData = {
  [E_LANG.RO]: { heading: "Echipa noastră" },
  [E_LANG.EN]: { heading: "Our Team" },
};

export const home_councilData = {
  meta: { buttonLink: E_PATHS.ABOUT },
  [E_LANG.RO]: {
    heading: "Consiliul director",
    button: "Vezi mai multe despre noi",
  },
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

export const home_assistanceData = {
  [E_LANG.RO]: {
    heading:
      "Asistență integrată și suport în cazurile de violența domestica și violența împotriva femeilor",
    description: `Fundația Centrul de Mediere și Securitate Comunitară (CMSC) – este singurul ONG din Iași ce oferă servicii licențiate de asistenta a  victimelor violenței domestice și 
                  violenței împotriva femeilor – asistând anual aproximativ 150 de femei și copii ce se confruntă cu situații abuzive. 
                  Aceste servicii sunt oferite în mod gratuit, într-un cadru multidisciplinar de tip one stop shop (centru de justiție familiala). 
                  Pentru a asigura o continuitate în furnizarea acestor programe, avem nevoie de contribuția dumneavoastră.`,
    greenPhone:
      "Ne puteți suna gratuit la Tel. Verde: 0800.070.017 (accesibil doar în România)",
    urgentPhone:
      "Puteți apela la Telefonul de urgență: +40787.878.806, tarif normal pe telefon (apel vocal) și gratuit online pentru mesaje scrise sau vocale pe Telegram, WhatsApp și pentru mesaje scrise de tip SMS.",
    qr: {
      label: "Scanați codul ori apăsați butonul pentru a dona.",
    },
    columns: [
      {
        img: "/assistance/gloria.jpeg",
        heading:
          "Centrul de consiliere GLORIA este un serviciu social licențiat care oferă asistență integrată victimelor violenței domestice din județele Iași/Vaslui",
        subHeading: "Centrul de consiliere  Gloria asigură:",
        bullets: [
          `Evaluarea gradului de risc și stabilirea unui plan de intervenție imediată - Birou One-stop shop în spațiul integrat alături de Institutul de Medicină Legală Iași.`,
          `Programe de consiliere psihologică individuale/grup.`,
          `Suport material: pachete de criză, decont transport, costuri acte medicale, pachete hrană.`,
          `Asistență pentru obținere compensații financiare.`,
          `Asistență juridică gratuită pentru obținere ordin de protecție, divorț, stabilire domiciliu copii, plângere penală.`,
        ],
      },
      {
        img: "/assistance/helena.jpeg",
        heading:
          "Helena Helpline -serviciu de tip helpline licențiat de asistență în cazurile de violență împotriva femeilor si violenta domestica",
        subHeading:
          "Helena Helpline este accesibila NON STOP în limba română, rusă, ucraineană și engleză.",
        bullets: [
          `Serviciul de tip help-line, asistență, informare și consiliere telefonică facilitează accesul la servicii de calitate, care răspund nevoilor beneficiarelor victime ale abuzului și violenței domestice și/ sau a violenței bazate pe gen.`,
          `Informare și orientare: operatorul oferă informațiile necesare depășirii situației ce a determinat o persoana să apeleze la serviciile de tip help-line. Operatorul intermediază legătura apelantei cu instituții/persoane suport si la servicii specializate destinate victimelor violenței domestice și/sau de gen, în situația în care aceasta le solicită.`,
        ],
      },
      {
        img: "/assistance/daciana.jpeg",
        heading:
          "Echipa mobilă Daciana este un serviciu mobil activ pe raza județelor Iași și Vaslui:",
        subHeading:
          "Echipa mobilă Daciana este formata din asistenți sociali specializați care se deplasează în teritoriu pentru a:",
        bullets: [
          `Oferi sprijin imediat în cazurile de violență domestică.`,
          `Oferi consiliere în situații de risc.`,
          `Construi planuri de siguranță personalizate împreuna cu victima.`,
          `Oferi pachete de criză pentru victimele aflate în situații de risc.`,
          `Realiza evaluarea gradului de risc și stabilirea unui plan de intervenție imediată.`,
        ],
      },
    ],
  },
  [E_LANG.EN]: {
    heading:
      "Integrated assistance and support in cases of domestic violence and violence against women",
    description: `The Community Mediation and Security Center Foundation (CMSC) is the only NGO in Iași that provides licensed services for assisting victims of domestic violence and 
                violence against women – supporting approximately 150 women and children each year who face abusive situations. 
                These services are offered free of charge, within a multidisciplinary one-stop-shop framework (family justice center). 
                To ensure continuity in providing these programs, we need your contribution.`,
    greenPhone:
      "You can call us for free at the Green Line: 0800.070.017 (accessible only in Romania).",
    urgentPhone:
      "You can call the Emergency Phone at +40787.878.806, at the normal phone rate (voice call), and it is free online for written or voice messages on Telegram, WhatsApp, and for written SMS messages.",
    qr: {
      label: "Scan the code or press the button to donate.",
    },
    columns: [
      {
        img: "/assistance/gloria.jpeg",
        heading:
          "The GLORIA Counseling Center is a licensed social service that provides integrated assistance to victims of domestic violence in the counties of Iași/Vaslui",
        subHeading: "The Gloria Counseling Center provides:",
        bullets: [
          `Risk assessment and development of an immediate intervention plan – One-stop-shop office in an integrated space alongside the Iași Institute of Forensic Medicine`,
          `Individual/group psychological counseling programs`,
          `Individual/group psychological counseling programs`,
          `Material support: crisis packages, transportation reimbursement, medical document fees, food packages`,
          `Assistance for obtaining financial compensation`,
          `Free legal assistance for obtaining protection orders, divorce, establishing child residence, filing criminal complaints.`,
        ],
      },
      {
        img: "/assistance/helena.jpeg",
        heading:
          "Helena Helpline – a licensed helpline service offering assistance in cases of violence against women and domestic violence",
        subHeading:
          "Helena Helpline is available NON-STOP in Romanian, Russian, Ukrainian, and English.",
        bullets: [
          `The helpline service offers assistance, information, and telephone counseling, facilitating access to quality services that meet the needs of beneficiaries who are victims of abuse and domestic and/or gender-based violence.`,
          `Information and guidance: the operator provides the necessary information to overcome the situation that led a person to use the helpline services. The operator facilitates the caller’s connection with support institutions/persons and with specialized services for victims of domestic and/or gender-based violence, when requested.`,
        ],
      },
      {
        img: "/assistance/daciana.jpeg",
        heading:
          "The Daciana Mobile Team is an active mobile service in the counties of Iași and Vaslui:",
        subHeading:
          "The Daciana Mobile Team is made up of specialized social workers who travel in the field to:",
        bullets: [
          `Provide immediate support in cases of domestic violence`,
          `Offer counseling in risk situations`,
          `Build personalized safety plans together with the victim`,
          `Provide crisis packages for victims in high-risk situations`,
          `Carry out risk assessments and establish an immediate intervention plan`,
        ],
      },
    ],
  },
};
