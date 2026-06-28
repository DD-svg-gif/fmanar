# 创建 Products 产品页

## 目标
点击顶部导航的 **Products** 跳转到新页面 `/products`，页面布局完全参照 sassuolo.cn 的 Products / Living Room 页面结构，并套用我们现有的 FMANAR 暗色 + 金色风格。

## 参考页面结构（来自 sassuolo.cn）
- 顶部全宽 banner 图，叠加 "Products / LIFE STYLE" 标题
- 主体两栏：
  - 左侧 sidebar：CATEGORIES 列表，可展开/收起的二级分类
    - FMANAR（展开）：Dining Room / Living Room（高亮当前）/ Office Room / Bedroom / Movie & TV room / Kitchen / Full-Service Design-Build
    - CHIGEL（收起）：Dining Room / Living Room / Bedroom / Office and others
    - SOLEREYES（收起）
  - 右侧产品网格：4 列卡片，每张卡片 = 产品图 + 下方居中的产品名
- 底部分页（« 1 2 3 … »）

## 实施步骤

### 1. 新建路由文件 `src/routes/products.tsx`
- `createFileRoute("/products")` + 独立 `head()`（title / description / og:title / og:description）
- 复用现有的 hero / room 图片作为产品卡占位图（共约 12 张产品卡，名称参考原站：07-04 Single chair、12-09A TV cabinet、12-102 TV cabinet、10-02 Entryway 等，作为示例数据）
- 分页 UI 用静态按钮（1~8），当前页高亮金色，但不实现真正翻页逻辑（一页够看，避免铺开额外页面）
- 左侧 sidebar 默认展开 FMANAR 分组，"Living Room" 用金色高亮表示当前所在分类

### 2. 修改 `src/routes/index.tsx`
- 把 header 里的 `Products` 文本链接从 `<a href="#">` 改为 TanStack 的 `<Link to="/products">`
- 其他 nav 项暂时保留 `<a href="#">`（本次只动 Products）

### 3. 顶部导航统一性
- 在新 `/products` 页面里复用相同的顶部 header（FMANAR logo + 左右导航 + 搜索/语言切换），保持视觉一致
- 在该 header 里也用 `<Link to="/">` 让 logo 回首页，`<Link to="/products">` 高亮 Products

### 4. 风格细节
- 整体沿用 `--gold`、`font-display`、暗色背景，不引入新的颜色 token
- Banner 用 `hero-living.jpg` + 暗色渐变叠层，居中显示 "Products" 标题与 "LIFE STYLE" 副标
- 产品卡 hover 时图片轻微缩放（与首页分类卡相同的过渡）

### 5. 验证
- 构建后，从首页点击 Products → 跳转到 `/products`
- 页面布局、sidebar、产品网格、分页正常显示，无类型/路由报错

## 不会做的事
- 不抓取或复制 sassuolo 的图片 / 文案做商用，只参考布局结构
- 不实现真实的产品详情页、翻页接口、后台数据
- 不改动其他导航项的目标（除 Products 外）
