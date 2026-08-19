import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const highlights = ["expert", "calm", "personal"] as const;

export function HomeAbout() {
  const t = useTranslations("home.about");

  return (
    <Section className="bg-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={t("badge")}
              title={t("title")}
              description={t("description")}
            />

            <ol className="mt-10 border-t border-border">
              {highlights.map((key, index) => (
                <li
                  key={key}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-border py-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-heading text-3xl font-medium italic text-primary/60"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-card-title font-semibold leading-snug text-foreground">
                      {t(`highlights.${key}.title`)}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {t(`highlights.${key}.description`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <Button asChild className="mt-9 h-12 rounded-full px-7 text-sm">
              <Link href="/hakkimizda">
                {t("cta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <figure className="relative min-h-96 self-stretch">
            <div className="h-full rounded-3xl border border-primary/20 p-3">
              <div className="relative h-full min-h-90 overflow-hidden rounded-2xl">
                <Image
                  src="/anasayfa/anasayfa-hakkımızda.jpg"
                  alt={t("imageAlt")}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-image-overlay/10"
                />
              </div>
            </div>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
