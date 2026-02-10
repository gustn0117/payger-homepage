"use client";

import { useInView } from "./hooks";

const models = [
  {
    title: "결제 수수료",
    desc: "거래액 기반 합리적인 수수료 구조로 가맹점 및 사용자 모두에게 혜택을 제공합니다.",
    icon: "💳",
    orbColor: "rgba(59,130,246,0.05)",
  },
  {
    title: "부가 서비스",
    desc: "데이터 분석, 마케팅 솔루션, 기업 맞춤형 통합 서비스를 제공합니다.",
    icon: "📊",
    orbColor: "rgba(6,214,160,0.05)",
  },
];

export default function BusinessModel() {
  const [ref, isVisible] = useInView();

  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1000px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">비즈니스 모델</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight">
            합리적인 <span className="text-gradient">수익 구조</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-[20px] bg-dark-card border border-dark-border relative overflow-hidden"
            >
              <div
                className="absolute -top-5 -right-5 w-[120px] h-[120px] rounded-full"
                style={{ background: item.orbColor }}
              />
              <div className="text-[40px] mb-5">{item.icon}</div>
              <h3 className="text-[22px] font-bold mb-3">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
