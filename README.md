# AIWikiClaw 平台架构方案

**项目**: AIWikiClaw  
**域名**: www.aiwikiclaw.com  
**版本**: v1.0  
**创建时间**: 2026-02-27

---

## 一、平台定位

### 1.1 名称释义
- **AI**: 人工智能全方面内容
- **Wiki**: 技能、知识、仓库、学习
- **Claw**: OpenClaw及相关智能体推荐、应用、项目交易

### 1.2 核心价值
- 降低AI学习门槛
- 沉淀知识资产
- 连接供需双方

---

## 二、三大板块规划

### 2.1 AI板块 🧠
**功能**: 智能内容聚合与学习

| 子模块 | 说明 |
|:-------|:-----|
| AI百科 | 概念解释、术语查询 |
| 教程中心 | 从入门到实战 |
| 工具库 | AI工具评测与推荐 |
| 最新资讯 | AI行业动态 |
|  prompt库 | 优质Prompt分享 |

### 2.2 Wiki板块 📚
**功能**: 知识沉淀与技能仓库

| 子模块 | 说明 |
|:-------|:-----|
| 技能百科 | OpenClaw技能文档 |
| 知识库 | 行业知识整理 |
| 模板中心 | Prompt模板、工作流模板 |
| 问答社区 | 问题解答 |
| 学习路径 | 技能学习路线图 |

### 2.3 Claw板块 🦞
**功能**: 智能体交易与应用市场

| 子模块 | 说明 |
|:-------|:-----|
| 智能体市场 | 买卖AI智能体 |
| 项目交易 | AI项目外包/接单 |
| 技能商店 | 付费技能/插件 |
| 案例展示 | 成功案例分享 |
| 需求发布 | 需求方发布任务 |

---

## 三、技术架构

### 3.1 前端技术栈

| 层级 | 技术选型 |
|:-----|:---------|
| 框架 | Next.js 14 (React) |
| UI库 | Tailwind CSS + shadcn/ui |
| 状态管理 | Zustand |
| 表单 | React Hook Form |
| 动画 | Framer Motion |

### 3.2 后端技术栈

| 层级 | 技术选型 |
|:-----|:---------|
| 框架 | Next.js API Routes |
| 数据库 | PostgreSQL (Supabase) |
| 认证 | NextAuth.js |
| 存储 | Supabase Storage / AWS S3 |
| 支付 | Stripe |

### 3.3 部署架构

```mermaid
┌─────────────────────────────────────────────┐
│                 CDN (CloudFront)             │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────┐
│              Next.js (Vercel)                │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐        │
│  │   AI    │ │  Wiki   │ │  Claw   │        │
│  │  板块   │ │  板块   │ │  板块   │        │
│  └─────────┘ └─────────┘ └─────────┘        │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────┐
│           Supabase (PostgreSQL)             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐        │
│  │ Auth    │ │ Database│ │ Storage │        │
│  └─────────┘ └─────────┘ └─────────┘        │
└─────────────────────────────────────────────┘
```

---

## 四、页面结构

### 4.1 首页 (/)
```
┌─────────────────────────────────────────────┐
│  Logo   AI   Wiki   Claw   搜索    登录     │
├─────────────────────────────────────────────┤
│                                             │
│         🎯 AIWikiClaw                       │
│    你的AI学习·知识·交易一站式平台            │
│                                             │
│    [AI入门] [Wiki知识] [智能体市场]          │
│                                             │
├─────────────────────────────────────────────┤
│  📰 最新资讯    📚 热门知识    🛠️ 推荐技能   │
├─────────────────────────────────────────────┤
│                                             │
│        🔥 热门智能体    💡 最新项目          │
│                                             │
└─────────────────────────────────────────────┘
```

### 4.2 AI板块 (/ai)
- /ai/encyclopedia - AI百科
- /ai/tutorials - 教程中心
- /ai/tools - 工具库
- /ai/news - 资讯
- /ai/prompts - Prompt库

### 4.3 Wiki板块 (/wiki)
- /wiki/skills - 技能百科
- /wiki/knowledge - 知识库
- /wiki/templates - 模板中心
- /wiki/qa - 问答社区
- /wiki/paths - 学习路径

### 4.4 Claw板块 (/claw)
- /claw/market - 智能体市场
- /claw/projects - 项目交易
- /claw/shop - 技能商店
- /claw/cases - 案例展示
- /claw/demand - 发布需求

---

## 五、数据库设计

### 5.1 核心表结构

```sql
-- 用户表
users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  nickname TEXT,
  avatar_url TEXT,
  role TEXT, -- admin, creator, buyer
  created_at TIMESTAMP
)

-- 文章表
articles (
  id UUID PRIMARY KEY,
  title TEXT,
  content TEXT,
  category TEXT, -- ai, wiki, claw
  tags TEXT[],
  author_id UUID,
  views INTEGER,
  created_at TIMESTAMP
)

-- 智能体/技能表
products (
  id UUID PRIMARY KEY,
  name TEXT,
  description TEXT,
  price DECIMAL,
  category TEXT, -- agent, skill, template
  owner_id UUID,
  status TEXT, -- draft, published
  created_at TIMESTAMP
)

-- 订单表
orders (
  id UUID PRIMARY KEY,
  buyer_id UUID,
  product_id UUID,
  amount DECIMAL,
  status TEXT, -- pending, paid, completed
  created_at TIMESTAMP
)

-- 评论表
reviews (
  id UUID PRIMARY KEY,
  product_id UUID,
  user_id UUID,
  rating INTEGER,
  content TEXT,
  created_at TIMESTAMP
)
```

---

## 六、功能模块

### 6.1 用户系统
- 邮箱/微信/GitHub登录
- 用户资料管理
- 创作者认证
- 消息通知

### 6.2 内容系统
- Markdown编辑器
- 图片/附件上传
- 标签管理
- 搜索功能
- 评论互动

### 6.3 交易系统
- 商品发布
- 购物车
- 订单管理
- 支付集成
- 评价系统

### 6.4 搜索系统
- 全文搜索
- 分类筛选
- 标签过滤
- 热门推荐

---

## 七、开发进度计划

### 第一阶段：基础搭建 (Week 1-2)

| 任务 | 周期 | 状态 |
|:-----|:-----|:----:|
| 项目初始化 | 2天 | ⏳ |
| 技术栈配置 | 2天 | ⏳ |
| 数据库设计 | 2天 | ⏳ |
| 基础组件库 | 3天 | ⏳ |
| 登录/注册 | 3天 | ⏳ |

### 第二阶段：核心功能 (Week 3-4)

| 任务 | 周期 | 状态 |
|:-----|:-----|:----:|
| 首页开发 | 3天 | ⏳ |
| AI板块 | 5天 | ⏳ |
| Wiki板块 | 5天 | ⏳ |
| Claw板块 | 5天 | ⏳ |

### 第三阶段：交易系统 (Week 5-6)

| 任务 | 周期 | 状态 |
|:-----|:-----|:----:|
| 商品发布 | 3天 | ⏳ |
| 购物车 | 2天 | ⏳ |
| 订单系统 | 3天 | ⏳ |
| 支付集成 | 3天 | ⏳ |

### 第四阶段：优化上线 (Week 7-8)

| 任务 | 周期 | 状态 |
|:-----|:-----|:----:|
| 性能优化 | 3天 | ⏳ |
| SEO优化 | 2天 | ⏳ |
| 测试验收 | 3天 | ⏳ |
| 部署上线 | 2天 | ⏳ |

---

## 八、技术亮点

### 8.1 Next.js 14 App Router
- 服务器组件
- 流式渲染
- 路由优化

### 8.2 Supabase
- 实时数据
- 边缘函数
- 存储集成

### 8.3 SEO优化
- SSR渲染
- Meta标签
- sitemap

---

## 九、预算估算

### 9.1 实际成本（免费方案）

| 项目 | 方案 | 费用 |
|:-----|:-----|-----:|
| 域名 | 已采购 ✓ | ¥0 (已付) |
| 托管 | Vercel 免费额度 | $0 |
| 数据库 | Supabase 免费额度 | $0 |
| 存储 | Supabase 免费额度 | $0 |
| SSL | Vercel 自动配置 | $0 |
| **首月预估** | | **¥0** |

### 9.2 免费额度说明

| 服务 | 免费额度 |
|:-----|:---------|
| Vercel | 100GB带宽/月，5000构建分钟/月 |
| Supabase | 500MB数据库，1GB存储，50万月活 |

---

## 十、下一步行动

1. ✅ 确认技术栈选择
2. ⏳ 确认开发时间安排
3. ⏳ 开始项目初始化
4. ⏳ 准备服务器/域名

---

**方案状态**: v1.0 初稿  
**等待确认后启动开发**

---

*本方案由 benz_lee007 自动生成*