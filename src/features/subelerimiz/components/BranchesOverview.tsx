import Image from "next/image";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { branches } from "@/data/branches";
import { Link } from "@/i18n/navigation";

export function BranchesOverview() {
  const t = useTranslations("branchesPage");

  return (
    <Section className="bg-background">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {branches.map((branch) => {
            const isOpen = branch.status === "open";
            const branchHref = {
              pathname: "/subelerimiz/[slug]",
              params: { slug: branch.slug },
            } as const;
            const branchCard = (
              <Card className="h-full rounded-lg p-0 transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative min-h-72 overflow-hidden">
                  {branch.image ? (
                    <>
                      <Image
                        src={branch.image}
                        alt={t(`items.${branch.translationKey}.imageAlt`)}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/10" />
                    </>
                  ) : (
                    <div className="flex min-h-72 items-center justify-center bg-muted/60 text-muted-foreground">
                      <MapPin className="size-10" />
                    </div>
                  )}
                  <Badge
                    variant={isOpen ? "default" : "secondary"}
                    className="absolute left-4 top-4 h-8 px-3"
                  >
                    {isOpen ? t("status.open") : t("status.comingSoon")}
                  </Badge>
                </div>

                <CardHeader className="px-5 pt-5">
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {isOpen ? (
                        <MapPin className="size-5" />
                      ) : (
                        <Clock className="size-5" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{branch.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {branch.district}, İzmir
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-5">
                  <p className="text-base leading-7 text-muted-foreground">
                    {t(`items.${branch.translationKey}.description`)}
                  </p>
                </CardContent>

                <CardFooter className="mt-auto border-t bg-muted/30 p-5">
                  {isOpen ? (
                    <span
                      className={buttonVariants({
                        className: "h-11 w-full px-5",
                      })}
                    >
                      {t("cta.open")}
                      <ArrowRight className="size-4" />
                    </span>
                  ) : (
                    <Button
                      disabled
                      variant="secondary"
                      className="h-11 w-full"
                    >
                      {t("cta.comingSoon")}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );

            return isOpen ? (
              <Link
                key={branch.slug}
                href={branchHref}
                prefetch={false}
                className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
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
