"use client";

import {
  User,
  Bell,
  Palette,
  Brain,
  Shield,
  AlertTriangle,
} from "lucide-react";

const menus = [
  {
    icon: User,
    title: "Profile",
    href: "#profile"
  },
  {
    icon: Bell,
    title: "Notifications",
    href: "#notifications"
  },
  {
    icon: Palette,
    title: "Appearance",
    href: "#appearance"
  },
  {
    icon: Brain,
    title: "AI Preferences",
    href: "#ai"
  },
  {
    icon: Shield,
    title: "Security",
    href: "#security"
  },
  {
    icon: AlertTriangle,
    title: "Danger Zone",
    href: "#danger"
  },
];

export default function SettingsSidebar() {
  return (
    <div className="rounded-3xl border bg-white p-4 shadow-sm">

      <nav className="space-y-2">

        {menus.map((menu) => {

          const Icon = menu.icon;

          return (
            <a
              key={menu.title}
              href={menu.href}
              className="flex w-full scroll-smooth items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-green-50 hover:text-green-600"
            >
              <Icon size={20} />

              {menu.title}
            </a>
          );
        })}

      </nav>

    </div>
  );
}