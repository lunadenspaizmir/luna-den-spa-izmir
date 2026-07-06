import Image from "next/image";

import { BranchPhoneMenu } from "@/components/layout/controls/branch-phone-menu";
import { LanguageSwitcher } from "@/components/layout/controls/language-switcher";
import { Container } from "@/components/layout/primitives/container";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";

import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/15 bg-background/92 backdrop-blur-md">
      <div aria-hidden="true" className="h-0.5 bg-primary/80" />
      <Container className="grid h-20 grid-cols-[auto_1fr] items-center gap-4 lg:h-24 lg:grid-cols-[auto_1fr_auto]">
        <Link
          href="/"
          prefetch={false}
          aria-label={`${siteConfig.name} anasayfa`}
          className="inline-flex w-fit items-center"
        >
          <Image
            src="/logo/logo.webp"
            alt={siteConfig.name}
            width={1580}
            height={1360}
            priority
            className="h-14 w-auto object-contain lg:h-20"
          />
        </Link>

        <DesktopNav />

        <div className="flex items-center justify-end gap-2">
          <BranchPhoneMenu />
          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher />
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
