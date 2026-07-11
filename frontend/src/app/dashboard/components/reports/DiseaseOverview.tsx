import {
  Leaf,
  Bug,
  AlertTriangle,
  BadgeCheck,
} from "lucide-react";

export default function DiseaseOverview() {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">

      {/* Heading */}

      <div className="mb-6">

        <h2 className="text-xl font-bold text-zinc-900">
          Disease Overview
        </h2>

        <p className="text-sm text-zinc-500">
          AI generated crop diagnosis summary.
        </p>

      </div>

      {/* Grid */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <OverviewCard
          icon={<Leaf className="h-6 w-6 text-green-600" />}
          title="Crop"
          value="Tomato"
          color="bg-green-100"
        />

        <OverviewCard
          icon={<Bug className="h-6 w-6 text-red-600" />}
          title="Disease"
          value="Early Blight"
          color="bg-red-100"
        />

        <OverviewCard
          icon={<AlertTriangle className="h-6 w-6 text-yellow-600" />}
          title="Severity"
          value="Moderate"
          color="bg-yellow-100"
        />

        <OverviewCard
          icon={<BadgeCheck className="h-6 w-6 text-blue-600" />}
          title="Confidence"
          value="96%"
          color="bg-blue-100"
        />

      </div>

    </section>
  );
}

interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}

function OverviewCard({
  icon,
  title,
  value,
  color,
}: OverviewCardProps) {
  return (
    <div className="rounded-2xl border bg-zinc-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
      >
        {icon}
      </div>

      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h3 className="mt-2 text-xl font-bold text-zinc-900">
        {value}
      </h3>

    </div>
  );
}