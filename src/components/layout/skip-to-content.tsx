import { useTranslations } from "next-intl";

/** Klavye kullanıcıları için menüyü atlayıp içeriğe geçiş bağlantısı. */
export function SkipToContent() {
  const t = useTranslations("common");

  return (
    <a
      href="#main-content"
      className="sr-only rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100"
    >
      {t("skipToContent")}
    </a>
  );
}
