import Image from "next/image";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { WhatsAppButton } from "@/components/shared/contact-actions";
import { Button } from "@/components/ui/button";
import { primaryBranch } from "@/data/branches";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";

const weekdayHours = primaryBranch.workingHours?.find(
  (item) => item.key === "weekday",
)?.hours;

/**
 * Anasayfa giriş ekranı: koyu marka panelinde tek bir güçlü mesaj ve tek bir
 * birincil eylem (WhatsApp randevu). İçerik bilinçli olarak kısa tutulur;
 * detaylar alt bölümlere bırakılır.
 */
export function HomeHero() {
  const t = useTranslations("home.hero");
  const tCommon = useTranslations("common");

  return (
    <section className="bg-background pt-5 pb-8 md:pt-8 md:pb-12">
      <Container>
        <div className="grid overflow-hidden rounded-3xl bg-primary text-hero-foreground shadow-elevated lg:min-h-140 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] xl:min-h-152">
          <div className="relative z-10 flex min-w-0 flex-col justify-center px-6 py-14 motion-safe:animate-rise-in sm:px-10 md:py-18 lg:px-12 xl:px-16">
            <span
              aria-hidden="true"
              className="absolute top-0 left-6 h-1 w-24 bg-accent sm:left-10 lg:left-12 xl:left-16"
            />

            <p className="eyebrow flex items-center gap-2 text-on-dark-muted">
              <MapPin aria-hidden="true" className="size-4 shrink-0" />
              {t("eyebrow")}
            </p>

            <h1 className="mt-6 max-w-2xl text-hero font-semibold leading-[var(--line-height-display)] tracking-tight text-hero-foreground">
              {t("title")}
            </h1>

            <p className="mt-7 max-w-lg text-body-large leading-8 text-on-dark-muted">
              {t("description")}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                tone="dark"
                location="home-hero"
                label={tCommon("whatsapp")}
              />

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-on-dark-border bg-transparent px-7 text-sm text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"
              >
                <Link href="/hizmetlerimiz">
                  {t("secondaryCta")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-on-dark-border pt-6 text-sm text-on-dark-muted">
              {weekdayHours ? (
                <span className="flex items-center gap-2">
                  <Clock aria-hidden="true" className="size-4" />
                  <span className="tabular-nums">{weekdayHours}</span>
                </span>
              ) : null}

              <a
                href={siteConfig.phone.href}
                className="inline-flex min-h-touch items-center font-semibold tabular-nums text-hero-foreground transition-opacity hover:opacity-80"
              >
                {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <div className="relative min-h-72 motion-safe:animate-media-in sm:min-h-88 lg:min-h-full">
            <Image
              src="/hero/hero.png"
              alt={t("imageAlt")}
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-x-4 bottom-4 border-l-2 border-accent bg-card p-5 text-foreground shadow-elevated sm:right-6 sm:left-auto sm:bottom-6 sm:max-w-xs">
              <p className="eyebrow text-primary">{t("highlight.title")}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {t("highlight.description")}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
