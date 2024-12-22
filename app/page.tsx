import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
import { SolutionSection } from "@/components/solution-section";
import { MilestoneSection } from "@/components/milestone-section";
import { WhoWeAre } from "@/components/who-we-are";
import { HowInkiraWorks } from "@/components/how-inkira-works";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <main className="px-6 sm:px-8 lg:px-10">
        <SiteHeader />
        <HeroSection />
        <SolutionSection />
        <HowInkiraWorks />
        <MilestoneSection />
        <WhoWeAre />
        <SiteFooter />
      </main>
    </div>
  );
}
