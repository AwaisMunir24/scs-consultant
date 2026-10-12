import Link from "next/link";
export default function Footer() {
  return (
    <footer className="relative bg-brand-900 text-white mt-16 overflow-hidden">
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-sun-400/20" />
      <div className="relative max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-extrabold text-sun-400">SCS Consultant</h3>
          <p className="mt-2 text-white/80">Your trusted partner for study visas and university admissions.</p>
        </div>
        <div>
          <h4 className="font-bold text-sun-400 mb-2">Explore</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-sun-400">Home</Link></li>
            <li><Link href="/universities" className="hover:text-sun-400">UK Universities</Link></li>
            <li><Link href="/contact" className="hover:text-sun-400">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sun-400 mb-2">Get in touch</h4>
          <p>Lahore, Pakistan</p>
          <p>info@scsconsultant.example</p>
        </div>
      </div>
      <p className="relative text-center text-sm bg-black/30 py-3">
  © 2026 SCS Consultant. All rights reserved.
</p>
    </footer>
  );
}
