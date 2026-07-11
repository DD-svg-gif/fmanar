import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroLiving from "@/assets/hero-living.jpg";
import roomBedroom from "@/assets/room-bedroom.jpg";
import roomDining from "@/assets/room-dining.jpg";
import roomOffice from "@/assets/room-office.jpg";
import roomLiving2 from "@/assets/room-living2.jpg";
import lp1 from "@/assets/living-p1.jpg.asset.json";
import lp2 from "@/assets/living-p2.jpg.asset.json";
import lp3 from "@/assets/living-p3.jpg.asset.json";
import lp4 from "@/assets/living-p4.jpg.asset.json";
import lp5 from "@/assets/living-p5.jpg.asset.json";
import lp6 from "@/assets/living-p6.jpg.asset.json";
import lp7 from "@/assets/living-p7.jpg.asset.json";
import lp8 from "@/assets/living-p8.jpg.asset.json";
import lp9 from "@/assets/living-p9.jpg.asset.json";
import lp10 from "@/assets/living-p10.jpg.asset.json";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — FMANAR Luxury Italian Furniture" },
      { name: "description", content: "Browse the FMANAR collection of luxury Italian furniture — living, dining, bedroom and office pieces hand-finished in Italy." },
      { property: "og:title", content: "Products — FMANAR" },
      { property: "og:description", content: "The FMANAR furniture collection. Hand-finished Italian craftsmanship for living, dining, bedroom and office." },
    ],
  }),
  component: ProductsPage,
});

type Product = { name: string; img: string };

const productsByCategory: Record<string, Product[]> = {
  "Dining Room": [
    { name: "08-01 Dining table", img: roomDining },
    { name: "08-02 Dining chair", img: roomLiving2 },
    { name: "08-03 Sideboard", img: roomBedroom },
    { name: "08-04 Display cabinet", img: heroLiving },
    { name: "08-05 Bar cart", img: roomOffice },
    { name: "08-06 Round table", img: roomDining },
    { name: "08-07 Wine console", img: roomLiving2 },
    { name: "08-08 Buffet", img: roomBedroom },
  ],
  "Living Room": [
    { name: "07-04 Lounge chair", img: roomLiving2 },
    { name: "12-09A TV cabinet", img: roomOffice },
    { name: "07-02 Single chair", img: roomBedroom },
    { name: "12-102 Console", img: roomDining },
    { name: "12-12 TV cabinet", img: roomOffice },
    { name: "12-08 Sideboard", img: roomLiving2 },
    { name: "12-06 Media unit", img: roomDining },
    { name: "12-05 Sideboard", img: heroLiving },
    { name: "12-03 Console", img: roomBedroom },
    { name: "12-02 TV cabinet", img: roomOffice },
    { name: "10-02 Entryway", img: roomLiving2 },
    { name: "10-01B Entryway", img: roomDining },
  ],
  "Office Room": [
    { name: "05-01 Executive desk", img: roomOffice },
    { name: "05-02 Office chair", img: roomLiving2 },
    { name: "05-03 Bookshelf", img: roomBedroom },
    { name: "05-04 Filing cabinet", img: roomDining },
    { name: "05-05 Reading lamp", img: heroLiving },
    { name: "05-06 Side table", img: roomOffice },
  ],
  Bedroom: [
    { name: "03-01 King bed", img: roomBedroom },
    { name: "03-02 Nightstand", img: roomLiving2 },
    { name: "03-03 Wardrobe", img: roomOffice },
    { name: "03-04 Dresser", img: roomDining },
    { name: "03-05 Bench", img: heroLiving },
    { name: "03-06 Mirror", img: roomBedroom },
    { name: "03-07 Lounge chair", img: roomLiving2 },
    { name: "03-08 Vanity", img: roomOffice },
  ],
  "Movie & TV room": [
    { name: "15-01 Cinema sofa", img: roomLiving2 },
    { name: "15-02 Recliner", img: roomOffice },
    { name: "15-03 Media console", img: roomBedroom },
    { name: "15-04 Side table", img: roomDining },
  ],
  Kitchen: [
    { name: "20-01 Kitchen island", img: heroLiving },
    { name: "20-02 Bar stool", img: roomDining },
    { name: "20-03 Pantry cabinet", img: roomOffice },
    { name: "20-04 Breakfast table", img: roomLiving2 },
    { name: "20-05 Wall unit", img: roomBedroom },
  ],
  "Full-Service Design-Build": [
    { name: "Project — Villa Como", img: heroLiving },
    { name: "Project — Penthouse Milano", img: roomLiving2 },
    { name: "Project — Riad Marrakech", img: roomDining },
    { name: "Project — Hôtel Particulier", img: roomBedroom },
  ],
};

const navLeft = ["Products", "Categories", "Stores", "About"];
const navRight = ["Materials", "Cases", "News", "Contact"];

const categories = [
  {
    title: "FMANAR",
    items: ["Dining Room", "Living Room", "Office Room", "Bedroom", "Movie & TV room", "Kitchen", "Full-Service Design-Build"],
    open: true,
  },
  {
    title: "CHIGEL",
    items: ["Dining Room", "Living Room", "Bedroom", "Office and others"],
    open: false,
  },
  {
    title: "SOLEREYES",
    items: [],
    open: false,
  },
];


function ProductsPage() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map((c) => [c.title, !!c.open])),
  );
  const [activeCategory, setActiveCategory] = useState<string>("Living Room");
  const [page, setPage] = useState(1);
  const products = productsByCategory[activeCategory] ?? [];
  const pageSize = 12;
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const pageProducts = products.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav — fixed at top */}
      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          <nav className="hidden flex-1 items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
            {navLeft.map((n) =>
              n === "Products" ? (
                <Link key={n} to="/products" className="text-[--gold]">
                  {n}
                </Link>
              ) : (
                <a key={n} href="/" className="transition-colors hover:text-[--gold]">
                  {n}
                </a>
              ),
            )}
          </nav>

          <Link to="/" className="flex flex-col items-center text-foreground">
            <span className="text-[10px] tracking-[0.4em] text-muted-foreground">MORE PHILOSOPHY</span>
            <span className="font-display text-2xl tracking-[0.35em]">&nbsp;FMANAR</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-end gap-8 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
            {navRight.map((n) => (
              <a key={n} href="/" className="transition-colors hover:text-[--gold]">
                {n}
              </a>
            ))}
          </nav>

          <div className="ml-6 flex items-center gap-4 text-foreground/80 md:ml-8">
            <button aria-label="Search" className="transition hover:text-[--gold]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <span className="text-[11px] tracking-widest">EN</span>
            <span className="text-[11px] tracking-widest text-muted-foreground">AR</span>
          </div>
        </div>
      </header>

      {/* Banner */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden pt-[72px]">
        <img src={heroLiving} alt="Products banner" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />


        {/* Caption */}
        <div className="absolute inset-x-0 bottom-20 z-10 flex flex-col items-center text-center">
          <h1 className="font-display text-6xl text-white drop-shadow md:text-7xl">Products</h1>
          <p className="mt-4 text-[11px] uppercase tracking-[0.5em] text-[--gold-soft]">Life Style</p>
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto grid max-w-[1600px] gap-12 px-8 py-20 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside>
          <p className="border-b border-border/40 pb-4 text-[11px] uppercase tracking-[0.4em] text-[--gold]">
            Categories
          </p>
          <div className="mt-6 space-y-6">
            {categories.map((c) => (
              <div key={c.title}>
                <button
                  onClick={() =>
                    setOpenGroups((p) => ({ ...p, [c.title]: !p[c.title] }))
                  }
                  className="flex w-full items-center justify-between text-left text-sm font-medium uppercase tracking-[0.25em] text-foreground transition hover:text-[--gold]"
                >
                  <span>{c.title}</span>
                  <span className="text-[--gold]">{openGroups[c.title] ? "−" : "+"}</span>
                </button>
                {openGroups[c.title] && c.items.length > 0 && (
                  <ul className="mt-4 space-y-3 border-l border-border/40 pl-4 text-sm">
                    {c.items.map((it) => {
                      const isActive = activeCategory === it && c.title === "FMANAR";
                      return (
                        <li key={it}>
                          <button
                            type="button"
                            onClick={() => {
                              if (c.title === "FMANAR") {
                                setActiveCategory(it);
                                setPage(1);
                              }
                            }}
                            className={`block w-full text-left transition ${
                              isActive
                                ? "text-[--gold]"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {it}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Product grid */}
        <div>
          <div className="mb-8 flex items-baseline justify-between border-b border-border/30 pb-4">
            <h2 className="font-display text-3xl text-foreground">{activeCategory}</h2>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {products.length} pieces
            </span>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pageProducts.map((p) => (
              <a key={p.name} href="#" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 border-t border-border/30 pt-4 text-center">
                  <p className="text-sm tracking-[0.15em] text-foreground transition group-hover:text-[--gold]">
                    {p.name}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2 text-xs tracking-widest">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-3 py-2 text-muted-foreground transition hover:text-[--gold]"
              aria-label="Previous page"
            >
              «
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`h-9 w-9 border transition ${
                  page === n
                    ? "border-[--gold] text-[--gold]"
                    : "border-border/40 text-muted-foreground hover:border-[--gold] hover:text-[--gold]"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-2 text-muted-foreground transition hover:text-[--gold]"
              aria-label="Next page"
            >
              »
            </button>
          </div>
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
                  <li key={x}>
                    <a href="#" className="hover:text-foreground">
                      {x}
                    </a>
                  </li>
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
