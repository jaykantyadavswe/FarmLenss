import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Pagination() {
  return (
    <section className="flex items-center justify-between rounded-2xl border bg-white p-5">

      <button className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-zinc-100">

        <ChevronLeft size={18} />

        Previous

      </button>

      <div className="flex gap-2">

        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className={`h-10 w-10 rounded-lg transition ${
              page === 1
                ? "bg-green-600 text-white"
                : "border hover:bg-zinc-100"
            }`}
          >
            {page}
          </button>
        ))}

      </div>

      <button className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-zinc-100">

        Next

        <ChevronRight size={18} />

      </button>

    </section>
  );
}