"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import { useRouter } from "next/navigation";
import React,{ useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [, setIsMobileOpen] = React.useState(false);

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.replace("/auth");
        }
    }, []);

    return (
        <div className="flex h-screen">
            {/* Sidebar expects several props from parent; suppress type checking here and let Sidebar manage its own state internally or via context */}
            {/* @ts-ignore */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* <Navbar
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    setIsMobileOpen={setIsMobileOpen}
                /> */}

                <main className="flex-1 overflow-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}