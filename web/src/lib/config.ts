// AIWikiClaw 配置
export const config = {
  name: "AIWikiClaw",
  version: "1.0.0",
  description: "AI学习·知识·交易一站式平台",
  
  // Supabase配置
  supabase: {
    url: "https://gamhewkuvvagovmlqvte.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhbWhld2t1dnZnYW92bWxxdnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxOTYwMDAsImV4cCI6MjA1Mzc3MjAwMH0.H9DQA0UgN2xjH1H6R6K0QGcP5qJv7Fq3L8vK3N5iWcI"
  },

  // 平台统计（模拟）
  stats: {
    articles: 1000,
    skills: 100,
    products: 50,
    users: 10000
  },

  // 社交链接
  social: {
    email: "contact@aiwikiclaw.com",
    wechat: "AIWikiClaw",
    website: "www.aiwikiclaw.com"
  }
}