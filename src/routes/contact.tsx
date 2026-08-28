import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { RequestInfo } from "@/components/RequestInfo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FMANAR — Bespoke Luxury Furniture Maison" },
      {
        name: "description",
        content:
          "Contact the FMANAR team in Foshan, Guangdong for bespoke luxury furniture projects, private showroom appointments, and global ocean freight.",
      },
      { property: "og:title", content: "Contact FMANAR — Bespoke Luxury Furniture Maison" },
      {
        property: "og:description",
        content: "Email, phone, and atelier location of FMANAR Maison, plus direct bespoke inquiry options.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
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

const DETAILS = [
  {
    label: "Email",
    value: "fmnhome2015@gmail.com",
    href: "mailto:fmnhome2015@gmail.com",
  },
  {
    label: "WhatsApp / Direct Mobile",
    value: "+86 189 2615 0696",
    href: "https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20inquire%20about%20bespoke%20furniture.",
  },
  {
    label: "Telephone",
    value: "+86 136 7976 7530",
    href: "tel:+8613679767530",
  },
  {
    label: "Production & Showroom Address",
    value:
      "No. 9, Zhenxing Road, Mailang Village, Longjiang Town, Shunde District, Foshan City, Guangdong Province, China",
  },
];

function ContactPage() {
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
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                About Us
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-[--gold]">
                Contact
              </Link>
            </nav>
          </div>
        )}

        <section className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-900">
          <img
            src="/about-studio.jpg"
            alt="FMANAR Showroom"
            className="h-full w-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[--gold]">Get In Touch</p>
            <h1 className="font-display text-4xl font-light text-white tracking-wide mt-1">
              Contact Us
            </h1>
          </div>
        </section>

        <section className="px-5 py-8 border-b border-neutral-200 space-y-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">
            FMANAR Atelier & Showroom
          </p>
          <h2 className="font-display text-2xl font-normal leading-snug text-neutral-900">
            We would love to hear from you.
          </h2>
          <p className="text-xs leading-relaxed text-neutral-600">
            Whether you are planning a private villa, a penthouse refurbishment, or a commercial hospitality project, our team in Foshan is prepared to assist from initial CAD blueprinting to direct global ocean shipping.
          </p>
        </section>

        <section className="px-5 py-6 bg-neutral-50 border-b border-neutral-200">
          <div className="space-y-3">
            <a
              href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20consult%20about%20a%20bespoke%20furniture%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg bg-[#93302c] p-4 text-white shadow-md active:bg-black transition-colors"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/80">Direct Consultation</p>
                <p className="font-display text-lg font-medium">WhatsApp Us</p>
              </div>
              <span className="text-lg">→</span>
            </a>

            <a
              href="mailto:fmnhome2015@gmail.com"
              className="flex items-center justify-between rounded-lg bg-white border border-neutral-200 p-4 text-neutral-900 active:bg-neutral-100 transition-colors"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400">Formal RFQ & Drawings</p>
                <p className="font-display text-lg font-medium">fmnhome2015@gmail.com</p>
              </div>
              <span className="text-lg">→</span>
            </a>
          </div>
        </section>

        <section className="px-5 py-8 space-y-6 divide-y divide-neutral-200">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Showroom & Factory Location</p>
            <p className="text-xs leading-relaxed text-neutral-800 pt-1">
              No. 9, Zhenxing Road, Mailang Village, Longjiang Town, Shunde District, Foshan City, Guangdong Province, China
            </p>
          </div>

          <div className="pt-4 space-y-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Telephone / Fax</p>
            <p className="text-xs text-neutral-800 pt-1">
              <a href="tel:+8613679767530" className="hover:underline">
                +86 136 7976 7530
              </a>
            </p>
          </div>

          <div className="pt-4 space-y-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">Working Hours</p>
            <p className="text-xs text-neutral-800 pt-1">
              Monday – Saturday, 9:00 – 18:00 (GMT+8)
            </p>
          </div>
        </section>

        <section className="px-5 pb-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3 font-semibold">
            Atelier Map
          </p>
          <div className="overflow-hidden rounded-lg border border-neutral-200">
            <iframe
              title="FMANAR location — Longjiang Town, Shunde District, Foshan"
              src="https://www.google.com/maps?q=No.%209%20Zhenxing%20Road%2C%20Mailang%20Village%2C%20Longjiang%20Town%2C%20Shunde%20District%2C%20Foshan%2C%20Guangdong%2C%20China&z=15&output=embed"
              className="h-[280px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <div id="request-info-mobile" className="border-t border-neutral-200 bg-neutral-50 px-5 py-8">
          <RequestInfo />
        </div>

        <footer className="bg-[#24272a] px-6 py-12 text-white">
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center">
              <span className="text-[8px] tracking-[0.4em] text-neutral-400">MORE PHILOSOPHY</span>
              <span className="font-display text-3xl tracking-[0.3em] font-bold mt-1">FMANAR</span>
            </div>

            <nav className="flex flex-col gap-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/about">About Us</Link>
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
        <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
          <img src="/about-studio.jpg" alt="FMANAR showroom" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6">
            <nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
              {navLeft.map((n) => (
                <Link key={n} to={linkFor(n)} className="whitespace-nowrap transition-colors hover:text-[--gold]">
                  {n}
                </Link>
              ))}
            </nav>
            <Link to="/" className="flex shrink-0 flex-col items-center px-10 text-white">
              <span className="text-[10px] tracking-[0.4em] text-white/60">MORE PHILOSOPHY</span>
              <span className="font-display text-3xl tracking-[0.35em]">&nbsp;FMANAR</span>
            </Link>
            <nav className="hidden flex-1 basis-0 items-center justify-start gap-10 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
              {navRight.map((n) => (
                <Link key={n} to={linkFor(n)} className="whitespace-nowrap transition-colors hover:text-[--gold]">
                  {n}
                </Link>
              ))}
            </nav>
          </header>
          <div className="absolute inset-x-0 bottom-16 z-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">Get in touch</p>
            <h1 className="mt-4 font-display text-5xl text-white md:text-6xl">Contact us</h1>
          </div>
        </section>

        <section className="px-6 py-24 md:px-16 lg:px-24">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">FMANAR Maison</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">We would love to hear from you</h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Whether you are planning a private villa, a luxury apartment or a hospitality project, our team is ready to guide you from the first sketch to the final installation.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {DETAILS.map((d) => (
                <div key={d.label} className="border-t border-border/40 pt-6">
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">{d.label}</dt>
                  <dd className="mt-3 text-base leading-relaxed">
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined} className="transition-colors hover:text-[--gold]">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
              <div className="border-t border-border/40 pt-6">
                <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">Opening hours</dt>
                <dd className="mt-3 text-base leading-relaxed">Monday – Saturday, 9:00 – 18:00 (GMT+8)</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="px-6 pb-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">Find us</p>
            <div className="mt-6 overflow-hidden border border-border/40">
              <iframe
                title="FMANAR location — Longjiang Town, Shunde District, Foshan"
                src="https://www.google.com/maps?q=No.%209%20Zhenxing%20Road%2C%20Mailang%20Village%2C%20Longjiang%20Town%2C%20Shunde%20District%2C%20Foshan%2C%20Guangdong%2C%20China&z=15&output=embed"
                className="h-[380px] w-full md:h-[460px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <div id="request-info">
          <RequestInfo />
        </div>

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
