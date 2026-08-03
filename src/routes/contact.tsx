import { createFileRoute, Link } from "@tanstack/react-router";
import { RequestInfo } from "@/components/RequestInfo";

import heroLiving from "@/assets/hero-living-v2.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FMANAR — Bespoke Luxury Furniture" },
      {
        name: "description",
        content:
          "Contact the FMANAR team in Foshan, Guangdong for bespoke luxury furniture projects, trade enquiries and showroom visits.",
      },
      { property: "og:title", content: "Contact FMANAR — Bespoke Luxury Furniture" },
      {
        property: "og:description",
        content: "Email, phone and address of the FMANAR maison, plus a direct enquiry form.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

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
    label: "Telephone",
    value: "+86 136 7976 7530",
    href: "tel:+8613679767530",
  },
  {
    label: "Address",
    value:
      "No. 9, Zhenxing Road, Mailang Village, Longjiang Town, Shunde District, Foshan City, Guangdong Province, China",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <img src={heroLiving.url} alt="FMANAR showroom" className="h-full w-full object-cover" />
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

      {/* Details */}
      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">FMANAR Maison</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">We would love to hear from you</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Whether you are planning a private villa, a luxury apartment or a hospitality project,
              our team is ready to guide you from the first sketch to the final installation.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {DETAILS.map((d) => (
              <div key={d.label} className="border-t border-border/40 pt-6">
                <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">{d.label}</dt>
                <dd className="mt-3 text-base leading-relaxed">
                  {d.href ? (
                    <a href={d.href} className="transition-colors hover:text-[--gold]">
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

      {/* Map */}
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

      <footer className="border-t border-border/40 px-8 py-12">
        <p className="mx-auto max-w-[1600px] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          © 2026 Fmanar Maison — All rights reserved
        </p>
      </footer>
    </div>
  );
}
