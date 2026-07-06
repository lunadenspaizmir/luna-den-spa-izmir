import {
  ArrowUpRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  branches,
  getBranchConversionProps,
  type Branch,
} from "@/data/branches";
import { cn } from "@/lib/utils";

type BranchContactListProps = Readonly<{
  conversionLocation: string;
  className?: string;
}>;

export function BranchContactList({
  conversionLocation,
  className,
}: BranchContactListProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        branches.length > 1 ? "md:grid-cols-2" : "",
        className,
      )}
    >
      {branches.map((branch) =>
        branch.status === "open" ? (
          <OpenBranchCard
            key={branch.slug}
            branch={branch}
            conversionLocation={conversionLocation}
          />
        ) : (
          <ComingSoonBranchCard key={branch.slug} branch={branch} />
        ),
      )}
    </div>
  );
}

type OpenBranchCardProps = Readonly<{
  branch: Branch;
  conversionLocation: string;
}>;

function OpenBranchCard({ branch, conversionLocation }: OpenBranchCardProps) {
  const t = useTranslations("branchDetailPage");
  const tStatus = useTranslations("branchesPage.status");

  return (
    <div className="flex flex-col rounded-3xl border border-primary/15 bg-card p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow flex items-center gap-1.5 text-primary">
            <MapPin className="size-3.5" />
            {branch.district}, İzmir
          </p>
          <h3 className="mt-2 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            {branch.name}
          </h3>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-secondary/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          {tStatus("open")}
        </span>
      </div>

      {branch.phone ? (
        <a
          href={branch.phoneHref}
          className="mt-5 inline-flex w-fit items-center gap-2 font-heading text-2xl font-medium tabular-nums text-foreground transition-colors hover:text-primary md:text-3xl"
          {...getBranchConversionProps(
            branch.slug,
            "phone",
            conversionLocation,
          )}
        >
          <Phone className="size-5 text-primary" />
          {branch.phone}
        </a>
      ) : null}

      {branch.workingHours?.length ? (
        <div className="mt-5 border-t border-border pt-4">
          <p className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Clock className="size-4 text-primary" />
            {t("workingHours.title")}
          </p>
          <div className="mt-2 grid gap-1.5">
            {branch.workingHours.map((item) => (
              <div
                key={item.key}
                className="flex items-baseline justify-between gap-4 text-sm"
              >
                <span className="text-muted-foreground">
                  {t(`workingHours.${item.key}.label`)}
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
        {branch.whatsappHref ? (
          <Button asChild className="h-11 rounded-full px-5">
            <a
              href={branch.whatsappHref}
              target="_blank"
              rel="noreferrer"
              {...getBranchConversionProps(
                branch.slug,
                "whatsapp",
                conversionLocation,
              )}
            >
              <MessageCircle className="size-4" />
              {t("actions.whatsapp")}
            </a>
          </Button>
        ) : null}

        {branch.phoneHref ? (
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-full border-primary/30 bg-transparent px-5 hover:border-primary/50 hover:bg-secondary/60"
          >
            <a
              href={branch.phoneHref}
              {...getBranchConversionProps(
                branch.slug,
                "phone",
                conversionLocation,
              )}
            >
              <Phone className="size-4" />
              {t("actions.call")}
            </a>
          </Button>
        ) : null}
      </div>

      {branch.mapsUrl ? (
        <a
          href={branch.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {t("actions.directions")}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : null}
    </div>
  );
}

function ComingSoonBranchCard({ branch }: Readonly<{ branch: Branch }>) {
  const tStatus = useTranslations("branchesPage.status");
  const tItems = useTranslations("branchesPage.items");

  return (
    <div className="flex flex-col rounded-3xl border border-dashed border-primary/20 bg-secondary/25 p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="size-3.5" />
            {branch.district}, İzmir
          </p>
          <h3 className="mt-2 font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            {branch.name}
          </h3>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          <Clock className="size-3" />
          {tStatus("comingSoon")}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        {tItems(`${branch.translationKey}.description`)}
      </p>
    </div>
  );
}
