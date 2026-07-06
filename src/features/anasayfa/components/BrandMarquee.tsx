import { Moon } from "lucide-react";

const words = ["Luna Den Spa", "Spa & Wellness", "İzmir"];

const row = Array.from({ length: 3 }, () => words).flat();

export function BrandMarquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-border bg-background py-5"
    >
      <div className="flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-10">
            {row.map((word, index) => (
              <span
                key={`${copy}-${index}`}
                className="flex items-center gap-10"
              >
                <span className="whitespace-nowrap font-heading text-2xl font-medium italic text-primary/60 md:text-3xl">
                  {word}
                </span>
                <Moon className="size-4 text-primary/40" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
