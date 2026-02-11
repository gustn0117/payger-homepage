"use client";

import { useInView, useStaggeredInView } from "./hooks";

const clients = [
  {
    title: "농수산물 도소매",
    items: ["신선식품 거래", "도매시장", "산지직송"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#cli1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="cli1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#06d6a0" /><stop offset="100%" stopColor="#5CA8D2" /></linearGradient></defs>
        <path d="M7 20h10" /><path d="M10 20c5.5-2.5 8-8 6-13" /><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3" /><path d="M14 20c-2.5-2-5-5.5-4-10 3.5 1 5.5 3.5 6 7" />
      </svg>
    ),
    color: "rgba(6, 214, 160, 0.1)",
    border: "rgba(6, 214, 160, 0.25)",
    gradientFrom: "#06d6a0",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "배달용품 쇼핑몰",
    items: ["일회용품", "라이더용품", "B2B 전문몰"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#cli2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="cli2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    color: "rgba(92, 168, 210, 0.1)",
    border: "rgba(92, 168, 210, 0.25)",
    gradientFrom: "#5CA8D2",
    image: "https://images.unsplash.com/photo-1686632800715-b705ba1b0eb6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "유통·물류업",
    items: ["배송대행", "창고물류", "유통센터"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#cli3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="cli3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a855f7" /><stop offset="100%" stopColor="#5CA8D2" /></linearGradient></defs>
        <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    color: "rgba(168, 85, 247, 0.1)",
    border: "rgba(168, 85, 247, 0.25)",
    gradientFrom: "#a855f7",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Clients() {
  const [ref, isVisible] = useInView();
  const [cardsRef, visibleItems] = useStaggeredInView(clients.length, 0.1, 150);

  return (
    <section
      id="clients"
      className="py-[120px] px-6"
      style={{ background: "#eef5fa" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">주요 고객사</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight text-text-main">
            다양한 유통·물류 <span className="text-gradient">파트너</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-[480px] mx-auto text-[15px] leading-relaxed">
            각 산업 분야의 특성에 맞춘 최적의 결제 솔루션을 제공합니다
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {clients.map((client, i) => (
            <div
              key={i}
              className={`card-hover bg-white rounded-[20px] overflow-hidden text-center stagger-item ${visibleItems.includes(i) ? "visible" : ""}`}
            >
              {/* Card Image */}
              <div className="relative h-[170px] overflow-hidden">
                <img
                  src={client.image}
                  alt={client.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.6) 70%, #ffffff 100%)" }} />
              </div>
              <div className="p-9 pt-4">
                <div
                  className="icon-box w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-6 -mt-12 relative z-10 bg-white"
                  style={{
                    border: `2px solid ${client.border}`,
                    boxShadow: `0 4px 16px rgba(0,0,0,0.06), 0 0 0 4px ${client.color}`,
                  }}
                >
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold mb-5 text-text-main">{client.title}</h3>
                <div className="flex flex-col gap-2.5">
                  {client.items.map((item, j) => (
                    <span
                      key={j}
                      className="feature-badge justify-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: client.gradientFrom }} />
                      {item}
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
