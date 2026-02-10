"use client";

import { useInView } from "./hooks";

const models = [
  {
    title: "결제 수수료",
    desc: "거래액 기반 합리적인 수수료 구조로 가맹점 및 사용자 모두에게 혜택을 제공합니다.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#bm1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="bm1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    orbColor: "rgba(92,168,210,0.08)",
  },
  {
    title: "부가 서비스",
    desc: "데이터 분석, 마케팅 솔루션, 기업 맞춤형 통합 서비스를 제공합니다.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#bm2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="bm2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#06d6a0" /><stop offset="100%" stopColor="#5CA8D2" /></linearGradient></defs>
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    orbColor: "rgba(6,214,160,0.08)",
  },
];

export default function BusinessModel() {
  const [ref, isVisible] = useInView();

  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1000px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">비즈니스 모델</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight text-text-main">
            합리적인 <span className="text-gradient">수익 구조</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-[20px] bg-white border border-dark-border relative overflow-hidden"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              <div
                className="absolute -top-5 -right-5 w-[120px] h-[120px] rounded-full"
                style={{ background: item.orbColor }}
              />
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(92,168,210,0.1)" }}>{item.icon}</div>
              <h3 className="text-[22px] font-bold mb-3 text-text-main">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
