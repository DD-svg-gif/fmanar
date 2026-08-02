import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RequestInfo } from "@/components/RequestInfo";
import { AboutIntro, Cases, Customization, WhyChooseUs } from "@/components/SiteSections";
import featuredSofaAsset from "@/assets/featured-sofa.png.asset.json";
const roomLiving2 = featuredSofaAsset.url;
import catLivingV3 from "@/assets/cat-living-v4.jpg.asset.json";
import catBedroomV3 from "@/assets/cat-bedroom-v4.jpg.asset.json";
import catDiningV3 from "@/assets/cat-dining-v4.jpg.asset.json";
import catOfficeV3 from "@/assets/cat-office-v4.jpg.asset.json";
import heroLivingV2Asset from "@/assets/hero-living-v2.jpg.asset.json";
import heroDiningV2Asset from "@/assets/hero-dining-v2.jpg.asset.json";
import heroBedroomV2Asset from "@/assets/hero-bedroom-v2.jpg.asset.json";
import heroOfficeV2Asset from "@/assets/hero-office-v2.jpg.asset.json";

const livingNew = catLivingV3.url;
const bedroomNew = catBedroomV3.url;
const roomDining = catDiningV3.url;
const officeNew = catOfficeV3.url;
const heroLiving = heroLivingV2Asset.url;
const heroDining = heroDiningV2Asset.url;
const heroBedroom = heroBedroomV2Asset.url;
const heroOffice = heroOfficeV2Asset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FMANAR — Luxury Italian Furniture" },
      { name: "description", content: "Bespoke luxury furniture for living rooms, bedrooms, dining and office spaces. Crafted in Italy." },
      { property: "og:title", content: "FMANAR — Luxury Italian Furniture" },
      { property: "og:description", content: "Bespoke luxury furniture. Crafted in Italy." },
    ],
  }),
  component: Home,
});

type Slide = { src: string; label: string; w: number; h: number };

const slides: Slide[] = [
  { src: heroLiving, label: "Living room", w: 1920, h: 1280 },
  { src: heroDining, label: "Dining room", w: 1920, h: 1280 },
  { src: heroBedroom, label: "Bedroom", w: 1920, h: 1280 },
  { src: heroOffice, label: "Office room", w: 1920, h: 1280 },
];

const navLeft = ["Home", "Products"];
const navRight = ["About us", "Contact us"];

function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero / fullscreen carousel */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
            style={{ opacity: i === idx ? 1 : 0 }}
          >
            <img
              src={s.src}
              alt={s.label}
              width={s.w}
              height={s.h}
              loading={idx === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70" />
          </div>
        ))}

        {/* Top nav */}
        <header className="relative z-20 mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6">
          <nav className="hidden flex-1 basis-0 items-center justify-start gap-12 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
            {navLeft.map((n) =>
              n === "Products" ? (
                <Link key={n} to="/products" className="whitespace-nowrap transition-colors hover:text-[--gold]">
                  {n}
                </Link>
              ) : (
                <Link key={n} to="/" className="whitespace-nowrap transition-colors hover:text-[--gold]">
                  {n}
                </Link>
              ),
            )}
          </nav>

          <a href="#" className="flex shrink-0 flex-col items-center px-10 text-white">
            <span className="text-[10px] tracking-[0.4em] text-white/60">MORE PHILOSOPHY</span>
            <span className="font-display text-3xl tracking-[0.35em]">&nbsp;FMANAR</span>
          </a>

          <nav className="hidden flex-1 basis-0 items-center justify-end gap-12 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
            {navRight.map((n) => (
              <Link
                key={n}
                to={n === "About us" ? "/about" : "/contact"}
                className="whitespace-nowrap transition-colors hover:text-[--gold]"
              >
                {n}
              </Link>
            ))}
          </nav>

          <div className="ml-8 flex shrink-0 items-center gap-4 text-white/80 md:ml-12">
            <button aria-label="Search" className="transition hover:text-[--gold]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <span className="text-[11px] tracking-widest">EN</span>
            <span className="text-[11px] tracking-widest text-white/40">AR</span>
          </div>
        </header>

        {/* Hero caption */}
        <div className="absolute inset-x-0 bottom-24 z-10 flex flex-col items-center text-center">
          <h1 className="font-display text-5xl text-white drop-shadow md:text-7xl">
            {slides[i].label}
          </h1>
          <a
            href="#categories"
            className="mt-6 inline-flex items-center gap-3 border-b border-[--gold] pb-1 text-[11px] uppercase tracking-[0.3em] text-[--gold-soft] transition hover:text-[--gold]"
          >
            Explore rooms
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className="h-[2px] w-10 bg-white/30"
            >
              <span
                className="block h-full bg-[--gold] transition-all duration-500"
                style={{ width: i === idx ? "100%" : "0%" }}
              />
            </button>
          ))}
        </div>

        {/* Side socials */}
        <div className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-5 text-white/60 md:flex">
          {["IG", "FB", "WA", "WC", "YT", "IN", "TT"].map((s) => (
            <a key={s} href="#" className="text-[10px] tracking-widest transition hover:text-[--gold]">
              {s}
            </a>
          ))}
        </div>
      </section>

      {/* Brand statement */}
      <section className="border-t border-border/40 px-8 py-28 text-center">
        <p className="mx-auto max-w-3xl text-[11px] uppercase tracking-[0.4em] text-[--gold]">
          The Philosophy
        </p>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl leading-tight text-foreground md:text-5xl">
          In the heart of Foshan, Guangdong since 20115.We bring Italian artisanal excellence into a contemporary andinternational way of living.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every collection is the result of a continuous dialogue between Italian craftsmanship and contemporary architecture, designed to age with grace inside the homes that hold them.
        </p>
      </section>

      {/* Room categories grid */}
      <section id="categories" className="mx-auto max-w-[1600px] px-8 pb-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { src: livingNew, label: "Living", count: "24 pieces", cat: "Living Room" },
            { src: bedroomNew, label: "Bedroom", count: "18 pieces", cat: "Bedroom" },
            { src: roomDining, label: "Dining", count: "21 pieces", cat: "Dining Room" },
            { src: officeNew, label: "Office", count: "12 pieces", cat: "Office Room" },
          ].map((c) => (
            <Link
              key={c.label}
              to="/products"
              search={{ category: c.cat }}
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <img
                src={c.src}
                alt={c.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[--gold]">{c.count}</p>
                <h3 className="mt-2 font-display text-3xl text-white">{c.label}</h3>
                <span className="mt-3 inline-block text-[11px] uppercase tracking-[0.25em] text-white/70 transition group-hover:text-[--gold]">
                  Discover →
                </span>
              </div>
            </Link>
          ))}

        </div>
      </section>

      <AboutIntro />
      <Customization />
      <Cases />



      {/* Featured product */}
      <section className="grid grid-cols-1 items-center gap-12 border-t border-border/40 px-8 py-24 md:grid-cols-2 md:gap-20 md:px-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-black">
          <img src={roomLiving2} alt="Atelier sofa" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">NEW COLLECTION&nbsp;</p>
          <h2 className="mt-5 font-display text-5xl leading-tight">Babylon Rack Circle sofa</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Curved, modular sofa with a solid and multilayer wood structure, padded in polyurethane and complemented by and goose feather cushions.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
            <li>— Available in Custom Fabrics and Leathers</li>
            <li>— Solid kiln-dried hardwood frame</li>
            <li>— Mirror Polished Stainless Steel Finish</li>
            <li>— Custom dimensions on request</li>
          </ul>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-3 border border-[--gold] px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-[--gold-soft] transition hover:bg-[--gold] hover:text-[oklch(0.14_0_0)]"
          >
            Request the lookbook
          </a>
        </div>
      </section>

      <WhyChooseUs />

      <div id="request-info">
        <RequestInfo />
      </div>

      {/* Footer */}

      <footer className="border-t border-border/40 px-8 py-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl tracking-[0.3em]">FMANAR</p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Via dell'Artigianato 12, 41049 Fmanar (MO), Italia
            </p>
          </div>
          {[
            { h: "Collections", l: ["Living", "Bedroom", "Dining", "Office"] },
            { h: "Maison", l: ["Philosophy", "Craftsmanship", "Showrooms", "Press"] },
            { h: "Contact", l: ["Trade program", "Newsletter", "WeChat", "Instagram"] },
          ].map((col) => (
            <div key={col.h}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[--gold]">{col.h}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {col.l.map((x) => (
                  <li key={x}><a href="#" className="hover:text-foreground">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-[1600px] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          © 2026 Fmanar Maison — All rights reserved
        </p>
      </footer>
    </div>
  );
}
