import { Section, Typography, Wrapper } from "@/components";
import { home_assistanceData } from "../static";
import { useLangContext } from "@/lib/contexts/LangContext";
import Image from "next/image";

export const HelplinesSection = () => {
  const { langState } = useLangContext();

  const { heading, description, greenPhone, urgentPhone, columns } =
    home_assistanceData[langState];

  return (
    <Section>
      <Wrapper padding>
        <Typography heading={2} level={1} className="text-center">
          {heading}
        </Typography>
        <Typography>{description}</Typography>
        <div className="w-full flex flex-col gap-5 mt-5 font-bold font-sans">
          <Typography>{greenPhone}</Typography>
          <Typography>{urgentPhone}</Typography>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          {columns.map((col) => {
            return (
              <div key={col.heading} className="flex flex-col">
                <div className="w-full flex justify-center align-center">
                  <Image width={200} height={200} src={col.img} alt="" />
                </div>
                <Typography heading={4} level={3} className="font-bold mb-5">
                  {col.heading}
                </Typography>
                <Typography>{col.subHeading}</Typography>
                <ul className="list-disc list-inside flex flex-col gap-3">
                  {col.bullets.map((bul, i) => {
                    return <li key={i.toString()}>{bul}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </Section>
  );
};
