"use client";
export default class Cookies {
  private name: string;

  constructor(name: string) {
    if (!name || /[\s;=]/.test(name)) {
      throw new Error("Invalid cookie name");
    }
    this.name = name;
  }

  private generateExDays(exdays?: number) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays ?? 90) * 24 * 60 * 60 * 1000);
    return `expires=${date.toUTCString()};`;
  }

  public getCookie() {
    const cookiesArr = document.cookie.split("; ");
    for (const cookie of cookiesArr) {
      if (cookie.startsWith(this.name + "=")) {
        return cookie.substring(this.name.length + 1);
      }
    }
    return null;
  }

  public setCookie(value: string, exDays?: number) {
    if (value.includes(";")) {
      throw new Error("Cookie value cannot contain semicolons.");
    }
    document.cookie = `${this.name}=${encodeURIComponent(value)}; ${this.generateExDays(
      exDays,
    )} path=/; Secure; SameSite=Lax`;
  }

  public deleteCookie() {
    document.cookie = `${this.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Lax`;
  }
}

export function deleteCookiesByPrefix(prefix: string) {
  const cookieNames = document.cookie
    .split("; ")
    .map((cookie) => cookie.split("=")[0])
    .filter((name) => name.startsWith(prefix));

  if (cookieNames.length === 0) return;

  const { hostname } = window.location;
  const hostnameLabels = hostname.split(".");
  const domainSuffixes = hostnameLabels.map((_, i) =>
    hostnameLabels.slice(i).join("."),
  );
  const domains = [
    undefined,
    ...domainSuffixes.flatMap((suffix) => [suffix, `.${suffix}`]),
  ];

  for (const name of cookieNames) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;${
        domain ? ` domain=${domain};` : ""
      }`;
    }
  }
}
