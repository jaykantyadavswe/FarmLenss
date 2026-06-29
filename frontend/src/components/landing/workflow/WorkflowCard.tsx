import { LucideIcon } from "lucide-react";

interface WorkflowCardProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function WorkflowCard({
  step,
  title,
  description,
  icon: Icon,
}: WorkflowCardProps) {
  return (
    <div className="relative rounded-3xl bg-green-100 p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl ">

      <span className="absolute right-6 top-6 text-5xl font-bold text-gray-100 dark:text-zinc-800">
        {step}
      </span>

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-900/20">
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