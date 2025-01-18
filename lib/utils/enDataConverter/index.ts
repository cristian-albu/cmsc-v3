import { E_LANG } from "@/lib/localization";

type T_EnLocalizedT<T extends Record<string, any>> = T & { [key in `${string}${E_LANG.EN}`]: any };

export function enDataConverter<T extends Record<string, any>>(data: T_EnLocalizedT<T>): { [E_LANG.RO]: T; [E_LANG.EN]: T } {
  const enData = Object.entries(data).reduce((accum, [key, val]) => {
    if (key.endsWith("En")) {
      const baseKey = key.slice(0, -2);
      return { ...accum, [baseKey]: val };
    }
    return accum;
  }, {} as T);

  const normalData = Object.entries(data).reduce((accum, [key, val]) => {
    if (!key.endsWith("En")) {
      return { ...accum, [key]: val };
    }
    return accum;
  }, {} as T);

  return {
    [E_LANG.RO]: normalData,
    [E_LANG.EN]: { ...normalData, ...enData },
  };
}

export function enDataListConverter<T extends Record<string, any>>(data: T_EnLocalizedT<T>[]) {
  return data.map((item) => {
    return enDataConverter(item);
  });
}
