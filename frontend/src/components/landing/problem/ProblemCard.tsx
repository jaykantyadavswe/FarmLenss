import { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProblemCard({
  icon: Icon,
  title,
  description,
}: ProblemCardProps) {
  return (
    <div className="rounded-3xl bg-green-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900/20">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>

    </div>
  );
}