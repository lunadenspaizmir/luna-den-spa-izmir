import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
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
    <Section className="bg-secondary/40">
      <Container size="narrow">
        <Card className="rounded-lg bg-card p-0">
          <CardHeader className="px-5 pt-5 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:size-13">
                <MapPin className="size-5 sm:size-6" />
              </div>

              <div>
                <CardTitle className="max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl">
                  {t("title")}
                </CardTitle>
                <CardDescription className="mt-3 max-w-2xl text-base leading-7 md:mt-4 md:text-lg">
                  {t("description")}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {contactOptions.map((option) => (
                <div
                  key={option.key}
                  className="flex gap-3 rounded-lg border border-border bg-background p-4"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <option.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {t(`options.${option.key}.title`)}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {t(`options.${option.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <Button asChild size="lg" className="h-11 w-full px-5 sm:w-fit">
                <Link href="/subelerimiz">
                  {t("cta")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <p className="mt-6 max-w-3xl border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
              {t("note")}
            </p>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
