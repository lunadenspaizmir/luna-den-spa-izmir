"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = Readonly<{
  className?: string;
}>;

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function changeLocale(nextLocale: (typeof routing.locales)[number]) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error ---
        { pathname, params },
        { locale: nextLocale }
      );
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
