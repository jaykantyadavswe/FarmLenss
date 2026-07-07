import { LucideIcon } from "lucide-react";

interface ScoreCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: "green" | "blue" | "amber" | "emerald";
}

const colors = {
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  amber: {
    bg: "bg-amber-100",
    text: "text-amber-600",
  },
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
  },
};

export default function ScoreCard({
  title,
  value,
  change,
  icon: Icon,
  color,
}: ScoreCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-zinc-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-zinc-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {value}
          </h2>

          <p className="mt-2 text-sm font-medium text-green-600">
            {change} this week
          </p>
        </div>

        <div
          className={`rounded-xl p-3 ${
            colors[color].bg
          } ${colors[color].text}`}
        >
          <Icon size={24} />
        </div>

      </div>
    </div>
  );
}