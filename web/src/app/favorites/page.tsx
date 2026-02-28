"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

// 模拟收藏数据
const mockFavorites = [
  { id: 1, type: "article", title: "什么是大语言模型？", date: "2026-02-28" },
  { id: 2, type: "product", title: "财务分析智能体", date: "2026-02-27" },
  { id: 3, type: "prompt", title: "周报生成器", date: "2026-02-26" },
  { id: 4, type: "skill", title: "React开发技能", date: "2026-02-25" },
]

export default function FavoritesPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [favorites, setFavorites] = useState(mockFavorites)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(f => f.id !== id))
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "article": return "📄"
      case "product": return "🛍️"
      case "prompt": return "💡"
      case "skill": return "📚"
      default: return "⭐"
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>加载中...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="mb-4">请先登录查看收藏</p>
            <Link href="/login">
              <Button>去登录</Button>
            </Link>
          </CardContent>
        </Card>
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
          <Link href="/profile">
            <Button variant="ghost" size="sm">个人中心</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">我的收藏</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b">
          {["全部", "文章", "商品", "Prompt", "技能"].map((tab, i) => (
            <button
              key={i}
              className={`pb-2 px-1 ${i === 0 ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Favorites List */}
        <div className="space-y-3">
          {favorites.map((item) => (
            <Card key={item.id}>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-slate-500">{item.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">查看</Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeFavorite(item.id)}
                    >
                      删除
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {favorites.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center text-slate-500">
              暂无收藏内容
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