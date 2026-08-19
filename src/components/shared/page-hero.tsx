import Image from "next/image";
import type { ReactNode } from "react";

import { Breadcrumb, type BreadcrumbItem } from "@/components/shared/breadcrumb";
import { Container } from "@/components/layout/primitives/container";

type PageHeroProps = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: ReadonlyArray<BreadcrumbItem>;
  breadcrumbLabel: string;
  image?: Readonly<{ src: string; alt: string }>;
  actions?: ReactNode;
}>;

/**
 * İç sayfaların ortak giriş bloğu: koyu marka panelinde sayfa yolu, başlık
 * ve açıklama; yanında görsel. Tüm sayfalarda aynı yükseklik ve ritim.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  breadcrumbLabel,
  image,
  actions,
}: PageHeroProps) {
  return (
    <section className="bg-background pt-5 pb-10 md:pt-8 md:pb-14">
      <Container>
        <div className="grid overflow-hidden rounded-3xl bg-primary text-hero-foreground lg:min-h-104 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
          <div className="relative flex min-w-0 flex-col justify-center px-6 py-12 motion-safe:animate-rise-in sm:px-10 md:py-16 lg:px-12">
            <span
              aria-hidden="true"
              className="absolute top-0 left-6 h-1 w-20 bg-accent sm:left-10 lg:left-12"
            />

            <Breadcrumb
              items={breadcrumbs}
              tone="dark"
              label={breadcrumbLabel}
            />

            <p className="eyebrow mt-7 text-on-dark-muted">{eyebrow}</p>

            <h1 className="mt-4 max-w-2xl text-page-title font-semibold leading-[var(--line-height-display)] tracking-tight text-hero-foreground">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-body-large leading-8 text-on-dark-muted">
              {description}
            </p>

            {actions ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {actions}
              </div>
            ) : null}
          </div>

          {image ? (
            <div className="relative min-h-64 motion-safe:animate-media-in sm:min-h-80 lg:min-h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-image-overlay/10"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
