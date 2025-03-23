import { ClientError } from "graphql-request";
import { E_LANG } from "./localization";
import { T_Request, T_RequestError } from "./types";

const errors: Record<string, T_RequestError> = {
  unknown: {
    [E_LANG.EN]: "Unknown error with the request",
    [E_LANG.RO]: "Eroare necunoscută la cerere",
    status: 500,
  },
  badRequest: {
    [E_LANG.EN]: "Bad request (400): The request could not be understood or was missing required parameters.",
    [E_LANG.RO]: "Cerere greșită (400): Cererea nu a fost înțeleasă sau lipseau parametrii necesari.",
    status: 400,
  },
  unauthorized: {
    [E_LANG.EN]: "Unauthorized (401): You must be authenticated to access this resource.",
    [E_LANG.RO]: "Neautorizat (401): Trebuie să fiți autentificat pentru a accesa această resursă.",
    status: 401,
  },
  forbidden: {
    [E_LANG.EN]: "Forbidden (403): You do not have permission to access this resource.",
    [E_LANG.RO]: "Interzis (403): Nu aveți permisiunea de a accesa această resursă.",
    status: 403,
  },
  notFound: {
    [E_LANG.EN]: "Not found (404): The requested resource could not be found.",
    [E_LANG.RO]: "Negăsit (404): Resursa solicitată nu a fost găsită.",
    status: 404,
  },
  serverError: {
    [E_LANG.EN]: "Server error (500): An internal server error occurred. Please try again later.",
    [E_LANG.RO]: "Eroare server (500): A apărut o eroare internă a serverului. Vă rugăm să încercați din nou mai târziu.",
    status: 500,
  },
};

export default async function requestData<T>(reqFn: () => Promise<T>): Promise<T_Request<T>> {
  let data: T | null = null;

  try {
    data = await reqFn();

    return { data, error: null };
  } catch (error) {
    if (!(error instanceof ClientError)) {
      return { data: null, error: errors.unknown };
    }

    switch (error.response?.status || 500) {
      case 400:
        return { data: null, error: errors.badRequest };
      case 401:
        return { data: null, error: errors.unauthorized };
      case 403:
        return { data: null, error: errors.forbidden };
      case 404:
        return { data: null, error: errors.notFound };
      default:
        return { data: null, error: errors.serverError };
    }
  }
}
