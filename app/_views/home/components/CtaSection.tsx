import { Button, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import { FC } from "react";
import { home_ctaData } from "../static";

const CtaSection: FC = () => {
  const { langState } = useLangContext();

  const {
    meta: { buttonLink },
    [langState]: { heading, description, button },
  } = home_ctaData;

  return (
    <Section bg="color" wave="bottomDark">
      <Wrapper padding className="text-center gap-3">
        <Typography level={1} heading={2}>
          {heading}
        </Typography>
        <Typography>{description}</Typography>
        <Button href={buttonLink}>{button}</Button>
      </Wrapper>
    </Section>
  );
};

export default CtaSection;
