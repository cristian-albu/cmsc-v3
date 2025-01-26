"use client";

import React, { FC } from "react";
import { T_EmotionalTreasureData } from "../types";
import EtbNewsView from "./ETBNewsView";
import { CompoundView } from "@/components";
import EtbArticlesSection from "./ETBArticlesSection";
import EtbGallerySection from "./ETBGalleryView";
import EtbMainContentView from "./ETBMainView";

const EmotionalTreasureBoxView: FC<{ data: T_EmotionalTreasureData }> = ({ data }) => {
  return (
    <>
      <CompoundView
        main={<EtbMainContentView />}
        aside={<EtbNewsView news={data.news?.emotionalTreasureBoxNewsCollection.items} />}
      />
      <EtbArticlesSection articles={data.articles?.emotionalTreasureBoxArticlesCollection.items} />
      <EtbGallerySection gallery={data.gallery?.emotionalTreasureBoxMediaGalleryCollection.items} />
    </>
  );
};

export default EmotionalTreasureBoxView;
