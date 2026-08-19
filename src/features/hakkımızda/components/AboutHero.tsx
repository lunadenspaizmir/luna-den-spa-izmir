import { useTranslations } from "next-intl";

import { PageHero } from "@/components/shared/page-hero";

export function AboutHero() {
  const t = useTranslations("aboutPage.hero");
  const tCommon = useTranslations("common");
  const tNavigation = useTranslations("navigation");

  return (
    <PageHero
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      breadcrumbLabel={tCommon("breadcrumbLabel")}
      breadcrumbs={[
        { label: tNavigation("home"), href: "/" },
        { label: tNavigation("about") },
      ]}
      image={{
        src: "/hakkimizda/hakkimizda-hakkimizda.webp",
        alt: t("imageAlt"),
      }}
    />
  );
}
