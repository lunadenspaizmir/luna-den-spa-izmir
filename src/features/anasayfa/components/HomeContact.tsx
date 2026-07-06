import Image from "next/image";
import { ArrowRight, Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function HomeContact() {
  const t = useTranslations("home.contact");

  return (
    <Section className="bg-background">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl">
          <Image
            src="/anasayfa/anasayfa-iletisim.jpg"
            alt=""
            fill
            aria-hidden="true"
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-image-overlay/70" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-2xl border border-hero-foreground/25"
          />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center text-hero-foreground md:py-28">
            <p className="eyebrow flex items-center gap-3 text-hero-foreground/85">
              <Moon aria-hidden="true" className="size-4" />
              {t("primary.eyebrow")}
            </p>

            <h2 className="mt-6 font-heading text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
              {t("primary.title")}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-hero-foreground/80">
              {t("primary.description")}
            </p>

            <Button
              asChild
              variant="secondary"
              className="mt-9 h-12 rounded-full px-8"
            >
              <Link href="/subelerimiz">
                {t("primary.cta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
