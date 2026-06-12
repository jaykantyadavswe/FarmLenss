"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ImagePlus, SendHorizontal, X } from "lucide-react";


export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const previewUrlRef = useRef("");

  useEffect(() => {
    return () => {
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }
    };
  }, []);

  const updatePreview = (file) => {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
    }

    const url = URL.createObjectURL(file);
    previewUrlRef.current = url;
    setPreviewUrl(url);
  };

  const clearImage = () => {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
      previewUrlRef.current = "";
    }

    setImage(null);
    setPreviewUrl("");
  };

  // 📷 Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      updatePreview(file);
    }
  };

  // 🚀 Send Data
  const handleSend = () => {
    if (!image) {
      alert("Please upload a crop image first");
      return;
    }

    const formData = new FormData();
    formData.append("media", image);
    formData.append("text", text);

    onSend(formData); // send to parent

    setText("");
    clearImage();
  };

  return (
    <div className="border-t border-slate-200 bg-white/95 p-5" onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
          setImage(file);
          updatePreview(file);
        }
      }}>

      {/* 🔥 Image Preview */}
      {previewUrl && (
        <div className="relative mb-3 h-24 w-24">
          <Image
            src={previewUrl}
            alt="Selected crop preview"
            width={96}
            height={96}
            unoptimized
            className="h-full w-full rounded-2xl object-cover ring-1 ring-slate-200"
          />
          <button
            onClick={clearImage}
            className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white shadow"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-inner">

        <label className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:text-emerald-600">
          <ImagePlus className="h-5 w-5" />
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-w-0 flex-1 bg-transparent px-1 text-sm text-slate-900 outline-none placeholder:text-slate-400"
          placeholder="Describe symptoms, crop name, or location..."
        />

        <button
          onClick={handleSend}
          className="flex h-11 w-14 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm transition hover:bg-emerald-500"
        >
          <SendHorizontal className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Drag and drop or upload a clear infected crop image.
      </p>

    </div>
  );
}
