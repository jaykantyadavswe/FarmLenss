import { ComponentType } from "react";

interface PromptItem {
  icon: ComponentType<{ size?: number }>;
  title: string;
  description?: string;
}

interface Props {
  prompt: PromptItem;
}

export default function PromptCard({
  prompt,
}: Props) {
  const Icon = prompt.icon;

  return (
    <button
      className="
        group
        flex
        items-start
        gap-4
        rounded-2xl
        border
        bg-white
        p-5
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-green-500
        hover:shadow-lg
      "
    >
      <div
        className="
          rounded-xl
          bg-green-100
          p-3
          text-green-600
          transition
          group-hover:bg-green-600
          group-hover:text-white
        "
      >
        <Icon size={22} />
      </div>

      <div>

        <h3 className="font-semibold">
          {prompt.title}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {prompt.description}
        </p>

      </div>

    </button>
  );
}