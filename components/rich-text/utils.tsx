import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import { ReactNode } from "react";
import { AssetLink } from ".";
import { Options } from "@contentful/rich-text-react-renderer";

export function youtube_parser(url: string) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[7].length == 11 ? match[7] : false;
}

function generateRichTextOptions({ links }: { links: { assets: AssetLink } }): Options {
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children: ReactNode) => {
        return <p style={{ margin: "1rem 0rem" }}>{children}</p>;
      },
      [BLOCKS.HEADING_1]: (_node, children: ReactNode) => {
        return <h1 style={{ fontSize: "3rem", lineHeight: "3rem", marginBottom: "1rem" }}>{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (_node, children: ReactNode) => {
        return <h2 style={{ fontSize: "3rem", lineHeight: "3rem", marginBottom: "1rem" }}>{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (_node, children: ReactNode) => {
        return <h3 style={{ fontSize: "1.5rem", lineHeight: "1.5rem", marginBottom: "1rem" }}>{children}</h3>;
      },
      [BLOCKS.HEADING_4]: (_node, children: ReactNode) => {
        return <h4 style={{ fontSize: "1.5rem", lineHeight: "1.5rem", marginBottom: "1rem" }}>{children}</h4>;
      },
      [BLOCKS.UL_LIST]: (_node, children: ReactNode) => {
        return <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1rem" }}>{children}</ul>;
      },
      [BLOCKS.OL_LIST]: (_node, children: ReactNode) => {
        return <ol style={{ listStyleType: "decimal", paddingLeft: "1.25rem", marginBottom: "1rem" }}>{children}</ol>;
      },
      [INLINES.HYPERLINK]: (node, children: ReactNode) => {
        return youtube_parser(node.data.uri) ? (
          <a style={{ display: "block", position: "relative", overflow: "hidden", width: "100%", paddingTop: "56.25%" }}>
            <iframe
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                width: "100%",
                height: "100%",
              }}
              src={`https://www.youtube-nocookie.com/embed/${youtube_parser(node.data.uri)}`}
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </a>
        ) : (
          <a
            href={node.data.uri}
            rel="noreferrer"
            target="_blank"
            style={{ marginBottom: "1rem", cursor: "pointer", color: "purple" }}
          >
            {children}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node.data.target.sys.id;
        const asset = links.assets.block.find((asset) => asset.sys.id === assetId);

        if (!asset) {
          return null; // Fallback for missing assets
        }

        return (
          <Image
            src={asset.url}
            width={asset.width || 600} // Provide default dimensions
            height={asset.height || 400}
            alt={asset.title || "Embedded Image"}
            style={{ marginBottom: "1rem", borderRadius: "0.3rem" }}
          />
        );
      },
    },
  };
}

export default generateRichTextOptions;
