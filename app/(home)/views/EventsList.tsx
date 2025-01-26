import { T_BaseLocalizedEvents } from "@/app/evenimente/[slug]/queries/utils";
import { Card, Typography } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { formatLocalizedDate } from "@/lib/localization/formatLocalizedDate";
import { E_PATHS } from "@/lib/paths";
import { FC } from "react";

const EventsList: FC<{ events: T_BaseLocalizedEvents[] | undefined }> = ({ events }) => {
  const { langState } = useLangContext();
  const data = useLocalizedData(events);

  if (!data[langState] || !Array.isArray(data[langState]) || data[langState].length === 0) {
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
