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

export default function UniList() {
  const [city, setCity] = useState("All");
  const list = unis.filter((u) => city === "All" || u.city === city);
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {cities.map((c) => (
          <button key={c} onClick={() => setCity(c)} className={`px-5 py-2 rounded-full font-bold border-2 border-brand-600 transition ${city === c ? "bg-brand-600 text-white" : "bg-white text-brand-700 hover:bg-sun-300"}`}>{c}</button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {list.map((u, k) => (
          <article key={u.name} className={`group rounded-3xl bg-white border-4 border-brand-600 p-6 shadow-[6px_6px_0_#FFC400] transition hover:-translate-y-2 hover:shadow-[10px_10px_0_#FFC400] ${k % 2 ? "sm:rotate-1" : "sm:-rotate-1"} hover:rotate-0`}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-brand-600 text-sun-400 text-3xl font-extrabold flex items-center justify-center">{u.name.replace(/^(University of |University College |King's College |Imperial College )/, "")[0]}</div>
              <div>
                <h2 className="text-lg font-extrabold leading-tight">{u.name}</h2>
                <p className="text-brand-500 font-bold">◉ {u.city}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {u.tags.map((t) => (<span key={t} className="text-sm font-bold px-3 py-1 rounded-full bg-sun-300 text-brand-900">{t}</span>))}
            </div>
            <Link href="/contact" className="mt-5 block text-center bg-brand-600 text-white font-extrabold py-2.5 rounded-full group-hover:bg-sun-400 group-hover:text-brand-900 transition">Apply via SCS →</Link>
          </article>
        ))}
      </div>
      <p className="text-center text-sm text-brand-900/60 mt-10">Course availability and entry requirements vary. Contact us for current details.</p>
    </section>
  );
}
