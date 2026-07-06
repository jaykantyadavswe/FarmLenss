"use client";


import SidebarItem from "./SidebarItem";
import { menuItems } from "./sidebarData";

export default function SidebarMenu() {
  return (
    <div className="space-y-1 p-4">

      {menuItems.map((item) => (
        <SidebarItem
          key={item.title}
          {...item}
        />
      ))}

    </div>
  );
}