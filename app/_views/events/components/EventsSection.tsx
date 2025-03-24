"use client";
import { home_eventsData } from "@/app/_views/home/static";
import { Button, Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { E_PATHS } from "@/lib/paths";
import { E_COLLECTIONS } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { T_EventsSection } from "../types";
import EventsList from "./EventsList";

const EventsSection: FC<T_EventsSection> = ({ events, numberOfEvents }) => {
  const path = usePathname();
  const { langState } = useLangContext();

  const {
    meta: { buttonLink },
    [langState]: { button, heading },
  } = home_eventsData;

  const eventsData = events?.[E_COLLECTIONS.EVENTS].items || [];

  const isEventsPage = path === E_PATHS.EVENTS;

  return (
    <Section>
      <Wrapper padding>
        <Typography heading={2} level={1}>
          <FaRegCalendarAlt />
          {heading}
        </Typography>
        <Line />
        <div className={`w-full grid grid-cols-1 ${isEventsPage ? "md:grid-cols-1" : "md:grid-cols-2"} gap-3`}>
          <EventsList
            events={
              numberOfEvents && numberOfEvents < eventsData.length ? eventsData.slice(0, numberOfEvents || 2) : eventsData
            }
          />
        </div>
        {!isEventsPage && <Button href={buttonLink}>{button}</Button>}
      </Wrapper>
    </Section>
  );
};

export default EventsSection;
