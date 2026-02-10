"use client";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="geo-pattern min-h-screen flex items-center justify-center relative overflow-hidden pt-[120px] pb-20 px-6"
      style={{ background: "linear-gradient(135deg, #5CA8D2 0%, #4A9BC7 50%, #3d8ab0 100%)" }}
    >
      {/* Wireframe Crystal Decoration */}
      <svg
        viewBox="0 0 500 500"
        className="absolute right-[-80px] top-[50%] -translate-y-1/2 w-[600px] h-[600px] max-md:w-[300px] max-md:h-[300px] max-md:right-[-60px]"
        style={{ opacity: 0.18 }}
      >
        <polygon points="250,40 430,160 380,380 120,380 70,160" stroke="white" strokeWidth="1" fill="none" />
        <polygon points="250,100 360,180 330,320 170,320 140,180" stroke="white" strokeWidth="0.6" fill="none" />
        <line x1="250" y1="40" x2="250" y2="380" stroke="white" strokeWidth="0.4" />
        <line x1="70" y1="160" x2="380" y2="380" stroke="white" strokeWidth="0.3" />
        <line x1="430" y1="160" x2="120" y2="380" stroke="white" strokeWidth="0.3" />
        <line x1="250" y1="40" x2="120" y2="380" stroke="white" strokeWidth="0.3" />
        <line x1="250" y1="40" x2="380" y2="380" stroke="white" strokeWidth="0.3" />
        <line x1="70" y1="160" x2="360" y2="180" stroke="white" strokeWidth="0.2" />
        <line x1="430" y1="160" x2="140" y2="180" stroke="white" strokeWidth="0.2" />
        <line x1="120" y1="380" x2="330" y2="320" stroke="white" strokeWidth="0.2" />
        <line x1="380" y1="380" x2="170" y2="320" stroke="white" strokeWidth="0.2" />
        <circle cx="250" cy="40" r="3" fill="white" fillOpacity="0.5" />
        <circle cx="430" cy="160" r="3" fill="white" fillOpacity="0.5" />
        <circle cx="380" cy="380" r="3" fill="white" fillOpacity="0.5" />
        <circle cx="120" cy="380" r="3" fill="white" fillOpacity="0.5" />
        <circle cx="70" cy="160" r="3" fill="white" fillOpacity="0.5" />
        <circle cx="250" cy="100" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="360" cy="180" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="330" cy="320" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="170" cy="320" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="140" cy="180" r="2" fill="white" fillOpacity="0.3" />
      </svg>

      {/* Orbs */}
      <div
        className="hero-gradient-orb"
        style={{
          width: 600, height: 600, top: "-10%", right: "-10%",
          background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)",
        }}
      />
      <div
        className="hero-gradient-orb"
        style={{
          width: 500, height: 500, bottom: "0%", left: "-5%",
          background: "radial-gradient(circle, rgba(6,214,160,0.12), transparent 70%)",
          animationDelay: "-4s",
        }}
      />

      <div className="text-center max-w-[800px] relative z-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 py-2 px-5 rounded-full text-sm text-white/80 font-medium mb-8"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            animation: "fadeIn 1s ease",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          유통·물류 전문 결제 솔루션
        </div>

        {/* Title */}
        <h1
          className="text-[56px] max-md:text-[36px] font-black leading-[1.2] mb-6 tracking-tight text-white"
          style={{ animation: "fadeUp 1s ease 0.2s both" }}
        >
          결제의 미래를
          <br />
          <span className="text-white font-black">페이져</span>와 함께
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg leading-relaxed text-white/70 max-w-[540px] mx-auto mb-12"
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
          <button
            className="bg-white text-[#5CA8D2] border-none py-4 px-9 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => scrollTo("contact")}
          >
            무료 상담 신청
          </button>
          <button className="btn-outline" onClick={() => scrollTo("services")}>
            서비스 알아보기
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-10 mt-20 pt-10 border-t border-white/20"
          style={{ animation: "fadeUp 1s ease 0.8s both" }}
        >
          {[
            { num: "99.9%", label: "서비스 안정성" },
            { num: "0.5초", label: "평균 결제 속도" },
            { num: "24/7", label: "기술 지원" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="stat-number text-white">{stat.num}</div>
              <div className="text-sm text-white/60 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
