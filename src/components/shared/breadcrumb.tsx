import { ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = Readonly<{
  label: string;
  href?: ComponentProps<typeof Link>["href"];
}>;

type BreadcrumbProps = Readonly<{
  items: ReadonlyArray<BreadcrumbItem>;
  tone?: "default" | "dark";
  label: string;
  className?: string;
}>;

export function Breadcrumb({
  items,
  tone = "default",
  label,
  className,
}: BreadcrumbProps) {
  const isDark = tone === "dark";

  return (
    <nav
      aria-label={label}
      className={cn(
        "text-[0.7rem] font-semibold uppercase tracking-[0.16em]",
        isDark ? "text-on-dark-muted" : "text-muted-foreground",
        className,
      )}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? (
              <ChevronRight aria-hidden="true" className="size-3.5 opacity-60" />
            ) : null}

            {item.href ? (
              <Link
                href={item.href}
                prefetch={false}
                className={cn(
                  "inline-flex min-h-touch items-center transition-colors",
                  isDark ? "hover:text-hero-foreground" : "hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={isDark ? "text-hero-foreground" : "text-foreground"}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
