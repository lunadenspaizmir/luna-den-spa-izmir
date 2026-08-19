import Image from "next/image";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { PageHero } from "@/components/shared/page-hero";
import { branches } from "@/data/branches";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function BranchesOverview() {
  const t = useTranslations("branchesPage");
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
          { label: tNavigation("branches") },
        ]}
        image={{
          src: "/subelerimiz/balcova-ege-park.webp",
          alt: t("items.balcovaEgePark.imageAlt"),
        }}
      />

      <Section className="bg-background">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {branches.map((branch) => {
              const isOpen = branch.status === "open";
              const branchHref = {
                pathname: "/subelerimiz/[slug]",
                params: { slug: branch.slug },
              } as const;

              const branchCard = (
                <article
                  className={cn(
                    "flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition duration-300",
                    isOpen
                      ? "border-primary/15 group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:shadow-elevated motion-reduce:transform-none"
                      : "border-dashed border-primary/20 bg-secondary/25",
                  )}
                >
                  <div className="relative m-3 mb-0 overflow-hidden rounded-2xl">
                    <div className="relative aspect-4/3">
                      {branch.image ? (
                        <>
                          <Image
                            src={branch.image}
                            alt={t(`items.${branch.translationKey}.imageAlt`)}
                            fill
                            sizes="(min-width: 768px) 40vw, 100vw"
                            className={cn(
                              "object-cover transition duration-500",
                              isOpen && "group-hover:scale-105",
                            )}
                          />
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-primary/10"
                          />
                        </>
                      ) : (
                        <div className="flex h-full items-center justify-center bg-muted/60 text-muted-foreground">
                          <MapPin className="size-10" />
                        </div>
                      )}
                    </div>

                    <span
                      className={cn(
                        "absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background/92 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur",
                        isOpen ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {isOpen ? (
                        <span
                          aria-hidden="true"
                          className="size-1.5 rounded-full bg-primary"
                        />
                      ) : (
                        <Clock aria-hidden="true" className="size-3" />
                      )}
                      {isOpen ? t("status.open") : t("status.comingSoon")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
                    <p className="eyebrow text-primary">
                      {branch.district}, {siteConfig.city}
                    </p>
                    <h2 className="mt-2 font-heading text-card-title font-semibold tracking-tight text-foreground">
                      {branch.name}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {t(`items.${branch.translationKey}.description`)}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
                      {isOpen ? (
                        <>
                          <span className="text-sm font-medium text-primary">
                            {t("cta.open")}
                          </span>
                          <span
                            aria-hidden="true"
                            className="flex size-10 items-center justify-center rounded-full border border-primary/25 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"
                          >
                            <ArrowRight className="size-4" />
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-medium text-muted-foreground">
                          {t("cta.comingSoon")}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );

              return isOpen ? (
                <Link
                  key={branch.slug}
                  href={branchHref}
                  prefetch={false}
                  className="group block h-full rounded-3xl"
                >
                  {branchCard}
                </Link>
              ) : (
                <div key={branch.slug} className="h-full">
                  {branchCard}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
