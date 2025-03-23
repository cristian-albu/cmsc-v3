import { defaultMessages, E_GdprNames, useGdprContext } from "@/lib/contexts/GdprContext";
import { useLangContext } from "@/lib/contexts/LangContext";
import { FC } from "react";

type T_Video = {
  source?: string;
  embed?: boolean;
};

const Placeholder = () => {
  return <div className="w-full aspect-[16/9] bg-gray-200 flex justify-center items-center mb-5">Placeholder for video</div>;
};

export const Video: FC<T_Video> = ({ source, embed = false }) => {
  const { langState } = useLangContext();
  const { gdprState } = useGdprContext();

  if (source) {
    if (embed) {
      return (
        <div className="relative pb-[56.25%] pt-[25px] h-0 ">
          {gdprState[E_GdprNames.preferences] ? (
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
          ) : (
            <p className="bg-gray-200 flex text-center justify-center items-center p-10 rounded-lg">
              ❗{defaultMessages[E_GdprNames.preferences][langState]}
            </p>
          )}
        </div>
      );
    }

    return <Placeholder />;
  }

  return <Placeholder />;
};
