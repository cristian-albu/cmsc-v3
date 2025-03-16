import { Button, Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { FC } from "react";
import EventsList from "./EventsList";
import { home_eventsData } from "@/app/_views/home/static";
import { T_EventsSection } from "../types";

const EventsSection: FC<T_EventsSection> = ({ events }) => {
  const { langState } = useLangContext();

  const {
    meta: { buttonLink },
    [langState]: { button, heading },
  } = home_eventsData;

  return (
    <Section>
      <Wrapper padding>
        <Typography heading={2} level={1}>
          {heading}
        </Typography>
        <Line />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          <EventsList events={events?.eventsCollection.items.slice(0, 2)} />
        </div>
        <Button href={buttonLink}>{button}</Button>
      </Wrapper>
    </Section>
  );
};

export default EventsSection;
