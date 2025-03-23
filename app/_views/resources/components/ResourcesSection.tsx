import { Button, Section, Tooltip, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { FC } from "react";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { E_PATHS } from "@/lib/paths";
import Link from "next/link";
import { T_ResourcesSection } from "../types";
import { resourcesData } from "../constants";

const ResourcesSection: FC<T_ResourcesSection> = ({ resources }) => {
  const { langState } = useLangContext();
  const data = useLocalizedData(resources?.resourcesCollection.items);

  const {
    meta: { buttonLink },
    [langState]: { heading, description, button },
  } = resourcesData;

  return (
    <Section bg="color">
      <Wrapper padding>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 items-start mb-10">
            <Typography level={1} heading={2}>
              {heading}
            </Typography>
            <Typography className="max-w-[80%]">{description}</Typography>
            <Button href={buttonLink}>{button}</Button>
          </div>

          <ul className="flex gap-3 flex-wrap">
            {!Array.isArray(data[langState]) || data[langState].length === 0 ? (
              <div>{ERROR_MESSAGES[langState].empty}</div>
            ) : (
              data[langState].map((resource) => {
                const name =
                  typeof resource.name === "string" && resource.name.length > 15
                    ? resource.name.slice(0, 15) + "..."
                    : resource.name;

                return (
                  <li key={resource.slug} className="border-[1px] border-solid border-white rounded-md p-2 ">
                    <Tooltip text={resource.name}>
                      <Link href={`${E_PATHS.RESOURCES}/${resource.slug}`} aria-label={resource.name}>
                        {name}
                      </Link>
                    </Tooltip>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </Wrapper>
    </Section>
  );
};

export default ResourcesSection;
