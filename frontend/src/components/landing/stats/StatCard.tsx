import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  title: string;
  description: string;
}

export default function StatCard({
  icon: Icon,
  value,
  title,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-green-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600">
        <Icon size={28} />
      </div>

      <h2 className="text-3xl font-bold">
        {value}
      </h2>

      <h3 className="mt-2 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}