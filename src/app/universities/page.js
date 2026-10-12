import UniList from "../../components/UniList";

export const metadata = { title: "UK Universities | SCS Consultant" };

export default function Universities() {
  return (
    <>
      <section className="relative bg-brand-600 text-white text-center px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 dots" />
        <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full border-[28px] border-dashed border-sun-400/60 spin-slow" />
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-extrabold">Universities in the <span className="inline-block bg-sun-400 text-brand-900 px-3 rounded-xl rotate-2">UK</span></h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/90">Pick a city, explore popular universities, and let us handle the shortlisting, applications and visa.</p>
        </div>
      </section>
      <UniList />
    </>
  );
}
