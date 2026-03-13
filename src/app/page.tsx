"use client";

import { useEffect } from "react";

const ARABIC_LANGS = ["ar", "ar-SA", "ar-AE", "ar-EG", "ar-KW", "ar-QA", "ar-BH", "ar-OM", "ar-JO", "ar-IQ", "ar-LB", "ar-SY", "ar-YE", "ar-LY", "ar-TN", "ar-DZ", "ar-MA", "ar-SD"];

function getPreferredLocale(): "en" | "ar" {
  const langs = navigator.languages ?? [navigator.language];
  for (const lang of langs) {
    if (ARABIC_LANGS.includes(lang) || lang.startsWith("ar")) {
      return "ar";
    }
  }
  return "en";
}

export default function RootPage() {
  useEffect(() => {
    const locale = getPreferredLocale();
    window.location.replace(`/${locale}/`);
  }, []);

  return null;
}
