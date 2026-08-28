import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/important-notice")({
  head: () => ({
    meta: [
      { title: "Important Notice — FMANAR Luxury Italian Furniture" },
      {
        name: "description",
        content: "Important notice and legal terms for FMANAR luxury Italian furniture.",
      },
    ],
  }),
  component: ImportantNoticePage,
});

// 顶部 Header 导航项配置
const navLeft = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
];
const navRight = [
  { label: "About us", to: "/about" },
  { label: "Contact us", to: "/contact" },
];

// 声明页脚路由目标对象类型
type RouteTarget = {
  to: string;
  search?: Record<string, string>;
};

// 页脚菜单路由字典映射
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

function ImportantNoticePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* =========================================================================
          📱 1. 移动端专属布局 (与政策页保持一致的极简阅读流)
          ========================================================================= */}
      <div className="block md:hidden bg-white text-black min-h-screen flex flex-col justify-between">
        {/* 顶部黑色 Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between bg-black px-5 py-3.5 text-white">
          <Link to="/" className="flex flex-col">
            <span className="text-[7px] tracking-[0.35em] text-neutral-400 font-medium">MORE PHILOSOPHY</span>
            <span className="font-display text-xl tracking-[0.3em] text-white">F M A N A R</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/8618926150696?text=Hi%20FMANAR%2C%20I%20have%20an%20inquiry%20regarding%20brand%20authenticity%20and%20notices."
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

        {/* 移动端抽屉折叠导航 */}
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
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[--gold]">
                Contact
              </Link>
            </nav>
          </div>
        )}

        {/* 移动端正文内容 */}
        <main className="px-5 py-8 flex-1 space-y-8">
          <div className="border-b border-neutral-200 pb-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold">
              Security & Legal Notice
            </p>
            <h1 className="font-display text-3xl font-normal text-neutral-900 mt-1">
              Important Notice
            </h1>
          </div>

          <div className="space-y-8 text-xs leading-relaxed text-neutral-600">
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1.5">
                Official Security & Anti-Fraud Statement
              </h2>
              <p>Dear Valued Fmanar Home Clients,</p>
              <p>
                We extend our heartfelt gratitude for your continued trust and loyalty toward Fmanar Home.
              </p>
              <p>
                It has come to our attention that fraudulent websites and fake social media accounts are impersonating Fmanar Home in an attempt to unlawfully obtain clients' personal and sensitive data.
              </p>

              <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 space-y-2">
                <p className="font-semibold text-neutral-900 uppercase text-[10px] tracking-wider">
                  We hereby officially clarify our authentic channels:
                </p>
                <ul className="space-y-1.5 text-neutral-700 list-disc pl-4">
                  <li>
                    <strong className="text-neutral-900">Official Website:</strong>{" "}
                    <span className="text-[#93302c] font-medium">fmanar.com</span>
                  </li>
                  <li>
                    <strong className="text-neutral-900">Official Email Addresses:</strong>{" "}
                    fmnhome2015@gmail.com / fmanarhome@outlook.com
                  </li>
                </ul>
              </div>

              <p>
                Any other platforms, websites, or communications claiming to be the "Official Fmanar Home" are unauthorized and fraudulent. We strongly advise all clients to exercise extreme caution when interacting with unverified sources to prevent privacy breaches and financial losses.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1.5">
                Strict Brand Protection & Legal Notice
              </h2>
              <p>
                To safeguard the integrity of the Fmanar Home brand and protect our consumers' rights:
              </p>
              <ul className="space-y-2 list-disc pl-4">
                <li>
                  <strong className="text-neutral-900">Cease & Desist Warning:</strong> We strictly warn all infringers to cease all unauthorized activities immediately.
                </li>
                <li>
                  <strong className="text-neutral-900">Legal Action:</strong> Fmanar Home reserves all legal rights to pursue civil and criminal liability against any individual or entity infringing upon our rights.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1.5">
                Security Advice & Liability Disclaimer
              </h2>
              <ul className="space-y-2 list-disc pl-4">
                <li>
                  <strong className="text-neutral-900">Verify Before Entering Data:</strong> Please double-check the authenticity of any URL before entering sensitive financial details, account numbers, or passwords.
                </li>
                <li>
                  <strong className="text-neutral-900">Disclaimer:</strong> Fmanar Home is not liable for financial losses caused by third-party fraudulent websites and bears no legal obligation to compensate or assist in claims. However, we welcome any information regarding fake platforms and are committed to maintaining open communication on these matters.
                </li>
              </ul>
            </section>

            <section className="border-t border-neutral-200 pt-4 space-y-2 text-neutral-500">
              <p>
                The Fmanar Home team remains dedicated to delivering exceptional experiences to our global clients while safeguarding your interests. If you encounter any suspicious activity or fake websites, please report them to our customer service team immediately.
              </p>
              <p className="pt-2 font-medium text-neutral-800">
                Sincerely,<br />
                The Fmanar Home Team
              </p>
            </section>
          </div>
        </main>

        {/* 移动端统一专属页脚 */}
        <footer className="bg-[#24272a] px-6 py-12 text-white">
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center">
              <span className="text-[8px] tracking-[0.4em] text-neutral-400">MORE PHILOSOPHY</span>
              <span className="font-display text-3xl font-bold tracking-[0.3em] mt-1">FMANAR</span>
            </div>

            <nav className="flex flex-col gap-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
              <Link to="/">Home</Link>
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
              <Link to="/important-notice" className="text-[--gold] font-medium transition-colors">Important Notice</Link>
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

                {/* WhatsApp (线框气泡新图标) */}
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
          💻 2. PC 桌面端专属布局 (保持你原有的完整大屏设计一字不改)
          ========================================================================= */}
      <div className="hidden md:flex min-h-screen flex-col justify-between">
        {/* 顶部固定导航 */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
            <nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
              {navLeft.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="whitespace-nowrap transition-colors hover:text-[--gold]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link to="/" className="flex shrink-0 flex-col items-center px-10 text-foreground">
              <span className="text-[10px] tracking-[0.4em] text-muted-foreground">
                MORE PHILOSOPHY
              </span>
              <span className="font-display text-3xl tracking-[0.35em]">
                &nbsp;FMANAR
              </span>
            </Link>

            <nav className="hidden flex-1 basis-0 items-center justify-start gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
              {navRight.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="whitespace-nowrap transition-colors hover:text-[--gold]"
                >
                  {item.label}
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

        {/* 页面主体内容区 */}
        <main className="mx-auto w-full max-w-4xl px-8 pt-36 pb-20 flex-1">
          <h1 className="font-display text-4xl md:text-5xl text-foreground text-center mb-12 tracking-wide">
            Important Notice
          </h1>
          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <p>
                Official Security & Anti-Fraud Statement
                <br />
                <br />
                Dear Valued Fmanar Home Clients,
                <br />
                <br />
                We extend our heartfelt gratitude for your continued trust and loyalty toward Fmanar Home.
                <br />
                <br />
                It has come to our attention that fraudulent websites and fake social media accounts are impersonating Fmanar Home in an attempt to unlawfully obtain clients' personal and sensitive data.
                <br />
                <br />
                We hereby officially clarify that:
                <br />
                <br />
                •&nbsp;Official Website: fmanar.com
                <br />
                <br />
                •&nbsp;Official Email Addresses: fmnhome2015@gmail.com / fmanarhome@outlook.com
                <br />
                <br />
                Any other platforms, websites, or communications claiming to be the "Official Fmanar Home" are unauthorized and fraudulent. We strongly advise all clients to exercise extreme caution when interacting with unverified sources to prevent privacy breaches and financial losses.
                <br />
                <br />
                Strict Brand Protection & Legal Notice
                <br />
                <br />
                To safeguard the integrity of the Fmanar Home brand and protect our consumers' rights:
                <br />
                <br />
                •&nbsp;Cease & Desist Warning: We strictly warn all infringers to cease all unauthorized activities immediately.
                <br />
                <br />
                •&nbsp;Legal Action: Fmanar Home reserves all legal rights to pursue civil and criminal liability against any individual or entity infringing upon our rights.
                <br />
                <br />
                Security Advice & Liability Disclaimer
                <br />
                <br />
                •&nbsp;Verify Before Entering Data: Please double-check the authenticity of any URL before entering sensitive financial details, account numbers, or passwords.
                <br />
                <br />
                •&nbsp;Disclaimer: Fmanar Home is not liable for financial losses caused by third-party fraudulent websites and bears no legal obligation to compensate or assist in claims. However, we welcome any information regarding fake platforms and are committed to maintaining open communication on these matters.
                <br />
                <br />
                The Fmanar Home team remains dedicated to delivering exceptional experiences to our global clients while safeguarding your interests. If you encounter any suspicious activity or fake websites, please report them to our customer service team immediately.
                <br />
                <br />
                Thank you for your vigilance and ongoing support.
                <br />
                <br />
                Sincerely,
                <br />
                <br />
                The Fmanar Home Team
              </p>
            </section>
          </div>
        </main>

        {/* PC 端 4 列页脚 */}
        <footer className="border-t border-border/40 px-8 py-16">
          <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-4">
            <div>
              <p className="font-display text-2xl tracking-[0.3em]">FMANAR</p>
              <div className="mt-4 max-w-xs space-y-1 text-xs leading-relaxed text-muted-foreground">
                <p>
                  Address: No. 9 Zhenxing Road, Mailang Village, Longjiang Town, Shunde District, Foshan City, Guangdong Province, China
                </p>
                <p>Business hours: 09:00 – 18:00 (UTC+8)</p>
              </div>
            </div>

            {[
              { h: "Collections", l: ["Living", "Bedroom", "Dining", "Office"] },
              {
                h: "Customer Service",
                l: [
                  "Delivery",
                  "Privacy Policy",
                  "Shipping Policy",
                  "Return and Refunds",
                  "Important Notice",
                ],
              },
              { h: "Contact Us", l: ["Feedback"] },
            ].map((col) => (
              <div key={col.h}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[--gold]">
                  {col.h}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {col.l.map((x) => {
                    const route = customerServiceRoutes[x];
                    return (
                      <li key={x}>
                        {route ? (
                          <Link
                            to={route.to}
                            search={route.search}
                            className="transition-colors hover:text-foreground"
                          >
                            {x}
                          </Link>
                        ) : (
                          <a href="#" className="hover:text-foreground">
                            {x}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-[1600px] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            © 2026 Fmanar Maison — All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
}
