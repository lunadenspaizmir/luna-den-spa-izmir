import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { LocationSection } from "@/components/sections/location-section";
import { ServicesOverview } from "@/features/hizmetlerimiz/components/ServicesOverview";

export default function ServicesPageWrapper() {
  return (
    <>
      <ServicesOverview />
      <FaqSection className="border-t border-border bg-secondary/30" />
      <LocationSection conversionLocation="services-location" />
      <FinalCtaSection conversionLocation="services-final-cta" />
    </>
  );
}
