// Cocos The Club Solto Hotel şubesine özel Google Ads dönüşümü.
// Dönüşüm etiketi (AW-...) ve etiket değeri ortam değişkenlerinden okunur.
const cocosGoogleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_COCOS_ID;
const cocosContactLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_COCOS_CONTACT_LABEL;

const cocosContactSendTo =
  cocosGoogleAdsId && cocosContactLabel
    ? `${cocosGoogleAdsId}/${cocosContactLabel}`
    : undefined;

/**
 * "Cocos Solto - İletişim Butonu Tıklama" dönüşümünü Google Ads'e gönderir.
 *
 * Yalnızca gerçek kullanıcı tıklamasında (WhatsApp / telefon iletişim
 * butonları) çağrılmalıdır; render sırasında çağrılmamalıdır. Buton bağlantısını
 * engellemez, yönlendirme normal şekilde devam eder.
 */
export function reportCocosContactConversion() {
  if (typeof window === "undefined") {
    return;
  }

  if (!cocosContactSendTo || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: cocosContactSendTo,
  });
}
