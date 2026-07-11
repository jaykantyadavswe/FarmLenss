"use client";

import { useState } from "react";

import {
    Sun,
    Moon,
    Monitor,
} from "lucide-react";

export default function ThemeSelector() {

    const [theme, setTheme] =

        useState("system");

    const themes = [

        {
            name: "light",
            icon: Sun,
        },

        {
            name: "dark",
            icon: Moon,
        },

        {
            name: "system",
            icon: Monitor,
        },

    ];

    return (

        <div className="grid grid-cols-3 gap-4">

            {themes.map((item) => {

                const Icon = item.icon;

                return (

                    <button

                        key={item.name}

                        onClick={() =>

                            setTheme(item.name)

                        }

                        className={`rounded-2xl border p-6 transition

                        ${theme === item.name

                                ? "border-green-600 bg-green-50"

                                : ""

                            }

                        `}

                    >

                        <Icon
                            className="mx-auto mb-4"
                            size={28}
                        />

                        <p className="capitalize">

                            {item.name}

                        </p>

                    </button>

                );

            })}

        </div>

    );

}