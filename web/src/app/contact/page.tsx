"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contactMethods = [
  {
    icon: "📧",
    title: "邮箱",
    value: "contact@aiwikiclaw.com",
    desc: "工作日24小时内回复"
  },
  {
    icon: "💬",
    title: "微信",
    value: "AIWikiClaw",
    desc: "添加时请注明来意"
  },
  {
    icon: "📱",
    title: "电话",
    value: "400-888-8888",
    desc: "周一至周五 9:00-18:00"
  },
  {
    icon: "🌐",
    title: "官网",
    value: "www.aiwikiclaw.com",
    desc: "24小时在线"
  }
]

const faqCategories = [
  {
    category: "账户问题",
    questions: [
      { q: "如何注册账号？", a: "点击首页右上角注册，填写邮箱和密码即可" },
      { q: "忘记密码怎么办？", a: "在登录页面点击忘记密码，通过邮箱重置" },
      { q: "如何修改个人信息？", a: "进入个人中心 -> 设置 中修改" }
    ]
  },
  {
    category: "付费问题",
    questions: [
      { q: "支持哪些支付方式？", a: "支持微信、支付宝、银行卡等" },
      { q: "可以开具发票吗？", a: "可以，在个人中心 -> 账单 中申请" },
      { q: "套餐可以中途更换吗？", a: "可以，随时可以升级或降级套餐" }
    ]
  },
  {
    category: "技术问题",
    questions: [
      { q: "API调用频率限制是多少？", a: "免费版50次/天，专业版1000次/天，企业版无限" },
      { q: "支持哪些编程语言？", a: "Python、JavaScript、Java、Go等主流语言" },
      { q: "响应时间是多少？", a: "平均响应时间 < 2秒" }
    ]
  }
]

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("留言成功！我们会尽快回复你。")
    setContactForm({ name: "", email: "", message: "" })
  }

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
            📞 联系我们
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            有问题？我们随时在线为你解答
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{method.icon}</div>
                  <h3 className="font-bold mb-1">{method.title}</h3>
                  <p className="text-blue-600 font-medium">{method.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{method.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>留言板</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">姓名</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="请输入你的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">邮箱</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">留言内容</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="请详细描述你的问题..."
                    />
                  </div>
                  <Button type="submit" className="w-full">提交留言</Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold mb-4">常见问题</h2>
              
              {/* Category Tabs */}
              <div className="flex gap-2 mb-4">
                {faqCategories.map((cat, i) => (
                  <Button
                    key={i}
                    variant={selectedCategory === i ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(i)}
                  >
                    {cat.category}
                  </Button>
                ))}
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {faqCategories[selectedCategory].questions.map((q, i) => (
                  <Card key={i}>
                    <CardContent className="pt-4">
                      <h3 className="font-medium mb-1">Q: {q.q}</h3>
                      <p className="text-sm text-slate-600">A: {q.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Cooperation */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">🤝 商务合作</h2>
          <p className="text-slate-600 mb-6">
            欢迎AI服务商、渠道商、企业客户合作共赢
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">申请成为代理商</Button>
            <Button size="lg" variant="outline">企业定制方案</Button>
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