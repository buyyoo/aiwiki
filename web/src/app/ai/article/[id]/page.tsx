"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// 模拟文章数据
const articlesData: Record<string, any> = {
  "1": {
    title: "什么是大语言模型？",
    author: "AI研究员",
    date: "2026-02-28",
    category: "技术原理",
    views: 2345,
    content: `
## 什么是大语言模型？

大语言模型（Large Language Model，简称LLM）是一种基于深度学习技术的人工智能模型，它能够理解和生成人类语言。

### 工作原理

大语言模型通过预训练和微调两个阶段来学习语言能力：

1. **预训练阶段**：模型在大规模文本数据上进行训练，学习语言的统计规律
2. **微调阶段**：在特定任务数据上进行微调，提升特定能力

### 主要特点

- **海量知识**：训练数据涵盖互联网上的大量文本
- **泛化能力**：能够处理各种类型的语言任务
- **上下文理解**：理解对话上下文，进行连贯交流
- **零样本学习**：无需专门训练即可完成新任务

### 应用场景

- 智能对话（如ChatGPT）
- 文本生成（文章、代码、邮件等）
- 翻译和润色
- 知识问答
- 代码编写

### 主流模型

- GPT系列（OpenAI）
- Claude系列（Anthropic）
- Gemini（Google）
- 文心一言（百度）
- 通义千问（阿里）

### 未来展望

大语言模型将继续发展，更懂人类、更安全、更高效。
    `,
    related: [
      { title: "ChatGPT使用技巧", url: "/ai/tutorials" },
      { title: "AI工具推荐", url: "/ai/tools" },
      { title: "Prompt工程指南", url: "/ai/prompts" },
    ]
  }
}

export default function ArticlePage() {
  const params = useParams()
  const id = params?.id as string || "1"
  const [article, setArticle] = useState(articlesData[id] || articlesData["1"])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟加载
    setTimeout(() => {
      setArticle(articlesData[id] || articlesData["1"])
      setLoading(false)
    }, 300)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>加载中...</div>
      </div>
    )
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
            <Link href="/ai/encyclopedia" className="text-slate-600 hover:text-slate-900">百科</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-slate-500 mb-4">
            <Link href="/ai" className="hover:text-blue-600">AI板块</Link>
            <span className="mx-2">/</span>
            <Link href="/ai/encyclopedia" className="hover:text-blue-600">百科</Link>
            <span className="mx-2">/</span>
            <span>{article.category}</span>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>👤 {article.author}</span>
              <span>📅 {article.date}</span>
              <span>👁 {article.views} 次阅读</span>
            </div>
          </div>

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="prose max-w-none whitespace-pre-line">
                {article.content}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <Button variant="outline">👍 点赞</Button>
            <Button variant="outline">⭐ 收藏</Button>
            <Button variant="outline">📤 分享</Button>
          </div>

          {/* Related Articles */}
          {article.related && (
            <Card>
              <CardContent className="pt-4">
                <h3 className="font-bold mb-3">相关文章</h3>
                <div className="space-y-2">
                  {article.related.map((item: any, i: number) => (
                    <Link 
                      key={i} 
                      href={item.url}
                      className="block p-2 rounded hover:bg-slate-50"
                    >
                      📄 {item.title}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 AIWikiClaw. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}