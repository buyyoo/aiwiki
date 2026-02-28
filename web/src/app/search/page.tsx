"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

// 模拟搜索结果
const mockResults = {
  query: "",
  results: [
    { type: "article", title: "什么是大语言模型？", url: "/ai/encyclopedia", desc: "详细解释大语言模型的原理和应用...", matches: 5 },
    { type: "article", title: "ChatGPT使用技巧大全", url: "/ai/tutorials", desc: "15个ChatGPT高效使用技巧...", matches: 3 },
    { type: "product", title: "财务分析智能体", url: "/claw/market", desc: "专业的财务分析AI助手...", matches: 2 },
    { type: "skill", title: "Python数据分析", url: "/wiki/skills", desc: "使用Python进行数据分析的完整教程...", matches: 2 },
    { type: "prompt", title: "周报生成器", url: "/ai/prompts", desc: "自动生成专业周报的Prompt模板...", matches: 1 },
  ]
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState(mockResults)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (query) {
      setLoading(true)
      // 模拟搜索
      setTimeout(() => {
        setResults({
          query,
          results: mockResults.results.filter(r => 
            r.title.toLowerCase().includes(query.toLowerCase()) ||
            r.desc.toLowerCase().includes(query.toLowerCase())
          )
        })
        setLoading(false)
      }, 500)
    }
  }, [query])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "article": return "📄"
      case "product": return "🛍️"
      case "skill": return "📚"
      case "prompt": return "💡"
      default: return "🔍"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "article": return "文章"
      case "product": return "商品"
      case "skill": return "技能"
      case "prompt": return "Prompt"
      default: return "内容"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🦞</span>
            <span className="text-xl font-bold">AIWikiClaw</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Form */}
        <form action="/search" className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                name="q"
                defaultValue={query}
                type="text"
                placeholder="搜索AI知识、技能、商品..."
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            </div>
            <Button type="submit">搜索</Button>
          </div>
        </form>

        {/* Results */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">搜索中...</p>
          </div>
        ) : query ? (
          <div>
            <p className="text-slate-600 mb-4">
              找到 <span className="font-bold text-blue-600">{results.results.length}</span> 个结果
              关于 "<span className="font-medium">{query}</span>"
            </p>

            <div className="space-y-4">
              {results.results.map((result, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-4">
                    <Link href={result.url}>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{getTypeIcon(result.type)}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-lg text-blue-600 hover:underline">
                              {result.title}
                            </h3>
                            <span className="text-xs bg-slate-100 px-2 py-0.5 rounded">
                              {getTypeLabel(result.type)}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600">{result.desc}</p>
                          <span className="text-xs text-slate-400 mt-1 inline-block">
                            匹配度: {result.matches}处
                          </span>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {results.results.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-slate-500 mb-4">未找到相关结果</p>
                  <p className="text-sm text-slate-400">试试其他关键词</p>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-slate-500">请输入搜索关键词</p>
            </CardContent>
          </Card>
        )}
      </div>

      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 AIWikiClaw. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}