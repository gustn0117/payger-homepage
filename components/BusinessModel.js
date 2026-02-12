"use client";

import { useInView } from "./hooks";

const models = [
  {
    title: "결제 수수료",
    desc: "거래액 기반 합리적인 수수료 구조로 가맹점 및 사용자 모두에게 혜택을 제공합니다.",
    features: [],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#bm1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="bm1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    accentColor: "#5CA8D2",
  },
  {
    title: "부가 서비스",
    desc: "데이터 분석, 마케팅 솔루션, 기업 맞춤형 통합 서비스를 제공합니다.",
    features: [],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#06d6a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20V14" />
      </svg>
    ),
    accentColor: "#06d6a0",
  },
];

export default function BusinessModel() {
  const [ref, isVisible] = useInView();
  const [leftRef, leftVisible] = useInView(0.2);
  const [rightRef, rightVisible] = useInView(0.2);

  return (
    <section id="business" className="py-[120px] px-6 mesh-gradient">
      <div className="max-w-[1100px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">비즈니스 모델</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight text-text-main">
            합리적인 <span className="text-gradient">수익 구조</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-[480px] mx-auto text-[15px] leading-relaxed">
            성장과 함께하는 지속 가능한 비즈니스 모델
          </p>
        </div>

        {/* Side-by-side with visual emphasis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {models.map((item, i) => {
            const cardRef = i === 0 ? leftRef : rightRef;
            const cardVisible = i === 0 ? leftVisible : rightVisible;
            return (
              <div
                key={i}
                ref={cardRef}
                className={`animate-in ${cardVisible ? "visible" : ""} card-hover p-10 rounded-[24px] bg-white relative overflow-hidden`}
              >
                {/* Large number background */}
                <div className="absolute -top-4 -right-2 text-[120px] font-extrabold leading-none text-text-main/[0.03] pointer-events-none" style={{ fontFamily: "Syne, sans-serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${item.accentColor}, transparent)` }} />

                <div className="relative z-10">
                  <div className="icon-box w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(92,168,210,0.08)" }}>
                    {item.icon}
                  </div>
                  <h3 className="text-[24px] font-bold mb-3 text-text-main">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-text-muted">{item.desc}</p>

                  {item.features.length > 0 && (
                    <div className="flex flex-col gap-3 mt-8">
                      {item.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: `${item.accentColor}15` }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={item.accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-sm text-text-muted font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
