import { E_COLLECTIONS } from "@/lib/utils";
import {
  T_BaseLocalizedService,
  T_ExtendedLocalidedService,
} from "./queries/utils";

export type T_ServiceRequest = {
  [E_COLLECTIONS.SERVICES]: { items: T_ExtendedLocalidedService[] };
};

export type T_ServicesRequest = {
  [E_COLLECTIONS.SERVICES]: { items: T_BaseLocalizedService[] };
};

export type T_ServicePageData = {
  service: T_ServiceRequest | null;
  related: T_ServicesRequest | null;
};
