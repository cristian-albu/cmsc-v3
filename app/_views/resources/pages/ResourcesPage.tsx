"use client";

import React, { FC, useMemo } from "react";
import { T_ResourcesRequest } from "../types";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { E_COLLECTIONS } from "@/lib/utils";
import { Card, ErrorMessage, Loading, Section, Typography, Wrapper } from "@/components";
import { T_Request } from "@/lib/types";
import { resourcesData } from "../constants";
import { E_PATHS } from "@/lib/paths";
import { E_LANG } from "@/lib/localization";

const ResourcesPage: FC<{ resources: T_Request<T_ResourcesRequest> }> = ({ resources }) => {
  const { langState } = useLangContext();
  const localizedData = useLocalizedData(resources.data?.[E_COLLECTIONS.RESOURCES].items);
  const { heading, description } = resourcesData[langState];

  const data = useMemo(() => {
    return {
      [E_LANG.EN]: localizedData[E_LANG.EN].sort((a, b) => b.year - a.year),
      [E_LANG.RO]: localizedData[E_LANG.RO].sort((a, b) => b.year - a.year),
    };
  }, [resources]);

  if (resources.error) {
    return (
      <ErrorMessage>
        <Typography>{resources.error.status}</Typography>
        <Typography>{resources.error[langState]}</Typography>
      </ErrorMessage>
    );
  }

  return (
    <>
      <Section>
        <Wrapper padding>
          <div className="flex flex-col w-full mb-10">
            <Typography heading={1} level={1}>
              {heading}
            </Typography>
            <Typography>{description}</Typography>
          </div>
        </Wrapper>
      </Section>
      <Section bg="gray" wave="top" aria-label="decorative section" />
      <Section bg="gray">
        <Wrapper>
          <Loading>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {data[langState].map((resource) => (
                <Card
                  key={resource.slug}
                  variation={1}
                  link
                  href={`${E_PATHS.RESOURCES}/${resource.slug}`}
                  thumbnail={resource.image.url}
                >
                  <Typography level={3} heading={3}>
                    {resource.name}
                  </Typography>
                  <Typography>{resource.year}</Typography>
                </Card>
              ))}
            </div>
          </Loading>
        </Wrapper>
      </Section>
    </>
  );
};

export default ResourcesPage;
