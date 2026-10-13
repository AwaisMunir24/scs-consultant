"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/universities", label: "UK Universities" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="grad-berry text-white text-center text-xs sm:text-sm font-semibold py-2 px-4">
        ✦ Free counselling for UK study visas ·{" "}
        <Link href="/contact" className="underline underline-offset-4 hover:text-blush-100">
          book your slot today
        </Link>
      </div>

      <header className="sticky top-0 z-50 px-3 pt-3">
        <nav
          className={`mx-auto max-w-6xl flex items-center justify-between rounded-full glass pl-3 pr-2 py-2 transition-shadow duration-300 ${
            scrolled ? "soft-pink" : "soft"
          }`}
        >
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-2xl grad-berry text-white font-extrabold flex items-center justify-center -rotate-6 shadow-md">
              S
            </span>
            <span className="text-lg sm:text-xl font-extrabold text-ink-900">
              SCS <span className="grad-text">Consultant</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-4 py-2 rounded-full font-bold transition ${
                    path === l.href
                      ? "grad-berry text-white shadow-md"
                      : "text-ink-700 hover:text-berry-600 hover:bg-blush-100"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn-berry ml-2 inline-block px-5 py-2.5 rounded-full font-bold">
                Free Counselling →
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden w-11 h-11 rounded-full bg-blush-100 text-berry-600 text-xl font-bold"
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mx-auto max-w-6xl mt-2 rounded-3xl glass soft p-3 grid gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-2xl font-bold ${
                  path === l.href ? "grad-berry text-white" : "bg-blush-50 text-ink-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-berry block text-center px-4 py-3 rounded-2xl font-bold"
            >
              Free Counselling →
            </Link>
          </div>
        )}
      </header>
    </>
  );
}