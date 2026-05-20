import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import BranchesPageWrapper from "@/features/subelerimiz/containers/BranchesPageWrapper";
import { buildPageMetadata, localizedPath, normalizeLocale } from "@/lib/metadata";

type BranchesPageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata({
  params,
}: BranchesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return buildPageMetadata({
    locale,
    title:
      normalizedLocale === "en"
        ? "Izmir Branches | Luna Den Spa"
        : "İzmir Şubelerimiz | Luna Den Spa",
    description:
      normalizedLocale === "en"
        ? "View Luna Den Spa branches in Izmir, including Balçova Ege Park, and access appointment, phone, WhatsApp, and location details."
        : "Luna Den Spa İzmir şubelerini inceleyin. Balçova Ege Park şubesi için randevu, telefon, WhatsApp ve konum bilgilerine ulaşın.",
    path: localizedPath(locale, "/subelerimiz", "/branches"),
    image: "/subelerimiz/balcova-ege-park.webp",
  });
}

export default async function BranchesPage({ params }: BranchesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BranchesPageWrapper />;
}
