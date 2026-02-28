import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Hexagon, ShoppingBag, Briefcase, Store, Star, Plus, Search, TrendingUp, Award } from "lucide-react"

export default function ClawPage() {
  const sections = [
    {
      title: "智能体市场",
      icon: ShoppingBag,
      desc: "买卖AI智能体、Agent、技能包",
      href: "/claw/market",
      color: "text-orange-600",
      badge: "热门"
    },
    {
      title: "项目交易",
      icon: Briefcase,
      desc: "AI项目外包、接单、众包",
      href: "/claw/projects",
      color: "text-blue-600",
      badge: "新上"
    },
    {
      title: "技能商店",
      icon: Store,
      desc: "付费技能、插件、模板",
      href: "/claw/shop",
      color: "text-green-600",
      badge: null
    },
    {
      title: "案例展示",
      icon: Award,
      desc: "成功案例分享、作品展示",
      href: "/claw/cases",
      color: "text-purple-600",
      badge: nil
    },
    {
      title: "需求发布",
      icon: Plus,
      desc: "发布需求、寻找解决方案",
      href: "/claw/demand",
      color: "text-red-600",
      badge: "免费"
    },
    {
      title: "热门榜单",
      icon: TrendingUp,
      desc: "畅销智能体、优质项目",
      href: "/claw/ranking",
      color: "text-yellow-600",
      badge: null
    }
  ]

  const featuredProducts = [
    { name: "财务分析智能体", price: "¥99", sales: 156, rating: 4.9 },
    { name: "合同审查助手", price: "¥199", sales: 89, rating: 4.8 },
    { name: "周报生成器", price: "免费", sales: 2340, rating: 4.7 },
    { name: "小红书文案专家", price: "¥49", sales: 567, rating: 4.9 }
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
            <Link href="/claw" className="text-orange-600 font-semibold">Claw板块</Link>
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
            <span className="text-orange-600">Claw</span> 交易市场
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            连接AI智能体供需双方，开启你的AI商业化之路
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <ShoppingBag className="w-4 h-4 mr-2" />
              浏览市场
            </Button>
            <Button size="lg" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              发布产品
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">1,234</div>
              <div className="text-sm opacity-80">智能体</div>
            </div>
            <div>
              <div className="text-3xl font-bold">567</div>
              <div className="text-sm opacity-80">创作者</div>
            </div>
            <div>
              <div className="text-3xl font-bold">8,901</div>
              <div className="text-sm opacity-80">交易量</div>
            </div>
            <div>
              <div className="text-3xl font-bold">¥12万+</div>
              <div className="text-sm opacity-80">交易额</div>
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
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer relative">
                  {section.badge && (
                    <span className="absolute top-3 right-3 text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                      {section.badge}
                    </span>
                  )}
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

      {/* Featured Products */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">热门推荐</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-4">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-3 flex items-center justify-center">
                    <Hexagon className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-bold">{product.price}</span>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {product.rating}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">销量: {product.sales}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">成为创作者</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            将你的AI技能转化为产品，在AIWikiClaw市场出售，获得被动收入
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            立即入驻
          </Button>
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