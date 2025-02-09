import { E_LANG } from "../localization";

export enum E_VALIDATION_ERRORS {
  too_short = "too_short",
  too_long = "too_long",
  wrong_email = "wrong_email",
  invalid_privacy = "invalid_privacy",
}
export type T_ValidationError = { [E_LANG.EN]: string; [E_LANG.RO]: string };
export type T_ValidationResult = null | T_ValidationError;

/**
Explanation:
- ^[\w.-]+  Starts with one or more word characters (a-z, A-Z, 0-9), dots (.), or hyphens (-).
- @ Must contain an @ symbol.
- [a-zA-Z\d.-]+  Domain name with letters, digits, dots, or hyphens.
- \.[a-zA-Z]{2,}$  A dot (.) followed by at least two letters for the domain suffix (e.g., .com, .org, .io).
 */
const EMAIL_REGEX = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const ERRORS_MESSAGES: Record<E_VALIDATION_ERRORS, T_ValidationError> = {
  [E_VALIDATION_ERRORS.too_short]: {
    [E_LANG.EN]: "The text is too short",
    [E_LANG.RO]: "Textul este prea scurt",
  },
  [E_VALIDATION_ERRORS.too_long]: {
    [E_LANG.EN]: "The text is too long",
    [E_LANG.RO]: "Textul este prea lung",
  },
  [E_VALIDATION_ERRORS.wrong_email]: {
    [E_LANG.EN]: "This email is invalid",
    [E_LANG.RO]: "Acest email nu este valid",
  },
  [E_VALIDATION_ERRORS.invalid_privacy]: {
    [E_LANG.EN]: "Your must accept the privacy policy in order to submit the form",
    [E_LANG.RO]: "Trebuie să acceptați politica de confidențialitate pentru a trimite formularul",
  },
};

export function validateEmail(val: string): T_ValidationResult {
  if (!EMAIL_REGEX.test(val)) return ERRORS_MESSAGES[E_VALIDATION_ERRORS.wrong_email];

  return null;
}

export function validateName(val: string): T_ValidationResult {
  if (val.length < 2) return ERRORS_MESSAGES[E_VALIDATION_ERRORS.too_short];
  if (val.length > 31) return ERRORS_MESSAGES[E_VALIDATION_ERRORS.too_long];

  return null;
}

export function validateMessage(val: string): T_ValidationResult {
  if (val.length < 10) return ERRORS_MESSAGES[E_VALIDATION_ERRORS.too_short];
  if (val.length > 255) return ERRORS_MESSAGES[E_VALIDATION_ERRORS.too_long];

  return null;
}

export function validateAcceptedPrivacy(val: boolean): T_ValidationResult {
  if (!val) return ERRORS_MESSAGES[E_VALIDATION_ERRORS.invalid_privacy];

  return null;
}
