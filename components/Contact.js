"use client";

import { useInView } from "./hooks";

export default function Contact() {
  const [ref, isVisible] = useInView();

  return (
    <section id="contact" className="py-[120px] px-6">
      <div className="max-w-[800px] mx-auto">
        <div
          ref={ref}
          className={`animate-in ${isVisible ? "visible" : ""} text-center py-20 px-12 rounded-[32px] relative overflow-hidden`}
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,214,160,0.05))",
            border: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          {/* Decorative orbs */}
          <div
            className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1), transparent)" }}
          />
          <div
            className="absolute -bottom-[80px] -left-[80px] w-[250px] h-[250px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(6,214,160,0.08), transparent)" }}
          />

          <div className="relative z-10">
            <h2 className="text-4xl max-md:text-[28px] font-extrabold mb-4 tracking-tight">
              함께 성장할 <span className="text-gradient">파트너</span>를 기다립니다
            </h2>
            <p className="text-base leading-relaxed text-text-muted max-w-[480px] mx-auto mb-10">
              페이져는 유통·물류 업계의 결제 혁신을 리드합니다.
              <br />
              지금 바로 상담을 신청하세요.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="btn-primary text-base">📩 상담 신청하기</button>
              <button className="btn-outline text-base">📄 서비스 소개서 다운로드</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
