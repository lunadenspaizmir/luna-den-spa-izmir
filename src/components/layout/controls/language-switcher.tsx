"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = Readonly<{
  className?: string;
}>;

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function changeLocale(nextLocale: (typeof routing.locales)[number]) {
    startTransition(() => {
      window.location.assign(getLocalizedPath(window.location.href, nextLocale));
    });
  }

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-border bg-background p-1",
        className
      )}
    >
      {routing.locales.map((item) => (
        <Button
          key={item}
          type="button"
          variant={item === locale ? "default" : "ghost"}
          size="xs"
          disabled={isPending || item === locale}
          onClick={() => changeLocale(item)}
          className="h-7 min-w-10 rounded-full px-3 text-xs font-medium uppercase disabled:opacity-100"
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

function getLocalizedPath(
  href: string,
  nextLocale: (typeof routing.locales)[number]
) {
  const url = new URL(href);
  const pathname = normalizePathname(url.pathname);
  const nextPathname = mapPathnameToLocale(pathname, nextLocale);

  return `${nextPathname}${url.search}${url.hash}`;
}

function normalizePathname(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

function stripDefaultLocalePrefix(pathname: string) {
  if (pathname === "/tr") {
    return "/";
  }

  if (pathname.startsWith("/tr/")) {
    return pathname.slice(3) || "/";
  }

  return pathname;
}

function mapPathnameToLocale(
  pathname: string,
  nextLocale: (typeof routing.locales)[number]
) {
  const normalizedPathname = stripDefaultLocalePrefix(pathname);

  const staticRoutes = [
    ["/", "/en"],
    ["/hakkimizda", "/en/about"],
    ["/hizmetlerimiz", "/en/services"],
    ["/subelerimiz", "/en/branches"],
    ["/iletisim", "/en/contact"],
  ] as const;

  for (const [trPathname, enPathname] of staticRoutes) {
    if (
      normalizedPathname === trPathname ||
      normalizedPathname === enPathname ||
      normalizedPathname === enPathname.replace("/about", "/hakkimizda") ||
      normalizedPathname === enPathname.replace("/services", "/hizmetlerimiz") ||
      normalizedPathname === enPathname.replace("/branches", "/subelerimiz") ||
      normalizedPathname === enPathname.replace("/contact", "/iletisim")
    ) {
      return nextLocale === "tr" ? trPathname : enPathname;
    }
  }

  const branchSlug = getBranchSlug(normalizedPathname);

  if (branchSlug) {
    return nextLocale === "tr"
      ? `/subelerimiz/${branchSlug}`
      : `/en/branches/${branchSlug}`;
  }

  return nextLocale === "tr" ? "/" : "/en";
}

function getBranchSlug(pathname: string) {
  const prefixes = [
    "/subelerimiz/",
    "/en/branches/",
    "/en/subelerimiz/",
  ] as const;

  for (const prefix of prefixes) {
    if (!pathname.startsWith(prefix)) {
      continue;
    }

    const slug = pathname.slice(prefix.length).split("/")[0];

    if (slug) {
      return slug;
    }
  }

  return null;
}
