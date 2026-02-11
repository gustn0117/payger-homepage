export default function Footer() {
  return (
    <footer
      className="pt-16 pb-10 px-6"
      style={{
        background: "linear-gradient(180deg, #3a7a9e 0%, #2d6a8a 100%)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left - Brand */}
          <div className="max-w-[360px]">
            <div className="flex items-center mb-5">
              <img src="/logo.png" alt="Payger" className="h-7" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-6">
              유통·물류 전문 결제 솔루션
              <br />
              안전하고 편리한 차세대 결제 플랫폼
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:overwrap0@gmail.com" className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                overwrap0@gmail.com
              </a>
              <a href="tel:032-217-9500" className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                032-217-9500
              </a>
            </div>
          </div>

          {/* Right - Quick Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-semibold text-white/80 mb-4">서비스</h4>
              <div className="flex flex-col gap-2.5">
                {["모바일 결제", "카드 결제", "AI 솔루션"].map((s, i) => (
                  <span key={i} className="text-[13px] text-white/45 hover:text-white/70 cursor-pointer transition-colors">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/80 mb-4">회사</h4>
              <div className="flex flex-col gap-2.5">
                {["이용약관", "개인정보처리방침", "사업자정보"].map((s, i) => (
                  <span key={i} className="text-[13px] text-white/45 hover:text-white/70 cursor-pointer transition-colors">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="max-w-[1200px] mx-auto mt-12 pt-6 flex justify-between items-center flex-wrap gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span className="text-[13px] text-white/40">&copy; 2026 Payger. All rights reserved.</span>
        <div className="flex gap-5">
          {["이용약관", "개인정보처리방침", "사업자정보"].map((s, i) => (
            <span key={i} className="text-[13px] text-white/40 cursor-pointer hover:text-white/70 transition-colors">
              {s}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
