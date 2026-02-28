"use client"

"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function Home() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // 简单搜索：跳转到对应板块
      const query = searchQuery.toLowerCase()
      if (query.includes("ai") || query.includes("gpt") || query.includes("chat")) {
        router.push("/ai")
      } else if (query.includes("skill") || query.includes("wiki")) {
        router.push("/wiki")
      } else if (query.includes("market") || query.includes("智能体") || query.includes("商品")) {
        router.push("/claw/market")
      } else {
        router.push("/ai/encyclopedia")
      }
    }
  }

  const featuredArticles = [
    { title: "什么是大语言模型？", url: "/ai/encyclopedia", icon: "🧠" },
    { title: "ChatGPT使用技巧", url: "/ai/tutorials", icon: "💬" },
    { title: "AI工具推荐", url: "/ai/tools", icon: "🛠️" },
    { title: "智能体市场", url: "/claw/market", icon: "🛒" },
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
            <Link href="/ai" className="text-slate-600 hover:text-slate-900">AI板块</Link>
            <Link href="/wiki" className="text-slate-600 hover:text-slate-900">Wiki板块</Link>
            <Link href="/claw" className="text-slate-600 hover:text-slate-900">Claw板块</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">登录</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">注册</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero with Search */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            你的<span className="text-blue-600">AI</span>学习 · 
            <span className="text-green-600">知识</span> · 
            <span className="text-orange-600">交易</span>一站式平台
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            整合AI智能全方面内容、Wiki技能知识库、Claw智能体交易市场
          </p>
          
          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索AI知识、技能、商品..."
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button type="submit" size="lg">搜索</Button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="flex gap-4 justify-center mt-6">
            {featuredArticles.map((item, i) => (
              <Link key={i} href={item.url}>
                <span className="text-2xl mr-1">{item.icon}</span>
                <span className="text-blue-600 hover:underline">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Three Columns */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Column */}
            <Link href="/ai">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-2">🧠</div>
                  <CardTitle>AI 板块</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• AI百科全书</li>
                    <li>• 教程中心</li>
                    <li>• 工具库</li>
                    <li>• Prompt库</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Wiki Column */}
            <Link href="/wiki">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-2">📚</div>
                  <CardTitle>Wiki 板块</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• 技能百科</li>
                    <li>• 知识库</li>
                    <li>• 模板中心</li>
                    <li>• 学习路径</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Claw Column */}
            <Link href="/claw">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-2">🦞</div>
                  <CardTitle>Claw 板块</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• 智能体市场</li>
                    <li>• 项目交易</li>
                    <li>• 需求广场</li>
                    <li>• 发布商品</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">1,000+</div>
              <div className="text-sm opacity-80">AI文章</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm opacity-80">技能模板</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-80">智能体</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-sm opacity-80">用户</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 AIWikiClaw. All rights reserved.</p>
          <p className="text-sm mt-2">Powered by OpenClaw</p>
        </div>
      </footer>
    </div>
  )
}