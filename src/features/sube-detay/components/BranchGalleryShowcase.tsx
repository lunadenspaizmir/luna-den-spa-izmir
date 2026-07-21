import Image from "next/image";

type BranchGalleryShowcaseProps = Readonly<{
  images: ReadonlyArray<string>;
  branchName: string;
  imageAltLabel: string;
}>;

export function BranchGalleryShowcase({
  images,
  branchName,
  imageAltLabel,
}: BranchGalleryShowcaseProps) {
  return (
    <>
      {/* Desktop / tablet: uniform responsive grid */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <figure
            key={image}
            className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-primary/10 bg-secondary/40"
          >
            <Image
              src={image}
              alt={`${branchName} ${imageAltLabel} ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 82vw"
              className="object-cover transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-image-overlay/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            />
            <figcaption
              aria-hidden="true"
              className="absolute bottom-4 left-5 font-heading text-2xl font-medium italic text-hero-foreground drop-shadow-sm"
            >
              {String(index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Mobile: horizontal snap carousel */}
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:hidden">
        {images.map((image, index) => (
          <div
            key={image}
            className="relative aspect-4/5 w-[82vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-primary/10 bg-secondary/40"
          >
            <Image
              src={image}
              alt={`${branchName} ${imageAltLabel} ${index + 1}`}
              fill
              sizes="82vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-image-overlay/50 to-transparent"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-4 font-heading text-2xl font-medium italic text-hero-foreground drop-shadow-sm"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
