"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

const categories = [
  { value: "agent", label: "智能体开发" },
  { value: "skill", label: "技能定制" },
  { value: "integration", label: "API集成" },
  { value: "training", label: "模型训练" },
  { value: "other", label: "其他" },
]

export default function PublishDemandPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    title: "",
    category: "agent",
    budget: "",
    description: "",
    contact: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 获取当前用户（可选）
      const { data: { user } } = await supabase.auth.getUser()

      // 保存需求到数据库（需要创建demands表，这里暂时用alert）
      alert("需求发布成功！等待开发者接单。")
      router.push("/claw/demands")
    } catch (error: any) {
      alert(error.message || "发布失败")
    } finally {
      setLoading(false)
    }
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
        </div>
      </header>

      {/* Sub Nav */}
      <div className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm">
            <Link href="/claw/market" className="text-slate-600 hover:text-slate-900">智能体市场</Link>
            <Link href="/claw/projects" className="text-slate-600 hover:text-slate-900">项目交易</Link>
            <Link href="/claw/demands" className="text-slate-600 hover:text-slate-900">需求广场</Link>
            <Link href="/claw/publish" className="text-slate-600 hover:text-slate-900">发布需求</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>发布需求</CardTitle>
              <CardDescription>描述你的AI项目需求，等待开发者接单</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">需求标题 *</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                    placeholder="例如：需要开发一个客服智能体"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">需求分类 *</label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">预算范围 *</label>
                    <input
                      type="text"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      required
                      placeholder="例如：5000-10000元"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">详细描述 *</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    required
                    rows={6}
                    placeholder="详细描述你的需求：项目背景、具体功能、预期效果、交付时间等..."
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">联系方式 *</label>
                  <input
                    type="text"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    required
                    placeholder="微信/邮箱/电话"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">💡 发布须知</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• 需求描述越详细，开发者越容易理解和报价</li>
                    <li>• 请确保预算合理，低价可能影响接单质量</li>
                    <li>• 平台不参与交易双方的资金往来</li>
                  </ul>
                </div>

                {loading ? (
                  <Button disabled className="w-full">发布中...</Button>
                ) : (
                  <Button type="submit" className="w-full">发布需求</Button>
                )}
              </form>
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