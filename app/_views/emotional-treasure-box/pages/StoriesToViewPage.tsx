"use client";
import { Section, Typography, Video, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import React, { FC } from "react";
import { storiesToViewData } from "../static/stories";
import Link from "next/link";
import { E_PATHS } from "@/lib/paths";
import { backToEtb } from "../static";

const toViewData = [
  "https://www.youtube-nocookie.com/embed/V3V3YZBc3W0",
  "https://www.youtube-nocookie.com/embed/XISwUJi50Tc",
  "https://www.youtube-nocookie.com/embed/trA9DP4ohr0",
  "https://www.youtube-nocookie.com/embed/agNAuS_Tz2g",
  "https://www.youtube-nocookie.com/embed/htZb8OcYMUQ",
  "https://www.youtube-nocookie.com/embed/-dSFh_tFYrY",
  "https://www.youtube-nocookie.com/embed/gW_f5uIBEW4",
  "https://www.youtube-nocookie.com/embed/MJHKrcQ-3fM",
  "https://www.youtube-nocookie.com/embed/_omOZxKVD6o",
  "https://www.youtube-nocookie.com/embed/gj4WGWRYbZE",
  "https://www.youtube-nocookie.com/embed/QdVARcVvP8c",
];

const StoriesToViewPage: FC = () => {
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

        <div className="w-full flex flex-col gap-10">
          {toViewData.map((item) => (
            <Video key={item} source={item} embed />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default StoriesToViewPage;
