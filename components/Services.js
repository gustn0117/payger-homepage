"use client";

import { useInView } from "./hooks";

const services = [
  {
    title: "모바일 결제시스템",
    desc: "스마트폰으로 언제 어디서나 빠르고 안전한 결제. QR코드, NFC 등 다양한 모바일 결제 방식을 지원합니다.",
    tag: "Mobile",
    num: "01",
    features: [],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#svc1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="svc1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "통합 카드 결제",
    desc: "다양한 카드사와 연동된 편리한 통합 결제 시스템. 하나의 단말기로 모든 카드 결제를 처리합니다.",
    tag: "Card",
    num: "02",
    features: [],
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#svc2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="svc2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "AI 스마트 솔루션",
    desc: "AI 기반 맞춤형 추천 및 효율적 관리. 데이터 분석을 통한 최적의 결제 환경을 제공합니다.",
    tag: "AI",
    num: "03",
    features: [],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#svc3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="svc3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

function ServiceRow({ service, reversed }) {
  const [ref, isVisible] = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`animate-in ${isVisible ? "visible" : ""} flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
    >
      {/* Image Side */}
      <div className="flex-1 w-full">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: reversed
                ? "linear-gradient(135deg, rgba(92,168,210,0.3), rgba(6,214,160,0.15))"
                : "linear-gradient(225deg, rgba(92,168,210,0.3), rgba(6,214,160,0.15))",
            }}
          />
          <div className="absolute top-5 left-5">
            <span
              className="text-[11px] font-bold tracking-[3px] text-white/90 px-4 py-2 rounded-full uppercase"
              style={{ background: "rgba(0,0,0,0.2)", backdropFilter: "blur(8px)" }}
            >
              {service.tag}
            </span>
          </div>
          <div className="absolute bottom-5 right-5 font-black text-white/10 text-[80px] leading-none" style={{ fontFamily: "Syne, sans-serif" }}>
            {service.num}
          </div>
        </div>
      </div>

      {/* Text Side */}
      <div className="flex-1">
        <div className="icon-box w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(92,168,210,0.1)" }}>
          {service.icon}
        </div>
        <h3 className="text-[32px] max-md:text-2xl font-extrabold mb-4 text-text-main tracking-tight">{service.title}</h3>
        <p className="text-base leading-relaxed text-text-muted">{service.desc}</p>
        {service.features.length > 0 && (
          <div className="flex flex-col gap-3 mt-8">
            {service.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(6,214,160,0.1)" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#06d6a0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
}

export default function Services() {
  const [ref, isVisible] = useInView();

  return (
    <section id="services" className="py-[120px] px-6 relative mesh-gradient">
      <div className="max-w-[1100px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-20`}>
          <div className="section-tag">핵심 서비스</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight text-text-main">
            스마트한 결제, <span className="text-gradient">간편한 관리</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-[480px] mx-auto text-[15px] leading-relaxed">
            최신 기술 기반의 결제 솔루션으로 비즈니스 효율을 극대화합니다
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {services.map((service, i) => (
            <ServiceRow key={i} service={service} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
