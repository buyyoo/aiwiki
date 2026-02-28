import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Database, FileText, MessageCircle, Route, GraduationCap, Package, Search } from "lucide-react"

export default function WikiPage() {
  const sections = [
    {
      title: "技能百科",
      icon: BookOpen,
      desc: "OpenClaw技能文档、插件使用指南",
      href: "/wiki/skills",
      color: "text-green-600"
    },
    {
      title: "知识库",
      icon: Database,
      desc: "行业知识整理、技术文档",
      href: "/wiki/knowledge",
      color: "text-blue-600"
    },
    {
      title: "模板中心",
      icon: FileText,
      desc: "Prompt模板、工作流模板、设计模板",
      href: "/wiki/templates",
      color: "text-purple-600"
    },
    {
      title: "问答社区",
      icon: MessageCircle,
      desc: "问题解答、经验分享、交流互助",
      href: "/wiki/qa",
      color: "text-orange-600"
    },
    {
      title: "学习路径",
      icon: Route,
      desc: "技能学习路线图、进阶指南",
      href: "/wiki/paths",
      color: "text-red-600"
    },
    {
      title: " Prompt工程",
      icon: GraduationCap,
      desc: "提示词技巧、模板、可复用结构",
      href: "/wiki/prompt",
      color: "text-yellow-600"
    }
  ]

  const popularTopics = [
    { title: "OpenClaw快速入门", count: 120 },
    { title: "技能安装与配置", count: 95 },
    { title: "定时任务设置", count: 88 },
    { title: "多渠道集成", count: 76 },
    { title: "自定义技能开发", count: 65 },
    { title: "API对接指南", count: 54 }
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
            <Link href="/wiki" className="text-green-600 font-semibold">Wiki板块</Link>
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
            <span className="text-green-600">Wiki</span> 知识板块
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            沉淀知识资产，打造可复用的技能知识库
          </p>
          
          {/* Search */}
          <div className="max-w-xl mx-auto">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="搜索知识、模板、教程..." 
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                <Search className="w-4 h-4 mr-2" />
                搜索
              </Button>
            </div>
          </div>
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

      {/* Popular Topics */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">热门话题</h2>
          <div className="flex flex-wrap gap-3">
            {popularTopics.map((topic, i) => (
              <Link key={i} href={`/wiki/qa?q=${encodeURIComponent(topic.title)}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="py-3 px-4 flex items-center gap-2">
                    <span>{topic.title}</span>
                    <span className="text-xs bg-slate-200 px-2 py-0.5 rounded-full">{topic.count}</span>
                  </CardContent>
                </Card>
              </Link>
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