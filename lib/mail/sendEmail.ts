"use server";

import { Resend } from "resend";
import { E_LANG } from "../localization";

const key = process.env?.RESEND_API_KEY;
const fromEmail = "";
const EMAIL_ERRORS = {
  missing_key: {
    [E_LANG.EN]: "An unexpected error occurred. Please try again later",
    [E_LANG.RO]: "A apărut o eroare neașteptată. Vă rugăm încercați mai târziu",
  },
  service_error: {
    [E_LANG.EN]:
      "There was an error with the email service. Please try again later",
    [E_LANG.RO]:
      "A apărut o eroare cu serviciul de email. Vă rugăm încercați mai târziu",
  },
};

const resend = new Resend(key);

export default async function sendEmail(data: {
  to: string;
  subject: string;
  html: string;
}): Promise<null | { [E_LANG.EN]: string; [E_LANG.RO]: string }> {
  try {
    if (key === undefined) {
      console.error("Missing RESEND_API_KEY");
      return EMAIL_ERRORS.missing_key;
    }

    resend.emails.send({
      from: fromEmail,
      ...data,
    });

    // Make it feel a bit more natural
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return null;
  } catch (error) {
    console.error(error);
    return EMAIL_ERRORS.service_error;
  }
}
