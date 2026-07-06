import { Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";

const reasons = ["quality", "safety", "contact"] as const;

export function WhyUs() {
  const t = useTranslations("aboutPage.why");

  return (
    <Section className="border-y border-border bg-secondary/30">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3 text-primary">
            <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
            {t("badge")}
            <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
          </p>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-12 flex max-w-4xl items-center gap-4"
        >
          <span className="h-px flex-1 bg-border" />
          <Moon className="size-4 text-primary/60" />
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {reasons.map((key, index) => (
            <div key={key} className="text-center md:px-8">
              <span
                aria-hidden="true"
                className="font-heading text-4xl font-medium italic text-primary/50"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl font-semibold leading-snug text-foreground">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {t("itemDescription")}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
