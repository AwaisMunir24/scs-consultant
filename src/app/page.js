import Link from "next/link";
import Slider from "../components/Slider";

const services = [
  { n: "01", icon: "✎", title: "Admissions Guidance", text: "Course and university selection matched to your profile." },
  { n: "02", icon: "✈", title: "Visa Assistance", text: "Document checklists, applications and interview preparation." },
  { n: "03", icon: "★", title: "Scholarships & Funding", text: "Identify scholarships and plan your finances." },
  { n: "04", icon: "⌂", title: "Pre-departure Support", text: "Accommodation, travel and settling-in advice." },
];
const reasons = [
  ["Personalised guidance", "Advice built around your goals and budget."],
  ["Transparent process", "Clear steps and honest answers, no surprises."],
  ["End-to-end support", "From first chat to your first day in the UK."],
  ["Friendly local team", "Real people you can talk to anytime."],
];
const steps = ["Free Counselling", "Choose University", "Apply & Get Offer", "File Your Visa", "Fly to the UK"];
const words = ["STUDY IN THE UK", "STUDY VISA", "ADMISSIONS", "SCHOLARSHIPS", "FREE COUNSELLING"];

export default function Home() {
  const row = [...words, ...words];
  return (
    <>
      <Slider />

      <div className="overflow-hidden py-6">
        <div className="grad-berry text-white py-3 -rotate-1 scale-105 whitespace-nowrap overflow-hidden shadow-lg">
          <div className="marquee inline-flex gap-10 font-extrabold tracking-widest">
            {[...row, ...row].map((w, n) => (<span key={n}>✦ {w}</span>))}
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          What we <span className="grad-text">do for you</span>
        </h2>
        <p className="text-center text-ink-600 mt-3">Everything you need, from the first chat to your first day in the UK.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, k) => (
            <div
              key={s.n}
              className={`group relative overflow-hidden rounded-[2rem] bg-white p-7 soft transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-18px_rgba(201,42,110,.45)] ${k % 2 ? "lg:mt-8" : ""}`}
            >
              <span className="absolute right-4 top-1 text-7xl font-extrabold text-blush-100 select-none">{s.n}</span>
              <div className="relative w-14 h-14 rounded-2xl grad-berry text-white text-2xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition">
                {s.icon}
              </div>
              <h3 className="relative mt-5 text-xl font-extrabold">{s.title}</h3>
              <p className="relative mt-2 text-ink-600">{s.text}</p>
              <div className="relative mt-5 h-1.5 w-12 rounded-full grad-berry transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-soft p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center soft">
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-berry-400/20 blur-3xl" />
          <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-ice-300/50 blur-3xl" />
          <div className="relative">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blush-100 text-berry-600 font-bold text-sm">✦ Why SCS</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              Why students <span className="grad-text">choose us</span>
            </h2>
            <p className="mt-4 text-ink-700 text-lg">We make studying in the UK simple, friendly and stress-free.</p>
            <Link href="/contact" className="btn-berry inline-block mt-7 px-8 py-3.5 rounded-full font-extrabold">
              Start Your Journey →
            </Link>
          </div>
          <div className="relative grid sm:grid-cols-2 gap-4">
            {reasons.map(([t, d]) => (
              <div key={t} className="glass rounded-3xl p-5 soft">
                <span className="w-9 h-9 rounded-full grad-berry text-white flex items-center justify-center text-sm font-bold">✓</span>
                <h3 className="mt-3 font-extrabold">{t}</h3>
                <p className="mt-1 text-sm text-ink-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          Your journey in <span className="grad-text">5 steps</span>
        </h2>
        <ol className="relative mt-14 grid sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] border-t-4 border-dashed border-blush-300" />
          {steps.map((s, n) => (
            <li key={s} className="relative text-center">
              <div className="mx-auto w-14 h-14 rounded-full grad-berry text-white font-extrabold text-xl flex items-center justify-center ring-8 ring-white shadow-lg">
                {n + 1}
              </div>
              <p className="mt-4 font-bold">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="relative overflow-hidden rounded-[2.5rem] grad-berry p-8 md:p-14 text-center text-white soft-pink">
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/15" />
          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-ice-300/30" />
          <span className="twinkle absolute left-[12%] top-[20%] text-2xl">✦</span>
          <span className="twinkle absolute right-[14%] bottom-[22%] text-3xl" style={{ animationDelay: "1.5s" }}>✦</span>
          <h2 className="relative text-3xl md:text-5xl font-extrabold">Ready to start your UK journey?</h2>
          <p className="relative mt-3 text-lg text-white/90">Book a free counselling session today.</p>
          <Link href="/contact" className="relative inline-block mt-7 bg-white text-berry-700 font-extrabold px-9 py-3.5 rounded-full hover:-translate-y-1 transition shadow-lg">
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}