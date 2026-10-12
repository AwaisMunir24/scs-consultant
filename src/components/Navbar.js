"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/universities", label: "UK Universities" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b-4 border-sun-400">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="w-10 h-10 rounded-xl bg-brand-600 text-sun-400 font-extrabold flex items-center justify-center -rotate-6">S</span>
          <span className="text-xl font-extrabold text-brand-700">SCS <span className="text-brand-500">Consultant</span></span>
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`px-4 py-2 rounded-full font-bold transition ${path === l.href ? "bg-brand-600 text-white" : "text-brand-700 hover:bg-brand-100"}`}>{l.label}</Link>
            </li>
          ))}
          <li><Link href="/contact" className="ml-2 px-5 py-2 rounded-full bg-sun-400 text-brand-900 font-extrabold hover:bg-sun-300 shadow-[3px_3px_0_#5B21B6]">Free Counselling</Link></li>
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl text-brand-700" aria-label="Menu">{open ? "✕" : "☰"}</button>
      </nav>
      {open && (
        <ul className="md:hidden px-4 pb-4 grid gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)} className={`block px-4 py-3 rounded-xl font-bold ${path === l.href ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-700"}`}>{l.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
