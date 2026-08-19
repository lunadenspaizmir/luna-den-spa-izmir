import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import BranchesPageWrapper from "@/features/subelerimiz/containers/BranchesPageWrapper";
import {
  buildPageMetadata,
  localizedPath,
  normalizeLocale,
} from "@/lib/metadata";

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
        ? "Branches | Izmir"
        : "Şubelerimiz | İzmir",
    description:
      normalizedLocale === "en"
        ? "View the Luna Den Spa Balçova Ege Park AVM branch for appointment, phone, WhatsApp, and location details, and follow our upcoming Gaziemir branch."
        : "Luna Den Spa Balçova Ege Park AVM şubesi için randevu, telefon, WhatsApp ve konum bilgilerine ulaşın; yakında açılacak Gaziemir şubemizi takip edin.",
    path: localizedPath(locale, "/subelerimiz", "/branches"),
    image: "/subelerimiz/balcova-ege-park.webp",
  });
}

export default async function BranchesPage({ params }: BranchesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BranchesPageWrapper />;
}
