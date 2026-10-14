"use client";
import Link from "next/link";
import { useState } from "react";
import { countries } from "./universitiesData";

const initial = (name) =>
  name.replace(/^(The |University of |University College )/, "")[0].toUpperCase();

const splitProv = (p) => p.split(",").map((s) => s.trim()).filter(Boolean);

const groups = countries.map((c) => ({
  ...c,
  items: c.unis.map((u) => ({
    name: Array.isArray(u) ? u[0] : u,
    province: Array.isArray(u) ? u[1] : "",
  })),
}));
const totalCount = groups.reduce((n, g) => n + g.items.length, 0);

function UniCard({ u, g, k }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] bg-white soft transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-18px_rgba(47,134,246,.5)]">
      <div className={`relative h-24 ${k % 2 ? "bg-hero-2" : "bg-hero-1"}`}>
        <span className="absolute right-4 top-2 text-6xl font-extrabold text-white/70 select-none">{initial(u.name)}</span>
        <span className="absolute left-5 top-4 max-w-[70%] truncate glass px-3 py-1 rounded-full text-sm font-bold text-berry-600">
          {g.flag} {u.province || g.name}
        </span>
      </div>
      <div className="px-6 pb-6">
        <div className="-mt-8 w-16 h-16 rounded-2xl bg-white soft flex items-center justify-center text-3xl font-extrabold">
          <span className="grad-text">{initial(u.name)}</span>
        </div>
        <h3 className="mt-3 text-lg font-extrabold leading-tight min-h-[2.75rem]">{u.name}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm font-bold px-3 py-1 rounded-full text-ink-700 bg-ice-100">◷ {g.intake}</span>
          <span className="text-sm font-bold px-3 py-1 rounded-full text-ink-700 bg-blush-100">◉ Study in {g.name}</span>
        </div>
        <Link
          href="/contact"
          className="mt-5 block text-center font-extrabold py-3 rounded-full bg-ink-900 text-white transition group-hover:bg-berry-600"
        >
          Apply via SCS →
        </Link>
      </div>
    </article>
  );
}

export default function UniList() {
  const [country, setCountry] = useState("all");
  const [province, setProvince] = useState("All");
  const [q, setQ] = useState("");

  const selected = groups.find((g) => g.id === country);
  const provinces = selected
    ? Array.from(new Set(selected.items.flatMap((i) => splitProv(i.province)))).sort()
    : [];

  const pickCountry = (id) => {
    setCountry(id);
    setProvince("All");
  };

  const visible = groups
    .filter((g) => country === "all" || g.id === country)
    .map((g) => ({
      ...g,
      items: g.items.filter(
        (i) =>
          i.name.toLowerCase().includes(q.toLowerCase()) &&
          (province === "All" || splitProv(i.province).includes(province))
      ),
    }))
    .filter((g) => g.items.length > 0);

  const pill = (active) =>
    `px-5 py-2 rounded-full font-bold transition ${
      active ? "grad-berry text-white shadow-lg" : "bg-white text-ink-700 hover:bg-blush-100 soft"
    }`;

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

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        <button onClick={() => pickCountry("all")} className={pill(country === "all")}>
          All countries ({totalCount})
        </button>
        {groups.map((g) => (
          <button key={g.id} onClick={() => pickCountry(g.id)} className={pill(country === g.id)}>
            {g.flag} {g.name} ({g.items.length})
          </button>
        ))}
      </div>

      {provinces.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {["All", ...provinces].map((p) => (
            <button
              key={p}
              onClick={() => setProvince(p)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition ${
                province === p ? "bg-ink-900 text-white" : "bg-ice-100 text-ink-700 hover:bg-ice-200"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}

      <div className="mt-12 space-y-16">
        {visible.map((g) => (
          <div key={g.id}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="w-14 h-14 rounded-2xl grad-berry text-3xl flex items-center justify-center -rotate-3 shadow-md">{g.flag}</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">
                Universities in <span className="grad-text">{g.name}</span>
              </h2>
              <span className="px-4 py-1.5 rounded-full bg-blush-100 text-berry-700 font-bold text-sm">
                {g.items.length} {g.items.length === 1 ? "university" : "universities"}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-ice-100 text-ink-700 font-bold text-sm">◷ Intake: {g.intake}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {g.items.map((u, k) => (
                <UniCard key={`${g.id}-${u.name}`} u={u} g={g} k={k} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-center text-ink-600 mt-10">No universities found. Try another country or search.</p>
      )}
      <p className="text-center text-sm text-ink-600 mt-14">
        Intakes and availability can change. Contact us for current details.
      </p>
    </section>
  );
}