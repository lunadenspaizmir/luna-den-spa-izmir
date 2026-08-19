import Image from "next/image";
import { Camera, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import {
  comingSoonBranches,
  getBranchConversionProps,
  primaryBranch,
} from "@/data/branches";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const footerNavigationItems = navigationItems.filter(
  (item) => item.href !== "/",
);

/** Öne çıkan hizmetler; tamamı hizmetler sayfasında listelenir. */
const footerServiceKeys = [
  "swedish",
  "bali",
  "deepTissue",
  "aromatherapy",
  "sultan",
] as const;

export function Footer() {
  const tNavigation = useTranslations("navigation");
  const tFooter = useTranslations("footer");
  const tCommon = useTranslations("common");
  const tServices = useTranslations("servicesPage.items");
  const tHours = useTranslations("branchDetailPage.workingHours");
  const tStatus = useTranslations("branchesPage.status");

  return (
    <footer className="bg-primary text-hero-foreground">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr] lg:py-20">
          <div className="max-w-sm">
            <Link
              href="/"
              prefetch={false}
              aria-label={tFooter("homeLink", { name: siteConfig.name })}
              className="inline-flex w-fit items-center"
            >
              <Image
                src="/logo/logo.webp"
                alt={siteConfig.name}
                width={1580}
                height={1360}
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 text-sm leading-7 text-on-dark-muted">
              {tFooter("description")}
            </p>

            <a
              href={siteConfig.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-touch items-center gap-2 text-sm font-medium text-hero-foreground transition-opacity hover:opacity-80"
            >
              <Camera aria-hidden="true" className="size-4" />
              {tCommon("instagram")}
            </a>
          </div>

          <nav aria-label={tFooter("servicesTitle")}>
            <h2 className="eyebrow text-hero-foreground">
              {tFooter("servicesTitle")}
            </h2>
            <ul className="mt-5 grid gap-3 text-sm text-on-dark-muted">
              {footerServiceKeys.map((key) => (
                <li key={key}>
                  <Link
                    href="/hizmetlerimiz"
                    prefetch={false}
                    className="inline-flex min-h-touch items-center transition-colors hover:text-hero-foreground"
                  >
                    {tServices(`${key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={tFooter("quickLinks")}>
            <h2 className="eyebrow text-hero-foreground">
              {tFooter("quickLinks")}
            </h2>
            <ul className="mt-5 grid gap-3 text-sm text-on-dark-muted">
              {footerNavigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="inline-flex min-h-touch items-center transition-colors hover:text-hero-foreground"
                  >
                    {tNavigation(item.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-hero-foreground">
              {tFooter("contactTitle")}
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-on-dark-muted">
              <li>
                <a
                  href={siteConfig.phone.href}
                  className="flex min-h-touch items-center gap-3 tabular-nums transition-colors hover:text-hero-foreground"
                  {...getBranchConversionProps(
                    primaryBranch.slug,
                    "phone",
                    "footer",
                  )}
                >
                  <Phone
                    aria-hidden="true"
                    className="size-4 shrink-0 text-hero-foreground"
                  />
                  {siteConfig.phone.display}
                </a>
              </li>

              <li>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-touch items-center gap-3 transition-colors hover:text-hero-foreground"
                  {...getBranchConversionProps(
                    primaryBranch.slug,
                    "whatsapp",
                    "footer",
                  )}
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="size-4 shrink-0 text-hero-foreground"
                  />
                  {tCommon("whatsapp")}
                </a>
              </li>

              <li>
                <a
                  href={siteConfig.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-touch gap-3 leading-6 transition-colors hover:text-hero-foreground"
                >
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-hero-foreground"
                  />
                  {siteConfig.address}
                </a>
              </li>

              <li className="flex gap-3 leading-6">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-hero-foreground"
                />
                <span className="grid gap-1">
                  {primaryBranch.workingHours?.map((item) => (
                    <span key={item.key} className="tabular-nums">
                      {tHours(`${item.key}.label`)}: {item.hours}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-on-dark-border py-6 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}.{" "}
            {tFooter("rights")}
          </p>

          {comingSoonBranches.length > 0 ? (
            <p className="uppercase tracking-[0.14em]">
              {tStatus("comingSoon")}:{" "}
              {comingSoonBranches.map((branch) => branch.name).join(" · ")}
            </p>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
