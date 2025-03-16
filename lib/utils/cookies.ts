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
      exDays
    )} path=/; Secure; SameSite=Lax`;
  }

  public deleteCookie() {
    document.cookie = `${this.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Lax`;
  }
}
