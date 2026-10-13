import UniList from "../../components/UniList";

export const metadata = { title: "UK Universities | SCS Consultant" };

export default function Universities() {
  return (
    <>
      <section className="relative bg-hero-1 text-center px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full border-[22px] border-dashed border-white/70 spin-slow" />
        <div className="absolute right-10 top-6 w-44 h-44 rounded-full bg-ice-300/60 blur-2xl" />
        <div className="absolute left-16 top-10 w-40 h-40 rounded-full bg-berry-400/25 blur-3xl" />
        <span className="twinkle absolute right-[20%] bottom-[20%] text-3xl text-berry-500">✦</span>
        <div className="relative">
          <span className="inline-block px-4 py-1.5 rounded-full glass font-bold text-sm text-berry-600">✦ Study in the UK</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
            Universities in the <span className="grad-text">UK</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-ink-700">
            Pick a city, explore popular universities, and let us handle the shortlisting, applications and visa.
          </p>
        </div>
      </section>
      <UniList />
    </>
  );
}