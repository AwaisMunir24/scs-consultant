"use client";
import { useState } from "react";

const info = [["Visit us", "Lahore, Pakistan"], ["Call us", "+92 000 0000000"], ["Email", "info@scsconsultant.example"], ["Hours", "Mon – Sat, 9am – 6pm"]];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-xl border-2 border-brand-100 focus:border-brand-600 outline-none px-4 py-3 bg-brand-50";
  return (
    <>
      <section className="relative bg-sun-400 text-brand-900 text-center px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border-[24px] border-dashed border-brand-600/40 spin-slow" />
        <h1 className="relative text-4xl md:text-6xl font-extrabold">Let's <span className="inline-block bg-brand-600 text-sun-400 px-3 rounded-xl -rotate-2">talk</span></h1>
        <p className="relative mt-4 text-lg">Tell us about your study plans and we will get back to you.</p>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 rounded-3xl bg-brand-600 text-white p-7 space-y-6 shadow-[8px_8px_0_#FFC400]">
          {info.map(([t, v]) => (
            <div key={t}>
              <h3 className="text-sun-400 font-extrabold">✦ {t}</h3>
              <p className="text-lg break-words">{v}</p>
            </div>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="md:col-span-3 bg-white rounded-3xl border-4 border-brand-600 p-6 md:p-8 space-y-4">
          {sent ? (
            <div className="text-center py-12">
              <div className="mx-auto w-20 h-20 rounded-full bg-sun-400 text-brand-900 text-4xl font-extrabold flex items-center justify-center">✓</div>
              <h2 className="text-2xl font-extrabold mt-4">Thank you!</h2>
              <p className="text-brand-900/70">We have received your enquiry and will contact you soon.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" className={field} />
                <input required type="tel" placeholder="Phone number" className={field} />
              </div>
              <input required type="email" placeholder="Email address" className={field} />
              <select className={field} defaultValue="">
                <option value="" disabled>I am interested in…</option>
                <option>Study in the UK</option>
                <option>Visa assistance</option>
                <option>Scholarships</option>
                <option>Other</option>
              </select>
              <textarea rows={5} placeholder="Your message" className={field} />
              <button className="w-full bg-sun-400 text-brand-900 font-extrabold py-3 rounded-full shadow-[4px_4px_0_#6D28D9] hover:-translate-y-1 transition">Send Enquiry →</button>
            </>
          )}
        </form>
      </section>
    </>
  );
}
