import Image from "next/image";
import { ArrowRight, Building2, CalendarCheck, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";

const branches = [
  {
    key: "location",
    icon: MapPin,
  },
  {
    key: "reservation",
    icon: CalendarCheck,
  },
  {
    key: "experience",
    icon: Building2,
  },
] as const;

export function HomeBranches() {
  const t = useTranslations("home.branches");

  return (
    <Section className="bg-background">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Card className="relative min-h-104 rounded-lg p-0">
            <CardContent className="relative min-h-104 overflow-hidden p-0">
              <Image
                src="/anasayfa/anasayfa-hizmetlerimiz.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-image-overlay/10" />
            </CardContent>
          </Card>

          <div>
            <Badge
              asChild
              variant="outline"
              className="h-14 rounded-full border-primary/25 bg-background px-7 text-lg font-medium text-foreground shadow-sm transition hover:border-primary/45 hover:bg-secondary"
            >
              <Link href="/subelerimiz">{t("badge")}</Link>
            </Badge>

            <p className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              {t("intro")}
            </p>

            <Separator className="my-8" />

            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              {t("title")}
            </h2>

            <div className="mt-5 grid gap-5">
              {branches.map((branch) => (
                <div key={branch.key} className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <branch.icon className="size-5" />
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground">
                      {t(`items.${branch.key}.title`)}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {t(`items.${branch.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="mt-8 h-11 px-5">
              <Link href="/subelerimiz">
                {t("detail")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
