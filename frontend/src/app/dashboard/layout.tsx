import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/layout/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar />

        <main className="flex-1 overflow-y-auto bg-zinc-50">
          {children}
        </main>

      </div>

    </div>
  );
}