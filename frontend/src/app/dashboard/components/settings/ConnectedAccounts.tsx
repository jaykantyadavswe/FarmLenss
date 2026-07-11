"use client";

import {
    X,
    // Github,
} from "lucide-react";

const providers = [
    {
        name: "Google",
        icon: X,
        connected: true,
    },
    {
        name: "GitHub",
        icon: X,
        connected: false,
    },
];

export default function ConnectedAccounts() {

    return (

        <section className="rounded-3xl border bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold">
                Connected Accounts
            </h2>

            <div className="mt-8 space-y-4">

                {providers.map((provider) => {

                    const Icon = provider.icon;

                    return (

                        <div
                            key={provider.name}
                            className="flex items-center justify-between rounded-2xl border p-5"
                        >

                            <div className="flex items-center gap-4">

                                <Icon size={24}/>

                                <span className="font-semibold">
                                    {provider.name}
                                </span>

                            </div>

                            <button
                                className={`rounded-xl px-5 py-2 text-sm font-medium

                                ${
                                    provider.connected
                                    ? "bg-green-100 text-green-700"
                                    : "bg-zinc-100"
                                }

                                `}
                            >

                                {provider.connected
                                    ? "Connected"
                                    : "Connect"}

                            </button>

                        </div>

                    );

                })}

            </div>

        </section>

    );

}