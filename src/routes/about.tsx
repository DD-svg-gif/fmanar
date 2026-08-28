import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AboutIntro, Customization, WhyChooseUs } from "@/components/SiteSections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FMANAR — Bespoke Luxury Furniture Maison" },
      {
        name: "description",
        content:
          "FMANAR designs and manufactures high-end custom furniture for villas, luxury apartments, and star-rated hotels, with its own 20,000+ m² production base and showroom.",
      },
      { property: "og:title", content: "About FMANAR — Bespoke Luxury Furniture Maison" },
      {
        property: "og:description",
        content:
          "Own production base, solid beech wood craftsmanship, and global delivery for luxury interiors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
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

const navLeft = ["Home", "Products"];
const navRight = ["About us", "Contact us"];

function linkFor(label: string) {
  if (label === "Home") return "/";
  if (label === "Products") return "/products";
  if (label === "About us") return "/about";
  return "/contact";
}

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* =========================================================================
          📱 1. 移动端专属布局 (B&B Italia 风格)
          ========================================================================= */}
      <div className="block md:hidden bg-white text-black min-h-screen">
        <header className="sticky top-0 z-50 flex items-center justify-between bg-black px-5 py-3.5 text-white">
          <Link to="/" className="flex flex-col">
            <span className="text-[7px] tracking-[0.35em] text-neutral-400">MORE PHILOSOPHY</span>
            <span className="font-display text-xl font-bold tracking-[0.25em] text-white">FMANAR</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20inquire%20about%20your%20bespoke%20furniture%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="text-white/80 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
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

        {menuOpen && (
          <div className="fixed inset-x-0 top-[53px] z-40 bg-black/95 px-6 py-8 backdrop-blur-xl border-b border-neutral-800 space-y-6 text-white">
            <nav className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-[0.25em]">
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                Home
              </Link>
              <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                Products
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="text-[--gold]">
                About Us
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                Contact
              </Link>
            </nav>
          </div>
        )}

        <section className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-900">
          <img
            src="/about/gongchang.jpg"
            alt="FMANAR Maison"
            className="h-full w-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[--gold]">About Us</p>
            <h1 className="font-display text-4xl font-light text-white tracking-wide mt-1">
              Identity
            </h1>
          </div>
        </section>

        <div className="divide-y divide-neutral-200">
          <article className="px-5 py-8 space-y-4">
            <p className="text-xs leading-relaxed text-neutral-700">
              Established in 2015, Foshan Fmanar Furniture is situated in Longjiang Town, Shunde District, Foshan City—the recognized epicenter of furniture manufacturing. As an integrated modern maison combining R&D, bespoke craftsmanship, and global logistics, the company operates an independent production base of over 20,000 m² alongside an expansive 12,000 m² high-end showroom.
            </p>
            <div className="overflow-hidden rounded-md bg-neutral-100">
              <img
                src="/about/zhangting.jpg"
                alt="FMANAR Showroom"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-wider">
              12,000+ m² Luxury Showroom · Longjiang, Foshan
            </p>
          </article>

          <article className="px-5 py-8 space-y-4">
            <h2 className="font-display text-2xl font-normal text-black">
              The Inner Architecture
            </h2>
            <p className="text-xs leading-relaxed text-neutral-600">
              Behind every sculptural silhouette lies an extraordinary inner foundation. Our custom solid beech wood frames are engineered with mortise-and-tenon joinery, built specifically for luxury residences and interior designers who demand uncompromised structural integrity and longevity.
            </p>
            <div className="overflow-hidden rounded-md bg-neutral-100">
              <img
                src="/about/mujia.jpeg"
                alt="Solid Beech Wood Frame"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-wider">
              Solid Beech Wood Curved Frame & Tenon Joinery
            </p>
          </article>

          <article className="px-5 py-8 space-y-4">
            <h2 className="font-display text-2xl font-normal text-black">
              Your Palette, Our Craft
            </h2>
            <p className="text-xs leading-relaxed text-neutral-600">
              Explore our master curation of premium top-grain aniline leathers, nubuck, bouclé, and high-performance tactile textiles. Every hue, stitch density, and texture is fully customizable to bring bespoke architectural designs to life.
            </p>
            <div className="overflow-hidden rounded-md bg-neutral-100">
              <img
                src="/about/pise.jpg"
                alt="Leather and Fabric Curations"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-wider">
              Full-Grain Aniline Leathers & Tactile Textiles
            </p>
          </article>

          <article className="px-5 py-8 space-y-4">
            <h2 className="font-display text-2xl font-normal text-black">
              White-Glove Export Packaging
            </h2>
            <p className="text-xs leading-relaxed text-neutral-600">
              Upon final quality inspection, every piece is protected with multi-layer EPE foam, shock-resistant corner guards, and heavy-duty cartons, then fully reinforced with solid wooden crating to guarantee flawless global transit.
            </p>
            <div className="overflow-hidden rounded-md bg-neutral-100">
              <img
                src="/about/dabao.jpg"
                alt="Export Packaging"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-wider">
              Heavy-Duty Wooden Crates & Export Protection
            </p>
          </article>

          <article className="px-5 py-8 space-y-4">
            <h2 className="font-display text-2xl font-normal text-black">
              Global Ocean Logistics
            </h2>
            <p className="text-xs leading-relaxed text-neutral-600">
              Cost-effective and fully transparent ocean shipping solutions. From FCL and LCL to complete Door-to-Door (DDP) customs clearance, we deliver seamless supply-chain service directly to private residences and hotels worldwide.
            </p>
            <div className="overflow-hidden rounded-md bg-neutral-100">
              <img
                src="/about/haiyun.jpg"
                alt="Global Ocean Freight"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-wider">
              Worldwide FCL / LCL Container & DDP Services
            </p>
          </article>
        </div>

        <section className="bg-[#1c1e20] px-6 py-10 text-center text-white">
          <h3 className="font-display text-2xl">Bespoke Architectural Project?</h3>
          <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
            Collaborate directly with our master craftsmen and production engineers.
          </p>
          <div className="mt-5">
            <a
              href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20consult%20about%20a%20bespoke%20furniture%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-[#93302c] py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-white shadow-md transition-opacity hover:opacity-90"
            >
              Consult Atelier on WhatsApp
            </a>
          </div>
        </section>

        <footer className="bg-[#24272a] px-6 py-12 text-white">
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center">
              <span className="text-[8px] tracking-[0.4em] text-neutral-400">MORE PHILOSOPHY</span>
              <span className="font-display text-3xl tracking-[0.3em] font-bold mt-1">FMANAR</span>
            </div>

            <nav className="flex flex-col gap-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/products" search={{ category: "Living Room" }}>Living</Link>
              <Link to="/products" search={{ category: "Dining Room" }}>Dining</Link>
              <Link to="/products" search={{ category: "Bedroom" }}>Bedroom</Link>
              <Link to="/contact">Contacts</Link>
            </nav>

            <div className="border-t border-neutral-700 pt-6 space-y-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                20,000+ m² Production Base · Foshan, China
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                © 2026 FMANAR Maison — All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* =========================================================================
          💻 2. PC 桌面端专属布局 (已添加回 4 列富文本页脚)
          ========================================================================= */}
      <div className="hidden md:block">
        <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <img
            src="/about/gongchang.jpg"
            alt="FMANAR maison"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

          <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6">
            <nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
              {navLeft.map((n) => (
                <Link
                  key={n}
                  to={linkFor(n)}
                  className="whitespace-nowrap transition-colors hover:text-[--gold]"
                >
                  {n}
                </Link>
              ))}
            </nav>

            <Link to="/" className="flex shrink-0 flex-col items-center px-10 text-white">
              <span className="text-[10px] tracking-[0.4em] text-white/60">
                MORE PHILOSOPHY
              </span>
              <span className="font-display text-3xl tracking-[0.35em]">&nbsp;FMANAR</span>
            </Link>

            <nav className="hidden flex-1 basis-0 items-center justify-start gap-10 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
              {navRight.map((n) => (
                <Link
                  key={n}
                  to={linkFor(n)}
                  className="whitespace-nowrap transition-colors hover:text-[--gold]"
                >
                  {n}
                </Link>
              ))}
            </nav>
          </header>

          <div className="absolute inset-x-0 bottom-16 z-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">
              About us
            </p>
            <h1 className="mt-4 font-display text-5xl text-white md:text-6xl">
              The FMANAR HOME
            </h1>
          </div>
        </section>

        <AboutIntro />
        <Customization />
        <WhyChooseUs />

        {/* 4 列 PC 端页脚 */}
        <footer className="border-t border-border/40 px-8 py-16 bg-background">
          <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-4">
            <div>
              <p className="font-display text-2xl tracking-[0.3em]">F M A N A R</p>
              <div className="mt-4 max-w-xs space-y-1 text-xs leading-relaxed text-muted-foreground">
                <p>Address: No. 9 Zhenxing Road, Mailang Village, Longjiang Town, Shunde District, Foshan City, Guangdong Province, China</p>
                <p>Business hours: 09:00 - 18:00 (UTC+8)</p>
              </div>
            </div>

            {[
              { h: "COLLECTIONS", l: ["Living", "Bedroom", "Dining", "Office"] },
              {
                h: "CUSTOMER SERVICE",
                l: ["Delivery", "Privacy Policy", "Shipping Policy", "Return and Refunds", "Important Notice"],
              },
              { h: "CONTACT US", l: ["Feedback"] },
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
            © 2026 FMANAR MAISON — ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>
    </div>
  );
}
