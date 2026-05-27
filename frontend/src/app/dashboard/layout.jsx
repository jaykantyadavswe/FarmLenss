import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

function DashboardLayout({children}) {
    return (
        <div className="flex h-screen">

            {/* Sidebar */}
            <Sidebar />

            {/* Main */}
            <div className="flex-1 flex flex-col">
                <Navbar />

                <main className="flex-1 flex gap-4 p-4 overflow-hidden">
                    {children}
                </main>
            </div>

        </div>
    )
}

export default DashboardLayout;