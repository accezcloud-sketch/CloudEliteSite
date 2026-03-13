import en from "./en.json";
import ar from "./ar.json";

export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "en";

const dictionaries = { en, ar } as const;

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export function isRtl(locale: Locale): boolean {
  return locale === "ar";
}
