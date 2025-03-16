"use client";

import { CompoundView } from "@/components";
import { FC } from "react";
import { T_EmotionalTreasureData } from "../types";
import ArticlesSection from "../components/ArticlesSection";
import GallerySection from "../components/GallerySection";
import MainContent from "../components/MainContent";
import NewsContent from "../components/NewsContent";

const EmotionalTreasureBoxPage: FC<{ data: T_EmotionalTreasureData }> = ({ data }) => {
  return (
    <>
      <CompoundView
        main={<MainContent />}
        aside={<NewsContent news={data.news?.emotionalTreasureBoxNewsCollection.items} />}
      />
      <ArticlesSection articles={data.articles?.emotionalTreasureBoxArticlesCollection.items} />
      <GallerySection gallery={data.gallery?.emotionalTreasureBoxMediaGalleryCollection.items} />
    </>
  );
};

export default EmotionalTreasureBoxPage;
