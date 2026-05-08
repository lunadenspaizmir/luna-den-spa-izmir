import { HomeAbout } from "@/features/anasayfa/components/HomeAbout";
import { HomeBranches } from "@/features/anasayfa/components/HomeBranches";
import { HomeContact } from "@/features/anasayfa/components/HomeContact";
import { HomeHero } from "@/features/anasayfa/components/HomeHero";
import { HomeServices } from "@/features/anasayfa/components/HomeServices";

export default function HomePageWrapper() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeBranches />
      <HomeContact />
    </>
  );
}
