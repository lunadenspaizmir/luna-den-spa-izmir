import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import HomePageWrapper from "@/features/anasayfa/containers/HomePageWrapper";
import {
  buildPageMetadata,
  localizedPath,
  normalizeLocale,
} from "@/lib/metadata";

type PageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return buildPageMetadata({
    locale,
    title:
      normalizedLocale === "en"
        ? "Luna Den Spa Balçova Ege Park AVM | Massage & Spa in Izmir"
        : "Luna Den Spa Balçova Ege Park AVM | İzmir Masaj ve Spa",
    description:
      normalizedLocale === "en"
        ? "Massage, spa, Turkish hammam, and wellness services at Luna Den Spa inside Balçova Ege Park AVM in Izmir. Book instantly via WhatsApp."
        : "Luna Den Spa Balçova Ege Park AVM şubesinde masaj, spa, Türk hamamı ve wellness hizmetleri. WhatsApp üzerinden hemen randevu oluşturun.",
    path: localizedPath(locale, "/", ""),
    image: "/hero/hero.png",
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageWrapper />;
}
