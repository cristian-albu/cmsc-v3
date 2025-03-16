"use client";

import Markdown from "@/components/rich-text";
import React, { FC } from "react";
import { T_EventsTemplateView } from "../types";

const EventsTemplatePage: FC<T_EventsTemplateView> = ({ currEvent }) => {
  return (
    <div>
      <Markdown content={currEvent.content} />
    </div>
  );
};

export default EventsTemplatePage;
