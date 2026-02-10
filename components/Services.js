"use client";

import { useInView } from "./hooks";

const services = [
  {
    title: "모바일 결제시스템",
    desc: "스마트폰으로 언제 어디서나 빠르고 안전한 결제. QR코드, NFC 등 다양한 모바일 결제 방식을 지원합니다.",
    tag: "Mobile",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#svc1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="svc1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "통합 카드 결제",
    desc: "다양한 카드사와 연동된 편리한 통합 결제 시스템. 하나의 단말기로 모든 카드 결제를 처리합니다.",
    tag: "Card",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#svc2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="svc2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "AI 스마트 솔루션",
    desc: "AI 기반 맞춤형 추천 및 효율적 관리. 데이터 분석을 통한 최적의 결제 환경을 제공합니다.",
    tag: "AI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#svc3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="svc3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Services() {
  const [ref, isVisible] = useInView();

  return (
    <section id="services" className="py-[120px] px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">핵심 서비스</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight">
            스마트한 결제, <span className="text-gradient">간편한 관리</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="card-hover bg-dark-card rounded-[20px] relative overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(18,18,26,0) 0%, rgba(18,18,26,0.6) 60%, #12121a 100%)" }} />
                <div className="absolute top-4 right-4 text-[11px] font-bold tracking-widest text-white/50">
                  {service.tag}
                </div>
              </div>
              <div className="px-10 pb-10 pt-2">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(59,130,246,0.08)" }}>
                  {service.icon}
                </div>
                <h3 className="text-[22px] font-bold mb-3">{service.title}</h3>
                <p className="text-[15px] leading-relaxed text-text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
