import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { primaryBranch } from "@/data/branches";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/** İlk kare vurgulu olacak şekilde beş fotoğraflık önizleme. */
const previewImages = (primaryBranch.gallery ?? []).slice(0, 5);

const branchHref = {
  pathname: "/subelerimiz/[slug]",
  params: { slug: primaryBranch.slug },
} as const;

/**
 * Şubeden gerçek kareler. Ziyaret öncesi mekânı görmek, spa hizmetlerinde
 * karar vermeyi belirgin şekilde kolaylaştırır.
 */
export function HomeGallery() {
  const t = useTranslations("home.gallery");

  if (previewImages.length === 0) {
    return null;
  }

  return (
    <Section id="mekan" className="border-t border-border bg-secondary/30">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <SectionHeading
            eyebrow={t("badge")}
            title={t("title")}
            description={t("description")}
          />

          <Button
            asChild
            variant="outline"
            className="h-12 shrink-0 self-start rounded-full border-primary/30 bg-transparent px-7 text-sm hover:border-primary/50 hover:bg-secondary/60"
          >
            <Link href={branchHref} prefetch={false}>
              {t("cta")}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid auto-rows-40 grid-cols-2 gap-3 sm:auto-rows-48 sm:gap-4 lg:auto-rows-52 lg:grid-cols-4">
          {previewImages.map((image, index) => {
            const isFeatured = index === 0;

            return (
              <Link
                key={image}
                href={branchHref}
                prefetch={false}
                aria-label={`${t("imageAlt")} ${index + 1}`}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-primary/10 transition duration-300 hover:border-primary/35 hover:shadow-elevated",
                  isFeatured && "col-span-2 row-span-2",
                )}
              >
                <Image
                  src={image}
                  alt={`${primaryBranch.fullName} — ${t("imageAlt")} ${index + 1}`}
                  fill
                  sizes={
                    isFeatured
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, 50vw"
                  }
                  className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-105 motion-reduce:transform-none"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-image-overlay/60 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 left-4 font-heading text-xl font-medium italic text-hero-foreground drop-shadow-sm sm:bottom-4 sm:left-5 sm:text-2xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
