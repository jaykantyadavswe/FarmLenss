"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarItemType } from "./types";

export default function SidebarItem({
  title,
  href,
  icon: Icon,
}: SidebarItemType) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        transition-all

        ${
          active
            ? "bg-green-100 text-green-700"
            : "hover:bg-zinc-100"
        }
      `}
    >
      <Icon size={18} />

      <span className="text-sm font-medium">
        {title}
      </span>

    </Link>
  );
}