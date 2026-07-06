import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const branches = ["location", "reservation", "experience"] as const;

export function HomeBranches() {
  const t = useTranslations("home.branches");

  return (
    <Section className="bg-background">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <div className="relative order-last mx-auto w-full max-w-md lg:order-first lg:max-w-none">
            <div
              aria-hidden="true"
              className="arch-frame absolute inset-0 translate-x-4 translate-y-4 border border-primary/25"
            />
            <div className="arch-frame relative aspect-4/5 overflow-hidden">
              <Image
                src="/anasayfa/anasayfa-hizmetlerimiz.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-image-overlay/10" />
            </div>
          </div>

          <div>
            <Link
              href="/subelerimiz"
              className="eyebrow inline-flex items-center gap-3 text-primary transition hover:opacity-75"
            >
              <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
              {t("badge")}
            </Link>

            <p className="mt-6 max-w-2xl font-heading text-3xl font-medium leading-snug tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
              {t("intro")}
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-foreground md:text-3xl">
              {t("title")}
            </h2>

            <div className="mt-6 grid gap-6">
              {branches.map((key) => (
                <div
                  key={key}
                  className="border-l-2 border-primary/25 pl-5 transition-colors hover:border-primary/60"
                >
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <Button asChild className="mt-9 h-12 rounded-full px-7">
              <Link href="/subelerimiz">
                {t("detail")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
