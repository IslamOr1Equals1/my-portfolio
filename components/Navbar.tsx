"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { href: "/", label: "~/home" },
  { href: "/about", label: "~/about" },
  { href: "/blog", label: "~/blog" },
  { href: "/portfolio", label: "~/portfolio" },
  { href: "/tools", label: "~/tools" },
  { href: "/contact", label: "~/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(10, 14, 26, 0.85)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded flex items-center justify-center"
            style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.3)" }}
          >
            <Shield size={16} style={{ color: "var(--green)" }} />
          </div>
          <span
            className="font-mono text-sm font-semibold tracking-wider"
            style={{ color: "var(--green)" }}
          >
            root<span style={{ color: "var(--muted)" }}>@</span>
            <span style={{ color: "var(--cyan)" }}>yourname</span>
            <span style={{ color: "var(--muted)" }}>:~#</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded text-xs font-mono transition-all duration-200"
                style={{
                  color: isActive ? "var(--green)" : "var(--muted)",
                  background: isActive ? "rgba(0,255,136,0.08)" : "transparent",
                  border: isActive ? "1px solid rgba(0,255,136,0.2)" : "1px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded"
          style={{ color: "var(--muted)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-1 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 px-3 rounded text-sm font-mono"
                style={{
                  color: isActive ? "var(--green)" : "var(--muted)",
                  background: isActive ? "rgba(0,255,136,0.08)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}