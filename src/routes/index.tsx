import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

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

const navLeft = ["Home", "Products"];
const navRight = ["About us", "Contact us"];

const PC_COLLECTIONS = [
  {
    title: "Living Room",
    subtitle: "Architectural & Monolithic",
    img: "/PRODUCTS/living%20room/Newert.jpg",
    desc: "Sculptural sofas crafted with solid beech wood frames and top-grain aniline leathers.",
    cat: "Living Room",
  },
  {
    title: "Dining Room",
    subtitle: "Stone & Timber Harmony",
    img: "/PRODUCTS/dining%20room/Barton%20Dining%20Table.JPG",
    desc: "Statement dining tables featuring natural marble tops and refined structural joinery.",
    cat: "Dining Room",
  },
  {
    title: "Bedroom Suites",
    subtitle: "Sanctuary & Comfort",
    img: "/PRODUCTS/bedroom/Gesu%20Bed.JPG",
    desc: "Architectural headboards, wall-panel systems, and bespoke tactile upholstery.",
    cat: "Bedroom",
  },
  {
    title: "Executive Office",
    subtitle: "Prestige & Precision",
    img: "/PRODUCTS/office room/President Desk.jpg",
    desc: "Hand-finished executive desks with saddle leather writing pads and integrated storage.",
    cat: "Office Room",
  },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* =========================================================================
          📱 1. 移动端专属布局 (B&B Italia 沉浸式风格)
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

        {/* 移动端下拉菜单 */}
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

        {/* Hero 满版大图 */}
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

        {/* 极简通知条 */}
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

        {/* 通栏大图：Living & Dining */}
        <section className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 mt-2">
          <img
            src="/PRODUCTS/living%20room/Babylon%20Curved%20Sofa.jpg"
            alt="Living Collection"
            loading="lazy"
            className="h-full w-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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

        {/* 通栏大图：Bedroom Suite */}
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

        {/* 咨询 CTA */}
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

        {/* 移动端深灰极简页脚 */}
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
          💻 2. PC 桌面端专属布局 (完整大屏向下滚动画卷)
          ========================================================================= */}
      <div className="hidden md:block">
        {/* 顶部悬浮导航 */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
            <nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
              {navLeft.map((n) => (
                <Link
                  key={n}
                  to={n === "Products" ? "/products" : "/"}
                  className="whitespace-nowrap transition-colors hover:text-[--gold]"
                >
                  {n}
                </Link>
              ))}
            </nav>

            <Link to="/" className="flex shrink-0 flex-col items-center px-10 text-foreground">
              <span className="text-[10px] tracking-[0.4em] text-muted-foreground">MORE PHILOSOPHY</span>
              <span className="font-display text-3xl tracking-[0.35em]">&nbsp;FMANAR</span>
            </Link>

            <nav className="hidden flex-1 basis-0 items-center justify-start gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
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
          </div>
        </header>

        {/* 1. PC 首屏 Hero 区域 */}
        <section className="relative h-screen w-full overflow-hidden">
          <img
            src="/PRODUCTS/living%20room/Newert.jpg"
            alt="FMANAR Maison"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-20 left-16 max-w-2xl space-y-4 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-[--gold]">Bespoke Italian Maison</p>
            <h1 className="font-display text-6xl font-light leading-tight">
              Architectural Living & Italian Craftsmanship
            </h1>
            <p className="text-sm text-white/70 max-w-lg leading-relaxed">
              Direct factory manufacturing base in Foshan with 20,000+ m² independent facility. Tailored for private villas and luxury hospitality worldwide.
            </p>
            <div className="pt-4 flex gap-4">
              <Link
                to="/products"
                className="inline-block border border-white/40 px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-white transition-all hover:bg-white hover:text-black"
              >
                Explore Catalog
              </Link>
              <a
                href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20consult%20about%20bespoke%20furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[--gold] px-8 py-3.5 text-xs uppercase tracking-[0.25em] font-semibold text-black transition-all hover:bg-white"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 2. PC 空间系列矩阵 (Collections Grid) */}
        <section className="mx-auto max-w-[1600px] px-8 py-28">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[--gold]">Curated Spaces</p>
            <h2 className="font-display text-4xl md:text-5xl">Architectural Collections</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore our master-crafted pieces across four essential spatial categories.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8">
            {PC_COLLECTIONS.map((c) => (
              <Link
                key={c.title}
                to="/products"
                search={{ category: c.cat }}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-neutral-950/40 transition-all hover:border-[--gold]/50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-8 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[--gold]">{c.subtitle}</span>
                    <span className="text-xs text-[--gold] opacity-0 transition-opacity group-hover:opacity-100">
                      Explore Collection →
                    </span>
                  </div>
                  <h3 className="font-display text-3xl">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. PC 品牌工坊与整案服务 (Atelier & Contract) */}
        <section className="border-t border-border/40 bg-neutral-950/60 px-8 py-28">
          <div className="mx-auto grid max-w-[1600px] items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-block rounded-full border border-[--gold]/30 px-3.5 py-1 text-[10px] uppercase tracking-[0.35em] text-[--gold]">
                Atelier & Engineering
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Solid Beech Wood Foundation & Full-Grain Leather Craft
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every piece originating from our Foshan production facility is built on an architectural foundation of kiln-dried solid beech wood with precision mortise-and-tenon joinery. We provide interior designers, architects, and luxury homeowners with uncompromised structural integrity and custom CAD proportioning.
              </p>
              <div className="grid grid-cols-3 gap-6 border-t border-border/40 pt-6">
                <div>
                  <p className="font-display text-3xl text-[--gold]">20,000+ m²</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Production Base</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-[--gold]">12,000+ m²</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Private Showroom</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-[--gold]">DDP Global</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Ocean Freight</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-block border-b border-[--gold] pb-1 text-xs uppercase tracking-[0.25em] text-[--gold]"
                >
                  Discover the Atelier Story →
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 border border-border/40">
              <img
                src="/about/gongchang.jpg"
                alt="FMANAR Production Base"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 4. PC 底部咨询横幅 */}
        <section className="border-t border-border/40 px-8 py-20 bg-neutral-900/30 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-display text-4xl">Ready to Begin Your Bespoke Project?</h2>
            <p className="text-sm text-muted-foreground">
              Contact our master craftsmen and export logistics engineers for CAD blueprints, leather swatches, and direct FOB/DDP quotations.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Link
                to="/contact"
                className="rounded border border-border/40 px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors"
              >
                Contact Showroom
              </Link>
              <a
                href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20consult%20about%20a%20luxury%20bespoke%20furniture%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-[#93302c] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-white shadow-lg transition-opacity hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 5. PC 桌面端页脚 */}
        <footer className="border-t border-border/40 px-8 py-12">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            <p>© 2026 Fmanar Maison — All rights reserved</p>
            <p>Foshan, Guangdong, China · Luxury Bespoke Manufacturing</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
