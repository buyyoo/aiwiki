import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// 客户端下载数据
const clients = [
  {
    name: "OpenClaw",
    logo: "🦞",
    description: "官方旗舰客户端",
    version: "v2.5.0",
    date: "2026-02-28",
    platforms: [
      { name: "Windows", icon: "🪟", size: "128MB", url: "#" },
      { name: "macOS", icon: "🍎", size: "156MB", url: "#" },
      { name: "Linux", icon: "🐧", size: "89MB", url: "#" },
    ]
  },
  {
    name: "OneClaw",
    logo: "🦀",
    description: "效率提升助手",
    version: "v1.8.0",
    date: "2026-02-20",
    platforms: [
      { name: "Windows", icon: "🪟", size: "98MB", url: "#" },
      { name: "macOS", icon: "🍎", size: "112MB", url: "#" },
    ]
  },
  {
    name: "KimiClaw",
    logo: "🌙",
    description: "长文本处理专家",
    version: "v2.1.0",
    date: "2026-02-25",
    platforms: [
      { name: "Windows", icon: "🪟", size: "145MB", url: "#" },
      { name: "macOS", icon: "🍎", size: "168MB", url: "#" },
    ]
  },
  {
    name: "CoPaw",
    logo: "🐾",
    description: "编程专用助手",
    version: "v1.5.0",
    date: "2026-02-18",
    platforms: [
      { name: "Windows", icon: "🪟", size: "78MB", url: "#" },
      { name: "macOS", icon: "🍎", size: "92MB", url: "#" },
      { name: "VS Code", icon: "📦", size: "25MB", url: "#" },
    ]
  },
]

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🦞</span>
            <span className="text-xl font-bold">AIWikiClaw</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            📥 <span className="text-blue-600">客户端</span>下载
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            下载各平台客户端，随时随地使用AI智能体
          </p>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Web Login */}
          <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">🌐 网页版</h2>
                  <p className="opacity-90 mb-4">无需下载，直接在浏览器中使用</p>
                  <Link href="https://openclaw.ai">
                    <Button variant="secondary" size="lg">立即访问</Button>
                  </Link>
                </div>
                <div className="text-6xl hidden md:block">🌐</div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Apps */}
          <Card className="mb-8 bg-gradient-to-r from-green-500 to-teal-500 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">📱 移动端APP</h2>
                  <p className="opacity-90 mb-4">iOS和Android随时随地使用</p>
                  <div className="flex gap-4">
                    <Button variant="secondary" size="lg">iOS下载</Button>
                    <Button variant="secondary" size="lg">Android下载</Button>
                  </div>
                </div>
                <div className="text-6xl hidden md:block">📱</div>
              </div>
            </CardContent>
          </Card>

          {/* Desktop Clients */}
          <h2 className="text-2xl font-bold mb-6">🖥️ 桌面客户端</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {clients.map((client) => (
              <Card key={client.name} className="hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{client.logo}</span>
                    <div>
                      <h3 className="font-bold text-xl">{client.name}</h3>
                      <p className="text-sm text-slate-500">{client.description}</p>
                      <p className="text-xs text-slate-400">版本 {client.version} · {client.date}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {client.platforms.map((platform, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{platform.icon}</span>
                          <span>{platform.name}</span>
                          <span className="text-xs text-slate-500">({platform.size})</span>
                        </div>
                        <Button size="sm">下载</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">系统要求</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-4 text-center">
                  <div className="text-3xl mb-2">🪟</div>
                  <h3 className="font-bold mb-2">Windows</h3>
                  <p className="text-sm text-slate-500">Windows 10 及以上<br/>4GB+ 内存<br/>500MB 磁盘空间</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 text-center">
                  <div className="text-3xl mb-2">🍎</div>
                  <h3 className="font-bold mb-2">macOS</h3>
                  <p className="text-sm text-slate-500">macOS 11 及以上<br/>4GB+ 内存<br/>500MB 磁盘空间</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 text-center">
                  <div className="text-3xl mb-2">🐧</div>
                  <h3 className="font-bold mb-2">Linux</h3>
                  <p className="text-sm text-slate-500">Ubuntu 20.04+<br/>4GB+ 内存<br/>500MB 磁盘空间</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center">常见问题</h2>
          <div className="space-y-4">
            {[
              { q: "客户端是否免费？", a: "基础功能免费，高级功能需要订阅" },
              { q: "支持多语言吗？", a: "支持中文、英文等多种语言" },
              { q: "数据同步吗？", a: "登录账号后自动同步数据" },
              { q: "可以离线使用吗？", a: "部分功能支持离线，基本功能需要网络" },
            ].map((faq, i) => (
              <Card key={i}>
                <CardContent className="pt-4">
                  <h3 className="font-medium mb-1">Q: {faq.q}</h3>
                  <p className="text-sm text-slate-600">A: {faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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