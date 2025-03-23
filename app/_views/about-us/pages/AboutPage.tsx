"use client";

import { T_Request } from "@/lib/types";
import React, { FC } from "react";
import { T_PartnersRequest, T_TeamRequest } from "../types";
import { ErrorMessage, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import TeamSection from "../components/TeamSection";
import PartnersSection from "../components/PartnersSection";
import CouncilSection from "../components/CouncilSection";
import { teamDescription } from "../constants";

const AboutPage: FC<{ aboutData: T_Request<[T_TeamRequest, T_PartnersRequest]> }> = ({ aboutData }) => {
  const { langState } = useLangContext();
  const [teamData, partnerData] = aboutData.data || [];

  const { heading, desc1, desc2 } = teamDescription[langState];

  if (aboutData.error) {
    return (
      <ErrorMessage>
        <Typography>{aboutData.error.status}</Typography>
        <Typography>{aboutData.error[langState]}</Typography>
      </ErrorMessage>
    );
  }

  return (
    <>
      <Section>
        <Wrapper padding>
          <div className="w-full flex justify-start flex-col gap-5">
            <Typography level={1} heading={1}>
              {heading}
            </Typography>
            <Typography>{desc1}</Typography>
            <Typography>{desc2}</Typography>
          </div>
        </Wrapper>
      </Section>
      <Section bg="gray" wave="top" aria-label="decorative section" />
      {teamData && <TeamSection team={teamData} />}
      {teamData && <CouncilSection council={teamData} />}
      {partnerData && <PartnersSection partners={partnerData} />}
    </>
  );
};

export default AboutPage;
