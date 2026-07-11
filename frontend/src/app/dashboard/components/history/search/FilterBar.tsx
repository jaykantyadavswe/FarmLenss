import { SlidersHorizontal } from "lucide-react";

export default function FilterBar() {
  return (
    <section className="flex flex-wrap items-center justify-between rounded-3xl border bg-white p-5 shadow-sm">

      <div className="flex items-center gap-3">

        <SlidersHorizontal size={18} />

        <span className="font-medium">
          Filters
        </span>

      </div>

      <div className="mt-4 flex flex-wrap gap-3 md:mt-0">

        <select className="rounded-xl border px-4 py-2">
          <option>All Crops</option>
        </select>

        <select className="rounded-xl border px-4 py-2">
          <option>Status</option>
        </select>

        <select className="rounded-xl border px-4 py-2">
          <option>Newest First</option>
        </select>

      </div>

    </section>
  );
}