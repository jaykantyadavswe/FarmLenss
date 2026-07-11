import { Search } from "lucide-react";

export default function HistorySearch() {
  return (
    <section className="rounded-3xl border bg-white p-5 shadow-sm">

      <div className="group flex items-center gap-3 rounded-xl border px-4 py-3 focus-within:border-green-500">

        <Search
          size={18}
          className="text-zinc-400"
        />

        <input
          type="text"
          placeholder="Search analyses..."
          className="flex-1 outline-none"
        />

        <kbd className="hidden rounded border bg-zinc-100 px-2 py-1 text-xs sm:block">
          Ctrl K
        </kbd>

      </div>

    </section>
  );
}