import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
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

      {/* Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            关于 <span className="text-blue-600">AIWikiClaw</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            打造国内领先的AI学习、知识与交易一体化平台
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🎯</div>
                <CardTitle>我们的使命</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  降低AI学习门槛，让每个人都能轻松掌握AI技能
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🚀</div>
                <CardTitle>我们的愿景</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  成为全球最大的AI知识社区和智能体交易平台
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">💎</div>
                <CardTitle>我们的价值</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  开放、共享、创新、共赢
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">核心团队</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Bruce", role: "创始人 & CEO", avatar: "👨‍💻" },
              { name: "Alex", role: "技术负责人", avatar: "👨‍🔬" },
              { name: "Sarah", role: "产品负责人", avatar: "👩‍🎨" },
              { name: "Mike", role: "运营负责人", avatar: "👨‍📊" },
            ].map((member, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-3">{member.avatar}</div>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-slate-500">{member.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle>联系我们</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <div className="font-medium">邮箱</div>
                  <div className="text-slate-600">contact@aiwikiclaw.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <div>
                  <div className="font-medium">微信</div>
                  <div className="text-slate-600">AIWikiClaw</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🌐</span>
                <div>
                  <div className="font-medium">官网</div>
                  <div className="text-slate-600">www.aiwikiclaw.com</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 AIWikiClaw. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}