import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BookOpen, Wrench, Newspaper, MessageSquare, Lightbulb } from "lucide-react"

const articles = [
  {
    title: "什么是大语言模型（LLM）？",
    desc: "全面解析LLM的工作原理、发展历史和应用场景",
    category: "AI百科",
    views: 1250,
    date: "2026-02-20"
  },
  {
    title: "ChatGPT使用技巧大全",
    desc: "30个实用技巧，让你的ChatGPT工作效率翻倍",
    category: "教程",
    views: 2340,
    date: "2026-02-18"
  },
  {
    title: "Midjourney入门指南",
    desc: "从注册到出图，一站式AI绘画教学",
    category: "教程",
    views: 1890,
    date: "2026-02-15"
  },
  {
    title: "2026年AI工具推荐",
    desc: "精选50+款免费好用的AI工具",
    category: "工具库",
    views: 3210,
    date: "2026-02-10"
  },
  {
    title: "Prompt工程实战",
    desc: "如何写出高质量的提示词",
    category: "Prompt库",
    views: 1560,
    date: "2026-02-08"
  },
  {
    title: "AIAgent发展趋势",
    desc: "AI智能体的现状与未来展望",
    category: "行业动态",
    views: 980,
    date: "2026-02-05"
  }
]

export default function AIEncyclopediaPage() {
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
            <Link href="/ai" className="text-slate-600 hover:text-slate-900">AI板块</Link>
            <Link href="/wiki" className="text-slate-600 hover:text-slate-900">Wiki板块</Link>
            <Link href="/claw" className="text-slate-600 hover:text-slate-900">Claw板块</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">登录</Button>
            </Link>
            <Button size="sm">开始使用</Button>
          </div>
        </div>
      </header>

      {/* Sub Nav */}
      <div className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm">
            <Link href="/ai/encyclopedia" className="text-blue-600 font-medium">AI百科</Link>
            <Link href="/ai/tutorials" className="text-slate-600 hover:text-slate-900">教程中心</Link>
            <Link href="/ai/tools" className="text-slate-600 hover:text-slate-900">工具库</Link>
            <Link href="/ai/news" className="text-slate-600 hover:text-slate-900">最新资讯</Link>
            <Link href="/ai/prompts" className="text-slate-600 hover:text-slate-900">Prompt库</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-blue-600">AI</span> 百科全书
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            从概念到实践，系统化学习人工智能知识
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-xs text-blue-600 mb-2">{article.category}</div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">{article.desc}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>👁 {article.views}</span>
                    <span>📅 {article.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 AIWikiClaw. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}