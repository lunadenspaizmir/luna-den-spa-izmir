import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import AboutPageWrapper from "@/features/hakkımızda/containers/AboutPageWrapper";
import {
  buildPageMetadata,
  localizedPath,
  normalizeLocale,
} from "@/lib/metadata";

type AboutPageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return buildPageMetadata({
    locale,
    title:
      normalizedLocale === "en"
        ? "About Us | Balçova Ege Park AVM"
        : "Hakkımızda | Balçova Spa ve Masaj",
    description:
      normalizedLocale === "en"
        ? "Learn about Luna Den Spa, offering premium massage, spa, hammam, and wellness experiences at Balçova Ege Park AVM in Izmir."
        : "Luna Den Spa hakkında bilgi alın. Balçova Ege Park AVM şubemizde masaj, spa, hamam ve wellness hizmetleriyle premium bir deneyim sunuyoruz.",
    path: localizedPath(locale, "/hakkimizda", "/about"),
    image: "/hakkimizda/hakkimizda-hakkimizda.webp",
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPageWrapper />;
}
