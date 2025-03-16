"use client";
import { E_COLLECTIONS } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";
import { T_EventsView } from "../types";

const EventsPage: FC<T_EventsView> = ({ eventsData }) => {
  console.log(eventsData);

  return (
    <div>
      <br />
      <br />
      <br />
      <div className="flex flex-col gap-5">
        {eventsData[E_COLLECTIONS.EVENTS].items.map((item) => (
          <Link key={item.slug} href={`/evenimente/${item.slug}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
