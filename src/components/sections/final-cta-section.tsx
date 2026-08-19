import { Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { CallButton, WhatsAppButton } from "@/components/shared/contact-actions";

type FinalCtaSectionProps = Readonly<{
  /** Google Ads dönüşümünde raporlanan tıklama konumu. */
  conversionLocation: string;
}>;

/** Sayfa sonu kapanış çağrısı — her sayfada aynı, tek ve net eylem. */
export function FinalCtaSection({ conversionLocation }: FinalCtaSectionProps) {
  const t = useTranslations("finalCta");
  const tCommon = useTranslations("common");

  return (
    <Section className="bg-image-overlay text-hero-foreground">
      <Container className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl border-l-2 border-accent pl-6 sm:pl-8">
          <p className="eyebrow flex items-center gap-3 text-on-dark-muted">
            <Moon aria-hidden="true" className="size-4" />
            {t("badge")}
          </p>

          <h2 className="mt-5 text-section-title font-semibold leading-[var(--line-height-heading)] tracking-tight text-hero-foreground">
            {t("title")}
          </h2>

          <p className="mt-5 text-body-large leading-8 text-on-dark-muted">
            {t("description")}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            tone="dark"
            location={conversionLocation}
            label={tCommon("whatsapp")}
          />
          <CallButton
            tone="dark"
            location={conversionLocation}
            label={tCommon("call")}
          />
        </div>
      </Container>
    </Section>
  );
}
