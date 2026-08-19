import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getBranchConversionProps, primaryBranch } from "@/data/branches";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const services = primaryBranch.services ?? [];

export function ServicesOverview() {
  const t = useTranslations("servicesPage");
  const tCommon = useTranslations("common");
  const tNavigation = useTranslations("navigation");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        breadcrumbLabel={tCommon("breadcrumbLabel")}
        breadcrumbs={[
          { label: tNavigation("home"), href: "/" },
          { label: tNavigation("services") },
        ]}
        image={{
          src: "/hizmetlerimiz/hizmetlerimiz-1.jpg",
          alt: t("hero.imageAlt"),
        }}
      />

      <Section className="border-t border-border bg-background">
        <Container>
          <SectionHeading
            eyebrow={t("listBadge")}
            title={t("listTitle")}
            description={t("listDescription")}
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((key, index) => (
              <article
                key={key}
                id={key}
                className="group relative flex scroll-mt-32 flex-col overflow-hidden rounded-3xl border border-primary/12 bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated motion-reduce:transform-none"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-8 -right-6 font-heading text-8xl font-medium italic text-primary/6 transition-colors duration-300 group-hover:text-primary/10"
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

                <h2 className="mt-5 font-heading text-card-title font-medium leading-snug tracking-tight text-foreground">
                  {t(`items.${key}.title`)}
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {t(`items.${key}.description`)}
                </p>

                <div className="mt-auto pt-7">
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 w-full rounded-full border-primary/30 bg-transparent text-sm hover:border-primary/50 hover:bg-secondary/60"
                  >
                    <a
                      href={createWhatsAppUrl(
                        t("whatsappMessage", {
                          service: t(`items.${key}.title`),
                        }),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...getBranchConversionProps(
                        primaryBranch.slug,
                        "whatsapp",
                        `services-${key}`,
                      )}
                    >
                      <MessageCircle className="size-4" />
                      {t("cta")}
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
