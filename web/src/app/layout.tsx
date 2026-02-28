import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIWikiClaw - AI学习·知识·交易一站式平台",
  description: "整合AI智能全方面内容、Wiki技能知识库、Claw智能体交易市场",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}