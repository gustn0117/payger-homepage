"use client";

import { useState } from "react";
import { useScrollY } from "./hooks";

const navItems = [
  { label: "서비스", id: "services" },
  { label: "고객사", id: "clients" },
  { label: "경쟁우위", id: "advantages" },
  { label: "플랫폼", id: "platform" },
  { label: "로드맵", id: "roadmap" },
  { label: "문의", id: "contact" },
];

export default function Navbar() {
  const scrollY = useScrollY();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="nav-glass fixed top-0 left-0 right-0 z-[1000] px-6 transition-all duration-300"
    >
      <div
        className="max-w-[1200px] mx-auto flex items-center justify-between transition-all duration-300"
        style={{ height: scrollY > 50 ? 60 : 72 }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-extrabold text-lg text-white">
            P
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Payger
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="bg-transparent border-none text-text-muted text-sm font-medium cursor-pointer transition-colors duration-200 py-2 hover:text-text-main"
            >
              {item.label}
            </button>
          ))}
          <button
            className="btn-primary !py-2.5 !px-6 !text-sm"
            onClick={() => scrollTo("contact")}
          >
            상담 신청
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle bg-transparent border-none text-white text-2xl cursor-pointer"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu py-5 px-6 border-t border-dark-border flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="bg-transparent border-none text-text-main text-base cursor-pointer text-left py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
