import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroLiving from "@/assets/hero-living.jpg";
import roomBedroom from "@/assets/room-bedroom.jpg";
import roomDining from "@/assets/room-dining.jpg";
import roomOffice from "@/assets/room-office.jpg";
import roomLiving2 from "@/assets/room-living2.jpg";
import livingNewAsset from "@/assets/room-living-new.jpg.asset.json";
import bedroomNewAsset from "@/assets/room-bedroom-new.jpg.asset.json";
import officeNewAsset from "@/assets/room-office-new.jpg.asset.json";

const livingNew = livingNewAsset.url;
const bedroomNew = bedroomNewAsset.url;
const officeNew = officeNewAsset.url;

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
  { src: roomLiving2, label: "Living room", w: 1200, h: 1500 },
  { src: roomBedroom, label: "Bedroom", w: 1200, h: 1500 },
  { src: roomDining, label: "Dining room", w: 1200, h: 1500 },
  { src: roomOffice, label: "Office room", w: 1200, h: 1500 },
];

const navLeft = ["Products", "Categories", "Stores", "About"];
const navRight = ["Materials", "Cases", "News", "Contact"];

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
          <nav className="hidden flex-1 items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
            {navLeft.map((n) =>
              n === "Products" ? (
                <Link key={n} to="/products" className="transition-colors hover:text-[--gold]">
                  {n}
                </Link>
              ) : (
                <a key={n} href="#" className="transition-colors hover:text-[--gold]">
                  {n}
                </a>
              ),
            )}
          </nav>

          <a href="#" className="flex flex-col items-center text-white">
            <span className="text-[10px] tracking-[0.4em] text-white/60">MORE PHILOSOPHY</span>
            <span className="font-display text-3xl tracking-[0.35em]">&nbsp;FMANAR</span>
          </a>

          <nav className="hidden flex-1 items-center justify-end gap-8 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
            {navRight.map((n) => (
              <a key={n} href="#" className="transition-colors hover:text-[--gold]">
                {n}
              </a>
            ))}
          </nav>

          <div className="ml-6 flex items-center gap-4 text-white/80 md:ml-8">
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
          More than furniture — a quiet study of proportion, material and light, hand-finished in the workshops of Fmanar.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every collection is the result of a continuous dialogue between Italian craftsmanship and contemporary architecture, designed to age with grace inside the homes that hold them.
        </p>
      </section>

      {/* Room categories grid */}
      <section id="categories" className="mx-auto max-w-[1600px] px-8 pb-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { src: livingNew, label: "Living", count: "24 pieces" },
            { src: bedroomNew, label: "Bedroom", count: "18 pieces" },
            { src: roomDining, label: "Dining", count: "21 pieces" },
            { src: officeNew, label: "Office", count: "12 pieces" },
          ].map((c) => (
            <a key={c.label} href="#" className="group relative block aspect-[3/4] overflow-hidden">
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
            </a>
          ))}
        </div>
      </section>

      {/* Featured product */}
      <section className="grid grid-cols-1 items-center gap-12 border-t border-border/40 px-8 py-24 md:grid-cols-2 md:gap-20 md:px-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-black">
          <img src={roomLiving2} alt="Atelier sofa" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">New Collection 2026</p>
          <h2 className="mt-5 font-display text-5xl leading-tight">Atelier — the woven leather sofa</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Hand-woven nappa panels framed in brushed brass. A study in restraint, conceived for spaces where every line is intentional.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
            <li>— Full-grain Italian nappa leather</li>
            <li>— Solid kiln-dried hardwood frame</li>
            <li>— Hand-finished satin brass</li>
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
