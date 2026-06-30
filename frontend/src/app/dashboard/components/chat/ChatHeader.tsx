import { Leaf } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-green-600 p-3 text-white">
          <Leaf size={20} />
        </div>

        <div>

          <h2 className="font-semibold text-lg">
            FarmLens AI
          </h2>

          <p className="text-sm text-zinc-500">
            AI Crop Diagnosis Assistant
          </p>

        </div>

      </div>

      <button className="rounded-lg border px-4 py-2 hover:bg-zinc-100">
        New Analysis
      </button>

    </header>
  );
}