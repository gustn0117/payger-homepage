"use client";

import { useEffect, useState } from "react";

const particles = Array.from({ length: 15 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 6,
  delay: Math.random() * 5,
}));

function CountUpStat({ value, suffix = "", label, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 1200 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let startTime;
    let frame;
    const duration = 2000;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <div className="flex items-center gap-4">
      <div className="stat-number text-white" style={{ fontSize: 44 }}>
        {count}
        <span className="text-white/70">{suffix}</span>
      </div>
      <div className="text-sm text-white/50 leading-snug">{label}</div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="geo-pattern min-h-screen flex items-center relative overflow-hidden pt-[100px] pb-20 px-6"
      style={{
        background: "linear-gradient(135deg, #5CA8D2 0%, #4A9BC7 40%, #3d8ab0 100%)",
      }}
    >
      {/* Background decorations */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700, height: 700,
          top: "50%", left: "65%",
          animation: "rotate-slow 60s linear infinite",
          opacity: 0.05,
        }}
      >
        <svg viewBox="0 0 700 700" fill="none">
          <circle cx="350" cy="350" r="320" stroke="white" strokeWidth="0.5" strokeDasharray="8 12" />
          <circle cx="350" cy="350" r="260" stroke="white" strokeWidth="0.4" strokeDasharray="4 8" />
          <circle cx="350" cy="350" r="200" stroke="white" strokeWidth="0.3" strokeDasharray="2 6" />
        </svg>
      </div>

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "white",
            opacity: 0,
            animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

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
          width: 400, height: 400, bottom: "5%", left: "-5%",
          background: "radial-gradient(circle, rgba(6,214,160,0.12), transparent 70%)",
          animationDelay: "-4s",
        }}
      />

      {/* Split Layout */}
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left - Text Content */}
          <div className="flex-1 max-lg:text-center">
            <div
              className="inline-flex items-center gap-2.5 py-2.5 px-6 rounded-full text-sm text-white/85 font-medium mb-8"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                animation: "fadeIn 1s ease",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-accent"
                  style={{ animation: "pulse-ring 2s ease-in-out infinite" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              유통·물류 전문 결제 솔루션
            </div>

            <h1
              className="text-[56px] max-md:text-[36px] font-black leading-[1.15] mb-7 tracking-tight text-white"
              style={{ animation: "fadeUp 1s ease 0.2s both" }}
            >
              결제의 미래를
              <br />
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, rgba(6,214,160,0.9) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                페이져
              </span>
              와 함께
            </h1>

            <p
              className="text-lg leading-[1.8] text-white/60 max-w-[480px] max-lg:mx-auto mb-10"
              style={{ animation: "fadeUp 1s ease 0.4s both" }}
            >
              유통·물류 산업에 최적화된 안전하고 편리한
              <br />
              차세대 결제 플랫폼을 경험하세요.
            </p>

            <div
              className="flex gap-4 max-lg:justify-center flex-wrap"
              style={{ animation: "fadeUp 1s ease 0.6s both" }}
            >
              <button className="btn-hero" onClick={() => scrollTo("contact")}>
                무료 상담 신청
                <svg className="inline-block ml-2 -mr-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button className="btn-outline" onClick={() => scrollTo("services")}>
                서비스 알아보기
              </button>
            </div>
          </div>

          {/* Right - Stats & Visual Cards */}
          <div
            className="flex-shrink-0 w-full lg:w-[440px]"
            style={{ animation: "fadeUp 1s ease 0.7s both" }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-4">
              {/* Main stat card */}
              <div
                className="p-7 rounded-2xl relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">실시간 처리량</span>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-40" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                </div>
                <CountUpStat value={99} suffix=".9%" label={"서비스\n안정성"} delay={0} />
                <div className="mt-4 h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div className="h-full rounded-full" style={{ width: "99.9%", background: "linear-gradient(90deg, #06d6a0, #5CA8D2)" }} />
                </div>
              </div>

              {/* Two smaller stat cards */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="text-xs font-medium text-white/35 tracking-wider mb-3 uppercase">결제 속도</div>
                  <div className="stat-number text-white" style={{ fontSize: 36 }}>
                    0.5<span className="text-white/60 text-lg">초</span>
                  </div>
                  <div className="text-xs text-white/40 mt-1">평균 처리 시간</div>
                </div>
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="text-xs font-medium text-white/35 tracking-wider mb-3 uppercase">기술 지원</div>
                  <div className="stat-number text-white" style={{ fontSize: 36 }}>
                    24<span className="text-white/60 text-lg">/7</span>
                  </div>
                  <div className="text-xs text-white/40 mt-1">연중무휴 지원</div>
                </div>
              </div>

              {/* Trust badges */}
              <div
                className="flex items-center gap-6 p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {["PCI DSS 인증", "ISO 27001", "금융보안원"].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(6,214,160,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="text-[11px] text-white/45 font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
