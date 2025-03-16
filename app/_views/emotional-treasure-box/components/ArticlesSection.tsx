import { Card, Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { E_PATHS } from "@/lib/paths";
import { FC } from "react";
import { emotionalTreasureBoxData } from "../static";
import { T_EtbArticlesSection } from "../types";

const ArticlesSection: FC<T_EtbArticlesSection> = ({ articles }) => {
  const { langState } = useLangContext();
  const data = useLocalizedData(articles);
  const {
    [langState]: {
      articles: { heading },
    },
  } = emotionalTreasureBoxData;

  return (
    <Section>
      <Wrapper padding>
        <Typography level={1} heading={2}>
          {heading}
        </Typography>
        <Line />

        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          {!Array.isArray(data[langState]) || data[langState].length === 0 ? (
            <div>{ERROR_MESSAGES[langState].empty}</div>
          ) : (
            data[langState].map((article) => (
              <Card
                key={article.slug}
                thumbnail={article.thumbnail.url}
                link
                href={`${E_PATHS.EMOTIONAL_TREASURE_BOX}/${article.slug}`}
              >
                <Typography level={2} heading={3}>
                  {article.title}
                </Typography>
                <Typography>{article.description}</Typography>
              </Card>
            ))
          )}
        </div>
      </Wrapper>
    </Section>
  );
};

export default ArticlesSection;
