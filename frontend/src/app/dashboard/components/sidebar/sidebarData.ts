export interface HistoryItem {
  id: string;
  title: string;
  crop: string;
  dateGroup: "Today" | "Yesterday" | "Previous 7 Days";
  time: string;
}

import {
  LayoutDashboard,
  History,
  MessageSquare,
  Settings,
  ScanSearch,
  FileChartColumn,
  TrendingUpDown
} from "lucide-react";

import { SidebarItemType } from "./types";

export const menuItems: SidebarItemType[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analysis Crop",
    href: "/dashboard/analysiscrop",
    icon: ScanSearch,
  },
  {
    title: "AI Assistant",
    href: "#",
    icon: MessageSquare,
  },
  {
    title: "Reports",
    href: "/dashboard/repors",
    icon: FileChartColumn,
  },
  {
    title: "History",
    href: "/dashboard/settings",
    icon: History,
  },
  {
    title: "Market",
    href: "/dashboard/settings",
    icon: TrendingUpDown,
  },
  {
    title: "Setting",
    href: "/dashboard/settings",
    icon: Settings,
  },
];