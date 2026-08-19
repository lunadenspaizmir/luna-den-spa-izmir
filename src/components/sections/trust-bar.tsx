import { CalendarCheck, MapPinned, ShieldCheck, UserRoundCheck } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";

const trustItems = [
  { key: "expert", icon: UserRoundCheck },
  { key: "hygiene", icon: ShieldCheck },
  { key: "appointment", icon: CalendarCheck },
  { key: "access", icon: MapPinned },
] as const;

/**
 * Hero'nun hemen altında dört kısa güven sinyali. Metin yerine ikon ağırlıklı
 * olduğu için sayfayı kalabalıklaştırmadan hızlı bir güven katmanı sağlar.
 */
export function TrustBar() {
  const t = useTranslations("trust");

  return (
    <section aria-label={t("label")} className="bg-background">
      <Container>
        <ul className="grid grid-cols-2 gap-3 border-b border-border py-6 md:grid-cols-4 md:gap-0 md:py-0">
          {trustItems.map(({ key, icon: Icon }) => (
            <li
              key={key}
              className="group flex min-w-0 items-center gap-3 rounded-xl bg-secondary/40 px-3 py-3 text-[0.8rem] font-medium leading-5 text-foreground text-balance md:min-h-24 md:rounded-none md:border-l md:border-border md:bg-transparent md:px-6 md:text-sm md:first:border-l-0 md:first:pl-0"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-card text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:size-10">
                <Icon aria-hidden="true" className="size-4.5" strokeWidth={1.7} />
              </span>
              {t(`items.${key}`)}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
