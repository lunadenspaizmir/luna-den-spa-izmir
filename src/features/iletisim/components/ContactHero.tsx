import { useTranslations } from "next-intl";

import { PageHero } from "@/components/shared/page-hero";
import { CallButton, WhatsAppButton } from "@/components/shared/contact-actions";

export function ContactHero() {
  const t = useTranslations("contactPage.hero");
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
        { label: tNavigation("contact") },
      ]}
      image={{
        src: "/anasayfa/anasayfa-iletisim.jpg",
        alt: t("imageAlt"),
      }}
      actions={
        <>
          <WhatsAppButton
            tone="dark"
            location="contact-hero"
            label={tCommon("whatsapp")}
          />
          <CallButton
            tone="dark"
            location="contact-hero"
            label={tCommon("call")}
          />
        </>
      }
    />
  );
}
