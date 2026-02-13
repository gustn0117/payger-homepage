"use client";

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-10 px-6"
      style={{
        background: "linear-gradient(180deg, #3a7a9e 0%, #2d6a8a 100%)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Brand + Nav */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img src="/logo.png" alt="Payger" className="h-7" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              유통·물류 전문 결제 솔루션
            </p>
          </div>

          {/* Nav - 상단 메뉴와 동일 */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: "서비스", id: "services" },
              { label: "고객사", id: "clients" },
              { label: "경쟁우위", id: "advantages" },
              { label: "플랫폼", id: "platform" },
              { label: "로드맵", id: "roadmap" },
              { label: "문의", id: "contact" },
            ].map((item, i) => (
              <span key={i} className="text-[13px] text-white/50 hover:text-white cursor-pointer transition-colors" onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}>{item.label}</span>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <a href="mailto:overwrap0@gmail.com" className="text-[13px] text-white/45 hover:text-white/70 transition-colors">overwrap0@gmail.com</a>
            <a href="tel:032-217-9500" className="text-[13px] text-white/45 hover:text-white/70 transition-colors">032-217-9500</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="max-w-[1100px] mx-auto mt-12 pt-6 flex justify-between items-center flex-wrap gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span className="text-[13px] text-white/40">&copy; 2026 Payger. All rights reserved.</span>
        <div className="flex gap-5">
          <span className="text-[13px] text-white/40 cursor-pointer hover:text-white/70 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            맨 위로
          </span>
        </div>
      </div>
    </footer>
  );
}
