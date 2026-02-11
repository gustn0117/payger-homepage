export default function Footer() {
  return (
    <footer
      className="pt-[60px] pb-10 px-6"
      style={{ background: "#3a7a9e", borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="Payger" className="h-7" style={{ filter: "brightness(0) invert(1)" }} />
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            유통·물류 전문 결제 솔루션
            <br />
            안전하고 편리한 차세대 결제 플랫폼
          </p>
          <div className="flex flex-col gap-2">
            <a href="mailto:overwrap0@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">overwrap0@gmail.com</a>
            <a href="tel:032-217-9500" className="text-sm text-white/60 hover:text-white transition-colors">032-217-9500</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1200px] mx-auto mt-10 pt-6 flex justify-between items-center flex-wrap gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <span className="text-[13px] text-white/50">© 2026 Payger. All rights reserved.</span>
        <div className="flex gap-5">
          {["이용약관", "개인정보처리방침", "사업자정보"].map((s, i) => (
            <span key={i} className="text-[13px] text-white/50 cursor-pointer hover:text-white transition-colors">
              {s}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
