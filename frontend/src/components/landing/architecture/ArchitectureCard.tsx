import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ArchitectureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="w-56 rounded-3xl bg-gray-100 p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600">
        <Icon size={28} />
      </div>

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <p className="mt-3 text-sm text-muted-foreground leading-6">
        {description}
      </p>

    </div>
  );
}