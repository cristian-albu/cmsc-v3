import { E_LANG } from "./lib/localization";

declare global {
  type T_StaticData = {
    meta?: Record<string, any>;
    [E_LANG.RO]: Record<string, any>;
    [E_LANG.EN]: Record<string, any>;
  };
}
