import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tutorials = [
  {
    title: "ChatGPT从入门到实战",
    description: "全面掌握ChatGPT的使用技巧，包括对话优化、角色扮演、代码生成等",
    level: "入门",
    duration: "2小时",
    lessons: 15,
    category: "AI工具"
  },
  {
    title: "Midjourney AI绘画教程",
    description: "学会使用Midjourney生成精美图片，掌握提示词技巧和参数设置",
    level: "入门",
    duration: "1.5小时",
    lessons: 12,
    category: "AI绘画"
  },
  {
    title: "Python AI编程实战",
    description: "使用Python调用OpenAI API开发自己的AI应用",
    level: "进阶",
    duration: "4小时",
    lessons: 25,
    category: "编程"
  },
  {
    title: "AI提示词工程指南",
    description: "系统学习Prompt工程，让AI输出更精准、更专业",
    level: "入门",
    duration: "1小时",
    lessons: 8,
    category: "提示词"
  },
  {
    title: "LangChain开发实战",
    description: "使用LangChain构建复杂的AI应用和Agent",
    level: "高级",
    duration: "6小时",
    lessons: 30,
    category: "编程"
  },
  {
    title: "AI产品设计课",
    description: "学习如何设计基于AI的SaaS产品",
    level: "进阶",
    duration: "3小时",
    lessons: 20,
    category: "产品"
  }
]

export default function AITutorialsPage() {
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
            <Link href="/ai/encyclopedia" className="text-slate-600 hover:text-slate-900">AI百科</Link>
            <Link href="/ai/tutorials" className="text-blue-600 font-medium">教程中心</Link>
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
            <span className="text-green-600">教程</span>中心
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            从入门到实战，系统化学习AI技能
          </p>
        </div>
      </section>

      {/* Tutorial Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {["全部", "AI工具", "AI绘画", "编程", "提示词", "产品"].map((cat, i) => (
              <button key={i} className={`px-4 py-2 rounded-full text-sm ${
                i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-100 hover:bg-slate-200'
              }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Tutorials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {tutorial.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      tutorial.level === '入门' ? 'bg-green-100 text-green-700' :
                      tutorial.level === '进阶' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {tutorial.level}
                    </span>
                  </div>
                  <CardTitle>{tutorial.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">{tutorial.description}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>⏱ {tutorial.duration}</span>
                    <span>📚 {tutorial.lessons}节课</span>
                  </div>
                  <Button className="w-full mt-4">开始学习</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">成为创作者</h2>
          <p className="mb-6">分享你的AI知识和技能，赚取收入</p>
          <Button size="lg" variant="secondary">
            立即发布教程
          </Button>
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