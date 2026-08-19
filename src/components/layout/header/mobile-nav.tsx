"use client";

import { MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/controls/language-switcher";
import { Container } from "@/components/layout/primitives/container";
import { Button } from "@/components/ui/button";
import { getBranchConversionProps, primaryBranch } from "@/data/branches";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function MobileNav() {
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");
  const tHeader = useTranslations("header");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    const activeElement = document.activeElement;

    if (
      activeElement instanceof HTMLElement &&
      menuRef.current?.contains(activeElement)
    ) {
      activeElement.blur();
    }

    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (
        triggerRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }

      closeMenu();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, open]);

  return (
    <>
      <div ref={triggerRef} className="lg:hidden">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-touch rounded-full border-primary/30"
          aria-label={open ? tHeader("menuClose") : tHeader("menuOpen")}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <div
        ref={menuRef}
        id="mobile-navigation"
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full z-40 grid border-b border-border bg-background shadow-elevated transition-[grid-template-rows,opacity,transform] duration-300 ease-out lg:hidden",
          open
            ? "pointer-events-auto grid-rows-[1fr] translate-y-0 opacity-100"
            : "pointer-events-none grid-rows-[0fr] -translate-y-2 opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <Container className="py-4">
            <nav aria-label={tHeader("mobileMenuLabel")}>
              <ul className="flex flex-col [&>li+li]:border-t [&>li+li]:border-border/70">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        prefetch={false}
                        aria-current={isActive ? "page" : undefined}
                        onClick={closeMenu}
                        className={cn(
                          "flex min-h-touch items-center rounded-md px-3 py-3 font-heading text-2xl font-medium text-foreground transition hover:bg-secondary/50 hover:text-primary",
                          isActive && "text-primary",
                        )}
                      >
                        {t(item.titleKey)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-4 grid gap-2.5 border-t border-border/70 pt-4 sm:grid-cols-2">
              <Button asChild className="h-12 rounded-full text-sm">
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  {...getBranchConversionProps(
                    primaryBranch.slug,
                    "whatsapp",
                    "mobile-menu",
                  )}
                >
                  <MessageCircle className="size-4" />
                  {tCommon("whatsapp")}
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-primary/30 text-sm"
              >
                <a
                  href={siteConfig.phone.href}
                  onClick={closeMenu}
                  {...getBranchConversionProps(
                    primaryBranch.slug,
                    "phone",
                    "mobile-menu",
                  )}
                >
                  <Phone className="size-4" />
                  {siteConfig.phone.display}
                </a>
              </Button>
            </div>

            <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-muted-foreground">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
              {siteConfig.address}
            </p>

            <div className="mt-4 flex items-center justify-center gap-3 border-t border-border/70 pt-4">
              <LanguageSwitcher className="justify-center" />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
