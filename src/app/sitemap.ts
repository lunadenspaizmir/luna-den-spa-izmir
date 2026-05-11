import type { MetadataRoute } from "next";

import { branches } from "@/data/branches";
import { siteConfig } from "@/data/site";

type StaticRoute = Readonly<{
  tr: string;
  en: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}>;

const staticRoutes: ReadonlyArray<StaticRoute> = [
  {
    tr: "/",
    en: "/en",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    tr: "/hakkimizda",
    en: "/en/about",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    tr: "/hizmetlerimiz",
    en: "/en/services",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    tr: "/subelerimiz",
    en: "/en/branches",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    tr: "/iletisim",
    en: "/en/contact",
    priority: 0.8,
    changeFrequency: "monthly",
  },
];

function ensureLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return new URL(ensureLeadingSlash(path), siteConfig.url).toString();
}

function createLocalizedEntry(
  trPath: string,
  enPath: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const trUrl = absoluteUrl(trPath);
  const enUrl = absoluteUrl(enPath);

  const languages = {
    tr: trUrl,
    en: enUrl,
    "x-default": trUrl,
  };

  return [
    {
      url: trUrl,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages,
      },
    },
    {
      url: enUrl,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages,
      },
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.flatMap((route) =>
    createLocalizedEntry(
      route.tr,
      route.en,
      route.priority,
      route.changeFrequency
    )
  );

  const branchEntries = branches
    .filter((branch) => branch.status === "open")
    .flatMap((branch) =>
      createLocalizedEntry(
        `/subelerimiz/${branch.slug}`,
        `/en/branches/${branch.slug}`,
        0.95,
        "weekly"
      )
    );

  return [...staticEntries, ...branchEntries];
}
