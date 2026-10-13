import Link from "next/link";
import PaymentForm from "../../components/PaymentForm";

export const metadata = {
  title: "Payment Solutions | SCS Consultant",
  description:
    "Card machines, POS, online and contactless payment solutions for your retail business. Speak to Saras Consultancy & Services.",
};

const options = [
  { icon: "▭", title: "Card Machines", text: "Reliable terminals for counter and mobile use." },
  { icon: "▣", title: "POS Solutions", text: "Tills and stock tools that run your shop floor." },
  { icon: "◎", title: "Online Payments", text: "Accept cards on your website, securely." },
  { icon: "≋", title: "Contactless", text: "Tap-to-pay for faster, easier checkouts." },
];

const points = [
  ["Tell us about your business", "Share a few details in the form below."],
  ["We review your needs", "Our team looks at the options that suit you."],
  ["We get in touch", "Talk through your choices at a time that suits you."],
];

export default function Payments() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-hero-1 p-8 md:p-16 soft grid md:grid-cols-5 gap-10 items-center">
          <div className="dots absolute inset-0 opacity-70" />
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-blush-300/40 blur-3xl" />
          <span className="twinkle absolute left-[6%] bottom-[14%] text-2xl text-berry-600">✦</span>

          <div className="relative md:col-span-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 text-berry-600 font-bold text-sm">
              💳 Retail Payment Solutions
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
              Give your customers a <span className="grad-text">convenient way to pay</span>
            </h1>
            <p className="mt-5 text-lg text-ink-700 max-w-xl">
              Looking for a payment solution for your retail business? Tell us a little about it and
              our team will talk through the available options with you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquiry" className="btn-berry inline-block px-8 py-3.5 rounded-full font-extrabold">
                Request Payment Solution →
              </a>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full font-extrabold bg-white text-berry-700 shadow-md hover:-translate-y-1 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Floating card visual */}
          <div className="relative md:col-span-2 hidden md:flex justify-center">
            <div className="float relative w-72 h-44 rounded-3xl grad-berry text-white p-6 soft-pink">
              <div className="w-12 h-9 rounded-lg bg-white/30" />
              <p className="mt-6 tracking-[0.3em] text-lg font-bold">•••• •••• •••• 2026</p>
              <p className="absolute bottom-5 left-6 text-sm font-semibold text-white/90">SCS Payments</p>
              <span className="absolute bottom-4 right-6 text-3xl">≋</span>
            </div>
            <div className="absolute -bottom-6 -left-2 w-40 h-24 rounded-2xl bg-blush-200 -rotate-6 -z-0" />
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          Payment options <span className="grad-text">we can help with</span>
        </h2>
        <p className="text-center text-ink-600 mt-3">Choose one, or a mix that fits the way you sell.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((o, k) => (
            <div
              key={o.title}
              className={`group relative overflow-hidden rounded-[2rem] bg-white p-7 soft transition duration-300 hover:-translate-y-2 ${k % 2 ? "lg:mt-8" : ""}`}
            >
              <div className="relative w-14 h-14 rounded-2xl grad-berry text-white text-2xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition">
                {o.icon}
              </div>
              <h3 className="relative mt-5 text-xl font-extrabold">{o.title}</h3>
              <p className="relative mt-2 text-ink-600">{o.text}</p>
              <div className="relative mt-5 h-1.5 w-12 rounded-full grad-berry transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="enquiry" className="max-w-6xl mx-auto px-4 scroll-mt-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-soft p-6 md:p-12 grid lg:grid-cols-5 gap-10 soft">
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-berry-400/20 blur-3xl" />
          <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-ice-300/50 blur-3xl" />

          <div className="relative lg:col-span-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blush-100 text-berry-600 font-bold text-sm">
              ✦ Enquiry
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              Tell us about <span className="grad-text">your business</span>
            </h2>
            <p className="mt-4 text-ink-700">
              Fields marked <span className="text-blush-500 font-bold">*</span> are required. The rest help us
              suggest the right solution, so fill in what you can.
            </p>
            <ol className="mt-8 grid gap-5">
              {points.map(([t, d], n) => (
                <li key={t} className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full grad-berry text-white font-extrabold flex items-center justify-center shadow-md">
                    {n + 1}
                  </span>
                  <div>
                    <h3 className="font-extrabold">{t}</h3>
                    <p className="text-sm text-ink-600">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative lg:col-span-3">
            <PaymentForm />
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
          <h2 className="relative text-3xl md:text-5xl font-extrabold">Give your customers a convenient way to pay.</h2>
          <p className="relative mt-3 text-lg text-white/90">
            Speak to Saras Consultancy &amp; Services about payment solutions for your business.
          </p>
          <a
            href="#enquiry"
            className="relative inline-block mt-7 bg-white text-berry-700 font-extrabold px-9 py-3.5 rounded-full hover:-translate-y-1 transition shadow-lg"
          >
            Request Payment Solution →
          </a>
        </div>
      </section>
    </>
  );
}