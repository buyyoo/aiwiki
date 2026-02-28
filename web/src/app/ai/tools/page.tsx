import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { getTools } from "@/lib/data"

export default function AIToolsPage() {
  const tools = getTools()

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
          {tools.length > 0 ? (
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
          ) : (
            <div className="text-center py-12 text-slate-500">
              <p>暂无工具数据</p>
            </div>
          )}
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