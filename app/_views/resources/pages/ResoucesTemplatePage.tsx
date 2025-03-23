"use client";

import { Button, CompoundView, ErrorMessage, Line, Markdown, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { E_LANG } from "@/lib/localization";
import { E_PATHS } from "@/lib/paths";
import { T_Request } from "@/lib/types";
import { E_COLLECTIONS } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { T_FullResourceRequest } from "../types";

const backToResources = {
  [E_LANG.EN]: "Back to resources",
  [E_LANG.RO]: "Înapoi la resurse",
};

const ResourcesTemplatePage: FC<{ data: T_Request<T_FullResourceRequest> }> = ({ data }) => {
  const { langState } = useLangContext();
  const localizedData = useLocalizedData(data.data?.[E_COLLECTIONS.RESOURCES].items);

  const { name, year, linkName, link, image, file, content } = localizedData[langState][0];

  if (data.error) {
    return (
      <ErrorMessage>
        <Typography>{data.error.status}</Typography>
        <Typography>{data.error[langState]}</Typography>
      </ErrorMessage>
    );
  }

  return (
    <>
      <Section bg="gray" wave="bottom">
        <Wrapper className="mt-10">
          <div className="w-full mb-10 flex items-center flex-wrap">
            <div className="w-full md:w-1/2 flex flex-col">
              <Link href={E_PATHS.RESOURCES} className="mb-5">
                👈 {backToResources[langState]}
              </Link>

              <Typography>{year}</Typography>
              <Typography level={1} heading={1}>
                {name}
              </Typography>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <Image src={image.url} alt="" width={300} height={400} className="shadow-lg rounded-md" />
            </div>

            <Line />

            <div className="w-full flex flex-col justify-start items-start">
              {(link || file?.url) && (
                <Button href={link || file?.url} target="_blank" rel="noreferrer noopener">
                  🔗 {linkName}
                </Button>
              )}
            </div>
          </div>
        </Wrapper>
      </Section>
      {content && <CompoundView main={<Markdown content={content} />} aside={<></>} />}
    </>
  );
};

export default ResourcesTemplatePage;
