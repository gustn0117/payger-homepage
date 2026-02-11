"use client";

import { useInView } from "./hooks";

export default function Contact() {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="contact"
      className="py-[120px] px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #5CA8D2 0%, #4A9BC7 50%, #3d8ab0 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500,
          top: "-20%", right: "-10%",
          animation: "rotate-slow 80s linear infinite",
          opacity: 0.04,
        }}
      >
        <svg viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="220" stroke="white" strokeWidth="0.5" strokeDasharray="6 10" />
          <circle cx="250" cy="250" r="160" stroke="white" strokeWidth="0.3" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto">
        <div
          ref={ref}
          className={`animate-in ${isVisible ? "visible" : ""}`}
        >
          {/* Full-width split layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left - Text */}
            <div className="flex-1 max-lg:text-center">
              <h2 className="text-4xl max-md:text-[28px] font-extrabold mb-5 tracking-tight text-white leading-tight">
                함께 성장할
                <br />
                <span className="text-white">파트너</span>를 기다립니다
              </h2>
              <p className="text-base leading-relaxed text-white/60 max-w-[420px] max-lg:mx-auto mb-10">
                페이져는 유통·물류 업계의 결제 혁신을 리드합니다.
                지금 바로 상담을 신청하고 귀사에 최적화된 결제 솔루션을 경험하세요.
              </p>

              {/* Contact Methods */}
              <div className="flex flex-col gap-4 max-lg:items-center">
                <a
                  href="mailto:overwrap0@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <span className="text-sm font-medium">overwrap0@gmail.com</span>
                </a>
                <a
                  href="tel:032-217-9500"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <span className="text-sm font-medium">032-217-9500</span>
                </a>
              </div>
            </div>

            {/* Right - CTA Card */}
            <div className="flex-shrink-0 w-full lg:w-[420px]">
              <div
                className="p-10 rounded-[28px] relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                {/* Decorative orbs */}
                <div
                  className="absolute -top-[80px] -right-[80px] w-[200px] h-[200px] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)" }}
                />
                <div
                  className="absolute -bottom-[60px] -left-[60px] w-[180px] h-[180px] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(6,214,160,0.08), transparent)" }}
                />

                <div className="relative z-10">
                  <div className="text-lg font-bold text-white mb-2">무료 상담 신청</div>
                  <p className="text-sm text-white/50 mb-8">
                    지금 바로 상담을 신청하세요.
                  </p>

                  <button
                    className="btn-hero w-full text-center justify-center"
                    onClick={() => window.location.href = "mailto:overwrap0@gmail.com"}
                  >
                    상담 문의하기
                    <svg className="inline-block ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
