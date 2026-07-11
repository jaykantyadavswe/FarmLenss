import {
    CalendarDays,
    FileDown,
    Leaf,
    Hash,
} from "lucide-react";

export default function ReportHeader() {
    return (
        <section className="rounded-3xl border bg-white p-8 shadow-sm">

            <div className="flex items-start justify-between">

                {/* Left */}

                <div>

                    <div className="flex items-center gap-3">

                        <div className="rounded-xl bg-green-100 p-3">

                            <Leaf
                                className="text-green-600"
                                size={24}
                            />

                        </div>

                        <div>

                            <p className="text-sm text-zinc-500">
                                Disease Report
                            </p>

                            <h1 className="mt-1 text-3xl font-bold">
                                Tomato • Early Blight
                            </h1>

                        </div>

                    </div>

                    <div className="mt-8 flex flex-wrap gap-8">

                        <div className="flex items-center gap-2">

                            <CalendarDays
                                size={18}
                                className="text-zinc-400"
                            />

                            <div>

                                <p className="text-xs text-zinc-500">
                                    Generated
                                </p>

                                <p className="font-medium">
                                    12 July 2026
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-2">

                            <Hash
                                size={18}
                                className="text-zinc-400"
                            />

                            <div>

                                <p className="text-xs text-zinc-500">
                                    Analysis ID
                                </p>

                                <p className="font-medium">
                                    FL-203912
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Button */}

                <button
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-green-600
                    px-5
                    py-3
                    font-medium
                    text-white
                    transition
                    hover:bg-green-700
                "
                >
                    <FileDown size={18} />

                    Download PDF

                </button>

            </div>

        </section>
    );
}