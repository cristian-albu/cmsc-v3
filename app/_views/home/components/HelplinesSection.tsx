import { Button, Section, Typography, Wrapper } from "@/components";
import { home_assistanceData } from "../static";
import { useLangContext } from "@/lib/contexts/LangContext";
import Image from "next/image";
import { E_LANG } from "@/lib/localization";
import { E_PATHS } from "@/lib/paths";
import { BiDonateHeart } from "react-icons/bi";

export const HelplinesSection = () => {
  const { langState } = useLangContext();

  const { heading, description, qr, columns } = home_assistanceData[langState];

  return (
    <Section>
      <Wrapper padding>
        <Typography heading={2} level={1} className="text-center">
          {heading}
        </Typography>
        <Typography>{description}</Typography>
        <div className="w-full flex flex-wrap justify-center items-center gap-5 mt-5 font-bold font-sans">
          <Image
            width={300}
            height={300}
            src={"/assistance/qr.jpeg"}
            alt="donations qr code"
          />
          <div className="flex flex-col items-start gap-5">
            <Button
              href={E_PATHS.DONATE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiDonateHeart />
              {langState === E_LANG.RO && "Donează"}
              {langState === E_LANG.EN && "Donate"}
            </Button>
            <Typography>{qr.label}</Typography>
          </div>
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
