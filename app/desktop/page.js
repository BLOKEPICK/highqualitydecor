// app/desktop/page.js — Desktop-only page (no mobile hero in DOM)
import HeroDesktopGlassFollowChipsV3 from "../../components/HeroDesktopGlassFollowChipsV3";
import HomeSections from "../../components/HomeSections";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function DesktopHome() {
  return (
    <main>
      <HeroDesktopGlassFollowChipsV3 />
      <HomeSections />
    </main>
  );
}
