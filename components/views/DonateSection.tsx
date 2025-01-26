"use client";

import { Button, Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { FC } from "react";
import { donationData } from "./data";

const DonateSection: FC = () => {
  const { langState } = useLangContext();

  const {
    meta: { buttonLink },
    [langState]: { heading, description, button },
  } = donationData;

  return (
    <Section>
      <Wrapper padding className="gap-5">
        <Typography level={1} heading={2}>
          {heading}
        </Typography>
        <Line />
        <Typography className="columns-1 md:columns-2 gap-10">{description}</Typography>

        <Button href={buttonLink} className="mb-10">
          {button}
        </Button>
      </Wrapper>
    </Section>
  );
};

export default DonateSection;
