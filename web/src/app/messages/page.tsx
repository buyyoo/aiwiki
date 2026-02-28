"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

// 模拟消息数据
const mockMessages = [
  { 
    id: 1, 
    type: "system", 
    title: "欢迎加入AIWikiClaw", 
    content: "感谢您注册成为会员，开始探索AI的奇妙世界吧！",
    date: "2026-02-28 10:00",
    read: false 
  },
  { 
    id: 2, 
    type: "order", 
    title: "订单已完成", 
    content: "您的订单「财务分析智能体」已完成购买",
    date: "2026-02-28 09:30",
    read: true 
  },
  { 
    id: 3, 
    type: "comment", 
    title: "新评论通知", 
    content: "用户「张三」评论了您的文章",
    date: "2026-02-27 15:20",
    read: true 
  },
  { 
    id: 4, 
    type: "system", 
    title: "系统升级通知", 
    content: "AIWikiClaw将于今晚22:00-23:00进行系统维护",
    date: "2026-02-27 12:00",
    read: true 
  },
]

export default function MessagesPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [messages, setMessages] = useState(mockMessages)
  const [filter, setFilter] = useState("all")

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

  const markAsRead = (id: number) => {
    setMessages(messages.map(m => 
      m.id === id ? { ...m, read: true } : m
    ))
  }

  const markAllAsRead = () => {
    setMessages(messages.map(m => ({ ...m, read: true })))
  }

  const deleteMessage = (id: number) => {
    setMessages(messages.filter(m => m.id !== id))
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "system": return "🔔"
      case "order": return "📦"
      case "comment": return "💬"
      case "follow": return "👤"
      default: return "📨"
    }
  }

  const filteredMessages = filter === "all" 
    ? messages 
    : filter === "unread" 
      ? messages.filter(m => !m.read)
      : messages.filter(m => m.type === filter)

  const unreadCount = messages.filter(m => !m.read).length

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
            <p className="mb-4">请先登录查看消息</p>
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
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            消息通知 
            {unreadCount > 0 && (
              <span className="ml-2 text-sm bg-red-500 text-white px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </h1>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              全部已读
            </Button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { value: "all", label: "全部" },
            { value: "unread", label: "未读" },
            { value: "system", label: "系统" },
            { value: "order", label: "订单" },
            { value: "comment", label: "评论" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-1.5 rounded-full text-sm ${
                filter === tab.value 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Messages List */}
        <div className="space-y-3">
          {filteredMessages.map((message) => (
            <Card 
              key={message.id} 
              className={message.read ? "opacity-60" : ""}
            >
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{getTypeIcon(message.type)}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{message.title}</span>
                      {!message.read && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-1">{message.content}</p>
                    <span className="text-xs text-slate-400">{message.date}</span>
                  </div>
                  <div className="flex gap-2">
                    {!message.read && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => markAsRead(message.id)}
                      >
                        已读
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => deleteMessage(message.id)}
                    >
                      删除
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMessages.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center text-slate-500">
              暂无消息
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