import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const products = [
  {
    name: "财务分析智能体",
    description: "自动分析财务报表，生成投资建议",
    price: 99,
    sales: 156,
    rating: 4.9,
    category: "金融"
  },
  {
    name: "合同审查助手",
    description: "AI自动识别合同风险点",
    price: 199,
    sales: 89,
    rating: 4.8,
    category: "法律"
  },
  {
    name: "周报生成器",
    description: "一键生成工作周报，月报",
    price: 0,
    sales: 2340,
    rating: 4.7,
    category: "办公"
  },
  {
    name: "小红书文案专家",
    description: "爆款文案生成，涨粉神器",
    price: 49,
    sales: 567,
    rating: 4.9,
    category: "营销"
  },
  {
    name: "Code Reviewer",
    description: "自动化代码审查与优化建议",
    price: 79,
    sales: 234,
    rating: 4.6,
    category: "开发"
  },
  {
    name: "PPT生成助手",
    description: "根据主题自动生成PPT",
    price: 129,
    sales: 345,
    rating: 4.8,
    category: "办公"
  },
  {
    name: "数据分析助手",
    description: "Excel数据分析自动化",
    price: 59,
    sales: 456,
    rating: 4.7,
    category: "数据"
  },
  {
    name: "客服机器人",
    description: "智能回复，7x24小时在线",
    price: 199,
    sales: 123,
    rating: 4.5,
    category: "客服"
  }
]

export default function ClawMarketPage() {
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
            <Link href="/claw" className="text-orange-600 font-semibold">Claw板块</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login"><Button variant="ghost" size="sm">登录</Button></Link>
            <Button size="sm">发布商品</Button>
          </div>
        </div>
      </header>

      {/* Sub Nav */}
      <div className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm">
            <Link href="/claw/market" className="text-orange-600 font-medium">智能体市场</Link>
            <Link href="/claw/projects" className="text-slate-600 hover:text-slate-900">项目交易</Link>
            <Link href="/claw/shop" className="text-slate-600 hover:text-slate-900">技能商店</Link>
            <Link href="/claw/cases" className="text-slate-600 hover:text-slate-900">案例展示</Link>
            <Link href="/claw/demand" className="text-slate-600 hover:text-slate-900">发布需求</Link>
          </div>
        </div>
      </div>

      {/* Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            🦞 AI智能体交易市场
          </h1>
          <p className="text-lg opacity-90 mb-6">
            买卖AI智能体、定制开发、技能外包
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100">浏览市场</Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
              发布商品
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">1,234</div>
              <div className="text-sm opacity-80">智能体</div>
            </div>
            <div>
              <div className="text-2xl font-bold">567</div>
              <div className="text-sm opacity-80">创作者</div>
            </div>
            <div>
              <div className="text-2xl font-bold">8,901</div>
              <div className="text-sm opacity-80">交易量</div>
            </div>
            <div>
              <div className="text-2xl font-bold">¥12万+</div>
              <div className="text-sm opacity-80">交易额</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex gap-3 mb-6">
            {["全部", "金融", "法律", "办公", "营销", "开发", "数据", "客服"].map((cat, i) => (
              <button key={i} className={`px-4 py-1.5 rounded-full text-sm ${i === 0 ? 'bg-orange-600 text-white' : 'bg-slate-100 hover:bg-slate-200'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-4xl">🤖</span>
                  </div>
                  <div className="text-xs text-slate-500 mb-1">{product.category}</div>
                  <h3 className="font-medium mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-xs text-slate-500 mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-bold">
                      {product.price === 0 ? '免费' : `¥${product.price}`}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <span>★</span>{product.rating}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-2">销量: {product.sales}</div>
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