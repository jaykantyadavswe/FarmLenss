"use client";

import { useRef, useState } from "react";
import {
  ImagePlus,
  Mic,
  SendHorizontal,
  X,
} from "lucide-react";

import UploadPreview from "./UploadPreview";

interface Props {
    onSend: (
        message: string,
        image?: string
    ) => void;
}


export default function ChatInput({
    onSend,
}: Props) {
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const image = URL.createObjectURL(file);

    setPreview(image);
  }

  function handleSend() {
    if (!message.trim() && !preview) return;

    console.log({
      message,
      preview,
    });

    setMessage("");
    setPreview(null);
  }

  return (
    <footer className="border-t bg-white">

      <div className="mx-auto max-w-4xl p-5">

        {preview && (
          <div className="relative mb-4 w-fit">

            <UploadPreview image={preview} />

            <button
              onClick={() => setPreview(null)}
              className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white"
            >
              <X size={14} />
            </button>

          </div>
        )}

        <div className="flex items-end gap-3 rounded-2xl border bg-white p-3 shadow-sm">

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleUpload}
          />

          <button
            onClick={() => inputRef.current?.click()}
            className="rounded-xl p-3 transition hover:bg-zinc-100"
          >
            <ImagePlus size={20} />
          </button>

          <textarea
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything about your crop..."
            className="max-h-40 flex-1 resize-none bg-transparent py-2 outline-none"
          />

          <button className="rounded-xl p-3 transition hover:bg-zinc-100">
            <Mic size={20} />
          </button>

          <button
            onClick={handleSend}
            disabled={!message.trim() && !preview}
            className="rounded-xl bg-green-600 p-3 text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-zinc-300"
          >
            <SendHorizontal size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}