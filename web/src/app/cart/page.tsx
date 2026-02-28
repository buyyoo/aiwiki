"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// 模拟购物车数据
const mockCart = [
  { id: 1, name: "财务分析智能体", price: 99, quantity: 1, image: "🤖" },
]

export default function CartPage() {
  const [cart, setCart] = useState(mockCart)

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ))
  }

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

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
        <h1 className="text-2xl font-bold mb-6">🛒 购物车</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            {cart.length > 0 ? (
              <Card>
                <CardContent className="pt-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-4 border-b">
                      <span className="text-4xl">{item.image}</span>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-blue-600 font-bold">¥{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeItem(item.id)}
                      >
                        🗑️
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-slate-500 mb-4">购物车是空的</p>
                  <Link href="/claw/market">
                    <Button>去选购</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>订单总结</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>商品数量</span>
                  <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>商品金额</span>
                  <span>¥{total}</span>
                </div>
                <div className="flex justify-between">
                  <span>优惠</span>
                  <span className="text-green-500">-¥0</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>合计</span>
                    <span className="text-blue-600">¥{total}</span>
                  </div>
                </div>
                <Button className="w-full" size="lg" disabled={cart.length === 0}>
                  结算
                </Button>
              </CardContent>
            </Card>
          </div>
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