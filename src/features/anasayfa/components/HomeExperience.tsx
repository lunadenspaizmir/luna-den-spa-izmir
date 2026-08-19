import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = ["choose", "book", "relax"] as const;

/**
 * Randevudan seansa üç adım. Ziyaret öncesi belirsizliği azaltarak
 * iletişime geçme eşiğini düşürür.
 */
export function HomeExperience() {
  const t = useTranslations("home.experience");

  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          eyebrow={t("badge")}
          title={t("title")}
          description={t("description")}
        />

        <ol className="mt-12 grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
          {steps.map((key, index) => (
            <li
              key={key}
              className="group border-b border-border py-8 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="font-heading text-4xl font-medium italic text-primary/60"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-border transition-colors group-hover:bg-primary/40"
                />
              </div>

              <h3 className="mt-6 text-card-title font-semibold leading-snug text-foreground">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t(`items.${key}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
