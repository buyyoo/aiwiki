import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BookOpen, Lightbulb, News, Tools, MessageSquare } from "lucide-react"

export default function AIPage() {
  const sections = [
    {
      title: "AI百科",
      icon: Brain,
      desc: "系统化学习AI概念、术语、技术原理",
      href: "/ai/encyclopedia",
      color: "text-blue-600"
    },
    {
      title: "教程中心",
      icon: BookOpen,
      desc: "从入门到实战的完整学习路径",
      href: "/ai/tutorials",
      color: "text-green-600"
    },
    {
      title: "工具库",
      icon: Tools,
      desc: "精选AI工具评测、推荐与使用指南",
      href: "/ai/tools",
      color: "text-purple-600"
    },
    {
      title: "最新资讯",
      icon: News,
      desc: "AI行业动态、技术发展、应用案例",
      href: "/ai/news",
      color: "text-red-600"
    },
    {
      title: "Prompt库",
      icon: MessageSquare,
      desc: "优质Prompt分享、模板、技巧",
      href: "/ai/prompts",
      color: "text-orange-600"
    },
    {
      title: "学习指南",
      icon: Lightbulb,
      desc: "学习路线规划、经验分享",
      href: "/ai/guides",
      color: "text-yellow-600"
    }
  ]

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
            <Button variant="ghost" size="sm">登录</Button>
            <Button size="sm">开始使用</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">AI</span> 智能板块
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            探索人工智能的无限可能，从概念到实践的全方位学习资源
          </p>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Link key={index} href={section.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <section.icon className={`w-10 h-10 ${section.color} mb-2`} />
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{section.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">热门文章</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {["什么是大语言模型？", "ChatGPT使用技巧", "Midjourney入门指南", "AI绘画工具对比"].map((title, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-4">
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-slate-500 mt-2">阅读量: {1000 + i * 500}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 AIWikiClaw. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}