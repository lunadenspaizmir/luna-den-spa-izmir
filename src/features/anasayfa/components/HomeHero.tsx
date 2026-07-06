import Image from "next/image";
import { ArrowRight, Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function HomeHero() {
  const t = useTranslations("home.hero");

  return (
    <Section
      spacing="none"
      className="relative isolate overflow-hidden bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-12%] -z-10 size-136 rounded-full bg-secondary/70 blur-3xl"
      />

      <Container className="grid items-center gap-12 pt-8 pb-14 md:pt-12 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pt-16 lg:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <Moon aria-hidden="true" className="size-4" />
            {t("eyebrow")}
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {t("title")}
          </h1>

          <div aria-hidden="true" className="mt-9 h-px w-24 bg-primary/40" />

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-8">
              <Link href="/subelerimiz">
                {t("branches")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-primary/30 bg-transparent px-8 hover:border-primary/50 hover:bg-secondary/60"
            >
              <Link href="/iletisim">{t("contact")}</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="arch-frame absolute inset-0 -translate-x-4 translate-y-4 border border-primary/25"
          />
          <div className="arch-frame relative aspect-4/5 overflow-hidden">
            <Image
              src="/hero/hero.png"
              alt="Luna Den Spa & Wellness spa alanı"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, (min-width: 640px) 28rem, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-image-overlay/10" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
