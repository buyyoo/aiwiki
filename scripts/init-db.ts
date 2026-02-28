import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

// 加载环境变量
dotenv.config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gamhewkuvvagovmlqvte.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const articles = [
  { title: "什么是大语言模型？", description: "详细解释LLM的原理和应用", category: "技术原理", author: "AI研究员", views: 2345 },
  { title: "ChatGPT使用技巧大全", description: "15个高效使用技巧", category: "AI工具", author: "技术专家", views: 4521 },
  { title: "Midjourney完全指南", description: "从入门到精通", category: "AI绘画", author: "设计师", views: 3456 },
  { title: "Python AI编程实战", description: "使用Python开发AI应用", category: "编程", author: "开发者", views: 2876 },
  { title: "AI提示词工程指南", description: "让AI输出更精准", category: "提示词", author: "Prompt专家", views: 1987 },
  { title: "LangChain开发实战", description: "构建AI应用框架", category: "编程", author: "架构师", views: 1654 },
  { title: "Claude API使用教程", description: "接入Claude大模型", category: "API", author: "开发者", views: 1432 },
  { title: "AI产品设计课", description: "AI时代的产品思维", category: "产品", author: "产品经理", views: 1234 },
]

const products = [
  { name: "财务分析智能体", description: "专业财务分析AI助手", price: 99, category: "agent", sales: 234 },
  { name: "ChatGPT账号", description: "官方Plus账号", price: 50, category: "account", sales: 567 },
  { name: "Midjourney教程", description: "从入门到精通", price: 29, category: "course", sales: 345 },
  { name: "文案生成器", description: "小红书爆款文案", price: 19, category: "skill", sales: 432 },
  { name: "代码审查助手", description: "AI代码审查", price: 39, category: "agent", sales: 156 },
  { name: "数据分析模板", description: "Excel数据分析", price: 9, category: "template", sales: 789 },
  { name: "翻译助手", description: "多语言翻译", price: 15, category: "skill", sales: 234 },
  { name: "PPT生成器", description: "AI自动生成PPT", price: 49, category: "agent", sales: 321 },
]

async function initDatabase() {
  console.log("🚀 开始初始化数据库...")
  
  // 插入文章
  console.log("\n📄 插入文章数据...")
  for (const article of articles) {
    try {
      const { error } = await supabase.from("articles").insert({
        ...article,
        status: "published"
      })
      if (error) {
        console.log(`  - ${article.title}: ${error.message}`)
      } else {
        console.log(`  ✅ ${article.title}`)
      }
    } catch (e) {
      console.log(`  ⚠️ ${article.title}: 跳过`)
    }
  }
  
  // 插入商品（需要owner_id，这里用匿名用户ID）
  console.log("\n🛍️ 插入商品数据...")
  const anonId = "00000000-0000-0000-0000-000000000000"
  for (const product of products) {
    try {
      const { error } = await supabase.from("products").insert({
        ...product,
        owner_id: anonId,
        status: "published"
      })
      if (error) {
        console.log(`  - ${product.name}: ${error.message}`)
      } else {
        console.log(`  ✅ ${product.name}`)
      }
    } catch (e) {
      console.log(`  ⚠️ ${product.name}: 跳过`)
    }
  }
  
  console.log("\n✨ 数据库初始化完成！")
}

initDatabase()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("错误:", error)
    process.exit(1)
  })