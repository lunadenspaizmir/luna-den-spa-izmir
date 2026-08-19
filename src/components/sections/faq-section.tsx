import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

type FaqSectionProps = Readonly<{
  className?: string;
}>;

/**
 * Randevu öncesi en sık sorulan sorular. Aynı liste `FaqPageJsonLd` ile
 * FAQPage yapısal verisini de besler.
 */
export function FaqSection({ className }: FaqSectionProps) {
  const t = useTranslations("faq");

  return (
    <Section id="sss" className={cn("bg-background", className)}>
      <Container className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <SectionHeading
          eyebrow={t("badge")}
          title={t("title")}
          description={t("description")}
          className="lg:sticky lg:top-32 lg:self-start"
        />

        <Accordion
          type="multiple"
          className="border-y border-border [&>[data-slot=accordion-item]]:border-b"
        >
          {faqItems.map((key) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger className="min-h-touch py-6 text-base font-semibold text-foreground md:text-lg">
                {t(`items.${key}.question`)}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pr-6 pb-6 text-sm leading-7 text-muted-foreground md:text-base">
                {t(`items.${key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
