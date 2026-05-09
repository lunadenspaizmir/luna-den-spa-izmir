import type { Metadata } from "next";

import AboutPageWrapper from "@/features/hakkımızda/containers/AboutPageWrapper";
import { buildPageMetadata, localizedPath, normalizeLocale } from "@/lib/metadata";

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
        ? "About Luna Den Spa | Izmir Spa and Massage"
        : "Hakkımızda | Luna Den Spa İzmir",
    description:
      normalizedLocale === "en"
        ? "Learn about Luna Den Spa, offering premium massage, spa, hammam, and wellness experiences in Izmir."
        : "Luna Den Spa hakkında bilgi alın. İzmir’de masaj, spa, hamam ve wellness hizmetleriyle premium bir deneyim sunuyoruz.",
    path: localizedPath(locale, "/hakkimizda", "/about"),
    image: "/hakkimizda/hakkimizda-hakkimizda.webp",
  });
}

export default function AboutPage() {
  return <AboutPageWrapper />;
}
