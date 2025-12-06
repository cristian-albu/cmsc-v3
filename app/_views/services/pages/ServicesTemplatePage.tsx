"use client";

import {
  CompoundView,
  Markdown,
  Section,
  Typography,
  Wrapper,
} from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { FC } from "react";
import { servicesData } from "../static";
import { E_PATHS } from "@/lib/paths";
import Link from "next/link";
import { T_ServicePageData } from "../types";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import Image from "next/image";

const ServicesTemplatePage: FC<T_ServicePageData> = ({ service, related }) => {
  const { langState } = useLangContext();

  const serviceData = useLocalizedData(service?.servicesCollection.items);
  const relatedData = useLocalizedData(related?.servicesCollection.items);

  const currService = serviceData[langState][0];
  const relatedServices = relatedData[langState];

  const { backToServices } = servicesData[langState];

  return (
    <>
      <Section bg="gray">
        <Wrapper className="mt-10">
          <div className="w-full mb-10">
            <Link href={E_PATHS.SERVICES}>👈 {backToServices}</Link>
          </div>
        </Wrapper>
      </Section>
      <Section bg="gray">
        <Wrapper padding>
          <div className="flex flex-col gap-5 justify-center items-center">
            {currService.thumbnail && (
              <Image
                width={200}
                height={200}
                src={currService.thumbnail.url}
                alt={currService.thumbnail.description}
              />
            )}
            {currService.name && (
              <Typography level={1} heading={1}>
                {currService.name}
              </Typography>
            )}
          </div>
        </Wrapper>
      </Section>
      <Section bg="gray" wave="bottom" aria-label="decorative" role="div">
        <></>
      </Section>
      <Section>
        <CompoundView
          main={
            currService.content ? (
              <Markdown content={currService.content} />
            ) : (
              <></>
            )
          }
          aside={
            Array.isArray(relatedServices) && relatedServices.length ? (
              <div></div>
            ) : (
              <></>
            )
          }
        />
      </Section>
    </>
  );
};

export default ServicesTemplatePage;
