import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import ContactPageWrapper from "@/features/iletisim/containers/ContactPageWrapper";
import { buildPageMetadata, localizedPath, normalizeLocale } from "@/lib/metadata";

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
        ? "Contact | Luna Den Spa Izmir Branches"
        : "İletişim | Luna Den Spa İzmir Şubeleri",
    description:
      normalizedLocale === "en"
        ? "Choose your Luna Den Spa branch in Izmir and contact it directly via WhatsApp or phone for appointments."
        : "Luna Den Spa İzmir şubeleri için WhatsApp ve telefon üzerinden randevu ve iletişim bilgilerine ulaşın.",
    path: localizedPath(locale, "/iletisim", "/contact"),
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageWrapper />;
}
