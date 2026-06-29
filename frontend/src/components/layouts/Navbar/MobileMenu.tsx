"use client";

import { X } from "lucide-react";
import { navLinks } from "./NavLinks";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function MobileMenu({
  open,
  setOpen,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden">
      <div className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-zinc-950 shadow-xl p-6">

        <button
          onClick={() => setOpen(false)}
          className="mb-10"
        >
          <X />
        </button>

        <div className="flex flex-col gap-6">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-green-600 transition"
            >
              {item.name}
            </a>
          ))}

          <button className="mt-6 rounded-xl border py-3">
            Login
          </button>

          <button className="rounded-xl bg-green-600 py-3 text-white">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
}