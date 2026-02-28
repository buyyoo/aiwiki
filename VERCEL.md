# Vercel 部署指南

## 部署步骤

### 1. 准备工作
- GitHub账户：https://github.com/buyyoo/aiwiki
- Vercel账户：https://vercel.com（用GitHub登录）

### 2. 一键部署

1. 打开 https://vercel.com/new
2. 点击 "Import Project"
3. 选择 "Import Project from GitHub"
4. 搜索并选择 `buyyoo/aiwiki`
5. 点击 "Deploy"

### 3. 配置环境变量

部署后需要设置：

| 变量名 | 值 |
|--------|-----|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://gamhewkuvvagovmlqvte.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhbWhld2t1dnZnYW92bWxxdnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxOTYwMDAsImV4cCI6MjA1Mzc3MjAwMH0.H9DQA0UgN2xjH1H6R6K0QGcP5qJv7Fq3L8vK3N5iWcI` |

设置方法：
1. 进入项目设置 → Environment Variables
2. 逐个添加上述变量
3. 重新部署（Redeploy）

### 4. 绑定域名（可选）

- 购买域名后可在 Vercel 设置 → Domains 添加
- 免费域名需要 DNS 配置

### 5. 访问地址

部署成功后：
- Vercel 默认：`.vercel.app` 后缀
- 自定义域名：`www.aiwikiclaw.com`

---

## 常见问题

**Q: 部署失败怎么办？**
A: 查看 Deploy 日志，常见问题是环境变量未设置

**Q: 国内访问慢？**
A: 可配置 Vercel Edge Network 或使用国内CDN

**Q: 如何更新代码？**
A: 推送到 GitHub 后，Vercel 自动触发部署

---

开始部署请访问：https://vercel.com/new