import {
  Leaf,
  History,
  Plus,
} from "lucide-react";

export default function SidebarPreview() {
  return (
    <div className="w-64 border-r bg-white p-5">

      <div className="flex items-center gap-3 mb-8">

        <Leaf className="text-green-600" />

        <h3 className="font-bold">
          FarmLens
        </h3>

      </div>

      <button className="mb-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-white">

        <Plus size={18} />

        New Analysis

      </button>

      <div className="space-y-4">

        <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">

          Corn Disease

        </div>

        <div className="p-3">
          Tomato Leaf
        </div>

        <div className="p-3">
          Rice Blast
        </div>

      </div>

      <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">

        <History size={18} />

        Analysis History

      </div>

    </div>
  );
}