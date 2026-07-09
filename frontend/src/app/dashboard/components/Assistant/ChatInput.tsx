import {
  ImagePlus,
  Mic,
  SendHorizontal,
} from "lucide-react";

export default function ChatInput() {
  return (
    <div className="border-t bg-white p-5">

      <div className="flex items-center gap-3 rounded-2xl border px-4 py-3">

        <button>
          <ImagePlus />
        </button>

        <input
          placeholder="Ask about your crop..."
          className="flex-1 outline-none"
        />

        <button>
          <Mic />
        </button>

        <button className="rounded-xl bg-green-600 p-3 text-white">
          <SendHorizontal size={18} />
        </button>

      </div>

    </div>
  );
}