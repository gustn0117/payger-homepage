"use client";

import { useInView } from "./hooks";

const platforms = [
  {
    title: "소비자 마켓",
    features: ["간편하고 빠른 결제", "다양한 결제수단 제공"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "가맹점 마켓",
    features: ["매출 관리 시스템", "실시간 정산 지원"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "관리자 시스템",
    features: ["통합 운영 관리", "데이터 분석 대시보드"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "API 연동",
    features: ["타 서비스 연계", "RESTful API 제공"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
];

export default function Platform() {
  const [ref, isVisible] = useInView();

  return (
    <section id="platform" className="py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 max-lg:gap-10">
            <div>
              <h2 className="text-[36px] max-md:text-[26px] font-extrabold tracking-tight leading-snug">
                올인원
                <br className="max-lg:hidden" /> 결제 플랫폼
              </h2>
              <p className="text-text-muted mt-4 text-[15px] leading-relaxed">
                소비자부터 가맹점, 관리자까지 모든 사용자를 위한 통합 플랫폼을
                제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {platforms.map((p, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-dark-card border border-dark-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-text-muted">{p.icon}</span>
                    <h3 className="text-base font-bold">{p.title}</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    {p.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-text-muted shrink-0" />
                        <span className="text-sm text-text-muted">{f}</span>
                      </div>
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
