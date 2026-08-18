# Ownly Shopify Theme

> **Upload once, own everything.**

Ownly 是一个 Shopify Online Store 2.0 主题，为 toC + 小B 轻定制平台设计。

## 品牌

- **品牌名**：Ownly (Own + Only)
- **Slogan**：Upload once, own everything.
- **定位**：全球首个"一个 Logo → 全案定制"自助平台
- **核心差异化**：上传一个 Logo → 一键全案定制

## 色彩系统

| 用途 | 色值 | 说明 |
|------|------|------|
| 主色 | `#1A1A2E` | 深藏青，专业感、信任感 |
| 强调色 | `#FF6B35` | 活力橙，创造力、行动力 |
| AI 紫 | `#8B5CF6` | AI Studio 专属色 |

## 目录结构

```
ownly-theme/
├── assets/              # CSS + JS
│   ├── theme.css        # 全局样式
│   └── theme.js         # 交互逻辑
├── config/
│   ├── settings_schema.json   # 主题设置模型
│   └── settings_data.json     # 主题配置数据
├── layout/
│   └── theme.liquid           # 主布局
├── locales/
│   └── en.default.json        # 英文翻译
├── models/                    # 数据模型定义
│   ├── product-model.json     # 产品数据模型
│   ├── kit-model.json         # Kit 数据模型
│   └── theme-config-model.json # 主题配置模型
├── sections/
│   ├── header.liquid          # 导航头
│   ├── footer.liquid          # 页脚
│   ├── hero-banner.liquid     # 首页 Hero
│   ├── features-grid.liquid   # 特性展示
│   ├── featured-products.liquid # 产品网格
│   ├── kit-showcase.liquid    # Kit 展示
│   ├── how-it-works.liquid    # 流程说明
│   ├── cta-banner.liquid      # CTA 横幅
│   ├── header-group.json      # Header section group
│   └── footer-group.json      # Footer section group
├── snippets/
│   ├── meta-tags.liquid       # SEO meta tags
│   ├── product-card-button.liquid # 产品卡按钮
│   └── scroll-to-top.liquid   # 回到顶部
└── templates/
    ├── index.json             # 首页模板
    ├── product.json           # 产品页模板
    ├── collection.json        # 集合页模板
    ├── page.json              # 页面模板
    ├── cart.json              # 购物车模板
    ├── blog.json              # 博客模板
    └── 404.json               # 404 模板
```

## 首页 Sections

1. **Hero Banner** — 品牌主视觉 + CTA
2. **Features Grid** — 三大核心卖点（上传/AI适配/全案交付）
3. **Featured Products** — Phase 1 产品展示
4. **Kit Showcase** — 全案 Kit 展示（Campaign/Brand/Wedding）
5. **How It Works** — 四步流程说明
6. **CTA Banner** — 底部行动号召

## 数据模型

### Product Model (`models/product-model.json`)
定义 Shopify 产品资源结构，包含：
- 三种产品线：Single Custom / Full-Case Kit / AI Studio
- 变体管理（尺寸、颜色等选项）
- Metafields 自定义字段

### Kit Model (`models/kit-model.json`)
定义全案 Kit 的数据结构，包含：
- Kit 类型（Campaign/Brand/Wedding/Event/Fan Support）
- 包含商品列表及数量
- 定价策略（Kit 价格 vs 单品总价，15-20% 折扣）
- 定金规则（按订单金额分档）

### Theme Config Model (`models/theme-config-model.json`)
定义主题全局配置，包含：
- 品牌信息、色彩系统
- 产品线配置（Phase 1/2/3）
- 支付方式与定金规则
- 物流配置（供应商、仓库、交付时间）
- 全局常量（汇率、费率、预算）

## Shopify 部署

### 方式一：Shopify CLI（推荐）

```bash
# 安装 Shopify CLI
npm install -g @shopify/cli @shopify/theme

# 登录
shopify login --store your-store.myshopify.com

# 推送主题
shopify theme push --path ./ownly-theme
```

### 方式二：手动上传

1. 将 `ownly-theme/` 目录压缩为 `.zip`
2. 在 Shopify Admin → Online Store → Themes → Upload theme
3. 上传 zip 文件

## 产品线规划

| 阶段 | 产品 | 价格区间 | 交付时间 |
|------|------|----------|----------|
| Phase 1 | T恤、马克杯、手机壳 | $15-$45 | 7-15 天 |
| Phase 1 第二批 | 帆布袋、AirPods壳、竞选Kit | $15-$45 | 7-15 天 |
| Phase 2 | 全案 Kit | $99-$499 | 7-15 天 |
| Phase 3 | AI Studio | 免费生成+产品付费 | 待定 |

## License

Private — Ownly Brand
