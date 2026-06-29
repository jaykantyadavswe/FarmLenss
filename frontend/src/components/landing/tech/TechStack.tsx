import TechCard from "./TechCard";
import { techStack } from "./techData";

export default function TechStack() {
  return (
    <section
      id="technology"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Technology Stack
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Built with
            <span className="text-green-600">
              {" "}Modern Technologies
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            FarmLens is built using a modern full-stack architecture,
            combining AI, cloud services, and scalable web technologies
            to deliver a fast and reliable user experience.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {techStack.map((tech) => (
            <TechCard
              key={tech.title}
              {...tech}
            />
          ))}

        </div>

      </div>
    </section>
  );
}