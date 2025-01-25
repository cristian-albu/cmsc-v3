"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import generateRichTextOptions from "./utils";
import { FC } from "react";

type Asset = {
  sys: {
    id: string;
  };
  url: string;
  description: string;
};

type AssetLink = {
  block: Asset[];
};

type Content = {
  json: any;
  links: {
    assets: AssetLink;
  };
};

const Markdown: FC<{ content: Content }> = ({ content }) => {
  return (
    <div className="w-full max-w-[900px] relative">
      {documentToReactComponents(content.json, generateRichTextOptions(content.links))}
    </div>
  );
};

export default Markdown;
