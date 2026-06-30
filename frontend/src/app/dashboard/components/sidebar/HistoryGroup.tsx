import HistoryItem from "./HistoryItem";
import type { HistoryItem as Item } from "./sidebarData";

interface Props {
  title: string;
  items: Item[];
}

export default function HistoryGroup({
  title,
  items,
}: Props) {
  if (!items.length) return null;

  return (
    <section className="mb-6">

      <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
        {title}
      </h3>

      <div className="space-y-1">

        {items.map((item, index) => (
          <HistoryItem
            key={item.id}
            item={item}
            active={index === 0 && title === "Today"}
          />
        ))}

      </div>

    </section>
  );
}