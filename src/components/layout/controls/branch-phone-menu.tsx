"use client";

import { ChevronDown, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
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
  branches,
  getBranchConversionProps,
  openBranches,
} from "@/data/branches";

export function BranchPhoneMenu() {
  const t = useTranslations("header.phone");

  const callableBranches = openBranches.filter((branch) => branch.phoneHref);

  if (callableBranches.length === 0) {
    return null;
  }

  const singleBranch =
    callableBranches.length === 1 ? callableBranches[0] : null;

  const upcomingBranches = branches.filter(
    (branch) => branch.status === "comingSoon",
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          aria-label={t("triggerLabel")}
          className="h-10 gap-2 rounded-full border-primary/30 bg-transparent px-3.5 text-xs font-medium hover:border-primary/50 hover:bg-secondary/60 sm:text-sm lg:px-4"
        >
          <Phone className="size-4 text-primary" />
          <span className="hidden tabular-nums min-[420px]:inline">
            {singleBranch ? singleBranch.phone : t("appointment")}
          </span>
          <ChevronDown className="size-3.5 opacity-60" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {callableBranches.map((branch, index) => (
          <div key={branch.slug}>
            {index > 0 ? <DropdownMenuSeparator /> : null}

            <DropdownMenuLabel>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                <MapPin className="size-3.5" />
                {branch.district}
              </span>
              <span className="mt-0.5 block font-heading text-lg font-medium tracking-tight text-foreground">
                {branch.name}
              </span>
              {branch.phone ? (
                <span className="mt-0.5 block text-sm tabular-nums text-muted-foreground">
                  {branch.phone}
                </span>
              ) : null}
            </DropdownMenuLabel>

            {branch.whatsappHref ? (
              <DropdownMenuItem asChild>
                <a
                  href={branch.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  {...getBranchConversionProps(
                    branch.slug,
                    "whatsapp",
                    "header",
                  )}
                >
                  <MessageCircle className="size-4 text-primary" />
                  <span>{t("whatsapp")}</span>
                </a>
              </DropdownMenuItem>
            ) : null}

            {branch.phoneHref ? (
              <DropdownMenuItem asChild>
                <a
                  href={branch.phoneHref}
                  {...getBranchConversionProps(branch.slug, "phone", "header")}
                >
                  <Phone className="size-4 text-primary" />
                  <span>{t("call")}</span>
                </a>
              </DropdownMenuItem>
            ) : null}
          </div>
        ))}

        {upcomingBranches.length > 0 ? (
          <>
            <DropdownMenuSeparator />
            {upcomingBranches.map((branch) => (
              <DropdownMenuItem key={branch.slug} disabled>
                <Clock className="size-4" />
                <span className="flex-1">{branch.name}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                  {t("comingSoon")}
                </span>
              </DropdownMenuItem>
            ))}
          </>
        ) : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
