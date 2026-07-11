"use client";

import { useState } from "react";

import ToggleSwitch from "./ToggleSwitch";

export default function NotificationSection() {

    const [email, setEmail] = useState(true);

    const [weather, setWeather] = useState(true);

    const [ai, setAI] = useState(true);

    const [marketing, setMarketing] = useState(false);

    const settings = [
        {
            title: "Email Notifications",
            description: "Receive important account emails.",
            enabled: email,
            toggle: () => setEmail(!email),
        },
        {
            title: "AI Analysis Ready",
            description: "Notify when analysis is completed.",
            enabled: ai,
            toggle: () => setAI(!ai),
        },
        {
            title: "Weather Alerts",
            description: "Receive severe weather updates.",
            enabled: weather,
            toggle: () => setWeather(!weather),
        },
        {
            title: "Marketing Emails",
            description: "Receive product updates.",
            enabled: marketing,
            toggle: () => setMarketing(!marketing),
        },
    ];

    return (

        <section className="rounded-3xl border bg-white p-8 shadow-sm" id="notifications">

            <h2 className="text-2xl font-bold">

                Notifications

            </h2>

            <p className="mt-2 text-zinc-500">

                Choose what notifications you'd like to receive.

            </p>

            <div className="mt-8 space-y-6">

                {settings.map((item) => (

                    <div
                        key={item.title}
                        className="flex items-center justify-between rounded-2xl border p-5"
                    >

                        <div>

                            <h3 className="font-semibold">

                                {item.title}

                            </h3>

                            <p className="mt-1 text-sm text-zinc-500">

                                {item.description}

                            </p>

                        </div>

                        <ToggleSwitch
                            enabled={item.enabled}
                            onChange={item.toggle}
                        />

                    </div>

                ))}

            </div>

        </section>

    );

}