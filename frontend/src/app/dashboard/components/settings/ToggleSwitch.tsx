"use client";

interface ToggleProps {
    enabled: boolean;
    onChange: () => void;
}

export default function ToggleSwitch({
    enabled,
    onChange,
}: ToggleProps) {

    return (

        <button
            onClick={onChange}
            className={`relative h-7 w-12 rounded-full transition-all duration-300

            ${enabled
                    ? "bg-green-600"
                    : "bg-zinc-300"
                }

            `}
        >

            <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all

                ${enabled
                        ? "left-6"
                        : "left-1"
                    }

                `}
            />

        </button>

    );
}