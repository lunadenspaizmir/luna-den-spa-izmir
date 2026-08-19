import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { AboutHero } from "@/features/hakkımızda/components/AboutHero";
import { AboutStory } from "@/features/hakkımızda/components/AboutStory";
import { WhyUs } from "@/features/hakkımızda/components/WhyUs";

export default function AboutPageWrapper() {
  return (
    <>
      <AboutHero />
      <TrustBar />
      <AboutStory />
      <WhyUs />
      <FaqSection />
      <FinalCtaSection conversionLocation="about-final-cta" />
    </>
  );
}
