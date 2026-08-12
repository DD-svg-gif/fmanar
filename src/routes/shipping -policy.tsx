import { createFileRoute, Link } from "@tanstack/react-router";

import { useEffect, useState } from "react";

import { RequestInfo } from "@/components/RequestInfo";



// 声明路由目标对象类型

type RouteTarget = {

to: string;

search?: Record<string, string>;

};



const customerServiceRoutes: Record<string, RouteTarget> = {

// Collections 分类跳转（使用 search 属性传递 category，且名称与 productsByCategory 对应）

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

// ----------------------------------------------------------------------

// 1. 路由与 Meta 信息配置

// ----------------------------------------------------------------------

export const Route = createFileRoute("/")({

// 页面 HEAD 元数据配置（SEO 与 Open Graph 标签）

head: () => ({

meta: [

{ title: "FMANAR — Luxury Italian Furniture" },

{

name: "description",

content:

"Bespoke luxury furniture for living rooms, bedrooms, dining and office spaces. Crafted in Italy.",

},

{ property: "og:title", content: "FMANAR — Luxury Italian Furniture" },

{

property: "og:description",

content: "Bespoke luxury furniture. Crafted in Italy.",

},

],

}),

component: Home,

});



// ----------------------------------------------------------------------

// 2. 类型定义与静态数据

// ----------------------------------------------------------------------



/** 轮播图项类型 */

type Slide = {

src: string; // 图片资源路径

label: string; // 空间名称

w: number; // 原始宽度

h: number; // 原始高度

};



// 顶部 Hero 全屏轮播图配置数据

const slides: Slide[] = [

{ src: "/HOME/livingroom.jpg", label: "Living room", w: 1920, h: 1280 },

{ src: "/HOME/diningroom.jpg", label: "Dining room", w: 1920, h: 1280 },

{ src: "/HOME/bedroom.jpg", label: "Bedroom", w: 1920, h: 1280 },

{ src: "/HOME/officeroom.jpg", label: "Office room", w: 1920, h: 1280 },

];



// 顶部导航项配置

const navLeft = ["Home", "Products"];

const navRight = ["About us", "Contact us"];



// 空间分类卡片数据

const CATEGORIES = [

{ src: "/HOME/living1.jpg", label: "Living", count: "24 pieces", cat: "Living Room" },

{ src: "/HOME/bed1.jpg", label: "Bedroom", count: "18 pieces", cat: "Bedroom" },

{ src: "/HOME/dining1.jpg", label: "Dining", count: "21 pieces", cat: "Dining Room" },

{ src: "/HOME/office1.jpg", label: "Office", count: "12 pieces", cat: "Office Room" },

];



// ----------------------------------------------------------------------

// 3. 首页主组件

// ----------------------------------------------------------------------

function Home() {

// 当前激活的轮播图索引

const [i, setI] = useState(0);



// 定时器：每 6 秒自动切换轮播图

useEffect(() => {

const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);

return () => clearInterval(t); // 清理定时器，避免内存泄漏

}, []);



return (

<div className="min-h-screen bg-background text-foreground">

{/* ==================== 顶部 Hero 全屏轮播区 ==================== */}

<section className="relative h-screen w-full overflow-hidden">

{/* 背景轮播图片列表 */}

{slides.map((s, idx) => (

<div

key={idx}

className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"

style={{ opacity: i === idx ? 1 : 0 }}

>

<img

src={s.src}

alt={s.label}

width={s.w}

height={s.h}

// 首张图片立即加载，后续图片延迟加载以优化性能

loading={idx === 0 ? "eager" : "lazy"}

className="h-full w-full object-cover"

/>

{/* 渐变遮罩层，提升文字可读性 */}

<div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70" />

</div>

))}



{/* 顶部 Header 导航栏 */}

<header className="relative z-20 mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6">

{/* 左侧导航菜单 */}

<nav className="hidden flex-1 basis-0 items-center justify-end gap-10 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">

{/* ✅ 修改后的代码： */}

{navLeft.map((n) => {

const isProducts = n === "Products" || n === "产品";

return (

<Link

key={n}

to={isProducts ? "/products" : "/"}

className="whitespace-nowrap transition-colors hover:text-[--gold]"

>

{n}

</Link>

);

})}

</nav>



{/* 中间品牌 Logo */}

<a href="#" className="flex shrink-0 flex-col items-center px-10 text-white">

<span className="text-[10px] tracking-[0.4em] text-white/60">

MORE PHILOSOPHY

</span>

<span className="font-display text-3xl tracking-[0.35em]">

&nbsp;FMANAR

</span>

</a>



{/* 右侧导航菜单 */}

<nav className="hidden flex-1 basis-0 items-center justify-start gap-10 text-xs font-medium uppercase tracking-[0.18em] text-white/85 md:flex">

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



{/* 右侧工具栏（搜索与语言切换） */}

<div className="ml-8 flex shrink-0 items-center gap-4 text-white/80 md:ml-12">

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

<span className="text-[11px] tracking-widest text-white/40">AR</span>

</div>

</header>



{/* 轮播图当前空间标题与探索锚点 */}

<div className="absolute inset-x-0 bottom-24 z-10 flex flex-col items-center text-center">

<h1 className="font-display text-5xl text-white drop-shadow md:text-7xl">

{slides[i].label}

</h1>

<a

href="#categories"

className="mt-6 inline-flex items-center gap-3 border-b border-[--gold] pb-1 text-[11px] uppercase tracking-[0.3em] text-[--gold-soft] transition hover:text-[--gold]"

>

Explore rooms{" "}

<svg

width="14"

height="14"

viewBox="0 0 24 24"

fill="none"

stroke="currentColor"

strokeWidth="1.5"

>

<path d="M5 12h14M13 6l6 6-6 6" />

</svg>

</a>

</div>



{/* 轮播进度条/切换指示器 */}

<div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-3">

{slides.map((_, idx) => (

<button

key={idx}

aria-label={`Slide ${idx + 1}`}

onClick={() => setI(idx)}

className="h-[2px] w-10 bg-white/30"

>

<span

className="block h-full bg-[--gold] transition-all duration-500"

style={{ width: i === idx ? "100%" : "0%" }}

/>

</button>

))}

</div>



{/* 右侧固定社交媒体图标栏 */}

<div className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-5 text-white/60 md:flex">

{["IG", "FB", "WA", "WC", "YT", "IN", "TT"].map((s) => (

<a

key={s}

href="#"

className="text-[10px] tracking-widest transition hover:text-[--gold]"

>

{s}

</a>

))}

</div>

</section>



{/* ==================== 品牌理念板块 ==================== */}

<section className="border-t border-border/40 px-8 py-28 text-center">

<p className="mx-auto max-w-3xl text-[11px] uppercase tracking-[0.4em] text-[--gold]">

The Philosophy

</p>

<h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl leading-tight text-foreground md:text-5xl">

In the heart of Foshan, Guangdong since 2015. We bring Italian artisanal excellence into a contemporary and international way of living.

</h2>

<p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">

Every collection is the result of a continuous dialogue between Italian craftsmanship and contemporary architecture, designed to age with grace inside the homes that hold them.

</p>

</section>



{/* ==================== 核心空间分类区块 (Categories) ==================== */}

<section id="categories" className="mx-auto max-w-[1600px] px-8 pb-28">

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

{CATEGORIES.map((c) => (

<Link

key={c.label}

to="/products"

search={{ category: c.cat }}

className="group relative block aspect-[3/4] overflow-hidden"

>

<img

src={c.src}

alt={c.label}

loading="lazy"

className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"

/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

<div className="absolute inset-x-0 bottom-0 p-6">

<p className="text-[10px] uppercase tracking-[0.35em] text-[--gold]">

{c.count}

</p>

<h3 className="mt-2 font-display text-3xl text-white">{c.label}</h3>

<span className="mt-3 inline-block text-[11px] uppercase tracking-[0.25em] text-white/70 transition group-hover:text-[--gold]">

Discover →

</span>

</div>

</Link>

))}

</div>

</section>



{/* ==================== 主打/新品推荐区块 ==================== */}

<section className="grid grid-cols-1 items-center gap-12 border-t border-border/40 px-8 py-24 md:grid-cols-2 md:gap-20 md:px-20">

{/* 产品展现大图 */}

<div className="relative aspect-[4/5] overflow-hidden bg-black">

<img

src="/HOME/Babylon Rack Circle sofa.png"

alt="Babylon Rack Circle sofa"

loading="lazy"

className="h-full w-full object-cover"

/>

</div>



{/* 产品详细说明 */}

<div>

<p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">

NEW COLLECTION&nbsp;

</p>

<h2 className="mt-5 font-display text-5xl leading-tight">

Babylon Rack Circle sofa

</h2>

<p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">

Curved, modular sofa with a solid and multilayer wood structure, padded in polyurethane and complemented by goose feather cushions.

</p>

<ul className="mt-8 space-y-2 text-sm text-muted-foreground">

<li>— Available in Custom Fabrics and Leathers</li>

<li>— Solid kiln-dried hardwood frame</li>

<li>— Mirror Polished Stainless Steel Finish</li>

<li>— Custom dimensions on request</li>

</ul>

{/* 跳转至咨询表单锚点 */}

<a

href="#request-info"

className="mt-10 inline-flex items-center gap-3 border border-[--gold] px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-[--gold-soft] transition hover:bg-[--gold] hover:text-[oklch(0.14_0_0)]"

>

Request the lookbook

</a>

</div>

</section>



{/* ==================== 信息表单索取组件 ==================== */}

<div id="request-info">

<RequestInfo />

</div>



{/* ==================== 页脚区块 (Footer) ==================== */}

<footer className="border-t border-border/40 px-8 py-16">

<div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-4">

{/* 品牌地址与营业时间 */}

<div>

<p className="font-display text-2xl tracking-[0.3em]">FMANAR</p>

<div className="mt-4 max-w-xs space-y-1 text-xs leading-relaxed text-muted-foreground">

<p>

Address: No. 9 Zhenxing Road, Mailang Village, Longjiang Town,

Shunde District, Foshan City, Guangdong Province, China

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
