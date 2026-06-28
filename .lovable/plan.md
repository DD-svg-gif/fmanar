# 替换网站图片的计划

## 目标
把你上传的图片替换到 FMANAR 网站的 5 个现有图片位置，保持现有暗色奢华 + 金色点缀的意式风格。

## 当前图片清单
| 文件名 | 用途 | 位置 |
|---|---|---|
| `hero-living.jpg` | 首页轮播第 1 张 | `src/assets/hero-living.jpg` |
| `room-living2.jpg` | 首页轮播第 2 张 | `src/assets/room-living2.jpg` |
| `room-bedroom.jpg` | 轮播/分类 Bedroom | `src/assets/room-bedroom.jpg` |
| `room-dining.jpg` | 轮播/分类 Dining | `src/assets/room-dining.jpg` |
| `room-office.jpg` | 轮播/分类 Office | `src/assets/room-office.jpg` |

## 实施步骤

### 1. 上传图片
请通过聊天窗口上传 5 张新图片。建议尺寸：
- `hero-living.jpg`：横图，1920×1080 左右
- 其余 4 张：竖图或横图均可，建议 1200×1500 或 1920×1280

命名不需要严格一致，上传后告诉我每张分别对应哪个位置即可。

### 2. 复制图片到项目
我会把你上传的图片复制到 `src/assets/`，覆盖现有文件，并保持文件名不变。

### 3. 检查引用
现有 `src/routes/index.tsx` 通过 `import` 引用这些文件名。由于我们保持文件名一致，代码引用无需修改，只需要确认引用关系正确。

### 4. 构建与验证
运行 TypeScript 类型检查和 Vite 构建，确保图片路径正确、页面能正常加载。

## 可选增强
- 如果你想让图片走 CDN，我可以把图片转为 Lovable Assets，用 `/__l5e/assets-v1/...` URL 引用，减少仓库体积。
- 如果你的图片风格与现有设计不一致，我可以调整 CSS 色调/遮罩来统一观感。
