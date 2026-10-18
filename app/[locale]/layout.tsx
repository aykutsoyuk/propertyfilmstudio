import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SkipLink } from "@/components/SkipLink";
import { JsonLd } from "@/components/JsonLd";
import {
  ANALYTICS_SITE_ID,
  ANALYTICS_SRC,
  LAST_UPDATED,
  SITE_NAME,
  SITE_URL,
} from "@/content/site";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const siteUrl = SITE_URL;
  const path = locale === "en" ? "/en" : "/";

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: path,
      languages: {
        "pt-PT": "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: path,
      siteName: SITE_NAME,
      locale: locale === "en" ? "en_US" : "pt_PT",
      type: "website",
    },
    other: { "og:updated_time": LAST_UPDATED },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Only client components need messages (Navbar); sending every string to
  // the browser bloats the HTML payload.
  const { nav, common } = await getMessages();

  return (
    <html
      lang={locale === "en" ? "en" : "pt-PT"}
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script defer src={ANALYTICS_SRC} data-site={ANALYTICS_SITE_ID} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <NextIntlClientProvider messages={{ nav, common }}>
          <JsonLd locale={locale} />
          <SkipLink />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
