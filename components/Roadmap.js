"use client";

import { useState } from "react";
import { useInView } from "./hooks";

const steps = [
  { phase: "1단계", title: "시장 진입", items: ["핵심 서비스 출시", "초기 사용자 확보"] },
  { phase: "2단계", title: "성장", items: ["제휴 가맹점 확대", "사용자 기반 강화"] },
  { phase: "3단계", title: "확장", items: ["신규 서비스 론칭", "해외 진출 준비"] },
  { phase: "4단계", title: "글로벌", items: ["해외 시장 진출", "글로벌 플랫폼 구축"] },
];

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const [ref, isVisible] = useInView();

  return (
    <section id="roadmap" className="py-[120px] px-6">
      <div className="max-w-[1000px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-[36px] max-md:text-[26px] font-extrabold tracking-tight text-center mb-14">
            성장 로드맵
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="p-6 rounded-xl cursor-pointer transition-all duration-300"
                style={{
                  background: active === i ? "var(--dark-card)" : "transparent",
                  border:
                    active === i
                      ? "1px solid var(--dark-border)"
                      : "1px solid transparent",
                }}
              >
                <span className="text-xs font-bold text-primary-light tracking-wider">
                  {step.phase}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-3">{step.title}</h3>
                <div className="flex flex-col gap-1.5">
                  {step.items.map((item, j) => (
                    <span key={j} className="text-[13px] text-text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div
            className="mt-8 h-px relative"
            style={{ background: "var(--dark-border)" }}
          >
            <div
              className="h-px transition-all duration-500"
              style={{
                background: "var(--primary)",
                width: `${((active + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
