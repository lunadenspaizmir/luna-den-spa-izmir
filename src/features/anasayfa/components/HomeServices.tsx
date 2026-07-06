import { ArrowRight, Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const services = ["massage", "spa", "wellness"] as const;

export function HomeServices() {
  const t = useTranslations("home.services");

  return (
    <Section className="border-y border-border bg-secondary/30">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
            {t("badge")}
            <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
          </p>

          <p className="mt-6 font-heading text-3xl font-medium leading-snug tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
            {t("intro")}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground md:text-3xl">
            <Moon aria-hidden="true" className="size-5 text-primary" />
            {t("popularTitle")}
          </h2>

          <div className="mt-6 border-t border-border">
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
                  <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
                    {t(`items.${key}.description`)}
                  </p>
                </div>

                <Link
                  href="/hizmetlerimiz"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:opacity-75"
                >
                  {t("detail")}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild className="h-12 rounded-full px-7">
              <Link href="/hizmetlerimiz">
                {t("cta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
