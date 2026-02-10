"use client";

import { useInView } from "./hooks";

const advantages = [
  { num: "01", title: "업계 특화", desc: "유통·물류업 거래 특성을 반영한 맞춤형 결제 시스템" },
  { num: "02", title: "보안성", desc: "금융권 수준의 보안 기술과 개인정보 보호" },
  { num: "03", title: "편의성", desc: "간편한 인증과 직관적인 UI/UX 설계" },
  { num: "04", title: "확장성", desc: "다양한 가맹점 및 서비스와의 연동 가능" },
];

export default function Advantages() {
  const [ref, isVisible] = useInView();

  return (
    <section id="advantages" className="py-[100px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`animate-in ${isVisible ? "visible" : ""}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 max-lg:gap-10">
            <div>
              <h2 className="text-[36px] max-md:text-[26px] font-extrabold tracking-tight leading-snug">
                페이져를
                <br className="max-lg:hidden" /> 선택하는 이유
              </h2>
              <p className="text-text-muted mt-4 text-[15px] leading-relaxed">
                유통·물류 결제에 최적화된 기술력과 경험으로 차별화된 서비스를
                제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {advantages.map((adv) => (
                <div key={adv.num} className="border-t border-dark-border pt-6">
                  <span className="text-xs font-bold text-primary-light tracking-wider">
                    {adv.num}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-2">{adv.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
