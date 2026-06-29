import ProblemCard from "./ProblemCard";
import { problems } from "./problemData";

export default function ProblemSection() {
  return (
    <section className="py-28" id="Challenge">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600">
              The Challenge
            </span>

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              Crop Diseases Can Spread
              <span className="text-red-600"> Before They're Noticed.</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Every growing season, farmers face crop diseases that can reduce
              yield and increase production costs. Identifying diseases early
              requires experience, timely inspection, and access to expert
              advice—resources that aren't always available.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              FarmLens addresses these challenges by combining AI-powered image
              analysis with intelligent recommendations, making crop diagnosis
              faster, more accessible, and more reliable.
            </p>

          </div>

          {/* Right */}

          <div className="grid gap-6 sm:grid-cols-2">

            {problems.map((problem) => (
              <ProblemCard
                key={problem.title}
                {...problem}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}