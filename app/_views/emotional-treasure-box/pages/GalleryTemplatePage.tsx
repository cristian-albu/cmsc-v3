"use client";

import { Line, Section, Typography, Wrapper } from "@/components";
import { youtube_parser } from "@/components/rich-text/utils";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { E_PATHS } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { backToEtb } from "../static";
import { T_GalleryTemplateView } from "../types";

const GalleryTemplatePage: FC<T_GalleryTemplateView> = ({ data }) => {
  const { langState } = useLangContext();

  const {
    [langState]: [localizedData],
  } = useLocalizedData([data]);

  const imagesMidIndex = Math.round(localizedData.mediaFilesCollection.items.length / 2);

  const imgsLeft = localizedData.mediaFilesCollection.items.slice(0, imagesMidIndex);
  const imgsRight = localizedData.mediaFilesCollection.items.slice(imagesMidIndex);

  return (
    <>
      <Section>
        <Wrapper padding>
          <div className="w-full flex flex-col justify-start">
            <Link href={E_PATHS.EMOTIONAL_TREASURE_BOX} className="mb-5">
              👈{backToEtb[langState]}
            </Link>
            <Typography heading={1} level={1}>
              {localizedData.galleryName}
            </Typography>
            <Typography>{localizedData.description}</Typography>
            <Line />
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper padding>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full flex flex-col gap-5">
              {imgsLeft.map((image) => {
                return (
                  <div key={image.title}>
                    <Image src={image.url} alt="" width={500} height={500} className="rounded-md shadow-lg" />
                  </div>
                );
              })}
            </div>
            <div className="w-full flex flex-col gap-5">
              {imgsRight.map((image) => {
                return (
                  <div key={image.title}>
                    <Image src={image.url} alt="" width={500} height={500} className="rounded-md shadow-lg" />
                  </div>
                );
              })}
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper padding>
          <div className="w-full flex flex-col gap-10">
            {localizedData.videoLinks.map((videoUrl, i) => (
              <div key={i.toString()} className="w-full">
                <a
                  style={{ display: "block", position: "relative", overflow: "hidden", width: "100%", paddingTop: "56.25%" }}
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      bottom: "0",
                      right: "0",
                      width: "100%",
                      height: "100%",
                    }}
                    src={`https://www.youtube-nocookie.com/embed/${youtube_parser(videoUrl)}`}
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </a>
              </div>
            ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default GalleryTemplatePage;
