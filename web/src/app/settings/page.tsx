"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

export default function SettingsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [form, setForm] = useState({
    nickname: "",
    bio: "",
    website: "",
    github: "",
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      
      // 获取用户资料
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single()
        
        if (profile) {
          setForm({
            nickname: profile.nickname || "",
            bio: profile.bio || "",
            website: profile.website || "",
            github: profile.github || "",
          })
        }
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      if (!user) {
        alert("请先登录")
        return
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          nickname: form.nickname,
          bio: form.bio,
          website: form.website,
          github: form.github,
        })
        .eq("id", user.id)

      if (error) throw error
      alert("保存成功！")
    } catch (error: any) {
      alert(error.message || "保存失败")
    } finally {
      setSaving(false)
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
            <p className="mb-4">请先登录</p>
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
            <Button variant="ghost" size="sm">返回</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">设置</h1>

          {/* Profile Settings */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>个人资料</CardTitle>
              <CardDescription>修改您的个人信息和简介</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">昵称</label>
                <input
                  type="text"
                  value={form.nickname}
                  onChange={(e) => setForm({ ...form, nickname: e.target.value })}
                  placeholder="请输入昵称"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">个人简介</label>
                <textarea
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  placeholder="介绍一下自己..."
                  rows={3}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">个人网站</label>
                <input
                  type="url"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">GitHub</label>
                <input
                  type="text"
                  value={form.github}
                  onChange={(e) => setForm({ ...form, github: e.target.value })}
                  placeholder="username"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "保存中..." : "保存修改"}
              </Button>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>账号设置</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <div className="font-medium">邮箱</div>
                  <div className="text-sm text-slate-500">{user.email}</div>
                </div>
                <Button variant="outline" size="sm">修改</Button>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <div className="font-medium">密码</div>
                  <div className="text-sm text-slate-500">••••••••</div>
                </div>
                <Button variant="outline" size="sm">修改</Button>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium">两步验证</div>
                  <div className="text-sm text-slate-500">未开启</div>
                </div>
                <Button variant="outline" size="sm">开启</Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>通知设置</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "邮件通知", desc: "接收订单、评论等邮件通知" },
                { label: "消息推送", desc: "接收站内消息通知" },
                { label: "每周简报", desc: "接收每周AI资讯汇总" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-slate-500">{item.desc}</div>
                  </div>
                  <button className="w-12 h-6 bg-blue-600 rounded-full relative">
                    <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                  </button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">危险区域</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="destructive">注销账号</Button>
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