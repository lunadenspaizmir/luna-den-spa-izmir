import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
          404
        </p>

        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Sayfa bulunamadı
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          Aradığınız sayfa taşınmış, kaldırılmış veya hiç oluşturulmamış
          olabilir.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Anasayfaya Dön
          </Link>

          <Link
            href="/subelerimiz"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-medium transition hover:bg-muted"
          >
            Şubelerimizi Gör
          </Link>
        </div>
      </section>
    </main>
  );
}
