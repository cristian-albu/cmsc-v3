import { Card, Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { E_PATHS } from "@/lib/paths";
import { FC } from "react";
import { emotionalTreasureBoxData } from "../static";
import { T_EtbGallerySection } from "../types";

const GallerySection: FC<T_EtbGallerySection> = ({ gallery }) => {
  const { langState } = useLangContext();
  const data = useLocalizedData(gallery);
  const {
    [langState]: {
      gallery: { heading },
    },
  } = emotionalTreasureBoxData;
  return (
    <Section bg="gray" wave="bottom">
      <Wrapper padding>
        <Typography level={1} heading={2}>
          {heading}
        </Typography>
        <Line />

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5">
          {!Array.isArray(data[langState]) || data[langState].length === 0 ? (
            <div>{ERROR_MESSAGES[langState].empty}</div>
          ) : (
            data[langState].map((gallery) => (
              <Card
                key={gallery.slug}
                thumbnail={gallery.mediaFilesCollection.items[0].url}
                link
                variation={2}
                href={`${E_PATHS.EMOTIONAL_TREASURE_BOX}/${gallery.slug}`}
              >
                <Typography level={2} heading={3}>
                  {gallery.galleryName}
                </Typography>
              </Card>
            ))
          )}
        </div>
      </Wrapper>
    </Section>
  );
};

export default GallerySection;
