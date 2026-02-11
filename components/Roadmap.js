"use client";

import { useState } from "react";
import { useInView, useStaggeredInView } from "./hooks";

const roadmapSteps = [
  {
    phase: "1단계", title: "시장 진입", items: ["핵심 서비스 출시", "초기 사용자 확보"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#rm1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="rm1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    phase: "2단계", title: "성장", items: ["제휴 가맹점 확대", "사용자 기반 강화"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#rm2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="rm2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    phase: "3단계", title: "확장", items: ["신규 서비스 론칭", "해외 진출 준비"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#rm3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="rm3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#5CA8D2" /><stop offset="100%" stopColor="#06d6a0" /></linearGradient></defs>
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    phase: "4단계", title: "글로벌", items: ["해외 시장 진출", "글로벌 플랫폼 구축"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#rm4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="rm4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#06d6a0" /><stop offset="100%" stopColor="#5CA8D2" /></linearGradient></defs>
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M4.93 4.93l4.24 4.24" /><path d="M14.83 14.83l4.24 4.24" />
      </svg>
    ),
  },
];

export default function Roadmap() {
  const [ref, isVisible] = useInView();
  const [cardsRef, visibleItems] = useStaggeredInView(roadmapSteps.length, 0.1, 200);

  return (
    <section
      id="roadmap"
      className="py-[120px] px-6"
      style={{ background: "#eef5fa" }}
    >
      <div className="max-w-[1000px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""} text-center mb-20`}>
          <div className="section-tag">성장 로드맵</div>
          <h2 className="text-[40px] max-md:text-[28px] font-extrabold tracking-tight text-text-main">
            글로벌을 향한 <span className="text-gradient">여정</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-[480px] mx-auto text-[15px] leading-relaxed">
            단계적 성장 전략으로 글로벌 결제 플랫폼을 향해 나아갑니다
          </p>
        </div>

        {/* Vertical Timeline */}
        <div ref={cardsRef} className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2" style={{ background: "rgba(92,168,210,0.12)" }}>
            <div
              className="w-full rounded-full"
              style={{
                background: "linear-gradient(180deg, #5CA8D2, #06d6a0)",
                height: `${((visibleItems.length) / roadmapSteps.length) * 100}%`,
                transition: "height 1s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>

          <div className="flex flex-col gap-8 lg:gap-0">
            {roadmapSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`stagger-item ${visibleItems.includes(i) ? "visible" : ""} relative lg:flex items-center ${i > 0 ? "lg:mt-[-20px]" : ""}`}
                  style={{ minHeight: 160 }}
                >
                  {/* Desktop: alternating sides */}
                  <div className={`hidden lg:block w-1/2 ${isLeft ? "pr-12 text-right" : "pl-12 order-2"}`}>
                    <div className={`card-hover p-7 rounded-[20px] bg-white inline-block ${isLeft ? "ml-auto" : "mr-auto"} max-w-[380px] w-full`}>
                      <div className="flex items-center gap-3 mb-3" style={{ flexDirection: isLeft ? "row-reverse" : "row" }}>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: "rgba(92,168,210,0.1)" }}
                        >
                          {step.icon}
                        </div>
                        <div style={{ textAlign: isLeft ? "right" : "left" }}>
                          <div className="text-xs font-bold tracking-wider text-accent">{step.phase}</div>
                          <h3 className="text-lg font-bold text-text-main">{step.title}</h3>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5" style={{ alignItems: isLeft ? "flex-end" : "flex-start" }}>
                        {step.items.map((item, j) => (
                          <div key={j} className={`flex items-center gap-2 ${isLeft ? "flex-row-reverse" : ""}`}>
                            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                            <span className="text-[13px] text-text-muted">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white items-center justify-center z-10"
                    style={{
                      border: visibleItems.includes(i) ? "2px solid #5CA8D2" : "2px solid rgba(92,168,210,0.2)",
                      boxShadow: visibleItems.includes(i) ? "0 0 0 6px rgba(92,168,210,0.1)" : "none",
                      transition: "all 0.5s ease",
                    }}
                  >
                    <span className="text-xs font-extrabold text-gradient">{i + 1}</span>
                  </div>

                  {/* Empty other side for desktop */}
                  <div className={`hidden lg:block w-1/2 ${isLeft ? "order-2" : ""}`} />

                  {/* Mobile card */}
                  <div className="lg:hidden card-hover p-7 rounded-[20px] bg-white relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(92,168,210,0.1)" }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold tracking-wider text-accent">{step.phase}</div>
                        <h3 className="text-lg font-bold text-text-main">{step.title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {step.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                          <span className="text-[13px] text-text-muted">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
