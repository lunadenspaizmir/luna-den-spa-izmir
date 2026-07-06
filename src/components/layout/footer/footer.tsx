import Image from "next/image";
import { Moon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";

const footerNavigationItems = navigationItems.filter((item) => item.href !== "/");

export function Footer() {
  const tNavigation = useTranslations("navigation");
  const tFooter = useTranslations("footer");

  return (
    <footer className="border-t border-primary/15 bg-background">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-start">
          <div className="max-w-xl">
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
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {tFooter("description")}
            </p>
          </div>

          <nav aria-label="Footer menü" className="md:justify-self-end">
            <h2 className="eyebrow text-primary">{tFooter("quickLinks")}</h2>
            <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
              {footerNavigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="inline-flex items-center gap-2 transition hover:text-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-4 bg-primary/40"
                    />
                    {tNavigation(item.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-6 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <p>{tFooter("copyright")}</p>
          <Moon aria-hidden="true" className="size-4 text-primary/50" />
        </div>
      </Container>
    </footer>
  );
}
