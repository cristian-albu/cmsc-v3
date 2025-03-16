"use client";
import { Button, Section, Typography, Wrapper } from "@/components";
import { useLangContext } from "@/lib/contexts/LangContext";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Checkbox, Textarea, TextInput } from "@/components/inputs";
import { E_LANG } from "@/lib/localization";
import sendEmail from "@/lib/mail/sendEmail";
import { E_PATHS } from "@/lib/paths";
import { validateAcceptedPrivacy, validateEmail, validateMessage, validateName } from "@/lib/validation";
import { contactData } from "@/app/_views/contact/static";
import Link from "next/link";

enum E_FORM_NAMES {
  name = "name",
  email = "email",
  message = "message",
  privacy_agreement = "privacyAgreement",
}

const ContactPage: FC = () => {
  const { langState } = useLangContext();

  const [formState, setFormState] = useState({
    [E_FORM_NAMES.name]: "",
    [E_FORM_NAMES.email]: "",
    [E_FORM_NAMES.message]: "",
    [E_FORM_NAMES.privacy_agreement]: false,
  });

  const [errorList, setErrorListState] = useState<string[]>([]);
  const [isLoading, setIsLoadingState] = useState(false);
  const [isSuccess, setIsSuccessState] = useState(false);

  const {
    meta,
    [langState]: { form, info },
  } = contactData;

  function handleFormChange(e: ChangeEvent<HTMLFormElement>) {
    const isCorrectElementType = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
    const isPartOfStructure = Object.values(E_FORM_NAMES).includes(e.target.name as E_FORM_NAMES);

    if (isCorrectElementType && isPartOfStructure) {
      setFormState((prev) => ({
        ...prev,
        [e.target.name]:
          e.target.type === "checkbox" &&
          e.target instanceof HTMLInputElement &&
          e.target.name === E_FORM_NAMES.privacy_agreement
            ? e.target.checked
            : e.target.value,
      }));
    }
  }

  function validateInputs() {
    const errors: string[] = [];
    const nameValidation = validateName(formState[E_FORM_NAMES.name]);
    if (nameValidation != null) errors.push(nameValidation[langState]);

    const emailValidation = validateEmail(formState[E_FORM_NAMES.email]);
    if (emailValidation != null) errors.push(emailValidation[langState]);

    const messageValidation = validateMessage(formState[E_FORM_NAMES.message]);
    if (messageValidation != null) errors.push(messageValidation[langState]);

    const privacyValidation = validateAcceptedPrivacy(formState[E_FORM_NAMES.privacy_agreement]);
    if (privacyValidation != null) errors.push(privacyValidation[langState]);

    setErrorListState(errors);

    return errors.length === 0;
  }

  async function handleContactForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isFormValid = validateInputs();

    if (isFormValid) {
      setIsLoadingState(true);
      const result = await sendEmail({
        to: formState[E_FORM_NAMES.email],
        subject: `Message from ${E_FORM_NAMES.name} on the cmsc.ro website`,
        html: `<!doctype html>
        <html>
          <div style="width: 100%; background-color: #f2f2f2; box-sizing: border-box; margin: 0px; padding: 50px; font-family: 'Trebuchet MS', sans-serif;">
            <div style="padding: 25px; border-radius: 10px; background-color: #fff; margin-left: auto; margin-right:auto">
              <h1 style="font-size: 25px">Message from the cmsc.ro website</h1>
              <p>Name: ${formState[E_FORM_NAMES.name]}</p>
              <p>Email: ${formState[E_FORM_NAMES.email]}</p>
              <p>Mesaj: ${formState[E_FORM_NAMES.message]}</p>
            </div>
          </div>
        </html>`,
      });

      if (result != null) {
        setIsLoadingState(false);
        setErrorListState([result[langState]]);
      } else {
        setIsLoadingState(false);
        setIsSuccessState(true);
      }
    }
  }

  return (
    <Section bg="color" wave="bottom">
      <Wrapper padding>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {!isSuccess ? (
            <form
              onChange={handleFormChange}
              onSubmit={handleContactForm}
              className="w-full bg-white rounded-md shadow-lg p-5 text-black flex flex-col items-start gap-5"
            >
              <Typography level={2} heading={2}>
                {form.heading}
              </Typography>
              <TextInput name={E_FORM_NAMES.name}>{form.name}*</TextInput>
              <TextInput name={E_FORM_NAMES.email}>{form.email}*</TextInput>
              <Textarea name={E_FORM_NAMES.message}>{form.message}*</Textarea>
              <Checkbox name={E_FORM_NAMES.privacy_agreement}>
                {form.privacy.description}
                <Link href={E_PATHS.PRIVACY} className="text-purple">
                  {form.privacy.policyText}
                </Link>
                *
              </Checkbox>
              <Button disabled={isLoading} type="submit">
                {isLoading ? <span className="animate-spin">⏳</span> : <span>📨</span>}
                {form.button}
              </Button>

              {errorList.length > 0 && (
                <div>
                  <Typography level={3}>❗{langState === E_LANG.EN ? "Errors:" : "Erori:"}</Typography>
                  {errorList.map((error, index) => (
                    <Typography key={index.toString()}>
                      {index + 1}
                      {`. `}
                      {error}
                    </Typography>
                  ))}
                </div>
              )}
            </form>
          ) : (
            <div className="w-full bg-white rounded-md shadow-lg p-5 text-black">
              ✅ {langState === E_LANG.EN ? "Your message was sent" : "Mesajul a fost trimis"}
            </div>
          )}
          <div className="flex flex-col gap-5">
            <Typography level={1} heading={1}>
              {info.heading}
            </Typography>
            <div>
              <Typography level={3} heading={3}>
                {info.green_phone}
              </Typography>
              <a href={`tel:${meta.green_phone}`}>{meta.green_phone}</a>
            </div>
            <div>
              <Typography level={3} heading={3}>
                {info.urgent_phone}
              </Typography>
              <a href={`tel:${meta.urgent_phone}`}>{meta.urgent_phone}</a>
            </div>

            <div>
              <Typography level={3} heading={3}>
                {info.address.heading}
              </Typography>
              <a href={meta.address}>{info.address.description}</a>
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default ContactPage;
