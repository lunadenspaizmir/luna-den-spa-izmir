import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { LocationSection } from "@/components/sections/location-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { ContactHero } from "@/features/iletisim/components/ContactHero";

export default function ContactPageWrapper() {
  return (
    <>
      <ContactHero />
      <TrustBar />
      <LocationSection conversionLocation="contact-location" />
      <FaqSection />
      <FinalCtaSection conversionLocation="contact-final-cta" />
    </>
  );
}
