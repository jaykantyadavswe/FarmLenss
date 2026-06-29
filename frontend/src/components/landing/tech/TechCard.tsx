import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  icon: LucideIcon;
  color: string;
  technologies: string[];
}

export default function TechCard({
  title,
  icon: Icon,
  color,
  technologies,
}: Props) {
  return (
    <div className="rounded-3xl bg-gray-200 p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
      >
        <Icon size={28} />
      </div>

      <h3 className="mb-5 text-xl font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">

        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}

      </div>
    </div>
  );
}