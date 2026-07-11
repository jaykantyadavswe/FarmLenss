import {
  Download,
  Share2,
  RotateCcw,
} from "lucide-react";

export default function ActionButtons() {
  return (
    <section className="flex flex-wrap gap-4">

      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 text-white hover:bg-green-700">
        <Download size={18} />
        Download PDF
      </button>

      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border px-6 py-4 hover:bg-zinc-100">
        <Share2 size={18} />
        Share
      </button>

      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border px-6 py-4 hover:bg-zinc-100">
        <RotateCcw size={18} />
        Analyze Again
      </button>

    </section>
  );
}