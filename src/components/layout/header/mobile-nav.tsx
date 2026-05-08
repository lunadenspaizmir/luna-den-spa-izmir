"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/layout/controls/language-switcher";
import { ThemeToggle } from "@/components/layout/controls/theme-toggle";
import { Container } from "@/components/layout/primitives/container";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/data/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const mobileNavigationItems = navigationItems.filter((item) => item.href !== "/");

export function MobileNav() {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="lg:hidden"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={cn(
          "absolute inset-x-0 top-full grid border-b border-border bg-background/95 shadow-md backdrop-blur transition-[grid-template-rows,opacity,transform] duration-300 ease-out lg:hidden",
          open
            ? "pointer-events-auto grid-rows-[1fr] translate-y-0 opacity-100"
            : "pointer-events-none grid-rows-[0fr] -translate-y-2 opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <Container className="py-3">
            <nav aria-label="Mobil menü">
              <ul className="flex flex-col [&>li+li]:border-t [&>li+li]:border-border/70">
                {mobileNavigationItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex h-12 items-center justify-center rounded-md px-3 text-center text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
                          isActive &&
                            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                        )}
                      >
                        {t(item.titleKey)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-3 flex items-center justify-center gap-3 border-t border-border/70 pt-3">
              <LanguageSwitcher className="justify-center" />
              <ThemeToggle />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
