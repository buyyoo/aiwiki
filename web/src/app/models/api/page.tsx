"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// API文档数据
const apiDocs = {
  siliconflow: {
    name: "硅基流动",
    baseUrl: "https://api.siliconflow.cn/v1",
    auth: "Bearer YOUR_API_KEY",
    models: [
      {
        id: "deepseek-v3",
        name: "DeepSeek V3",
        endpoint: "/chat/completions",
        method: "POST",
        params: {
          model: "deepseek-ai/DeepSeek-V3",
          messages: [{ role: "user", content: "Hello" }],
          temperature: 0.7,
          max_tokens: 2048
        },
        example: {
          request: `curl https://api.siliconflow.cn/v1/chat/completions \\
  -H "Authorization: Bearer sk-xxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-ai/DeepSeek-V3",
    "messages": [{"role": "user", "content": "Hello"}],
    "temperature": 0.7
  }'`,
          response: `{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "created": 1700000000,
  "model": "deepseek-ai/DeepSeek-V3",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "Hello! How can I help you?"
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 20,
    "total_tokens": 30
  }
}`
        }
      },
      {
        id: "qwen-coder",
        name: "Qwen2.5-Coder",
        endpoint: "/chat/completions",
        method: "POST",
        params: {
          model: "qwen/Qwen2.5-Coder-32B-Instruct",
          messages: [{ role: "user", content: "Write a hello world in Python" }],
        }
      }
    ]
  },
  openai: {
    name: "OpenAI",
    baseUrl: "https://api.openai.com/v1",
    auth: "Bearer YOUR_OPENAI_API_KEY",
    models: [
      {
        id: "gpt-4o",
        name: "GPT-4o",
        endpoint: "/chat/completions",
        method: "POST",
        params: {
          model: "gpt-4o",
          messages: [{ role: "user", content: "Hello" }],
          max_tokens: 1000
        },
        pricing: {
          input: "$15.00/M tokens",
          output: "$60.00/M tokens"
        }
      }
    ]
  }
}

export default function ApiDocsPage() {
  const [selectedProvider, setSelectedProvider] = useState("siliconflow")
  const [selectedModel, setSelectedModel] = useState("deepseek-v3")
  const [activeTab, setActiveTab] = useState("request")

  const provider = apiDocs[selectedProvider as keyof typeof apiDocs]
  const model = provider?.models.find(m => m.id === selectedModel)

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
            <Link href="/models">模型广场</Link>
            <Link href="/models/api" className="text-blue-600 font-medium">API文档</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">📚 API 接口文档</h1>

        {/* Provider Selection */}
        <div className="flex gap-4 mb-6">
          {Object.entries(apiDocs).map(([key, p]) => (
            <Button
              key={key}
              variant={selectedProvider === key ? "default" : "outline"}
              onClick={() => {
                setSelectedProvider(key)
                setSelectedModel(p.models[0].id)
              }}
            >
              {p.name}
            </Button>
          ))}
        </div>

        {provider && model && (
          <div className="space-y-6">
            {/* Base Info */}
            <Card>
              <CardHeader>
                <CardTitle>基本配置</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-1">Base URL</div>
                  <code className="bg-slate-900 text-slate-100 px-3 py-2 rounded block">
                    {provider.baseUrl}
                  </code>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">认证方式</div>
                  <code className="bg-slate-900 text-slate-100 px-3 py-2 rounded block">
                    {provider.auth}
                  </code>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">Endpoint</div>
                  <code className="bg-slate-900 text-slate-100 px-3 py-2 rounded block">
                    {model.endpoint}
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Model Selection */}
            <Card>
              <CardHeader>
                <CardTitle>选择模型</CardTitle>
              </CardHeader>
              <CardContent>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                >
                  {provider.models.map(m => (
                    <option key={m.id} value={m.id}>{m.name}</option>
                  ))}
                </select>
              </CardContent>
            </Card>

            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              {["请求示例", "参数说明", "响应格式"].map((tab, i) => (
                <Button
                  key={i}
                  variant={activeTab === tab ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>

            {/* Request Example */}
            {activeTab === "请求示例" && (
              <Card>
                <CardHeader>
                  <CardTitle>请求示例 - {model.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded overflow-x-auto text-sm">
                    {model.example?.request || `curl ${provider.baseUrl}${model.endpoint} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(model.params, null, 2)}'`}
                  </pre>
                </CardContent>
              </Card>
            )}

            {/* Parameters */}
            {activeTab === "参数说明" && (
              <Card>
                <CardHeader>
                  <CardTitle>参数说明</CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">参数</th>
                        <th className="text-left py-2">类型</th>
                        <th className="text-left py-2">必填</th>
                        <th className="text-left py-2">说明</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(model.params).map(([key, value]) => (
                        <tr key={key} className="border-b">
                          <td className="py-2 font-mono">{key}</td>
                          <td className="py-2 text-slate-500">{typeof value}</td>
                          <td className="py-2">{key === "model" ? "✓" : "-"}</td>
                          <td className="py-2 text-slate-500">-</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            )}

            {/* Response */}
            {activeTab === "响应格式" && (
              <Card>
                <CardHeader>
                  <CardTitle>响应示例</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded overflow-x-auto text-sm">
                    {model.example?.response || `{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "created": 1700000000,
  "model": "${model.id}",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "回复内容"
    }
  }]
}`}
                  </pre>
                </CardContent>
              </Card>
            )}
          </div>
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