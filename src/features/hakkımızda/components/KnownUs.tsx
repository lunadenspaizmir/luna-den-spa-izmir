import Image from "next/image";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";

export function KnownUs() {
  const t = useTranslations("aboutPage.hero");

  return (
    <Section
      spacing="none"
      className="bg-background pt-8 pb-20 md:pt-12 md:pb-28 lg:pt-16"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
              {t("badge")}
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
              {t("title")}
            </h1>

            <div aria-hidden="true" className="mt-8 h-px w-24 bg-primary/40" />

            <p className="mt-8 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              {t("description")}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="arch-frame absolute inset-0 translate-x-4 translate-y-4 border border-primary/25"
            />
            <div className="arch-frame relative aspect-4/5 overflow-hidden">
              <Image
                src="/hakkimizda/hakkimizda-hakkimizda.webp"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-image-overlay/10" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
