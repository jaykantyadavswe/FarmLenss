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
    href: "/dashboard/aiAssistant",
    icon: MessageSquare,
  },
  {
    title: "Reports",
    href: "/dashboard/report",
    icon: FileChartColumn,
  },
  {
    title: "History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "Market",
    href: "/dashboard/markets",
    icon: TrendingUpDown,
  },
  {
    title: "Setting",
    href: "/dashboard/settings",
    icon: Settings,
  },
];