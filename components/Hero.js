"use client";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-[100px] pb-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.88) 50%, rgba(10,10,15,0.95) 100%)",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="max-w-[640px]">
          <p
            className="text-sm text-text-muted tracking-wider uppercase mb-6"
            style={{ animation: "fadeIn 0.8s ease" }}
          >
            유통·물류 전문 결제 솔루션
          </p>

          <h1
            className="text-[60px] max-md:text-[38px] font-black leading-[1.1] mb-8 tracking-tight"
            style={{ animation: "fadeUp 0.8s ease 0.15s both" }}
          >
            결제의 미래를
            <br />
            <span className="text-gradient">페이져</span>와 함께
          </h1>

          <p
            className="text-lg leading-relaxed text-text-muted mb-10 max-w-[460px]"
            style={{ animation: "fadeUp 0.8s ease 0.3s both" }}
          >
            유통·물류 산업에 최적화된 안전하고 편리한 차세대 결제 플랫폼을
            경험하세요.
          </p>

          <div
            className="flex gap-4 flex-wrap"
            style={{ animation: "fadeUp 0.8s ease 0.45s both" }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollTo("contact")}
            >
              무료 상담 신청
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollTo("services")}
            >
              서비스 알아보기
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className="flex gap-16 max-md:gap-8 mt-24 max-md:mt-16 pt-10 border-t border-dark-border"
          style={{ animation: "fadeUp 0.8s ease 0.6s both" }}
        >
          {[
            { num: "99.9%", label: "서비스 안정성" },
            { num: "0.5초", label: "평균 결제 속도" },
            { num: "24/7", label: "기술 지원" },
          ].map((stat, i) => (
            <div key={i}>
              <div
                className="text-[36px] max-md:text-[24px] font-extrabold tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {stat.num}
              </div>
              <div className="text-sm text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
