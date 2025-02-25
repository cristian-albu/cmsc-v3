"use client";
import { Section, Typography, Video, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import React from "react";
import { storiesToViewData } from "../data/static/stories";
import Link from "next/link";
import { E_PATHS } from "@/lib/paths";
import { backToEtb } from "../data/static";

const TEMP_DATA = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  {
    title: "Sed do eiusmod tempor incididunt ut",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  {
    title: "Ut enim ad minim veniam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
];

const StoriesToView = () => {
  const { langState } = useLangContext();

  const {
    [langState]: { heading },
  } = storiesToViewData;

  return (
    <Section>
      <Wrapper padding>
        <div className="w-full flex flex-col">
          <Link href={E_PATHS.EMOTIONAL_TREASURE_BOX} className="mb-5">
            👈{backToEtb[langState]}
          </Link>
          <Typography level={1} heading={1}>
            {heading}
          </Typography>
        </div>

        {TEMP_DATA.map((item) => (
          <div key={item.title} className="w-full flex flex-col">
            <Typography heading={3} level={2}>
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
            <Video />
          </div>
        ))}
      </Wrapper>
    </Section>
  );
};

export default StoriesToView;
