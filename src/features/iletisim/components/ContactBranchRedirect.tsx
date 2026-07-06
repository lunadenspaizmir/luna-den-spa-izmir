import { ArrowRight, MessageCircle, Moon, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const contactOptions = [
  {
    key: "whatsapp",
    icon: MessageCircle,
  },
  {
    key: "phone",
    icon: Phone,
  },
] as const;

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

        <div className="mx-auto mt-12 max-w-2xl border-t border-border">
          {contactOptions.map((option) => (
            <div
              key={option.key}
              className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-border py-6"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-primary/25 text-primary">
                <option.icon className="size-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {t(`options.${option.key}.title`)}
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {t(`options.${option.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="h-12 rounded-full px-8">
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
