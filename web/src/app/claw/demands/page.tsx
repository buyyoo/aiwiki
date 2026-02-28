import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const demands = [
  {
    title: "开发一个电商智能客服",
    category: "智能体开发",
    budget: "5000-8000元",
    description: "需要能回答商品信息、处理售后问题、推荐商品的客服机器人",
    proposals: 5,
    status: "进行中",
    views: 234
  },
  {
    title: "财务报表分析智能体",
    category: "数据分析",
    budget: "3000-5000元",
    description: "能自动读取Excel/CSV财务报表，生成分析报告和可视化图表",
    proposals: 3,
    status: "待接单",
    views: 156
  },
  {
    title: "Midjourney批量出图工具",
    category: "API集成",
    budget: "2000-3000元",
    description: "需要批量调用Midjourney API，支持批量prompt和多账号轮换",
    proposals: 8,
    status: "进行中",
    views: 412
  },
  {
    title: "小红书文案生成器",
    category: "技能定制",
    budget: "1500-2500元",
    description: "根据产品特点自动生成小红书风格的种草文案",
    proposals: 12,
    status: "已完成",
    views: 567
  },
  {
    title: "企业知识库问答系统",
    category: "知识库",
    budget: "10000-20000元",
    description: "基于私有文档的企业内部问答系统，需要RAG能力",
    proposals: 2,
    status: "待接单",
    views: 89
  },
  {
    title: "AI写小说辅助工具",
    category: "工具开发",
    budget: "3000-5000元",
    description: "帮助小说作者生成情节、人物描写、世界观设定等",
    proposals: 6,
    status: "进行中",
    views: 321
  }
]

export default function DemandsPage() {
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
            <Link href="/claw/demand">
              <Button size="sm">发布需求</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Sub Nav */}
      <div className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm">
            <Link href="/claw/market" className="text-slate-600 hover:text-slate-900">智能体市场</Link>
            <Link href="/claw/projects" className="text-slate-600 hover:text-slate-900">项目交易</Link>
            <Link href="/claw/demands" className="text-orange-600 font-medium">需求广场</Link>
            <Link href="/claw/demand" className="text-slate-600 hover:text-slate-900">发布需求</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            🛒 <span className="text-orange-600">需求</span>广场
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            发布你的AI项目需求，等待开发者接单
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {["全部", "智能体开发", "API集成", "数据分析", "技能定制", "知识库"].map((cat, i) => (
              <button key={i} className={`px-4 py-1.5 rounded-full text-sm ${
                i === 0 ? 'bg-orange-600 text-white' : 'bg-slate-100 hover:bg-slate-200'
              }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Demands List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-4">
            {demands.map((demand, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-lg">{demand.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          demand.status === '进行中' ? 'bg-blue-100 text-blue-700' :
                          demand.status === '待接单' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {demand.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{demand.description}</p>
                      <div className="flex items-center gap-6 text-sm text-slate-500">
                        <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded">
                          {demand.budget}
                        </span>
                        <span>📂 {demand.category}</span>
                        <span>💬 {demand.proposals}个报价</span>
                        <span>👁 {demand.views}次浏览</span>
                      </div>
                    </div>
                    <Button className="ml-4">查看详情</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">有需求？立即发布</h2>
          <p className="text-slate-600 mb-6">快速对接优质开发者</p>
          <Link href="/claw/demand">
            <Button size="lg">发布需求</Button>
          </Link>
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