import { ArrowRight, Camera, Clock, MapPin, Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import {
  CallButton,
  WhatsAppButton,
} from "@/components/shared/contact-actions";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import type { Branch } from "@/data/branches";
import { siteConfig } from "@/data/site";

import { BranchGalleryShowcase } from "./BranchGalleryShowcase";

type BranchDetailProps = Readonly<{
  branch: Branch;
}>;

export function BranchDetail({ branch }: BranchDetailProps) {
  const t = useTranslations("branchDetailPage");
  const tCommon = useTranslations("common");
  const tNavigation = useTranslations("navigation");
  const serviceTranslations = useTranslations("servicesPage.items");

  const heroImage = branch.image ?? branch.gallery?.[0];
  const gallery = branch.gallery ?? [];
  const hasWorkingHours = Boolean(branch.workingHours?.length);
  const hasServices = Boolean(branch.services?.length);

  return (
    <>
      <PageHero
        eyebrow={`${branch.district}, ${siteConfig.city}`}
        title={branch.fullName}
        description={t(`${branch.translationKey}.heroDescription`)}
        breadcrumbLabel={tCommon("breadcrumbLabel")}
        breadcrumbs={[
          { label: tNavigation("home"), href: "/" },
          { label: tNavigation("branches"), href: "/subelerimiz" },
          { label: branch.name },
        ]}
        image={heroImage ? { src: heroImage, alt: branch.fullName } : undefined}
        actions={
          <>
            <WhatsAppButton
              tone="dark"
              location="branch-detail-hero"
              label={tCommon("whatsapp")}
            />
            <CallButton
              tone="dark"
              location="branch-detail-hero"
              label={branch.phone ?? tCommon("call")}
            />
          </>
        }
      />

      <Section className="border-t border-border bg-secondary/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-primary/15 bg-card p-6 md:p-8 lg:col-span-2">
              <h2 className="flex items-center gap-3 text-card-title font-semibold tracking-tight text-foreground">
                <MapPin aria-hidden="true" className="size-5 text-primary" />
                {t("location.title")}
              </h2>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {t(`${branch.translationKey}.locationDescription`)}
              </p>

              {branch.mapsEmbedUrl ? (
                <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                  <iframe
                    title={t("location.mapTitle")}
                    src={branch.mapsEmbedUrl}
                    className="h-80 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : null}

              {branch.mapsUrl ? (
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 h-11 rounded-full border-primary/30 bg-transparent px-6 text-sm hover:border-primary/50 hover:bg-secondary/60"
                >
                  <a href={branch.mapsUrl} target="_blank" rel="noreferrer">
                    {tCommon("directions")}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              ) : null}
            </div>

            <div className="grid gap-8 self-start">
              {hasWorkingHours ? (
                <div className="rounded-3xl border border-primary/15 bg-card p-6 md:p-8">
                  <h2 className="flex items-center gap-3 text-card-title font-semibold tracking-tight text-foreground">
                    <Clock aria-hidden="true" className="size-5 text-primary" />
                    {t("workingHours.title")}
                  </h2>

                  <div className="mt-4">
                    {branch.workingHours?.map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between gap-4 border-b border-border py-4 last:border-b-0 last:pb-0"
                      >
                        <div>
                          <p className="font-medium text-foreground">
                            {t(`workingHours.${item.key}.label`)}
                          </p>
                          <p className="mt-0.5 text-sm text-muted-foreground">
                            {t(`workingHours.${item.key}.days`)}
                          </p>
                        </div>
                        <p className="font-heading text-2xl font-semibold tabular-nums text-primary">
                          {item.hours}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="rounded-3xl border border-primary/15 bg-card p-6 md:p-8">
                <h2 className="text-card-title font-semibold tracking-tight text-foreground">
                  {t("contact.title")}
                </h2>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {t("contact.description")}
                </p>

                <div className="mt-6 grid gap-3">
                  <WhatsAppButton
                    className="w-full"
                    location="branch-detail-contact-card"
                    label={tCommon("whatsapp")}
                  />
                  <CallButton
                    className="w-full"
                    location="branch-detail-contact-card"
                    label={tCommon("call")}
                  />

                  {branch.instagramHref ? (
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 w-full rounded-full border-primary/30 bg-transparent text-sm hover:border-primary/50 hover:bg-secondary/60"
                    >
                      <a
                        href={branch.instagramHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Camera className="size-4" />
                        {tCommon("instagram")}
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {hasServices || gallery.length > 0 ? (
        <Section className="bg-background">
          <Container>
            {hasServices ? (
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
                <SectionHeading
                  eyebrow={t("services.badge")}
                  title={
                    <span className="flex items-center gap-3">
                      <Moon aria-hidden="true" className="size-5 text-primary" />
                      {t("services.title")}
                    </span>
                  }
                  description={t("services.description")}
                  className="lg:sticky lg:top-32"
                />

                <ul className="grid border-t border-border sm:grid-cols-2 sm:gap-x-10">
                  {branch.services?.map((serviceKey, index) => (
                    <li
                      key={serviceKey}
                      className="group flex items-baseline gap-4 border-b border-border py-4 transition-colors hover:border-primary/40"
                    >
                      <span
                        aria-hidden="true"
                        className="font-heading text-xl font-medium italic text-primary/50 transition-colors group-hover:text-primary"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium text-foreground transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
                        {serviceTranslations(`${serviceKey}.title`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {gallery.length > 0 ? (
              <div className={hasServices ? "mt-20" : ""}>
                <div className="flex items-end justify-between gap-4">
                  <h2 className="flex items-center gap-3 text-section-title font-semibold tracking-tight text-foreground">
                    <Camera aria-hidden="true" className="size-5 text-primary" />
                    {t("gallery.title")}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="font-heading text-2xl font-medium italic text-primary/50"
                  >
                    {String(gallery.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-8">
                  <BranchGalleryShowcase
                    images={gallery}
                    branchName={branch.fullName}
                    imageAltLabel={t("gallery.imageAlt")}
                  />
                </div>
              </div>
            ) : null}
          </Container>
        </Section>
      ) : null}

      <FinalCtaSection conversionLocation="branch-detail-final-cta" />
    </>
  );
}
