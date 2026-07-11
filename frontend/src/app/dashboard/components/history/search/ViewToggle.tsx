"use client";

import { Grid2x2, Rows3 } from "lucide-react";

interface Props {

    view: "grid" | "list";

    setView: (view: "grid" | "list") => void;

}

export default function ViewToggle({

    view,

    setView,

}: Props) {

    return (

        <div className="flex rounded-xl border bg-white p-1 shadow-sm">

            <button

                onClick={() => setView("grid")}

                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition

                    ${view === "grid"

                        ? "bg-green-600 text-white"

                        : "hover:bg-zinc-100"

                    }`}

            >

                <Grid2x2 size={18} />

                Grid

            </button>

            <button

                onClick={() => setView("list")}

                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition

                    ${view === "list"

                        ? "bg-green-600 text-white"

                        : "hover:bg-zinc-100"

                    }`}

            >

                <Rows3 size={18} />

                List

            </button>

        </div>

    );

}