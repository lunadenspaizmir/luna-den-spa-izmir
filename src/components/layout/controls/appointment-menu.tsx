"use client";

import { ChevronDown, Clock, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  comingSoonBranches,
  getBranchConversionProps,
  primaryBranch,
} from "@/data/branches";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Başlıktaki tek birincil eylem: randevu. WhatsApp ve telefon seçeneklerini
 * tek bir menüde toplar, yakında açılacak şubeleri de bilgi olarak gösterir.
 */
export function AppointmentMenu() {
  const t = useTranslations("header.appointment");
  const tCommon = useTranslations("common");
  const tStatus = useTranslations("branchesPage.status");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          aria-label={t("triggerLabel")}
          className="h-10 gap-2 rounded-full px-4 text-xs font-semibold sm:text-sm"
        >
          <MessageCircle className="size-4" />
          <span className="hidden min-[420px]:inline">{t("trigger")}</span>
          <span className="min-[420px]:hidden">{t("triggerShort")}</span>
          <ChevronDown className="size-3.5 opacity-70" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel>
          <span className="eyebrow block text-primary">{t("label")}</span>
          <span className="mt-1 block font-heading text-lg font-medium tracking-tight text-foreground">
            {primaryBranch.name}
          </span>
          <span className="mt-0.5 block text-sm tabular-nums text-muted-foreground">
            {siteConfig.phone.display}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuItem asChild>
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            {...getBranchConversionProps(
              primaryBranch.slug,
              "whatsapp",
              "header",
            )}
          >
            <MessageCircle className="size-4 text-primary" />
            <span>{tCommon("whatsapp")}</span>
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={siteConfig.phone.href}
            {...getBranchConversionProps(primaryBranch.slug, "phone", "header")}
          >
            <Phone className="size-4 text-primary" />
            <span>{tCommon("call")}</span>
          </a>
        </DropdownMenuItem>

        {comingSoonBranches.length > 0 ? (
          <>
            <DropdownMenuSeparator />
            {comingSoonBranches.map((branch) => (
              <DropdownMenuItem key={branch.slug} disabled>
                <Clock className="size-4" />
                <span className="flex-1">{branch.name}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                  {tStatus("comingSoon")}
                </span>
              </DropdownMenuItem>
            ))}
          </>
        ) : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
