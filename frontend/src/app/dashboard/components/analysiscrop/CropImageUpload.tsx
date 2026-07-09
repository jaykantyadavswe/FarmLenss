"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImagePlus, UploadCloud, RefreshCcw } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CropImageUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string>("");
  const [fileName, setFileName] = useState("");

  const handleBrowse = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setFileName(file.name);
  };

  return (
    <section className="rounded-3xl border border-dashed border-green-300 bg-gradient-to-br from-green-50 to-white p-5 shadow-sm transition-all duration-300 hover:border-green-500 hover:shadow-lg">

      {/* Step */}

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">
        1
      </div>

      {/* Upload */}

      <div className="mt-8">

        {preview ? (
          <div className="space-y-5">

            <Image
              src={preview}
              alt="Crop Preview"
              width={600}
              height={350}
              className="h-72 w-full rounded-2xl object-cover"
            />

            <div className="flex items-center justify-between rounded-xl bg-zinc-100 p-4">

              <div>

                <h3 className="font-medium">
                  {fileName}
                </h3>

                <p className="text-sm text-zinc-500">
                  Ready for AI Analysis
                </p>

              </div>

              <button
                onClick={handleBrowse}
                className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
              >
                <RefreshCcw size={16} />
                Replace
              </button>

            </div>

          </div>
        ) : (
          <div
            onClick={handleBrowse}
            className="
              flex
              h-77
              cursor-pointer
              flex-col
              items-center
              justify-center
              rounded-2xl
              border-2
              border-dashed
              border-green-300
              bg-white
              transition-all
              hover:border-green-500
              hover:bg-green-50
            "
          >

            <div className="rounded-full bg-green-100 p-4">

              <UploadCloud
                size={42}
                className="text-green-600"
              />

            </div>

            <h2 className="mt-4 text-2xl font-bold">
              Upload Crop Image
            </h2>

            <p className="mt-3 text-center text-sm leading-6 text-zinc-500">
              Drag & Drop your crop image here
              <br />
              or click anywhere to browse
            </p>

            <p className="mt-4 text-xs text-zinc-400">
              PNG • JPG • JPEG • Max 10 MB
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleBrowse();
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 font-medium text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <ImagePlus size={18} />

              Browse Files
            </button>

          </div>
        )}

        {/* Hidden Input */}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />

      </div>

      {/* Divider */}

      <div className="my-8 h-px w-full bg-zinc-200" />

      {/* Crop Select */}

      <div className="space-y-2 flex">

        <label className="text-sm font-medium mr-5">
          Crop Type
        </label>

        <Select>

          <SelectTrigger className="h-12 rounded-xl">

            <SelectValue placeholder="Select Your Crop" />

          </SelectTrigger>

          <SelectContent>

            <SelectItem value="tomato">
              🍅 Tomato
            </SelectItem>

            <SelectItem value="potato">
              🥔 Potato
            </SelectItem>

            <SelectItem value="rice">
              🌾 Rice
            </SelectItem>

            <SelectItem value="wheat">
              🌿 Wheat
            </SelectItem>

            <SelectItem value="corn">
              🌽 Corn
            </SelectItem>

            <SelectItem value="cotton">
              ☁️ Cotton
            </SelectItem>

            <SelectItem value="chili">
              🌶️ Chili
            </SelectItem>

          </SelectContent>

        </Select>

      </div>

    </section>
  );
}