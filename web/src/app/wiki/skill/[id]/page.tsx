"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// 模拟技能数据
const skillsData: Record<string, any> = {
  "1": {
    title: "Python数据分析",
    category: "编程",
    level: "中级",
    duration: "20小时",
    description: "使用Python进行数据清洗、分析和可视化的完整技能路径",
    topics: [
      "Python基础语法",
      "NumPy数值计算",
      "Pandas数据处理",
      "Matplotlib数据可视化",
      "真实项目实战"
    ],
    steps: [
      { title: "环境配置", content: "安装Python、Jupyter Notebook和必要库" },
      { title: "数据读取", content: "读取CSV、Excel、JSON等格式文件" },
      { title: "数据清洗", content: "处理缺失值、异常值、数据类型转换" },
      { title: "数据分析", content: "描述性统计、相关性分析、分组聚合" },
      { title: "数据可视化", content: "创建各类图表、交互式Dashboard" }
    ],
    resources: [
      { name: "Python官方文档", url: "https://docs.python.org" },
      { name: "Pandas教程", url: "https://pandas.pydata.org" },
      { name: "Matplotlib示例", url: "https://matplotlib.org" }
    ]
  }
}

export default function SkillPage() {
  const params = useParams()
  const id = params?.id as string || "1"
  const [skill, setSkill] = useState(skillsData[id] || skillsData["1"])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSkill(skillsData[id] || skillsData["1"])
      setLoading(false)
    }, 300)
  }, [id])

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
            <Link href="/wiki" className="text-slate-600 hover:text-slate-900">Wiki板块</Link>
            <Link href="/wiki/skills" className="text-slate-600 hover:text-slate-900">技能百科</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-slate-500 mb-4">
            <Link href="/wiki" className="hover:text-blue-600">Wiki板块</Link>
            <span className="mx-2">/</span>
            <Link href="/wiki/skills" className="hover:text-blue-600">技能百科</Link>
            <span className="mx-2">/</span>
            <span>{skill.title}</span>
          </div>

          {/* Skill Header */}
          <div className="mb-8">
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                {skill.category}
              </span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {skill.level}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3">{skill.title}</h1>
            <p className="text-slate-600 mb-4">{skill.description}</p>
            <div className="flex gap-4 text-sm text-slate-500">
              <span>⏱ {skill.duration}</span>
              <span>📚 {skill.topics.length}个主题</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Button size="lg">开始学习</Button>
            <Button size="lg" variant="outline">⭐ 收藏</Button>
            <Button size="lg" variant="outline">📤 分享</Button>
          </div>

          {/* Topics */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">学习主题</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {skill.topics.map((topic: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 rounded">
                    <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">
                      {i + 1}
                    </span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Steps */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">学习路径</h2>
              <div className="space-y-4">
                {skill.steps.map((step: any, i: number) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="text-sm text-slate-600">{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">相关资源</h2>
              <div className="space-y-2">
                {skill.resources.map((resource: any, i: number) => (
                  <a
                    key={i}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border rounded hover:bg-slate-50"
                  >
                    🔗 {resource.name}
                  </a>
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