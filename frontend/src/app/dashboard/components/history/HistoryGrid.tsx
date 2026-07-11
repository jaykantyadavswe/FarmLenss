import HistoryCard from "./cards/HistoryCard";
import { history } from "./historyData";

export default function HistoryGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {history.map((item) => (
        <HistoryCard
          key={item.id}
          item={item}
        />
      ))}

    </section>
  );
}