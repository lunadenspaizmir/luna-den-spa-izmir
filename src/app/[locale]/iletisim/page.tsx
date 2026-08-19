import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import ContactPageWrapper from "@/features/iletisim/containers/ContactPageWrapper";
import {
  buildPageMetadata,
  localizedPath,
  normalizeLocale,
} from "@/lib/metadata";

type ContactPageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return buildPageMetadata({
    locale,
    title:
      normalizedLocale === "en"
        ? "Contact | Balçova Ege Park AVM"
        : "İletişim | Balçova Ege Park AVM",
    description:
      normalizedLocale === "en"
        ? "Phone, WhatsApp, address, and directions for Luna Den Spa at Balçova Ege Park AVM in Izmir."
        : "Luna Den Spa Balçova Ege Park AVM şubesi telefon, WhatsApp, adres ve yol tarifi bilgileri.",
    path: localizedPath(locale, "/iletisim", "/contact"),
    image: "/anasayfa/anasayfa-iletisim.jpg",
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageWrapper />;
}
