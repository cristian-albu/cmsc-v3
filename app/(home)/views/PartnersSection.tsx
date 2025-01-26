import { T_PartnersRequest } from "@/app/despre-noi/page";
import { Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { FC } from "react";
import { home_partnersData } from "../data/static";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import Link from "next/link";
import { ERROR_MESSAGES } from "@/lib/info";
import Image from "next/image";

type T_PartnersSection = {
  partners: T_PartnersRequest | null;
};

const PartnersSection: FC<T_PartnersSection> = ({ partners }) => {
  const { langState } = useLangContext();

  const { heading } = home_partnersData[langState];

  const data = useLocalizedData(partners?.partnersCollection.items);

  return (
    <Section>
      <Wrapper padding>
        <Typography level={1} heading={2}>
          {heading}
        </Typography>
        <Line />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {!Array.isArray(data[langState]) || data[langState].length === 0 ? (
            <div>{ERROR_MESSAGES[langState].empty}</div>
          ) : (
            data[langState].map((partner) => (
              <Link key={partner.link} href={partner.link} className="flex flex-col items-center mb-5 text-center">
                <Image
                  src={partner.logo.url}
                  alt={`${partner.logo.description}`}
                  width={125}
                  height={75}
                  className="h-[75px] width-auto object-contain mb-2"
                  placeholder="blur"
                  blurDataURL="/cmsc_logo_white.svg"
                />
                <Typography level={4}> {partner.name}</Typography>
              </Link>
            ))
          )}
        </div>
      </Wrapper>
    </Section>
  );
};

export default PartnersSection;
