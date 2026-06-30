import { MoreHorizontal } from "lucide-react";
import type { HistoryItem } from "./sidebarData";

interface Props {
  item: HistoryItem;
  active?: boolean;
}

export default function HistoryItem({
  item,
  active = false,
}: Props) {
  return (
    <button
      className={`group w-full rounded-xl p-3 text-left transition ${
        active
          ? "bg-green-100 border border-green-300"
          : "hover:bg-zinc-100"
      }`}
    >
      <div className="flex items-start justify-between">

        <div className="min-w-0">

          <p className="truncate text-sm font-medium">
            {item.title}
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            {item.time}
          </p>

        </div>

        <MoreHorizontal
          size={16}
          className="opacity-0 transition group-hover:opacity-100"
        />

      </div>
    </button>
  );
}