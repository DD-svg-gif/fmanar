import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import productsBanner from "@/assets/products-banner.jpg.asset.json";

import dn1 from "@/assets/dine-dsc06100.jpg.asset.json";
import dn2 from "@/assets/dine-dsc06104.jpg.asset.json";
import dn3 from "@/assets/dine-dsc06111.jpg.asset.json";
import dn4 from "@/assets/dine-dsc06113.jpg.asset.json";
import dn5 from "@/assets/dine-dsc06155.jpg.asset.json";
import dn6 from "@/assets/dine-dsc06156.jpg.asset.json";
import dn7 from "@/assets/dine-dsc06164_1.jpg.asset.json";
import dn8 from "@/assets/dine-wps.jpg.asset.json";
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
import lp11 from "@/assets/living-p11.jpg.asset.json";
import lp12 from "@/assets/living-p12.jpg.asset.json";
import lp13 from "@/assets/living-p13.jpg.asset.json";
import lp14 from "@/assets/living-p14.jpg.asset.json";
import lp15 from "@/assets/living-p15.jpg.asset.json";
import lp16 from "@/assets/living-p16.jpg.asset.json";
import lp17 from "@/assets/living-p17.jpg.asset.json";
import lp18 from "@/assets/living-p18.jpg.asset.json";
import lp19 from "@/assets/living-p19.jpg.asset.json";
import lp20 from "@/assets/living-p20.jpg.asset.json";
import lp21 from "@/assets/living-p21.jpg.asset.json";
import lp22 from "@/assets/living-p22.jpg.asset.json";
import lp23 from "@/assets/living-p23.jpg.asset.json";
import lp24 from "@/assets/living-p24.jpg.asset.json";
import lp25 from "@/assets/living-p25.jpg.asset.json";
import lp26 from "@/assets/living-p26.jpg.asset.json";
import lp27 from "@/assets/living-p27.jpg.asset.json";
import lp28 from "@/assets/living-p28.jpg.asset.json";
import lp29 from "@/assets/living-p29.jpg.asset.json";
import lp30 from "@/assets/living-p30.jpg.asset.json";
import lp31 from "@/assets/living-p31.jpg.asset.json";
import lp32 from "@/assets/living-p32.jpg.asset.json";
import lp33 from "@/assets/living-p33.jpg.asset.json";
import lp34 from "@/assets/living-p34.jpg.asset.json";
import lp35 from "@/assets/living-p35.jpg.asset.json";
import lp36 from "@/assets/living-p36.jpg.asset.json";
import bed1 from "@/assets/bed-dsc06049.jpg.asset.json";
import bed2 from "@/assets/bed-dsc06051.jpg.asset.json";
import bed3 from "@/assets/bed-dsc06055-1.jpg.asset.json";
import bed4 from "@/assets/bed-dsc06058-1.jpg.asset.json";
import bed5 from "@/assets/bed-dsc06062.jpg.asset.json";
import bed6 from "@/assets/bed-dsc06064-v2.jpg.asset.json";
import bed7 from "@/assets/bed-dsc06067.jpg.asset.json";
import bed8 from "@/assets/bed-dsc06070.jpg.asset.json";
import bed9 from "@/assets/bed-dsc06073-1.jpg.asset.json";
import bed10 from "@/assets/bed-dsc06081.jpg.asset.json";
import bed11 from "@/assets/bed-dsc06083.jpg.asset.json";
import bed12 from "@/assets/bed-dsc06087.jpg.asset.json";
import bed13 from "@/assets/bed-dsc06089.jpg.asset.json";
import bed14 from "@/assets/bed-dsc06094.jpg.asset.json";
import bed15 from "@/assets/bed-dsc06096.jpg.asset.json";
import bed16 from "@/assets/bed-dsc06097.jpg.asset.json";
import office1 from "@/assets/office-dsc06116.jpg.asset.json";
import office2 from "@/assets/office-dsc06117.jpg.asset.json";
import office3 from "@/assets/office-dsc06125.jpg.asset.json";
import office4 from "@/assets/office-dsc06144.jpg.asset.json";
import office5 from "@/assets/office-orange-desk.webp.asset.json";
import office6 from "@/assets/office-dsc06145.jpg.asset.json";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
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
    { name: "08-01 Dining table", img: dn1.url },
    { name: "08-02 Dining chair", img: dn2.url },
    { name: "08-03 Sideboard", img: dn3.url },
    { name: "08-04 Display cabinet", img: dn4.url },
    { name: "08-05 Bar cart", img: dn5.url },
    { name: "08-06 Round table", img: dn6.url },
    { name: "08-07 Wine console", img: dn7.url },
    { name: "08-08 Buffet", img: dn8.url },
  ],
  "Living Room": [
    { name: "Newert", img: "/PRODUCTS/living%20room/Newert.jpg" },  
    { name: "Bainton Sofa", img: "/PRODUCTS/living%20room/Bainton%20Sofa.jpg" },  
    { name: "Lyman Sofa", img: "/PRODUCTS/living%20room/Lyman%20Sofa.jpg" },   
    { name: "Havergate Sofa", img: "/PRODUCTS/living%20room/Havergate%20Sofa.jpg" },   
    { name: "Babylon Curved Sofa", img: "/PRODUCTS/living%20room/Babylon%20Curved%20Sofa.jpg" },  
    { name: "Babylon Sofa", img: "/PRODUCTS/living%20room/Babylon%20Sofa.jpg" },  
    { name: "Elena Sofa", img: "/PRODUCTS/living%20room/Elena%20Sofa.jpg" },  
    { name: "Krezer Sofa", img: "/PRODUCTS/living%20room/Krezer%20Sofa.jpg" },   
    { name: "Five Sofa", img: "/PRODUCTS/living%20room/Five%20Sofa.jpg" },  
    { name: "Leather Belt Sofa", img: "/PRODUCTS/living%20room/Leather%20Belt%20Sofa.jpg" },  
    { name: "Malawi Sofa", img: "/PRODUCTS/living%20room/Malawi%20Sofa.jpg" },  
    { name: "West Sofa", img: "/PRODUCTS/living%20room/West%20Sofa.jpg" },  
    { name: "Victorian Sofa", img: "/PRODUCTS/living%20room/Victorian%20Sofa.jpg" },  
    { name: "Smile Sofa", img: "/PRODUCTS/living%20room/Smile%20Sofa.jpg" },  
    { name: "Rhapsody Sofa", img: "/PRODUCTS/living%20room/Rhapsody%20Sofa.jpg" },  
    { name: "Signature Sofa", img: "/PRODUCTS/living%20room/Signature%20Sofa.jpg" },  
    { name: "Tiger Stripe Sofa", img: "/PRODUCTS/living%20room/Tiger%20Stripe%20Sofa.jpg" }, 
    { name: "Tucson Blues Sofa", img: "/PRODUCTS/living%20room/Tucson%20Blues%20Sofa.jpg" },
    { name: "Jona Sofa", img: "/PRODUCTS/living%20room/Jona%20Sofa.jpg" }, 
    { name: "Siena Sofa", img: "/PRODUCTS/living%20room/Siena%20Sofa.jpg" },  
    { name: "Annual Ring Sofa", img: "/PRODUCTS/living%20room/Annual%20Ring%20Sofa.jpg" }, 
    { name: "Stone Sofa", img: "/PRODUCTS/living%20room/Stone%20Sofa.jpg" },  
    { name: "Tiverton Sofa", img: "/PRODUCTS/living%20room/Tiverton%20Sofa.jpg" },   
    { name: "Now Barton Sofa", img: "/PRODUCTS/living%20room/Now%20Barton%20Sofa.jpg" },
    { name: "Barton Sofa", img: "/PRODUCTS/living%20room/Barton%20Sofa.jpg" }, 
    { name: "AM Sofa", img: "/PRODUCTS/living%20room/AM%20Sofa.jpg" }, 
    { name: "Beaumont Sofa", img: "/PRODUCTS/living%20room/Beaumont%20Sofa.jpg" },
    { name: "Crescent Sofa", img: "/PRODUCTS/living%20room/Crescent%20Sofa.jpg" },
    { name: "Dina Sofa", img: "/PRODUCTS/living%20room/Dina%20Sofa.jpg" },
    { name: "Ramsey Sofa", img: "/PRODUCTS/living%20room/Ramsey%20Sofa.jpg" },
    { name: "Supercar Sofa", img: "/PRODUCTS/living%20room/Supercar%20Sofa.jpg" },
    { name: "Abey Sofa", img: "/PRODUCTS/living%20room/Abey%20Sofa.jpg" },
    { name: "Winston Sofa", img: "/PRODUCTS/living%20room/Winston%20Sofa.jpg" },
  ],
  "Office Room": [
    { name: "05-01 Executive desk", img: office1.url },
    { name: "05-02 Office chair", img: office2.url },
    { name: "05-03 Bookshelf", img: office3.url },
    { name: "05-04 Filing cabinet", img: office4.url },
    { name: "05-05 Reading lamp", img: office5.url },
    { name: "05-06 Side table", img: office6.url },
  ],
  Bedroom: [
    { name: "03-01 King bed", img: bed1.url },
    { name: "03-02 Nightstand", img: bed2.url },
    { name: "03-03 Wardrobe", img: bed3.url },
    { name: "03-04 Dresser", img: bed4.url },
    { name: "03-05 Bench", img: bed5.url },
    { name: "03-06 Mirror", img: bed6.url },
    { name: "03-07 Lounge chair", img: bed7.url },
    { name: "03-08 Vanity", img: bed8.url },
    { name: "03-09 Bed suite", img: bed9.url },
    { name: "03-10 Headboard", img: bed10.url },
    { name: "03-11 Bedside set", img: bed11.url },
    { name: "03-12 Bedroom ensemble", img: bed12.url },
    { name: "03-13 Panel bed", img: bed13.url },
    { name: "03-14 Quilted headboard bed", img: bed14.url },
    { name: "03-15 Golden accent bed", img: bed15.url },
    { name: "03-16 Onyx leather bed", img: bed16.url },
  ],
};


const navLeft = ["Home", "Products"];
const navRight = ["About us", "Contact us"];

const categories = [
  {
    title: "FMANAR",
    items: ["Living Room", "Dining Room", "Office Room", "Bedroom"],
    open: true,
  },
];



function ProductsPage() {
  const search = Route.useSearch();
  const initialCategory =
    search.category && search.category in productsByCategory
      ? search.category
      : "Living Room";
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map((c) => [c.title, !!c.open])),
  );
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (search.category && search.category in productsByCategory) {
      setActiveCategory(search.category);
      setPage(1);
    }
  }, [search.category]);

  const products = productsByCategory[activeCategory] ?? [];
  const pageSize = 12;
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const pageProducts = products.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav — fixed at top */}
      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          <nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
            {navLeft.map((n) =>
              n === "Products" ? (
                <Link key={n} to="/products" search={{ category: undefined }} className="whitespace-nowrap text-[--gold]">
                  {n}
                </Link>
              ) : (
                <Link key={n} to="/" className="whitespace-nowrap transition-colors hover:text-[--gold]">
                  {n}
                </Link>
              ),
            )}
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

          <div className="ml-8 flex shrink-0 items-center gap-4 text-foreground/80 md:ml-12">
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
        <img src={productsBanner.url} alt="Products banner" className="absolute inset-0 h-full w-full object-cover" />
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
