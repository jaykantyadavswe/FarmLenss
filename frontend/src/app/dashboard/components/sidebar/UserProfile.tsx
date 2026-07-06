"use client";

import Image from "next/image";
import { ChevronUp } from "lucide-react";

export default function UserProfile() {
  return (
    <button
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        p-3
        transition
        hover:bg-zinc-100
      "
    >
      <Image
        src="/images/avatar.png"
        alt="User"
        width={42}
        height={42}
        className="rounded-full"
      />

      <div className="flex-1 text-left">

        <h4 className="text-sm font-semibold">
          Genius
        </h4>

        <p className="text-xs text-zinc-500">
          Engineering Student
        </p>

      </div>

      <ChevronUp
        size={18}
        className="text-zinc-400"
      />
    </button>
  );
}