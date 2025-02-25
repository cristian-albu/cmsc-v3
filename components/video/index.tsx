import { FC } from "react";

type T_Video = {
  source?: string;
  embed?: boolean;
};

const Placeholder = () => {
  return <div className="w-full aspect-[16/9] bg-gray-200 flex justify-center items-center mb-5">Placeholder for video</div>;
};

export const Video: FC<T_Video> = ({ source, embed = false }) => {
  if (source) {
    if (embed) {
      return (
        <div className="relative pb-[56.25%] pt-[25px] h-0">
          <iframe
            src={source}
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      );
    }

    return <Placeholder />;
  }

  return <Placeholder />;
};
