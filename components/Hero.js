"use client";

import { useEffect, useState } from "react";

const particles = Array.from({ length: 20 }, (_, i) => ({
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
    <div className="text-center relative">
      <div className="stat-number text-white">
        {count}
        <span className="text-white/80">{suffix}</span>
      </div>
      <div className="text-sm text-white/50 mt-2 tracking-wide">{label}</div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="geo-pattern min-h-screen flex items-center justify-center relative overflow-hidden pt-[120px] pb-24 px-6"
      style={{
        background: "linear-gradient(135deg, #5CA8D2 0%, #4A9BC7 40%, #3d8ab0 100%)",
      }}
    >
      {/* Animated Rotating Ring */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700, height: 700,
          top: "50%", left: "60%",
          animation: "rotate-slow 60s linear infinite",
          opacity: 0.06,
        }}
      >
        <svg viewBox="0 0 700 700" fill="none">
          <circle cx="350" cy="350" r="320" stroke="white" strokeWidth="0.5" strokeDasharray="8 12" />
          <circle cx="350" cy="350" r="260" stroke="white" strokeWidth="0.4" strokeDasharray="4 8" />
          <circle cx="350" cy="350" r="200" stroke="white" strokeWidth="0.3" strokeDasharray="2 6" />
        </svg>
      </div>

      {/* Wireframe Crystal Decoration */}
      <svg
        viewBox="0 0 500 500"
        className="absolute right-[-60px] top-[50%] -translate-y-1/2 w-[550px] h-[550px] max-md:w-[280px] max-md:h-[280px] max-md:right-[-50px]"
        style={{ opacity: 0.15 }}
      >
        <polygon points="250,40 430,160 380,380 120,380 70,160" stroke="white" strokeWidth="1" fill="none" />
        <polygon points="250,100 360,180 330,320 170,320 140,180" stroke="white" strokeWidth="0.6" fill="none" />
        <polygon points="250,150 310,200 290,280 210,280 190,200" stroke="white" strokeWidth="0.3" fill="none" />
        <line x1="250" y1="40" x2="250" y2="380" stroke="white" strokeWidth="0.4" />
        <line x1="70" y1="160" x2="380" y2="380" stroke="white" strokeWidth="0.3" />
        <line x1="430" y1="160" x2="120" y2="380" stroke="white" strokeWidth="0.3" />
        <line x1="250" y1="40" x2="120" y2="380" stroke="white" strokeWidth="0.3" />
        <line x1="250" y1="40" x2="380" y2="380" stroke="white" strokeWidth="0.3" />
        <line x1="70" y1="160" x2="360" y2="180" stroke="white" strokeWidth="0.2" />
        <line x1="430" y1="160" x2="140" y2="180" stroke="white" strokeWidth="0.2" />
        <line x1="120" y1="380" x2="330" y2="320" stroke="white" strokeWidth="0.2" />
        <line x1="380" y1="380" x2="170" y2="320" stroke="white" strokeWidth="0.2" />
        <circle cx="250" cy="40" r="4" fill="white" fillOpacity="0.6">
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="430" cy="160" r="3" fill="white" fillOpacity="0.5">
          <animate attributeName="r" values="2;4;2" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="380" cy="380" r="3" fill="white" fillOpacity="0.5" />
        <circle cx="120" cy="380" r="3" fill="white" fillOpacity="0.5" />
        <circle cx="70" cy="160" r="3" fill="white" fillOpacity="0.5">
          <animate attributeName="r" values="2;4;2" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="100" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="360" cy="180" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="330" cy="320" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="170" cy="320" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="140" cy="180" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="250" cy="150" r="1.5" fill="white" fillOpacity="0.2" />
      </svg>

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
          width: 500, height: 500, bottom: "0%", left: "-5%",
          background: "radial-gradient(circle, rgba(6,214,160,0.12), transparent 70%)",
          animationDelay: "-4s",
        }}
      />
      <div
        className="hero-gradient-orb"
        style={{
          width: 300, height: 300, top: "60%", right: "20%",
          background: "radial-gradient(circle, rgba(123,196,232,0.08), transparent 70%)",
          animationDelay: "-2s",
        }}
      />

      <div className="text-center max-w-[820px] relative z-10">
        {/* Badge */}
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

        {/* Title */}
        <h1
          className="text-[60px] max-md:text-[38px] font-black leading-[1.15] mb-7 tracking-tight text-white"
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

        {/* Subtitle */}
        <p
          className="text-lg leading-[1.8] text-white/65 max-w-[540px] mx-auto mb-14"
          style={{ animation: "fadeUp 1s ease 0.4s both" }}
        >
          유통·물류 산업에 최적화된 안전하고 편리한
          <br />
          차세대 결제 플랫폼을 경험하세요.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex gap-5 justify-center flex-wrap"
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

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-10 mt-20 pt-10 relative"
          style={{ animation: "fadeUp 1s ease 0.8s both" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }}
          />

          <CountUpStat value={99} suffix=".9%" label="서비스 안정성" delay={0} />
          <CountUpStat value={0} suffix=".5초" label="평균 결제 속도" delay={200} />

          <div className="text-center relative">
            <div className="stat-number text-white" style={{ animation: "fadeIn 1s ease 2s both" }}>
              24/7
            </div>
            <div className="text-sm text-white/50 mt-2 tracking-wide">기술 지원</div>
          </div>
        </div>
      </div>
    </section>
  );
}
