"use client";

import { useInView } from "./hooks";

const clients = [
  {
    title: "농수산물 도소매",
    items: ["신선식품 거래", "도매시장", "산지직송"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#cli1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="cli1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#06d6a0" /><stop offset="100%" stopColor="#3b82f6" /></linearGradient></defs>
        <path d="M7 20h10" /><path d="M10 20c5.5-2.5 8-8 6-13" /><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3" /><path d="M14 20c-2.5-2-5-5.5-4-10 3.5 1 5.5 3.5 6 7" />
      </svg>
    ),
    color: "rgba(6, 214, 160, 0.1)",
    border: "rgba(6, 214, 160, 0.2)",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "배달용품 쇼핑몰",
    items: ["일회용품", "라이더용품", "B2B 전문몰"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#cli2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="cli2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    color: "rgba(59, 130, 246, 0.1)",
    border: "rgba(59, 130, 246, 0.2)",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "유통·물류업",
    items: ["배송대행", "창고물류", "유통센터"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#cli3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="cli3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a855f7" /><stop offset="100%" stopColor="#3b82f6" /></linearGradient></defs>
        <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    color: "rgba(168, 85, 247, 0.1)",
    border: "rgba(168, 85, 247, 0.2)",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Clients() {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="clients"
      className="py-[120px] px-6"
      style={{ background: "linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.03) 50%, transparent 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">주요 고객사</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight">
            다양한 유통·물류 <span className="text-gradient">파트너</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <div key={i} className="card-hover bg-dark-card rounded-[20px] overflow-hidden text-center">
              {/* Card Image */}
              <div className="relative h-[160px] overflow-hidden">
                <img
                  src={client.image}
                  alt={client.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(18,18,26,0.2) 0%, rgba(18,18,26,0.7) 70%, #12121a 100%)" }} />
              </div>
              <div className="p-9 pt-4">
                <div
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-6 -mt-12 relative z-10"
                  style={{ background: client.color, border: `1px solid ${client.border}` }}
                >
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{client.title}</h3>
                <div className="flex flex-col gap-2">
                  {client.items.map((item, j) => (
                    <span
                      key={j}
                      className="py-2 px-4 rounded-lg text-sm text-text-muted"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
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
