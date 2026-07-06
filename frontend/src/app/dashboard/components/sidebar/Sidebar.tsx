import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarMenu from "./SidebarMenu";


export default function Sidebar() {
  return (
    <aside className="flex h-full w-65 grid grid-cols-1 grid-row-3 bg-white">
      <div className="">
        <SidebarHeader />
      </div>
      <div className=" ">
        <SidebarMenu />
      </div>
      <div className="row-spam-2 row-start-11 row-end-12">
        <SidebarFooter />
      </div>
    </aside>
  );
}