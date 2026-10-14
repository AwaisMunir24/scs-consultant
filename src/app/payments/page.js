import Link from "next/link";

export const metadata = {
  title: "Payment Solutions | SCS Consultant",
  description:
    "Card machines, POS, online and contactless payment solutions for your retail business. Chat with Saras Consultancy & Services on WhatsApp.",
};

// Your WhatsApp number: country code + number, digits only, no + or spaces.
// Example for Pakistan: 92 + number without the leading 0, so 923001234567
const WHATSAPP_NUMBER = "447482020223";

const message =
  "Hello SCS Consultant, I would like to know about payment solutions for my business.\n\nBusiness name:\nBusiness type:\nWhat I need:";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const options = [
  { icon: "▭", title: "Card Machines", text: "Reliable terminals for counter and mobile use." },
  { icon: "▣", title: "POS Solutions", text: "Tills and stock tools that run your shop floor." },
  { icon: "◎", title: "Online Payments", text: "Accept cards on your website, securely." },
  { icon: "≋", title: "Contactless", text: "Tap-to-pay for faster, easier checkouts." },
];

const points = [
  ["Message us on WhatsApp", "Tap the button and tell us about your business."],
  ["We review your needs", "Our team looks at the options that suit you."],
  ["We talk through your choices", "Chat or call at a time that suits you."],
];

const share = [
  "Your business name and type of business",
  "Whether it is an existing or a new business",
  "Your current payment provider or terminal",
  "Approximate monthly card turnover and number of transactions",
  "How many locations you have",
  "Which solution you need: card machine, POS, online or contactless",
  "What you want to improve: fees, checkout speed, reliability, online sales",
  "Your preferred time for us to get back to you",
];

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
              Looking for a payment solution for your retail business? Message us on WhatsApp and our
              team will talk through the available options with you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-berry inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-extrabold"
              >
                <WhatsAppIcon /> Chat on WhatsApp
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

      {/* How it works + what to share */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-soft p-6 md:p-12 grid lg:grid-cols-5 gap-10 soft">
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-berry-400/20 blur-3xl" />
          <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-ice-300/50 blur-3xl" />

          <div className="relative lg:col-span-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blush-100 text-berry-600 font-bold text-sm">
              ✦ How it works
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              Simple, <span className="grad-text">straight to WhatsApp</span>
            </h2>
            <p className="mt-4 text-ink-700">
              No forms to fill in. Send us a message and we will take it from there.
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
            <div className="glass soft rounded-3xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-extrabold">
                Details that help us <span className="grad-text">advise you faster</span>
              </h3>
              <p className="mt-2 text-ink-600">Share what you can in your first message. Anything you do not know yet is fine to leave out.</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {share.map((s) => (
                  <li key={s} className="flex gap-3 rounded-2xl bg-white px-4 py-3 border-2 border-ice-200 font-semibold text-ink-700">
                    <span className="shrink-0 w-6 h-6 rounded-full grad-berry text-white text-xs font-bold flex items-center justify-center mt-0.5">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-berry mt-7 inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-extrabold"
              >
                <WhatsAppIcon /> Start a WhatsApp chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-20 pb-24">
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
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 mt-7 bg-white text-berry-700 font-extrabold px-9 py-3.5 rounded-full hover:-translate-y-1 transition shadow-lg"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="btn-berry fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 pl-4 pr-4 sm:pr-5 py-3 rounded-full font-extrabold"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </>
  );
}