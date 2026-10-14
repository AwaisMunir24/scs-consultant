"use client";
import { useState } from "react";

const info = [
  ["⌂", "Visit us", "Kohinoor Faisalabad, Pakistan"],
  ["☎", "Call us", "+44 7482020223"],
  ["✉", "Email", "saraconsultancy215@gmail.com"],
  ["◷", "Hours", "Mon – Sat, 9am – 6pm"],
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const field =
    "w-full rounded-2xl border-2 border-blush-100 bg-blush-50/60 px-4 py-3 outline-none transition focus:border-berry-500 focus:bg-white placeholder:text-ink-600/60";

  return (
    <>
      <section className="relative bg-hero-2 text-center px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border-[22px] border-dashed border-white/70 spin-slow" />
        <div className="absolute left-10 bottom-0 w-48 h-48 rounded-full bg-berry-400/25 blur-3xl" />
        <span className="twinkle absolute left-[15%] top-[25%] text-3xl text-berry-500">✦</span>
        <span className="relative inline-block px-4 py-1.5 rounded-full glass font-bold text-sm text-berry-600">✦ We reply fast</span>
        <h1 className="relative mt-4 text-4xl md:text-6xl font-extrabold">
          Let's <span className="grad-text">talk</span>
        </h1>
        <p className="relative mt-4 text-lg text-ink-700">Tell us about your study plans and we will get back to you.</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 grid gap-4 content-start">
          {info.map(([icon, t, v]) => (
            <div key={t} className="flex items-center gap-4 rounded-3xl bg-white p-5 soft transition hover:-translate-y-1">
              <div className="w-12 h-12 shrink-0 rounded-2xl grad-berry text-white text-xl flex items-center justify-center -rotate-3">{icon}</div>
              <div className="min-w-0">
                <h3 className="font-extrabold text-berry-600">{t}</h3>
                <p className="break-words text-ink-700">{v}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 relative overflow-hidden bg-white rounded-[2rem] soft-pink p-6 md:p-8 space-y-4"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blush-100" />
          {sent ? (
            <div className="relative text-center py-12">
              <div className="mx-auto w-20 h-20 rounded-full grad-berry text-white text-4xl font-extrabold flex items-center justify-center">✓</div>
              <h2 className="text-2xl font-extrabold mt-4">Thank you!</h2>
              <p className="text-ink-600">We have received your enquiry and will contact you soon.</p>
            </div>
          ) : (
            <>
              <h2 className="relative text-2xl font-extrabold">
                Send an <span className="grad-text">enquiry</span>
              </h2>
              <div className="relative grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" className={field} />
                <input required type="tel" placeholder="Phone number" className={field} />
              </div>
              <input required type="email" placeholder="Email address" className={`relative ${field}`} />
              <select className={`relative ${field}`} defaultValue="">
                <option value="" disabled>I am interested in…</option>
                <option>Study in the UK</option>
                <option>Visa assistance</option>
                <option>Scholarships</option>
                <option>Other</option>
              </select>
              <textarea rows={5} placeholder="Your message" className={`relative ${field}`} />
              <button className="btn-berry relative w-full font-extrabold py-3.5 rounded-full">Send Enquiry →</button>
            </>
          )}
        </form>
      </section>
    </>
  );
}