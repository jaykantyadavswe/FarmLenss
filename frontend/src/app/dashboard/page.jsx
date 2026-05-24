"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to FarmLens 🌾
      </h1>

      <button
        onClick={() => router.push("/upload")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Upload Crop Image
      </button>
    </div>
  );
}