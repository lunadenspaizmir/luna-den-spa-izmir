import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { branches } from "@/data/branches";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

export function BranchesOverview() {
  const t = useTranslations("branchesPage");

  return (
    <Section
      spacing="none"
      className="bg-background pt-8 pb-20 md:pt-12 md:pb-28 lg:pt-16"
    >
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3 text-primary">
            <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
            İzmir
            <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>

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
                  "flex h-full flex-col overflow-hidden rounded-3xl border border-primary/15 bg-card transition duration-300",
                  isOpen &&
                    "group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:shadow-lg"
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
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/10" />
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center bg-muted/60 text-muted-foreground">
                        <MapPin className="size-10" />
                      </div>
                    )}
                  </div>

                  <span
                    className={cn(
                      "absolute left-4 top-4 rounded-full border border-primary/20 bg-background/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur",
                      isOpen ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {isOpen ? t("status.open") : t("status.comingSoon")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <p className="eyebrow text-primary">
                    {branch.district}, İzmir
                  </p>
                  <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground">
                    {branch.name}
                  </h2>

                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {t(`items.${branch.translationKey}.description`)}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
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
                className="group block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
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
  );
}
