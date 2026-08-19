import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const services = ["massage", "spa", "wellness"] as const;

export function HomeServices() {
  const t = useTranslations("home.services");

  return (
    <Section id="hizmetler" className="border-y border-border bg-secondary/30">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <SectionHeading
            eyebrow={t("badge")}
            title={t("title")}
            description={t("description")}
          />

          <Button
            asChild
            variant="outline"
            className="h-12 shrink-0 self-start rounded-full border-primary/30 bg-transparent px-7 text-sm hover:border-primary/50 hover:bg-secondary/60"
          >
            <Link href="/hizmetlerimiz">
              {t("cta")}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 border-t border-border">
          {services.map((key, index) => (
            <article
              key={key}
              className="group grid gap-4 border-b border-border py-8 transition-colors hover:bg-card/60 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:px-4"
            >
              <span
                aria-hidden="true"
                className="font-heading text-4xl font-medium italic text-primary/50"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-card-title font-semibold leading-snug text-foreground">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
                  {t(`items.${key}.description`)}
                </p>
              </div>

              <Link
                href="/hizmetlerimiz"
                className="inline-flex min-h-touch items-center gap-2 text-sm font-medium text-primary transition hover:opacity-75"
              >
                {t("detail")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
