/**
 * SSS öğeleri yalnızca anahtar olarak tutulur; soru ve cevap metinleri
 * `messages/*.json` içindeki `faq.items.<id>` altından okunur. Böylece hem
 * arayüz hem de FAQPage yapısal verisi tek listeden beslenir.
 */
export const faqItems = [
  "appointment",
  "services",
  "duration",
  "hammam",
  "couples",
  "location",
  "firstVisit",
] as const;

export type FaqItemKey = (typeof faqItems)[number];
