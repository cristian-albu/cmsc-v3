import { useLangContext } from "@/lib/contexts/LangContext";

import { Button, Section, Typography, Wrapper } from "@/components";
import { FC } from "react";
import { home_heroData } from "../static";
import Image from "next/image";

const HeroSection: FC = () => {
  const { langState } = useLangContext();

  const {
    meta: { buttonLink },
    [langState]: { heading, description, button, specializedServices },
  } = home_heroData;

  return (
    <Section wave="bottom" bg="color" className="min-h-[90vh]">
      <Wrapper>
        <div className="w-full relative flex gap-5 justify-center items-center md:flex-row-reverse flex-wrap md:flex-nowrap">
          <Image
            src={"/cmsc_hero/cmsc_hero.jpeg"}
            width={1000}
            height={800}
            alt=""
            className="w-full md:w-1/2 shadow-2xl rounded-lg"
          />
          <div className="w-full md:w-1/2 flex flex-col items-start  gap-3">
            <Typography heading={1} level={1}>
              {heading}
            </Typography>
            <Typography>{specializedServices}</Typography>
            <Typography className="text-shadow-lg" level={3}>
              {description}
            </Typography>

            <Button href={buttonLink}>✉️ {button}</Button>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default HeroSection;
