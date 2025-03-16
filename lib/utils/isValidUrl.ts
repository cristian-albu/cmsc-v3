export function isValidUrl(url: string) {
  try {
    const newUrl = new URL(url);
    return newUrl.protocol === "https:";
  } catch (err) {
    console.error(err);
    return false;
  }
}
