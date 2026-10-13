import Link from "next/link";
import SelfAssessmentForm from "../../components/SelfAssessmentForm";

export const metadata = {
  title: "Self-Employed & Self Assessment | SCS Consultant",
  description:
    "Support for freelancers, contractors, sole traders and the newly self-employed to organise the information needed for Self Assessment.",
};

const who = [
  { icon: "✎", title: "Freelancers", text: "Organise income from clients and projects." },
  { icon: "⚒", title: "Contractors", text: "Keep your records ready for the tax year." },
  { icon: "☖", title: "Sole Traders", text: "Track business income and expenses clearly." },
  { icon: "★", title: "Newly Self-Employed", text: "Start out with the right guidance." },
];

const help = [
  "Self Assessment support",
  "Income and expense organisation",
  "Self-employed bookkeeping",
  "New self-employed guidance",
  "Tax return information preparation",
];

export default function SelfAssessment() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-hero-2 p-8 md:p-16 soft grid md:grid-cols-5 gap-10 items-center">
          <div className="dots absolute inset-0 opacity-70" />
          <div className="absolute -left-16 -top-16 w-72 h-72 rounded-full bg-ice-300/50 blur-3xl" />
          <span className="twinkle absolute right-[6%] top-[12%] text-2xl text-berry-600">✦</span>

          <div className="relative md:col-span-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 text-berry-600 font-bold text-sm">
              👤 Self-Employed &amp; Self-Assessment
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
              Need support with your <span className="grad-text">Self Assessment?</span>
            </h1>
            <p className="mt-5 text-lg text-ink-700 max-w-xl">
              Whether you&apos;re a freelancer, contractor, sole trader or newly self-employed, we can help you
              organise the information required for your Self Assessment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquiry" className="btn-berry inline-block px-8 py-3.5 rounded-full font-extrabold">
                Request Support →
              </a>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full font-extrabold bg-white text-berry-700 shadow-md hover:-translate-y-1 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Floating checklist card */}
          <div className="relative md:col-span-2 hidden md:flex justify-center">
            <div className="float relative w-72 rounded-3xl bg-white p-6 soft-pink">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl grad-berry text-white font-extrabold flex items-center justify-center">£</span>
                <p className="font-extrabold">Self Assessment</p>
              </div>
              <ul className="mt-5 grid gap-3 text-sm font-bold text-ink-700">
                {["Income recorded", "Expenses organised", "Details ready"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full grad-berry text-white text-xs flex items-center justify-center">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 h-2 rounded-full bg-ice-100 overflow-hidden">
                <div className="h-full w-4/5 rounded-full grad-berry" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 w-40 h-24 rounded-2xl bg-ice-200 rotate-6 -z-0" />
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          Who we <span className="grad-text">help</span>
        </h2>
        <p className="text-center text-ink-600 mt-3">If you work for yourself, we can help you get organised.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {who.map((w, k) => (
            <div
              key={w.title}
              className={`group relative overflow-hidden rounded-[2rem] bg-white p-7 soft transition duration-300 hover:-translate-y-2 ${k % 2 ? "lg:mt-8" : ""}`}
            >
              <div className="relative w-14 h-14 rounded-2xl grad-berry text-white text-2xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition">
                {w.icon}
              </div>
              <h3 className="relative mt-5 text-xl font-extrabold">{w.title}</h3>
              <p className="relative mt-2 text-ink-600">{w.text}</p>
              <div className="relative mt-5 h-1.5 w-12 rounded-full grad-berry transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="enquiry" className="max-w-6xl mx-auto px-4 scroll-mt-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-soft p-6 md:p-12 grid lg:grid-cols-5 gap-10 soft">
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-berry-400/20 blur-3xl" />
          <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-blush-200/50 blur-3xl" />

          <div className="relative lg:col-span-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blush-100 text-berry-600 font-bold text-sm">
              ✦ Enquiry
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              How can we <span className="grad-text">help you?</span>
            </h2>
            <p className="mt-4 text-ink-700">
              It only takes a minute. Fields marked <span className="text-blush-500 font-bold">*</span> are required.
            </p>
            <ul className="mt-8 grid gap-3">
              {help.map((h) => (
                <li key={h} className="flex items-center gap-3 font-bold text-ink-700">
                  <span className="shrink-0 w-7 h-7 rounded-full grad-berry text-white text-xs flex items-center justify-center">✓</span>
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-2xl glass px-4 py-3 text-sm text-ink-700">
              🔒 Please don&apos;t send your National Insurance number or other sensitive details through this form.
              We&apos;ll arrange a secure way to collect anything we need.
            </p>
          </div>

          <div className="relative lg:col-span-3">
            <SelfAssessmentForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-20 pb-8">
        <div className="relative overflow-hidden rounded-[2.5rem] grad-berry p-8 md:p-14 text-center text-white soft-pink">
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/15" />
          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-ice-300/30" />
          <span className="twinkle absolute left-[12%] top-[20%] text-2xl">✦</span>
          <span className="twinkle absolute right-[14%] bottom-[22%] text-3xl" style={{ animationDelay: "1.5s" }}>✦</span>
          <h2 className="relative text-3xl md:text-5xl font-extrabold">Ready to get your Self Assessment sorted?</h2>
          <p className="relative mt-3 text-lg text-white/90">Tell us what you need and our team will be in touch.</p>
          <a
            href="#enquiry"
            className="relative inline-block mt-7 bg-white text-berry-700 font-extrabold px-9 py-3.5 rounded-full hover:-translate-y-1 transition shadow-lg"
          >
            Request Self-Assessment Support →
          </a>
        </div>
      </section>
    </>
  );
}