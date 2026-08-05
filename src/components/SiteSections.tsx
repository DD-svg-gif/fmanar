import { useEffect, useRef, useState } from "react";

import catLiving from "@/assets/cat-living-v4.jpg.asset.json";
import catBedroom from "@/assets/cat-bedroom-v4.jpg.asset.json";
import catDining from "@/assets/cat-dining-v4.jpg.asset.json";
import catOffice from "@/assets/cat-office-v4.jpg.asset.json";
import lp12 from "@/assets/living-p12.jpg.asset.json";
import bed1 from "@/assets/bed-dsc06049.jpg.asset.json";
import custSofa from "@/assets/cust-sofa-v5.jpg.asset.json";
import custLiving from "@/assets/cust-living-v5.jpg.asset.json";
import custDining from "@/assets/cust-dining-v5.jpg.asset.json";
import custOffice from "@/assets/cust-office-v5.jpg.asset.json";

/* ---------------- About + stats ---------------- */

const STATS = [
  { v: "20+", l: "Years of experience" },
  { v: "12,000+", l: "m² premium showroom" },
  { v: "20,000+", l: "m² production base" },
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
            High-end bespoke furniture&nbsp;
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Established in 2015, Foshan Fmanar Furniture is located in Longjiang Town, Shunde District, Foshan City, Guangdong Province—the furniture manufacturing center of China. As a modern furniture manufacturer integrating R&D, production, sales, and service, the company boasts an independent production base of over 20,000 square meters and a high-end showroom of over 12,000 square meters. With advanced production lines, an experienced technical team, and outstanding management talent, we focus on providing customized furniture for high-end venues such as villas, luxury apartments, and star-rated hotels.
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

const CUSTOM_ROWS = [
  {
    kicker: "Exquisite",
    title: "Sofa",
    img: custSofa.url,
    text: "An integrated solution. This sectional sofa is a prime example of understated luxury living. The design cleverly utilizes contrasts—solid and void, soft and hard, light and shadow—to create a piece of furniture that harmonizes with its surroundings.",
  },
  {
    kicker: "Perfect match",
    title: "Living room",
    img: custLiving.url,
    text: "Exceptional craftsmanship and contemporary design brought to a new realm, with hand-fitted metal details and materials selected for how they age in the light.",
  },
  {
    kicker: "Fresh",
    title: "Dining table",
    img: catDining.url,
    text: "With its clean lines and sophisticated finish, it balances a grand aesthetic with durable quality, imbuing everyday life with a refined and elegant touch of understated luxury.",
  },
  {
    kicker: "Serene",
    title: "Bedroom",
    img: bed1.url,
    text: "This headboard perfectly blends exquisite craftsman ship with modern design, creating a new level of sophistication. Its seamless integration infuses a comfortable and elegant bedroom with fresh, modern vitality.",
  },
  {
    kicker: "Focused",
    title: "Office",
    img: custOffice.url,
    text: "Drawing on the design language of supercars, the flowing arc of the track is condensed into office space aesthetics, and the neat curved surface replicates Bugatti's iconic body lines, creating a sense of strength and hidden luxury for the office space.",
  },
];

export function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "up" | "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden =
    from === "left" ? "-translate-x-10 opacity-0" : from === "right" ? "translate-x-10 opacity-0" : "translate-y-10 opacity-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1100ms] ease-out ${shown ? "translate-x-0 translate-y-0 opacity-100" : hidden} ${className}`}
    >
      {children}
    </div>
  );
}

export function Customization() {
  return (
    <section className="border-t border-border/40 px-8 py-24">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">Whole-house customization</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">Everything covered, one exclusive solution</h2>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-24">
          {CUSTOM_ROWS.map((r, idx) => {
            const textLeft = idx === 0 || idx % 2 === 1;
            return (
              <Reveal key={r.title} from={textLeft ? "right" : "left"}>
                <div className="grid items-center gap-6 md:grid-cols-12 md:gap-0">
                  <div
                    className={`relative overflow-hidden md:col-span-8 ${
                      textLeft ? "md:order-2 md:col-start-5" : "md:order-1"
                    }`}
                  >
                    <img
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.04]"
                    />
                  </div>

                  <div
                    className={`relative z-10 border border-border/40 bg-background/95 p-8 backdrop-blur md:col-span-5 md:p-10 ${
                      textLeft ? "md:order-1 md:col-start-1 md:row-start-1 md:mr-[-8%]" : "md:order-2 md:col-start-8 md:row-start-1 md:ml-[-8%]"
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[--gold]">{r.kicker}</p>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl">{r.title}</h3>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
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
