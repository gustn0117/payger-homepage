"use client";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="grid-pattern min-h-screen flex items-center justify-center relative overflow-hidden pt-[120px] pb-20 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.92) 50%, rgba(10,10,15,0.98) 100%)" }} />
      </div>

      {/* Orbs */}
      <div
        className="hero-gradient-orb"
        style={{
          width: 600, height: 600, top: "-10%", right: "-10%",
          background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)",
        }}
      />
      <div
        className="hero-gradient-orb"
        style={{
          width: 500, height: 500, bottom: "0%", left: "-5%",
          background: "radial-gradient(circle, rgba(6,214,160,0.2), transparent 70%)",
          animationDelay: "-4s",
        }}
      />

      <div className="text-center max-w-[800px] relative z-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 py-2 px-5 rounded-full text-sm text-primary-light font-medium mb-8"
          style={{
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.15)",
            animation: "fadeIn 1s ease",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          유통·물류 전문 결제 솔루션
        </div>

        {/* Title */}
        <h1
          className="text-[56px] max-md:text-[36px] font-black leading-[1.2] mb-6 tracking-tight"
          style={{ animation: "fadeUp 1s ease 0.2s both" }}
        >
          결제의 미래를
          <br />
          <span className="text-gradient">페이져</span>와 함께
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg leading-relaxed text-text-muted max-w-[540px] mx-auto mb-12"
          style={{ animation: "fadeUp 1s ease 0.4s both" }}
        >
          유통·물류 산업에 최적화된 안전하고 편리한
          <br />
          차세대 결제 플랫폼을 경험하세요.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{ animation: "fadeUp 1s ease 0.6s both" }}
        >
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            무료 상담 신청
          </button>
          <button className="btn-outline" onClick={() => scrollTo("services")}>
            서비스 알아보기
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-10 mt-20 pt-10 border-t border-dark-border"
          style={{ animation: "fadeUp 1s ease 0.8s both" }}
        >
          {[
            { num: "99.9%", label: "서비스 안정성" },
            { num: "0.5초", label: "평균 결제 속도" },
            { num: "24/7", label: "기술 지원" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="stat-number text-gradient">{stat.num}</div>
              <div className="text-sm text-text-muted mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
