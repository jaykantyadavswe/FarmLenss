import ChatWindow from "./chat/ChatWindow";
import ReportPanel from "./report/ReportPanel";
import Sidebar from "./sidebar/Sidebar";

export default function DashboardShell() {
  return (
    <main className="grid h-screen grid-cols-[280px_1fr_380px] bg-zinc-100 overflow-hidden">
      <Sidebar />
      <ChatWindow />
      <ReportPanel />
    </main>
  );
}