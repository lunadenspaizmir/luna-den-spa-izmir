import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Clock,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type { ElementType } from "react";

import { CocosContactLink } from "@/components/analytics/cocos-contact-link";
import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import type { Branch } from "@/data/branches";
import { Link } from "@/i18n/navigation";

import { BranchGalleryShowcase } from "./BranchGalleryShowcase";

type BranchDetailProps = Readonly<{
  branch: Branch;
}>;

type ConversionType = "whatsapp" | "phone";

const trackedGoogleAdsBranchSlug = "balcova-ege-park";
const cocosGoogleAdsBranchSlug = "cocos-the-club-solto-hotel";

export function BranchDetail({ branch }: BranchDetailProps) {
  const t = useTranslations("branchDetailPage");
  const serviceTranslations = useTranslations("servicesPage.items");
  const heroImage = branch.image ?? branch.gallery?.[0];
  const gallery = branch.gallery ?? [];
  const hasWorkingHours = Boolean(branch.workingHours?.length);
  const hasServices = Boolean(branch.services?.length);
  const shouldTrackGoogleAdsConversions =
    branch.slug === trackedGoogleAdsBranchSlug;
  // Cocos şubesinde iletişim bağlantıları, tıklamada Google Ads dönüşümü
  // gönderen istemci sarmalayıcısı ile render edilir; diğer şubelerde düz <a>.
  const ContactLink: ElementType =
    branch.slug === cocosGoogleAdsBranchSlug ? CocosContactLink : "a";

  function getConversionTrackingProps(type: ConversionType, location: string) {
    if (!shouldTrackGoogleAdsConversions) {
      return {};
    }

    return {
      "data-conversion": type,
      "data-conversion-location": location,
      "data-branch": branch.slug,
    };
  }

  return (
    <>
      <Section
        spacing="none"
        className="bg-background pt-8 pb-14 md:pt-10 md:pb-20 lg:pt-12"
      >
        <Container>
          <div
            className={
              heroImage
                ? "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
                : "mx-auto max-w-3xl"
            }
          >
            <div>
              <Link
                href="/subelerimiz"
                className="group mb-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
                {t("backToBranches")}
              </Link>

              <p className="eyebrow flex items-center gap-3 text-primary">
                <MapPin aria-hidden="true" className="size-4" />
                {branch.district}, İzmir
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
                {branch.fullName}
              </h1>

              <div
                aria-hidden="true"
                className="mt-8 h-px w-24 bg-primary/40"
              />

              <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {t(`${branch.translationKey}.heroDescription`)}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {branch.whatsappHref ? (
                  <Button asChild className="h-12 rounded-full px-7">
                    <ContactLink
                      href={branch.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...getConversionTrackingProps(
                        "whatsapp",
                        "branch-detail-hero",
                      )}
                    >
                      <MessageCircle className="size-4" />
                      {t("actions.whatsapp")}
                    </ContactLink>
                  </Button>
                ) : null}

                {branch.phoneHref ? (
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-primary/30 bg-transparent px-7 hover:border-primary/50 hover:bg-secondary/60"
                  >
                    <ContactLink
                      href={branch.phoneHref}
                      {...getConversionTrackingProps(
                        "phone",
                        "branch-detail-hero",
                      )}
                    >
                      <Phone className="size-4" />
                      {branch.phone}
                    </ContactLink>
                  </Button>
                ) : null}

                {branch.instagramHref ? (
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-primary/30 bg-transparent px-7 hover:border-primary/50 hover:bg-secondary/60"
                  >
                    <a
                      href={branch.instagramHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Camera className="size-4" />
                      {t("actions.instagram")}
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>

            {heroImage ? (
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-primary/25"
                />
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-3">
                  <div className="relative aspect-16/11 overflow-hidden rounded-2xl">
                    <Image
                      src={heroImage}
                      alt={branch.fullName}
                      fill
                      priority
                      sizes="(min-width: 1024px) 44vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-image-overlay/10" />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-secondary/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-primary/15 bg-card p-6 md:p-8 lg:col-span-2">
              <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
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
                  className="mt-6 h-11 rounded-full border-primary/30 bg-transparent px-6 hover:border-primary/50 hover:bg-secondary/60"
                >
                  <a href={branch.mapsUrl} target="_blank" rel="noreferrer">
                    {t("actions.directions")}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              ) : null}
            </div>

            <div className="grid gap-8 self-start">
              {hasWorkingHours ? (
                <div className="rounded-3xl border border-primary/15 bg-card p-6 md:p-8">
                  <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
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
                <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {t("contact.title")}
                </h2>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {t("contact.description")}
                </p>

                <div className="mt-6 grid gap-3">
                  {branch.whatsappHref ? (
                    <Button asChild className="h-12 w-full rounded-full">
                      <ContactLink
                        href={branch.whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        {...getConversionTrackingProps(
                          "whatsapp",
                          "branch-detail-contact-card",
                        )}
                      >
                        <MessageCircle className="size-4" />
                        {t("actions.whatsapp")}
                      </ContactLink>
                    </Button>
                  ) : null}
                  {branch.phoneHref ? (
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 w-full rounded-full border-primary/30 bg-transparent hover:border-primary/50 hover:bg-secondary/60"
                    >
                      <ContactLink
                        href={branch.phoneHref}
                        {...getConversionTrackingProps(
                          "phone",
                          "branch-detail-contact-card",
                        )}
                      >
                        <Phone className="size-4" />
                        {t("actions.call")}
                      </ContactLink>
                    </Button>
                  ) : null}
                  {branch.instagramHref ? (
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 w-full rounded-full border-primary/30 bg-transparent hover:border-primary/50 hover:bg-secondary/60"
                    >
                      <a
                        href={branch.instagramHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Camera className="size-4" />
                        {t("actions.instagram")}
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
                <div className="lg:sticky lg:top-32">
                  <h2 className="flex items-center gap-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
                    <Moon aria-hidden="true" className="size-5 text-primary" />
                    {t("services.title")}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                    {t("services.description")}
                  </p>
                </div>

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
                      <span className="text-base font-medium text-foreground transition-transform duration-300 group-hover:translate-x-1">
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
                  <h2 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    <Camera
                      aria-hidden="true"
                      className="size-5 text-primary"
                    />
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

      <Section
        spacing="none"
        className="relative isolate overflow-hidden bg-image-overlay text-hero-foreground"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/2 size-130 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 size-100 rounded-full bg-primary/20 blur-3xl"
        />

        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-24">
          <div>
            <p className="eyebrow flex items-center gap-3 text-hero-foreground/80">
              <Moon aria-hidden="true" className="size-4" />
              Luna Den Spa
            </p>

            <h2 className="mt-6 max-w-2xl font-heading text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              {t("finalCta.title")}
            </h2>

            <div
              aria-hidden="true"
              className="mt-8 h-px w-24 bg-hero-foreground/35"
            />

            <p className="mt-8 max-w-xl text-base leading-8 text-hero-foreground/80">
              {t("finalCta.description")}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {branch.whatsappHref ? (
                <Button
                  asChild
                  variant="secondary"
                  className="h-12 rounded-full px-7"
                >
                  <ContactLink
                    href={branch.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    {...getConversionTrackingProps(
                      "whatsapp",
                      "branch-detail-final-cta",
                    )}
                  >
                    <MessageCircle className="size-4" />
                    {t("actions.whatsapp")}
                  </ContactLink>
                </Button>
              ) : null}
              {branch.phoneHref ? (
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-hero-foreground/40 bg-transparent px-7 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"
                >
                  <ContactLink
                    href={branch.phoneHref}
                    {...getConversionTrackingProps(
                      "phone",
                      "branch-detail-final-cta",
                    )}
                  >
                    <Phone className="size-4" />
                    {branch.phone}
                  </ContactLink>
                </Button>
              ) : null}
              {branch.instagramHref ? (
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-hero-foreground/40 bg-transparent px-7 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"
                >
                  <a
                    href={branch.instagramHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Camera className="size-4" />
                    {t("actions.instagram")}
                  </a>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div
              aria-hidden="true"
              className="arch-frame absolute inset-0 translate-x-4 translate-y-4 border border-hero-foreground/30"
            />
            <div className="arch-frame relative aspect-4/5 overflow-hidden">
              <Image
                src="/hero/hero.png"
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 1024px) 34vw, 24rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-image-overlay/15" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
