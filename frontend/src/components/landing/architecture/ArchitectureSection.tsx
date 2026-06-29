import ArchitectureCard from "./ArchitectureCard";
import { architecture } from "./architectureData";
import {
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export default function ArchitectureSection() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            System Architecture
          </span>

          <h2 className="mt-6 text-5xl font-bold">

            How FarmLens Works

          </h2>

          <p className="mt-6 text-lg text-muted-foreground">

            Modern scalable architecture powered by
            Next.js, Express.js, Gemini AI,
            MongoDB and Cloudinary.

          </p>

        </div>

        {/* Flow */}

        <div className="mt-24 flex flex-col items-center">

          {/* User -> Frontend -> Backend */}

          <div className="flex items-center gap-10">

            <ArchitectureCard {...architecture.client} />

            <ArrowRight
              className="text-green-500"
              size={34}
            />

            <ArchitectureCard {...architecture.frontend} />

            <ArrowRight
              className="text-green-500"
              size={34}
            />

            <ArchitectureCard {...architecture.backend} />

          </div>

          {/* Down Arrow */}

          <ArrowDown
            size={36}
            className="my-12 text-green-500"
          />

          {/* Backend Services */}

          <div className="flex gap-8">

            {architecture.services.map((service) => (
              <ArchitectureCard
                key={service.title}
                {...service}
              />
            ))}

          </div>

          {/* Down Arrow */}

          <ArrowDown
            size={36}
            className="my-12 text-green-500"
          />

          {/* Dashboard */}

          <ArchitectureCard
            {...architecture.dashboard}
          />

        </div>

      </div>

    </section>
  );
}