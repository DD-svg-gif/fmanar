import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RequestInfo } from "@/components/RequestInfo";
import { MessageSquare, ArrowRight, Menu, X } from "lucide-react";

type RouteTarget = {
  to: string;
  search?: Record<string, string>;
};

const customerServiceRoutes: Record<string, RouteTarget> = {
  Living: { to: "/products", search: { category: "Living Room" } },
  Bedroom: { to: "/products", search: { category: "Bedroom" } },
  Dining: { to: "/products", search: { category: "Dining Room" } },
  Office: { to: "/products", search: { category: "Office Room" } },
  Delivery: { to: "/delivery" },
  "Privacy Policy": { to: "/privacy-policy" },
  "Shipping Policy": { to: "/shipping-policy" },
  "Return and Refunds": { to: "/return-and-refunds" },
  "Important Notice": { to: "/important-notice" },
  Feedback: { to: "/contact" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FMANAR — Luxury Italian Furniture" },
      {
        name: "description",
        content: "Bespoke luxury furniture for living rooms, bedrooms, dining and office spaces. Crafted in Italy.",
      },
      { property: "og:title", content: "FMANAR — Luxury Italian Furniture" },
      {
        property: "og:description",
        content: "Bespoke luxury furniture. Crafted in Italy.",
      },
    ],
  }),
  component: Home,
});

type Slide = {
  src: string;
  label: string;
  w: number;
  h: number;
};

const slides: Slide[] = [
  { src: "/HOME/livingroom.jpg", label: "Living room", w: 1920, h: 1280 },
  { src: "/HOME/diningroom.jpg", label: "Dining room", w: 1920, h: 1280 },
  { src: "/HOME/bedroom.jpg", label: "Bedroom", w: 1920, h: 1280 },
  { src: "/HOME/officeroom.jpg", label: "Office room", w: 1920, h: 1280 },
];

const navLeft = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
];

const navRight = [
  { label: "About us", to: "/about" },
  { label: "Contact us", to: "/contact" },
];

const CATEGORIES = [
  { src: "/HOME/living1.jpg", label: "Living", count: "24 pieces", cat: "Living Room" },
  { src: "/HOME/bed1.jpg", label: "Bedroom", count: "18 pieces", cat: "Bedroom" },
  { src: "/HOME/dining1.jpg", label: "Dining", count: "21 pieces", cat: "Dining Room" },
  { src: "/HOME/office1.jpg", label: "Office", count: "12 pieces", cat: "Office Room" },
];

function Home() {
  const [i, setI] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const whatsappNumber = "8613679767530"; // 你的官方联系电话
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello FMANAR, I would like to inquire about your bespoke furniture collection.")}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* ========================================================================= */}
      {/* 📱 移动端专属界面 (仅在屏幕小于 md 即 <768px 时生效展示)                     */}
      {/* ========================================================================= */}
      <div className="block md:hidden pb-24">
        {/* 移动端极简顶部 Header */}
        <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-background/90 px-5 py-4 backdrop-blur-md border-b border-border/30">
          <Link to="/" className="flex flex-col">
            <span className="text-[8px] tracking-[0.3em] text-muted-foreground">MORE PHILOSOPHY</span>
            <span className="font-display text-xl tracking-[0.25em] text-foreground">FMANAR</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* 移动端抽屉式全屏导航 */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/98 pt-24 px-8 flex flex-col justify-between pb-12">
            <nav className="space-y-6 text-center">
              {[...navLeft, ...navRight].map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-display text-2xl tracking-widest text-foreground hover:text-[--gold]"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="text-center space-y-2 text-xs text-muted-foreground">
              <p>Email: fmnhome2015@gmail.com</p>
              <p>Foshan, Guangdong, China</p>
            </div>
          </div>
        )}

        {/* 移动端全屏触控首图 */}
        <section className="relative h-[85vh] w-full pt-16 overflow-hidden">
          <img
            src={slides[i].src}
            alt={slides[i].label}
            className="h-full w-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          <div className="absolute inset-x-0 bottom-12 px-6 text-center z-10 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[--gold]">Bespoke Craftsmanship</p>
            <h1 className="font-display text-4xl text-white">{slides[i].label}</h1>
            <div className="pt-2">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[--gold] px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-[--gold-soft]"
              >
                <span>View Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 移动端分类卡片（横向滑动流） */}
        <section className="px-5 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl text-foreground">Spaces</h2>
            <span className="text-[10px] uppercase tracking-widest text-[--gold]">Swipe →</span>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.label}
                to="/products"
                search={{ category: c.cat }}
                className="min-w-[75%] snap-center relative aspect-[3/4] rounded-xl overflow-hidden group shadow-lg"
              >
                <img src={c.src} alt={c.label} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[9px] uppercase tracking-widest text-[--gold]">{c.count}</p>
                  <h3 className="font-display text-2xl text-white mt-1">{c.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 移动端主打款展示 */}
        <section className="px-5 py-8 bg-neutral-900/40 rounded-2xl mx-4 border border-border/30">
          <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5">
            <img
              src="/HOME/Babylon Rack Circle sofa.png"
              alt="Babylon Rack Circle sofa"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-[9px] uppercase tracking-widest text-[--gold]">Spotlight</span>
          <h3 className="font-display text-2xl text-white mt-1">Babylon Rack Circle Sofa</h3>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
            Curved solid beech wood framing with goose feather padding. Fully bespoke sizes and Italian upholstery available.
          </p>
        </section>

        {/* 移动端底部常驻 WhatsApp 咨询栏 */}
        <div className="fixed bottom-0 inset-x-0 z-50 bg-background/95 border-t border-border/50 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex gap-3 backdrop-blur-md">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-emerald-600 active:bg-emerald-700 py-3 text-white text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 💻 PC/桌面端专属界面 (仅在屏幕大于等于 md 即 >=768px 时生效展示)            */}
      {/* ========================================================================= */}
      <div className="hidden md:block">
        {/* 原有 PC 端 Hero 轮播与导航 */}
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
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70" />
            </div>
          ))}

          <header className="relative z-20 mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6">
            <nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
              {navLeft.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="whitespace-nowrap transition-colors hover:text-[--gold]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link to="/" className="flex shrink-0 flex-col items-center px-10 text-white">
              <span className="text-[10px] tracking-[0.4em] text-white/60">MORE PHILOSOPHY</span>
              <span className="font-display text-3xl tracking-[0.35em]">&nbsp;FMANAR</span>
            </Link>
            <nav className="hidden flex-1 basis-0 items-center justify-start gap-10 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
              {navRight.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="whitespace-nowrap transition-colors hover:text-[--gold]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="ml-8 flex shrink-0 items-center gap-4 text-white/80 md:ml-12">
              <span className="text-[11px] tracking-widest">EN</span>
              <span className="text-[11px] tracking-widest text-white/40">AR</span>
            </div>
          </header>

          <div className="absolute inset-x-0 bottom-24 z-10 flex flex-col items-center text-center">
            <h1 className="font-display text-5xl text-white drop-shadow md:text-7xl">
              {slides[i].label}
            </h1>
            <a
              href="#categories"
              className="mt-6 inline-flex items-center gap-3 border-b border-[--gold] pb-1 text-[11px] uppercase tracking-[0.3em] text-[--gold-soft] transition hover:text-[--gold]"
            >
              Explore rooms{" "}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

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
        </section>

        {/* 原有 PC 端 Philosophy 模块 */}
        <section className="border-t border-border/40 px-8 py-28 text-center">
          <p className="mx-auto max-w-3xl text-[11px] uppercase tracking-[0.4em] text-[--gold]">
            The Philosophy
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl leading-tight text-foreground md:text-5xl">
            In the heart of Foshan, Guangdong since 2015. We bring Italian artisanal excellence into a contemporary and international way of living.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Every collection is the result of a continuous dialogue between Italian craftsmanship and contemporary architecture, designed to age with grace inside the homes that hold them.
          </p>
        </section>

        {/* 原有 PC 端 Categories 模块 */}
        <section id="categories" className="mx-auto max-w-[1600px] px-8 pb-28">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
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
                    Discover
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 原有 PC 端 Feature Sofa */}
        <section className="grid grid-cols-1 items-center gap-12 border-t border-border/40 px-8 py-24 md:grid-cols-2 md:gap-20 md:px-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-black">
            <img
              src="/HOME/Babylon Rack Circle sofa.png"
              alt="Babylon Rack Circle sofa"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">NEW COLLECTION</p>
            <h2 className="mt-5 font-display text-5xl leading-tight">Babylon Rack Circle sofa</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Curved, modular sofa with a solid and multilayer wood structure, padded in polyurethane and complemented by goose feather cushions.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              <li>• Available in Custom Fabrics and Leathers</li>
              <li>• Solid kiln-dried hardwood frame</li>
              <li>• Mirror Polished Stainless Steel Finish</li>
              <li>• Custom dimensions on request</li>
            </ul>
            <a
              href="#request-info"
              className="mt-10 inline-flex items-center gap-3 border border-[--gold] px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-[--gold-soft] transition hover:bg-[--gold] hover:text-[oklch(0.14_0_0)]"
            >
              Request the lookbook
            </a>
          </div>
        </section>

        <div id="request-info">
          <RequestInfo />
        </div>

        {/* 原有 PC 端 Footer */}
        <footer className="border-t border-border/40 px-8 py-16">
          <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-4">
            <div>
              <p className="font-display text-2xl tracking-[0.3em]">FMANAR</p>
              <div className="mt-4 max-w-xs space-y-1 text-xs leading-relaxed text-muted-foreground">
                <p>Address: No. 9 Zhenxing Road, Mailang Village, Longjiang Town, Shunde District, Foshan City, Guangdong Province, China</p>
                <p>Business hours: 09:00 - 18:00 (UTC+8)</p>
              </div>
            </div>
            {[
              { h: "Collections", l: ["Living", "Bedroom", "Dining", "Office"] },
              {
                h: "Customer Service",
                l: ["Delivery", "Privacy Policy", "Shipping Policy", "Return and Refunds", "Important Notice"],
              },
              { h: "Contact Us", l: ["Feedback"] },
            ].map((col) => (
              <div key={col.h}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[--gold]">{col.h}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {col.l.map((x) => {
                    const route = customerServiceRoutes[x];
                    return (
                      <li key={x}>
                        {route ? (
                          <Link to={route.to} search={route.search} className="transition-colors hover:text-foreground">
                            {x}
                          </Link>
                        ) : (
                          <a href="#" className="hover:text-foreground">{x}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-[1600px] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            © 2026 Fmanar Maison — All rights reserved
          </p>
        </footer>
      </div>

    </div>
  );
}
