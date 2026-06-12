"use client";
import { useState, useRef, useEffect  } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="relative z-50 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
            <div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="font-semibold text-slate-900">Dashboard</span>
                    <span>/</span>
                    <span>Crop Analysis</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">Upload a crop image and review AI diagnosis</p>
            </div>

            <div className="flex items-center gap-3">
                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50">
                    <Settings className="h-5 w-5" />
                </button>

                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3 shadow-sm transition hover:bg-slate-50"
                    >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                            JK
                        </span>
                        <ChevronDown className="h-4 w-4 text-slate-500" />
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-3 w-48 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                            <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50">
                                <User className="h-4 w-4" /> Profile
                            </button>

                            <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50">
                                <Settings className="h-4 w-4" /> Settings
                            </button>

                            <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50">
                                <LogOut className="h-4 w-4" /> Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
