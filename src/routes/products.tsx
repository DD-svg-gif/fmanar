return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ========================================================================= */}
      {/* 📱 移动端产品列表 (仅在 <768px 显示)                                         */}
      {/* ========================================================================= */}
      <div className="block md:hidden pb-20 pt-16">
        {/* 顶部微型 Header */}
        <div className="fixed inset-x-0 top-0 z-40 bg-background/90 backdrop-blur-md px-5 py-3 border-b border-border/30 flex items-center justify-between">
          <Link to="/" className="font-display text-lg tracking-widest">FMANAR</Link>
          <span className="text-[10px] uppercase tracking-widest text-[--gold]">{activeCategory}</span>
        </div>

        {/* 移动端横向滑动的分类选择器（替代侧边栏） */}
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

        {/* 移动端 2 列产品流 */}
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
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <p className="mt-2 text-xs font-medium text-foreground truncate">{p.name}</p>
              <span className="mt-1 inline-flex text-[9px] uppercase tracking-wider text-[--gold]">
                Tap to Inquire →
              </span>
            </a>
          ))}
        </div>

        {/* 移动端简易翻页器 */}
        <div className="flex items-center justify-center gap-3 py-6 text-xs">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-1.5 rounded border border-border/40 disabled:opacity-30"
          >
            Prev
          </button>
          <span className="text-muted-foreground">{page} / {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-1.5 rounded border border-border/40 disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 💻 PC 桌面端 (保持原有的大图 Banner + 左侧边栏 + 多列网格)                  */}
      {/* ========================================================================= */}
      <div className="hidden md:block">
        {/* 原有 Header */}
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
                <Link key={n} to={n === "About us" ? "/about" : "/contact"} className="whitespace-nowrap transition-colors hover:text-[--gold]">
                  {n}
                </Link>
              ))}
            </nav>
            <div className="ml-8 flex shrink-0 items-center gap-4 text-foreground/80 md:ml-12">
              <span className="text-[11px] tracking-widest">EN</span>
              <span className="text-[11px] tracking-widest text-muted-foreground">AR</span>
            </div>
          </div>
        </header>

        {/* 原有 Banner */}
        <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden pt-[72px]">
          <img src="/DSC05873_1%20%E6%8B%B7%E8%B4%9D.jpg" alt="Products banner" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          <div className="absolute inset-x-0 bottom-20 z-10 flex flex-col items-center text-center">
            <h1 className="font-display text-6xl text-white drop-shadow md:text-7xl">Products</h1>
            <p className="mt-4 text-[11px] uppercase tracking-[0.5em] text-[--gold-soft]">Life Style</p>
          </div>
        </section>

        {/* 原有 侧边栏 + 网格展示 */}
        <section className="mx-auto grid max-w-[1600px] gap-12 px-8 py-20 lg:grid-cols-[260px_1fr]">
          <aside>
            <p className="border-b border-border/40 pb-4 text-[11px] uppercase tracking-[0.4em] text-[--gold]">Categories</p>
            <div className="mt-6 space-y-6">
              {categories.map((c) => (
                <div key={c.title}>
                  <button
                    onClick={() => setOpenGroups((p) => ({ ...p, [c.title]: !p[c.title] }))}
                    className="flex w-full items-center justify-between text-left text-sm font-medium uppercase tracking-[0.25em] text-foreground transition hover:text-[--gold]"
                  >
                    <span>{c.title}</span>
                    <span className="text-[--gold]">{openGroups[c.title] ? "—" : "+"}</span>
                  </button>
                  {openGroups[c.title] && c.items.length > 0 && (
                    <ul className="mt-4 space-y-3 border-l border-border/40 pl-4 text-sm">
                      {c.items.map((it) => (
                        <li key={it}>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveCategory(it);
                              setPage(1);
                            }}
                            className={`block w-full text-left transition ${
                              activeCategory === it ? "text-[--gold]" : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {it}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </aside>

          <div>
            <div className="mb-8 flex items-baseline justify-between border-b border-border/30 pb-4">
              <h2 className="font-display text-3xl text-foreground">{activeCategory}</h2>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{products.length} pieces</span>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pageProducts.map((p) => (
                <a key={p.name} href="#" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                  </div>
                  <div className="mt-4 border-t border-border/30 pt-4 text-center">
                    <p className="text-sm tracking-[0.15em] text-foreground transition group-hover:text-[--gold]">{p.name}</p>
                  </div>
                </a>
              ))}
            </div>
            {/* PC 翻页器 */}
            <div className="mt-16 flex items-center justify-center gap-2 text-xs tracking-widest">
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
            </div>
          </div>
        </section>

        {/* PC Footer */}
        <footer className="border-t border-border/40 px-8 py-16">
          <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-4">
            <div>
              <p className="font-display text-2xl tracking-[0.3em]">FMANAR</p>
              <div className="mt-4 max-w-xs space-y-1 text-xs leading-relaxed text-muted-foreground">
                <p>Address: No. 9 Zhenxing Road, Mailang Village, Longjiang Town, Shunde District, Foshan City, Guangdong Province, China</p>
                <p>Business hours: 09:00 - 18:00 (UTC+8)</p>
              </div>
            </div>
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
            © 2026 Fmanar Maison — All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
