import Link from "next/link";
import Slider from "../components/Slider";

const services = [
  { n: "01", title: "Admissions Guidance", text: "Course and university selection matched to your profile." },
  { n: "02", title: "Visa Assistance", text: "Document checklists, applications and interview preparation." },
  { n: "03", title: "Scholarships & Funding", text: "Identify scholarships and plan your finances." },
  { n: "04", title: "Pre-departure Support", text: "Accommodation, travel and settling-in advice." },
];
const steps = ["Free Counselling", "Choose University", "Apply & Get Offer", "File Your Visa", "Fly to the UK"];
const words = ["STUDY IN THE UK", "STUDY VISA", "ADMISSIONS", "SCHOLARSHIPS", "FREE COUNSELLING"];

export default function Home() {
  const row = [...words, ...words];
  return (
    <>
      <Slider />
      <div className="bg-brand-900 text-sun-400 py-3 overflow-hidden whitespace-nowrap">
        <div className="marquee inline-flex gap-10 font-extrabold tracking-widest">
          {[...row, ...row].map((w, n) => (<span key={n}>✦ {w}</span>))}
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">What we <span className="bg-sun-400 px-3 rounded-xl -rotate-1 inline-block">do for you</span></h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, k) => (
            <div key={s.n} className={`group rounded-3xl p-6 border-4 border-brand-600 bg-white transition hover:bg-brand-600 hover:text-white hover:-translate-y-2 shadow-[6px_6px_0_#FFC400] ${k % 2 ? "lg:mt-8" : ""}`}>
              <div className="text-5xl font-extrabold text-sun-500">{s.n}</div>
              <h3 className="mt-3 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 text-brand-900/70 group-hover:text-white/90">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-brand-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 dots" />
        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center">Your journey in <span className="text-sun-400">5 steps</span></h2>
          <ol className="mt-12 grid sm:grid-cols-2 md:grid-cols-5 gap-5">
            {steps.map((s, n) => (
              <li key={s} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-sun-400 text-brand-900 font-extrabold text-2xl flex items-center justify-center rotate-6 shadow-[4px_4px_0_#2A0D5E]">{n + 1}</div>
                <p className="mt-4 font-bold">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-sun-400 p-8 md:p-14 text-center shadow-[10px_10px_0_#6D28D9]">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-brand-600/20" />
          <h2 className="relative text-3xl md:text-5xl font-extrabold">Ready to start your UK journey?</h2>
          <p className="relative mt-3 text-lg">Book a free counselling session today.</p>
          <Link href="/contact" className="relative inline-block mt-7 bg-brand-600 text-white font-extrabold px-9 py-3 rounded-full hover:-translate-y-1 transition shadow-[4px_4px_0_#2A0D5E]">Contact Us →</Link>
        </div>
      </section>
    </>
  );
}
