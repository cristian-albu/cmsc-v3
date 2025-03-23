"use client";
import { Card, Typography } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { E_LANG } from "@/lib/localization";
import { formatLocalizedDate } from "@/lib/localization/formatLocalizedDate";
import { E_PATHS } from "@/lib/paths";
import { FC, useMemo } from "react";
import { T_BaseLocalizedEvents } from "../queries/utils";

const EventsList: FC<{ events: T_BaseLocalizedEvents[] | undefined }> = ({ events }) => {
  const { langState } = useLangContext();
  const eventsData = useLocalizedData(events);
  const data = useMemo(() => {
    return {
      [E_LANG.EN]: eventsData[E_LANG.EN].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
      [E_LANG.RO]: eventsData[E_LANG.RO].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    };
  }, [events]);

  if (data[langState].length === 0) {
    return <Typography>{ERROR_MESSAGES[langState].empty}</Typography>;
  }

  return data[langState].map((event) => (
    <Card key={event.slug} link href={`${E_PATHS.EVENTS}/${event.slug}`} thumbnail={event.thumbnail.url}>
      <Typography heading={3} level={3} className="mb-2">
        {event.name}
      </Typography>
      <Typography className="text-purple font-bold capitalize">{formatLocalizedDate(event.date, langState)}</Typography>
      <Typography>{event.description}</Typography>
    </Card>
  ));
};

export default EventsList;
