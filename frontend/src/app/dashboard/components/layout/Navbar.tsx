import { Leaf, Search, CloudSun, Bell } from "lucide-react";
import { Sparkles } from "lucide-react";

import Image from "next/image";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-zinc-200 bg-white px-8">

            <div>
                <h1 className="text-2xl font-bold text-zinc-900">
                    Dashboard
                </h1>

                <p className="text-sm text-zinc-500">
                    Welcome back, Genius 👋
                </p>
            </div>

            <div className="flex items-center gap-5">
                <div
                    className="
      group
      hidden
      lg:flex
      w-96
      items-center
      gap-3
      rounded-xl
      border
      border-zinc-200
      bg-zinc-50
      px-4
      py-3
      transition-all
      duration-300
      focus-within:border-green-500
      focus-within:bg-white
      focus-within:shadow-md
    "
                >
                    <Search
                        size={18}
                        className="text-zinc-400 group-focus-within:text-green-600"
                    />

                    <input
                        placeholder="Search analyses..."
                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
                    />

                    <kbd className="rounded-md border bg-white px-2 py-1 text-[11px]">
                        Ctrl K
                    </kbd>
                </div>

                <button
                    className="
      inline-flex
      items-center
      gap-2
      rounded-xl
      bg-gradient-to-r
      from-green-600
      to-emerald-500
      px-5
      py-3
      text-sm
      font-semibold
      text-white
      shadow-md
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:shadow-xl
    "
                >
                    <Sparkles size={18} />

                    Analyze Crop

                </button>

                <div className="hidden xl:flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2">

                    <CloudSun className="text-yellow-500" />

                    <div>

                        <h4 className="text-sm font-semibold">
                            18°C
                        </h4>

                        <p className="text-xs text-zinc-500">
                            Cloudy
                        </p>

                    </div>

                </div>

                <button className="rounded-xl border border-zinc-200 p-3 transition hover:bg-zinc-100">
                    <Bell size={20} />
                </button>

                <button className="overflow-hidden rounded-full border-2 border-green-500">

                    <Image
                        src="/images/avatar.png"
                        alt="User"
                        width={46}
                        height={46}
                    />

                </button>

            </div>

        </header>
    );
}