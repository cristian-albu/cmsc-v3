import { E_LANG } from "@/lib/localization";

export const contactData = {
  meta: {
    green_phone: "0800.070.017",
    urgent_phone: "+40787.878.806",
    address:
      "https://www.google.com/maps/place/Strada+Constantin+Langa+103,+Miroslava+707305/@47.1414928,27.5001655,2954m/data=!3m1!1e3!4m6!3m5!1s0x40cafb1aaf20670b:0x41444cef81ee82e!8m2!3d47.142578!4d27.51561!16s%2Fg%2F11qpqhqmcn?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D",
  },
  [E_LANG.RO]: {
    form: {
      heading: "Trimite un mesaj",
      name: "Nume",
      email: "E-mail",
      message: "Mesaj",
      privacy: { description: "Am citit şi sunt de acord cu", policyText: "politica de confidențialitate" },
      button: "Trimite",
    },
    info: {
      heading: "Contact",
      green_phone: "Telefon verde",
      urgent_phone: "Telefon urgență",
      address: {
        heading: "Adresă",
        description: "Constantin Langa Street no. 103X, Miroslava village, Miroslava commune, Iasi county, Romania, 707305",
      },
    },
  },
  [E_LANG.EN]: {
    form: {
      heading: "Send a Message",
      name: "Name",
      email: "Email",
      message: "Message",
      privacy: { description: "I have read and agree to the", policyText: "privacy policy" },
      button: "Send",
    },
    info: {
      heading: "Contact",
      green_phone: "Toll-Free Phone",
      urgent_phone: "Emergency Phone",
      address: {
        heading: "Address",
        description: "Constantin Langa Street no. 103X, Miroslava village, Miroslava commune, Iasi county, Romania, 707305",
      },
    },
  },
};
