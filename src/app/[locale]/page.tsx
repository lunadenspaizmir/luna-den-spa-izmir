import type { Metadata } from "next";

import HomePageWrapper from "@/features/anasayfa/containers/HomePageWrapper";
import { buildPageMetadata, localizedPath, normalizeLocale } from "@/lib/metadata";

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
        ? "Luna Den Spa Izmir | Massage, Spa & Wellness"
        : "Luna Den Spa İzmir | Masaj, Spa ve Wellness",
    description:
      normalizedLocale === "en"
        ? "Discover Luna Den Spa in Izmir for massage, spa, hammam, and wellness services with a relaxing premium experience."
        : "Luna Den Spa İzmir şubelerinde masaj, spa, hamam ve wellness hizmetleriyle rahatlatıcı ve premium bir deneyim sunar.",
    path: localizedPath(locale, "/", ""),
    image: "/hero/hero.png",
  });
}

export default function HomePage() {
  return <HomePageWrapper />;
}
