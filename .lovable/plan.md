## 目标
将首页 Categories 区块中 **Living Room / Bedroom / Office Room** 三张分类卡的背景图，分别替换为用户上传的三张实拍图。

## 图片映射
- Living Room ← `user-uploads://DSC06027_1.JPG`（米色沙发 + 胡桃木客厅）
- Bedroom ← `user-uploads://DSC06032.JPG`（橙色皮床 + 床头柜）
- Office Room ← `user-uploads://DSC06035.JPG`（胡桃木曲面书桌 + 书架）

## 步骤
1. 用 `lovable-assets` CLI 将三张图片上传到 CDN，生成 `src/assets/room-living-new.jpg.asset.json`、`room-bedroom-new.jpg.asset.json`、`room-office-new.jpg.asset.json` 三个指针文件（不把原始二进制放进代码库）。
2. 修改 `src/routes/index.tsx`：
   - 替换 Living Room / Bedroom / Office Room 三张卡片的 `img` 字段，指向对应新 asset 的 `.url`
   - 其他分类（Dining、Kitchen、Movie & TV、Full-Service）保持不变
3. 不改 `/products` 页面的分类图（用户只提到 Categories 背景图）。如需同步替换请再告知。

## 不做的事
- 不修改布局、动效、文案
- 不动 Dining / Kitchen / Movie & TV / Full-Service 的图片
- 不动 Products 页面
