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

type Product = {
  name: string;
  img: string;
  tag?: string;
  desc?: string;
};

const productsByCategory: Record<string, Product[]> = {
  "Living Room": [
    { name: "Newert Sofa", img: "/PRODUCTS/living%20room/Newert.jpg", tag: "NEW", desc: "Curved Solid Beech Wood Frame" },
    { name: "Babylon Curved Sofa", img: "/PRODUCTS/living%20room/Babylon%20Curved%20Sofa.jpg", tag: "ICON", desc: "Monolithic Sculptural Form" },
    { name: "Bainton Sofa", img: "/PRODUCTS/living%20room/Bainton%20Sofa.jpg", desc: "Full-Grain Aniline Leather" },
    { name: "Lyman Sofa", img: "/PRODUCTS/living%20room/Lyman%20Sofa.jpg", desc: "Deep Lounge Ergonomics" },
    { name: "Havergate Sofa", img: "/PRODUCTS/living%20room/Havergate%20Sofa.jpg", desc: "Architectural Proportions" },
    { name: "Babylon Sofa", img: "/PRODUCTS/living%20room/Babylon%20Sofa.jpg", desc: "Linear Minimalist Geometry" },
    { name: "Elena Sofa", img: "/PRODUCTS/living%20room/Elena%20Sofa.jpg", desc: "Italian Tailoring Detail" },
    { name: "Krezer Sofa", img: "/PRODUCTS/living%20room/Krezer%20Sofa.jpg", desc: "High-Resilience Dual Layer" },
    { name: "Five Sofa", img: "/PRODUCTS/living%20room/Five%20Sofa.jpg", desc: "Modular Multi-Configuration" },
    { name: "Leather Belt Sofa", img: "/PRODUCTS/living%20room/Leather%20Belt%20Sofa.jpg", tag: "NEW", desc: "Saddle Leather Straps & Brass" },
    { name: "Malawi Sofa", img: "/PRODUCTS/living%20room/Malawi%20Sofa.jpg", desc: "Sculptural Curved Backrest" },
    { name: "West Sofa", img: "/PRODUCTS/living%20room/West%20Sofa.jpg", desc: "Contemporary Italian Profile" },
    { name: "Victorian Sofa", img: "/PRODUCTS/living%20room/Victorian%20Sofa.jpg", desc: "Heritage Master Artisan Stitch" },
    { name: "Smile Sofa", img: "/PRODUCTS/living%20room/Smile%20Sofa.jpg", desc: "Organic Contour Seating" },
    { name: "Rhapsody Sofa", img: "/PRODUCTS/living%20room/Rhapsody%20Sofa.jpg", desc: "Tactile Luxury Bouclé" },
    { name: "Signature Sofa", img: "/PRODUCTS/living%20room/Signature%20Sofa.jpg", desc: "FMANAR Maison Flagship" },
    { name: "Tiger Stripe Sofa", img: "/PRODUCTS/living%20room/Tiger%20Stripe%20Sofa.jpg", desc: "Exclusive Patterned Textile" },
    { name: "Tucson Blues Sofa", img: "/PRODUCTS/living%20room/Tucson%20Blues%20Sofa.jpg", desc: "Nubuck Leather Finish" },
    { name: "Jona Sofa", img: "/PRODUCTS/living%20room/Jona%20Sofa.jpg", desc: "Soft-Touch Cushioning" },
    { name: "Siena Sofa", img: "/PRODUCTS/living%20room/Siena%20Sofa.jpg", desc: "Minimalist Villa Living" },
    { name: "Annual Ring Sofa", img: "/PRODUCTS/living%20room/Annual%20Ring%20Sofa.jpg", desc: "Natural Grain Wooden Accent" },
    { name: "Stone Sofa", img: "/PRODUCTS/living%20room/Stone%20Sofa.jpg", desc: "Low-Profile Lounge" },
    { name: "Tiverton Sofa", img: "/PRODUCTS/living%20room/Tiverton%20Sofa.jpg", desc: "Feather Down Fillings" },
    { name: "Now Barton Sofa", img: "/PRODUCTS/living%20room/Now%20Barton%20Sofa.jpg", desc: "Modern Clean Lines" },
    { name: "Barton Sofa", img: "/PRODUCTS/living%20room/Barton%20Sofa.jpg", desc: "Classical Proportions" },
    { name: "AM Sofa", img: "/PRODUCTS/living%20room/AM%20Sofa.jpg", desc: "Compact Penthouse Lounge" },
    { name: "Beaumont Sofa", img: "/PRODUCTS/living%20room/Beaumont%20Sofa.jpg", desc: "Modular Corner Formation" },
    { name: "Crescent Sofa", img: "/PRODUCTS/living%20room/Crescent%20Sofa.jpg", desc: "Soft Arc Geometry" },
    { name: "Dina Sofa", img: "/PRODUCTS/living%20room/Dina%20Sofa.jpg", desc: "Generous Seating Depth" },
    { name: "Ramsey Sofa", img: "/PRODUCTS/living%20room/Ramsey%20Sofa.jpg", desc: "Solid Beech Foundation" },
    { name: "Supercar Sofa", img: "/PRODUCTS/living%20room/Supercar%20Sofa.jpg", desc: "Dynamic Aerodynamic Form" },
    { name: "Abey Sofa", img: "/PRODUCTS/living%20room/Abey%20Sofa.jpg", desc: "Relaxed Villa Lounging" },
    { name: "Winston Sofa", img: "/PRODUCTS/living%20room/Winston%20Sofa.jpg", desc: "Grand Hospitality Scale" },
  ],
  "Dining Room": [
    { name: "Barton Dining Table", img: "/PRODUCTS/dining%20room/Barton%20Dining%20Table.JPG", tag: "NEW", desc: "Handcrafted Natural Marble & Timber" },
    { name: "Majestic Dining Table", img: "/PRODUCTS/dining%20room/Majestic%20Dining%20Table.JPG", desc: "Sculptural Central Pedestal" },
    { name: "Newent Dining Table", img: "/PRODUCTS/dining%20room/Newent%20Dining%20Table.JPG", desc: "Curved Solid Beech Base" },
    { name: "Raglan Dining Table", img: "/PRODUCTS/dining%20room/Raglan%20Dining%20Table.JPG", desc: "Brushed Champagne Metal Accents" },
    { name: "Ramsey Dining Table", img: "/PRODUCTS/dining%20room/Ramsey%20Dining%20Table.JPG", desc: "Solid Hardwood Joinery" },
    { name: "Stamboul Dining Table", img: "/PRODUCTS/dining%20room/Stamboul%20Dining%20Teble.JPG", desc: "Exotic Wood Veneer Top" },
    { name: "V-Dining Table", img: "/PRODUCTS/dining%20room/V-Dining%20Table.JPG", desc: "Geometric Architectural V-Leg" },
    { name: "Vasmara Dining Table", img: "/PRODUCTS/dining%20room/Vasmara%20Dining%20Table.jpeg", desc: "Polished Quartzite Surface" },
  ],
  Bedroom: [
    { name: "Gesu Bed", img: "/PRODUCTS/bedroom/Gesu%20Bed.JPG", tag: "NEW", desc: "Architectural Curved Headboard" },
    { name: "Havergate Bed", img: "/PRODUCTS/bedroom/Havergate%20Bed.JPG", desc: "Padded Surround Platform" },
    { name: "Leather Belt Bed", img: "/PRODUCTS/bedroom/Leather%20Belt%20Bed.JPG", desc: "Hand-Stitched Saddle Leather" },
    { name: "Lyman Bed", img: "/PRODUCTS/bedroom/Lyman%20Bed.jpg", desc: "Cocooning Winged Comfort" },
    { name: "Malawi Bed", img: "/PRODUCTS/bedroom/Malawi%20Bed.JPG", desc: "Curved Minimalist Silhouette" },
    { name: "Midas Bed", img: "/PRODUCTS/bedroom/Midas%20Bed.JPG", desc: "Brushed Gold Trim Detail" },
    { name: "Newert Bed", img: "/PRODUCTS/bedroom/Newert%20Bed.JPG", desc: "Solid Beech Platform Base" },
    { name: "Newert Extra-Wide Bed", img: "/PRODUCTS/bedroom/Newert%20Extra-Wide%20Bed.jpg", desc: "Integrated Extended Wall Panels" },
    { name: "Now V-Wide Bed", img: "/PRODUCTS/bedroom/Now%20V-Wide%20Bed.JPG", desc: "Geometric Grid Upholstery" },
    { name: "Ramsey Bed", img: "/PRODUCTS/bedroom/Ramsey%20Bed.JPG", desc: "Tailored Linen & Leather" },
    { name: "Rhapsody-Wide Bed", img: "/PRODUCTS/bedroom/Rhapsody-Wide%20Bed.JPG", desc: "Floating Nightstand Integration" },
    { name: "Siena Bed", img: "/PRODUCTS/bedroom/Siena%20Bed.JPG", desc: "Italian Minimalist Frame" },
    { name: "Stamford Bed", img: "/PRODUCTS/bedroom/Stamford%20Bed.JPG", desc: "High-Density Velvet Headboard" },
    { name: "Symphony Bed", img: "/PRODUCTS/bedroom/Symphony%20Bed.JPG", desc: "Harmonious Fluid Curves" },
    { name: "V-Wide Bed", img: "/PRODUCTS/bedroom/V-Wide%20Bed.JPG", desc: "Wall-to-Wall Custom Panel" },
    { name: "Wings Bed", img: "/PRODUCTS/bedroom/Wings%20Bed.JPG", desc: "Sculptural Wingback Form" },
  ],
  "Office Room": [
    { name: "Elena Desk", img: "/PRODUCTS/office room/Elena Desk.JPG", tag: "NEW", desc: "Full-Grain Leather Writing Surface" },
    { name: "Executive Desk", img: "/PRODUCTS/office room/Executive Desk.JPG", desc: "Concealed Cable & Drawer Unit" },
    { name: "President Desk", img: "/PRODUCTS/office room/President Desk.jpg", desc: "Solid Beech Structure & Brass Accents" },
    { name: "Raglan Desk", img: "/PRODUCTS/office room/Raglan Desk.JPG", desc: "Cantilevered Floating Top" },
    { name: "Stamboul Desk", img: "/PRODUCTS/office room/Stamboul Desk.JPG", desc: "Hand-Matched Walnut Veneer" },
    { name: "Supercar Desk", img: "/PRODUCTS/office room/Supercar Desk.jpg", desc: "Aerodynamic Luxury Executive Curve" },
  ],
};

const CATEGORIES = ["Living Room", "Dining Room", "Bedroom", "Office Room"];
const navLeft = ["Home", "Products"];
const navRight = ["About us", "Contact us"];

const categoryStories: Record<string, { kicker: string; title: string; desc: string }> = {
  "Living Room": {
    kicker: "Living & Seating Collection",
    title: "Italian Sofa Architecture",
    desc: "Bespoke sofas and sectionals designed for discerning luxury residences. Engineered with mortise-and-tenon solid beech framing, multi-density ergonomic foam, and hand-stitched full-grain leathers.",
  },
  "Dining Room": {
    kicker: "Dining & Entertaining",
    title: "Monolithic Dining Pieces",
    desc: "Sculptural dining tables crafted from natural marble, exotic wood veneers, and reinforced brass structures. Each piece is proportioned to serve as the architectural centerpiece of the home.",
  },
  Bedroom: {
    kicker: "Rest & Sanctuary",
    title: "Master Bedroom Suites",
    desc: "Extra-wide headboards, wall-panel integrated systems, and bespoke tactile upholstery. Designed to create a cohesive luxury sanctuary with refined Italian detailing.",
  },
  "Office Room": {
    kicker: "Work & Executive",
    title: "Executive Desks & Studies",
    desc: "Executive desks combining saddle leather writing pads, solid beech wood curves, and precision-fitted storage tailored for prestigious private offices and boardrooms.",
  },
};

function ProductsPage() {
  const search = Route.useSearch();
  const initialCategory =
    search.category && search.category in productsByCategory
      ? search.category
      : "Living Room";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [mobileVisibleCount, setMobileVisibleCount] = useState(8);
  const [pcPage, setPcPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (search.category && search.category in productsByCategory) {
      setActiveCategory(search.category);
      setMobileVisibleCount(8);
      setPcPage(1);
    }
  }, [search.category]);

  const currentProducts = productsByCategory[activeCategory] ?? [];
  const heroProduct = currentProducts[0] ?? {
    name: "Bespoke Collection",
    img: "/PRODUCTS/living%20room/Newert.jpg",
  };

  const story = categoryStories[activeCategory] ?? categoryStories["Living Room"];
  const mobileDisplayProducts = currentProducts.slice(0, mobileVisibleCount);

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
          📱 1. 移动端专属布局 (B&B Italia 风格)
          ========================================================================= */}
      <div className="block md:hidden bg-white text-black min-h-screen">
        <header className="sticky top-0 z-50 flex items-center justify-between bg-black px-5 py-3.5">
          <Link to="/" className="flex flex-col">
            <span className="text-[7px] tracking-[0.35em] text-neutral-400">MORE PHILOSOPHY</span>
            <span className="font-display text-xl font-bold tracking-[0.25em] text-white">FMANAR</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="text-white/80 hover:text-white"
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
              <Link to="/products" onClick={() => setMenuOpen(false)} className="text-[--gold]">
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

        <section className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
          <img
            src={heroProduct.img}
            alt={activeCategory}
            className="h-full w-full object-cover brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <h1 className="absolute bottom-5 left-5 font-display text-3xl font-light text-white tracking-wide">
            {activeCategory}
          </h1>
        </section>

        <section className="px-5 py-7 border-b border-neutral-200">
          <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            {story.kicker}
          </p>
          <h2 className="mt-2 font-display text-2xl font-normal leading-snug text-neutral-900">
            {story.title}
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-neutral-600">
            {story.desc}
          </p>
        </section>

        <div className="sticky top-[53px] z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
          <div className="flex gap-2 overflow-x-auto px-5 py-3 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setMobileVisibleCount(8);
                }}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-black text-white font-medium"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-neutral-100 px-5 py-2 text-[10px] uppercase tracking-widest text-neutral-400">
            <span>Showing {currentProducts.length} Pieces</span>
            <span>Hand-Crafted in Foshan</span>
          </div>
        </div>

        <section className="p-4">
          <div className="grid grid-cols-2 gap-x-3 gap-y-8">
            {mobileDisplayProducts.map((p) => (
              <a
                key={p.name}
                href={`https://wa.me/8618926150696?text=${encodeURIComponent(`Hi FMANAR, I want to inquire about the ${p.name} (${activeCategory}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#f6f6f6] border border-neutral-200/60 p-2.5 flex items-center justify-center">
                  {p.tag && (
                    <span className="absolute left-2 top-2 rounded bg-black px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-white">
                      {p.tag}
                    </span>
                  )}
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-2.5 space-y-0.5">
                  <h3 className="text-xs font-semibold text-neutral-900 truncate">
                    {p.name}
                  </h3>
                  <p className="text-[10px] text-neutral-500 truncate">
                    {p.desc ?? "Solid Beech Wood Frame"}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400">
                      {activeCategory}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#93302c] font-medium">
                      Inquire →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {mobileVisibleCount < currentProducts.length && (
            <div className="mt-10 mb-6 text-center">
              <button
                onClick={() => setMobileVisibleCount((prev) => prev + 8)}
                className="w-full border border-black py-3 text-xs uppercase tracking-[0.2em] font-medium text-black transition-colors active:bg-black active:text-white"
              >
                Show More ({currentProducts.length - mobileVisibleCount} Remaining)
              </button>
            </div>
          )}
        </section>

        <section className="bg-[#1c1e20] px-6 py-10 text-center text-white">
          <h3 className="font-display text-2xl">Bespoke Architectural Project?</h3>
          <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
            Direct factory manufacturing, bespoke CAD sizing, and global ocean container delivery.
          </p>
          <div className="mt-5">
            <a
              href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20would%20like%20to%20consult%20about%20bespoke%20furniture%20manufacturing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-[#93302c] py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-white transition-opacity hover:opacity-90 shadow-md"
            >
              Consult Master Artisan
            </a>
          </div>
        </section>

     <footer className="bg-[#24272a] px-6 py-12 text-white">
  <div className="text-center space-y-6">
    <div className="flex flex-col items-center">
      <span className="text-[8px] tracking-[0.4em] text-neutral-400">MORE PHILOSOPHY</span>
      <span className="font-display text-3xl font-bold tracking-[0.3em] mt-1">FMANAR</span>
    </div>

    <nav className="flex flex-col gap-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/products" search={{ category: "Living Room" }}>Living</Link>
      <Link to="/products" search={{ category: "Dining Room" }}>Dining</Link>
      <Link to="/products" search={{ category: "Bedroom" }}>Bedroom</Link>
      <Link to="/contact">Contacts</Link>
    </nav>

    <div className="pt-2 flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-neutral-300">
      <span className="text-[10px] tracking-[0.25em] text-[--gold] font-semibold">CUSTOMER SERVICE</span>
      <Link to="/delivery" className="hover:text-white transition-colors">Delivery</Link>
      <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
      <Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link>
      <Link to="/return-and-refunds" className="hover:text-white transition-colors">Return and Refunds</Link>
      <Link to="/important-notice" className="hover:text-white transition-colors">Important Notice</Link>
    </div>

    <div className="border-t border-neutral-700 pt-6 space-y-5">
      <div className="flex items-center justify-center gap-6 text-white/80">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/foshanfmanarfurniture/?hl=en-gb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-colors hover:text-[--gold]"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61592662757344&locale=en_GB"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="transition-colors hover:text-[--gold]"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@fmanarhome"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="transition-colors hover:text-[--gold]"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.29 1.77-.25.99-.04 2.11.58 2.9.61.81 1.62 1.3 2.63 1.28 1.16-.01 2.27-.67 2.78-1.7.24-.48.36-1.02.35-1.56.02-4.95.01-9.91.01-14.86z"/>
          </svg>
        </a>

        {/* WhatsApp (新图标样式) */}
        <a
          href="https://wa.me/8618926150696"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="transition-colors hover:text-[--gold]"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.987-1.408C8.423 21.494 10.15 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8c-1.533 0-2.968-.431-4.19-1.178l-.3-.18-3.09.872.884-2.993-.195-.316C4.407 15.01 4 13.551 4 12c0-4.418 3.582-8 8-8zm4.18 11.26c-.23-.11-1.36-.67-1.57-.75-.21-.08-.36-.11-.51.11-.15.23-.59.75-.72.9-.13.15-.26.17-.49.06-.23-.11-.97-.36-1.85-1.14-.68-.61-1.14-1.36-1.28-1.59-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.7-1.68-.19-.45-.37-.39-.51-.4h-.44c-.15 0-.39.06-.6.28-.21.23-.79.77-.79 1.88 0 1.11.81 2.18.92 2.33.11.15 1.59 2.43 3.86 3.41.54.23.96.37 1.29.47.54.17 1.04.15 1.43.09.44-.07 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.05-.1-.2-.16-.43-.27z"
            />
          </svg>
        </a>
      </div>

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
          💻 2. PC 桌面端专属布局 (已添加回 4 列富文本页脚)
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
                    href={`https://wa.me/8618926150696?text=${encodeURIComponent(`Hi FMANAR, I want to inquire about the ${p.name} (${activeCategory}).`)}`}
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
