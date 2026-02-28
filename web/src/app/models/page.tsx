"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// 模型服务商数据
const modelProviders = [
  {
    id: "siliconflow",
    name: "硅基流动 (SiliconFlow)",
    logo: "🌊",
    description: "国内领先的AI模型云服务平台",
    apiBase: "https://api.siliconflow.cn/v1",
    models: [
      { id: "deepseek-v3", name: "DeepSeek V3", type: "通用", context: "64K", price: "¥2/M", features: ["综合能力强", "中文优化"] },
      { id: "deepseek-r1", name: "DeepSeek R1", type: "推理", context: "64K", price: "¥4/M", features: ["深度推理", "数学逻辑"] },
      { id: "qwen-72b", name: "Qwen2.5-72B", type: "多模态", context: "32K", price: "¥6/M", features: ["代码生成", "图像理解"] },
      { id: "qwen-coder", name: "Qwen2.5-Coder", type: "代码", context: "32K", price: "¥3/M", features: ["编程专用", "效果优秀"] },
      { id: "yi-lightning", name: "Yi Lightning", type: "通用", context: "200K", price: "¥8/M", features: ["超长上下文", "快速响应"] },
    ]
  },
  {
    id: "openai",
    name: "OpenAI",
    logo: "🤖",
    description: "全球领先的AI研究实验室",
    apiBase: "https://api.openai.com/v1",
    models: [
      { id: "gpt-4o", name: "GPT-4o", type: "多模态", context: "128K", price: "$15/M", features: ["全能模型", "图像理解"] },
      { id: "gpt-4-turbo", name: "GPT-4 Turbo", type: "通用", context: "128K", price: "$10/M", features: ["高速响应", "函数调用"] },
      { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", type: "通用", context: "16K", price: "$2/M", features: ["快速便宜", "适用广泛"] },
    ]
  },
  {
    id: "anthropic",
    name: "Anthropic",
    logo: "🧠",
    description: "专注于AI安全和可控性",
    apiBase: "https://api.anthropic.com/v1",
    models: [
      { id: "claude-4-opus", name: "Claude 4 Opus", type: "通用", context: "200K", price: "$75/M", features: ["顶级能力", "长文本"] },
      { id: "claude-4-sonnet", name: "Claude 4 Sonnet", type: "通用", context: "200K", price: "$15/M", features: ["性价比高", "编程优秀"] },
      { id: "claude-3-5", name: "Claude 3.5 Sonnet", type: "通用", context: "200K", price: "$15/M", features: ["稳定可靠"] },
    ]
  },
  {
    id: "google",
    name: "Google AI",
    logo: "🔍",
    description: "Google Gemini系列模型",
    apiBase: "https://generativelanguage.googleapis.com/v1",
    models: [
      { id: "gemini-2-flash", name: "Gemini 2.0 Flash", type: "多模态", context: "1M", price: "Free", features: ["超长上下文", "快速"] },
      { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro", type: "多模态", context: "2M", price: "$7/M", features: ["长上下文", "多模态"] },
      { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash", type: "多模态", context: "1M", price: "Free", features: ["免费使用"] },
    ]
  },
  {
    id: "moonshot",
    name: "月之暗面 (Moonshot)",
    logo: "🌙",
    description: "国产大模型领军者",
    apiBase: "https://api.moonshot.cn/v1",
    models: [
      { id: "kimi-k2", name: "Kimi K2", type: "通用", context: "128K", price: "¥12/M", features: ["超长处理", "功能强大"] },
      { id: "kimi-k1.5", name: "Kimi K1.5", type: "推理", context: "128K", price: "¥15/M", features: ["深度思考", "多模态"] },
    ]
  },
  {
    id: "zhipuai",
    name: "智谱AI",
    logo: "📊",
    description: "清华大学技术成果转化",
    apiBase: "https://open.bigmodel.cn/api/paas/v4",
    models: [
      { id: "glm-4-plus", name: "GLM-4 Plus", type: "通用", context: "128K", price: "¥10/M", features: ["中文优化", "免费额度"] },
      { id: "glm-4-flash", name: "GLM-4 Flash", type: "通用", context: "128K", price: "Free", features: ["完全免费", "快速响应"] },
      { id: "glm-4", name: "GLM-4", type: "通用", context: "128K", price: "¥8/M", features: ["稳定版本"] },
    ]
  },
  {
    id: "aliyun",
    name: "阿里云 (Qwen)",
    logo: "☁️",
    description: "阿里巴巴通义千问",
    apiBase: "https://dashscope.aliyuncs.com/api/v1",
    models: [
      { id: "qwen-turbo", name: "Qwen Turbo", type: "通用", context: "100K", price: "¥4/M", features: ["快速响应"] },
      { id: "qwen-plus", name: "Qwen Plus", type: "通用", context: "30K", price: "¥20/M", features: ["能力更强"] },
      { id: "qwen-max", name: "Qwen Max", type: "旗舰", context: "8K", price: "¥100/M", features: ["最强能力"] },
      { id: "qwen-coder-plus", name: "Qwen Coder Plus", type: "代码", context: "32K", price: "¥15/M", features: ["编程专用"] },
    ]
  },
  {
    id: "baidu",
    name: "百度智能云 (ERNIE)",
    logo: "🔷",
    description: "百度文心一言",
    apiBase: "https://qianfan.baidubce.com/v2",
    models: [
      { id: "ernie-4-8k", name: "ERNIE 4.0", type: "旗舰", context: "8K", price: "¥120/M", features: ["中文顶尖"] },
      { id: "ernie-3-5", name: "ERNIE 3.5", type: "通用", context: "16K", price: "¥12/M", features: ["免费调用"] },
    ]
  },
]

export default function ModelsPage() {
  const [selectedProvider, setSelectedProvider] = useState(modelProviders[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [showApiKey, setShowApiKey] = useState<string | null>(null)

  const filteredProviders = modelProviders.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.models.some(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()))
  )

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
            <Link href="/models" className="text-blue-600 font-medium">模型广场</Link>
            <Link href="/claw" className="text-slate-600 hover:text-slate-900">Claw板块</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            🤖 <span className="text-blue-600">模型</span>广场
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            汇聚全球顶尖AI大模型，一站式对比API价格和功能
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索模型或服务商..."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
              <Card 
                key={provider.id} 
                className={`cursor-pointer transition-all ${
                  selectedProvider.id === provider.id ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() => setSelectedProvider(provider)}
              >
                <CardContent className="pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{provider.logo}</span>
                    <div>
                      <h3 className="font-bold">{provider.name}</h3>
                      <p className="text-xs text-slate-500">{provider.models.length}个模型</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">{provider.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Provider Models */}
      <section className="py-8 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">
            {selectedProvider.logo} {selectedProvider.name} 模型列表
          </h2>
          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">模型名称</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">类型</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">上下文</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">价格</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">特点</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">操作</th>
                </tr>
              </thead>
              <tbody>
                {selectedProvider.models.map((model) => (
                  <tr key={model.id} className="border-t">
                    <td className="px-4 py-3 font-medium">{model.name}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {model.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">{model.context}</td>
                    <td className="px-4 py-3 font-bold text-green-600">{model.price}</td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {model.features.join(" · ")}
                    </td>
                    <td className="px-4 py-3">
                      <Button size="sm" variant="outline">使用</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* API Details */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>API接入信息</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-1">API Base URL</div>
                  <div className="bg-slate-100 p-2 rounded text-sm font-mono">
                    {selectedProvider.apiBase}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">接口示例</div>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded text-sm overflow-x-auto">
{`curl ${selectedProvider.apiBase}/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${selectedProvider.models[0].id}",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
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