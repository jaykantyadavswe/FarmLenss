import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

function DashboardLayout({children}) {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-950">
            {/* <Sidebar /> */}

            <div className="flex min-w-0 flex-1 flex-col">
                {/* <Navbar /> */}

                <main className="flex min-h-0 flex-1 overflow-hidden p-5">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;
