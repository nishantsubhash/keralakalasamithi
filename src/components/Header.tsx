"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  {/* Logo removed from header */}

  return (
    <header
      className="bg-gradient-to-r from-[#185b34] via-[#218c4a] to-[#fffaf0] border-b border-[#d4af37]/50 shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300 min-h-[72px] py-0 backdrop-blur"
      aria-label="Site Header"
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full transition-all`}
        style={{ minHeight: "72px" }}
      >
  {/* Logo removed from header */}
        {/* Desktop Nav */}
        <nav className="hidden md:flex" aria-label="Main Navigation">
          <ul className="flex gap-6 md:gap-8 items-center">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`font-bold px-2 py-1 rounded transition-colors text-white hover:text-[#d4af37] focus-visible:ring-2 focus-visible:ring-[#d4af37]/50 outline-none ${
                    isActive(n.href, pathname)
                      ? "text-[#d4af37] underline underline-offset-4"
                      : ""
                  }`}
                  aria-current={isActive(n.href, pathname) ? "page" : undefined}
                >
                  {n.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-[#185b34] focus:outline-none"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown */}
      <nav
        className={`md:hidden bg-[#185b34]/95 shadow-lg border-t overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
        aria-label="Mobile Navigation"
      >
        <ul className="flex flex-col px-4 py-2">
          {navItems.map((n, i) => (
            <li
              key={n.href}
              className={i !== 0 ? "border-t border-[#d4af37]/30" : ""}
            >
              <Link
                href={n.href}
                className={`block px-2 py-2 rounded transition-colors text-[#fffaf0] hover:text-[#d4af37] focus-visible:ring-2 focus-visible:ring-[#d4af37]/50 outline-none ${
                  isActive(n.href, pathname)
                    ? "text-[#d4af37] underline underline-offset-4"
                    : ""
                }`}
                aria-current={isActive(n.href, pathname) ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {n.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
