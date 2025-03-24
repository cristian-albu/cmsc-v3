"use client";
import { Section, Typography, Video, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { E_PATHS } from "@/lib/paths";
import { E_COLLECTIONS } from "@/lib/utils";
import Link from "next/link";
import React, { FC, useMemo } from "react";
import { backToEtb } from "../static";
import { storiesToHearData } from "../static/stories";
import { T_AudiobookRequest } from "../types";
import { T_ETB_BaseAudiobooks } from "../queries/utils";

const StoriesToHearPage: FC<{ data: T_AudiobookRequest }> = ({ data }) => {
  const { langState } = useLangContext();

  const {
    [langState]: { heading, description },
  } = storiesToHearData;

  const audiobooks = useMemo(() => {
    return data[E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_AUDIOBOOKS].items
      .map((item) => {
        const videoSrc = item.link.split("=").slice(-1)[0];
        return { title: item.title, link: `https://www.youtube-nocookie.com/embed/${videoSrc}` };
      })
      .sort((a, b) => {
        // Not proud of this sorting but time pressure
        // Thank contentful for not having order by createdAt but only for publishedAt sys variable. 1 hour wasted here
        const aChapterNo = a.title.split(" ").slice(-1)[0];
        const bChapterNo = b.title.split(" ").slice(-1)[0];

        if (Number(aChapterNo) > Number(bChapterNo)) {
          return 1;
        } else {
          return -1;
        }
      });
  }, []);

  return (
    <Section>
      <Wrapper padding>
        <div className="w-full flex flex-col mb-10">
          <Link href={E_PATHS.EMOTIONAL_TREASURE_BOX} className="mb-5">
            👈{backToEtb[langState]}
          </Link>
          <Typography level={1} heading={1}>
            {heading}
          </Typography>
          <Typography>{description}</Typography>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {audiobooks.map((item: T_ETB_BaseAudiobooks) => (
            <div key={item.title} className="w-full flex flex-col">
              <Typography>{item.title}</Typography>
              <Video source={item.link} embed />
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default StoriesToHearPage;
