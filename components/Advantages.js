"use client";

import { useInView, useStaggeredInView } from "./hooks";

const advantages = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#adv1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="adv1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "업계 특화",
    desc: "유통·물류업 거래 특성을 반영한 맞춤형 결제 시스템",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#adv2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="adv2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "보안성",
    desc: "금융권 수준의 보안 기술과 개인정보 보호",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#adv3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="adv3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /><circle cx="12" cy="16" r="1" />
      </svg>
    ),
    title: "편의성",
    desc: "간편한 인증과 직관적인 UI/UX 설계",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#adv4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="adv4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" /><line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    title: "확장성",
    desc: "다양한 가맹점 및 서비스와의 연동 가능",
  },
];

export default function Advantages() {
  const [ref, isVisible] = useInView();
  const [cardsRef, visibleItems] = useStaggeredInView(advantages.length, 0.1, 150);

  return (
    <section id="advantages" className="py-[120px] px-6 mesh-gradient">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* Left - Sticky Heading */}
          <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} lg:w-[380px] lg:shrink-0 lg:sticky lg:top-[120px]`}>
            <div className="section-tag">경쟁 우위</div>
            <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight text-text-main leading-tight">
              <span className="text-gradient">페이져</span>를
              <br />
              선택하는 이유
            </h2>
            <p className="text-text-muted mt-5 text-[15px] leading-relaxed">
              차별화된 기술력으로 결제의 새로운 기준을 제시합니다.
            </p>
          </div>

          {/* Right - 2x2 Grid */}
          <div ref={cardsRef} className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className={`card-hover p-8 rounded-[20px] bg-white relative overflow-hidden stagger-item ${visibleItems.includes(i) ? "visible" : ""}`}
              >
                <div className="number-badge text-text-main" style={{ fontSize: 60 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="icon-box w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(92,168,210,0.1)" }}>
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-main">{adv.title}</h3>
                <p className="text-[15px] leading-relaxed text-text-muted">{adv.desc}</p>
                {i === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #5CA8D2, #06d6a0)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
