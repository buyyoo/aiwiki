"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

interface Article {
  id: number
  title: string
  description: string
  category: string
  author: string
  views: number
  created_at: string
}

const localArticles = [
  { id: 1, title: "什么是大语言模型？", description: "详细解释LLM的原理和应用", category: "技术原理", author: "AI研究员", views: 2345 },
  { id: 2, title: "ChatGPT使用技巧大全", description: "15个高效使用技巧", category: "AI工具", author: "技术专家", views: 4521 },
  { id: 3, title: "Midjourney完全指南", description: "从入门到精通", category: "AI绘画", author: "设计师", views: 3456 },
  { id: 4, title: "Python AI编程实战", description: "使用Python开发AI应用", category: "编程", author: "开发者", views: 2876 },
  { id: 5, title: "AI提示词工程指南", description: "让AI输出更精准", category: "提示词", author: " Prompt 专家", views: 1987 },
  { id: 6, title: "LangChain开发实战", description: "构建AI应用框架", category: "编程", author: "架构师", views: 1654 },
  { id: 7, title: "Claude API使用教程", description: "接入Claude大模型", category: "API", author: "开发者", views: 1432 },
  { id: 8, title: "AI产品设计课", description: "AI时代的产品思维", category: "产品", author: "产品经理", views: 1234 },
]

export default function EncyclopediaPage() {
  const [articles, setArticles] = useState<Article[]>(localArticles)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("all")

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      // 尝试从数据库获取
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(20)

      if (error) throw error
      
      if (data && data.length > 0) {
        setArticles(data)
      }
      // 如果数据库为空，使用本地数据
    } catch (error) {
      console.log("使用本地数据")
    } finally {
      setLoading(false)
    }
  }

  const categories = ["全部", "技术原理", "AI工具", "AI绘画", "编程", "提示词", "API", "产品"]
  const filteredArticles = category === "all" 
    ? articles 
    : articles.filter(a => a.category === category)

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

      {/* Sub Nav */}
      <div className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm">
            <span className="text-blue-600 font-medium">AI百科</span>
            <Link href="/ai/tutorials" className="text-slate-600 hover:text-slate-900">教程中心</Link>
            <Link href="/ai/tools" className="text-slate-600 hover:text-slate-900">工具库</Link>
            <Link href="/ai/news" className="text-slate-600 hover:text-slate-900">最新资讯</Link>
            <Link href="/ai/prompts" className="text-slate-600 hover:text-slate-900">Prompt库</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            📚 <span className="text-blue-600">AI百科</span>
          </h1>
          <p className="text-slate-600">最全面的AI知识库</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setCategory(cat === "全部" ? "all" : cat)}
                className={`px-4 py-1.5 rounded-full text-sm ${
                  (category === "all" && cat === "全部") || category === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/ai/article/${article.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="pt-4">
                      <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded inline-block mb-2">
                        {article.category}
                      </div>
                      <h3 className="font-medium mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-slate-500 mb-3 line-clamp-2">{article.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>👤 {article.author}</span>
                        <span>👁 {article.views}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
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