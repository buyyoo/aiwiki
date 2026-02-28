"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AuthCallback() {
  const router = useRouter()
  const [status, setStatus] = useState("处理中...")

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { error } = await supabase.auth.getSession()
        
        if (error) {
          setStatus("认证失败: " + error.message)
          return
        }

        setStatus("登录成功，正在跳转...")
        
        // 延迟跳转让用户看到成功消息
        setTimeout(() => {
          router.push("/")
          router.refresh()
        }, 1500)
      } catch (err) {
        setStatus("认证过程出错")
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">⏳</div>
        <h2 className="text-xl font-semibold">{status}</h2>
      </div>
    </div>
  )
}