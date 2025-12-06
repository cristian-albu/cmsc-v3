"use client";

import { FC } from "react";
import { T_ServicesRequest } from "../types";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { Button, Card, Section, Typography, Wrapper } from "@/components";
import { ERROR_MESSAGES } from "@/lib/info";
import { servicesData } from "../static";
import { E_PATHS } from "@/lib/paths";

const ServicesPage: FC<{ data: T_ServicesRequest }> = ({ data }) => {
  const { langState } = useLangContext();

  const services = useLocalizedData(data.servicesCollection.items);

  const {
    [langState]: { heading, description, btnText },
  } = servicesData;

  return (
    <>
      <Section>
        <Wrapper padding>
          <Typography level={1} heading={1} className="text-center mt-[100px]">
            {heading}
          </Typography>
          <Typography className="text-center mb-[100px]">
            {description}
          </Typography>
        </Wrapper>
      </Section>
      <Section aria-label="decorative" role="div" bg="gray" wave="top">
        <></>
      </Section>
      <Section bg="gray" wave="bottom">
        <Wrapper>
          <div>
            {!services || !Array.isArray(services[langState]) ? (
              <div>{ERROR_MESSAGES[langState].empty}</div>
            ) : (
              <div>
                {services[langState]
                  .sort((a, b) => a.name[0].localeCompare(b.name[0]))
                  .map((service) => (
                    <Card
                      key={service.slug}
                      variation={4}
                      thumbnail={service.thumbnail.url}
                    >
                      <div className="w-full h-full flex flex-col gap-5 justify-center items-start">
                        <Typography level={3} heading={3}>
                          {service.name}
                        </Typography>
                        <Button href={`${E_PATHS.SERVICES}/${service.slug}`}>
                          {btnText}
                        </Button>
                      </div>
                    </Card>
                  ))}
              </div>
            )}
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default ServicesPage;
