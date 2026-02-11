"use client";

import { useInView, useStaggeredInView } from "./hooks";

const platforms = [
  {
    title: "소비자 마켓",
    features: ["간편하고 빠른 결제", "다양한 결제수단 제공"],
    iconBg: "rgba(92,168,210,0.12)",
    num: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#plt1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="plt1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#7BC4E8" /></linearGradient></defs>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "가맹점 마켓",
    features: ["매출 관리 시스템", "실시간 정산 지원"],
    iconBg: "rgba(6,214,160,0.12)",
    num: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#plt2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="plt2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#06d6a0" /><stop offset="100%" stopColor="#5CA8D2" /></linearGradient></defs>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "관리자 시스템",
    features: ["통합 운영 관리", "데이터 분석 대시보드"],
    iconBg: "rgba(168,85,247,0.12)",
    num: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#plt3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="plt3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a855f7" /><stop offset="100%" stopColor="#5CA8D2" /></linearGradient></defs>
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "API 연동",
    features: ["타 서비스 연계", "RESTful API 제공"],
    iconBg: "rgba(251,191,36,0.12)",
    num: "04",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#plt4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="plt4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#fbbf24" /><stop offset="100%" stopColor="#f59e0b" /></linearGradient></defs>
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
];

export default function Platform() {
  const [ref, isVisible] = useInView();
  const [cardsRef, visibleItems] = useStaggeredInView(platforms.length, 0.1, 120);

  return (
    <section
      id="platform"
      className="py-[120px] px-6 relative"
      style={{ background: "#eef5fa" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">서비스 플랫폼</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight text-text-main">
            올인원 <span className="text-gradient">결제 플랫폼</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-[480px] mx-auto text-[15px] leading-relaxed">
            소비자부터 관리자까지, 모든 결제 과정을 하나로 연결합니다
          </p>
        </div>

        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-[26px] left-[12.5%] right-[12.5%] h-[2px]" style={{ background: "linear-gradient(90deg, rgba(92,168,210,0.15), rgba(6,214,160,0.15))" }} />
          <div className="flex justify-between px-[9%]">
            {platforms.map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-white border-2 relative z-10" style={{ borderColor: "rgba(92,168,210,0.4)" }} />
            ))}
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((p, i) => (
            <div
              key={i}
              className={`card-hover bg-white rounded-[20px] p-8 flex flex-col gap-5 relative overflow-hidden stagger-item ${visibleItems.includes(i) ? "visible" : ""}`}
            >
              <div className="number-badge text-text-main" style={{ fontSize: 60 }}>{p.num}</div>
              <div
                className="icon-box w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl"
                style={{ background: p.iconBg }}
              >
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main">{p.title}</h3>
              <div className="flex flex-col gap-2.5">
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-text-muted">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
