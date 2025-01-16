import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

function youtube_parser(url: string) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

function generateRichTextOptions(links: any) {
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p style={{ margin: "1rem 0rem" }}>{children}</p>;
      },
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        return <h1 style={{ fontSize: "3rem", lineHeight: "3rem", marginBottom: "1rem" }}>{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return <h2 style={{ fontSize: "3rem", lineHeight: "3rem", marginBottom: "1rem" }}>{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (node: any, children: any) => {
        return <h3 style={{ fontSize: "1.5rem", lineHeight: "1.5rem", marginBottom: "1rem" }}>{children}</h3>;
      },
      [BLOCKS.HEADING_4]: (node: any, children: any) => {
        return <h4 style={{ fontSize: "1.5rem", lineHeight: "1.5rem", marginBottom: "1rem" }}>{children}</h4>;
      },
      [BLOCKS.UL_LIST]: (node: any, children: any) => {
        return <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1rem" }}>{children}</ul>;
      },
      [BLOCKS.OL_LIST]: (node: any, children: any) => {
        return <ol style={{ listStyleType: "decimal", paddingLeft: "1.25rem", marginBottom: "1rem" }}>{children}</ol>;
      },
      [INLINES.HYPERLINK]: (node: any, children: any) => {
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
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const assetId = node.data.target.sys.id;
        const asset = links.assets.block.find((asset: any) => asset.sys.id === assetId);

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
