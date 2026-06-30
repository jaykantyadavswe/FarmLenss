import type { ReactNode } from "react";

import Sidebar from "./components/sidebar/Sidebar";
import ReportPanel from "./components/report/ReportPanel";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <main className="grid h-screen grid-cols-[280px_1fr_380px] overflow-hidden bg-zinc-100">

      {/* Left Sidebar */}
      <Sidebar />

      {/* Dynamic Page Content */}
      <section className="overflow-hidden">
        {children}
      </section>

      {/* Right Report Panel */}
      <ReportPanel />

    </main>
  );
}