import { createFileRoute, Link } from "@tanstack/react-router";

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

function ImportantNoticePage() {
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

      {/* ==================== 页面主体内容区 (Important Notice Content) ==================== */}
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
