"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./NavLinks";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
            ? "border-b border-green-400 bg-white/80 backdrop-blur-xl shadow-sm"
            : "bg-green-50"
          }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="/">
            <Logo />
          </a>

          {/* Desktop */}

          <nav className="hidden items-center gap-8 lg:flex">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-zinc-600 transition hover:text-green-600 hover:border-b"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Desktop Buttons */}

          <div className="hidden items-center gap-4 lg:flex">

            <button className="rounded-xl border border-green-600 px-5 py-2 font-medium hover:bg-green-700 hover:text-white cursor-pointer" onClick={() => router.push("/auth")}>
              Login
            </button>

            <button className="rounded-xl bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700 cursor-pointer" onClick={() => router.push("/dashboard")}>
              Get Started
            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <Menu />
          </button>

        </div>
      </header>

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}