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
      {/* Grid Pattern - visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Large Wireframe Crystal - Center Right */}
      <svg
        viewBox="0 0 600 600"
        className="absolute pointer-events-none"
        style={{ right: "-2%", top: "50%", transform: "translateY(-50%)", width: 650, height: 650, opacity: 0.18 }}
        fill="none" stroke="white"
      >
        <polygon points="300,30 520,150 480,420 120,420 80,150" strokeWidth="1" />
        <polygon points="300,100 440,180 410,360 190,360 160,180" strokeWidth="0.7" />
        <polygon points="300,160 380,210 360,310 240,310 220,210" strokeWidth="0.4" />
        <line x1="300" y1="30" x2="300" y2="420" strokeWidth="0.4" strokeDasharray="6 6" />
        <line x1="80" y1="150" x2="480" y2="420" strokeWidth="0.3" strokeDasharray="4 6" />
        <line x1="520" y1="150" x2="120" y2="420" strokeWidth="0.3" strokeDasharray="4 6" />
        <line x1="300" y1="30" x2="120" y2="420" strokeWidth="0.3" />
        <line x1="300" y1="30" x2="480" y2="420" strokeWidth="0.3" />
        <line x1="80" y1="150" x2="520" y2="150" strokeWidth="0.3" strokeDasharray="3 5" />
        <line x1="120" y1="420" x2="480" y2="420" strokeWidth="0.3" />
        <circle cx="300" cy="30" r="5" fill="white" fillOpacity="0.5">
          <animate attributeName="r" values="4;7;4" dur="3s" repeatCount="indefinite" />
          <animate attributeName="fillOpacity" values="0.5;0.15;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="520" cy="150" r="4" fill="white" fillOpacity="0.4">
          <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="480" cy="420" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="120" cy="420" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="80" cy="150" r="4" fill="white" fillOpacity="0.4">
          <animate attributeName="r" values="3;5;3" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="100" r="2.5" fill="white" fillOpacity="0.2" />
        <circle cx="440" cy="180" r="2.5" fill="white" fillOpacity="0.2" />
        <circle cx="160" cy="180" r="2.5" fill="white" fillOpacity="0.2" />
      </svg>

      {/* Rotating Ring - Left side */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500,
          top: "15%", left: "-8%",
          animation: "rotate-slow 50s linear infinite reverse",
          opacity: 0.12,
        }}
      >
        <svg viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="230" stroke="white" strokeWidth="0.8" strokeDasharray="8 15" />
          <circle cx="250" cy="250" r="180" stroke="white" strokeWidth="0.5" strokeDasharray="5 10" />
        </svg>
      </div>

      {/* Dot Grid - Bottom Left */}
      <svg
        className="absolute pointer-events-none"
        style={{ bottom: "6%", left: "2%", opacity: 0.15 }}
        width="240" height="240" viewBox="0 0 240 240" fill="white"
      >
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={12 + col * 24} cy={12 + row * 24} r="1.5" />
          ))
        )}
      </svg>

      {/* Circuit / Network Lines - Top Left */}
      <svg
        className="absolute pointer-events-none"
        style={{ top: "10%", left: "8%", opacity: 0.12 }}
        width="250" height="200" viewBox="0 0 250 200" fill="none" stroke="white" strokeWidth="0.8"
      >
        <path d="M0,100 H50 L75,50 H130 L155,100 H200 L230,70" />
        <path d="M20,140 H60 L90,170 H150 L175,130 H250" />
        <circle cx="75" cy="50" r="4" fill="white" fillOpacity="0.4" />
        <circle cx="155" cy="100" r="4" fill="white" fillOpacity="0.4" />
        <circle cx="90" cy="170" r="3" fill="white" fillOpacity="0.3" />
        <circle cx="175" cy="130" r="3" fill="white" fillOpacity="0.3" />
        <circle cx="230" cy="70" r="3" fill="white" fillOpacity="0.3" />
      </svg>

      {/* Hexagon Cluster - Top Right */}
      <svg
        className="absolute pointer-events-none"
        style={{ top: "8%", right: "25%", opacity: 0.1 }}
        width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="0.8"
      >
        <polygon points="100,10 160,40 160,100 100,130 40,100 40,40" />
        <polygon points="100,35 140,55 140,95 100,115 60,95 60,55" strokeWidth="0.5" />
        <polygon points="100,55 125,68 125,92 100,105 75,92 75,68" strokeWidth="0.3" />
      </svg>

      {/* Plus Signs scattered */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
        {[
          { x: "12%", y: "25%" }, { x: "85%", y: "18%" }, { x: "75%", y: "75%" },
          { x: "20%", y: "70%" }, { x: "50%", y: "12%" }, { x: "40%", y: "85%" },
          { x: "92%", y: "45%" }, { x: "8%", y: "50%" },
        ].map((pos, i) => (
          <g key={i} transform={`translate(${pos.x.replace("%","")},${pos.y.replace("%","")})`} stroke="white" strokeWidth="1">
            <line x1="-6" y1="0" x2="6" y2="0" />
            <line x1="0" y1="-6" x2="0" y2="6" />
          </g>
        ))}
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

      {/* Gradient Orbs */}
      <div
        className="hero-gradient-orb"
        style={{
          width: 600, height: 600, top: "-10%", right: "-10%",
          background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)",
        }}
      />
      <div
        className="hero-gradient-orb"
        style={{
          width: 500, height: 500, bottom: "0%", left: "-8%",
          background: "radial-gradient(circle, rgba(6,214,160,0.15), transparent 70%)",
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

          {/* Right - Service Overview Cards */}
          <div
            className="flex-shrink-0 w-full lg:w-[440px]"
            style={{ animation: "fadeUp 1s ease 0.7s both" }}
          >
            <div className="grid grid-cols-1 gap-4">
              {/* Service cards */}
              {[
                { icon: "📱", title: "모바일 결제", desc: "스마트폰으로 언제 어디서나 빠르고 안전한 결제" },
                { icon: "💳", title: "통합 카드 결제", desc: "다양한 카드사와 연동된 편리한 통합 결제 시스템" },
                { icon: "🤖", title: "AI 스마트 솔루션", desc: "AI 기반 맞춤형 추천 및 효율적 관리" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl flex items-start gap-4"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                    <div className="text-xs text-white/50 leading-relaxed">{item.desc}</div>
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
