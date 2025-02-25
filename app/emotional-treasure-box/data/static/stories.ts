import { E_LANG } from "@/lib/localization";

export const storiesToViewData = {
  [E_LANG.RO]: {
    heading: "Povești de văzut",
  },
  [E_LANG.EN]: {
    heading: "Stories to view",
  },
};

export const storiesToReadData = {
  [E_LANG.RO]: {
    heading: "Povești de citit",
    ebook: {
      image: "/etb/ebook_cover_ro.png",
      src: "https://online.fliphtml5.com/gsmuw/apzh/#p=1",
      text: "Vezi ebook",
      downloadIcon: false,
    },
    printBook: {
      image: "/etb/ebook_cover_ro.png",
      src: "/etb/EMOTIONAL TRESURE BOX_RO_FORMAT ELECTRONIC.pdf",
      text: "Descărcați pdf Emotional Treasure Box",
      downloadIcon: true,
    },
    screenplay: {
      image: "/etb/screenplay_thumbnail.png",
      src: "/etb/SCENARIUL LITERAR.pdf",
      text: "Descărcați pdf scenariu literar",
      downloadIcon: true,
    },
  },
  [E_LANG.EN]: {
    heading: "Stories to read",
    ebook: {
      image: "/etb/ebook_cover_en.png",
      src: "https://online.fliphtml5.com/gsmuw/apzh/#p=1",
      text: "View ebook",
      downloadIcon: false,
    },
    printBook: {
      image: "/etb/ebook_cover_en.png",
      src: "/etb/EMOTIONAL TRESURE BOX_EN_ELECTRONIC BOOK.pdf",
      text: "Download pdf Emotional Treasure Box",
      downloadIcon: true,
    },
    screenplay: {
      image: "/etb/screenplay_thumbnail_en.png",
      src: "/etb/LITERARY SCRIPT.pdf",
      text: "Download pdf for screenplay",
      downloadIcon: true,
    },
  },
};

export const storiesToHearData = {
  [E_LANG.RO]: {
    heading: "Povești de ascultat",
    description: `Această poveste face parte din inițiativa bilaterală Emotional 
    Treasure Box - What happened to the Heart, derulată de Fundația Centrul de Mediere 
    și Securitate Comunitară, finanțată prin Granturile SEE și Norvegiene - Fondul Național 
    Bilateral în cadrul Programului RO-CULTURA. Partener de proiect – Foreningen Hedda, Norvegia. `,
    titles: {
      title: "Titlul poveștii",
      author: "Autorul poveștii",
      editor: "Redactor",
      reading: "Lectură",
      linkText: "",
    },
  },
  [E_LANG.EN]: {
    heading: "Stories to hear",
    description: `This story is part of the bilateral inițiative Emotional 
    Treasure Box - What happened to the Heart, implemented by Community Safety and 
    Mediation Center Foundation and financed by the EEA and Norway Grants  throughthe National 
    Bilateral Fund within the RO-CULTURE Programme. Project partner – Foreningen Hedda, Norway.`,
    titles: {
      title: "Story title",
      author: "The author",
      editor: "Editor",
      reading: "Reading",
      linkText: "",
    },
  },
};
