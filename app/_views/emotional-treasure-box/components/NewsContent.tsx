"use client";
import { Line, Typography } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { formatLocalizedDate } from "@/lib/localization/formatLocalizedDate";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { emotionalTreasureBoxData } from "../static";
import { T_EtbNewsView } from "../types";

const NewsContent: FC<T_EtbNewsView> = ({ news }) => {
  const { langState } = useLangContext();
  const data = useLocalizedData(news);
  const {
    [langState]: {
      news: { heading },
    },
  } = emotionalTreasureBoxData;

  const newsExists = Array.isArray(data[langState]) && data[langState].length !== 0;

  const newsItems = newsExists
    ? data[langState].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    : [];

  return (
    <>
      <Typography heading={3} level={2}>
        {heading}
      </Typography>
      <ul>
        {!newsExists ? (
          <div>{ERROR_MESSAGES[langState].empty}</div>
        ) : (
          newsItems.map((news) => (
            <li key={news.title}>
              <Line />

              <Link href={news.link} target="blank" className="hover:underline">
                {news.thumbnail?.url && (
                  <Image
                    src={news.thumbnail?.url || "/placeholder_image.jpg"}
                    width={300}
                    height={200}
                    alt=""
                    className=""
                  />
                )}
                <Typography heading={4} level={3}>
                  {news.title}
                </Typography>
              </Link>

              <Typography className="capitalize italic">{formatLocalizedDate(news.date, langState)}</Typography>
              <Typography className="text-sm">{news.content}</Typography>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default NewsContent;
