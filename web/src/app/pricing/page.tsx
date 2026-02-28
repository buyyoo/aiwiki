"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

// 定价方案
const plans = [
  {
    name: "免费版",
    price: "¥0",
    period: "永久",
    description: "适合个人学习体验",
    features: [
      "基础AI对话",
      "每日50次请求",
      "标准响应速度",
      " basic模型",
      "社区支持"
    ],
    notIncluded: [
      "高级模型",
      "API调用",
      "自定义智能体"
    ],
    cta: "免费注册",
    popular: false
  },
  {
    name: "专业版",
    price: "¥99",
    period: "/月",
    description: "适合个人开发者",
    features: [
      "无限AI对话",
      "每日1000次API调用",
      "高速响应",
      "GPT-4/Claude/Gemini",
      "自定义智能体",
      "优先技术支持",
      "数据导出"
    ],
    notIncluded: [
      "企业级部署"
    ],
    cta: "立即升级",
    popular: true
  },
  {
    name: "企业版",
    price: "¥999",
    period: "/月",
    description: "适合企业团队",
    features: [
      "无限API调用",
      "所有模型无限用",
      "专属服务器",
      "私有模型训练",
      "7x24技术支持",
      "SLA保障",
      "定制开发",
      "独立域名"
    ],
    notIncluded: [],
    cta: "联系销售",
    popular: false
  }
]

// 按量计费
const payAsYouGo = [
  { model: "GPT-4o", input: "¥0.45/1K", output: "¥1.5/1K" },
  { model: "GPT-3.5", input: "¥0.015/1K", output: "¥0.06/1K" },
  { model: "Claude 4", input: "¥1.5/1K", output: "¥7.5/1K" },
  { model: "DeepSeek V3", input: "¥0.02/1K", output: "¥0.06/1K" },
  { model: "Qwen 72B", input: "¥0.06/1K", output: "¥0.12/1K" },
  { model: "Gemini Pro", input: "¥0.035/1K", output: "¥0.14/1K" },
]

export default function PricingPage() {
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
            <Link href="/models">模型广场</Link>
            <Link href="/pricing" className="text-blue-600 font-medium">价格</Link>
            <Link href="/download">下载</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            💰 透明<span className="text-blue-600">定价</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            选择适合你的方案，按需付费，无隐藏费用
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <Card 
                key={i} 
                className={`relative ${plan.popular ? 'ring-2 ring-blue-600 shadow-xl' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    最受欢迎
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <p className="text-slate-500 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-400">
                        <span className="w-4 h-4">×</span>
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pay as you go */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">📊 按量计费</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">模型</th>
                      <th className="text-right py-2">输入价格</th>
                      <th className="text-right py-2">输出价格</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payAsYouGo.map((item, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-3 font-medium">{item.model}</td>
                        <td className="py-3 text-right text-green-600">{item.input}</td>
                        <td className="py-3 text-right text-green-600">{item.output}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-sm text-slate-500 mt-4 text-center">
                  * 按量计费仅限专业版及以上套餐
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-8">❓ 常见问题</h2>
          <div className="space-y-4">
            {[
              { q: "如何升级套餐？", a: "在个人中心 → 套餐管理 中选择升级即可" },
              { q: "可以退款吗？", a: "7天内无理由退款请联系客服" },
              { q: "免费额度用完怎么办？", a: "可以选择按量付费或升级套餐" },
              { q: "企业版有什么特别？", a: "独立服务器、私有模型、专属客服、SLA保障" },
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

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">开始使用</h2>
          <p className="mb-6">立即注册，体验AI的强大能力</p>
          <div className="flex gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary">免费注册</Button>
            </Link>
            <Link href="/models">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white">
                查看模型
              </Button>
            </Link>
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