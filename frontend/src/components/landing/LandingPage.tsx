import FarmLensCTA from "./sections/FarmLensCTA";
import FarmLensFeatures from "./sections/FarmLensFeatures";
import FarmLensHero from "./sections/FarmLensHero";
import FarmLensProcess from "./sections/FarmLensProcess";
import FarmLensShowcase from "./sections/FarmLensShowcase";
import FarmLensStats from "./sections/FarmLensStats";
import FarmLensTestimonials from "./sections/FarmLensTestimonials";

export default function LandingPage() {
  return (
    <>
      <FarmLensHero/>
      <FarmLensFeatures/>
      <FarmLensProcess/>
      <FarmLensShowcase/>
      <FarmLensStats/>
      <FarmLensTestimonials/>
      <FarmLensCTA/>
    </>
  );
}