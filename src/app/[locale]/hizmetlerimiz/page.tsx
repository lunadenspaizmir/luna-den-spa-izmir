import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import ServicesPageWrapper from "@/features/hizmetlerimiz/containers/ServicesPageWrapper";
import { buildPageMetadata, localizedPath, normalizeLocale } from "@/lib/metadata";

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
        ? "Massage and Spa Services | Luna Den Spa Izmir"
        : "Hizmetlerimiz | Luna Den Spa İzmir Masaj ve Spa",
    description:
      normalizedLocale === "en"
        ? "Review Swedish, Bali, deep tissue, medical, aromatherapy, Thai mix, and Sultan massage services at Luna Den Spa Izmir."
        : "Luna Den Spa İzmir’de İsveç, Bali, derin doku, medikal, aromaterapi, Thai mix ve Sultan masajı hizmetlerini inceleyin.",
    path: localizedPath(locale, "/hizmetlerimiz", "/services"),
    image: "/hizmetlerimiz/hizmetlerimiz-1.jpg",
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesPageWrapper />;
}
