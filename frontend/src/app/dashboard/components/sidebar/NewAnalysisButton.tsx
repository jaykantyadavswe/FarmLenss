import { Plus } from "lucide-react";

export default function NewAnalysisButton() {
  return (
    <button
      className="
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-green-600
        px-4
        py-3
        font-medium
        text-white
        transition
        hover:bg-green-700
      "
    >
      <Plus size={18} />

      New Analysis
    </button>
  );
}