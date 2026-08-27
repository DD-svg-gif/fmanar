import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
  "Living Room": [
    { name: "Newert Sofa", img: "/PRODUCTS/living%20room/Newert.jpg" },
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
    { name: "Elena Desk", img: "/PRODUCTS/office room/Elena Desk.JPG" },
    { name: "Executive Desk", img: "/PRODUCTS/office room/Executive Desk.JPG" },
    { name: "President Desk", img: "/PRODUCTS/office room/President Desk.jpg" },
    { name: "Raglan Desk", img: "/PRODUCTS/office room/Raglan Desk.JPG" },
    { name: "Stamboul Desk", img: "/PRODUCTS/office room/Stamboul Desk.JPG" },
    { name: "Supercar Desk", img: "/PRODUCTS/office room/Supercar Desk.jpg" },
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
      {/* 📱 移动端产品列表 (仅在 <768px 显示) */}
      <div className="block md:hidden pb-20 pt-16">
        <div className="fixed inset-x-0 top-0 z-40 bg-background/90 backdrop-blur-md px-5 py-3 border-b border-border/30 flex items-center justify-between">
          <Link to="/" className="font-display text-lg tracking-widest">
            FMANAR
          </Link>
          <span className="text-[10px] uppercase tracking-widest text-[--gold]">
            {activeCategory}
          </span>
        </div>

        <div className="sticky top-12 z-30 bg-background/95 backdrop-blur-md py-3 px-4 border-b border-border/20 flex gap-2 overflow-x-auto scrollbar-none">
          {["Living Room", "Dining Room", "Bedroom", "Office Room"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setPage(1);
              }}
              className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-[--gold] text-black font-semibold shadow-sm"
                  : "bg-neutral-900 border border-border/40 text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="p-4 grid grid-cols-2 gap-3">
          {pageProducts.map((p) => (
            <a
              key={p.name}
              href={`https://wa.me/8613679767530?text=${encodeURIComponent(`Hi FMANAR, I want to inquire about the ${p.name} (${activeCategory}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden bg-neutral-900/60 border border-border/30 p-2"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black/40">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-2 text-xs font-medium text-foreground truncate">
                {p.name}
              </p>
              <span className="mt-1 inline-flex text-[9px] uppercase tracking-wider text-[--gold]">
                Tap to Inquire →
              </span>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 py-6 text-xs">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-1.5 rounded border border-border/40 disabled:opacity-30"
          >
            Prev
          </button>
          <span className="text-muted-foreground">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-1.5 rounded border border-border/40 disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div>

      {/* 💻 PC 桌面端 */}
      <div className="hidden md:block">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
            {/* 左侧导航 */}
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

            {/* 中间 LOGO */}
            <Link to="/" className="flex shrink-0 flex-col items-center px-10 text-foreground">
              <span className="text-[10px] tracking-[0.4em] text-muted-foreground">
                MORE PHILOSOPHY
              </span>
              <span className="font-display text-3xl tracking-[0.35em]">
                &nbsp;FMANAR
              </span>
            </Link>

            {/* 右侧导航 */}
            <nav className="hidden flex-1 basis-0 items-center justify-start gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
              {navRight.map((n) => (
                <Link
                  key={n}
                  to={n === "Products" ? "/products" : "/"}
                  className="whitespace-nowrap transition-colors hover:text-[--gold]"
                >
                  {n}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* PC 端内容主体 */}
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
                    {["Living Room", "Dining Room", "Bedroom", "Office Room"].map(
                      (cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategory(cat);
                            setPage(1);
                          }}
                          className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                            activeCategory === cat
                              ? "bg-neutral-800 text-[--gold] font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-neutral-900/50"
                          }`}
                        >
                          {cat}
                        </button>
                      ),
                    )}
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
                  Showing {products.length} pieces
                </span>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {pageProducts.map((p) => (
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

              {/* PC 分页 */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-4 text-sm">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="rounded border border-border/40 px-5 py-2 transition-colors hover:bg-neutral-800 disabled:opacity-30"
                  >
                    Previous
                  </button>
                  <span className="text-muted-foreground">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
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
