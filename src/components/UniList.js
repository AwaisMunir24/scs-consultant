"use client";
import Link from "next/link";
import { useState } from "react";

const unis = [
  { name: "University of Oxford", city: "Oxford", tags: ["Law", "Medicine", "Humanities"] },
  { name: "University of Cambridge", city: "Cambridge", tags: ["Science", "Engineering", "Maths"] },
  { name: "Imperial College London", city: "London", tags: ["Engineering", "Science", "Business"] },
  { name: "University College London", city: "London", tags: ["Architecture", "Law", "Arts"] },
  { name: "University of Edinburgh", city: "Edinburgh", tags: ["Informatics", "Medicine", "Arts"] },
  { name: "University of Manchester", city: "Manchester", tags: ["Business", "Engineering", "Computing"] },
  { name: "King's College London", city: "London", tags: ["Health", "Law", "Humanities"] },
  { name: "University of Warwick", city: "Coventry", tags: ["Business", "Economics", "Maths"] },
  { name: "University of Glasgow", city: "Glasgow", tags: ["Veterinary", "Science", "Education"] },
];
const cities = ["All", ...Array.from(new Set(unis.map((u) => u.city)))];
const initial = (name) =>
  name.replace(/^(University of |University College |King's College |Imperial College )/, "")[0];

export default function UniList() {
  const [city, setCity] = useState("All");
  const [q, setQ] = useState("");
  const list = unis.filter(
    (u) => (city === "All" || u.city === city) && u.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="max-w-xl mx-auto">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search a university…"
          className="w-full rounded-full glass soft px-6 py-3.5 outline-none focus:border-berry-500 border-2 border-transparent placeholder:text-ink-600/60"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-6 mb-10">
        {cities.map((c) => (
          <button
            key={c}
            onClick={() => setCity(c)}
            className={`px-5 py-2 rounded-full font-bold transition ${
              city === c ? "grad-berry text-white shadow-lg" : "bg-white text-ink-700 hover:bg-blush-100 soft"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {list.map((u, k) => (
          <article
            key={u.name}
            className="group overflow-hidden rounded-[2rem] bg-white soft transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-18px_rgba(201,42,110,.45)]"
          >
            <div className={`relative h-24 ${k % 2 ? "bg-hero-2" : "bg-hero-1"}`}>
              <span className="absolute right-4 top-2 text-6xl font-extrabold text-white/70 select-none">{initial(u.name)}</span>
              <span className="absolute left-5 top-4 glass px-3 py-1 rounded-full text-sm font-bold text-berry-600">◉ {u.city}</span>
            </div>
            <div className="px-6 pb-6">
              <div className="-mt-8 w-16 h-16 rounded-2xl bg-white soft flex items-center justify-center text-3xl font-extrabold">
                <span className="grad-text">{initial(u.name)}</span>
              </div>
              <h2 className="mt-3 text-lg font-extrabold leading-tight">{u.name}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {u.tags.map((t, j) => (
                  <span key={t} className={`text-sm font-bold px-3 py-1 rounded-full text-ink-700 ${(j + k) % 2 ? "bg-ice-100" : "bg-blush-100"}`}>
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-5 block text-center font-extrabold py-3 rounded-full bg-ink-900 text-white transition group-hover:bg-berry-600"
              >
                Apply via SCS →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {list.length === 0 && (
        <p className="text-center text-ink-600 mt-10">No universities found. Try another city or search.</p>
      )}
      <p className="text-center text-sm text-ink-600 mt-10">
        Course availability and entry requirements vary. Contact us for current details.
      </p>
    </section>
  );
}