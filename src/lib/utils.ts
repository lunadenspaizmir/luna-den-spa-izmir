import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge, `globals.css` içinde tanımlı özel `--text-*` ölçeğini
 * tanımadığı için `text-section-title` gibi sınıfları renk sınıfı sanıp
 * `text-foreground` ile çakıştırıyor ve birini siliyordu. Ölçek adlarını
 * açıkça bildirerek boyut ve renk sınıflarının bir arada yaşamasını sağlıyoruz.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "hero",
            "page-title",
            "section-title",
            "card-title",
            "body-large",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
