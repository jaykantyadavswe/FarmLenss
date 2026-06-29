import WorkflowCard from "./WorkflowCard";
import { workflowSteps } from "./workflowData";

export default function WorkflowSection() {
  return (
    <section
      id="how-it-works"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Four Simple Steps to
            <span className="text-green-600">
              {" "}Protect Your Crops
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-8">
            FarmLens combines AI, cloud technology, and an intuitive user
            experience to make crop disease detection fast, reliable, and easy
            for every farmer.
          </p>

        </div>

        <div className="relative mt-20">

          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-green-100 lg:block" />

          <div className="grid gap-10 lg:grid-cols-2">

            {workflowSteps.map((step) => (
              <WorkflowCard
                key={step.step}
                {...step}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}