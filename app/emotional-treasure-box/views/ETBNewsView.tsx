import { useLangContext } from "@/lib/contexts/LangContext";
import { T_ETB_LocalizedNews } from "../data/queries/utils";
import { FC } from "react";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { emotionalTreasureBoxData } from "../data/static";
import { Line, Typography } from "@/components";
import Link from "next/link";
import { formatLocalizedDate } from "@/lib/localization/formatLocalizedDate";
import { ERROR_MESSAGES } from "@/lib/info";

type T_EtbNewsView = {
  news: T_ETB_LocalizedNews[] | null | undefined;
};

const EtbNewsView: FC<T_EtbNewsView> = ({ news }) => {
  const { langState } = useLangContext();
  const data = useLocalizedData(news);
  const {
    [langState]: {
      news: { heading },
    },
  } = emotionalTreasureBoxData;

  return (
    <>
      <Typography heading={3} level={2}>
        {heading}
      </Typography>
      <ul>
        {!Array.isArray(data[langState]) || data[langState].length === 0 ? (
          <div>{ERROR_MESSAGES[langState].empty}</div>
        ) : (
          data[langState].map((news) => (
            <li key={news.title}>
              <Line />
              <Link href={news.link} target="blank" className="hover:underline">
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

export default EtbNewsView;
