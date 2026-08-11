

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

// 提示：若项目未配置 Vite/Webpack 资源索引，请按需清理未使用的 JSON/图片导入以保持代码整洁


// ----------------------------------------------------------------------
// 1. TanStack Router 路由与 Search 参数校验定义
// ----------------------------------------------------------------------
export const Route = createFileRoute("/products")({
  // 校验并解析 URL 中的 query 参数（如 /products?category=Living Room）
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  // 页面 HEAD 元数据配置（用于 SEO 及社交分享预览）
  head: () => ({
    meta: [
      { title: "Products — FMANAR Luxury Italian Furniture" },
      {
        name: "description",
        content:
          "Browse the FMANAR collection of luxury Italian furniture — living, dining, bedroom and office pieces hand-finished in Italy.",
      },
      { property: "og:title", content: "Products — FMANAR" },
      {
        property: "og:description",
        content:
          "The FMANAR furniture collection. Hand-finished Italian craftsmanship for living, dining, bedroom and office.",
      },
    ],
  }),
  component: ProductsPage,
});

// ----------------------------------------------------------------------
// 2. 类型定义与静态数据源
// ----------------------------------------------------------------------

/** 单个产品项数据结构 */
type Product = {
  name: string; // 产品名称
  img: string;  // 产品图片相对路径
};

/** 按空间分类的产品数据集 */
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

// 顶部导航项配置
const navLeft = ["Home", "Products"];
const navRight = ["About us", "Contact us"];

// 侧边栏折叠分类配置
const categories = [
  {
    title: "FMANAR",
    items: ["Living Room", "Dining Room", "Office Room", "Bedroom"],
    open: true,
  },
];

// ----------------------------------------------------------------------
// 3. 产品列表主页面组件
// ----------------------------------------------------------------------
function ProductsPage() {
  // 读取当前 URL 中的 query 搜索参数
  const search = Route.useSearch();

  // 若 URL 中指定了有效 category 参数，则设为初始分类，否则默认显示 "Living Room"
  const initialCategory =
    search.category && search.category in productsByCategory
      ? search.category
      : "Living Room";

  // 侧边栏分类组展开/折叠状态
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map((c) => [c.title, !!c.open])),
  );

  // 当前选中的空间分类
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  // 当前页码（默认为第 1 页）
  const [page, setPage] = useState(1);

  // 监听 URL 中的 category 变化并同步更新选中的分类与重置页码
  useEffect(() => {
    if (search.category && search.category in productsByCategory) {
      setActiveCategory(search.category);
      setPage(1); // 切换分类时回到第 1 页
    }
  }, [search.category]);

  // 分页计算逻辑
  const products = productsByCategory[activeCategory] ?? [];
  const pageSize = 12; // 每页展示 12 件产品
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  
  // 根据当前页码截取当前页展示的产品数组
  const pageProducts = products.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ==================== 顶部固定导航栏 (Header) ==================== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          {/* 左侧导航菜单 */}
          <nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/85 md:flex">
            {navLeft.map((n) =>
              n === "Products" ? (
                <Link
                  key={n}
                  to="/products"
                  search={{ category: undefined }}
                  className="whitespace-nowrap text-[--gold]"
                >
                  {n}
                </Link>
              ) : (
                <Link
                  key={n}
                  to="/"
                  className="whitespace-nowrap transition-colors hover:text-[--gold]"
                >
                  {n}
                </Link>
              ),
            )}
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

          {/* 右侧搜索与多语言切换 */}
          <div className="ml-8 flex shrink-0 items-center gap-4 text-foreground/80 md:ml-12">
            <button aria-label="Search" className="transition hover:text-[--gold]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <span className="text-[11px] tracking-widest">EN</span>
            <span className="text-[11px] tracking-widest text-muted-foreground">AR</span>
          </div>
        </div>
      </header>

      {/* ==================== 页面顶部横幅区 (Banner) ==================== */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden pt-[72px]">
        <img
          src="/DSC05873_1%20%E6%8B%B7%E8%B4%9D.jpg"
          alt="Products banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* 深色渐变遮罩层 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        
        {/* 横幅标语 */}
        <div className="absolute inset-x-0 bottom-20 z-10 flex flex-col items-center text-center">
          <h1 className="font-display text-6xl text-white drop-shadow md:text-7xl">
            Products
          </h1>
          <p className="mt-4 text-[11px] uppercase tracking-[0.5em] text-[--gold-soft]">
            Life Style
          </p>
        </div>
      </section>

      {/* ==================== 主内容区 (侧边栏 + 产品网格) ==================== */}
      <section className="mx-auto grid max-w-[1600px] gap-12 px-8 py-20 lg:grid-cols-[260px_1fr]">
        {/* 左侧分类导航菜单 (Sidebar) */}
        <aside>
          <p className="border-b border-border/40 pb-4 text-[11px] uppercase tracking-[0.4em] text-[--gold]">
            Categories
          </p>
          <div className="mt-6 space-y-6">
            {categories.map((c) => (
              <div key={c.title}>
                {/* 折叠/展开按钮 */}
                <button
                  onClick={() =>
                    setOpenGroups((p) => ({ ...p, [c.title]: !p[c.title] }))
                  }
                  className="flex w-full items-center justify-between text-left text-sm font-medium uppercase tracking-[0.25em] text-foreground transition hover:text-[--gold]"
                >
                  <span>{c.title}</span>
                  <span className="text-[--gold]">
                    {openGroups[c.title] ? "−" : "+"}
                  </span>
                </button>

                {/* 分类子项列表 */}
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
                                setPage(1); // 切换分类时重置到第 1 页
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

        {/* 右侧产品展柜与分页 */}
        <div>
          {/* 分类标题与总数指示 */}
          <div className="mb-8 flex items-baseline justify-between border-b border-border/30 pb-4">
            <h2 className="font-display text-3xl text-foreground">
              {activeCategory}
            </h2>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {products.length} pieces
            </span>
          </div>

          {/* 产品网格列表 */}
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

          {/* 分页控制栏 */}
          <div className="mt-16 flex items-center justify-center gap-2 text-xs tracking-widest">
            {/* 上一页 */}
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-3 py-2 text-muted-foreground transition hover:text-[--gold]"
              aria-label="Previous page"
            >
              «
            </button>

            {/* 页码数字按钮 */}
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

            {/* 下一页 */}
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

      {/* ==================== 页脚区块 (Footer) ==================== */}
      <footer className="border-t border-border/40 px-8 py-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-4">
          {/* 品牌地址与营业时间 */}
          <div>
            <p className="font-display text-2xl tracking-[0.3em]">FMANAR</p>
            <div className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground space-y-1">
              <p>
                Address: No. 9 Zhenxing Road, Mailang Village, Longjiang Town,
                Shunde District, Foshan City, Guangdong Province, China
              </p>
              <p>Business hours: 09:00 – 18:00 (UTC+8)</p>
            </div>
          </div>

          {/* 页脚分类链接 */}
{[
            { h: "Collections", l: ["Living", "Bedroom", "Dining", "Office"] },
            {
              h: "Customer Service",
              l: ["Delivery", "Privacy Policy", "Shipping Policy", "Return and Refunds", "Important Notice"],
            },
            { h: "Contact Us", l: ["Feedback"] },
          ].map((col) => (
            <div key={col.h}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[--gold]">{col.h}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {col.l.map((x) => (
                  <li key={x}>
                    {x === "Delivery" ? (
                      <Link to="/delivery" className="hover:text-foreground transition-colors">
                        {x}
                      </Link>
                    ) : (
                      <a href="#" className="hover:text-foreground">
                        {x}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

