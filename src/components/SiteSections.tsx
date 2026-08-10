const STATS = [
  { v: "10+", l: "Years Experience" },
  { v: "20,000m²", l: "Production Base" },
  { v: "12,000m²", l: "Showroom" },
];

export function AboutIntro() {
  return (
    <section className="border-t border-border/40 px-8 py-24">
      {/* 网格容器：左侧图片，右侧文字 */}
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 md:grid-cols-2 md:gap-20">
        
        {/* 左侧图片：设置为 3:4 竖屏比例 */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src="/about/gongchang.jpg"
            alt="FMANAR atelier"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 右侧文字内容 */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[--gold]">
            About us
          </p>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            High-end bespoke furniture&nbsp;
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Established in 2015, Foshan Fmanar Furniture is located in Longjiang
            Town, Shunde District, Foshan City, Guangdong Province—the furniture
            manufacturing center of China. As a modern furniture manufacturer
            integrating R&D, production, sales, and service, the company boasts an
            independent production base of over 20,000 square meters and a
            high-end showroom of over 12,000 square meters. With advanced
            production lines, an experienced technical team, and outstanding
            management talent, we focus on providing customized furniture for
            high-end venues such as villas, luxury apartments, and star-rated
            hotels.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/40 pt-8">
            {STATS.map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl text-[--gold]">{s.v}</p>
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
