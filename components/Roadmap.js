"use client";

import { useState } from "react";
import { useInView } from "./hooks";

const roadmapSteps = [
  { phase: "1단계", title: "시장 진입", items: ["핵심 서비스 출시", "초기 사용자 확보"], icon: "🚀" },
  { phase: "2단계", title: "성장", items: ["제휴 가맹점 확대", "사용자 기반 강화"], icon: "📈" },
  { phase: "3단계", title: "확장", items: ["신규 서비스 론칭", "해외 진출 준비"], icon: "🌐" },
  { phase: "4단계", title: "글로벌", items: ["해외 시장 진출", "글로벌 플랫폼 구축"], icon: "🌍" },
];

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const [ref, isVisible] = useInView();

  return (
    <section
      id="roadmap"
      className="py-[120px] px-6"
      style={{ background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.03), transparent)" }}
    >
      <div className="max-w-[1000px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">성장 로드맵</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight">
            글로벌을 향한 <span className="text-gradient">여정</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {roadmapSteps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="p-7 rounded-[20px] cursor-pointer transition-all duration-400"
              style={{
                background: active === i
                  ? "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,214,160,0.1))"
                  : "var(--dark-card)",
                border: active === i
                  ? "1px solid rgba(59,130,246,0.4)"
                  : "1px solid var(--dark-border)",
                transform: active === i ? "scale(1.03)" : "scale(1)",
              }}
            >
              <div className="text-[32px] mb-3">{step.icon}</div>
              <div className="text-xs font-bold text-primary-light tracking-wider mb-1">
                {step.phase}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <div className="flex flex-col gap-1.5">
                {step.items.map((item, j) => (
                  <span key={j} className="text-[13px] text-text-muted leading-relaxed">
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div
          className="mt-10 h-1 rounded-sm relative overflow-hidden"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <div
            className="h-full rounded-sm transition-all duration-600"
            style={{
              background: "var(--gradient-1)",
              width: `${((active + 1) / roadmapSteps.length) * 100}%`,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
