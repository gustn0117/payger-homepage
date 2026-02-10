"use client";

import { useInView } from "./hooks";

export default function BusinessModel() {
  const [ref, isVisible] = useInView();

  return (
    <section
      className="py-[100px] px-6"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-[36px] max-md:text-[26px] font-extrabold tracking-tight text-center mb-4">
            비즈니스 모델
          </h2>
          <p className="text-text-muted text-center text-[15px] mb-14 max-w-[400px] mx-auto">
            합리적인 수수료 구조로 가맹점과 사용자 모두에게 가치를 제공합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl border border-dark-border overflow-hidden">
            <div className="p-10 border-b md:border-b-0 md:border-r border-dark-border">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary-light)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                <h3 className="text-lg font-bold">결제 수수료</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                거래액 기반 합리적인 수수료 구조로 가맹점 및 사용자 모두에게
                혜택을 제공합니다.
              </p>
            </div>
            <div className="p-10">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary-light)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                <h3 className="text-lg font-bold">부가 서비스</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                데이터 분석, 마케팅 솔루션, 기업 맞춤형 통합 서비스를
                제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
