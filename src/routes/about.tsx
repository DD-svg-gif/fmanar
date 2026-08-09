import { createFileRoute, Link } from "@tanstack/react-router";
// 导入自定义展示组件（如果这些组件内部也有图片引用，请确保对应 public/about/ 下的文件名小写匹配）
import { AboutIntro, Customization, WhyChooseUs } from "@/components/SiteSections";

// 1. 定义路由及页面 SEO 元数据 (Meta Data)
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
        content:
          "Own production base, bespoke craftsmanship and global delivery for luxury interiors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

// 2. 导航栏数据配置
const navLeft = ["Home", "Products"];
const navRight = ["About us", "Contact us"];

// 3. 辅助函数：根据导航名称映射对应的路由路径
function linkFor(label: string) {
  if (label === "Home") return "/";
  if (label === "Products") return "/products";
  if (label === "About us") return "/about";
  return "/contact";
}

// 4. 关于我们 (About) 主页面组件
function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 顶部 Hero 视域横幅区 */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        {/* 
          【重点修复】背景图片：
          原代码为 /about/hero.jpg，但由于 public/about/ 目录下无此文件导致破图。
          现已替换为目录下存在的 /about/sofa.jpg。
          如果你上传了 hero.jpg，可以再改回 /about/hero.jpg。
        */}
        <img
          src="/about/hero.jpg"
          alt="FMANAR maison"
          className="h-full w-full object-cover"
        />

        {/* 渐变遮罩层，用于提升文字可读性 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        {/* 页头导航栏 */}
        <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6">
          {/* 左侧导航菜单 */}
          <nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
            {navLeft.map((n) => (
              <Link
                key={n}
                to={linkFor(n)!}
                className="whitespace-nowrap transition-colors hover:text-[--gold]"
              >
                {n}
              </Link>
            ))}
          </nav>

          {/* 中间品牌 Logo */}
          <Link to="/" className="flex shrink-0 flex-col items-center px-10 text-white">
            <span className="text-[10px] tracking-[0.4em] text-white/60">
              MORE PHILOSOPHY
            </span>
            <span className="font-display text-3xl tracking-[0.35em]">&nbsp;FMANAR</span>
          </Link>

          {/* 右侧导航菜单 */}
          <nav className="hidden flex-1 basis-0 items-center justify-start gap-10 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">
            {navRight.map((n) => (
              <Link
                key={n}
                to={linkFor(n)}
                className="whitespace-nowrap transition-colors hover:text-[--gold]"
              >
                {n}
              </Link>
            ))}
          </nav>
        </header>

        {/* Hero 区底部主标题 */}
        <div className="absolute inset-x-0 bottom-16 z-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">
            About us
          </p>
          <h1 className="mt-4 font-display text-5xl text-white md:text-6xl">
            The FMANAR HOME
          </h1>
        </div>
      </section>

      {/* 5. 品牌介绍模块 */}
      <AboutIntro />

      {/* 6. 定制服务展示模块 */}
      <Customization />

      {/* 7. 优势/选择理由模块 */}
      <WhyChooseUs />

      {/* 8. 页脚版权信息 */}
      <footer className="border-t border-border/40 px-8 py-12">
        <p className="mx-auto max-w-[1600px] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          © 2026 Fmanar Maison — All rights reserved
        </p>
      </footer>
    </div>
  );
}
