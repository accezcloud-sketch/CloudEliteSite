import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Noto_Sans_Arabic } from "next/font/google";
import { locales, type Locale, getDictionary, isRtl } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const loc = locale as Locale;
  const rtl = isRtl(loc);

  return (
    <html lang={loc} dir={rtl ? "rtl" : "ltr"}>
      <body
        className={`${dmSans.variable} ${playfair.variable} ${notoArabic.variable} antialiased ${rtl ? "font-arabic" : ""}`}
      >
        <LocaleProvider locale={loc}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
