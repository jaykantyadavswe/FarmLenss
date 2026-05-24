"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    const path = usePathname();
    return (
        <div className="flex justify-between items-center px-6 py-4 bg-green-600 text-white shadow-md">

            <h1
                onClick={() => router.push("/dashboard")}
                className="text-xl font-bold cursor-pointer"
            >
                🌾 FarmLens
            </h1>

            <div className="flex gap-6 items-center">

                <button
                    onClick={() => router.push("/dashboard")}
                    className={path === "/dashboard" ? "underline font-bold" : ""}
                >
                    Dashboard
                </button>

                <button
                    onClick={() => router.push("/upload")}
                    className="hover:underline"
                >
                    Upload
                </button>

                <button
                    onClick={() => router.push("/history")}
                    className="hover:underline"
                >
                    History
                </button>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}