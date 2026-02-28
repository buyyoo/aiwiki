import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const tools = [
  {
    name: "ChatGPT",
    category: "对话AI",
    description: "OpenAI开发的大型语言模型，支持多轮对话",
    price: "免费/付费",
    rating: 4.9,
    tags: ["对话", "写作", "编程"]
  },
  {
    name: "Claude",
    category: "对话AI",
    description: "Anthropic开发的AI助手，擅长分析和长文本",
    price: "免费",
    rating: 4.8,
    tags: ["分析", "长文", "安全"]
  },
  {
    name: "Midjourney",
    category: "AI绘画",
    description: "最强AI图像生成工具",
    price: "付费",
    rating: 4.9,
    tags: ["绘画", "设计", "创意"]
  },
  {
    name: "Stable Diffusion",
    category: "AI绘画",
    description: "开源免费图像生成模型",
    price: "免费",
    rating: 4.7,
    tags: ["绘画", "开源", "本地部署"]
  },
  {
    name: "Cursor",
    category: "编程",
    description: "AI编程助手，集成GPT-4",
    price: "免费",
    rating: 4.8,
    tags: ["编程", "IDE", "代码"]
  },
  {
    name: "Notion AI",
    category: "办公",
    description: "AI写作和笔记助手",
    price: "付费",
    rating: 4.6,
    tags: ["写作", "笔记", "办公"]
  },
  {
    name: "Copy.ai",
    category: "营销",
    description: "AI营销文案生成",
    price: "免费/付费",
    rating: 4.5,
    tags: ["营销", "文案", "社交媒体"]
  },
  {
    name: "Synthesia",
    category: "视频",
    description: "AI视频生成平台",
    price: "付费",
    rating: 4.7,
    tags: ["视频", "数字人", "教育"]
  }
]

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🦞</span>
            <span className="text-xl font-bold">AIWikiClaw</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/ai" className="text-blue-600 font-semibold">AI板块</Link>
            <Link href="/wiki" className="text-slate-600 hover:text-slate-900">Wiki板块</Link>
            <Link href="/claw" className="text-slate-600 hover:text-slate-900">Claw板块</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login"><Button variant="ghost" size="sm">登录</Button></Link>
            <Button size="sm">开始使用</Button>
          </div>
        </div>
      </header>

      {/* Sub Nav */}
      <div className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm">
            <Link href="/ai/encyclopedia" className="text-slate-600 hover:text-slate-900">AI百科</Link>
            <Link href="/ai/tutorials" className="text-slate-600 hover:text-slate-900">教程中心</Link>
            <Link href="/ai/tools" className="text-blue-600 font-medium">工具库</Link>
            <Link href="/ai/news" className="text-slate-600 hover:text-slate-900">最新资讯</Link>
            <Link href="/ai/prompts" className="text-slate-600 hover:text-slate-900">Prompt库</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-600">AI</span> 工具库
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            精选主流AI工具评测与使用指南
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <span className="text-yellow-500">★ {tool.rating}</span>
                  </div>
                  <CardDescription>{tool.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">{tool.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {tool.tags.map((tag, j) => (
                      <span key={j} className="text-xs bg-slate-100 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-green-600">{tool.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 AIWikiClaw. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}