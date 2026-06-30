import SidebarHeader from "./SidebarHeader";
import NewAnalysisButton from "./NewAnalysisButton";
import SidebarSearch from "./SidebarSearch";
import SidebarHistory from "./SidebarHistory";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-[280px] flex-col border-r bg-white">

      {/* Logo */}
      <SidebarHeader />

      {/* New Analysis */}
      <div className="p-4">
        <NewAnalysisButton />
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <SidebarSearch />
      </div>

      {/* Scrollable History */}
      <div className="flex-1 overflow-y-auto px-4">
        <SidebarHistory />
      </div>

      {/* User */}
      <SidebarFooter />

    </aside>
  );
}