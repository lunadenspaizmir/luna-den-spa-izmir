import Image from "next/image";
import { Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";

const services = [
  "swedish",
  "bali",
  "deepTissue",
  "medical",
  "aromatherapy",
  "thaiMix",
  "sultan",
] as const;

export function ServicesOverview() {
  const t = useTranslations("servicesPage");

  return (
    <>
      <Section
        spacing="none"
        className="bg-background pt-8 pb-14 md:pt-12 md:pb-20 lg:pt-16"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
                {t("badge")}
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
                {t("title")}
              </h1>

              <div
                aria-hidden="true"
                className="mt-8 h-px w-24 bg-primary/40"
              />

              <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {t("description")}
              </p>
            </div>

            <div className="relative mx-auto mb-10 w-full max-w-md sm:mb-14 lg:max-w-none">
              <div className="arch-frame relative aspect-4/5 overflow-hidden">
                <Image
                  src="/hizmetlerimiz/hizmetlerimiz-1.jpg"
                  alt={t("images.primaryAlt")}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 28rem, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-image-overlay/10" />
              </div>

              <div className="absolute -bottom-10 -left-4 w-2/5 overflow-hidden rounded-2xl border-4 border-background shadow-lg sm:-bottom-14 sm:-left-8">
                <div className="relative aspect-square">
                  <Image
                    src="/hizmetlerimiz/hizmetlerimiz-2.jpg"
                    alt={t("images.secondaryAlt")}
                    fill
                    sizes="(min-width: 1024px) 17vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-image-overlay/10" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-secondary/30">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                <Moon aria-hidden="true" className="size-5 text-primary" />
                {t("listTitle")}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {t("listDescription")}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="font-heading text-2xl font-medium italic text-primary/45"
            >
              01 — {String(services.length).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((key, index) => (
              <article
                key={key}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-primary/12 bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-8 font-heading text-8xl font-medium italic text-primary/6 transition-colors duration-300 group-hover:text-primary/10"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full border border-primary/20 font-heading text-base font-medium italic text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-primary/30"
                  />
                </div>

                <h3 className="mt-5 font-heading text-2xl font-medium tracking-tight text-foreground md:text-[1.75rem]">
                  {t(`items.${key}.title`)}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {t(`items.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
