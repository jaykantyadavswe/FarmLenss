"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

export default function AvatarUpload() {
  return (
    <div className="flex items-center justify-between rounded-2xl border bg-zinc-50 p-6">

      <div className="flex items-center gap-5">

        <Image
          src="/images/avatar.png"
          alt="Avatar"
          width={90}
          height={90}
          className="rounded-full object-cover"
        />

        <div>

          <h3 className="text-lg font-semibold">
            Profile Photo
          </h3>

          <p className="text-sm text-zinc-500">
            JPG, PNG up to 5 MB
          </p>

        </div>

      </div>

      <button className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white transition hover:bg-green-700">

        <Camera size={18} />

        Change Photo

      </button>

    </div>
  );
}