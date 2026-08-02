import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutIntro, Cases, Customization, WhyChooseUs } from "@/components/SiteSections";

import heroLiving from "@/assets/hero-living-v2.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FMANAR — Bespoke Luxury Furniture Maison" },
      {
        name: "description",
        content:
          "FMANAR designs and manufactures high-end custom furniture for villas, luxury apartments and star-rated hotels, with its own production base and showroom.",
      },
      { property: "og:title", content: "About FMANAR — Bespoke Luxury Furniture Maison" },
      {
        property: "og:description",
        content: "Own production base, bespoke craftsmanship and global delivery for luxury interiors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const navLeft = ["Home", "Products"];
const navRight = ["About us", "Contact us"];

function linkFor(label: string) {
  if (label === "Home") return "/";
  if (label === "Products") return "/products";
  if (label === "About us") return "/about";
  return "/contact";
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Banner */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={heroLiving.url} alt="FMANAR maison" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6">
          <nav className="hidden flex-1 basis-0 items-center justify-start gap-12 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
            {navLeft.map((n) => (
              <Link key={n} to={linkFor(n)!} className="whitespace-nowrap transition-colors hover:text-[--gold]">
                {n}
              </Link>
            ))}
          </nav>

          <Link to="/" className="flex shrink-0 flex-col items-center px-10 text-white">
            <span className="text-[10px] tracking-[0.4em] text-white/60">MORE PHILOSOPHY</span>
            <span className="font-display text-3xl tracking-[0.35em]">&nbsp;FMANAR</span>
          </Link>

          <nav className="hidden flex-1 basis-0 items-center justify-end gap-12 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
            {navRight.map((n) => (
              <Link key={n} to={linkFor(n)} className="whitespace-nowrap transition-colors hover:text-[--gold]">
                {n}
              </Link>
            ))}
          </nav>
        </header>

        <div className="absolute inset-x-0 bottom-16 z-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">About us</p>
          <h1 className="mt-4 font-display text-5xl text-white md:text-6xl">The FMANAR maison</h1>
        </div>
      </section>

      <AboutIntro />
      <Customization />
      <Cases />
      <WhyChooseUs />

      <footer className="border-t border-border/40 px-8 py-12">
        <p className="mx-auto max-w-[1600px] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          © 2026 Fmanar Maison — All rights reserved
        </p>
      </footer>
    </div>
  );
}
