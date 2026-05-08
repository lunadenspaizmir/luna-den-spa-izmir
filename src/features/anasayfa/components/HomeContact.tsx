import Image from "next/image";
import { ArrowRight, Handshake, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

export function HomeContact() {
  const t = useTranslations("home.contact");

  return (
    <Section className="bg-secondary/40">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <Card className="relative rounded-lg bg-card">
            <Image
              src="/anasayfa/iletisim.jpg"
              alt=""
              fill
              aria-hidden="true"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="scale-105 object-cover opacity-70 blur-[1px] dark:opacity-45"
            />
            <div className="absolute inset-0 bg-linear-to-r from-card/90 via-card/65 to-card/30 dark:from-background/90 dark:via-background/70 dark:to-background/35" />
            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />

            <CardHeader className="relative z-10 gap-4 p-6 md:p-8">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                  {t("primary.eyebrow")}
                </p>
                <CardTitle className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                  {t("primary.title")}
                </CardTitle>
                <CardDescription className="mt-4 max-w-2xl text-base leading-7">
                  {t("primary.description")}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 px-6 pb-6 md:px-8 md:pb-8">
              <Button asChild className="h-11 px-5">
                <Link href="/subelerimiz">
                  {t("primary.cta")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-lg bg-primary text-primary-foreground">
            <CardHeader className="gap-4 p-6 md:p-8">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-foreground/15 text-primary-foreground">
                <Handshake className="size-5" />
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary-foreground/75">
                  {t("secondary.eyebrow")}
                </p>
                <CardTitle className="mt-3 text-2xl font-semibold leading-tight text-primary-foreground md:text-3xl">
                  {t("secondary.title")}
                </CardTitle>
                <CardDescription className="mt-4 leading-6 text-primary-foreground/75">
                  {t("secondary.description")}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-6 md:px-8 md:pb-8">
              <Button
                asChild
                variant="secondary"
                className="h-11 bg-primary-foreground px-5 text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/iletisim">
                  {t("secondary.cta")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
