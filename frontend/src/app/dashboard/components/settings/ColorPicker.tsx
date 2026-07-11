"use client";

import { useState } from "react";

const colors = [

    "#22c55e",

    "#2563eb",

    "#9333ea",

    "#ea580c",

    "#ef4444",

];

export default function ColorPicker() {

    const [selected, setSelected] =

        useState(colors[0]);

    return (

        <div className="flex gap-4">

            {colors.map((color) => (

                <button

                    key={color}

                    onClick={() =>

                        setSelected(color)

                    }

                    style={{

                        background: color,

                    }}

                    className={`h-10 w-10 rounded-full border-4 transition

                    ${selected === color

                            ? "border-black"

                            : "border-transparent"

                        }

                    `}

                />

            ))}

        </div>

    );

}