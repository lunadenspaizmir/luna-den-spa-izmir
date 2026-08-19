import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { LocationSection } from "@/components/sections/location-section";
import { BranchesOverview } from "@/features/subelerimiz/components/BranchesOverview";

export default function BranchesPageWrapper() {
  return (
    <>
      <BranchesOverview />
      <LocationSection conversionLocation="branches-location" />
      <FinalCtaSection conversionLocation="branches-final-cta" />
    </>
  );
}
