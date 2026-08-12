import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [
      { title: "Shipping Policy — FMANAR Luxury Italian Furniture" },
      {
        name: "description",
        content: "Shipping and logistics policies for FMANAR luxury Italian furniture.",
      },
    ],
  }),
  component: ShippingPolicyPage,
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

// 页脚菜单路由字典映射（与全站其他页面保持完全一致）
const customerServiceRoutes: Record<string, RouteTarget> = {
  // Collections 分类跳转
  Living: { to: "/products", search: { category: "Living Room" } },
  Bedroom: { to: "/products", search: { category: "Bedroom" } },
  Dining: { to: "/products", search: { category: "Dining Room" } },
  Office: { to: "/products", search: { category: "Office Room" } },
  // Customer Service 路由
  Delivery: { to: "/delivery" },
  "Privacy Policy": { to: "/privacy-policy" },
  "Shipping Policy": { to: "/shipping-policy" },
  "Return and Refunds": { to: "/return-and-refunds" },
  "Important Notice": { to: "/important-notice" },
  // Contact Us
  Feedback: { to: "/contact" },
};

function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* ==================== 顶部固定导航栏 (Header) ==================== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          {/* 左侧导航菜单 */}
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

          {/* 中间品牌 Logo */}
          <Link to="/" className="flex shrink-0 flex-col items-center px-10 text-foreground">
            <span className="text-[10px] tracking-[0.4em] text-muted-foreground">
              MORE PHILOSOPHY
            </span>
            <span className="font-display text-3xl tracking-[0.35em]">
              &nbsp;FMANAR
            </span>
          </Link>

          {/* 右侧导航菜单 */}
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

          {/* 右侧搜索与语言切换 */}
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

      {/* ==================== 页面主体内容区 (Shipping Policy Content) ==================== */}
      <main className="mx-auto w-full max-w-4xl px-8 pt-36 pb-20 flex-1">
        <h1 className="font-display text-4xl md:text-5xl text-foreground text-center mb-12 tracking-wide">
          Shipping Policy
        </h1>
        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground tracking-wider uppercase border-b border-border/30 pb-2">
              Global Logistics & White-Glove Transport
            </h2>
            <p>
              FMANAR crafts bespoke luxury furniture for prestigious residential and commercial clients worldwide. In partnership with elite white-glove logistics specialists, we meticulously manage every aspect of transit with uncompromised precision.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground tracking-wider uppercase border-b border-border/30 pb-2">
              Shipping & White-Glove Services
            </h2>
            <p>
             All orders dispatched via our partnered carriers include standard door-to-door (threshold) delivery by default. Standard delivery does not include room-of-choice placement, uncrating, in-home assembly, installation, or removal of packaging materials.
<br />
  <br />
              If your delivery requires room-of-choice placement, stair carry, product assembly, or specialized handling (collectively referred to as "White-Glove Services"), please contact our Customer Care team at least 3 business days in advance. We will coordinate with our logistics partners to arrange tailored solutions for you.
<br />
  <br />
              Important Terms for White-Glove Services:
              <br />
  <br />
             •&nbsp;Optional Add-On: White-Glove Service is an optional, paid add-on service.
<br />
  <br />
             •&nbsp;Potential Additional Fees: Supplemental charges may apply under certain circumstances, including but not limited to:
<br />
  <br />
             &nbsp; • &nbsp; Delivery to remote or difficult-to-access regions
<br />
  <br />
             &nbsp; • &nbsp; Stair-carry services
              <br />
  <br />
             &nbsp; • &nbsp; Specialized handling of oversized or heavy items
              <br />
  <br />
             &nbsp; • &nbsp; Deliveries with restricted building access or specific entry protocols
              <br />
  <br />
             •&nbsp;On-Site Presence Required: You or a designated authorized representative (aged 18 or older) must be present during the entire delivery and sign off upon completion of the White-Glove Service.
              <br />
  <br />
             •&nbsp;Service Scope & Access Conditions: White-Glove Service includes placement in your room of choice, assembly (where applicable), and complete removal of packaging materials. Additional fees may be incurred based on delivery conditions, such as multiple flights of stairs, restricted pathways, lack of elevator access, narrow stairwells, or oversized items.
              <br />
  <br />
             •&nbsp;Safety & Right of Refusal: To protect our personnel and your property, we reserve the right to decline or suspend White-Glove Services if delivery conditions are deemed unsafe (e.g., icy steps, blocked passageways).
              <br />
  <br />
             •&nbsp;Health & Hygiene Policy: For health and safety reasons, our White-Glove Service will not handle, move, or haul away any existing items that are stained, soiled, or contaminated.
              
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground tracking-wider uppercase border-b border-border/30 pb-2">
              Freight Insurance
            </h2>
            <p>
              Every single order is fully insured against theft, loss, or damage during international transit up until the moment it is signed for and inspected at your designated location.
            </p>
          </section>
        </div>
      </main>

      {/* ==================== 页脚区块 (Footer) ==================== */}
      <footer className="border-t border-border/40 px-8 py-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-4">
          {/* 品牌地址与营业时间 */}
          <div>
            <p className="font-display text-2xl tracking-[0.3em]">FMANAR</p>
            <div className="mt-4 max-w-xs space-y-1 text-xs leading-relaxed text-muted-foreground">
              <p>
                Address: No. 9 Zhenxing Road, Mailang Village, Longjiang Town, Shunde District, Foshan City, Guangdong Province, China
              </p>
              <p>Business hours: 09:00 – 18:00 (UTC+8)</p>
            </div>
          </div>

          {/* 页脚分类链接与路由映射 */}
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

        {/* 版权信息 */}
        <p className="mx-auto mt-12 max-w-[1600px] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          © 2026 Fmanar Maison — All rights reserved
        </p>
      </footer>
    </div>
  );
}
