"use client";

import { Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import React, { FC } from "react";
import { emotionalTreasureBoxFooterData } from "../data/static";
import Link from "next/link";

const ETBFooterSection: FC = () => {
  const { langState } = useLangContext();

  const {
    [langState]: { disclaimer, info1, info2 },
  } = emotionalTreasureBoxFooterData;
  return (
    <Section wave="bottomDark">
      <Wrapper padding>
        <div className="flex flex-col ">
          <Typography heading={3} level={1}>
            {disclaimer}
          </Typography>
          <Line />
          <Typography className="mb-5">
            {info1.text}{" "}
            <Link href={info1.link1.href} target="blank" className="underline">
              {info1.link1.text}
            </Link>{" "}
            {info1.linksConnection}{" "}
            <Link href={info1.link2.href} target="blank" className="underline">
              {info1.link2.text}
            </Link>
          </Typography>

          <Typography>
            {info2.text}{" "}
            <Link href={info2.link1.href} target="blank" className="underline">
              {info2.link1.text}
            </Link>
          </Typography>
        </div>
      </Wrapper>
    </Section>
  );
};

export default ETBFooterSection;
