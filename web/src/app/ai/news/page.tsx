import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const news = [
  {
    title: "OpenAI发布GPT-5，性能超越GPT-4三倍",
    time: "2小时前",
    category: "大模型",
    views: 2345,
    summary: "OpenAI正式发布GPT-5，在多项基准测试中表现优异..."
  },
  {
    title: " Anthropic推出Claude 4，主打安全可控",
    time: "5小时前",
    category: "大模型",
    views: 1876,
    summary: "Claude 4强调AI安全性和可控性，在复杂推理任务中表现突出..."
  },
  {
    title: " Midjourney V7发布，图像生成速度提升5倍",
    time: "8小时前",
    category: "AI绘画",
    views: 3421,
    summary: "新版Midjourney支持更精细的控制，生成速度大幅提升..."
  },
  {
    title: "国内首个AI法案通过，严禁深度伪造",
    time: "12小时前",
    category: "政策法规",
    views: 1234,
    summary: "全国人大通过AI监管法案，对深度伪造技术进行严格限制..."
  },
  {
    title: " ChatGPT企业版用户突破100万",
    time: "昨天",
    category: "行业动态",
    views: 987,
    summary: "OpenAI宣布ChatGPT Enterprise付费用户达到里程碑..."
  },
  {
    title: " AI初创公司Inflection AI被微软收购",
    time: "昨天",
    category: "行业动态",
    views: 1567,
    summary: "微软完成对Inflection AI的收购，强化AI人才布局..."
  },
  {
    title: " TensorFlow 3.0发布，全面支持PyTorch生态",
    time: "2天前",
    category: "技术",
    views: 2341,
    summary: "新版TensorFlow整合更多功能，简化AI开发流程..."
  },
  {
    title: " 英伟达发布新一代AI芯片H200",
    time: "3天前",
    category: "硬件",
    views: 4523,
    summary: "H200性能比H100提升90%，专为大语言模型训练设计..."
  }
]

export default function NewsPage() {
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
        </div>
      </header>

      {/* Sub Nav */}
      <div className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm">
            <Link href="/ai/encyclopedia" className="text-slate-600 hover:text-slate-900">AI百科</Link>
            <Link href="/ai/tutorials" className="text-slate-600 hover:text-slate-900">教程中心</Link>
            <Link href="/ai/tools" className="text-slate-600 hover:text-slate-900">工具库</Link>
            <Link href="/ai/news" className="text-blue-600 font-medium">最新资讯</Link>
            <Link href="/ai/prompts" className="text-slate-600 hover:text-slate-900">Prompt库</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            📰 <span className="text-blue-600">AI资讯</span>
          </h1>
          <p className="text-slate-600">追踪AI行业最新动态</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {["全部", "大模型", "AI绘画", "行业动态", "政策法规", "技术", "硬件"].map((cat, i) => (
              <button key={i} className={`px-4 py-1.5 rounded-full text-sm ${
                i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-100 hover:bg-slate-200'
              }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-4">
            {news.map((item, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-500">{item.time}</span>
                      </div>
                      <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 mb-2">{item.summary}</p>
                      <span className="text-xs text-slate-400">👁 {item.views}次阅读</span>
                    </div>
                    <Button variant="outline" size="sm">阅读</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">订阅AI资讯</h2>
          <p className="text-slate-600 mb-6">每天获取最新AI动态</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="输入你的邮箱"
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <Button>订阅</Button>
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