"use client";

import { useTranslations } from "next-intl";

import { navigationItems } from "@/data/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const t = useTranslations("navigation");
  const pathname = usePathname();

  return (
    <nav
      aria-label="Ana menü"
      className="hidden items-center justify-center justify-self-center lg:flex"
    >
      <ul className="flex items-center gap-8">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                prefetch={false}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative inline-flex h-10 items-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-primary hover:text-primary"
                )}
              >
                {t(item.titleKey)}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
