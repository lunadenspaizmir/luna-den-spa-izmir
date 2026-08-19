import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = Readonly<{
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "dark";
  as?: "h1" | "h2";
  className?: string;
}>;

/**
 * Tüm bölümlerde aynı başlık ritmini kuran ortak bileşen: üst etiket
 * (eyebrow) + başlık + açıklama. Koyu zeminler için `tone="dark"`.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "eyebrow flex items-center gap-3",
          align === "center" && "justify-center",
          isDark ? "text-on-dark-muted" : "text-primary",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "h-px w-10",
            isDark ? "bg-on-dark-border" : "bg-primary/50",
          )}
        />
        {eyebrow}
        {align === "center" ? (
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-10",
              isDark ? "bg-on-dark-border" : "bg-primary/50",
            )}
          />
        ) : null}
      </p>

      <Heading
        className={cn(
          "mt-5 font-semibold tracking-tight",
          Heading === "h1"
            ? "text-page-title leading-[var(--line-height-display)]"
            : "text-section-title leading-[var(--line-height-heading)]",
          isDark ? "text-hero-foreground" : "text-foreground",
        )}
      >
        {title}
      </Heading>

      {description ? (
        <p
          className={cn(
            "mt-5 text-body-large leading-8",
            isDark ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
