"use client";

import { useInView, useStaggeredInView } from "./hooks";

const models = [
  {
    title: "결제 수수료",
    desc: "거래액 기반 합리적인 수수료 구조로 가맹점 및 사용자 모두에게 혜택을 제공합니다.",
    features: ["투명한 수수료 체계", "거래량 기반 할인"],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#bm1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="bm1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    orbColor: "rgba(92,168,210,0.08)",
    accentColor: "#5CA8D2",
  },
  {
    title: "부가 서비스",
    desc: "데이터 분석, 마케팅 솔루션, 기업 맞춤형 통합 서비스를 제공합니다.",
    features: ["AI 기반 데이터 인사이트", "맞춤형 마케팅 도구"],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#bm2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="bm2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#06d6a0" /><stop offset="100%" stopColor="#5CA8D2" /></linearGradient></defs>
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    orbColor: "rgba(6,214,160,0.08)",
    accentColor: "#06d6a0",
  },
];

export default function BusinessModel() {
  const [ref, isVisible] = useInView();
  const [cardsRef, visibleItems] = useStaggeredInView(models.length, 0.1, 200);

  return (
    <section className="py-[120px] px-6 mesh-gradient">
      <div className="max-w-[1000px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">비즈니스 모델</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight text-text-main">
            합리적인 <span className="text-gradient">수익 구조</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-[480px] mx-auto text-[15px] leading-relaxed">
            성장과 함께하는 지속 가능한 비즈니스 모델
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {models.map((item, i) => (
            <div
              key={i}
              className={`card-hover p-10 rounded-[20px] bg-white relative overflow-hidden stagger-item ${visibleItems.includes(i) ? "visible" : ""}`}
            >
              {/* Decorative orb */}
              <div
                className="absolute -top-8 -right-8 w-[140px] h-[140px] rounded-full"
                style={{ background: item.orbColor }}
              />

              <div className="relative z-10">
                <div className="icon-box w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(92,168,210,0.1)" }}>
                  {item.icon}
                </div>
                <h3 className="text-[22px] font-bold mb-3 text-text-main">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-text-muted mb-6">{item.desc}</p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {item.features.map((f, j) => (
                    <span key={j} className="feature-badge">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.accentColor }} />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
