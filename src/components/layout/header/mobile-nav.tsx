"use client";

import { MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/controls/language-switcher";
import { Container } from "@/components/layout/primitives/container";
import { Button } from "@/components/ui/button";
import { getBranchConversionProps, openBranches } from "@/data/branches";
import { navigationItems } from "@/data/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const t = useTranslations("navigation");
  const tPhone = useTranslations("header.phone");
  const pathname = usePathname();
  const callableBranches = openBranches.filter((branch) => branch.phoneHref);
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
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </div>

      <div
        ref={menuRef}
        id="mobile-navigation"
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full z-40 grid border-b border-border bg-background/95 shadow-md backdrop-blur transition-[grid-template-rows,opacity,transform] duration-300 ease-out lg:hidden",
          open
            ? "pointer-events-auto grid-rows-[1fr] translate-y-0 opacity-100"
            : "pointer-events-none grid-rows-[0fr] -translate-y-2 opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <Container className="py-3">
            <nav aria-label="Mobil menü">
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
                          "flex h-12 items-center justify-center rounded-md px-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition hover:bg-muted hover:text-foreground",
                          isActive && "text-primary hover:text-primary",
                        )}
                      >
                        {t(item.titleKey)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {callableBranches.length > 0 ? (
              <div className="mt-3 border-t border-border/70 pt-4">
                <p className="eyebrow px-1 text-primary">
                  {tPhone("appointment")}
                </p>

                <div className="mt-3 grid gap-4">
                  {callableBranches.map((branch) => (
                    <div key={branch.slug}>
                      <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                        <MapPin className="size-3.5 text-primary" />
                        {branch.name}
                      </p>

                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {branch.whatsappHref ? (
                          <Button
                            asChild
                            size="sm"
                            className="h-10 rounded-full"
                          >
                            <a
                              href={branch.whatsappHref}
                              target="_blank"
                              rel="noreferrer"
                              onClick={closeMenu}
                              {...getBranchConversionProps(
                                branch.slug,
                                "whatsapp",
                                "mobile-menu",
                              )}
                            >
                              <MessageCircle className="size-4" />
                              {tPhone("whatsapp")}
                            </a>
                          </Button>
                        ) : null}

                        {branch.phoneHref ? (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="h-10 rounded-full border-primary/30"
                          >
                            <a
                              href={branch.phoneHref}
                              onClick={closeMenu}
                              {...getBranchConversionProps(
                                branch.slug,
                                "phone",
                                "mobile-menu",
                              )}
                            >
                              <Phone className="size-4" />
                              {tPhone("call")}
                            </a>
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-4 flex items-center justify-center gap-3 border-t border-border/70 pt-4">
              <LanguageSwitcher className="justify-center" />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
