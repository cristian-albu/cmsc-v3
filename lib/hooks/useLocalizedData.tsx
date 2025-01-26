import { useMemo } from "react";
import { E_LANG } from "../localization";
import { enDataListConverter, T_EnLocalizedT } from "../localization/enDataConverter";

export default function useLocalizedData<T extends Record<string, unknown>>(data: T_EnLocalizedT<T>[] | null | undefined) {
  const processed = useMemo(() => {
    if (!data || data.length === 0) {
      return { [E_LANG.EN]: [] as T[], [E_LANG.RO]: [] as T[] };
    }

    const info = enDataListConverter(data);

    return {
      [E_LANG.EN]: info.map((val) => val[E_LANG.EN]),
      [E_LANG.RO]: info.map((val) => val[E_LANG.RO]),
    };
  }, [data]);

  return processed;
}
