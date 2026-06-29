import ArchitectureSection from "./architecture/ArchitectureSection";
import CTASection from "./cta/CTASection";
import FAQSection from "./faq/FAQSection";
import FeaturesSection from "./features/FeaturesSection";
import HeroSection from "./Hero/HeroSection";
import ProblemSection from "./problem/ProblemSection";
import FarmLensFeatures from "./sections/FarmLensFeatures";
import FarmLensHero from "./sections/FarmLensHero";
import FarmLensProcess from "./sections/FarmLensProcess";
import FarmLensShowcase from "./sections/FarmLensShowcase";
import FarmLensStats from "./sections/FarmLensStats";
import DashboardShowcase from "./showcase/DashboardShowcase";
import StatsSection from "./stats/StatsSection";
import TechStack from "./tech/TechStack";
import WorkflowSection from "./workflow/WorkflowSection";

export default function LandingPage() {
  return (
    <>
      {/* <FarmLensHero/> */}
      <HeroSection/>
      <StatsSection/>
      <ProblemSection/>
      <FeaturesSection/>
      <WorkflowSection/>
      <DashboardShowcase/>
      <TechStack/>
      {/* <ArchitectureSection/> */}
      <CTASection/>
      <FAQSection/>
      {/* <FarmLensFeatures/> */}
      {/* <FarmLensProcess/> */}
      {/* <FarmLensShowcase/> */}
      {/* <FarmLensStats/> */}
    </>
  );
}