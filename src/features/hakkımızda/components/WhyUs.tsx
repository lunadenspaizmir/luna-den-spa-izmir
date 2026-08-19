import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { SectionHeading } from "@/components/shared/section-heading";

const reasons = ["quality", "safety", "contact"] as const;

export function WhyUs() {
  const t = useTranslations("aboutPage.why");

  return (
    <Section className="border-y border-border bg-secondary/30">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t("badge")}
          title={t("title")}
          description={t("description")}
          className="max-w-3xl"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {reasons.map((key, index) => (
            <div key={key} className="text-center md:px-8">
              <span
                aria-hidden="true"
                className="font-heading text-4xl font-medium italic text-primary/50"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground">
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
