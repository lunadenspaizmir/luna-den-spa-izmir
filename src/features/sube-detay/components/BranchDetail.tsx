import Image from "next/image";
import {
  ArrowRight,
  Camera,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Branch } from "@/data/branches";

type BranchDetailProps = Readonly<{
  branch: Branch;
}>;

export function BranchDetail({ branch }: BranchDetailProps) {
  const t = useTranslations("branchDetailPage");
  const serviceTranslations = useTranslations("servicesPage.items");
  const heroImage = branch.gallery?.[0] ?? branch.image;
  const gallery = branch.gallery?.slice(1, 7) ?? [];

  return (
    <>
      <Section className="bg-background">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <Badge
                variant="outline"
                className="h-11 rounded-full px-5 text-sm"
              >
                <MapPin className="size-4" />
                {branch.district}, İzmir
              </Badge>

              <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                {branch.fullName}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {t("balcovaEgePark.heroDescription")}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {branch.whatsappHref ? (
                  <Button asChild className="h-11 px-5">
                    <a
                      href={branch.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-conversion="whatsapp"
                      data-conversion-location="branch-detail-hero"
                      data-branch={branch.slug}
                    >
                      <MessageCircle className="size-4" />
                      {t("actions.whatsapp")}
                    </a>
                  </Button>
                ) : null}

                {branch.phoneHref ? (
                  <Button asChild variant="outline" className="h-11 px-5">
                    <a
                      href={branch.phoneHref}
                      data-conversion="phone"
                      data-conversion-location="branch-detail-hero"
                      data-branch={branch.slug}
                    >
                      <Phone className="size-4" />
                      {branch.phone}
                    </a>
                  </Button>
                ) : null}

                {branch.instagramHref ? (
                  <Button asChild variant="outline" className="h-11 px-5">
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

            <Card className="relative min-h-96 rounded-lg p-0">
              <CardContent className="relative min-h-96 overflow-hidden p-0">
                <Image
                  src={heroImage}
                  alt={branch.fullName}
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-secondary/40">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <Card className="rounded-lg lg:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <CardTitle className="text-2xl">
                    {t("location.title")}
                  </CardTitle>
                </div>
                <CardDescription className="mt-3 text-base leading-7">
                  {t("balcovaEgePark.locationDescription")}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {branch.mapsEmbedUrl ? (
                  <div className="overflow-hidden rounded-lg border border-border">
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
                  <Button asChild variant="outline" className="mt-4 h-11 px-5">
                    <a href={branch.mapsUrl} target="_blank" rel="noreferrer">
                      {t("actions.directions")}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                ) : null}
              </CardContent>
            </Card>

            <div className="grid gap-5">
              <Card className="rounded-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="size-5" />
                    </div>
                    <CardTitle className="text-2xl">
                      {t("workingHours.title")}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="grid gap-3">
                  {branch.workingHours?.map((item) => (
                    <div
                      key={item.key}
                      className="rounded-lg border border-border bg-background p-4"
                    >
                      <p className="font-medium text-foreground">
                        {t(`workingHours.${item.key}.label`)}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t(`workingHours.${item.key}.days`)}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-primary">
                        {item.hours}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {t("contact.title")}
                  </CardTitle>
                  <CardDescription className="text-base leading-7">
                    {t("contact.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  {branch.whatsappHref ? (
                    <Button asChild className="h-11 w-full">
                      <a
                        href={branch.whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        data-conversion="whatsapp"
                        data-conversion-location="branch-detail-contact-card"
                        data-branch={branch.slug}
                      >
                        <MessageCircle className="size-4" />
                        {t("actions.whatsapp")}
                      </a>
                    </Button>
                  ) : null}
                  {branch.phoneHref ? (
                    <Button asChild variant="outline" className="h-11 w-full">
                      <a
                        href={branch.phoneHref}
                        data-conversion="phone"
                        data-conversion-location="branch-detail-contact-card"
                        data-branch={branch.slug}
                      >
                        <Phone className="size-4" />
                        {t("actions.call")}
                      </a>
                    </Button>
                  ) : null}
                  {branch.instagramHref ? (
                    <Button asChild variant="outline" className="h-11 w-full">
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
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                {t("services.title")}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                {t("services.description")}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {branch.services?.map((serviceKey) => (
                <Card key={serviceKey} className="rounded-lg">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Check className="size-4" />
                      </div>
                      <CardTitle className="text-base">
                        {serviceTranslations(`${serviceKey}.title`)}
                      </CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {gallery.length > 0 ? (
            <div className="mt-14">
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                {t("gallery.title")}
              </h2>

              <div className="-mx-6 mt-6 flex gap-4 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
                {gallery.map((image, index) => (
                  <Card
                    key={image}
                    className="relative min-h-72 w-[82vw] shrink-0 rounded-lg p-0 sm:w-[44vw] lg:w-auto"
                  >
                    <CardContent className="relative min-h-72 overflow-hidden p-0">
                      <Image
                        src={image}
                        alt={`${branch.fullName} ${t("gallery.imageAlt")} ${
                          index + 1
                        }`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/10" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : null}

          <Card className="mt-14 rounded-lg bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-foreground md:text-3xl">
                {t("finalCta.title")}
              </CardTitle>
              <CardDescription className="max-w-3xl text-base leading-7 text-primary-foreground/75">
                {t("finalCta.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 sm:flex-row">
              {branch.whatsappHref ? (
                <Button asChild variant="secondary" className="h-11 px-5">
                  <a
                    href={branch.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    data-conversion="whatsapp"
                    data-conversion-location="branch-detail-final-cta"
                    data-branch={branch.slug}
                  >
                    <MessageCircle className="size-4" />
                    {t("actions.whatsapp")}
                  </a>
                </Button>
              ) : null}
              {branch.phoneHref ? (
                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-primary-foreground/25 bg-transparent px-5 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a
                    href={branch.phoneHref}
                    data-conversion="phone"
                    data-conversion-location="branch-detail-final-cta"
                    data-branch={branch.slug}
                  >
                    <Phone className="size-4" />
                    {branch.phone}
                  </a>
                </Button>
              ) : null}
              {branch.instagramHref ? (
                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-primary-foreground/25 bg-transparent px-5 text-primary-foreground hover:bg-primary-foreground/10"
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
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  );
}
