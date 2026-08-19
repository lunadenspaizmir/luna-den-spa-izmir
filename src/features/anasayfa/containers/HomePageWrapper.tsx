import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { LocationSection } from "@/components/sections/location-section";
import { TrustBar } from "@/components/sections/trust-bar";
import {
  BusinessJsonLd,
  FaqJsonLd,
} from "@/components/shared/structured-data";
import { HomeAbout } from "@/features/anasayfa/components/HomeAbout";
import { HomeExperience } from "@/features/anasayfa/components/HomeExperience";
import { HomeGallery } from "@/features/anasayfa/components/HomeGallery";
import { HomeHero } from "@/features/anasayfa/components/HomeHero";
import { HomeServices } from "@/features/anasayfa/components/HomeServices";

export default function HomePageWrapper() {
  return (
    <>
      <BusinessJsonLd />
      <FaqJsonLd />

      <HomeHero />
      <TrustBar />
      <HomeAbout />
      <HomeServices />
      <HomeExperience />
      <HomeGallery />
      <FaqSection />
      <LocationSection conversionLocation="home-location" />
      <FinalCtaSection conversionLocation="home-final-cta" />
    </>
  );
}
