import Link from "next/link";
import AccountingForm from "../../components/AccountingForm";

export const metadata = {
  title: "Business Accounting & Bookkeeping | SCS Consultant",
  description:
    "Accounting and bookkeeping support tailored to your business. Keep your financial records organised with Saras Consultancy & Services.",
};

const services = [
  { icon: "▤", title: "Bookkeeping", text: "Day-to-day records kept accurate and up to date." },
  { icon: "▦", title: "Accounts Preparation", text: "Your figures organised into clear accounts." },
  { icon: "£", title: "Income & Expenses", text: "Know what comes in, what goes out, and why." },
  { icon: "✎", title: "Tax Return Information", text: "Details gathered and ready for your tax return." },
];

const included = [
  "Bookkeeping",
  "Accounts preparation",
  "Income and expense records",
  "Business expense organisation",
  "Invoice and payment records",
  "General accounting support",
];

export default function Accounting() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-hero-3 p-8 md:p-16 soft grid md:grid-cols-5 gap-10 items-center">
          <div className="dots absolute inset-0 opacity-70" />
          <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-blush-300/40 blur-3xl" />
          <span className="twinkle absolute left-[5%] top-[10%] text-2xl text-berry-600">✦</span>

          <div className="relative md:col-span-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 text-berry-600 font-bold text-sm">
              📊 Business Accounting &amp; Bookkeeping
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
              Keep your business <span className="grad-text">finances organised</span>
            </h1>
            <p className="mt-5 text-lg text-ink-700 max-w-xl">
              Need help keeping your business financial records organised? Tell us about your business and the
              accounting or bookkeeping support you require.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquiry" className="btn-berry inline-block px-8 py-3.5 rounded-full font-extrabold">
                Request Accounting Support →
              </a>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full font-extrabold bg-white text-berry-700 shadow-md hover:-translate-y-1 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Floating ledger card */}
          <div className="relative md:col-span-2 hidden md:flex justify-center">
            <div className="float relative w-72 rounded-3xl bg-white p-6 soft-pink">
              <div className="flex items-center justify-between">
                <p className="font-extrabold">Business Records</p>
                <span className="w-9 h-9 rounded-xl grad-berry text-white font-extrabold flex items-center justify-center">£</span>
              </div>
              <div className="mt-6 flex items-end gap-3 h-24">
                {[40, 65, 50, 85, 70, 100].map((h, n) => (
                  <div key={n} className="flex-1 rounded-t-lg grad-berry" style={{ height: `${h}%`, opacity: 0.55 + n * 0.09 }} />
                ))}
              </div>
              <div className="mt-4 grid gap-2 text-sm font-bold text-ink-700">
                <div className="flex justify-between"><span>Income</span><span className="text-berry-600">Recorded</span></div>
                <div className="flex justify-between"><span>Expenses</span><span className="text-berry-600">Organised</span></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-2 w-40 h-24 rounded-2xl bg-ice-200 -rotate-6 -z-0" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          Support that <span className="grad-text">fits your business</span>
        </h2>
        <p className="text-center text-ink-600 mt-3">Accounting and bookkeeping tailored to the way you work.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, k) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden rounded-[2rem] bg-white p-7 soft transition duration-300 hover:-translate-y-2 ${k % 2 ? "lg:mt-8" : ""}`}
            >
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
              Tell us about <span className="grad-text">your business</span>
            </h2>
            <p className="mt-4 text-ink-700">
              It only takes a minute. Fields marked <span className="text-blush-500 font-bold">*</span> are required.
            </p>
            <ul className="mt-8 grid gap-3">
              {included.map((h) => (
                <li key={h} className="flex items-center gap-3 font-bold text-ink-700">
                  <span className="shrink-0 w-7 h-7 rounded-full grad-berry text-white text-xs flex items-center justify-center">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-3">
            <AccountingForm />
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
          <h2 className="relative text-3xl md:text-5xl font-extrabold">Keep your business finances organised.</h2>
          <p className="relative mt-3 text-lg text-white/90">
            Talk to us about accounting and bookkeeping support tailored to your business.
          </p>
          <a
            href="#enquiry"
            className="relative inline-block mt-7 bg-white text-berry-700 font-extrabold px-9 py-3.5 rounded-full hover:-translate-y-1 transition shadow-lg"
          >
            Request Accounting Support →
          </a>
        </div>
      </section>
    </>
  );
}