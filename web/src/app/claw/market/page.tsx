"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  sales: number
  status: string
  created_at: string
}

const localProducts = [
  { id: 1, name: "财务分析智能体", description: "专业财务分析AI助手", price: 99, category: "agent", sales: 234, status: "published" },
  { id: 2, name: "ChatGPT账号", description: "官方Plus账号", price: 50, category: "account", sales: 567, status: "published" },
  { id: 3, name: "Midjourney教程", description: "从入门到精通", price: 29, category: "course", sales: 345, status: "published" },
  { id: 4, name: "文案生成器", description: "小红书爆款文案", price: 19, category: "skill", sales: 432, status: "published" },
  { id: 5, name: "代码审查助手", description: "AI代码审查", price: 39, category: "agent", sales: 156, status: "published" },
  { id: 6, name: "数据分析模板", description: "Excel数据分析", price: 9, category: "template", sales: 789, status: "published" },
  { id: 7, name: "翻译助手", description: "多语言翻译", price: 15, category: "skill", sales: 234, status: "published" },
  { id: 8, name: "PPT生成器", description: "AI自动生成PPT", price: 49, category: "agent", sales: 321, status: "published" },
]

export default function MarketPage() {
  const [products, setProducts] = useState<Product[]>(localProducts)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("latest")

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("status", "published")
        .order("created_at", { ascending: false })
        .limit(20)

      if (error) throw error
      
      if (data && data.length > 0) {
        setProducts(data)
      }
    } catch (error) {
      console.log("使用本地数据")
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    { value: "all", label: "全部" },
    { value: "agent", label: "智能体" },
    { value: "account", label: "账号" },
    { value: "course", label: "课程" },
    { value: "skill", label: "技能" },
    { value: "template", label: "模板" },
  ]

  const getCategoryLabel = (value: string) => categories.find(c => c.value === value)?.label || value

  const filteredProducts = products
    .filter(p => category === "all" || p.category === category)
    .sort((a, b) => {
      if (sort === "sales") return b.sales - a.sales
      if (sort === "price-low") return a.price - b.price
      if (sort === "price-high") return b.price - a.price
      return 0
    })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🦞</span>
            <span className="text-xl font-bold">AIWikiClaw</span>
          </Link>
          <div className="flex gap-2">
            <Link href="/cart">
              <Button variant="ghost" size="sm">🛒</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="sm">登录</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Sub Nav */}
      <div className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm">
            <span className="text-blue-600 font-medium">智能体市场</span>
            <Link href="/claw/projects" className="text-slate-600 hover:text-slate-900">项目交易</Link>
            <Link href="/claw/demands" className="text-slate-600 hover:text-slate-900">需求广场</Link>
            <Link href="/claw/publish" className="text-slate-600 hover:text-slate-900">发布商品</Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            🛒 <span className="text-orange-600">智能体</span>市场
          </h1>
          <p className="text-slate-600">交易AI智能体、技能和模板</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-1.5 rounded-full text-sm ${
                  category === cat.value
                    ? 'bg-orange-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-1.5 border rounded text-sm"
            >
              <option value="latest">最新</option>
              <option value="sales">销量</option>
              <option value="price-low">价格低→高</option>
              <option value="price-high">价格高→低</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-4 border-orange-600 border-t-transparent rounded-full mx-auto"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/claw/product/${product.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="pt-4">
                      <div className="text-4xl mb-3 text-center">🤖</div>
                      <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded inline-block mb-2">
                        {getCategoryLabel(product.category)}
                      </div>
                      <h3 className="font-medium mb-2">{product.name}</h3>
                      <p className="text-sm text-slate-500 mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-orange-600">¥{product.price}</span>
                        <span className="text-xs text-slate-400">{product.sales}人购买</span>
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