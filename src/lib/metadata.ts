import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

type Locale = "tr" | "en";

type BuildPageMetadataParams = Readonly<{
  locale: string;
  title: string;
  description: string;
  path: string;
  image?: string;
}>;

export function normalizeLocale(locale: string): Locale {
  return locale === "en" ? "en" : "tr";
}

export function localizedPath(locale: string, trPath: string, enPath: string) {
  return normalizeLocale(locale) === "en" ? `/en${enPath}` : trPath;
}

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function buildPageMetadata({
  locale,
  title,
  description,
  path,
  image = "/logo/logo.webp",
}: BuildPageMetadataParams): Metadata {
  const normalizedLocale = normalizeLocale(locale);
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
      locale: normalizedLocale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
