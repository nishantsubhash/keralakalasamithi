"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Activities", href: "/activities" },
  { name: "Culture", href: "/culture" },
  { name: "Magazine", href: "/magazine" },
  { name: "Gallery", href: "/gallery" },
  { name: "Join", href: "/join" },
  { name: "Contact", href: "/contact" },
];

import { useState } from "react";
export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="font-bold text-lg md:text-xl text-brand">Kerala Kala Samithi</div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 font-medium">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm md:text-base text-gray-700 hover:text-brand transition-colors ${isActive ? "text-brand border-b-2 border-brand pb-1" : ""}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-brand focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-sm border-t">
          <ul className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block text-base text-gray-700 hover:text-brand transition-colors ${isActive ? "text-brand border-b-2 border-brand pb-1" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
