"use client";

import { useInView } from "./hooks";

const advantages = [
  { icon: "🎯", title: "업계 특화", desc: "유통·물류업 거래 특성을 반영한 맞춤형 결제 시스템" },
  { icon: "🔒", title: "보안성", desc: "금융권 수준의 보안 기술과 개인정보 보호" },
  { icon: "✨", title: "편의성", desc: "간편한 인증과 직관적인 UI/UX 설계" },
  { icon: "🔗", title: "확장성", desc: "다양한 가맹점 및 서비스와의 연동 가능" },
];

export default function Advantages() {
  const [ref, isVisible] = useInView();

  return (
    <section id="advantages" className="py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">경쟁 우위</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight">
            <span className="text-gradient">페이져</span>를 선택하는 이유
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="p-9 rounded-[20px] transition-all duration-300"
              style={{
                background: i === 0
                  ? "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,214,160,0.08))"
                  : "var(--dark-card)",
                border: i === 0
                  ? "1px solid rgba(59,130,246,0.3)"
                  : "1px solid var(--dark-border)",
              }}
            >
              <div className="text-4xl mb-5">{adv.icon}</div>
              <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-muted">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
