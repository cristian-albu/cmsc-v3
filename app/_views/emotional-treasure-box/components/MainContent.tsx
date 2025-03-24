import { Button, Line, Typography, Video } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import Link from "next/link";
import { FC } from "react";
import { emotionalTrasureBoxProjectData, emotionalTreasureBoxData } from "../static";

const MainContent: FC = () => {
  const { langState } = useLangContext();

  const {
    [langState]: { heading, description, t1, p1, t2, p2, t3, p3, p4, headerLinks },
  } = emotionalTreasureBoxData;

  const {
    [langState]: { title, promotor, partners, value, valueOfUnrebursableFinance, duration, location, facebook },
  } = emotionalTrasureBoxProjectData;

  return (
    <>
      <Typography level={1} heading={1}>
        {heading}
      </Typography>
      <Typography className="mb-5">{p4}</Typography>

      <div className="text-sm flex flex-wrap gap-3 mb-5">
        {headerLinks.map((item) => (
          <Button key={item.text} aria-label={item.description} href={item.resource}>
            {item.icon}
            {item.text}
          </Button>
        ))}
      </div>

      <Line />
      <Typography>{description}</Typography>
      <Typography level={2} heading={2}>
        {t1}
      </Typography>
      <Typography>{p1}</Typography>

      <Video
        source="https://www.youtube.com/embed?v=XISwUJi50Tc&list=PLjfYJh0s_-qSGaXJQHUcMx1YnH7i0i-Js&ab_channel=WhatHappenedToTheHeart"
        embed={true}
      />

      <Typography level={2} heading={2}>
        {t2}
      </Typography>
      <Typography>{p2}</Typography>
      <Video
        source="https://www.youtube.com/embed?v=1fn_76mwAig&list=PLjfYJh0s_-qSC46sReqOOJI90dXu6OYAm&index=6&ab_channel=WhatHappenedToTheHeart"
        embed
      />
      <Typography level={2} heading={2}>
        {t3}
      </Typography>
      <Typography>{p3}</Typography>
      <Video
        source="https://www.youtube.com/embed?v=2XAQEcfWaHk&list=PLjfYJh0s_-qSC46sReqOOJI90dXu6OYAm&index=3&t=4s&ab_channel=WhatHappenedToTheHeart"
        embed
      />

      <div className="">
        <Typography level={2} heading={2}>
          {title}
        </Typography>
        <Typography>{promotor}</Typography>
        <Typography>{partners}</Typography>
        <Typography>{value}</Typography>
        <Typography>{valueOfUnrebursableFinance}</Typography>
        <Typography>{duration}</Typography>
        <Typography>{location}</Typography>
        <Link href={facebook.link}>{facebook.text}</Link>
      </div>
    </>
  );
};

export default MainContent;
