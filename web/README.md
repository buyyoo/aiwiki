# AIWikiClaw 🌐

> 你的AI学习·知识·交易一站式平台

## 三大板块

- **AI**: 智能全方面内容（百科、教程、工具库、资讯、Prompt库）
- **Wiki**: 技能知识仓库（技能百科、知识库、模板中心、问答、学习路径）
- **Claw**: 智能体交易市场（智能体市场、项目交易、技能商店、案例展示）

## 技术栈

- Next.js 14
- React 18
- Tailwind CSS
- Supabase (数据库)

## 本地开发

### 前置要求

- Node.js 20 LTS
- npm 或 yarn

### 安装步骤

```bash
# 1. 进入项目目录
cd web

# 2. 安装依赖
npm install

# 3. 配置环境变量
# 复制 .env.local.example 为 .env.local 并填写配置

# 4. 启动开发服务器
npm run dev
```

访问 http://localhost:3000

### 环境变量

在 `.env.local` 中配置:

```
NEXT_PUBLIC_SUPABASE_URL=你的Supabase项目URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的Supabase匿名密钥
```

## 部署到 Vercel

### 方式1: GitHub 部署（推荐）

1. 将 `web/` 目录推送到 GitHub 仓库
2. 访问 [Vercel](https://vercel.com)
3. 导入 GitHub 仓库
4. 设置环境变量:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. 点击 Deploy

### 方式2: Vercel CLI

```bash
npm i -g vercel
cd web
vercel
```

## 项目结构

```
aiwikiclaw/
├── web/                    # Next.js 前端
│   ├── src/
│   │   ├── app/           # 页面路由
│   │   │   ├── ai/       # AI板块
│   │   │   ├── wiki/     # Wiki板块
│   │   │   └── claw/     # Claw板块
│   │   ├── components/   # UI组件
│   │   └── lib/          # 工具库
│   └── .env.local        # 环境变量
└── README.md
```

## License

MIT