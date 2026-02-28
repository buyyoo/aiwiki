import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BookOpen, Database, FileText, MessageCircle, Route, GraduationCap } from "lucide-react"

const skills = [
  {
    name: "OpenClaw",
    description: "开源AI助手框架",
    category: "AI框架",
    installs: "1.2K",
    rating: 4.8
  },
  {
    name: "skill-excel",
    description: "Excel操作技能",
    category: "办公",
    installs: "890",
    rating: 4.9
  },
  {
    name: "skill-financial-analysis",
    description: "财务分析技能",
    category: "金融",
    installs: "567",
    rating: 4.7
  },
  {
    name: "skill-data-chart",
    description: "数据图表生成",
    category: "可视化",
    installs: "453",
    rating: 4.6
  },
  {
    name: "skill-report-gen",
    description: "报告自动生成",
    category: "办公",
    installs: "389",
    rating: 4.8
  },
  {
    name: "legal-cog",
    description: "法律文档分析",
    category: "法律",
    installs: "234",
    rating: 4.5
  }
]

export default function WikiSkillsPage() {
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
            <Link href="/wiki" className="text-green-600 font-semibold">Wiki板块</Link>
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
            <Link href="/wiki/skills" className="text-green-600 font-medium">技能百科</Link>
            <Link href="/wiki/knowledge" className="text-slate-600 hover:text-slate-900">知识库</Link>
            <Link href="/wiki/templates" className="text-slate-600 hover:text-slate-900">模板中心</Link>
            <Link href="/wiki/qa" className="text-slate-600 hover:text-slate-900">问答社区</Link>
            <Link href="/wiki/paths" className="text-slate-600 hover:text-slate-900">学习路径</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-600">技能</span>百科
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            OpenClaw技能库、插件使用指南与开发文档
          </p>
        </div>
      </section>

      {/* Sub Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="hover:shadow-md cursor-pointer text-center py-6">
              <BookOpen className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <h3 className="font-medium">OpenClaw技能</h3>
            </Card>
            <Card className="hover:shadow-md cursor-pointer text-center py-6">
              <Database className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium">数据库技能</h3>
            </Card>
            <Card className="hover:shadow-md cursor-pointer text-center py-6">
              <FileText className="w-10 h-10 text-purple-600 mx-auto mb-2" />
              <h3 className="font-medium">API集成</h3>
            </Card>
          </div>

          {/* Skills List */}
          <h2 className="text-xl font-bold mb-6">热门技能</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{skill.name}</CardTitle>
                    <span className="text-yellow-500">★ {skill.rating}</span>
                  </div>
                  <CardDescription>{skill.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">{skill.description}</p>
                  <div className="text-sm text-slate-500">
                    📥 {skill.installs} 次安装
                  </div>
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