import { Leaf } from "lucide-react";

export default function SidebarHeader() {
  return (
    <div className="border-b p-5">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-green-600 p-3 text-white">

          <Leaf size={22} />

        </div>

        <div>

          <h2 className="text-lg font-bold">
            FarmLens
          </h2>

          <p className="text-xs text-zinc-500">
            AI Crop Assistant
          </p>

        </div>

      </div>

    </div>
  );
}