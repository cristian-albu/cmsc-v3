import { Card, Line, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import useLocalizedData from "@/lib/hooks/useLocalizedData";
import { ERROR_MESSAGES } from "@/lib/info";
import { home_teamData } from "@/app/_views/home/static";
import { FC } from "react";
import { T_TeamSection } from "../types";

const TeamSection: FC<T_TeamSection> = ({ team }) => {
  const { langState } = useLangContext();

  const { [langState]: data } = useLocalizedData(team?.teamMembersCollection.items);
  const teamData = data?.filter((member) => member.echipa)?.sort((a, b) => a.order - b.order);

  const {
    [langState]: { heading },
  } = home_teamData;

  return (
    <Section bg="gray">
      <Wrapper padding>
        <Typography level={1} heading={2}>
          {heading}
        </Typography>
        <Line />

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {!Array.isArray(teamData) || teamData.length === 0 ? (
            <div>{ERROR_MESSAGES[langState].empty}</div>
          ) : (
            teamData.map((member) => (
              <Card variation={3} key={member.name} thumbnail={member.thumbnail.url}>
                <Typography heading={3} level={3}>
                  {member.name}
                </Typography>
                <Typography className="capitalize">{member.position}</Typography>
              </Card>
            ))
          )}
        </div>
      </Wrapper>
    </Section>
  );
};

export default TeamSection;
