import Image from "next/image";
import { Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                <Moon aria-hidden="true" className="size-5 text-primary" />
                {t("listTitle")}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                {t("listDescription")}
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-border">
              {services.map((key, index) => (
                <AccordionItem key={key} value={`service-${index}`}>
                  <AccordionTrigger className="py-6">
                    <span className="flex items-baseline gap-5">
                      <span
                        aria-hidden="true"
                        className="font-heading text-2xl font-medium italic text-primary/50"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                        {t(`items.${key}.title`)}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="pl-12 text-base leading-8 text-muted-foreground">
                      {t(`items.${key}.description`)}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>
    </>
  );
}
