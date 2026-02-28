"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// 模拟商品数据
const productsData: Record<string, any> = {
  "1": {
    name: "财务分析智能体",
    category: "agent",
    price: 99,
    sales: 234,
    rating: 4.8,
    author: "AI专家团队",
    description: "专业的财务分析AI助手，能够自动分析财务报表、数据可视化、风险评估。\n\n✅ 自动提取关键财务指标\n✅ 生成专业分析报告\n✅ 多维度数据可视化\n✅ 风险预警提示",
    features: [
      "财务报表自动分析",
      "数据可视化图表",
      "智能风险评估",
      "投资建议生成",
      "永久更新维护"
    ],
    reviews: [
      { user: "张**", content: "很好用，帮我节省了大量时间", rating: 5, date: "2026-02-28" },
      { user: "李**", content: "分析很专业，值得购买", rating: 4, date: "2026-02-27" }
    ]
  }
}

export default function ProductPage() {
  const params = useParams()
  const id = params?.id as string || "1"
  const [product, setProduct] = useState(productsData[id] || productsData["1"])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setProduct(productsData[id] || productsData["1"])
      setLoading(false)
    }, 300)
  }, [id])

  const handleBuy = () => {
    alert("加入购物车成功！")
  }

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
          <div className="flex gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="sm">🛒 购物车</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="sm">登录</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-slate-500 mb-6">
            <Link href="/claw" className="hover:text-blue-600">Claw板块</Link>
            <span className="mx-2">/</span>
            <Link href="/claw/market" className="hover:text-blue-600">智能体市场</Link>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </div>

          {/* Product Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left - Image */}
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="text-9xl">🤖</div>
            </div>

            {/* Right - Details */}
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-yellow-500">★ {product.rating}</span>
                <span className="text-slate-500">销量: {product.sales}</span>
                <span className="text-slate-500">作者: {product.author}</span>
              </div>

              <div className="text-3xl font-bold text-blue-600 mb-6">
                ¥{product.price}
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-slate-600 whitespace-pre-line">{product.description}</p>
              </div>

              <div className="flex gap-4 mb-6">
                <Button size="lg" onClick={handleBuy}>立即购买</Button>
                <Button size="lg" variant="outline">加入购物车</Button>
              </div>

              <div className="text-sm text-slate-500">
                <p>📞 客服: contact@aiwikiclaw.com</p>
                <p>🔒 安全保障 · 🏪 官方 sale </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">功能特点</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {product.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">用户评价</h2>
              <div className="space-y-4">
                {product.reviews.map((review: any, i: number) => (
                  <div key={i} className="border-b pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{review.user}</span>
                      <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                    </div>
                    <p className="text-slate-600">{review.content}</p>
                    <span className="text-xs text-slate-400">{review.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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