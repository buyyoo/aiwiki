import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center">
        <div className="text-9xl mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4">页面未找到</h1>
        <p className="text-slate-600 mb-8">
          抱歉，您访问的页面不存在
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button>返回首页</Button>
          </Link>
          <Link href="/ai">
            <Button variant="outline">AI板块</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}