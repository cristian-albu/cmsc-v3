"use client";
import React, { FC } from "react";
import { T_EventsRequest } from "../types";
import { T_Request } from "@/lib/types";
import EventsSection from "../components/EventsSection";

const EventsPage: FC<{ eventsData: T_Request<T_EventsRequest> }> = ({ eventsData }) => {
  return <EventsSection events={eventsData.data} />;
};

export default EventsPage;
