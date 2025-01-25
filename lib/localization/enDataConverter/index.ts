import { E_LANG } from "@/lib/localization";

type OmitEnKeys<T> = {
  [K in keyof T as K extends `${infer Base}${E_LANG.EN}` ? never : K]: T[K];
};

export type T_EnLocalizedT<T extends Record<string, any>> = T & { [key in `${string}${E_LANG.EN}`]: any };

export function enDataConverter<T extends Record<string, any>>(data: T_EnLocalizedT<T>) {
  const enData = Object.entries(data).reduce((accum, [key, val]) => {
    if (key.endsWith(E_LANG.EN)) {
      const baseKey = key.slice(0, -2);
      return { ...accum, [baseKey]: val };
    }
    return accum;
  }, {} as OmitEnKeys<T>);

  const normalData = Object.entries(data).reduce((accum, [key, val]) => {
    if (!key.endsWith(E_LANG.EN)) {
      return { ...accum, [key]: val };
    }
    return accum;
  }, {} as OmitEnKeys<T>);

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
