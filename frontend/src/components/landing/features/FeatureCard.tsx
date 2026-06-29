import { LucideIcon, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group rounded-3xl bg-green-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition group-hover:scale-110 dark:bg-green-900/20">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-green-600 opacity-0 transition-all group-hover:opacity-100">

        Learn More

        <ArrowRight size={18} />

      </div>

    </div>
  );
}