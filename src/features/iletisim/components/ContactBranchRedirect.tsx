import { ArrowRight, Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import { BranchContactList } from "@/features/subelerimiz/components/BranchContactList";
import { Link } from "@/i18n/navigation";

export function ContactBranchRedirect() {
  const t = useTranslations("contactPage");

  return (
    <Section
      spacing="none"
      className="bg-background pt-8 pb-20 md:pt-12 md:pb-28 lg:pt-16"
    >
      <Container size="narrow">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3 text-primary">
            <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
            <Moon aria-hidden="true" className="size-4" />
            <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>

        <BranchContactList
          conversionLocation="contact-page"
          className="mt-12"
        />

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-primary/30 bg-transparent px-7 hover:border-primary/50 hover:bg-secondary/60"
          >
            <Link href="/subelerimiz">
              {t("cta")}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
          {t("note")}
        </p>
      </Container>
    </Section>
  );
}
