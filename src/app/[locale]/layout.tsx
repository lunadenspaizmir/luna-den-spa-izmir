import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "@/style/globals.css";

import { routing } from "@/i18n/routing";
import { PageTransition } from "@/components/providers/page-transition";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { siteConfig } from "@/data/site";
import { GoogleAdsConversions } from "@/components/analytics/google-ads-conversions";

const fontVariables = {
  "--font-geist-sans":
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
} as CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Luna Den Spa",
    template: "%s | Luna Den Spa",
  },
  description:
    "Luna Den Spa, İzmir şubelerinde masaj, spa ve wellness hizmetleriyle rahatlatıcı ve premium bir deneyim sunar.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body style={fontVariables}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <GoogleAdsConversions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
