import { useTranslations } from "next-intl";

import { JsonLd, type JsonLdObject } from "@/components/shared/json-ld";
import { faqItems } from "@/data/faq";
import { primaryBranch } from "@/data/branches";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/metadata";

/** Çalışma saatleri şema formatına (`opens`/`closes`) çevrilir. */
const openingHours = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    key: "weekday",
  },
  { days: ["Saturday", "Sunday"], key: "weekend" },
] as const;

function buildOpeningHoursSpecification(): ReadonlyArray<JsonLdObject> {
  return openingHours.flatMap(({ days, key }) => {
    const hours = primaryBranch.workingHours?.find(
      (item) => item.key === key,
    )?.hours;

    if (!hours) {
      return [];
    }

    const [opens, closes] = hours.split("-");

    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days,
        opens,
        closes,
      },
    ];
  });
}

/** İşletme (yerel SEO) yapısal verisi — yalnızca anasayfada basılır. */
export function BusinessJsonLd() {
  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: primaryBranch.fullName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone.display.replace(/\s/g, ""),
    image: absoluteUrl(primaryBranch.image ?? "/logo/logo.webp"),
    logo: absoluteUrl("/logo/logo.webp"),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.district,
      addressRegion: siteConfig.city,
      addressCountry: "TR",
    },
    areaServed: siteConfig.city,
    hasMap: siteConfig.directionsUrl,
    sameAs: [siteConfig.instagramHref],
    openingHoursSpecification: buildOpeningHoursSpecification(),
  };

  return <JsonLd data={data} />;
}

/** SSS yapısal verisi — arama sonuçlarında zengin sonuç sağlar. */
export function FaqJsonLd() {
  const t = useTranslations("faq.items");

  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((key) => ({
      "@type": "Question",
      name: t(`${key}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`${key}.answer`),
      },
    })),
  };

  return <JsonLd data={data} />;
}
