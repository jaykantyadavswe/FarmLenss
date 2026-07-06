import Navbar from "./components/layout/Navbar";
import SidebarLayout from "./components/layout/SidebarLayout";
import WorkspaceLayout from "./components/layout/WorkspaceLayout";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-12 bg-zinc-700">
        <SidebarLayout />
      <div className="col-start-3 col-end-13">
        <Navbar />
        <WorkspaceLayout />
      </div>
    </div>
  );
}