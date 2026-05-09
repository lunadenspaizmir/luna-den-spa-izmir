import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "as-needed",
  localeDetection: false,

  pathnames: {
    "/": "/",

    "/hakkimizda": {
      tr: "/hakkimizda",
      en: "/about",
    },

    "/hizmetlerimiz": {
      tr: "/hizmetlerimiz",
      en: "/services",
    },

    "/subelerimiz": {
      tr: "/subelerimiz",
      en: "/branches",
    },

    "/subelerimiz/[slug]": {
      tr: "/subelerimiz/[slug]",
      en: "/branches/[slug]",
    },

    "/iletisim": {
      tr: "/iletisim",
      en: "/contact",
    },
  },
});
