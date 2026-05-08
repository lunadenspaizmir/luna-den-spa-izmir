import { HomeAbout } from "@/features/anasayfa/components/HomeAbout";
import { HomeHero } from "@/features/anasayfa/components/HomeHero";
import { HomeServices } from "@/features/anasayfa/components/HomeServices";

export default function HomePageWrapper() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
    </>
  );
}
