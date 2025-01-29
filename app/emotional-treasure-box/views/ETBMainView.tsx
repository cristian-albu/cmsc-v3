import { Typography, Line, Button, Tooltip } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { FC } from "react";
import { emotionalTreasureBoxData } from "../data/static";

const EtbMainContentView: FC = () => {
  const { langState } = useLangContext();

  const {
    [langState]: { heading, description, t1, p1, t2, p2, t3, p3, p4, headerLinks },
  } = emotionalTreasureBoxData;

  return (
    <>
      <Typography level={1} heading={1}>
        {heading}
      </Typography>

      <div className="text-sm flex flex-wrap gap-3">
        {headerLinks.map((item) => (
          <Tooltip key={item.text} text={item.description}>
            <Button aria-label={item.description}>
              {item.icon}
              {item.text}
            </Button>
          </Tooltip>
        ))}
      </div>
      <Line />
      <Typography>{description}</Typography>
      <Typography level={2} heading={2}>
        {t1}
      </Typography>
      <Typography>{p1}</Typography>
      <PlaceholderVideo />
      <Typography level={2} heading={2}>
        {t2}
      </Typography>
      <Typography>{p2}</Typography>
      <PlaceholderVideo />
      <Typography level={2} heading={2}>
        {t3}
      </Typography>
      <Typography>{p3}</Typography>
      <PlaceholderVideo />
      <Typography>{p4}</Typography>
    </>
  );
};

export default EtbMainContentView;

const PlaceholderVideo: FC = () => {
  return <div className="w-full aspect-[16/9] bg-gray-200 flex justify-center items-center mb-5">Placeholder for video</div>;
};
