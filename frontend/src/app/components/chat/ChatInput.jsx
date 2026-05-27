"use client";
import { useState } from "react";
import { MdImageSearch } from "react-icons/md";
import { LuSendHorizontal } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";


export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  // 📷 Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
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
    setImage(null);
  };

  return (
    <div className="mt-4 sticky bottom-0 p-5" onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) setImage(file);
      }}>

      {/* 🔥 Image Preview */}
      {image && (
        <div className="mb-2 relative w-24 h-24">
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={() => setImage(null)}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1 py-1"
          >
          <RxCross2 />
          </button>
        </div>
      )}

      {/* 🔥 Input Bar */}
      <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow">

        <label className="cursor-pointer px-3 text-xl">
          <MdImageSearch />
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>

        {/* ✍️ Text Input */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 bg-transparent outline-none px-2"
          placeholder="Ask about your crop..."
        />

        <button
          onClick={handleSend}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg"
        >
        <LuSendHorizontal />
        </button>
      </div>

      {/* 💡 Hint */}
      <p className="text-xs text-gray-500 mt-1">
        Drag & drop or upload your infected crop image
      </p>

    </div>
  );
}
