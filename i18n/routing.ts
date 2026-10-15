import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
  localePrefix: "as-needed",
  // Portuguese is always the default at "/"; the language is chosen only by
  // the URL (/en), never by cookie or Accept-Language redirects.
  localeDetection: false,
  pathnames: {
    "/": "/",
  },
});

export type Locale = (typeof routing.locales)[number];
