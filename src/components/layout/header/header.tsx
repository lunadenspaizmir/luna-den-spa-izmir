import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { AppointmentMenu } from "@/components/layout/controls/appointment-menu";
import { LanguageSwitcher } from "@/components/layout/controls/language-switcher";
import { Container } from "@/components/layout/primitives/container";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";

import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-40 bg-background/92 shadow-card backdrop-blur-md">
      {/* Konum ve telefonu her sayfada görünür kılan üst şerit. */}
      <div className="hidden bg-primary text-hero-foreground lg:block">
        <Container className="flex min-h-9 items-center justify-between gap-6 text-[0.68rem] font-semibold uppercase tracking-[0.14em]">
          <p className="flex items-center gap-2 text-on-dark-muted">
            <MapPin aria-hidden="true" className="size-3.5" />
            {siteConfig.locationLabel}
          </p>

          <a
            href={siteConfig.phone.href}
            className="flex min-h-9 items-center gap-2 tabular-nums transition-opacity hover:opacity-80"
          >
            <Phone aria-hidden="true" className="size-3.5" />
            {siteConfig.phone.display}
          </a>
        </Container>
      </div>

      <div className="border-b border-primary/15">
        <Container className="grid h-20 grid-cols-[auto_1fr] items-center gap-4 lg:h-24 lg:grid-cols-[auto_1fr_auto]">
          <Link
            href="/"
            prefetch={false}
            aria-label={t("homeLink", { name: siteConfig.name })}
            className="inline-flex w-fit items-center"
          >
            <Image
              src="/logo/logo.webp"
              alt={siteConfig.name}
              width={1580}
              height={1360}
              priority
              className="h-14 w-auto object-contain lg:h-18"
            />
          </Link>

          <DesktopNav />

          <div className="flex items-center justify-end gap-2">
            <AppointmentMenu />
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageSwitcher />
            </div>
            <MobileNav />
          </div>
        </Container>
      </div>
    </header>
  );
}
