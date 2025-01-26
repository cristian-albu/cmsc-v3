"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import generateRichTextOptions from "./utils";
import { Document } from "@contentful/rich-text-types";
import { FC } from "react";

export type Asset = {
  sys: {
    id: string;
  };
  url: string;
  description: string;
  width?: number;
  height?: number;
  title?: string;
};

export type AssetLink = {
  block: Asset[];
};

export type Content = {
  json: Document;
  links: {
    assets: AssetLink;
  };
};

const Markdown: FC<{ content: Content }> = ({ content }) => {
  return (
    <div className="w-full max-w-[900px] relative">
      {documentToReactComponents(content.json, generateRichTextOptions({ links: content.links }))}
    </div>
  );
};

export default Markdown;
