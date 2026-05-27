"use client";
import { useState, useRef, useEffect  } from "react";
import { FaGear } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";


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
        <div className="h-16 px-6 flex items-center justify-between bg-white/40 backdrop-blur-xl shadow-sm relative z-50">

            {/* 🔹 Left - Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium text-gray-800">Dashboard</span>
                <span>/</span>
                <span className="text-gray-500">Crop Analysis</span>
            </div>

            {/* 🔹 Right Section */}
            <div className="flex items-center gap-4">

                {/* ⚙️ Settings */}
                <button className="text-xl hover:scale-110 transition">
                <FaGear />
                </button>

                {/* 👤 Profile */}
                <div className="relative" ref={dropdownRef}>
                    <div
                        onClick={() => setOpen(!open)}
                        className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center cursor-pointer"
                    >
                        JK
                    </div>

                    {/* 🔽 Dropdown */}
                    {open && (
                        <div className="absolute right-0 mt-2 w-40 bg-white 
  rounded-xl shadow-lg border overflow-hidden z-50">

                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                <IoPersonCircle className="" /> Profile
                            </button>

                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                <span><FaGear /></span> Settings
                            </button>

                            <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                                🚪 Logout
                            </button>

                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}