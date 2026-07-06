"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="hidden gap-3 lg:flex lg:h-120">
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={image}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-label={`${branchName} ${imageAltLabel} ${index + 1}`}
              aria-pressed={isActive}
              className={cn(
                "group relative min-w-0 basis-0 cursor-pointer overflow-hidden rounded-2xl outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:ring-3 focus-visible:ring-ring/50",
                isActive ? "grow-4" : "grow",
              )}
            >
              <Image
                src={image}
                alt={`${branchName} ${imageAltLabel} ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 45vw, 82vw"
                className="object-cover"
              />

              <div
                className={cn(
                  "absolute inset-0 bg-image-overlay/50 transition-opacity duration-700",
                  isActive && "opacity-0",
                )}
              />

              <span
                aria-hidden="true"
                className={cn(
                  "absolute bottom-4 left-5 font-heading text-3xl font-medium italic text-hero-foreground drop-shadow-sm transition-opacity duration-500",
                  isActive ? "opacity-100" : "opacity-0",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:hidden">
        {images.map((image, index) => (
          <div
            key={image}
            className="relative aspect-4/5 w-[82vw] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-[44vw]"
          >
            <Image
              src={image}
              alt={`${branchName} ${imageAltLabel} ${index + 1}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
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
