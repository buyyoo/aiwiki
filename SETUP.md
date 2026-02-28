# AIWikiClaw 项目初始化日志

**时间**: 2026-02-27 11:47  
**状态**: 开始初始化

## 步骤 1: 创建 Next.js 项目

```bash
npx create-next-app@latest aiwikiclaw --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-turbopack
```

## 步骤 2: 安装 shadcn/ui

```bash
cd aiwikiclaw
npx shadcn@latest init
npx shadcn@latest add button card input form textarea dropdown-menu tabs avatar badge separator sheet navigation-menu
```

## 步骤 3: 安装依赖

```bash
npm install @supabase/supabase-js @supabase/ssr next-auth @tanstack/react-query zustand react-hook-form zod @hookform/resolvers framer-motion lucide-react clsx tailwind-merge
```

## 步骤 4: 配置环境变量

创建 `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 步骤 5: 开始开发

```bash
npm run dev
```