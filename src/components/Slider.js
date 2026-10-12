"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { kicker: "Study in the UK", title: "Your degree. Your future.", hl: "Britain.", text: "World-class universities and globally recognised degrees, with us beside you at every step.", cta: "Explore Universities", href: "/universities", dark: true, big: "UK" },
  { kicker: "Study Visa Experts", title: "Visa without the", hl: "stress.", text: "Documents, applications and interview preparation, handled with care.", cta: "Talk to an Expert", href: "/contact", dark: false, big: "VISA" },
  { kicker: "Scholarships & Support", title: "Funding and a", hl: "soft landing.", text: "Find scholarship options and arrive in the UK with confidence.", cta: "Get Free Counselling", href: "/contact", dark: true, big: "£" },
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
          <div key={s.kicker} className={`relative min-w-full overflow-hidden ${s.dark ? "bg-brand-600 text-white" : "bg-sun-400 text-brand-900"}`}>
            <div className="absolute inset-0 dots opacity-60" />
            <div className={`absolute -right-24 -top-24 w-80 h-80 rounded-full spin-slow border-[28px] border-dashed ${s.dark ? "border-sun-400/70" : "border-brand-600/40"}`} />
            <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <span className={`inline-block px-4 py-1 rounded-full font-bold text-sm ${s.dark ? "bg-sun-400 text-brand-900" : "bg-brand-600 text-white"}`}>✦ {s.kicker}</span>
                <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05]">
                  {s.title} <span className={`inline-block px-3 -rotate-2 rounded-xl ${s.dark ? "bg-sun-400 text-brand-900" : "bg-brand-600 text-sun-400"}`}>{s.hl}</span>
                </h1>
                <p className={`mt-5 text-lg md:text-xl max-w-xl ${s.dark ? "text-white/90" : "text-brand-900/80"}`}>{s.text}</p>
                <Link href={s.href} className={`inline-block mt-8 px-8 py-3 rounded-full font-extrabold transition hover:-translate-y-1 ${s.dark ? "bg-sun-400 text-brand-900 shadow-[4px_4px_0_#2A0D5E]" : "bg-brand-600 text-white shadow-[4px_4px_0_#2A0D5E]"}`}>{s.cta} →</Link>
              </div>
              <div className="md:col-span-2 flex justify-center">
                <div className={`float w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-[2.5rem] flex items-center justify-center text-6xl md:text-7xl font-extrabold select-none ${s.dark ? "bg-white text-brand-600 shadow-[10px_10px_0_#FFC400]" : "bg-brand-600 text-sun-400 shadow-[10px_10px_0_#2A0D5E]"}`}>{s.big}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => go(i - 1)} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-sun-300 text-brand-900 w-10 h-10 rounded-full font-bold text-xl shadow">‹</button>
      <button onClick={() => go(i + 1)} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-sun-300 text-brand-900 w-10 h-10 rounded-full font-bold text-xl shadow">›</button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, n) => (
          <button key={n} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} className={`h-3 rounded-full transition-all ${n === i ? "w-10 bg-white" : "w-3 bg-white/60"}`} />
        ))}
      </div>
    </section>
  );
}
