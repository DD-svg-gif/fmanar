import React from "react";

// 核心统计数据数组：包含数值 (v) 与对应的英文标签 (l)
const STATS = [
  { v: "10+", l: "Years Experience" },       // 10年以上行业经验
  { v: "20,000m²", l: "Production Base" },   // 20,000 平方米独立生产基地
  { v: "12,000m²", l: "Showroom" },          // 12,000 平方米高端展示厅
];

/**
 * 关于我们 (AboutIntro) 组件
 * 用于展示品牌简介、工厂/工坊实景图片及核心运营指标数据
 */
export function AboutIntro() {
  return (
    // 外层容器：带顶部细边框，提供上下左右内边距
    <section className="border-t border-border/40 px-8 py-24">
      {/* 网格容器：移动端单列居中，桌面端(md及以上)切换为双列，最大宽度 1600px */}
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 md:grid-cols-2 md:gap-20">
        
        {/* ================= 左侧区域：实景图片展示 ================= */}
        {/* 设置容器为 3:4 竖屏比例并裁剪溢出部分 */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src="/about/gongchang.jpg"
            alt="FMANAR atelier"
            loading="lazy" // 图片懒加载，优化页面加载性能
            className="h-full w-full object-cover" // 填充并自适应裁剪图片
          />
        </div>

        {/* ================= 右侧区域：文字介绍与数据展示 ================= */}
        <div>
          {/* 小标题/分类标签：金色、大写字形、加大字间距 */}
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">
            About us
          </p>

          {/* 主标题 */}
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            High-end bespoke furniture&nbsp;
          </h2>

          {/* 品牌详细介绍文案 */}
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Established in 2015, Foshan Fmanar Furniture is located in Longjiang Town, Shunde District, Foshan City, Guangdong Province—the furniture manufacturing center of China. As a modern furniture manufacturer integrating R&D, production, sales, and service, the company boasts an independent production base of over 20,000 square meters and a high-end showroom of over 12,000 square meters. With advanced production lines, an experienced technical team, and outstanding management talent, we focus on providing customized furniture for high-end venues such as villas, luxury apartments, and star-rated hotels.
          </p>

          {/* 底部 3 列统计数据展示区 */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/40 pt-8">
            {STATS.map((s) => (
              <div key={s.l}>
                {/* 统计数值：金色放大显示 */}
                <p className="font-display text-3xl text-[--gold]">{s.v}</p>
                {/* 数据项名称：大写小字、次要文本颜色 */}
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
