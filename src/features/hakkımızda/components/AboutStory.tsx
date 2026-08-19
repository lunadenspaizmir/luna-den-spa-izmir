import Image from "next/image";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { SectionHeading } from "@/components/shared/section-heading";

const points = ["oils", "care", "hammam"] as const;

export function AboutStory() {
  const t = useTranslations("aboutPage.story");

  return (
    <Section className="bg-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={t("badge")}
              title={t("title")}
              description={t("description")}
            />

            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              {points.map((key, index) => (
                <div key={key} className="border-t border-border pt-5">
                  <span
                    aria-hidden="true"
                    className="font-heading text-2xl font-medium italic text-primary/60"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <dt className="mt-3 text-lg font-semibold leading-snug text-foreground">
                    {t(`points.${key}.title`)}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                    {t(`points.${key}.description`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="arch-frame absolute inset-0 translate-x-4 translate-y-4 border border-primary/25"
            />
            <div className="arch-frame relative aspect-4/5 overflow-hidden">
              <Image
                src="/anasayfa/anasayfa-hakkımızda.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-image-overlay/10"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
