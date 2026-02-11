"use client";

import { useState } from "react";
import { useInView } from "./hooks";

const roadmapSteps = [
  {
    phase: "1단계", title: "시장 진입", items: ["핵심 서비스 출시", "초기 사용자 확보"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#rm1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="rm1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    phase: "2단계", title: "성장", items: ["제휴 가맹점 확대", "사용자 기반 강화"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#rm2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="rm2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    phase: "3단계", title: "확장", items: ["신규 서비스 론칭", "해외 진출 준비"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#rm3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="rm3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    phase: "4단계", title: "글로벌", items: ["해외 시장 진출", "글로벌 플랫폼 구축"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#rm4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="rm4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#06d6a0" /><stop offset="100%" stopColor="#5CA8D2" /></linearGradient></defs>
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M4.93 4.93l4.24 4.24" /><path d="M14.83 14.83l4.24 4.24" />
      </svg>
    ),
  },
];

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const [ref, isVisible] = useInView();

  return (
    <section
      id="roadmap"
      className="py-[120px] px-6"
      style={{ background: "#eef5fa" }}
    >
      <div className="max-w-[1000px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-16`}>
          <div className="section-tag">성장 로드맵</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight text-text-main">
            글로벌을 향한 <span className="text-gradient">여정</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-[480px] mx-auto text-[15px] leading-relaxed">
            단계적 성장 전략으로 글로벌 결제 플랫폼을 향해 나아갑니다
          </p>
        </div>

        {/* Timeline Dots (Desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-[7px] left-[12.5%] right-[12.5%] h-[2px]" style={{ background: "rgba(92,168,210,0.12)" }}>
            <div
              className="h-full rounded-sm"
              style={{
                background: "linear-gradient(90deg, #5CA8D2, #06d6a0)",
                width: `${((active + 1) / roadmapSteps.length) * 100}%`,
                transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>
          <div className="flex justify-between px-[9%]">
            {roadmapSteps.map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full cursor-pointer relative z-10 transition-all duration-400"
                onClick={() => setActive(i)}
                style={{
                  background: i <= active ? "linear-gradient(135deg, #5CA8D2, #06d6a0)" : "white",
                  border: i <= active ? "2px solid transparent" : "2px solid rgba(92,168,210,0.3)",
                  boxShadow: i <= active ? "0 0 0 4px rgba(92,168,210,0.15)" : "none",
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {roadmapSteps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="p-7 rounded-[20px] cursor-pointer transition-all duration-500 relative overflow-hidden"
              style={{
                background: active === i
                  ? "linear-gradient(135deg, rgba(92,168,210,0.15), rgba(6,214,160,0.08))"
                  : "#ffffff",
                border: active === i
                  ? "1px solid rgba(92,168,210,0.4)"
                  : "1px solid #e2e8f0",
                transform: active === i ? "scale(1.03)" : "scale(1)",
                boxShadow: active === i ? "0 8px 30px rgba(92,168,210,0.15)" : "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              {/* Active indicator */}
              {active === i && (
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #5CA8D2, #06d6a0)" }} />
              )}

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-400"
                style={{
                  background: active === i
                    ? "linear-gradient(135deg, rgba(92,168,210,0.15), rgba(6,214,160,0.1))"
                    : "rgba(92,168,210,0.1)",
                }}
              >
                {step.icon}
              </div>
              <div
                className="text-xs font-bold tracking-wider mb-1 transition-colors duration-300"
                style={{ color: active === i ? "#06d6a0" : "#5CA8D2" }}
              >
                {step.phase}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-main">{step.title}</h3>
              <div className="flex flex-col gap-2">
                {step.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-[13px] text-text-muted leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar (Mobile) */}
        <div
          className="lg:hidden mt-8 h-1 rounded-sm relative overflow-hidden"
          style={{ background: "rgba(92,168,210,0.12)" }}
        >
          <div
            className="h-full rounded-sm transition-all duration-600"
            style={{
              background: "linear-gradient(90deg, #5CA8D2, #06d6a0)",
              width: `${((active + 1) / roadmapSteps.length) * 100}%`,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
