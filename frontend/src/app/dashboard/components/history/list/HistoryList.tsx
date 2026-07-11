import { history } from "../historyData";
import HistoryListItem from "./HistoryListItem";

export default function HistoryList() {
  return (
    <section className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <div className="grid grid-cols-12 border-b bg-zinc-50 px-6 py-4 text-sm font-semibold text-zinc-500">

        <div className="col-span-3">Crop</div>

        <div className="col-span-2">Disease</div>

        <div className="col-span-2">Confidence</div>

        <div className="col-span-2">Status</div>

        <div className="col-span-2">Date</div>

        <div className="col-span-1 text-right">
          Action
        </div>

      </div>

      {history.map((item) => (
        <HistoryListItem
          key={item.id}
          item={item}
        />
      ))}

    </section>
  );
}