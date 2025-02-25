import { Typography, Line, Button, Tooltip, Video } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { FC } from "react";
import { emotionalTrasureBoxProjectData, emotionalTreasureBoxData } from "../data/static";
import Link from "next/link";

const EtbMainContentView: FC = () => {
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
          <Tooltip key={item.text} text={item.description}>
            <Button aria-label={item.description} href={item.resource}>
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

      <Video
        source="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FWhatHappenedToTheHeart%2Fvideos%2F1758381074911301%2F&show_text=false&width=560&t=0"
        embed={true}
      />

      <Typography level={2} heading={2}>
        {t2}
      </Typography>
      <Typography>{p2}</Typography>
      <Video />
      <Typography level={2} heading={2}>
        {t3}
      </Typography>
      <Typography>{p3}</Typography>
      <Video />

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

export default EtbMainContentView;
