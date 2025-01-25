export const formatLocalizedDate = (date: string, lang: string) =>
  new Date(date).toLocaleDateString(`${lang.toLowerCase()}-${lang.toUpperCase()}`, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
