"use client";

import { useState, useMemo } from "react";
import { useScrollY, useActiveSection } from "./hooks";

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
  const sectionIds = useMemo(() => navItems.map((n) => n.id), []);
  const activeSection = useActiveSection(sectionIds);

  const isScrolled = scrollY > 50;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`nav-glass ${isScrolled ? "scrolled" : ""} fixed top-0 left-0 right-0 z-[1000] px-6 transition-all duration-300`}
    >
      <div
        className="max-w-[1200px] mx-auto flex items-center justify-between transition-all duration-300"
        style={{ height: isScrolled ? 60 : 72 }}
      >
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/logo.png"
            alt="Payger"
            className="h-8 transition-all duration-300"
            style={{ filter: isScrolled ? "none" : "brightness(0) invert(1)" }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`bg-transparent border-none text-sm font-medium cursor-pointer transition-all duration-200 py-2 relative ${
                isScrolled
                  ? activeSection === item.id
                    ? "nav-link-active"
                    : "nav-link-scrolled"
                  : activeSection === item.id
                    ? "text-white"
                    : "nav-link-hero"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            className="py-2.5 px-6 text-sm rounded-full font-semibold cursor-pointer transition-all duration-300 border-none text-white hover:-translate-y-0.5"
            style={{
              background: isScrolled
                ? "linear-gradient(135deg, #5CA8D2, #06d6a0)"
                : "rgba(255,255,255,0.15)",
              border: isScrolled ? "none" : "1px solid rgba(255,255,255,0.3)",
              boxShadow: isScrolled ? "0 4px 16px rgba(92,168,210,0.3)" : "none",
            }}
            onClick={() => scrollTo("contact")}
          >
            상담 신청
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle bg-transparent border-none text-2xl cursor-pointer transition-transform duration-200"
          style={{
            color: isScrolled ? "#1e293b" : "#ffffff",
            transform: mobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu py-5 px-6 flex flex-col gap-1"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.06)",
            background: "white",
            animation: "fadeUp 0.3s ease",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="bg-transparent border-none text-base cursor-pointer text-left py-3 px-4 rounded-xl transition-all duration-200 hover:bg-surface-blue"
              style={{
                color: activeSection === item.id ? "var(--primary)" : "#1e293b",
                fontWeight: activeSection === item.id ? 600 : 400,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
