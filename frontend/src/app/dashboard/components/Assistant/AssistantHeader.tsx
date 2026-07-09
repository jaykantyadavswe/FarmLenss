import { Brain, Trash2 } from "lucide-react";

export default function AssistantHeader() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-green-100 p-3">
          <Brain className="text-green-600" />
        </div>

        <div>

          <h2 className="font-semibold text-lg">
            AI Crop Assistant
          </h2>

          <p className="text-sm text-zinc-500">
            Ask anything about crops & diseases
          </p>

        </div>

      </div>

      <button className="rounded-lg border p-2 hover:bg-zinc-100">
        <Trash2 size={18} />
      </button>

    </header>
  );
}