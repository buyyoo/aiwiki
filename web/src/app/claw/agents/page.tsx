import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// 个性化智能体数据
const aiAgents = [
  {
    id: "openclaw",
    name: "OpenClaw",
    logo: "🦞",
    color: "from-orange-500 to-red-500",
    description: "benz_lee007 系统官方智能体，基于最新AI技术构建的全能助手",
    tagline: "你的私人AI助手",
    features: ["多模型支持", "深度学习", "24小时在线", "语音唤醒"],
    price: "免费",
    users: "10,000+",
    rating: 4.9,
    platforms: ["Web", "Windows", "macOS", "iOS", "Android"],
    url: "https://openclaw.ai",
    download: "https://openclaw.ai/download"
  },
  {
    id: "oneclaw",
    name: "OneClaw",
    logo: "🦀",
    color: "from-blue-500 to-cyan-500",
    description: "专注于个人效率提升的智能助手，集成任务管理、日程规划、笔记整理",
    tagline: "效率提升，从OneClaw开始",
    features: ["智能日程", "任务管理", "自动提醒", "数据同步"],
    price: "免费",
    users: "5,000+",
    rating: 4.8,
    platforms: ["Web", "Windows", "macOS"],
    url: "https://oneclaw.ai",
    download: "https://oneclaw.ai/download"
  },
  {
    id: "kimiclaw",
    name: "KimiClaw",
    logo: "🌙",
    color: "from-purple-500 to-pink-500",
    description: "基于Kimi大模型深度定制，长文本处理能力超强，支持超长文档分析",
    tagline: "超长上下文，分析无限",
    features: ["100万Token上下文", "文档分析", "会议纪要", "多语言翻译"],
    price: "¥29/月",
    users: "8,000+",
    rating: 4.9,
    platforms: ["Web", "Windows", "macOS"],
    url: "https://kimiclaw.ai",
    download: "https://kimiclaw.ai/download"
  },
  {
    id: "copaw",
    name: "CoPaw",
    logo: "🐾",
    color: "from-green-500 to-emerald-500",
    description: "基于Claude深度定制，编程能力超强，同时具备出色的写作和推理能力",
    tagline: "编程之爪，逻辑之王",
    features: ["代码生成", "Bug修复", "架构设计", "技术文档"],
    price: "¥39/月",
    users: "6,500+",
    rating: 4.9,
    platforms: ["Web", "VS Code插件", "Windows", "macOS"],
    url: "https://copaw.dev",
    download: "https://copaw.dev/download"
  },
  {
    id: "clawx",
    name: "ClawX",
    logo: "⚡",
    color: "from-yellow-500 to-orange-500",
    description: "极速响应的AI助手，采用分布式架构，全球节点加速，极低延迟",
    tagline: "极速响应，极致体验",
    features: ["<100ms延迟", "全球CDN", "离线可用", "多语言"],
    price: "¥19/月",
    users: "12,000+",
    rating: 4.7,
    platforms: ["Web", "Windows", "macOS", "Linux", "iOS", "Android"],
    url: "https://clawx.io",
    download: "https://clawx.io/download"
  },
  {
    id: "financeclaw",
    name: "FinanceClaw",
    logo: "💰",
    color: "from-green-600 to-teal-600",
    description: "专注于财务金融领域的专业AI助手，股票分析、理财规划、税务咨询",
    tagline: "您的专属理财顾问",
    features: ["财报分析", "股票推荐", "风险评估", "税务筹划"],
    price: "¥99/月",
    users: "3,000+",
    rating: 4.8,
    platforms: ["Web", "Windows"],
    url: "https://financeclaw.com",
    download: "https://financeclaw.com/download"
  },
  {
    id: "lawclaw",
    name: "LawClaw",
    logo: "⚖️",
    color: "from-slate-600 to-slate-800",
    description: "法律领域的专业AI助手，合同审查、法规查询、案例分析",
    tagline: "专业法律AI助手",
    features: ["合同审查", "法规查询", "案例分析", "法律文书"],
    price: "¥199/月",
    users: "1,500+",
    rating: 4.9,
    platforms: ["Web", "Windows"],
    url: "https://lawclaw.com",
    download: "https://lawclaw.com/download"
  },
  {
    id: "medclaw",
    name: "MedClaw",
    logo: "🏥",
    color: "from-red-500 to-pink-500",
    description: "医疗健康领域的AI助手，症状分析、用药提醒、健康管理",
    tagline: "您的健康管家",
    features: ["症状分析", "用药提醒", "健康建议", "报告解读"],
    price: "¥149/月",
    users: "2,000+",
    rating: 4.7,
    platforms: ["Web", "iOS", "Android"],
    url: "https://medclaw.com",
    download: "https://medclaw.com/download"
  },
]

export default function AgentsPage() {
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
            <Link href="/models" className="text-slate-600 hover:text-slate-900">模型广场</Link>
            <Link href="/claw" className="text-slate-600 hover:text-slate-900">Claw板块</Link>
            <Link href="/claw/agents">
              <span className="text-blue-600 font-medium">智能体</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Sub Nav */}
      <div className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm">
            <Link href="/claw/market" className="text-slate-600 hover:text-slate-900">智能体市场</Link>
            <span className="text-blue-600 font-medium">精选智能体</span>
            <Link href="/claw/demands" className="text-slate-600 hover:text-slate-900">需求广场</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            🦞 <span className="text-orange-600">Claw</span>系列智能体
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            基于OpenClaw深度定制的各类专业AI智能体，总有一款适合你
          </p>
          
          {/* Featured */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-6xl">🦞</span>
              <div className="text-left">
                <h2 className="text-2xl font-bold">OpenClaw 官方</h2>
                <p className="opacity-90">benz_lee007 系统核心智能体</p>
              </div>
            </div>
            <p className="mb-6 opacity-90">全能型AI助手，支持多模型、深度学习、语音唤醒</p>
            <div className="flex gap-4 justify-center">
              <Button variant="secondary" size="lg">网页使用</Button>
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/20">
                下载客户端
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">全部智能体</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aiAgents.map((agent) => (
              <Card key={agent.id} className="hover:shadow-xl transition-all overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${agent.color}`}></div>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{agent.logo}</span>
                    <div>
                      <h3 className="font-bold text-lg">{agent.name}</h3>
                      <span className="text-xs text-slate-500">★ {agent.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">{agent.description}</p>
                  <p className="text-xs text-orange-600 mb-3 font-medium">{agent.tagline}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {agent.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-green-600 font-bold">{agent.price}</span>
                    <span className="text-slate-500">{agent.users}用户</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm" asChild>
                      <Link href={agent.url}>网页使用</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={agent.download}>下载</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">多平台支持</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: "🌐", name: "Web网页" },
              { icon: "🖥️", name: "Windows" },
              { icon: "🍎", name: "macOS" },
              { icon: "🐧", name: "Linux" },
              { icon: "📱", name: "iOS" },
              { icon: "🤖", name: "Android" },
              { icon: "📦", name: "VS Code" },
            ].map((platform, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-2">{platform.icon}</div>
                <div className="text-sm">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">加入我们</h2>
          <p className="mb-6">10万+用户正在使用Claw系列智能体</p>
          <Button size="lg" variant="secondary">立即开始使用</Button>
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