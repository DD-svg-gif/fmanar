import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Products — FMANAR Luxury Italian Furniture" },
      {
        name: "description",
        content: "Browse the FMANAR collection of luxury Italian furniture.",
      },
      { property: "og:title", content: "Products — FMANAR" },
      {
        property: "og:description",
        content: "The FMANAR furniture collection. Hand-finished Italian craftsmanship.",
      },
    ],
  }),
  component: ProductsPage,
});

type Product = {
  name: string;
  img: string;
};

const productsByCategory: Record<string, Product[]> = {
  "Living Room": [
    { name: "Newert Sofa", img: "/PRODUCTS/living%20room/Newert.jpg" },
    { name: "Babylon Curved Sofa", img: "/PRODUCTS/living%20room/Babylon%20Curved%20Sofa.jpg" },
    { name: "Bainton Sofa", img: "/PRODUCTS/living%20room/Bainton%20Sofa.jpg" },
    { name: "Lyman Sofa", img: "/PRODUCTS/living%20room/Lyman%20Sofa.jpg" },
    { name: "Havergate Sofa", img: "/PRODUCTS/living%20room/Havergate%20Sofa.jpg" },
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
  "Dining Room": [
    { name: "Barton Dining Table", img: "/PRODUCTS/dining%20room/Barton%20Dining%20Table.JPG" },
    { name: "Majestic Dining Table", img: "/PRODUCTS/dining%20room/Majestic%20Dining%20Table.JPG" },
    { name: "Newent Dining Table", img: "/PRODUCTS/dining%20room/Newent%20Dining%20Table.JPG" },
    { name: "Raglan Dining Table", img: "/PRODUCTS/dining%20room/Raglan%20Dining%20Table.JPG" },
    { name: "Ramsey Dining Table", img: "/PRODUCTS/dining%20room/Ramsey%20Dining%20Table.JPG" },
    { name: "Stamboul Dining Table", img: "/PRODUCTS/dining%20room/Stamboul%20Dining%20Teble.JPG" },
    { name: "V-Dining Table", img: "/PRODUCTS/dining%20room/V-Dining%20Table.JPG" },
    { name: "Vasmara Dining Table", img: "/PRODUCTS/dining%20room/Vasmara%20Dining%20Table.jpeg" },
  ],
  Bedroom: [
    { name: "Gesu Bed", img: "/PRODUCTS/bedroom/Gesu%20Bed.JPG" },
    { name: "Havergate Bed", img: "/PRODUCTS/bedroom/Havergate%20Bed.JPG" },
    { name: "Leather Belt Bed", img: "/PRODUCTS/bedroom/Leather%20Belt%20Bed.JPG" },
    { name: "Lyman Bed", img: "/PRODUCTS/bedroom/Lyman%20Bed.jpg" },
    { name: "Malawi Bed", img: "/PRODUCTS/bedroom/Malawi%20Bed.JPG" },
    { name: "Midas Bed", img: "/PRODUCTS/bedroom/Midas%20Bed.JPG" },
    { name: "Newert Bed", img: "/PRODUCTS/bedroom/Newert%20Bed.JPG" },
    { name: "Newert Extra-Wide Bed", img: "/PRODUCTS/bedroom/Newert%20Extra-Wide%20Bed.jpg" },
    { name: "Now V-Wide Bed", img: "/PRODUCTS/bedroom/Now%20V-Wide%20Bed.JPG" },
    { name: "Ramsey Bed", img: "/PRODUCTS/bedroom/Ramsey%20Bed.JPG" },
    { name: "Rhapsody-Wide Bed", img: "/PRODUCTS/bedroom/Rhapsody-Wide%20Bed.JPG" },
    { name: "Siena Bed", img: "/PRODUCTS/bedroom/Siena%20Bed.JPG" },
    { name: "Stamford Bed", img: "/PRODUCTS/bedroom/Stamford%20Bed.JPG" },
    { name: "Symphony Bed", img: "/PRODUCTS/bedroom/Symphony%20Bed.JPG" },
    { name: "V-Wide Bed", img: "/PRODUCTS/bedroom/V-Wide%20Bed.JPG" },
    { name: "Wings Bed", img: "/PRODUCTS/bedroom/Wings%20Bed.JPG" },
  ],
  "Office Room": [
    { name: "Elena Desk", img: "/PRODUCTS/office room/Elena Desk.JPG" },
    { name: "Executive Desk", img: "/PRODUCTS/office room/Executive Desk.JPG" },
    { name: "President Desk", img: "/PRODUCTS/office room/President Desk.jpg" },
    { name: "Raglan Desk", img: "/PRODUCTS/office room/Raglan Desk.JPG" },
    { name: "Stamboul Desk", img: "/PRODUCTS/office room/Stamboul Desk.JPG" },
    { name: "Supercar Desk", img: "/PRODUCTS/office room/Supercar Desk.jpg" },
  ],
};

const CATEGORIES = ["Living Room", "Dining Room", "Bedroom", "Office Room"];
const navLeft = ["Home", "Products"];
const navRight = ["About us", "Contact us"];

function ProductsPage() {
  const search = Route.useSearch();
  const initialCategory =
    search.category && search.category in productsByCategory
      ? search.category
      : "Living Room";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [pcPage, setPcPage] = useState(1);

  useEffect(() => {
    if (search.category && search.category in productsByCategory) {
      setActiveCategory(search.category);
      setPcPage(1);
    }
  }, [search.category]);

  const currentProducts = productsByCategory[activeCategory] ?? [];
  const heroProduct = currentProducts[0] ?? {
    name: "Bespoke Collection",
    img: "/PRODUCTS/living%20room/Newert.jpg",
  };

  // PC 端分页数据
  const pcPageSize = 12;
  const totalPcPages = Math.max(1, Math.ceil(currentProducts.length / pcPageSize));
  const pcDisplayProducts = currentProducts.slice(
    (pcPage - 1) * pcPageSize,
    pcPage * pcPageSize
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* =========================================================================
          📱 1. 移动端专属布局 (仅在屏幕宽度 < 768px 显示，B&B Italia 沉浸式风格)
          ========================================================================= */}
      <div className="block md:hidden pb-32">
        {/* 顶部极简透明导航 */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border/30 bg-background/85 px-5 py-3.5 backdrop-blur-md">
          <Link to="/" className="flex flex-col">
            <span className="text-[7px] tracking-[0.35em] text-muted-foreground">MORE PHILOSOPHY</span>
            <span className="font-display text-xl tracking-[0.25em] text-foreground">FMANAR</span>
          </Link>
          <a
            href="https://wa.me/8613679767530"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[--gold]/40 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[--gold]"
          >
            Inquire
          </a>
        </header>

        {/* 沉浸式通栏 Hero 大图 (画报级主视觉) */}
        <section className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
          <img
            src={heroProduct.img}
            alt={heroProduct.name}
            className="h-full w-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-5 right-5 space-y-1.5">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[--gold]">
              {activeCategory} — 2026 Collection
            </p>
            <h2 className="font-display text-3xl leading-tight text-white">
              {heroProduct.name}
            </h2>
          </div>
        </section>

        {/* 吸顶横向分类滑条 */}
        <div className="sticky top-[53px] z-30 border-b border-border/30 bg-background/95 py-3 backdrop-blur-md">
          <div className="flex gap-2.5 overflow-x-auto px-5 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setPcPage(1);
                }}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[--gold] font-semibold text-black shadow-md"
                    : "bg-neutral-900 border border-border/30 text-muted-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 横向卡点画册展示区 (Snap Carousel) */}
        <section className="pt-8">
          <div className="mb-4 flex items-baseline justify-between px-5">
            <h3 className="font-display text-xl tracking-wider">Masterpieces</h3>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[--gold]">
              Swipe →
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory scrollbar-none">
            {currentProducts.slice(0, 8).map((p) => (
              <div
                key={p.name}
                className="w-[78vw] shrink-0 snap-center overflow-hidden rounded-xl border border-border/30 bg-neutral-950/60 p-3"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-black/40">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-base tracking-wide text-foreground truncate">
                      {p.name}
                    </h4>
                    <span className="text-[8px] uppercase tracking-widest text-[--gold]">
                      Italian Craft
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/8613679767530?text=${encodeURIComponent(`Hi FMANAR, I want to inquire about the ${p.name} (${activeCategory}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[--gold]"
                  >
                    Inquire via WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 杂志级纵向叙事单品列表 */}
        <section className="mt-8 px-5 space-y-6">
          <div className="border-t border-border/30 pt-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[--gold]">Bespoke Craft</p>
            <h3 className="font-display text-2xl">Complete Catalog</h3>
          </div>

          {currentProducts.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-border/30 bg-neutral-950/40 p-4"
            >
              <div className="aspect-[16/11] w-full overflow-hidden rounded-xl bg-black/30">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-[--gold] uppercase tracking-wider">Solid Beech Wood & Leather</span>
                  <span className="text-muted-foreground">Foshan Atelier</span>
                </div>
                <h4 className="font-display text-2xl">{p.name}</h4>
                <a
                  href={`https://wa.me/8613679767530?text=${encodeURIComponent(`Hi FMANAR, I want to inquire about the ${p.name} (${activeCategory}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block w-full rounded-lg bg-neutral-900 border border-border/40 py-2.5 text-center text-[11px] uppercase tracking-[0.2em] text-foreground transition-all active:bg-[--gold] active:text-black"
                >
                  Request Specifications
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* 底部固定交互条 */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/40 bg-background/90 p-3 pb-safe backdrop-blur-lg">
          <div className="flex gap-2">
            <Link
              to="/about"
              className="flex-1 rounded-full border border-border/40 py-2.5 text-center text-xs uppercase tracking-[0.18em] text-foreground"
            >
              About Maison
            </Link>
            <a
              href="https://wa.me/8613679767530"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-[--gold] py-2.5 text-center text-xs uppercase tracking-[0.18em] font-semibold text-black shadow-lg shadow-[--gold]/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          💻 2. PC 桌面端专属布局 (仅在屏幕宽度 >= 768px 显示，保持经典多列排版)
          ========================================================================= */}
      <div className="hidden md:block">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
            <nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
              {navLeft.map((n) => (
                <Link
                  key={n}
                  to={n === "Products" ? "/products" : "/"}
                  className={`whitespace-nowrap transition-colors hover:text-[--gold] ${n === "Products" ? "text-[--gold]" : ""}`}
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

        <main className="mx-auto max-w-[1600px] px-8 pt-32 pb-24">
          <div className="flex gap-12">
            {/* 左侧分类导航 */}
            <aside className="w-64 shrink-0">
              <div className="sticky top-32 space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[--gold] mb-4 font-semibold">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setPcPage(1);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          activeCategory === cat
                            ? "bg-neutral-800 text-[--gold] font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-neutral-900/50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* 右侧商品网格 */}
            <div className="flex-1">
              <div className="mb-8 flex items-center justify-between border-b border-border/30 pb-4">
                <h1 className="text-2xl font-light tracking-wider font-display">
                  {activeCategory}
                </h1>
                <span className="text-xs text-muted-foreground">
                  Showing {currentProducts.length} pieces
                </span>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {pcDisplayProducts.map((p) => (
                  <a
                    key={p.name}
                    href={`https://wa.me/8613679767530?text=${encodeURIComponent(`Hi FMANAR, I want to inquire about the ${p.name} (${activeCategory}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-lg border border-border/30 bg-neutral-950/40 p-3 transition-all hover:border-[--gold]/50"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded bg-black/40">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground truncate">
                        {p.name}
                      </p>
                      <span className="text-xs text-[--gold] opacity-0 transition-opacity group-hover:opacity-100">
                        Inquire →
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {totalPcPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-4 text-sm">
                  <button
                    onClick={() => setPcPage((p) => Math.max(1, p - 1))}
                    disabled={pcPage === 1}
                    className="rounded border border-border/40 px-5 py-2 transition-colors hover:bg-neutral-800 disabled:opacity-30"
                  >
                    Previous
                  </button>
                  <span className="text-muted-foreground">
                    Page {pcPage} of {totalPcPages}
                  </span>
                  <button
                    onClick={() => setPcPage((p) => Math.min(totalPcPages, p + 1))}
                    disabled={pcPage === totalPcPages}
                    className="rounded border border-border/40 px-5 py-2 transition-colors hover:bg-neutral-800 disabled:opacity-30"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
