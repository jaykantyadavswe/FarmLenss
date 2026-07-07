import { Download, Share2, Save } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="border-t p-5">

      <div className="grid grid-cols-3 gap-3">

        <button className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-white hover:bg-green-700">

          <Download size={18} />

          PDF

        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border px-4 py-3 hover:bg-zinc-100">

          <Save size={18} />

          Save

        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border px-4 py-3 hover:bg-zinc-100">

          <Share2 size={18} />

          Share

        </button>

      </div>

    </div>
  );
}