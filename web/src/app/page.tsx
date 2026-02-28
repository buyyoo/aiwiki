import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BookOpen, Claw } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦞</span>
            <span className="text-xl font-bold">AIWikiClaw</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/ai" className="text-slate-600 hover:text-slate-900">AI板块</Link>
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
          <div className="flex gap-4 justify-center">
            <Button size="lg">开始探索</Button>
            <Button size="lg" variant="outline">了解更多</Button>
          </div>
        </div>
      </section>

      {/* Three Columns */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Column */}
            <Card>
              <CardHeader>
                <Brain className="w-12 h-12 text-blue-600 mb-2" />
                <CardTitle>AI 板块</CardTitle>
                <CardDescription>智能全方面内容</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• AI百科全书</li>
                  <li>• 教程中心</li>
                  <li>• 工具库</li>
                  <li>• 最新资讯</li>
                  <li>• Prompt库</li>
                </ul>
              </CardContent>
            </Card>

            {/* Wiki Column */}
            <Card>
              <CardHeader>
                <BookOpen className="w-12 h-12 text-green-600 mb-2" />
                <CardTitle>Wiki 板块</CardTitle>
                <CardDescription>技能知识仓库</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 技能百科</li>
                  <li>• 知识库</li>
                  <li>• 模板中心</li>
                  <li>• 问答社区</li>
                  <li>• 学习路径</li>
                </ul>
              </CardContent>
            </Card>

            {/* Claw Column */}
            <Card>
              <CardHeader>
                <Claw className="w-12 h-12 text-orange-600 mb-2" />
                <CardTitle>Claw 板块</CardTitle>
                <CardDescription>智能体交易市场</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 智能体市场</li>
                  <li>• 项目交易</li>
                  <li>• 技能商店</li>
                  <li>• 案例展示</li>
                  <li>• 需求发布</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-semibold mb-2">知识沉淀</h3>
                <p className="text-sm text-slate-600">系统化整理AI相关知识</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="font-semibold mb-2">工具推荐</h3>
                <p className="text-sm text-slate-600">精选AI工具评测</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-semibold mb-2">项目交易</h3>
                <p className="text-sm text-slate-600">智能体买卖外包</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="font-semibold mb-2">社区互动</h3>
                <p className="text-sm text-slate-600">问答交流分享</p>
              </CardContent>
            </Card>
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