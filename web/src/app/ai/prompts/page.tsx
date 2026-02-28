"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const prompts = [
  {
    title: "文章总结器",
    content: "请帮我总结以下文章的主要内容，提取关键观点：\n\n【文章内容】\n{{content}}\n\n请用简洁的语言总结，并列出3-5个关键要点。",
    category: "写作辅助",
    uses: 1250,
    rating: 4.8
  },
  {
    title: "周报生成器",
    content: "根据以下工作内容，生成一份专业的周报：\n\n本周工作：\n{{work}}\n\n下周计划：\n{{plan}}\n\n要求：\n1. 简洁专业\n2. 突出成果\n3. 数据量化",
    category: "办公效率",
    uses: 2340,
    rating: 4.9
  },
  {
    title: "小红书种草文案",
    content: "根据以下产品信息，生成一篇小红书种草文案：\n\n产品：{{product}}\n特点：{{features}}\n目标人群：{{audience}}\n\n要求：\n1. 口语化、有感染力\n2. 使用emoji\n3. 加入话题标签\n4. 300字以内",
    category: "营销文案",
    uses: 1890,
    rating: 4.7
  },
  {
    title: "代码审查助手",
    content: "请审查以下代码，指出问题和优化建议：\n\n```{{language}}\n{{code}}\n```\n\n请从以下角度分析：\n1. 性能问题\n2. 安全风险\n3. 代码规范\n4. 可维护性",
    category: "编程开发",
    uses: 980,
    rating: 4.6
  },
  {
    title: "英语翻译校对",
    content: "请校对并润色以下英文翻译，使其更加地道自然：\n\n原文：{{original}}\n翻译：{{translation}}\n\n请检查：\n1. 语法错误\n2. 用词精准度\n3. 表达自然度\n4. 文化适配",
    category: "语言翻译",
    uses: 756,
    rating: 4.5
  },
  {
    title: "面试题解答",
    content: "请详细解答以下面试题：\n\n题目：{{question}}\n\n要求：\n1. 给出思路分析\n2. 提供示例代码\n3. 讲解关键知识点\n4. 扩展相关问题",
    category: "编程开发",
    uses: 1560,
    rating: 4.8
  },
  {
    title: "竞品分析",
    content: "请帮我分析以下竞品：\n\n产品A：{{productA}}\n产品B：{{productB}}\n\n请从以下维度对比：\n1. 功能差异\n2. 定价策略\n3. 用户体验\n4. 优劣势\n5. 建议",
    category: "产品分析",
    uses: 890,
    rating: 4.7
  },
  {
    title: "旅行攻略",
    content: "请生成一份{{days}}天的{{city}}旅行攻略：\n\n偏好：{{preferences}}\n预算：{{budget}}\n\n包括：\n1. 每日行程安排\n2. 推荐景点\n3. 当地美食\n4. 住宿建议\n5. 注意事项",
    category: "生活助手",
    uses: 1230,
    rating: 4.9
  }
]

export default function PromptsPage() {
  const copyPrompt = (content: string) => {
    navigator.clipboard.writeText(content)
    alert("Prompt已复制到剪贴板！")
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
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/ai" className="text-slate-600 hover:text-slate-900">AI板块</Link>
            <Link href="/wiki" className="text-slate-600 hover:text-slate-900">Wiki板块</Link>
            <Link href="/claw" className="text-slate-600 hover:text-slate-900">Claw板块</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">登录</Button>
            </Link>
            <Button size="sm">开始使用</Button>
          </div>
        </div>
      </header>

      {/* Sub Nav */}
      <div className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm">
            <Link href="/ai/encyclopedia" className="text-slate-600 hover:text-slate-900">AI百科</Link>
            <Link href="/ai/tutorials" className="text-slate-600 hover:text-slate-900">教程中心</Link>
            <Link href="/ai/tools" className="text-slate-600 hover:text-slate-900">工具库</Link>
            <Link href="/ai/news" className="text-slate-600 hover:text-slate-900">最新资讯</Link>
            <Link href="/ai/prompts" className="text-blue-600 font-medium">Prompt库</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            💡 <span className="text-blue-600">Prompt</span>库
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            精选高效提示词模板，提升AI工作效率
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {["全部", "写作辅助", "办公效率", "营销文案", "编程开发", "语言翻译", "产品分析", "生活助手"].map((cat, i) => (
              <button key={i} className={`px-4 py-1.5 rounded-full text-sm ${
                i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-100 hover:bg-slate-200'
              }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {prompts.map((prompt, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{prompt.title}</CardTitle>
                    <span className="text-yellow-500">★ {prompt.rating}</span>
                  </div>
                  <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">
                    {prompt.category}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 p-3 rounded text-sm text-slate-600 mb-4 font-mono whitespace-pre-wrap line-clamp-4">
                    {prompt.content}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">📥 {prompt.uses} 次使用</span>
                    <Button size="sm" onClick={() => copyPrompt(prompt.content)}>
                      复制
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">分享你的Prompt</h2>
          <p className="mb-6">优质Prompt可获得收益和声望</p>
          <Button size="lg" variant="secondary">
            提交Prompt
          </Button>
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