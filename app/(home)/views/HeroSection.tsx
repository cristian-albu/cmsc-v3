import { useLangContext } from "@/lib/contexts/LangContext";
import Image from "next/image";
import { home_heroData } from "../data/static";
import { Button, Section, Typography, Wrapper } from "@/components";

const HeroSection = () => {
  const { langState } = useLangContext();

  const {
    meta: { buttonLink, images },
    [langState]: { heading, description, button },
  } = home_heroData;

  return (
    <Section wave="bottom" bg="color" className="min-h-[90vh]">
      <Wrapper>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center items-center">
          <div className="flex flex-col items-start order-2 md:order-1 gap-3">
            <Typography heading={1} level={1}>
              {heading}
            </Typography>
            <Typography>{description}</Typography>
            <Button href={buttonLink}>{button}</Button>
          </div>
          <div className="w-full grid grid-cols-2 order-1 md:order-2 gap-5 mb-[4rem]">
            {images.map((img, i) => (
              <div
                className={`w-full aspect-square h-auto object-cover overflow-hidden rounded-lg drop-shadow-xl ${
                  i % 2 == 0 ? "mt-[2rem] mb-[-1.5rem]" : ""
                }`}
                key={i}
              >
                <Image
                  src={img}
                  width={300}
                  height={300}
                  alt="decorative"
                  className="min-w-[100%] aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default HeroSection;
