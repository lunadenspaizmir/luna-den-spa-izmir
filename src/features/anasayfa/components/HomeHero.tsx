import Image from "next/image";
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
      className="relative isolate -mt-24 min-h-svh overflow-hidden"
    >
      <Image
        src="/hero/hero.png"
        alt="Luna Den Spa & Wellness spa alanı"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-image-overlay/55" />
      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />

      <Container className="relative z-10 flex min-h-svh items-center pt-24">
        <div className="max-w-3xl py-20 text-hero-foreground">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-hero-foreground/80">
            {t("eyebrow")}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight text-hero-foreground md:text-6xl">
            {t("title")}
          </h1>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/subelerimiz">{t("branches")}</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-hero-foreground/70 bg-hero-foreground/10 px-6 text-hero-foreground backdrop-blur hover:bg-hero-foreground/20 hover:text-hero-foreground"
            >
              <Link href="/iletisim">{t("contact")}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
