import { FolderSearch, Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <section className="rounded-3xl border border-dashed bg-white p-16 text-center">

      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

        <FolderSearch
          size={36}
          className="text-green-600"
        />

      </div>

      <h2 className="text-2xl font-bold">

        No Analyses Found

      </h2>

      <p className="mt-3 text-zinc-500">

        Upload a crop image to generate your
        first AI report.

      </p>

      <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700">

        <Sparkles size={18} />

        Analyze Crop

      </button>

    </section>
  );
}