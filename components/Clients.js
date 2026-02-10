"use client";

import { useInView } from "./hooks";

const clients = [
  {
    title: "농수산물 도소매",
    items: ["신선식품 거래", "도매시장", "산지직송"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 20h10" /><path d="M10 20c5.5-2.5 8-8 6-13" /><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3" /><path d="M14 20c-2.5-2-5-5.5-4-10 3.5 1 5.5 3.5 6 7" />
      </svg>
    ),
  },
  {
    title: "배달용품 쇼핑몰",
    items: ["일회용품", "라이더용품", "B2B 전문몰"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "유통·물류업",
    items: ["배송대행", "창고물류", "유통센터"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function Clients() {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="clients"
      className="py-[100px] px-6"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""}`}>
          <p className="text-sm font-semibold text-primary-light tracking-wider uppercase mb-3">
            Partners
          </p>
          <h2 className="text-[36px] max-md:text-[26px] font-extrabold tracking-tight mb-12">
            주요 고객사
          </h2>

          <div className="rounded-2xl border border-dark-border overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {clients.map((client, i) => (
                <div
                  key={i}
                  className={`p-8 ${
                    i < clients.length - 1
                      ? "border-b md:border-b-0 md:border-r border-dark-border"
                      : ""
                  }`}
                >
                  <div className="text-text-muted mb-4">{client.icon}</div>
                  <h3 className="text-lg font-bold mb-4">{client.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {client.items.map((item, j) => (
                      <span
                        key={j}
                        className="text-xs text-text-muted py-1.5 px-3 rounded-full border border-dark-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
