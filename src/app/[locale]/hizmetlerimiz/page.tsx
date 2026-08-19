import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import ServicesPageWrapper from "@/features/hizmetlerimiz/containers/ServicesPageWrapper";
import {
  buildPageMetadata,
  localizedPath,
  normalizeLocale,
} from "@/lib/metadata";

type ServicesPageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return buildPageMetadata({
    locale,
    title:
      normalizedLocale === "en"
        ? "Massage & Spa Services | Balçova"
        : "Masaj ve Spa Hizmetleri | Balçova",
    description:
      normalizedLocale === "en"
        ? "Swedish, Bali, deep tissue, medical, aromatherapy, Thai mix, and Sultan massage services at Luna Den Spa Balçova Ege Park AVM."
        : "Luna Den Spa Balçova Ege Park AVM’de İsveç, Bali, derin doku, medikal, aromaterapi, Thai mix ve Sultan masajı hizmetlerini inceleyin.",
    path: localizedPath(locale, "/hizmetlerimiz", "/services"),
    image: "/hizmetlerimiz/hizmetlerimiz-1.jpg",
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesPageWrapper />;
}
