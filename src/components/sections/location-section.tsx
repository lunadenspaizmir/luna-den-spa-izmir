import { Clock, MapPin, Phone, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import {
  DirectionsButton,
  WhatsAppButton,
} from "@/components/shared/contact-actions";
import { comingSoonBranches, primaryBranch } from "@/data/branches";
import { siteConfig } from "@/data/site";

type LocationSectionProps = Readonly<{
  /** Google Ads dönüşümünde raporlanan tıklama konumu. */
  conversionLocation: string;
}>;

/**
 * Konum, iletişim ve çalışma saatleri tek panelde; yanında canlı harita.
 * Yakında açılacak şubeler de burada kısa bir not olarak yer alır.
 */
export function LocationSection({ conversionLocation }: LocationSectionProps) {
  const t = useTranslations("location");
  const tCommon = useTranslations("common");
  const tHours = useTranslations("branchDetailPage.workingHours");
  const tBranches = useTranslations("branchesPage");

  return (
    <Section id="konum" className="border-t border-border bg-secondary/30">
      <Container>
        <div className="grid overflow-hidden rounded-3xl bg-primary text-hero-foreground shadow-elevated lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative p-7 sm:p-10 lg:p-12">
            <span
              aria-hidden="true"
              className="absolute top-0 left-7 h-1 w-20 bg-accent sm:left-10 lg:left-12"
            />

            <p className="eyebrow text-on-dark-muted">{t("badge")}</p>

            <h2 className="mt-4 text-section-title font-semibold leading-[var(--line-height-heading)] tracking-tight text-hero-foreground">
              {t("title")}
            </h2>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-hero-foreground"
                />
                <div>
                  <dt className="font-semibold text-hero-foreground">
                    {t("addressLabel")}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-on-dark-muted">
                    {siteConfig.address}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-hero-foreground"
                />
                <div>
                  <dt className="font-semibold text-hero-foreground">
                    {t("phoneLabel")}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={siteConfig.phone.href}
                      className="inline-flex min-h-touch items-center font-heading text-2xl font-medium tabular-nums text-hero-foreground transition-opacity hover:opacity-80"
                    >
                      {siteConfig.phone.display}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-hero-foreground"
                />
                <div className="min-w-0 flex-1">
                  <dt className="font-semibold text-hero-foreground">
                    {tHours("title")}
                  </dt>
                  <dd className="mt-2 grid max-w-xs gap-1.5">
                    {primaryBranch.workingHours?.map((item) => (
                      <span
                        key={item.key}
                        className="flex items-baseline justify-between gap-4 text-sm text-on-dark-muted"
                      >
                        {tHours(`${item.key}.label`)}
                        <span className="font-medium tabular-nums text-hero-foreground">
                          {item.hours}
                        </span>
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton
                tone="dark"
                location={conversionLocation}
                label={tCommon("whatsapp")}
              />
              <DirectionsButton tone="dark" label={tCommon("directions")} />
            </div>

            {comingSoonBranches.length > 0 ? (
              <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-on-dark-border pt-6 text-sm text-on-dark-muted">
                <Sparkles aria-hidden="true" className="size-4" />
                <span className="font-semibold uppercase tracking-[0.14em] text-hero-foreground">
                  {tBranches("status.comingSoon")}
                </span>
                <span>
                  {comingSoonBranches
                    .map((branch) => `${branch.name}, ${siteConfig.city}`)
                    .join(" · ")}
                </span>
              </div>
            ) : null}
          </div>

          <div className="min-h-80 border-t border-on-dark-border lg:min-h-full lg:border-t-0 lg:border-l">
            <iframe
              title={t("mapTitle")}
              src={siteConfig.mapEmbedUrl}
              className="h-full min-h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
