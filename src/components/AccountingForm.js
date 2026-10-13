import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Business Accounting & Bookkeeping | SCS Consultant",
  description:
    "Accounting and bookkeeping support tailored to your business. Keep your financial records organised with Saras Consultancy & Services.",
};

const MESSAGE =
  "Hello SCS Consultant, I would like a quotation for Business Accounting & Bookkeeping support.";

const highlights = [
  {
    icon: "▤",
    title: "Bookkeeping",
    text: "Day-to-day records kept accurate and up to date.",
  },
  {
    icon: "▦",
    title: "Accounts Preparation",
    text: "Your figures organised into clear accounts.",
  },
  {
    icon: "£",
    title: "Income & Expenses",
    text: "Know what comes in, what goes out, and why.",
  },
  {
    icon: "✎",
    title: "Tax Return Information",
    text: "Details gathered and ready for your tax return.",
  },
];

const services = [
  {
    title: "Bookkeeping",
    text: "Regular, accurate records of everything your business does.",
  },
  {
    title: "Accounts Preparation",
    text: "Your financial information put together into proper accounts.",
  },
  {
    title: "Income and Expense Records",
    text: "Clear records of money coming in and going out.",
  },
  {
    title: "Business Expense Organisation",
    text: "Receipts and costs sorted so nothing gets lost.",
  },
  {
    title: "Invoice and Payment Records",
    text: "Track what you have billed and what has been paid.",
  },
  {
    title: "General Accounting Support",
    text: "Practical help with day-to-day accounting questions.",
  },
];

const steps = [
  {
    title: "Message Us on WhatsApp",
    text: "Tell us about your business and the accounting support you need.",
  },
  {
    title: "Discuss Your Requirements",
    text: "We will discuss your business type, size and bookkeeping requirements.",
  },
  {
    title: "Receive Your Quotation",
    text: "Get a quotation tailored to your business requirements.",
  },
];

export default function Accounting() {
  return (
    <main className="w-full min-w-0">
      {/* Hero */}
      <section className="w-full px-4 pt-10 md:pt-16">
        <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-hero-3 p-8 md:p-16 soft">
          <div className="dots absolute inset-0 opacity-70" />

          <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-blush-300/40 blur-3xl" />

          <span className="twinkle absolute left-[5%] top-[10%] text-2xl text-berry-600">
            ✦
          </span>

          <div className="relative w-full">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 text-berry-600 font-bold text-sm">
              📊 Business Accounting &amp; Bookkeeping
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
              Keep your business{" "}
              <span className="grad-text">finances organised</span>
            </h1>

            <p className="mt-5 text-lg text-ink-700 max-w-3xl">
              Need help keeping your business financial records organised?
              Talk to us about the accounting or bookkeeping support your
              business requires. We provide practical support to help you keep
              your financial information clear, organised and up to date.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton message={MESSAGE}>
                Get a Quote on WhatsApp
              </WhatsAppButton>
            </div>

            {/* Business Records Illustration */}
            <div className="mt-12 max-w-md">
              <div className="float relative w-full max-w-sm rounded-3xl bg-white p-6 soft-pink">
                <div className="flex items-center justify-between">
                  <p className="font-extrabold">Business Records</p>

                  <span className="w-9 h-9 rounded-xl grad-berry text-white font-extrabold flex items-center justify-center">
                    £
                  </span>
                </div>

                <div className="mt-6 flex items-end gap-3 h-24">
                  {[40, 65, 50, 85, 70, 100].map((h, n) => (
                    <div
                      key={n}
                      className="flex-1 rounded-t-lg grad-berry"
                      style={{
                        height: `${h}%`,
                        opacity: 0.55 + n * 0.09,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-4 grid gap-2 text-sm font-bold text-ink-700">
                  <div className="flex justify-between">
                    <span>Income</span>
                    <span className="text-berry-600">Recorded</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Expenses</span>
                    <span className="text-berry-600">Organised</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="w-full px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          Support that <span className="grad-text">fits your business</span>
        </h2>

        <p className="text-center text-ink-600 mt-3">
          Accounting and bookkeeping tailored to the way you work.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6">
          {highlights.map((s) => (
            <div
              key={s.title}
              className="group relative w-full overflow-hidden rounded-[2rem] bg-white p-7 soft transition duration-300 hover:-translate-y-1"
            >
              <div className="relative w-14 h-14 rounded-2xl grad-berry text-white text-2xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition">
                {s.icon}
              </div>

              <h3 className="relative mt-5 text-xl font-extrabold">
                {s.title}
              </h3>

              <p className="relative mt-2 text-ink-600">{s.text}</p>

              <div className="relative mt-5 h-1.5 w-12 rounded-full grad-berry transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section className="w-full px-4">
        <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-soft p-8 md:p-14 soft">
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-berry-400/20 blur-3xl" />

          <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-blush-200/50 blur-3xl" />

          <div className="relative w-full">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blush-100 text-berry-600 font-bold text-sm">
              ✦ What We Offer
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              Services for <span className="grad-text">your records</span>
            </h2>

            <p className="mt-4 text-ink-700 text-lg">
              We offer accounting and bookkeeping support to help you organise
              business records, track transactions and maintain clear financial
              information.
            </p>
          </div>

          <div className="relative mt-10 grid grid-cols-1 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="w-full glass rounded-3xl p-5 soft"
              >
                <span className="w-9 h-9 rounded-full grad-berry text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </span>

                <h3 className="mt-3 font-extrabold text-lg">
                  {service.title}
                </h3>

                <p className="mt-2 text-ink-600">{service.text}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-8">
            <WhatsAppButton message={MESSAGE}>
              Get a Quote on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Get a quote in <span className="grad-text">3 easy steps</span>
        </h2>

        <p className="mt-4 text-lg text-ink-600">
          Getting started is straightforward. Contact us directly to discuss
          the accounting and bookkeeping support your business needs.
        </p>

        <ol className="relative mt-10 grid grid-cols-1 gap-10">
          {steps.map((step, n) => (
            <li key={step.title} className="relative w-full">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-full grad-berry text-white font-extrabold text-xl flex items-center justify-center ring-4 ring-white shadow-lg">
                  {n + 1}
                </div>

                <div className="flex-1">
                  <h3 className="font-extrabold text-lg">{step.title}</h3>

                  <p className="mt-2 text-ink-600">{step.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <WhatsAppButton message={MESSAGE}>
            Discuss Your Requirements on WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="w-full px-4 pb-8">
        <div className="relative w-full overflow-hidden rounded-[2.5rem] grad-berry p-8 md:p-14 text-center text-white soft-pink">
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/15" />

          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-ice-300/30" />

          <span className="twinkle absolute left-[12%] top-[20%] text-2xl">
            ✦
          </span>

          <span
            className="twinkle absolute right-[14%] bottom-[22%] text-3xl"
            style={{ animationDelay: "1.5s" }}
          >
            ✦
          </span>

          <h2 className="relative text-3xl md:text-5xl font-extrabold">
            Keep your business finances organised.
          </h2>

          <p className="relative mt-3 text-lg text-white/90">
            Talk to us about accounting and bookkeeping support tailored to
            your business.
          </p>

          <div className="relative mt-7">
            <WhatsAppButton message={MESSAGE} variant="light">
              Request a Quote on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
}