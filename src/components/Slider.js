"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    kicker: "Study in the UK",
    title: "Your degree. Your future.",
    hl: "Britain.",
    text: "World-class universities and globally recognised degrees, with us beside you at every step.",
    cta: "Explore Universities",
    href: "/universities",
    bg: "bg-hero-1",
    big: "UK",
    chips: ["Admissions", "Top Universities", "Guidance"],
  },
  {
    kicker: "Study Visa Experts",
    title: "Visa without the",
    hl: "stress.",
    text: "Documents, applications and interview preparation, handled with care.",
    cta: "Talk to an Expert",
    href: "/contact",
    bg: "bg-hero-2",
    big: "VISA",
    chips: ["Documents", "Interview Prep", "Support"],
  },
  {
    kicker: "Scholarships & Support",
    title: "Funding and a",
    hl: "soft landing.",
    text: "Find scholarship options and arrive in the UK with confidence.",
    cta: "Get Free Counselling",
    href: "/contact",
    bg: "bg-hero-3",
    big: "£",
    chips: ["Scholarships", "Budgeting", "Settling In"],
  },
];

export default function Slider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const go = (n) => setI((n + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((s) => (
          <div key={s.kicker} className={`relative min-w-full overflow-hidden ${s.bg}`}>
            <div className="absolute -left-24 top-10 w-72 h-72 rounded-full bg-berry-400/25 blur-3xl" />
            <div className="absolute right-0 -bottom-20 w-96 h-96 rounded-full bg-ice-300/60 blur-3xl" />
            <div className="absolute -right-28 -top-28 w-80 h-80 rounded-full spin-slow border-[22px] border-dashed border-white/70" />
            <span className="twinkle absolute left-[8%] top-[18%] text-2xl text-berry-500">✦</span>
            <span className="twinkle absolute left-[48%] bottom-[22%] text-xl text-ice-500" style={{ animationDelay: "1s" }}>✦</span>
            <span className="twinkle absolute right-[12%] top-[12%] text-3xl text-berry-400" style={{ animationDelay: "2s" }}>✦</span>

            <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-28 md:pt-24 md:pb-36 grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3">
                <span className="inline-block px-4 py-1.5 rounded-full glass font-bold text-sm text-berry-600 shadow">
                  ✦ {s.kicker}
                </span>
                <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] text-ink-900">
                  {s.title} <span className="grad-text">{s.hl}</span>
                </h1>
                <p className="mt-5 text-lg md:text-xl max-w-xl text-ink-700">{s.text}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={s.href} className="btn-berry inline-block px-8 py-3.5 rounded-full font-extrabold">
                    {s.cta} →
                  </Link>
                  <Link href="/contact" className="inline-block px-8 py-3.5 rounded-full font-extrabold glass text-ink-900 hover:bg-white transition">
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="md:col-span-2 flex justify-center">
                <div className="relative">
                  <div className="float w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-[3rem] bg-white/85 backdrop-blur flex items-center justify-center soft-pink select-none">
                    <span className="grad-text text-6xl md:text-7xl font-extrabold">{s.big}</span>
                  </div>
                  <span className="absolute -top-4 -right-4 w-14 h-14 rounded-full grad-berry" />
                  <span className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-ice-300" />
                  <span className="absolute -left-6 top-6 glass px-3 py-1.5 rounded-full text-sm font-bold text-ink-700 shadow whitespace-nowrap">✓ {s.chips[0]}</span>
                  <span className="absolute -right-4 top-1/2 glass px-3 py-1.5 rounded-full text-sm font-bold text-ink-700 shadow whitespace-nowrap">✓ {s.chips[1]}</span>
                  <span className="absolute left-4 -bottom-9 glass px-3 py-1.5 rounded-full text-sm font-bold text-ink-700 shadow whitespace-nowrap">✓ {s.chips[2]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-10 md:h-16 pointer-events-none">
        <path d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#fff6fa" />
      </svg>

      <button onClick={() => go(i - 1)} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 glass hover:bg-white text-ink-900 w-11 h-11 rounded-full font-bold text-xl shadow">‹</button>
      <button onClick={() => go(i + 1)} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 glass hover:bg-white text-ink-900 w-11 h-11 rounded-full font-bold text-xl shadow">›</button>
      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, n) => (
          <button key={n} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} className={`h-3 rounded-full transition-all ${n === i ? "w-10 grad-berry" : "w-3 bg-ink-900/25"}`} />
        ))}
      </div>
    </section>
  );
}