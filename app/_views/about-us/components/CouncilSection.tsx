import { Card, Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { home_councilData } from "@/app/_views/home/static";
import { FC } from "react";
import { T_CouncilSection } from "../types";

const CouncilSection: FC<T_CouncilSection> = ({ council }) => {
  const { langState } = useLangContext();

  const { [langState]: data } = useLocalizedData(council?.teamMembersCollection.items);
  const councilData = data?.filter((member) => member.consiliuDirector)?.sort((a, b) => a.order - b.order);

  const {
    [langState]: { heading },
  } = home_councilData;

  return (
    <Section bg="gray" wave="bottom">
      <Wrapper padding>
        <Typography level={1} heading={2}>
          {heading}
        </Typography>
        <Line />

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5">
          {!Array.isArray(councilData) || councilData.length === 0 ? (
            <div>{ERROR_MESSAGES[langState].empty}</div>
          ) : (
            councilData.map((member) => (
              <Card variation={3} key={member.name} thumbnail={member.thumbnail.url}>
                <Typography heading={3} level={3}>
                  {member.name}
                </Typography>
                <Typography className="capitalize">{member.pozitieConsiliu}</Typography>
              </Card>
            ))
          )}
        </div>
      </Wrapper>
    </Section>
  );
};

export default CouncilSection;
