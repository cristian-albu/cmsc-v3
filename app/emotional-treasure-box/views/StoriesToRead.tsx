"use client";
import { Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import React from "react";
import { storiesToReadData } from "../data/static/stories";
import Link from "next/link";
import { E_PATHS } from "@/lib/paths";
import { backToEtb } from "../data/static";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const StoriesToView = () => {
  const { langState } = useLangContext();

  const {
    [langState]: { heading, ebook, printBook, screenplay },
  } = storiesToReadData;

  return (
    <>
      <Section>
        <Wrapper padding>
          <div className="w-full flex flex-col">
            <Link href={E_PATHS.EMOTIONAL_TREASURE_BOX} className="mb-5">
              👈{backToEtb[langState]}
            </Link>
            <Typography level={1} heading={1}>
              {heading}
            </Typography>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
            {[ebook, printBook, screenplay].map((item) => (
              <Link key={item.text} href={item.src} target="_blank" rel="noopener noreferrer" className="flex flex-col">
                <Image width={400} height={600} alt="" src={item.image} />
                <Typography heading={3} level={4} className="inline">
                  {item.text} {item.downloadIcon ? <MdOutlineFileDownload /> : <FaExternalLinkAlt />}
                </Typography>
              </Link>
            ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default StoriesToView;
