import FeatureCard from "./FeatureCard";
import { features } from "./featureData";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Powerful Features
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Everything You Need to
            <span className="text-green-600">
              {" "}Protect Your Crops
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            FarmLens combines artificial intelligence, cloud technology,
            and an intuitive user experience to help farmers identify crop
            diseases, understand treatment options, and make informed decisions.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>
    </section>
  );
}