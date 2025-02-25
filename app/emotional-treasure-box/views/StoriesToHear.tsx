"use client";
import { Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import React, { FC } from "react";
import { storiesToHearData } from "../data/static/stories";
import Link from "next/link";
import { E_PATHS } from "@/lib/paths";
import { backToEtb } from "../data/static";
import { T_AudiobookRequest } from "../types";
import { E_COLLECTIONS } from "@/lib/utils";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const StoriesToView: FC<{ data: T_AudiobookRequest }> = ({ data }) => {
  const { langState } = useLangContext();

  const {
    [langState]: { heading, description, titles },
  } = storiesToHearData;

  const audiobooks = useLocalizedData(data[E_COLLECTIONS.EMOTIONAL_TREASURE_BOX_AUDIOBOOKS].items);

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
          {audiobooks[langState].map((item) => (
            <Link
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative bg-white rounded-md shadow-xl overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <Image width={400} height={400} alt="" src={item.thumbnail.url} />
              <div className="w-full p-5">
                <Typography heading={3} level={3}>
                  {titles.title}: {item.title}
                </Typography>
                <Typography>
                  {titles.author}: {item.author}
                </Typography>
                <Typography>
                  {titles.editor}: {item.editor}
                </Typography>
                <Typography>
                  {titles.reading}: {item.reading}
                </Typography>
                <div className="absolute bottom-0 right-0 p-5">
                  <FaExternalLinkAlt />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default StoriesToView;
