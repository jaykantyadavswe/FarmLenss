import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex gap-4">

      <div className="rounded-full bg-green-600 p-3 text-white">
        <Bot size={18} />
      </div>

      <div className="rounded-2xl border bg-white px-5 py-4">
        <div className="flex gap-2">

          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" />

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
            style={{ animationDelay: ".15s" }}
          />

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
            style={{ animationDelay: ".3s" }}
          />

        </div>
      </div>

    </div>
  );
}