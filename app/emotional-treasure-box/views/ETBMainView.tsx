import { Typography, Line } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { FC } from "react";
import { emotionalTreasureBoxData } from "../data/static";

const EtbMainContentView: FC = () => {
  const { langState } = useLangContext();

  const {
    [langState]: { heading, description, t1, p1, t2, p2, t3, p3, p4 },
  } = emotionalTreasureBoxData;

  return (
    <>
      <Typography level={1} heading={1}>
        {heading}
      </Typography>
      <Line />
      <Typography>{description}</Typography>
      <Typography level={2} heading={2}>
        {t1}
      </Typography>
      <Typography>{p1}</Typography>
      <Typography level={2} heading={2}>
        {t2}
      </Typography>
      <Typography>{p2}</Typography>
      <Typography level={2} heading={2}>
        {t3}
      </Typography>
      <Typography>{p3}</Typography>
      <Typography>{p4}</Typography>
    </>
  );
};

export default EtbMainContentView;
