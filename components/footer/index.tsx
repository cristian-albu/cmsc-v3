"use client";

import React, { FC } from "react";
import Section from "../section";
import Link from "next/link";
import Wrapper from "../wrapper";
import { E_PATHS } from "@/lib/paths";
import { useLangContext } from "@/lib/contexts/LangContext";
import { E_LANG } from "@/lib/localization";

const data = {
  [E_LANG.EN]: {
    usefulInfo: "Useful Information",
    contactDetails: "Contact Details",
    facebookPage: "Facebook Page",
    email: "Email: lalbu@cmsc.ro",
    greenPhone: "Green Phone: 0800.070.017",
    emergencyPhone: "Emergency Phone: +40787.878.806",
    address: "Constantin Langa Street no. 103X, Miroslava village, Miroslava commune, Iasi county, Romania, 707305",
    cmscPages: "CMSC Pages",
    home: "Home",
    projects: "Projects and Programs",
    events: "Events",
    resources: "Resources",
    emotionalTreasureBox: "Emotional Treasure Box",
    about: "About Us",
    contact: "Contact",
    helplineText:
      "If you or someone you know is afraid of a close person, feels unsafe, or threatened: * you can call us for free at Green Phone: 0800.070.017 (accessible only in Romania); * you can call the Emergency Phone: +40787.878.806, at a normal rate (voice call) and free online for written or voice messages on Telegram, WhatsApp, and for SMS messages. * you can send a written message on the platform www.helenahelpline.com Helena Helpline is available NON-STOP in Romanian, Russian, Ukrainian, and English.",
    createdBy: "Created by Koddezign",
  },
  [E_LANG.RO]: {
    usefulInfo: "Informaţii utile",
    contactDetails: "Date contact",
    facebookPage: "Pagina Facebook",
    email: "Email: lalbu@cmsc.ro",
    greenPhone: "Telefon verde: 0800.070.017",
    emergencyPhone: "Telefon urgență: +40787.878.806",
    address: "Strada Constantin Langa nr. 103X, sat Miroslava, comuna Miroslava, județul Iași, România, 707305",
    cmscPages: "Paginile CMSC",
    home: "Acasă",
    projects: "Proiecte şi programe",
    events: "Evenimente",
    resources: "Resurse",
    emotionalTreasureBox: "Emotional Treasure Box",
    about: "Despre noi",
    contact: "Contact",
    helplineText:
      "Dacă dumneavoastră, sau unei persoane cunoscute, vă este teamă de o persoană apropiată, dacă vă simțiți în nesiguranță sau amenințată: * ne puteți suna gratuit la Tel. Verde: 0800.070.017 (accesibil doar în România); * puteți apela la Telefonul de urgență: +40787.878.806, tarif normal pe telefon (apel vocal) și gratuit online pentru mesaje scrise sau vocale pe Telegram, WhatsApp și pentru mesaje scrise de tip SMS. * puteți trimite un mesaj scris pe platforma www.helenahelpline.com Helena Helpline este accesibilă NON STOP în limba română, rusă, ucraineană și engleză.",
    createdBy: "Creat de Koddezign",
  },
};

export const Footer: FC = () => {
  const { langState } = useLangContext();
  const langData = data[langState];

  return (
    <Section bg="dark">
      <Wrapper padding>
        <div className="w-full flex flex-col">
          {" "}
          <p className="text-5xl">{langData.usefulInfo}</p>
          <div className="py-[3rem] flex justify-between flex-wrap">
            <div className="flex flex-col items-start justify-start w-full lg:w-[48%] gap-3">
              <p className="text-xl ">{langData.contactDetails}</p>
              <a href="https://www.facebook.com/centruldemedieresisecuritatecomunitara" target="_blank" rel="noreferrer">
                {langData.facebookPage}
              </a>
              <p>{langData.email}</p>
              <p>{langData.greenPhone}</p>
              <p>{langData.emergencyPhone}</p>
              <a href="https://goo.gl/maps/dN65DYnXFbjzioZh9" target="_blank" rel="noreferrer">
                {langData.address}
              </a>
            </div>
            <div className="flex flex-col items-start justify-start w-full lg:w-[48%] gap-3">
              <p className="text-xl ">{langData.cmscPages}</p>
              <Link href="/">{langData.home}</Link>
              <Link href={E_PATHS.PROJECTS}>{langData.projects}</Link>
              <Link href={E_PATHS.EVENTS}>{langData.events}</Link>
              <Link href={E_PATHS.RESOURCES}>{langData.resources}</Link>
              <Link href={E_PATHS.EMOTIONAL_TREASURE_BOX}>{langData.emotionalTreasureBox}</Link>
              <Link href={E_PATHS.ABOUT}>{langData.about}</Link>
              <Link href={E_PATHS.CONTACT}>{langData.contact}</Link>
            </div>
          </div>
          <p>{langData.helplineText}</p>
          <a href="https://www.koddezign.com" className="mx-auto gap-3 my-10 flex justify-center items-center">
            <div className="w-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331.71 245" fill="#FFFFFF">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="title">
                    <path
                      className="cls-1"
                      d="M313.51,190.49a98.34,98.34,0,0,1-138.92,0L105.12,121l95.3-95.29h29V0H150.57V25.74H164L68.73,121l87.66,87.66a124,124,0,0,0,175.32,0Z"
                    />
                    <polygon
                      className="cls-1"
                      points="52.29 25.74 78.85 25.74 78.85 0 0 0 0 25.74 26.55 25.74 26.55 213.87 0 213.87 0 239.6 78.85 239.6 78.85 213.87 52.29 213.87 52.29 25.74"
                    />
                    <path
                      className="cls-1"
                      d="M186.36,121a57.69,57.69,0,1,0,57.69-57.69A57.76,57.76,0,0,0,186.36,121Zm57.69-31.95a32,32,0,1,1-32,32A32,32,0,0,1,244.05,89.08Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            {langData.createdBy}
          </a>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Footer;
