import { useEffect, useRef, useState } from "react";

/* ---------------- 1. About + Stats 数据与组件 ---------------- */
const STATS = [
  { v: "10+", l: "Years of Experience" },
  { v: "12,000+", l: "m² Luxury Showroom" },
  { v: "20,000+", l: "m² Production Base" },
];

export function AboutIntro() {
  return (
    <section className="border-t border-border/40 px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-12 lg:gap-20">
        {/* 左侧大图 */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 lg:col-span-5">
          <img
            src="/about/gongchang.jpg"
            alt="FMANAR atelier"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-white/80">
            Foshan Production Base
          </span>
        </div>

        {/* 右侧品牌故事与统计 */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[--gold]/30 px-3.5 py-1 text-[10px] uppercase tracking-[0.35em] text-[--gold]">
            <span>Est. 2015</span>
            <span className="h-1 w-1 rounded-full bg-[--gold]" />
            <span>Shunde, Foshan</span>
          </div>

          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
            High-end bespoke furniture crafted for extraordinary living.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Established in 2015, Foshan Fmanar Furniture is located in Longjiang
            Town, Shunde District—the prestigious furniture manufacturing
            capital of China. Integrating R&D, bespoke production, and
            white-glove global service, we house an independent production base of
            over 20,000 m² alongside an expansive 12,000 m² private showroom.
          </p>

          {/* 核心数据网格 */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/40 pt-10">
            {STATS.map((s) => (
              <div key={s.l} className="space-y-1">
                <p className="font-display text-3xl font-light text-[--gold] md:text-4xl">
                  {s.v}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. Whole-house Customization 数据与组件 ---------------- */
const CUSTOM_ROWS = [
  {
    kicker: "01 / Showroom & Space",
    title: "Who We Are",
    img: "/about/zhangting.jpg",
    text: "Fmanar Home is your premier manufacturing partner for luxury residences, penthouses, and hospitality projects. We deliver end-to-end bespoke execution—from spatial matching and custom CAD proportioning to flawless onsite delivery.",
  },
  {
    kicker: "02 / Solid Structure",
    title: "Uncompromised Quality",
    img: "/about/mujia.jpeg",
    text: "Behind every sculptural silhouette lies an architectural foundation. Our custom solid beech wood frames are engineered with mortise-and-tenon joinery, delivering unyielding structural longevity for world-class interior collections.",
  },
  {
    kicker: "03 / Materials & Finishes",
    title: "Your Palette, Our Craft",
    img: "/about/pise.jpg",
    text: "Explore our master curation of full-grain aniline leathers, nubuck, bouclé, and high-performance tactile textiles. Every stitch, density grade, and finish is tailored exclusively to match your architectural vision.",
  },
  {
    kicker: "04 / Export Packaging",
    title: "Export-Grade Protection",
    img: "/about/dabao.jpg",
    text: "Every piece undergoes multi-stage white-glove packaging: high-density EPE foam wrapping, shock-absorbing corner armor, heavy-duty export cartons, and fully reinforced solid wooden crating built for global transit.",
  },
  {
    kicker: "05 / Logistics",
    title: "Global Ocean Freight & DDP",
    img: "/about/haiyun.jpg",
    text: "Comprehensive, transparent worldwide freight logistics. From Full Container Load (FCL) to seamless Door-to-Door (DDP) customs clearance, we ensure hassle-free port-to-villa delivery across North America, Europe, and the Middle East.",
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
    from === "left"
      ? "-translate-x-8 opacity-0"
      : from === "right"
        ? "translate-x-8 opacity-0"
        : "translate-y-8 opacity-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${shown ? "translate-x-0 translate-y-0 opacity-100" : hidden} ${className}`}
    >
      {children}
    </div>
  );
}

export function Customization() {
  return (
    <section className="border-t border-border/40 px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        {/* 标题部分 */}
        <Reveal className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">
            Whole-House Customization
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">
            One Exclusive Solution, From Raw Timber to Global Delivery
          </h2>
        </Reveal>

        {/* 错落图文列表 */}
        <div className="mt-20 space-y-24 md:space-y-32">
          {CUSTOM_ROWS.map((r, idx) => {
            const isImageLeft = idx % 2 === 0;
            return (
              <Reveal key={r.title} from={isImageLeft ? "left" : "right"}>
                <div className="grid items-center gap-8 md:grid-cols-12 md:gap-16">
                  {/* 图片部分 */}
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-neutral-900 md:col-span-7 ${
                      isImageLeft ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <img
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                    />
                  </div>

                  {/* 文字卡片部分 */}
                  <div
                    className={`space-y-4 md:col-span-5 ${
                      isImageLeft ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[--gold]">
                      {r.kicker}
                    </p>
                    <h3 className="font-display text-3xl leading-snug md:text-4xl">
                      {r.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {r.text}
                    </p>
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

/* ---------------- 3. Why Choose Us 数据与组件 ---------------- */
const REASONS = [
  {
    n: "01",
    t: "Direct Factory Base",
    d: "20,000+ m² independent facility and direct master artisans ensure complete quality control, faster lead times, and zero intermediary markups.",
  },
  {
    n: "02",
    t: "Bespoke by Default",
    d: "Dimensions, wood species, top-grain leathers, and metal hardware fully customizable to meet exact architectural blueprints.",
  },
  {
    n: "03",
    t: "Worldwide Delivery",
    d: "End-to-end export packaging, insured international ocean freight, and direct door-to-villa logistics across the globe.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-t border-border/40 px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">
            Why Choose Us
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">
            Craftsmanship, Scale, & Continuity
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {REASONS.map((r) => (
            <div
              key={r.t}
              className="group relative rounded-2xl border border-border/40 bg-neutral-950/40 p-8 transition-all duration-500 hover:border-[--gold]/50 hover:bg-neutral-900/40 md:p-10"
            >
              <span className="font-display text-4xl font-light text-[--gold]/80 transition-colors group-hover:text-[--gold]">
                {r.n}
              </span>
              <h3 className="mt-6 font-display text-2xl tracking-wide text-foreground">
                {r.t}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {r.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
