"use client";

import { useInView } from "./hooks";

const platforms = [
  {
    title: "소비자 마켓",
    features: ["간편하고 빠른 결제", "다양한 결제수단 제공"],
    iconBg: "rgba(59,130,246,0.12)",
    icon: "👤",
  },
  {
    title: "가맹점 마켓",
    features: ["매출 관리 시스템", "실시간 정산 지원"],
    iconBg: "rgba(6,214,160,0.12)",
    icon: "🏪",
  },
  {
    title: "관리자 시스템",
    features: ["통합 운영 관리", "데이터 분석 대시보드"],
    iconBg: "rgba(168,85,247,0.12)",
    icon: "⚙️",
  },
  {
    title: "API 연동",
    features: ["타 서비스 연계", "RESTful API 제공"],
    iconBg: "rgba(251,191,36,0.12)",
    icon: "🔌",
  },
];

export default function Platform() {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="platform"
      className="py-[120px] px-6 relative"
      style={{ background: "linear-gradient(180deg, transparent, rgba(6,214,160,0.03), transparent)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">서비스 플랫폼</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight">
            올인원 <span className="text-gradient">결제 플랫폼</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((p, i) => (
            <div key={i} className="card-hover bg-dark-card rounded-[20px] p-8 flex flex-col gap-5">
              <div
                className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl"
                style={{ background: p.iconBg }}
              >
                {p.icon}
              </div>
              <h3 className="text-xl font-bold">{p.title}</h3>
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
