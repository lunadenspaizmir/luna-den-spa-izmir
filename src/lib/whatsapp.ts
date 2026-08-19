import { siteConfig } from "@/data/site";

/**
 * WhatsApp derin bağlantısı üretir. Mesaj verilmezse şubenin varsayılan
 * randevu mesajı kullanılır; böylece kullanıcı sohbeti boş bir ekranla
 * değil, hazır bir randevu talebiyle açar.
 */
export function createWhatsAppUrl(message?: string) {
  const safeMessage = message?.trim() || siteConfig.whatsapp.defaultMessage;

  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    safeMessage,
  )}`;
}
