// app/mobile/page.js — Mobile-only page (no desktop hero in DOM)
import Hero from "../../components/Hero";
import HomeSections from "../../components/HomeSections";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function MobileHome() {
  return (
    <main>
      <Hero />
      <HomeSections />
    </main>
  );
}
