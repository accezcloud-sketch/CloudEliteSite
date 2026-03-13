"use client";

import { createContext, useContext } from "react";
import type { Locale, Dictionary } from "./index";
import { getDictionary } from "./index";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
  dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  dict: getDictionary("en"),
  dir: "ltr",
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const dict = getDictionary(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <LocaleContext.Provider value={{ locale, dict, dir }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
