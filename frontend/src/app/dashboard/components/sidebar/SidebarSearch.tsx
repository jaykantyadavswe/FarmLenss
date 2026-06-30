import { Search } from "lucide-react";

export default function SidebarSearch() {
  return (
    <div className="relative">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
      />

      <input
        type="text"
        placeholder="Search analysis..."
        className="
          w-full
          rounded-xl
          border
          py-3
          pl-11
          pr-4
          text-sm
          outline-none
          transition
          focus:border-green-500
        "
      />

    </div>
  );
}