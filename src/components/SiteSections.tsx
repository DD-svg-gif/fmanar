import { useState } from "react";

import catLiving from "@/assets/cat-living-v4.jpg.asset.json";
import catBedroom from "@/assets/cat-bedroom-v4.jpg.asset.json";
import catDining from "@/assets/cat-dining-v4.jpg.asset.json";
import catOffice from "@/assets/cat-office-v4.jpg.asset.json";
import lp1 from "@/assets/living-p1.jpg.asset.json";
import lp5 from "@/assets/living-p5.jpg.asset.json";
import lp12 from "@/assets/living-p12.jpg.asset.json";
import bed1 from "@/assets/bed-dsc06049.jpg.asset.json";
import office1 from "@/assets/office-dsc06116.jpg.asset.json";

/* ---------------- About + stats ---------------- */

const STATS = [
  { v: "20+", l: "Years of experience" },
  { v: "15,000+", l: "m² premium showroom" },
  { v: "30,000+", l: "m² production base" },
];

export function AboutIntro() {
  return (
    <section className="border-t border-border/40 px-8 py-24">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={catLiving.url} alt="FMANAR atelier" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">About us</p>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            High-end bespoke furniture with personalized design
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            FMANAR is a modern furniture maison integrating research, production, marketing and
            service. From an independent production base and a premium showroom, we specialise in
            high-end custom furniture for villas, luxury apartments and star-rated hotels.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/40 pt-8">
            {STATS.map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl text-[--gold]">{s.v}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Whole-house customization ---------------- */

const CUSTOM_TABS = [
  {
    kicker: "Exquisite",
    title: "Sofa",
    img: lp1.url,
    text: "A true manifesto of modern living. The design plays on contrasts — solids and voids, softness and structure, light and shadow — creating a piece in dialogue with its surroundings.",
  },
  {
    kicker: "Perfect match",
    title: "Living room",
    img: lp5.url,
    text: "Exceptional craftsmanship and contemporary design brought to a new realm, with hand-fitted metal details and materials selected for how they age in the light.",
  },
  {
    kicker: "Fresh",
    title: "Dining",
    img: catDining.url,
    text: "Noble proportions with bold lines, alternating polished stainless steel, bevelled mirror and hand-finished surfaces that reflect the room's finest elements.",
  },
  {
    kicker: "Serene",
    title: "Bedroom",
    img: bed1.url,
    text: "Upholstered volumes and quiet detailing, conceived for comfortable and elegant bedrooms where every line is intentional.",
  },
  {
    kicker: "Focused",
    title: "Office",
    img: office1.url,
    text: "Solid structures and warm veneers shaped for spaces of concentration, with bespoke dimensions available on request.",
  },
];

export function Customization() {
  const [active, setActive] = useState(0);
  const t = CUSTOM_TABS[active];

  return (
    <section className="border-t border-border/40 px-8 py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">Whole-house customization</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">Everything covered, one exclusive solution</h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 border-b border-border/40 pb-5">
          {CUSTOM_TABS.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => setActive(idx)}
              className={`whitespace-nowrap text-[11px] uppercase tracking-[0.3em] transition-colors ${
                idx === active ? "text-[--gold]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[--gold]">{t.kicker}</p>
            <h3 className="mt-4 font-display text-4xl">{t.title}</h3>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">{t.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Cases ---------------- */

const CASES = [
  { img: catBedroom.url, label: "Private villa" },
  { img: lp12.url, label: "Penthouse residence" },
  { img: catOffice.url, label: "Executive suite" },
  { img: catDining.url, label: "Hotel project" },
];

export function Cases() {
  return (
    <section className="border-t border-border/40 px-8 py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">Cases</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">Projects around the world</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map((c) => (
            <figure key={c.label} className="group relative aspect-[3/4] overflow-hidden">
              <img
                src={c.img}
                alt={c.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-[11px] uppercase tracking-[0.3em] text-white/85">
                {c.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why choose us ---------------- */

const REASONS = [
  { t: "Own production base", d: "Advanced production lines and a seasoned technical team keep every detail under our control." },
  { t: "Bespoke by default", d: "Dimensions, fabrics, leathers and finishes tailored to each residence and each project." },
  { t: "Global delivery", d: "Packing, logistics and installation support for villas, apartments and hotels worldwide." },
];

export function WhyChooseUs() {
  return (
    <section className="border-t border-border/40 px-8 py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">Why choose us</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">Resources, craftsmanship, continuity</h2>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {REASONS.map((r, i) => (
            <div key={r.t} className="border-t border-border/40 pt-6">
              <p className="font-display text-2xl text-[--gold]">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-2xl">{r.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
