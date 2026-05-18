import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
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
        <Card className="relative overflow-hidden rounded-lg bg-card">
          <Image
            src="/anasayfa/anasayfa-iletisim.jpg"
            alt=""
            fill
            aria-hidden="true"
            sizes="100vw"
            className="scale-105 object-cover opacity-70 blur-[1px]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-card/95 via-card/75 to-card/35" />
          <div className="absolute inset-0 bg-primary/5" />

          <div className="relative z-10 grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <CardHeader className="gap-4 p-0">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                  {t("primary.eyebrow")}
                </p>
                <CardTitle className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                  {t("primary.title")}
                </CardTitle>
                <CardDescription className="mt-4 max-w-2xl text-base leading-7">
                  {t("primary.description")}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <Button asChild className="h-11 px-5">
                <Link href="/subelerimiz">
                  {t("primary.cta")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
