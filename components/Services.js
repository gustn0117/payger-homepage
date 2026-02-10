"use client";

import { useInView } from "./hooks";

const services = [
  {
    title: "모바일 결제",
    desc: "스마트폰으로 언제 어디서나 빠르고 안전한 결제. QR코드, NFC 등 다양한 모바일 결제 방식을 지원합니다.",
    tag: "Mobile",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#svc1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="svc1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "통합 카드 결제",
    desc: "다양한 카드사와 연동된 편리한 통합 결제 시스템. 하나의 단말기로 모든 카드 결제를 처리합니다.",
    tag: "Card",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#svc2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="svc2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "AI 스마트 솔루션",
    desc: "AI 기반 맞춤형 추천 및 효율적 관리. 데이터 분석을 통한 최적의 결제 환경을 제공합니다.",
    tag: "AI",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#svc3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="svc3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Services() {
  const [ref, isVisible] = useInView();

  return (
    <section id="services" className="py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} mb-14`}>
          <h2 className="text-[36px] max-md:text-[26px] font-extrabold tracking-tight">
            핵심 서비스
          </h2>
          <p className="text-text-muted mt-3 text-[15px]">
            유통·물류에 최적화된 결제 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-[rgba(255,255,255,0.1)] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.08)" }}
                >
                  {service.icon}
                </div>
                <span className="text-[11px] font-semibold tracking-widest text-text-muted uppercase">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
