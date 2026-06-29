import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ArchitectureNode({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="relative flex flex-col items-center">

      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100 text-green-600 shadow-md">
        <Icon size={34} />
      </div>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 max-w-xs text-center text-sm leading-6 text-muted-foreground">
        {description}
      </p>

    </div>
  );
}