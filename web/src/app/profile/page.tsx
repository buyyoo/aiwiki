"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

interface Profile {
  id: string
  email: string
  nickname?: string
  role: string
  created_at: string
}

export default function ProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push("/login")
        return
      }

      // 获取profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()

      setProfile(profile)

      // 获取用户的商品
      const { data: products } = await supabase
        .from("products")
        .select("*")
        .eq("owner_id", user.id)
        .order("created_at", { ascending: false })

      setProducts(products || [])
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
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
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/ai" className="text-slate-600 hover:text-slate-900">AI板块</Link>
            <Link href="/wiki" className="text-slate-600 hover:text-slate-900">Wiki板块</Link>
            <Link href="/claw" className="text-slate-600 hover:text-slate-900">Claw板块</Link>
          </nav>
          <div className="flex items-center gap-2">
            {profile ? (
              <>
                <Link href="/profile">
                  <Button variant="ghost" size="sm">个人中心</Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>退出</Button>
              </>
            ) : (
              <Link href="/login">
                <Button variant="ghost" size="sm">登录</Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>个人信息</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-slate-500">昵称</div>
                  <div className="font-medium">{profile?.nickname || "未设置"}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">邮箱</div>
                  <div className="font-medium">{profile?.email || "未绑定"}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">角色</div>
                  <div className="font-medium">{profile?.role || "user"}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">注册时间</div>
                  <div className="font-medium">
                    {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : "未知"}
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  编辑资料
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>我的数据</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{products.length}</div>
                  <div className="text-sm text-slate-500">商品数量</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-slate-500">订单数量</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">0</div>
                  <div className="text-sm text-slate-500">文章数量</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-sm text-slate-500">收入</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>快速操作</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/claw/publish">
                <Button className="w-full">发布商品</Button>
              </Link>
              <Link href="/ai/publish">
                <Button variant="outline" className="w-full">发布文章</Button>
              </Link>
              <Link href="/orders">
                <Button variant="outline" className="w-full">我的订单</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* My Products */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">我的商品</h2>
          {products.length > 0 ? (
            <div className="grid md:grid-cols-4 gap-4">
              {products.map((product: any) => (
                <Card key={product.id}>
                  <CardContent className="pt-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      ¥{product.price} | 销量: {product.sales}
                    </p>
                    <div className="mt-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        product.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-slate-100'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center text-slate-500">
                暂无商品，快去发布吧！
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