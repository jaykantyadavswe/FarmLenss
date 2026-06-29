import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 pt-20 lg:grid-cols-2">

        <HeroContent />

        <HeroDashboard />

      </div>

    </section>
  );
}