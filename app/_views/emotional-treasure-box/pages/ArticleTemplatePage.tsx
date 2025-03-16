"use client";

import React, { FC } from "react";

import { Markdown, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { E_PATHS } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";
import { backToEtb } from "../static";
import { T_ArticleTemplateView } from "../types";

const ArticleTemplatePage: FC<T_ArticleTemplateView> = ({ data }) => {
  const { langState } = useLangContext();

  const {
    [langState]: [localizedData],
  } = useLocalizedData([data]);

  return (
    <>
      <Section>
        <Wrapper padding>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full flex flex-col justify-center items-start">
              <Link href={E_PATHS.EMOTIONAL_TREASURE_BOX} className="mb-5">
                👈{backToEtb[langState]}
              </Link>
              <Typography heading={1} level={1}>
                {localizedData.title}
              </Typography>
              <Typography>{localizedData.description}</Typography>
            </div>
            <div>
              <Image src={localizedData.thumbnail.url} alt="" width={400} height={400} className="rounded-md shadow-lg" />
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section bg="gray" wave="top">
        <></>
      </Section>
      <Section bg="gray" wave="bottom">
        <Wrapper padding>
          <Markdown content={localizedData.content} />
        </Wrapper>
      </Section>
    </>
  );
};

export default ArticleTemplatePage;
