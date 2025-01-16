"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import generateRichTextOptions from "./utils";

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

const Markdown = ({ content }: { content: Content }) => {
  return (
    <div className="w-full max-w-[900px] relative">
      {documentToReactComponents(content.json, generateRichTextOptions(content.links))}
    </div>
  );
};

export default Markdown;
