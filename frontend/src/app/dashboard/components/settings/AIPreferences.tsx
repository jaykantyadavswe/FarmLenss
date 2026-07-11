"use client";

import { Brain } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

import { useState } from "react";

export default function AIPreferences() {

    const [autoSave, setAutoSave] = useState(true);

    return (

        <section className="rounded-3xl border bg-white p-8 shadow-sm">

            <div className="mb-8 flex items-center gap-3">

                <div className="rounded-xl bg-green-100 p-3">
                    <Brain className="text-green-600" />
                </div>

                <div>

                    <h2 className="text-2xl font-bold">
                        AI Preferences
                    </h2>

                    <p className="text-zinc-500">
                        Configure how FarmLens AI analyzes your crops.
                    </p>

                </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

                <Select
                    label="AI Model"
                    options={[
                        "Gemini 2.5 Flash",
                        "Gemini 2.5 Pro",
                    ]}
                />

                <Select
                    label="Analysis Mode"
                    options={[
                        "Fast",
                        "Balanced",
                        "Detailed",
                    ]}
                />

                <Select
                    label="Image Quality"
                    options={[
                        "Standard",
                        "High",
                    ]}
                />

                <Select
                    label="Confidence Threshold"
                    options={[
                        "80%",
                        "85%",
                        "90%",
                        "95%",
                    ]}
                />

            </div>

            <div className="mt-8 flex items-center justify-between rounded-2xl border p-5">

                <div>

                    <h3 className="font-semibold">
                        Auto Save Reports
                    </h3>

                    <p className="text-sm text-zinc-500">
                        Automatically save every completed analysis.
                    </p>

                </div>

                <ToggleSwitch
                    enabled={autoSave}
                    onChange={() => setAutoSave(!autoSave)}
                />

            </div>

        </section>

    );

}

function Select({
    label,
    options,
}: {
    label: string;
    options: string[];
}) {
    return (
        <div id="ai">
            <label className="mb-2 block font-medium">
                {label}
            </label>

            <select className="w-full rounded-xl border px-4 py-3">
                {options.map((item) => (
                    <option key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}