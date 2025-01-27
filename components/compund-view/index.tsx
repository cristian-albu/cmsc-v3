import { FC, ReactNode } from "react";
import Section, { T_SectionProps } from "../section";
import Wrapper from "../wrapper";

type T_CompundView = {
  main: ReactNode;
  aside: ReactNode;
  sectionProps?: T_SectionProps;
};

const CompoundView: FC<T_CompundView> = ({ main, aside, sectionProps }) => {
  return (
    <Section {...sectionProps}>
      <Wrapper padding>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
          <article className="w-full h-full col-span-1 md:col-span-2 flex flex-col">{main}</article>
          <aside className="w-full h-full flex flex-col">{aside}</aside>
        </div>
      </Wrapper>
    </Section>
  );
};

export default CompoundView;
