import { LucideIcon } from "lucide-react";

export interface SidebarItemType {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface HistoryItem {
  id: string;
  title: string;
  createdAt: string;
}

export interface HistoryGroup {
  title: string;
  items: HistoryItem[];
}