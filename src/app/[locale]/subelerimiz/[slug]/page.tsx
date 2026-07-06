import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import BranchDetailPageWrapper from "@/features/sube-detay/containers/BranchDetailPageWrapper";
import { branches, getBranchBySlug } from "@/data/branches";
import {
  buildPageMetadata,
  localizedPath,
  normalizeLocale,
} from "@/lib/metadata";

type BranchDetailPageProps = Readonly<{
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}>;

export function generateStaticParams() {
  return branches
    .filter((branch) => branch.status === "open")
    .map((branch) => ({ slug: branch.slug }));
}

export async function generateMetadata({
  params,
}: BranchDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const branch = getBranchBySlug(slug);
  const normalizedLocale = normalizeLocale(locale);

  if (!branch || branch.status !== "open") {
    return buildPageMetadata({
      locale,
      title:
        normalizedLocale === "en"
          ? "Branch Not Found | Luna Den Spa"
          : "Şube Bulunamadı | Luna Den Spa",
      description:
        normalizedLocale === "en"
          ? "The Luna Den Spa branch you are looking for could not be found."
          : "Aradığınız Luna Den Spa şubesi bulunamadı.",
      path: localizedPath(locale, "/subelerimiz", "/branches"),
    });
  }

  return buildPageMetadata({
    locale,
    title:
      normalizedLocale === "en"
        ? `${branch.fullName} | Massage and Spa in Izmir`
        : `${branch.fullName} | İzmir Masaj ve Spa Merkezi`,
    description:
      normalizedLocale === "en"
        ? `${branch.fullName} offers massage, spa, hammam, and wellness services in Izmir. Access WhatsApp, phone, working hours, and location details.`
        : `${branch.fullName} şubesinde masaj, spa, hamam ve wellness hizmetleri için WhatsApp, telefon, çalışma saatleri ve konum bilgilerine ulaşın.`,
    path: localizedPath(
      locale,
      `/subelerimiz/${branch.slug}`,
      `/branches/${branch.slug}`,
    ),
    image: branch.image,
  });
}

export default async function BranchDetailPage({
  params,
}: BranchDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const branch = getBranchBySlug(slug);

  if (!branch || branch.status !== "open") {
    notFound();
  }

  return <BranchDetailPageWrapper branch={branch} />;
}
