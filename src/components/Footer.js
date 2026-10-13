import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink-900 text-white">
      <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-berry-500/30 blur-3xl" />
      <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-ice-400/25 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-2xl grad-berry font-extrabold flex items-center justify-center -rotate-6">S</span>
            <h3 className="text-2xl font-extrabold">
              SCS <span className="text-blush-300">Consultant</span>
            </h3>
          </div>
          <p className="mt-4 text-white/70">Your trusted partner for study visas and university admissions in the UK.</p>
        </div>
        <div>
          <h4 className="font-extrabold text-blush-300 mb-3">Explore</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="/" className="hover:text-blush-300">Home</Link></li>
            <li><Link href="/universities" className="hover:text-blush-300">UK Universities</Link></li>
            <li><Link href="/contact" className="hover:text-blush-300">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold text-blush-300 mb-3">Get in touch</h4>
          <p className="text-white/80">Kohinoor Faisalabad, Pakistan</p>
          <p className="text-white/80">info@scsconsultant.example</p>
          <Link href="/contact" className="btn-berry inline-block mt-4 px-6 py-2.5 rounded-full font-bold">
            Free Counselling →
          </Link>
        </div>
      </div>
      <p className="relative text-center text-sm bg-black/25 py-4 text-white/60">
        © 2026 SCS Consultant. All rights reserved.
      </p>
    </footer>
  );
}