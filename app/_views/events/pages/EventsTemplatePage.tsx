"use client";

import { Card, CompoundView, ErrorMessage, Line, Markdown, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { E_LANG } from "@/lib/localization";
import { E_PATHS } from "@/lib/paths";
import { T_Request } from "@/lib/types";
import { E_COLLECTIONS } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { T_EventRequest, T_EventsRequest } from "../types";
import { formatLocalizedDate } from "@/lib/localization/formatLocalizedDate";

const backToEvents = {
  [E_LANG.EN]: "Back to events",
  [E_LANG.RO]: "Înapoi la evenimente",
};

const relatedEventsInfo = {
  [E_LANG.EN]: "Other events",
  [E_LANG.RO]: "Alte evenimente",
};

const EventsTemplatePage: FC<{ eventsData: T_Request<[T_EventRequest, T_EventsRequest]> }> = ({ eventsData }) => {
  const { langState } = useLangContext();

  const currentEvent = useLocalizedData(eventsData.data?.[0][E_COLLECTIONS.EVENTS].items);
  const relatedEvents = useLocalizedData(eventsData.data?.[1][E_COLLECTIONS.EVENTS].items);

  const { name, date, slug, description, thumbnail, content } = currentEvent[langState][0];

  if (eventsData.error) {
    return (
      <ErrorMessage>
        <Typography>{eventsData.error.status}</Typography>
        <Typography>{eventsData.error[langState]}</Typography>
      </ErrorMessage>
    );
  }

  return (
    <>
      <Section bg="gray" wave="bottom">
        <Wrapper className="mt-10">
          <div className="w-full mb-10 flex items-center flex-wrap">
            <div className="w-full md:w-1/2 flex flex-col">
              <Link href={E_PATHS.EVENTS} className="mb-5">
                👈 {backToEvents[langState]}
              </Link>

              <Typography heading={1} level={1}>
                {name}
              </Typography>

              <Typography className="capitalize">{formatLocalizedDate(date, langState)}</Typography>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <Image src={thumbnail.url} alt="" width={300} height={400} className="shadow-lg rounded-md" />
            </div>

            <Line />

            <Typography>{description}</Typography>
          </div>
        </Wrapper>
      </Section>

      {content && (
        <CompoundView
          main={<Markdown content={content} />}
          aside={
            <div className="w-full flex flex-col gap-5">
              <Typography level={3}>{relatedEventsInfo[langState]}</Typography>
              {relatedEvents[langState].map((event) => (
                <Card key={event.slug} link href={`${E_PATHS.EVENTS}/${slug}`} variation={2} thumbnail={thumbnail.url}>
                  <>
                    <Typography>{event.name}</Typography>
                  </>
                </Card>
              ))}
            </div>
          }
        />
      )}
    </>
  );
};

export default EventsTemplatePage;
