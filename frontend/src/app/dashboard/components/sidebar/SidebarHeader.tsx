import { Leaf, Plus } from "lucide-react";

export default function SidebarHeader() {
  return (
    <header className="p-5">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-green-600 p-3 text-white">

          <Leaf size={22} />

        </div>

        <div>

          <h2 className="font-bold text-xl">
            FarmLens
          </h2>

          <p className="text-sm text-zinc-500">
            AI Crop Assistant
          </p>

        </div>

      </div>

    </header>
  );
}