import { useEffect, useRef, useState } from "react";

/* ---------------- About + stats ---------------- */
const STATS = [
  { v: "10+", l: "Years of experience" },
  { v: "12,000+", l: "m² premium showroom" },
  { v: "20,000+", l: "m² production base" },
];

export function AboutIntro() {
  return (
    <section className="border-t border-border/40 px-8 py-24">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img src="/about/gongchang.jpg" alt="FMANAR atelier" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">About us</p>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl"> High-end bespoke furniture </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Established in 2015, Foshan Fmanar Furniture is located in Longjiang Town, Shunde District, Foshan City, Guangdong Province—the furniture manufacturing center of China. As a modern furniture manufacturer integrating R&D, production, sales, and service, the company boasts an independent production base of over 20,000 square meters and a high-end showroom of over 12,000 square meters.
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
    title: "Who We Are",
    img: "/about/zhangting.jpg",
    text: "Fmanar Home is your ideal partner for luxury‑residence furnishing. We deliver end‑to‑end services for every client, ranging from space‑matching proposals and personalized size customization to full‑project implementation.",
  },
  {
    title: "Uncompromised Quality",
    img: "/about/mujia.jpeg",
    text: "Behind every luxurious, comfortable sofa lies an extraordinary inner foundation. Our Custom Solid Beech Wood Curved Sofa Frame is built specifically for high-end furniture manufacturers, custom upholstery workshops, and interior designers who demand uncompromised structural integrity and timeless design",
  },
  {
    title: "Your Palette, Our Craft",
    img: "/about/pise.jpg",
    text: "Explore our curated collection of premium top-grain leathers and high-performance textiles. Every hue, shade, and texture—fully customizable to bring your unique design to life.",
  },
  {
    title: "package",
    img: "/about/dabao.jpg",
    text: "Once you confirm upon inspection that the products are in perfect condition, we will protect items with EPE foam, foam boards and plastic film for shock resistance, pack into cartons and reinforce with solid wooden frames for reliable protection.",
  },
  {
    
    title: "Global Ocean Freight",
    img: "/about/haiyun.jpg",
    text: "Cost-effective, fully transparent ocean shipping solutions. From FCL and LCL to complete Door-to-Door (DDP) clearance, we keep your global supply chain moving effortlessly.",
  },
];

export function Reveal({ children, delay = 0, from = "up", className = "" }: { children: React.ReactNode; delay?: number; from?: "up" | "left" | "right"; className?: string }) {
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
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = from === "left" ? "-translate-x-10 opacity-0" : from === "right" ? "translate-x-10 opacity-0" : "translate-y-10 opacity-0";

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-[1100ms] ease-out ${shown ? "translate-x-0 translate-y-0 opacity-100" : hidden} ${className}`}>
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
                  <div className={`relative overflow-hidden md:col-span-8 ${textLeft ? "md:order-2 md:col-start-5" : "md:order-1"}`}>
                    <img src={r.img} alt={r.title} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.04]" />
                  </div>
                  <div className={`relative z-10 border border-border/40 bg-background/95 p-8 backdrop-blur md:col-span-5 md:p-10 ${textLeft ? "md:order-1 md:col-start-1 md:row-start-1 md:mr-[-8%]" : "md:order-2 md:col-start-8 md:row-start-1 md:ml-[-8%]"}`}>
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
