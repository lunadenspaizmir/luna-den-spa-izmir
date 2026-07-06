import { ArrowRight, Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import { BranchContactList } from "@/features/subelerimiz/components/BranchContactList";
import { Link } from "@/i18n/navigation";

export function HomeContact() {
  const t = useTranslations("home.contact");

  return (
    <Section className="border-t border-border bg-secondary/30">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow flex items-center gap-3 text-primary">
              <Moon aria-hidden="true" className="size-4" />
              {t("primary.eyebrow")}
            </p>

            <h2 className="mt-6 font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl">
              {t("primary.title")}
            </h2>

            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {t("primary.description")}
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="h-12 w-fit rounded-full border-primary/30 bg-transparent px-6 hover:border-primary/50 hover:bg-secondary/60"
          >
            <Link href="/subelerimiz">
              {t("primary.cta")}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <BranchContactList
          conversionLocation="home-contact"
          className="mt-12"
        />
      </Container>
    </Section>
  );
}
