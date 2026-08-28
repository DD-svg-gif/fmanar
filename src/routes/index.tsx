import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RequestInfo } from "@/components/RequestInfo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FMANAR — Bespoke Luxury Furniture Maison" },
      {
        name: "description",
        content:
          "High-end custom Italian furniture for luxury villas, apartments, and hotels. Handcrafted with solid beech wood and premium leathers.",
      },
      { property: "og:title", content: "FMANAR — Bespoke Luxury Furniture Maison" },
      {
        property: "og:description",
        content:
          "Direct factory production base, bespoke sizing, and white-glove global delivery.",
      },
    ],
  }),
  component: HomePage,
});

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

function HomePage() {
  const [i, setI] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // PC 端 Hero 轮播计时器
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* =========================================================================
          📱 1. 移动端专属布局 (B&B Italia 风格：画报大图流 + 沉浸式叙事)
          ========================================================================= */}
      <div className="block md:hidden bg-[#0d0d0d] text-white">
        {/* 顶部黑色顶栏 */}
        <header className="sticky top-0 z-50 flex items-center justify-between bg-black px-5 py-3.5">
          <Link to="/" className="flex flex-col">
            <span className="text-[7px] tracking-[0.35em] text-neutral-400">MORE PHILOSOPHY</span>
            <span className="font-display text-xl font-bold tracking-[0.25em] text-white">FMANAR</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20inquire%20about%20your%20bespoke%20furniture%20collection."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="text-white/80 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="flex flex-col justify-center gap-1 text-white"
            >
              <span className="block h-0.5 w-5 bg-white transition-all" />
              <span className="block h-0.5 w-5 bg-white transition-all" />
            </button>
          </div>
        </header>

        {/* 移动端汉堡菜单折叠抽屉 */}
        {menuOpen && (
          <div className="fixed inset-x-0 top-[53px] z-40 bg-black/95 px-6 py-8 backdrop-blur-xl border-b border-neutral-800 space-y-6">
            <nav className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-[0.25em]">
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-[--gold]">
                Home
              </Link>
              <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                Products
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                About Us
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                Contact
              </Link>
            </nav>
          </div>
        )}

        {/* Hero 满版通栏主大图 */}
        <section className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
          <img
            src="/PRODUCTS/living%20room/Newert.jpg"
            alt="The Living Collection 2026"
            className="h-full w-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-5 right-5 space-y-3">
            <h1 className="font-display text-4xl leading-tight text-white">
              The Living <br />
              Collection 2026
            </h1>
            <div>
              <Link
                to="/products"
                search={{ category: "Living Room" }}
                className="inline-block border-b border-white pb-1 text-xs uppercase tracking-[0.25em] text-white hover:border-[--gold] hover:text-[--gold]"
              >
                Discover the Collection →
              </Link>
            </div>
          </div>
        </section>

        {/* 极简通知横条 */}
        <div className="border-y border-neutral-800 bg-neutral-950 py-3.5 text-center">
          <a
            href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20consult%20about%20bespoke%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.25em] text-neutral-300 hover:text-white"
          >
            Bespoke Architectural Inquiries & Consultation &gt;
          </a>
        </div>

        {/* 通栏大图流：Indoor / Living Spaces */}
        <section className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 mt-2">
          <img
            src="/PRODUCTS/living%20room/Babylon%20Curved%20Sofa.jpg"
            alt="Living Collection"
            loading="lazy"
            className="h-full w-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-5 space-y-2">
            <h2 className="font-display text-3xl font-light text-white">Living & Dining</h2>
            <Link
              to="/products"
              search={{ category: "Living Room" }}
              className="inline-block border-b border-white pb-0.5 text-[11px] uppercase tracking-[0.2em] text-white"
            >
              Explore Living Products
            </Link>
          </div>
        </section>

        {/* 通栏大图流：Bedroom & Suites */}
        <section className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 mt-2">
          <img
            src="/PRODUCTS/bedroom/Gesu%20Bed.JPG"
            alt="Bedroom Collection"
            loading="lazy"
            className="h-full w-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-5 space-y-2">
            <h2 className="font-display text-3xl font-light text-white">Bedroom Suite</h2>
            <Link
              to="/products"
              search={{ category: "Bedroom" }}
              className="inline-block border-b border-white pb-0.5 text-[11px] uppercase tracking-[0.2em] text-white"
            >
              Explore Bedroom Products
            </Link>
          </div>
        </section>

        {/* 白色设计服务卡片 */}
        <section className="my-2 bg-white px-6 py-12 text-black">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">
            DESIGN SERVICE
          </p>
          <h2 className="mt-2 font-display text-3xl leading-snug font-normal">
            Ready to Redefine the Way You Live?
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-neutral-600">
            From spatial blueprints and custom CAD sizing to solid beech wood curvature and full-grain aniline leather selection, FMANAR Maison executes bespoke furniture solutions for luxury residences, penthouses, and hospitality projects worldwide.
          </p>
          <div className="mt-6">
            <a
              href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20consult%20about%20bespoke%20interior%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full rounded-none bg-[#93302c] py-3.5 text-center text-xs uppercase tracking-[0.2em] font-medium text-white shadow-md transition-colors active:bg-black"
            >
              Book an Appointment
            </a>
          </div>
        </section>

        {/* 工坊与工程服务大图 */}
        <section className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
          <img
            src="/about/gongchang.jpg"
            alt="Contract and Atelier Services"
            loading="lazy"
            className="h-full w-full object-cover brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-5 right-5 space-y-2">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[--gold]">Direct Manufacturing</p>
            <h2 className="font-display text-3xl font-light text-white">
              Explore our Contract & Atelier Services
            </h2>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-block border-b border-white pb-0.5 text-[11px] uppercase tracking-[0.2em] text-white"
              >
                Discover more →
              </Link>
            </div>
          </div>
        </section>

        {/* 咨询模块 */}
        <section className="bg-[#1c1e20] px-6 py-10 text-center text-white">
          <h3 className="font-display text-2xl">Bespoke Inquiries</h3>
          <p className="mt-2 text-xs text-neutral-400">
            Sign up for custom catalogs or contact our direct atelier team.
          </p>
          <div className="mt-5">
            <a
              href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-[#93302c] py-3 text-xs uppercase tracking-[0.2em] font-medium text-white transition-opacity hover:opacity-90"
            >
              Contact Atelier
            </a>
          </div>
        </section>

        {/* 移动端页脚 */}
        <footer className="bg-[#24272a] px-6 py-12 text-white">
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center">
              <span className="text-[8px] tracking-[0.4em] text-neutral-400">MORE PHILOSOPHY</span>
              <span className="font-display text-3xl tracking-[0.3em] font-bold mt-1">FMANAR</span>
            </div>

            <nav className="flex flex-col gap-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              <Link to="/products" search={{ category: "Living Room" }}>Living</Link>
              <Link to="/products" search={{ category: "Dining Room" }}>Dining</Link>
              <Link to="/products" search={{ category: "Bedroom" }}>Bedroom</Link>
              <Link to="/contact">Contacts</Link>
            </nav>

            <div className="border-t border-neutral-700 pt-6 space-y-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                Foshan Production Base & Showroom
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                © 2026 FMANAR Maison — All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* =========================================================================
          💻 2. PC 桌面端专属布局 (100% 还原你的原版 PC 效果与所有向下滚动组件)
          ========================================================================= */}
      <div className="hidden md:block">
        {/* 1. 原版 PC 端 Hero 多图轮播与顶栏 */}
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

        {/* 2. 原版 PC 端 The Philosophy 模块 */}
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

        {/* 3. 原版 PC 端 Categories 网格模块 */}
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

        {/* 4. 原版 PC 端 Feature Sofa 特写模块 */}
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

        {/* 5. 原版 PC 端 RequestInfo 表单 */}
        <div id="request-info">
          <RequestInfo />
        </div>

        {/* 6. 原版 PC 端 4 列富文本页脚 */}
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
