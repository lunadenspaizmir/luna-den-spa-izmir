import Image from "next/image";

import { LanguageSwitcher } from "@/components/layout/controls/language-switcher";
import { ThemeToggle } from "@/components/layout/controls/theme-toggle";
import { Container } from "@/components/layout/primitives/container";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";

import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <Container className="grid h-24 grid-cols-[auto_1fr] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
        <Link
          href="/"
          aria-label={`${siteConfig.name} anasayfa`}
          className="inline-flex w-fit items-center"
        >
          <Image
            src="/logo/luna-den-spa-logo.png"
            alt={siteConfig.name}
            width={260}
            height={77}
            priority
            className="h-auto w-40 object-contain sm:w-52 lg:w-60"
          />
        </Link>

        <DesktopNav />

        <div className="flex items-center justify-end gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
