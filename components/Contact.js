"use client";

import { useInView } from "./hooks";

export default function Contact() {
  const [ref, isVisible] = useInView();

  return (
    <section id="contact" className="py-[100px] px-6">
      <div className="max-w-[600px] mx-auto">
        <div
          ref={ref}
          className={`animate-in ${isVisible ? "visible" : ""} text-center`}
        >
          <h2 className="text-[36px] max-md:text-[26px] font-extrabold tracking-tight mb-4">
            함께 성장할 파트너를 기다립니다
          </h2>
          <p className="text-[15px] leading-relaxed text-text-muted mb-10">
            페이져는 유통·물류 업계의 결제 혁신을 리드합니다.
            <br />
            지금 바로 상담을 신청하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:overwrap0@gmail.com"
              className="flex items-center gap-3 text-text-muted hover:text-text-main transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-sm">overwrap0@gmail.com</span>
            </a>
            <a
              href="tel:032-217-9500"
              className="flex items-center gap-3 text-text-muted hover:text-text-main transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-sm">032-217-9500</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
