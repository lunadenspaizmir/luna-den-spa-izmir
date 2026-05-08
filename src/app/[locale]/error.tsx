"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Hata
        </p>

        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Beklenmeyen bir sorun oluştu
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          Sayfa yüklenirken bir hata meydana geldi. Tekrar deneyebilir veya
          anasayfaya dönebilirsiniz.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Tekrar Dene
          </button>

          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-medium transition hover:bg-muted"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </section>
    </main>
  );
}
